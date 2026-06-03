<script setup lang="ts">
import type { PersonalInfo } from '@/types/portfolio';

defineProps<{
    personal: PersonalInfo;
}>();
</script>

<template>
    <section
        id="contact"
        class="scroll-mt-24 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-xl shadow-cyan-950/10"
    >
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100">
            Contact
        </p>
        <h2 class="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Let’s build something meaningful together
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-cyan-50/90">
            Reach out if you want to collaborate on web applications, portfolio work, or product ideas.
        </p>

        <div class="mt-6 flex flex-wrap gap-3 text-sm">
            <a
                :href="`mailto:${personal.email}`"
                class="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white transition hover:bg-white/20"
            >
                {{ personal.email }}
            </a>
            <a
                v-if="personal.github"
                :href="personal.github"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-white/20 px-5 py-2 text-white transition hover:bg-white/10"
            >
                GitHub
            </a>
            <a
                v-if="personal.linkedin"
                :href="personal.linkedin"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-white/20 px-5 py-2 text-white transition hover:bg-white/10"
            >
                LinkedIn
            </a>
        </div>
    </section>
</template>
