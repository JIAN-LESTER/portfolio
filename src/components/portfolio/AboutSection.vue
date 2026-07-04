<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type { PersonalInfo } from '@/types/portfolio';

defineProps<{ personal: PersonalInfo }>();

const { isActiveSection } = useSectionSlide('about');
</script>

<template>
    <section
        class="stage-section about"
        :class="{ 'is-active': isActiveSection }"
    >
        <div class="section-inner">
            <p class="eyebrow">ABOUT</p>

            <div class="grid">
                <h2 class="headline">
                    I turn ideas into applications with clean UI, reliable
                    backend logic, structured databases, real-time dashboards,
                    and AI-powered features built for real-world use.
                </h2>

                <div class="copy">
                    <p>{{ personal.bio }}</p>
                    <ul class="facts">
                        <li>
                            <span class="k">Base</span
                            ><span class="v">{{ personal.location }}</span>
                        </li>
                        <li v-if="personal.availability">
                            <span class="k">Status</span
                            ><span class="v signal">{{
                                personal.availability
                            }}</span>
                        </li>
                        <li>
                            <span class="k">Focus</span
                            ><span class="v"
                                >Web &middot; Mobile &middot; AI</span
                            >
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.about {
    display: flex;
    align-items: center;
}

.section-inner {
    width: 100%;
    padding: 0 15px;
    padding-inline: clamp(15px, 8vw, 140px);
    max-width: 1600px;
    margin-inline: auto;
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
    grid-template-columns: 1.1fr 1fr;
    gap: clamp(2rem, 5vw, 4rem);
    align-items: start;
}

.headline {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(1.7rem, 3.4vw, 2.5rem);
    line-height: 1.25;
    color: var(--paper);
    opacity: 0;
    transform: translateY(14px);
}

.headline span {
    color: var(--signal);
}

.is-active .headline {
    animation: rise 0.7s ease-out 0.1s forwards;
}

.copy {
    opacity: 0;
    transform: translateY(14px);
}

.is-active .copy {
    animation: rise 0.7s ease-out 0.3s forwards;
}

.copy p {
    color: var(--muted);
    line-height: 1.75;
    font-size: 1rem;
}

.facts {
    margin-top: 1.75rem;
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    border-top: 1px solid var(--line);
    padding-top: 1.25rem;
}

.facts li {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-mono);
    font-size: 0.82rem;
}

.k {
    color: var(--muted);
}

.v {
    color: var(--paper);
}

.v.signal {
    color: var(--signal);
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 780px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

@media (prefers-reduced-motion: reduce) {
    .headline,
    .copy {
        animation: none !important;
        opacity: 1;
        transform: none;
    }
}
</style>
