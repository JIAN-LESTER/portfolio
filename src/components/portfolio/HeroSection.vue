<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useScrollStage, useSectionSlide } from '@/composables/useScrollStage';
import type { PersonalInfo } from '@/types/portfolio';

defineProps<{ personal: PersonalInfo }>();

const { isActiveSection } = useSectionSlide('hero');
const stage = useScrollStage();

const query = ref('');
const resultLine = ref('');
const showResult = ref(false);
const showIdentity = ref(false);
const showTerminal = ref(true);

const fullQuery =
    "query --role='developer' --status='available' --window='Aug 2026'";
const fullResult = '-> 1 match found';

const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
        : false;

const resumeSectionIndex = computed(() =>
    stage.state.sections.findIndex((section) => section.id === 'resume'),
);

function goToResume() {
    if (resumeSectionIndex.value >= 0) {
        stage.goToSection(resumeSectionIndex.value);
    }
}

function typeLine(
    text: string,
    target: typeof query,
    speed: number,
    onDone?: () => void,
) {
    let i = 0;
    const step = () => {
        target.value = text.slice(0, i);
        i += 1;

        if (i <= text.length) {
            window.setTimeout(step, speed);
        } else {
            onDone?.();
        }
    };
    step();
}

onMounted(() => {
    if (reducedMotion) {
        query.value = fullQuery;
        resultLine.value = fullResult;
        showTerminal.value = false;
        showResult.value = true;
        showIdentity.value = true;

        return;
    }

    window.setTimeout(() => {
        typeLine(fullQuery, query, 24, () => {
            window.setTimeout(() => {
                showResult.value = true;
                typeLine(fullResult, resultLine, 30, () => {
                    window.setTimeout(() => {
                        window.setTimeout(() => {
                            showTerminal.value = false;
                            window.setTimeout(
                                () => (showIdentity.value = true),
                                250,
                            );
                        }, 600);
                    }, 250);
                });
            }, 350);
        });
    }, 400);
});
</script>

<template>
    <section
        v-cloak
        class="stage-section hero"
        :class="{ 'is-active': isActiveSection }"
    >
        <div class="section-inner" data-stage-scroll>
            <div class="hero-copy">
                <p class="eyebrow"></p>

                <transition name="terminal-fade">
                    <div v-if="showTerminal" class="terminal" role="status">
                        <div class="terminal-head">
                            <span class="dot r"></span
                            ><span class="dot y"></span
                            ><span class="dot g"></span>
                            <span class="terminal-title"
                                >jian@portfolio &mdash; retrieve</span
                            >
                        </div>
                        <div class="terminal-body">
                            <p class="line">
                                <span class="prompt">$</span> {{ query
                                }}<span class="cursor" v-if="!showResult"
                                    >&#9608;</span
                                >
                            </p>
                            <p v-if="showResult" class="line result">
                                {{ resultLine }}:
                                <strong>{{ personal.name }}</strong>
                            </p>
                        </div>
                    </div>
                </transition>

                <div class="identity" :class="{ show: showIdentity }">
                    <h1 class="name">{{ personal.name }}</h1>
                    <p class="role">{{ personal.role }}</p>
                    <p class="tagline">{{ personal.tagline }}</p>

                    <div class="meta-row">
                        <span class="chip">{{ personal.location }}</span>
                        <span
                            v-if="personal.availability"
                            class="chip chip-signal"
                            >{{ personal.availability }}</span
                        >
                    </div>

                    <div class="cta-row">
                        <a
                            class="btn btn-primary"
                            :href="`mailto:${personal.email}`"
                            >Email me</a
                        >
                        <a
                            v-if="personal.resumeUrl"
                            class="btn btn-ghost"
                            href="#resume"
                            @click.prevent="goToResume"
                            >View resume</a
                        >
                        <a
                            v-if="personal.github"
                            class="btn btn-ghost"
                            :href="personal.github"
                            target="_blank"
                            rel="noreferrer"
                            >GitHub</a
                        >
                    </div>
                </div>
            </div>

            <figure
                v-if="personal.image"
                class="profile-figure"
                :class="{ show: showIdentity, expanded: !showTerminal }"
            >
                <img
                    class="profile-image"
                    :src="personal.image"
                    :alt="personal.name"
                />
                <figcaption class="sr-only">{{ personal.name }}</figcaption>
            </figure>

            <p class="scroll-hint">scroll to continue &darr;</p>
        </div>
    </section>
</template>

<style scoped>
.hero {
    display: flex;
    align-items: center;
}

.terminal-fade-leave-active {
    transition:
        opacity 0.4s ease,
        transform 0.4s ease,
        max-height 0.4s ease,
        margin-bottom 0.4s ease;
    overflow: hidden;
    max-height: 220px;
}
.terminal-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px) scale(0.97);
    max-height: 0;
    margin-bottom: 0;
}

.profile-figure.expanded {
    width: min(36vw, 420px);
    transition:
        opacity 0.6s ease,
        transform 0.6s ease,
        width 0.5s ease 0.1s;
}

