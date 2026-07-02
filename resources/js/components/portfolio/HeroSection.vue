<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useSectionSlide } from '@/composables/useScrollStage';
import type { PersonalInfo } from '@/types/portfolio';

defineProps<{ personal: PersonalInfo }>();

const { isActiveSection } = useSectionSlide('hero');

const query = ref('');
const resultLine = ref('');
const showResult = ref(false);
const showIdentity = ref(false);

const fullQuery = "query --role='developer' --status='available' --window='Aug 2026'";
const fullResult = '\u2192 1 match found';

const reducedMotion =
    typeof window !== 'undefined' && window.matchMedia ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

function typeLine(text: string, target: typeof query, speed: number, onDone?: () => void) {
    let i = 0;
    const step = () => {
        target.value = text.slice(0, i);
        i += 1;

        if (i <= text.length) {
            window.setTimeout(step, speed);
        } else {
            onDone?.();
        }
    };
    step();
}

onMounted(() => {
    if (reducedMotion) {
        query.value = fullQuery;
        resultLine.value = fullResult;
        showResult.value = true;
        showIdentity.value = true;

        return;
    }

    window.setTimeout(() => {
        typeLine(fullQuery, query, 24, () => {
            window.setTimeout(() => {
                showResult.value = true;
                typeLine(fullResult, resultLine, 30, () => {
                    window.setTimeout(() => (showIdentity.value = true), 250);
                });
            }, 350);
        });
    }, 400);
});
</script>

<template>
    <section class="stage-section hero" :class="{ 'is-active': isActiveSection }">
        <div class="section-inner">
            <p class="eyebrow">RECORD 01 / 07 &middot; HERO</p>

            <div class="terminal" role="status">
                <div class="terminal-head">
                    <span class="dot r"></span><span class="dot y"></span><span class="dot g"></span>
                    <span class="terminal-title">jian@portfolio &mdash; retrieve</span>
                </div>
                <div class="terminal-body">
                    <p class="line"><span class="prompt">$</span> {{ query }}<span class="cursor" v-if="!showResult">&#9608;</span></p>
                    <p v-if="showResult" class="line result">{{ resultLine }}: <strong>{{ personal.name }}</strong></p>
                </div>
            </div>

            <div class="identity" :class="{ show: showIdentity }">
                <h1 class="name">{{ personal.name }}</h1>
                <p class="role">{{ personal.role }}</p>
                <p class="tagline">{{ personal.tagline }}</p>

                <div class="meta-row">
                    <span class="chip">{{ personal.location }}</span>
                    <span v-if="personal.availability" class="chip chip-signal">{{ personal.availability }}</span>
                </div>

                <div class="cta-row">
                    <a class="btn btn-primary" :href="`mailto:${personal.email}`">Email me</a>
                    <a v-if="personal.resumeUrl" class="btn btn-ghost" :href="personal.resumeUrl" target="_blank" rel="noreferrer">View résumé</a>
                    <a v-if="personal.github" class="btn btn-ghost" :href="personal.github" target="_blank" rel="noreferrer">GitHub</a>
                </div>
            </div>

            <p class="scroll-hint">scroll to continue &darr;</p>
        </div>
    </section>
</template>

<style scoped>
.hero {
    display: flex;
    align-items: center;
}

.section-inner {
    width: min(760px, 100%);
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

.terminal {
    background: var(--panel);
    border: 1px solid var(--line);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6);
    opacity: 0;
    transform: translateY(14px);
}

.is-active .terminal {
    animation: rise 0.7s ease-out 0.15s forwards;
}

.terminal-head {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.6rem 0.9rem;
    border-bottom: 1px solid var(--line);
    background: var(--panel-2);
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
}
.dot.r {
    background: #e05a4e;
}
.dot.y {
    background: #e6b450;
}
.dot.g {
    background: #4f9b6e;
}

.terminal-title {
    margin-left: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--muted);
}

.terminal-body {
    padding: 1.1rem 1.2rem 1.3rem;
    font-family: var(--font-mono);
    font-size: 0.85rem;
}

.line {
    color: var(--paper);
    min-height: 1.4em;
}

.prompt {
    color: var(--signal);
    margin-right: 0.4em;
}

.cursor {
    color: var(--signal);
    animation: blink 1s step-end infinite;
}

.result {
    margin-top: 0.5rem;
    color: var(--signal);
}

.result strong {
    color: var(--paper);
}

.identity {
    margin-top: 2.25rem;
    opacity: 0;
    transform: translateY(16px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.identity.show {
    opacity: 1;
    transform: translateY(0);
}

.name {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: clamp(2.1rem, 5.5vw, 3.4rem);
    line-height: 1.05;
    color: var(--paper);
    letter-spacing: -0.01em;
}

.role {
    margin-top: 0.6rem;
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--depth);
}

.tagline {
    margin-top: 1rem;
    max-width: 46ch;
    color: var(--muted);
    line-height: 1.65;
    font-size: 1rem;
}

.meta-row {
    margin-top: 1.4rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
}

.chip {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.03em;
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
}

.chip-signal {
    border-color: var(--signal-dim);
    color: var(--signal);
}

.cta-row {
    margin-top: 1.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.btn {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.03em;
    padding: 0.7rem 1.3rem;
    border-radius: 999px;
    text-decoration: none;
    transition: transform 0.18s ease, background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease;
}

.btn-primary {
    background: var(--signal);
    color: var(--ink);
    border: 1px solid var(--signal);
}

.btn-primary:hover {
    transform: translateY(-2px);
}

.btn-ghost {
    border: 1px solid var(--line);
    color: var(--paper);
}

.btn-ghost:hover {
    border-color: var(--depth);
    color: var(--depth);
    transform: translateY(-2px);
}

.scroll-hint {
    margin-top: 3rem;
    font-family: var(--font-mono);
    font-size: 0.68rem;
    color: var(--muted);
    opacity: 0.7;
    animation: bob 2.4s ease-in-out infinite;
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

@keyframes bob {
    0%,
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(4px);
    }
}

@media (prefers-reduced-motion: reduce) {
    .is-active .terminal {
        animation: none;
        opacity: 1;
        transform: none;
    }
    .identity {
        transition: none;
    }
    .scroll-hint {
        animation: none;
    }
}
</style>