<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type { ServiceItem } from '@/types/portfolio';
import PaginationDots from './PaginationDots.vue';

defineProps<{ services: ServiceItem[] }>();

const { active, count, isActiveSection, next, prev, goTo } = useSectionSlide('services');
</script>

<template>
    <section class="stage-section services" :class="{ 'is-active': isActiveSection }">
        <div class="section-inner">
            <div class="head-row">
                <p class="eyebrow">RECORD 05 / 07 &middot; SERVICES</p>
                <PaginationDots :count="count" :active="active" @prev="prev" @next="next" @go="goTo" />
            </div>

            <div class="track" :style="{ transform: `translateX(-${active * 100}%)` }">
                <article v-for="service in services" :key="service.code" class="slide">
                    <span class="code">{{ service.code }}</span>
                    <h3 class="title">{{ service.title }}</h3>
                    <p class="desc">{{ service.description }}</p>
                    <ul class="deliverables">
                        <li v-for="d in service.deliverables" :key="d">{{ d }}</li>
                    </ul>
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
    width: min(760px, 100%);
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
    opacity: 0;
    transform: translateY(10px);
}

.is-active .slide {
    animation: rise 0.6s ease-out 0.1s forwards;
}

.code {
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 5rem);
    font-weight: 700;
    color: transparent;
    -webkit-text-stroke: 1.5px var(--depth);
    line-height: 1;
    display: block;
    opacity: 0.8;
}

.title {
    margin-top: 1.1rem;
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.6rem, 3.4vw, 2.2rem);
    color: var(--paper);
}

.desc {
    margin-top: 0.8rem;
    max-width: 58ch;
    color: var(--muted);
    line-height: 1.75;
}

.deliverables {
    margin-top: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    list-style: none;
    padding: 0;
}

.deliverables li {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: var(--signal);
    padding: 0.4rem 0.8rem;
    border: 1px solid var(--signal-dim);
    border-radius: 999px;
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