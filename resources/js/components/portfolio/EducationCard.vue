<script setup lang="ts">
import type { EducationItem } from '@/types/portfolio';

defineProps<{
    education: EducationItem;
}>();
</script>

<template>
    <article class="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
        <div class="flex flex-wrap items-center justify-between gap-3">
            <h3 class="text-xl font-semibold text-white">
                {{ education.school }}
            </h3>
            <p class="text-sm text-cyan-200">
                {{ education.start }} - {{ education.end }}
            </p>
        </div>
        <p class="mt-3 text-base text-slate-200">
            {{ education.degree }} in {{ education.field }}
        </p>
        <p v-if="education.description" class="mt-4 text-sm leading-7 text-slate-400">
            {{ education.description }}
        </p>
    </article>
</template>
