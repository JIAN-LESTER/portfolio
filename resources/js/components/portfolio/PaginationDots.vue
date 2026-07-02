<script setup lang="ts">
defineProps<{
    count: number;
    active: number;
}>();

const emit = defineEmits<{ prev: []; next: []; go: [index: number] }>();
</script>

<template>
    <div v-if="count > 1" class="pager">
        <button type="button" class="chev" :disabled="active === 0" aria-label="Previous" @click="emit('prev')">‹</button>

        <div class="dots">
            <button
                v-for="i in count"
                :key="i"
                type="button"
                class="dot"
                :class="{ 'is-active': i - 1 === active }"
                :aria-label="`Go to item ${i}`"
                @click="emit('go', i - 1)"
            />
        </div>

        <button type="button" class="chev" :disabled="active === count - 1" aria-label="Next" @click="emit('next')">›</button>

        <span class="count">{{ String(active + 1).padStart(2, '0') }} / {{ String(count).padStart(2, '0') }}</span>
    </div>
</template>

<style scoped>
.pager {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    font-family: var(--font-mono);
}

.chev {
    width: 2.1rem;
    height: 2.1rem;
    display: grid;
    place-items: center;
    border-radius: 999px;
    border: 1px solid var(--line);
    background: transparent;
    color: var(--paper);
    font-size: 1.2rem;
    line-height: 1;
    cursor: pointer;
    transition: border-color 0.2s ease, color 0.2s ease, transform 0.15s ease;
}

.chev:hover:not(:disabled) {
    border-color: var(--signal);
    color: var(--signal);
    transform: translateY(-1px);
}

.chev:disabled {
    opacity: 0.25;
    cursor: default;
}

.dots {
    display: flex;
    gap: 0.4rem;
}

.dot {
    width: 6px;
    height: 6px;
    border-radius: 999px;
    border: none;
    background: var(--line);
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.dot.is-active {
    background: var(--signal);
    transform: scale(1.6);
}

.count {
    font-size: 0.7rem;
    color: var(--muted);
    letter-spacing: 0.05em;
    margin-left: 0.2rem;
}

.chev:focus-visible,
.dot:focus-visible {
    outline: 2px solid var(--signal);
    outline-offset: 2px;
}
</style>