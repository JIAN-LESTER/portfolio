<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type { SkillGroup } from '@/types/portfolio';

defineProps<{ skills: SkillGroup[] }>();

const { isActiveSection } = useSectionSlide('skills');
</script>

<template>
    <section class="stage-section skills" :class="{ 'is-active': isActiveSection }">
        <div class="section-inner">
            <p class="eyebrow">RECORD 06 / 07 &middot; SKILLS</p>

            <div class="grid">
                <article
                    v-for="(group, i) in skills"
                    :key="group.title"
                    class="card"
                    :style="{ transitionDelay: `${0.08 * i}s` }"
                >
                    <h3 class="title">{{ group.title }}</h3>
                    <div class="marquee">
                        <div class="track">
                            <span v-for="n in 2" :key="n" class="set">
                                <span v-for="item in group.items" :key="`${n}-${item.name}`" class="pill">{{ item.name }}</span>
                            </span>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.skills {
    display: flex;
    align-items: center;
}

.section-inner {
    width: min(980px, 100%);
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 5vw, 2rem);
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: var(--depth);
    margin-bottom: 1.75rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.9rem;
}

.card {
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 1.1rem 1.25rem;
    background: var(--panel);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease;
}

.is-active .card {
    opacity: 1;
    transform: translateY(0);
}

.card:hover {
    border-color: var(--depth-dim);
}

.title {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--signal);
}

.marquee {
    margin-top: 0.8rem;
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.track {
    display: flex;
    width: max-content;
    animation: scroll 22s linear infinite;
}

.marquee:hover .track {
    animation-play-state: paused;
}

.set {
    display: flex;
    gap: 0.5rem;
    padding-right: 0.5rem;
}

.pill {
    flex-shrink: 0;
    font-size: 0.8rem;
    color: var(--paper);
    padding: 0.4rem 0.85rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: var(--panel-2);
}

@keyframes scroll {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}

@media (max-width: 780px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

@media (prefers-reduced-motion: reduce) {
    .card {
        transition: none;
        opacity: 1;
        transform: none;
    }
    .track {
        animation: none;
    }
}
</style>