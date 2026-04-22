<script setup lang="ts">
import type { PersonalInfo } from '@/types/portfolio';

defineProps<{
    personal: PersonalInfo;
}>();
</script>

<template>
    <section
        id="about"
        class="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur"
    >
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            About
        </p>
        <h2 class="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Building useful, clean, and responsive digital products
        </h2>
        <p class="mt-6 max-w-3xl text-base leading-8 text-slate-300">
            {{ personal.bio }}
        </p>
    </section>
</template>
