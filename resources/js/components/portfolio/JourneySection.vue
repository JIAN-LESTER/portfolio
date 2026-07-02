<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type { EducationItem, ExperienceItem } from '@/types/portfolio';
import PaginationDots from './PaginationDots.vue';

defineProps<{
    education: EducationItem;
    experience: ExperienceItem;
}>();

const { active, count, isActiveSection, next, prev, goTo } = useSectionSlide('journey');
</script>

<template>
    <section class="stage-section journey" :class="{ 'is-active': isActiveSection }">
        <div class="section-inner">
            <div class="head-row">
                <p class="eyebrow">RECORD 03 / 07 &middot; JOURNEY</p>
                <PaginationDots :count="count" :active="active" @prev="prev" @next="next" @go="goTo" />
            </div>

            <div class="track" :style="{ transform: `translateX(-${active * 100}%)` }">
                <!-- Slide 1: Education -->
                <div class="slide">
                    <span class="kicker">01 &middot; EDUCATION</span>
                    <h3 class="title">{{ education.school }}</h3>
                    <p class="sub">{{ education.degree }} in {{ education.field }}</p>
                    <p class="range">{{ education.start }} &ndash; {{ education.end }}</p>
                    <p v-if="education.honor" class="honor">{{ education.honor }}</p>
                    <p v-if="education.description" class="desc">{{ education.description }}</p>
                </div>

                <!-- Slide 2: Experience -->
                <div class="slide">
                    <span class="kicker">02 &middot; EXPERIENCE</span>
                    <h3 class="title">{{ experience.company }}</h3>
                    <p class="sub">{{ experience.role }}</p>
                    <p class="range">{{ experience.start }} &ndash; {{ experience.end }}</p>
                    <ul class="highlights">
                        <li v-for="(h, i) in experience.highlights" :key="i">{{ h }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.journey {
    display: flex;
    align-items: center;
}

.section-inner {
    width: 100%;
    padding: 0 15px;
    padding-inline: clamp(15px, 8vw, 140px);
    max-width: 1600px;
    margin-inline: auto;
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
    opacity: 0;
    transform: translateY(10px);
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
    margin-top: 0.9rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.8rem, 4vw, 2.6rem);
    color: var(--paper);
}

.sub {
    margin-top: 0.5rem;
    font-size: 1.05rem;
    color: var(--paper);
    opacity: 0.85;
}

.range {
    margin-top: 0.4rem;
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--muted);
}

.honor {
    display: inline-block;
    margin-top: 0.9rem;
    padding: 0.3rem 0.75rem;
    border: 1px solid var(--signal-dim);
    border-radius: 999px;
    color: var(--signal);
    font-family: var(--font-mono);
    font-size: 0.72rem;
}

.desc {
    margin-top: 1.1rem;
    max-width: 55ch;
    color: var(--muted);
    line-height: 1.7;
}

.highlights {
    margin-top: 1.3rem;
    padding-left: 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    max-width: 58ch;
}

.highlights li {
    color: var(--muted);
    line-height: 1.65;
    font-size: 0.95rem;
}

.highlights li::marker {
    color: var(--depth);
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0);
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
