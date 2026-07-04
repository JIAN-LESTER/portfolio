<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type { ServiceItem } from '@/types/portfolio';
import PaginationDots from './PaginationDots.vue';

defineProps<{ services: ServiceItem[] }>();

const { active, count, isActiveSection, next, prev, goTo } =
    useSectionSlide('services');
</script>

<template>
    <section
        class="stage-section services"
        :class="{ 'is-active': isActiveSection }"
    >
        <div class="section-inner">
            <div class="head-row">
                <p class="eyebrow">SERVICES</p>
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
                    v-for="(service, i) in services"
                    :key="service.code"
                    class="slide"
                >
                    <div class="card">
                        <span class="watermark" aria-hidden="true">{{
                            String(i + 1).padStart(2, '0')
                        }}</span>

                        <div class="card-head">
                            <span class="kicker">{{ service.code }}</span>
                            <h3 class="title">{{ service.title }}</h3>
                        </div>

                        <div class="paragraphs">
                            <p
                                v-for="(paragraph, pi) in service.paragraphs"
                                :key="pi"
                                class="para"
                                :class="{ lead: pi === 0 }"
                            >
                                {{ paragraph }}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.services {
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

.card-head {
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
    position: relative;
    z-index: 1;
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

@media (max-width: 520px) {
    .watermark {
        font-size: 4rem;
    }
}
</style>
