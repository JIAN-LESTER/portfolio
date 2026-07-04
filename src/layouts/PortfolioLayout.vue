<script setup lang="ts">
import { computed } from 'vue';
import BackgroundField from '@/components/portfolio/BackgroundField.vue';
import SectionNav from '@/components/portfolio/SectionNav.vue';
import { provideScrollStage } from '@/composables/useScrollStage';
import type { StageSection } from '@/composables/useScrollStage';
import { portfolioData } from '@/data/portfolio';

const sections: StageSection[] = [
    { id: 'hero', label: '', slides: 1 },
    { id: 'about', label: 'About', slides: 1 },
    { id: 'journey', label: 'Education\nExperience', slides: 2 },
    { id: 'resume', label: 'Resume', slides: 1 },
    {
        id: 'projects',
        label: 'Projects',
        slides: portfolioData.projects.length,
    },
    {
        id: 'services',
        label: 'Services',
        slides: portfolioData.services.length,
    },
    { id: 'skills', label: 'Skills', slides: 1 },
    { id: 'contact', label: 'Contact', slides: 1 },
];

const stage = provideScrollStage(sections);

const trackStyle = computed(() => ({
    transform: `translate3d(0, calc(var(--vh, 1vh) * -100 * ${stage.state.activeSection}), 0)`,
}));
</script>

<template>
    <div class="stage">
        <BackgroundField />

        <a href="#hero" class="brand" @click.prevent="stage.goToSection(0)">
            <span class="brand-mark">JLT</span>
            <span class="brand-name">Jian Lester Tabarno</span>
        </a>

        <SectionNav
            :sections="sections"
            :active="stage.state.activeSection"
            @go="stage.goToSection"
        />

        <div class="stage-track" :style="trackStyle">
            <slot />
        </div>
    </div>
</template>

<style>
/* Global tokens — intentionally unscoped so every portfolio section can use them. */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

:root {
    --ink: #0b0e12;
    --panel: #151a21;
    --panel-2: #1b222b;
    --line: #262f3a;
    --paper: #ede9e2;
    --muted: #8b93a1;
    --signal: #f5a623;
    --signal-dim: #7a5518;
    --depth: #6c7bff;
    --depth-dim: #2e3468;

    --font-display: 'Space Grotesk', sans-serif;
    --font-body: 'IBM Plex Sans', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}

html.stage-lock,
html.stage-lock body {
    height: 100%;
    margin: 0;
    overflow: hidden;
    overscroll-behavior: none;
    background: var(--ink);
}

body {
    font-family: var(--font-body);
    color: var(--paper);
}

/* Shared section sizing — each portfolio section component renders its own
   root <section class="stage-section">, sized here so the layout can page
   through them by translating .stage-track. */
.stage-section {
    position: relative;
    width: 100%;
    height: calc(var(--vh, 1vh) * 100);
    flex-shrink: 0;
    overflow: hidden;
    z-index: 1;
    opacity: 1;
    transform: translateZ(0);
    backface-visibility: hidden;
}

.stage-section.is-active {
    opacity: 1;
}

*:focus-visible {
    outline: 2px solid var(--signal);
    outline-offset: 3px;
}

[v-cloak] {
    display: none;
}

@media (prefers-reduced-motion: reduce) {
    .stage-section {
        transition: none;
    }
}
</style>

<style scoped>
.stage {
    position: fixed;
    inset: 0;
    background: var(--ink);
    overflow: hidden;
}

.stage-track {
    display: flex;
    flex-direction: column;
    transition: transform 0.85s cubic-bezier(0.65, 0, 0.35, 1);
    will-change: transform;
}

.brand {
    position: fixed;
    top: clamp(1rem, 3vw, 1.75rem);
    left: clamp(1rem, 3vw, 2rem);
    z-index: 40;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
}

.brand-mark {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    color: var(--ink);
    background: var(--signal);
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
}

.brand-name {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    color: var(--muted);
    letter-spacing: 0.03em;
}

@media (max-width: 720px) {
    .brand-name {
        display: none;
    }
}

@media (prefers-reduced-motion: reduce) {
    .stage-track {
        transition: none;
    }
}
</style>
