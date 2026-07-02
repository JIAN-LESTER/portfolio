<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type { ProjectItem } from '@/types/portfolio';
import PaginationDots from './PaginationDots.vue';

defineProps<{ projects: ProjectItem[] }>();

const { active, count, isActiveSection, next, prev, goTo } =
    useSectionSlide('projects');
</script>

<template>
    <section
        class="stage-section projects"
        :class="{ 'is-active': isActiveSection }"
    >
        <div class="section-inner">
            <p class="eyebrow">PROJECTS</p>

            <div
                class="track"
                :style="{ transform: `translateX(calc(-${active * 100}% + ${active * 1.2}rem))` }"
            >
                <article
                    v-for="(project, i) in projects"
                    :key="project.title"
                    class="slide"
                >
                    <div class="card">
                        <div class="rail">
                            <span class="index-num">{{
                                String(i + 1).padStart(2, '0')
                            }}</span>
                            <span class="kicker">{{
                                project.tag.toUpperCase()
                            }}</span>
                        </div>

                        <div class="body">
                            <div class="head">
                                <h3 class="title">{{ project.title }}</h3>
                                <p class="summary">{{ project.summary }}</p>
                            </div>

                            <p class="desc">{{ project.description }}</p>

                            <div class="footer">
                                <ul class="stack">
                                    <li
                                        v-for="tech in project.stack"
                                        :key="tech"
                                    >
                                        {{ tech }}
                                    </li>
                                </ul>

                                <div
                                    class="links"
                                    v-if="project.github || project.live"
                                >
                                    <a
                                        v-if="project.github"
                                        :href="project.github"
                                        target="_blank"
                                        rel="noreferrer"
                                        class="link"
                                        >Source <span class="arrow">&rarr;</span></a
                                    >
                                    <a
                                        v-if="project.live"
                                        :href="project.live"
                                        target="_blank"
                                        rel="noreferrer"
                                        class="link link-live"
                                        >Live <span class="arrow">&rarr;</span></a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            <PaginationDots
                class="dots"
                :count="count"
                :active="active"
                @prev="prev"
                @next="next"
                @go="goTo"
            />
        </div>
    </section>
</template>

<style scoped>
.projects {
    display: flex;
    align-items: center;
}

.section-inner {
    width: 100%;
    padding-inline: clamp(15px, 8vw, 140px);
    max-width: 1600px;
    margin-inline: auto;
    overflow: hidden;
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: var(--depth);
    margin-bottom: 2rem;
}

.track {
    display: flex;
    width: calc(100% + 8rem);
    gap: 1.2rem;
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide {
    flex: 0 0 calc(100% - 8rem);
    min-width: 0;
    max-width: calc(100% - 8rem);
    opacity: 0;
    transform: translateY(10px) scale(0.99);
}

.is-active .slide {
    animation: rise 0.6s ease-out 0.1s forwards;
}

.card {
    display: grid;
    grid-template-columns: clamp(80px, 12vw, 160px) 1fr;
    gap: clamp(1.5rem, 4vw, 4rem);
    padding: clamp(1.8rem, 3.5vw, 2.8rem);
    border: 1px solid var(--line);
    border-radius: 18px;
    background:
        linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0))
            border-box,
        linear-gradient(160deg, color-mix(in srgb, var(--panel) 92%, #05070d), var(--panel-2));
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.18);
    transition: border-color 0.25s ease, transform 0.25s ease;
}

.card:hover {
    border-color: var(--depth-dim);
    transform: translateY(-2px);
}

.rail {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding-top: 0.3rem;
    border-left: 1px solid var(--signal-dim, rgba(255, 255, 255, 0.12));
    padding-left: 1.1rem;
}

.index-num {
    font-family: var(--font-mono);
    font-size: clamp(2.1rem, 4vw, 3rem);
    font-weight: 700;
    color: var(--signal);
    line-height: 1;
}

.kicker {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.22em;
    color: var(--muted);
    text-transform: uppercase;
}

.body {
    min-width: 0;
    display: flex;
    flex-direction: column;
}

.title {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--paper);
    line-height: 1.15;
}

.summary {
    margin-top: 0.5rem;
    color: var(--depth);
    font-size: 1rem;
    max-width: 60ch;
}

.desc {
    margin-top: 1.5rem;
    color: var(--muted);
    line-height: 1.85;
    max-width: 65ch;
}

.footer {
    margin-top: 1.9rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--line);
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
}

.stack {
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

.card:hover .stack li {
    border-color: var(--depth-dim);
}

.links {
    display: flex;
    gap: 0.7rem;
    flex-shrink: 0;
}

.link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--paper);
    text-decoration: none;
    padding: 0.45rem 0.9rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
}

.link-live {
    color: var(--signal);
    border-color: var(--signal-dim);
}

.link .arrow {
    transition: transform 0.2s ease;
}

.link:hover {
    border-color: var(--signal);
    color: var(--signal);
    background: color-mix(in srgb, var(--signal) 8%, transparent);
}

.link:hover .arrow {
    transform: translateX(2px);
}

.dots {
    margin-top: 2rem;
    padding-left: 0.1rem;
}

@media (max-width: 900px) {
    .track {
        width: 100%;
        gap: 0;
    }

    .slide {
        flex-basis: 100%;
        max-width: 100%;
    }
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

@media (max-width: 640px) {
    .card {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1.5rem;
    }
    .rail {
        flex-direction: row;
        align-items: baseline;
        gap: 0.6rem;
        border-left: none;
        border-bottom: 1px solid var(--signal-dim, rgba(255, 255, 255, 0.12));
        padding-left: 0;
        padding-bottom: 0.6rem;
    }
    .footer {
        flex-direction: column;
        align-items: flex-start;
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
