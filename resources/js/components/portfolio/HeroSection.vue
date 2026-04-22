<script setup lang="ts">
import type { PersonalInfo } from '@/types/portfolio';

defineProps<{
    personal: PersonalInfo;
}>();
</script>

<template>
    <section
        id="hero"
        class="rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-2xl shadow-black/20 sm:p-10"
    >
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Portfolio
        </p>
        <div class="mt-6 grid gap-8 lg:grid-cols-[1.5fr_0.9fr] lg:items-center">
            <div>
                <h2 class="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
                    {{ personal.name }}
                </h2>
                <p class="mt-4 text-xl text-cyan-100">
                    {{ personal.role }}
                </p>
                <p class="mt-6 max-w-2xl text-base leading-7 text-slate-300">
                    {{ personal.tagline }}
                </p>

                <div class="mt-8 flex flex-wrap gap-3 text-sm">
                    <a
                        v-if="personal.email"
                        :href="`mailto:${personal.email}`"
                        class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2 text-cyan-100 transition hover:bg-cyan-400/20"
                    >
                        Email me
                    </a>
                    <a
                        v-if="personal.resumeUrl"
                        :href="personal.resumeUrl"
                        class="rounded-full border border-white/15 px-5 py-2 text-white transition hover:bg-white/10"
                    >
                        View resume
                    </a>
                </div>
            </div>

            <div class="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <dl class="space-y-4 text-sm">
                    <div>
                        <dt class="text-slate-400">Location</dt>
                        <dd class="mt-1 text-base text-white">{{ personal.location }}</dd>
                    </div>
                    <div>
                        <dt class="text-slate-400">Email</dt>
                        <dd class="mt-1 text-base text-white">{{ personal.email }}</dd>
                    </div>
                    <div v-if="personal.phone">
                        <dt class="text-slate-400">Phone</dt>
                        <dd class="mt-1 text-base text-white">{{ personal.phone }}</dd>
                    </div>
                </dl>
            </div>
        </div>
    </section>
</template>
