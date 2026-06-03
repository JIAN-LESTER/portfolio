<script setup lang="ts">
import ProjectCard from '@/components/portfolio/ProjectCard.vue';
import type { ProjectItem } from '@/types/portfolio';

defineProps<{
    projects: ProjectItem[];
}>();
</script>

<template>
    <section
        id="projects"
        class="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur"
    >
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Projects
        </p>
        <div class="mt-6 grid gap-4 lg:grid-cols-2">
            <ProjectCard
                v-for="project in projects"
                :key="project.title"
                :project="project"
            />
        </div>
    </section>
</template>
