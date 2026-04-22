<script setup lang="ts">
import type { ProjectItem } from '@/types/portfolio';

defineProps<{
    project: ProjectItem;
}>();
</script>

<template>
    <article class="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
        <div class="flex items-start justify-between gap-4">
            <div>
                <h3 class="text-xl font-semibold text-white">
                    {{ project.title }}
                </h3>
                <p class="mt-3 text-sm leading-7 text-slate-300">
                    {{ project.description }}
                </p>
            </div>
        </div>

        <ul class="mt-5 flex flex-wrap gap-2">
            <li
                v-for="item in project.stack"
                :key="item"
                class="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-100"
            >
                {{ item }}
            </li>
        </ul>

        <div class="mt-6 flex flex-wrap gap-3 text-sm">
            <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-white/15 px-4 py-2 text-white transition hover:bg-white/10"
            >
                GitHub
            </a>
            <a
                v-if="project.live"
                :href="project.live"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-cyan-100 transition hover:bg-cyan-400/20"
            >
                Live demo
            </a>
        </div>
    </article>
</template>
