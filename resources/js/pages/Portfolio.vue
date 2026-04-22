<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import AboutSection from '@/components/portfolio/AboutSection.vue';
import ContactSection from '@/components/portfolio/ContactSection.vue';
import EducationSection from '@/components/portfolio/EducationSection.vue';
import HeroSection from '@/components/portfolio/HeroSection.vue';
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue';
import SkillsSection from '@/components/portfolio/SkillsSection.vue';
import { portfolioData } from '@/data/portfolio';
import PortfolioLayout from '@/layouts/PortfolioLayout.vue';

defineOptions({
    layout: PortfolioLayout,
});
</script>

<template>
    <Head title="Portfolio" />

    <div class="space-y-8">
        <HeroSection :personal="portfolioData.personal" />
        <AboutSection :personal="portfolioData.personal" />
        <EducationSection :education="portfolioData.education" />
        <ProjectsSection :projects="portfolioData.projects" />
        <SkillsSection :skills="portfolioData.skills" />
        <ContactSection :personal="portfolioData.personal" />
    </div>
</template>
