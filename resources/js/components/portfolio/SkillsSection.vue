<script setup lang="ts">
import type { SkillGroup } from '@/types/portfolio';

defineProps<{
    skills: SkillGroup[];
}>();
</script>

<template>
    <section
        id="skills"
        class="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur"
    >
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Skills
        </p>
        <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article
                v-for="group in skills"
                :key="group.title"
                class="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
            >
                <h3 class="text-lg font-semibold text-white">
                    {{ group.title }}
                </h3>
                <ul class="mt-4 flex flex-wrap gap-2">
                    <li
                        v-for="item in group.items"
                        :key="item"
                        class="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-200"
                    >
                        {{ item }}
                    </li>
                </ul>
            </article>
        </div>
    </section>
</template>
