<script setup lang="ts">
import type { PersonalInfo } from '@/types/portfolio';
import { computed, ref } from 'vue';

const props = defineProps<{
    personal: PersonalInfo;
}>();

const imageFailed = ref(false);

const initials = computed(() =>
    props.personal.name
        .split(' ')
        .filter(Boolean)
        .map((part) => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
);
</script>

<template>
    <section
        id="hero"
        class="grid min-h-[calc(100vh-7rem)] scroll-mt-24 items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:py-16"
    >
        <div>
            <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
                Portfolio
            </p>
            <h2 class="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
                {{ personal.name }}
            </h2>
            <p class="mt-4 text-2xl font-medium text-cyan-100">
                {{ personal.role }}
            </p>
            <p class="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {{ personal.tagline }}
            </p>

            <div class="mt-8 flex flex-wrap gap-3 text-sm font-medium">
                <a
                    v-if="personal.email"
                    :href="`mailto:${personal.email}`"
                    class="rounded-full border border-cyan-300/40 bg-cyan-300 px-6 py-3 text-slate-950 transition hover:bg-cyan-200"
                >
                    Email me
                </a>
                <a
                    href="#projects"
                    class="rounded-full border border-white/15 px-6 py-3 text-white transition hover:bg-white/10"
                >
                    View projects
                </a>
                <a
                    v-if="personal.resumeUrl"
                    :href="personal.resumeUrl"
                    class="rounded-full border border-white/15 px-6 py-3 text-white transition hover:bg-white/10"
                >
                    Resume
                </a>
            </div>

            <dl class="mt-10 grid max-w-xl gap-4 text-sm sm:grid-cols-2">
                <div class="border-l border-cyan-300/40 pl-4">
                    <dt class="text-slate-400">Location</dt>
                    <dd class="mt-1 text-white">{{ personal.location }}</dd>
                </div>
                <div class="border-l border-cyan-300/40 pl-4">
                    <dt class="text-slate-400">Email</dt>
                    <dd class="mt-1 break-words text-white">{{ personal.email }}</dd>
                </div>
            </dl>
        </div>

        <div class="relative mx-auto w-full max-w-md lg:max-w-none">
            <div class="absolute -inset-4 rounded-[2rem] bg-cyan-300/15 blur-3xl"></div>
            <div class="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 shadow-2xl shadow-black/30">
                <img
                    v-if="personal.image && !imageFailed"
                    :src="personal.image"
                    :alt="personal.name"
                    class="aspect-[4/5] w-full object-cover"
                    @error="imageFailed = true"
                />
                <div
                    v-else
                    class="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-cyan-300 via-slate-800 to-slate-950"
                >
                    <span class="text-6xl font-semibold text-white sm:text-7xl">
                        {{ initials }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
