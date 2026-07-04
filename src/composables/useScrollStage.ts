import {
    computed,
    inject,
    onBeforeUnmount,
    onMounted,
    provide,
    reactive,
    readonly,
} from 'vue';

export interface StageSection {
    id: string;
    label: string;
    slides: number;
}

interface StageState {
    sections: StageSection[];
    activeSection: number;
    activeSlide: number[];
    isAnimating: boolean;
}

const STAGE_KEY = Symbol('portfolio-scroll-stage');
const STAGE_TRANSITION_MS = 900;

/**
 * Owns the scroll-jacking state for the whole page: which section is active
 * (vertical axis) and which slide is active within that section (horizontal
 * axis). Call this once, from the top-level layout component.
 */
export function provideScrollStage(sections: StageSection[]) {
    const state = reactive<StageState>({
        sections,
        activeSection: 0,
        activeSlide: sections.map(() => 0),
        isAnimating: false,
    });

    const reducedMotion =
        typeof window !== 'undefined' && window.matchMedia
            ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
            : false;

    let unlockTimer: number | undefined;

    function lock(duration = reducedMotion ? 50 : STAGE_TRANSITION_MS) {
        state.isAnimating = true;
        window.clearTimeout(unlockTimer);
        unlockTimer = window.setTimeout(() => {
            state.isAnimating = false;
        }, duration);
    }

    function navigate(dir: 1 | -1) {
        if (state.isAnimating) {
            return;
        }

        const secIndex = state.activeSection;
        const sec = state.sections[secIndex];
        const curSlide = state.activeSlide[secIndex];

        if (dir === 1) {
            if (curSlide < sec.slides - 1) {
                state.activeSlide[secIndex] = curSlide + 1;
                lock();

                return;
            }

            if (secIndex < state.sections.length - 1) {
                state.activeSection = secIndex + 1;
                lock();
            }

            return;
        }

        if (curSlide > 0) {
            state.activeSlide[secIndex] = curSlide - 1;
            lock();

            return;
        }

        if (secIndex > 0) {
            state.activeSection = secIndex - 1;
            state.activeSlide[secIndex - 1] =
                state.sections[secIndex - 1].slides - 1;
            lock();
        }
    }

    function navigateSlide(dir: 1 | -1) {
        if (state.isAnimating) {
            return;
        }

        const secIndex = state.activeSection;
        const sec = state.sections[secIndex];
        const next = state.activeSlide[secIndex] + dir;

        if (next < 0 || next > sec.slides - 1) {
            return;
        }

        state.activeSlide[secIndex] = next;
        lock();
    }

    function goToSection(index: number) {
        if (state.isAnimating || index === state.activeSection) {
            return;
        }

        if (index < 0 || index >= state.sections.length) {
            return;
        }

        state.activeSection = index;
        lock();
    }

    function goToSlide(index: number) {
        if (state.isAnimating) {
            return;
        }

        const sec = state.sections[state.activeSection];

        if (index < 0 || index >= sec.slides) {
            return;
        }

        state.activeSlide[state.activeSection] = index;
        lock();
    }

    function getScrollableTarget(target: EventTarget | null) {
        if (!(target instanceof Element)) {
            return null;
        }

        return target.closest<HTMLElement>('[data-stage-scroll]');
    }

    function canScrollTarget(target: EventTarget | null, dir: 1 | -1) {
        const scrollable = getScrollableTarget(target);

        if (!scrollable) {
            return false;
        }

        const maxScroll = scrollable.scrollHeight - scrollable.clientHeight;

        if (maxScroll <= 0) {
            return false;
        }

        return dir > 0
            ? scrollable.scrollTop < maxScroll - 1
            : scrollable.scrollTop > 1;
    }

    function onWheel(e: WheelEvent) {
        if (Math.abs(e.deltaY) < 4) {
            return;
        }

        const dir = e.deltaY > 0 ? 1 : -1;

        if (canScrollTarget(e.target, dir)) {
            return;
        }

        e.preventDefault();
        navigate(dir);
    }

    let touchStartX = 0;
    let touchStartY = 0;
    let touchScrollTarget: EventTarget | null = null;

    function onTouchStart(e: TouchEvent) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        touchScrollTarget = e.target;
    }

    function onTouchEnd(e: TouchEvent) {
        const dx = e.changedTouches[0].clientX - touchStartX;
        const dy = e.changedTouches[0].clientY - touchStartY;
        const threshold = 48;

        if (Math.abs(dx) > Math.abs(dy)) {
            if (Math.abs(dx) > threshold) {
                navigateSlide(dx < 0 ? 1 : -1);
            }
        } else if (Math.abs(dy) > threshold) {
            const dir = dy < 0 ? 1 : -1;

            if (!canScrollTarget(touchScrollTarget, dir)) {
                navigate(dir);
            }
        }
    }

    function onKeydown(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowDown':
            case 'PageDown':
                e.preventDefault();
                navigate(1);
                break;
            case 'ArrowUp':
            case 'PageUp':
                e.preventDefault();
                navigate(-1);
                break;
            case 'ArrowRight':
                e.preventDefault();
                navigateSlide(1);
                break;
            case 'ArrowLeft':
                e.preventDefault();
                navigateSlide(-1);
                break;
        }
    }

    function setViewportUnit() {
        document.documentElement.style.setProperty(
            '--vh',
            `${window.innerHeight * 0.01}px`,
        );
    }

    onMounted(() => {
        setViewportUnit();
        window.addEventListener('resize', setViewportUnit);
        window.addEventListener('wheel', onWheel, { passive: false });
        window.addEventListener('touchstart', onTouchStart, { passive: true });
        window.addEventListener('touchend', onTouchEnd, { passive: true });
        window.addEventListener('keydown', onKeydown);
        document.documentElement.classList.add('stage-lock');
    });

    onBeforeUnmount(() => {
        window.removeEventListener('resize', setViewportUnit);
        window.removeEventListener('wheel', onWheel);
        window.removeEventListener('touchstart', onTouchStart);
        window.removeEventListener('touchend', onTouchEnd);
        window.removeEventListener('keydown', onKeydown);
        document.documentElement.classList.remove('stage-lock');
        window.clearTimeout(unlockTimer);
    });

    const api = {
        state: readonly(state) as StageState,
        navigate,
        navigateSlide,
        goToSection,
        goToSlide,
        reducedMotion,
    };

    provide(STAGE_KEY, api);

    return api;
}

