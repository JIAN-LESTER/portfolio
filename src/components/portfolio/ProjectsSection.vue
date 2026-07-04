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
            <div class="head-row">
                <p class="eyebrow">PROJECTS</p>
                <div class="head-right">
                    <PaginationDots
                        :count="count"
                        :active="active"
                        @prev="prev"
                        @next="next"
                        @go="goTo"
                    />
                </div>
            </div>

            <div
                class="track"
                :style="{ transform: `translateX(-${active * 100}%)` }"
            >
                <article
                    v-for="(project, i) in projects"
                    :key="project.title"
                    class="slide"
                >
                    <div class="card">
                        <span class="watermark" aria-hidden="true">{{
                            String(i + 1).padStart(2, '0')
                        }}</span>

                        <div class="card-head">
                            <span class="kicker">{{
                                project.tag.toUpperCase()
                            }}</span>
                            <h3 class="title">{{ project.title }}</h3>
                        </div>

                        <div class="content">
                            <div class="paragraphs">
                                <p class="para lead">{{ project.summary }}</p>
                                <p class="para">{{ project.description }}</p>
                            </div>

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
                                        >Source
                                        <span class="arrow">&rarr;</span></a
                                    >
                                    <a
                                        v-if="project.live"
                                        :href="project.live"
                                        target="_blank"
                                        rel="noreferrer"
                                        class="link link-live"
                                        >Live
                                        <span class="arrow">&rarr;</span></a
                                    >
                                </div>
                            </div>
                        </div>
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
    width: 100%;
    padding: 0 15px;
    padding-inline: clamp(15px, 7vw, 120px);
    max-width: 1600px;
    margin-inline: auto;
    overflow: hidden;
}

.head-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: clamp(1.5rem, 4vw, 2.5rem);
    flex-wrap: wrap;
    gap: 1rem;
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: var(--depth);
}

.head-right {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.track {
    display: flex;
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

.slide {
    flex: 0 0 100%;
    width: 100%;
    max-width: 100%;
}

.card {
    position: relative;
    max-width: 1100px;
    overflow: hidden;
    padding: clamp(1.75rem, 4vw, 3rem);
    border: 1px solid var(--line);
    border-radius: 16px;
    background: linear-gradient(160deg, var(--panel), var(--panel-2));
    opacity: 0;
    transform: translateY(10px);
    transition:
        border-color 0.25s ease,
        transform 0.25s ease;
}

.is-active .card {
    animation: rise 0.6s ease-out 0.1s forwards;
}

.card:hover {
    border-color: var(--depth-dim);
}

.watermark {
    position: absolute;
    top: -0.35em;
    right: 0.2em;
    font-family: var(--font-display);
    font-weight: 700;
    font-size: clamp(5rem, 11vw, 9rem);
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--line);
    opacity: 0.7;
    z-index: 0;
    pointer-events: none;
    user-select: none;
}

.card-head,
.content {
    position: relative;
    z-index: 1;
}

.kicker {
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.12em;
    color: var(--signal);
    padding: 0.3rem 0.7rem;
    border: 1px solid var(--signal-dim);
    border-radius: 999px;
}

.title {
    margin: 0.9rem 0 0;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.55rem, 3.2vw, 2.35rem);
    color: var(--paper);
    line-height: 1.15;
    max-width: 22ch;
}

.paragraphs {
    margin-top: 1.6rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem 2.5rem;
    padding-top: 1.4rem;
    border-top: 1px solid var(--line);
}

.para {
    line-height: 1.7;
    color: var(--muted);
    font-size: 0.95rem;
}

.para.lead {
    color: var(--paper);
    font-size: 1.02rem;
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
    transition:
        border-color 0.2s ease,
        color 0.2s ease;
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
    transition:
        color 0.2s ease,
        border-color 0.2s ease,
        background 0.2s ease;
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

@media (min-width: 860px) {
    .paragraphs {
        grid-template-columns: 1fr 1fr;
    }
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
    .card {
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
        padding-inline: clamp(15px, 6vw, 28px);
    }

    .slide {
        box-sizing: border-box;
        padding-inline: clamp(18px, 6vw, 30px);
    }

    .footer {
        flex-direction: column;
        align-items: flex-start;
    }
}

@media (max-width: 520px) {
    .watermark {
        font-size: 4rem;
    }
}
</style>
