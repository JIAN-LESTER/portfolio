<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type { ProjectItem } from '@/types/portfolio';
import PaginationDots from './PaginationDots.vue';

defineProps<{ projects: ProjectItem[] }>();

const { active, count, isActiveSection, next, prev, goTo } = useSectionSlide('projects');
</script>

<template>
    <section class="stage-section projects" :class="{ 'is-active': isActiveSection }">
        <div class="section-inner">
            <div class="head-row">
                <p class="eyebrow">RECORD 04 / 07 &middot; PROJECTS</p>
                <PaginationDots :count="count" :active="active" @prev="prev" @next="next" @go="goTo" />
            </div>

            <div class="track" :style="{ transform: `translateX(-${active * 100}%)` }">
                <article v-for="(project, i) in projects" :key="project.title" class="slide">
                    <span class="kicker">{{ String(i + 1).padStart(2, '0') }} &middot; {{ project.tag.toUpperCase() }}</span>
                    <h3 class="title">{{ project.title }}</h3>
                    <p class="summary">{{ project.summary }}</p>
                    <p class="desc">{{ project.description }}</p>

                    <ul class="stack">
                        <li v-for="tech in project.stack" :key="tech">{{ tech }}</li>
                    </ul>

                    <div class="links" v-if="project.github || project.live">
                        <a v-if="project.github" :href="project.github" target="_blank" rel="noreferrer" class="link">Source &rarr;</a>
                        <a v-if="project.live" :href="project.live" target="_blank" rel="noreferrer" class="link">Live &rarr;</a>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.projects {
    display: flex;
    align-items: center;
}

.section-inner {
    width: min(820px, 100%);
    margin: 0 auto;
    padding: 0 clamp(1.25rem, 5vw, 2rem);
    overflow: hidden;
}

.head-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    gap: 1rem;
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: var(--depth);
}

.track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 2.2rem clamp(1.4rem, 3vw, 2.4rem);
    border: 1px solid var(--line);
    border-radius: 14px;
    background: linear-gradient(160deg, var(--panel), var(--panel-2));
    opacity: 0;
    transform: translateY(10px) scale(0.99);
}

.is-active .slide {
    animation: rise 0.6s ease-out 0.1s forwards;
}

.kicker {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    color: var(--signal);
}

.title {
    margin-top: 0.8rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.6rem, 3.4vw, 2.2rem);
    color: var(--paper);
}

.summary {
    margin-top: 0.6rem;
    color: var(--depth);
    font-size: 0.98rem;
    max-width: 60ch;
}

.desc {
    margin-top: 1rem;
    color: var(--muted);
    line-height: 1.75;
    max-width: 65ch;
}

.stack {
    margin-top: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    list-style: none;
    padding: 0;
}

.stack li {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    padding: 0.32rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
    transition: border-color 0.2s ease, color 0.2s ease;
}

.slide:hover .stack li {
    border-color: var(--depth-dim);
}

.links {
    margin-top: 1.6rem;
    display: flex;
    gap: 1.2rem;
}

.link {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--paper);
    text-decoration: none;
    border-bottom: 1px solid var(--line);
    padding-bottom: 2px;
    transition: color 0.2s ease, border-color 0.2s ease;
}

.link:hover {
    color: var(--signal);
    border-color: var(--signal);
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@media (prefers-reduced-motion: reduce) {
    .track {
        transition: none;
    }
    .slide {
        animation: none !important;
        opacity: 1;
        transform: none;
    }
}
</style>