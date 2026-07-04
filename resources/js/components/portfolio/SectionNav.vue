<script setup lang="ts">
import type { StageSection } from '@/composables/useScrollStage';

defineProps<{
    sections: StageSection[];
    active: number;
}>();

const emit = defineEmits<{ go: [index: number] }>();
</script>

<template>
    <nav class="rail" aria-label="Section navigation">
        <button
            v-for="(section, i) in sections"
            :key="section.id"
            type="button"
            class="tick"
            :class="{ 'is-active': i === active }"
            :aria-current="i === active ? 'true' : undefined"
            @click="emit('go', i)"
        >
            <span class="bar"></span>
            <span class="label">{{ section.label }}</span>
        </button>
    </nav>
</template>

<style scoped>
.rail {
    position: fixed;
    top: 50%;
    right: clamp(0.75rem, 3vw, 2.5rem);
    transform: translateY(-50%);
    z-index: 40;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.65rem;
}

.tick {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.2rem 0;
    color: var(--muted);
    font-family: var(--font-mono);
    position: relative;
}

.bar {
    width: 1.1rem;
    height: 2px;
    background: var(--line);
    transition:
        width 0.3s ease,
        background-color 0.3s ease;
}

.label {
    position: absolute;
    right: 2.2rem;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--paper);
    opacity: 0;
    transform: translateX(6px);
    transition:
        opacity 0.2s ease,
        transform 0.2s ease;
    pointer-events: none;
    white-space: pre-line;
    text-align: right;
    line-height: 1.35;
}

.tick:hover .label,
.tick:focus-visible .label,
.tick.is-active .label {
    opacity: 1;
    transform: translateX(0);
}

.tick:hover .bar,
.tick:focus-visible .bar {
    width: 1.6rem;
    background: var(--depth);
}

.tick.is-active .bar {
    width: 2.1rem;
    background: var(--signal);
}

.tick:focus-visible {
    outline: 2px solid var(--signal);
    outline-offset: 4px;
}

@media (max-width: 720px) {
    .rail {
        top: auto;
        bottom: 1rem;
        right: 50%;
        transform: translateX(50%);
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;
    }
    .label {
        display: none;
    }
    .bar {
        width: 0.9rem;
        height: 2px;
    }
    .tick.is-active .bar {
        width: 1.4rem;
    }
}
</style>