export function useScrollStage() {
    const stage = inject<ReturnType<typeof provideScrollStage>>(STAGE_KEY);

    if (!stage) {
        throw new Error(
            'useScrollStage() must be called inside a tree wrapped by provideScrollStage()',
        );
    }

    return stage;
}

/**
 * Convenience hook for an individual section component. Looks itself up in
 * the stage by id and exposes just what a section needs: whether it's the
 * active (visible) section, which of its own slides is active, and controls
 * to move between its slides.
 */
export function useSectionSlide(id: string) {
    const stage = useScrollStage();
    const index = computed(() =>
        stage.state.sections.findIndex((s) => s.id === id),
    );
    const active = computed(() => stage.state.activeSlide[index.value] ?? 0);
    const count = computed(
        () => stage.state.sections[index.value]?.slides ?? 1,
    );
    const isActiveSection = computed(
        () => stage.state.activeSection === index.value,
    );

    function next() {
        if (isActiveSection.value) {
            stage.navigateSlide(1);
        }
    }
    function prev() {
        if (isActiveSection.value) {
            stage.navigateSlide(-1);
        }
    }
    function goTo(i: number) {
        if (isActiveSection.value) {
            stage.goToSlide(i);
        }
    }

    return { active, count, isActiveSection, next, prev, goTo };
}