.section-inner {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(220px, 360px);
    gap: clamp(1rem, 4vw, 3rem);
    align-items: center;
    padding: 0 15px;
    padding-inline: clamp(15px, 8vw, 140px);
    max-width: 1600px;
    margin-inline: auto;
}

.hero-copy {
    min-width: 0;
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: var(--depth);
    margin-bottom: 1.75rem;
}

.profile-figure {
    position: relative;
    justify-self: end;
    width: min(32vw, 360px);
    min-width: 220px;
    aspect-ratio: 4 / 5;
    opacity: 0;
    transform: translateY(16px);
    transition:
        opacity 0.6s ease,
        transform 0.6s ease;
}

.profile-figure::before {
    content: '';
    position: absolute;
    inset: 12px -12px -12px 12px;
    border: 1px solid var(--depth-dim);
    border-radius: 16px;
}

.profile-image {
    position: relative;
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--panel);
}

.profile-figure.show {
    opacity: 1;
    transform: translateY(0);
}

.terminal {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6);
    opacity: 0;
    transform: translateY(14px);
}

.is-active .terminal {
    animation: rise 0.7s ease-out 0.15s forwards;
}

.terminal-head {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 0.9rem;
    border-bottom: 1px solid var(--line);
    background: var(--panel-2);
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
}
.dot.r {
    background: #e05a4e;
}
.dot.y {
    background: #e6b450;
}
.dot.g {
    background: #4f9b6e;
}

.terminal-title {
    margin-left: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--muted);
}

.terminal-body {
    padding: 1.1rem 1.2rem 1.3rem;
    font-family: var(--font-mono);
    font-size: 0.85rem;
}

.line {
    color: var(--paper);
    min-height: 1.4em;
}

.prompt {
    color: var(--signal);
    margin-right: 0.4em;
}

.cursor {
    color: var(--signal);
    animation: blink 1s step-end infinite;
}

.result {
    margin-top: 0.5rem;
    color: var(--signal);
}

.result strong {
    color: var(--paper);
}

.identity {
    margin-top: 2.25rem;
    opacity: 0;
    transform: translateY(16px);
    transition:
        opacity 0.6s ease,
        transform 0.6s ease;
}

.identity.show {
    opacity: 1;
    transform: translateY(0);
}

.name {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(2.1rem, 5.5vw, 3.4rem);
    line-height: 1.05;
    color: var(--paper);
    letter-spacing: -0.01em;
}

.role {
    margin-top: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--depth);
}

.tagline {
    margin-top: 1rem;
    max-width: 54ch;
    color: var(--muted);
    line-height: 1.65;
    font-size: 1rem;
}

.meta-row {
    margin-top: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.chip {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.03em;
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
}

.chip-signal {
    border-color: var(--signal-dim);
    color: var(--signal);
}

.cta-row {
    margin-top: 1.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.btn {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.03em;
    padding: 0.7rem 1.3rem;
    border-radius: 999px;
    text-decoration: none;
    transition:
        transform 0.18s ease,
        background-color 0.18s ease,
        border-color 0.18s ease,
        color 0.18s ease;
}

.btn-primary {
    background: var(--signal);
    color: var(--ink);
    border: 1px solid var(--signal);
}

.btn-primary:hover {
    transform: translateY(-2px);
}

.btn-ghost {
    border: 1px solid var(--line);
    color: var(--paper);
}

.btn-ghost:hover {
    border-color: var(--depth);
    color: var(--depth);
    transform: translateY(-2px);
}

.scroll-hint {
    grid-column: 1 / -1;
    margin-top: 1rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--muted);
    opacity: 0.7;
    animation: bob 2.4s ease-in-out infinite;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

@keyframes bob {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(4px);
    }
}

@media (max-width: 820px) {
    .section-inner {
        grid-template-columns: 1fr;
        gap: 1.35rem;
    }

    .profile-figure {
        justify-self: start;
        width: min(72vw, 280px);
        min-width: 0;
    }

    .profile-figure.expanded {
        width: min(62vw, 240px);
    }

    .scroll-hint {
        margin-top: 0.5rem;
    }
}

@media (max-width: 640px) {
    .hero {
        align-items: stretch;
    }

    .section-inner {
        max-height: 100%;
        overflow-y: auto;
        overscroll-behavior: contain;
        padding-block: 5.25rem 2rem;
        padding-inline: clamp(18px, 6vw, 30px);
        align-items: start;
    }

    .eyebrow {
        display: none;
    }

    .terminal-title {
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .terminal-body {
        padding: 0.95rem;
        font-size: 0.72rem;
        overflow-wrap: anywhere;
    }

    .line {
        overflow-wrap: anywhere;
    }

    .identity {
        margin-top: 1.35rem;
    }

    .name {
        font-size: clamp(2rem, 12vw, 2.65rem);
    }

    .cta-row {
        gap: 0.6rem;
    }

    .btn {
        padding-inline: 1rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .is-active .terminal {
        animation: none;
        opacity: 1;
        transform: none;
    }
    .identity,
    .profile-figure {
        transition: none;
    }
    .scroll-hint {
        animation: none;
    }
}
</style>
