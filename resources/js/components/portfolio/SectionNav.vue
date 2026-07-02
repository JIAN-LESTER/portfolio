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
            <span class="index">{{ String(i + 1).padStart(2, '0') }}</span>
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
    gap: 0.6rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.2rem 0;
    color: var(--muted);
    font-family: var(--font-mono);
}

.index {
    font-size: 0.65rem;
    letter-spacing: 0.05em;
    width: 1.4rem;
    text-align: right;
    opacity: 0;
    transform: translateX(4px);
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.bar {
    width: 1.1rem;
    height: 2px;
    background: var(--line);
    transition: width 0.3s ease, background-color 0.3s ease;
}

.label {
    position: absolute;
    right: 3.2rem;
    font-size: 0.7rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--paper);
    opacity: 0;
    transform: translateX(6px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    pointer-events: none;
    white-space: nowrap;
}

.tick:hover .label,
.tick:focus-visible .label,
.tick:hover .index,
.tick:focus-visible .index {
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

.tick.is-active .index {
    opacity: 1;
    transform: translateX(0);
    color: var(--signal);
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
    .index,
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