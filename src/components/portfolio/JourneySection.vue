<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type {
    EducationItem,
    ExperienceItem,
    ProjectItem,
} from '@/types/portfolio';
import PaginationDots from './PaginationDots.vue';

defineProps<{
    education: EducationItem;
    experience: ExperienceItem;
    capstone: ProjectItem;
}>();

const { active, count, isActiveSection, next, prev, goTo } =
    useSectionSlide('journey');
</script>

<template>
    <section
        class="stage-section journey"
        :class="{ 'is-active': isActiveSection }"
    >
        <div class="section-inner">
            <div class="head-row">
                <p class="eyebrow">EDUCATION &middot; EXPERIENCE</p>
                <PaginationDots
                    :count="count"
                    :active="active"
                    @prev="prev"
                    @next="next"
                    @go="goTo"
                />
            </div>

            <div
                class="track"
                :style="{ transform: `translateX(-${active * 100}%)` }"
            >
                <!-- Slide 1: Education -->
                <div class="slide" :class="{ 'is-current': active === 0 }">
                    <span class="kicker">01 &middot; EDUCATION</span>
                    <h3 class="title">{{ education.school }}</h3>
                    <p class="sub">
                        {{ education.degree }} in {{ education.field }}
                    </p>
                    <p class="range">
                        {{ education.start }} &ndash; {{ education.end }}
                    </p>
                    <p v-if="education.honor" class="honor">
                        {{ education.honor }}
                    </p>
                    <p v-if="education.description" class="desc">
                        {{ education.description }}
                    </p>
                </div>

                <!-- Slide 2: Capstone -->
                <div class="slide" :class="{ 'is-current': active === 1 }">
                    <span class="kicker">02 &middot; CAPSTONE PROJECT</span>
                    <h3 class="title">{{ capstone.title }}</h3>
                    <p class="sub">{{ capstone.tag }}</p>
                    <p class="desc">
                        Built as a capstone project for CMU-OASP to reduce
                        repetitive manual replies and give staff a clearer view
                        of what students ask most often. The system generates
                        grounded responses from office information, records
                        inquiry activity, and turns those interactions into
                        reports that help the office monitor common concerns and
                        response trends.
                    </p>
                    <ul class="stack">
                        <li v-for="item in capstone.stack" :key="item">
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- Slide 3: Experience -->
                <div class="slide" :class="{ 'is-current': active === 2 }">
                    <span class="kicker">03 &middot; EXPERIENCE</span>
                    <h3 class="title">{{ experience.company }}</h3>
                    <p class="sub">{{ experience.role }}</p>
                    <p class="range">
                        {{ experience.start }} &ndash; {{ experience.end }}
                    </p>
                    <p v-if="experience.location" class="location">
                        {{ experience.location }}
                    </p>
                    <ul class="highlights">
                        <li v-for="(h, i) in experience.highlights" :key="i">
                            {{ h }}
                        </li>
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

.location {
    margin-top: 0.35rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--depth);
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

.stack {
    margin-top: 1.2rem;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    max-width: 58ch;
}

.stack li {
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0.35rem 0.7rem;
    color: var(--paper);
    font-family: var(--font-mono);
    font-size: 0.72rem;
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

@media (max-width: 640px) {
    .section-inner {
        padding-inline: 0;
    }

    .head-row {
        padding-inline: clamp(18px, 6vw, 30px);
    }

    .slide {
        box-sizing: border-box;
        padding-inline: clamp(18px, 6vw, 30px);
        visibility: hidden;
        pointer-events: none;
    }

    .slide.is-current {
        visibility: visible;
        pointer-events: auto;
    }
}
</style>
