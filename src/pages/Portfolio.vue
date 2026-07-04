<script setup lang="ts">
import AboutSection from '@/components/portfolio/AboutSection.vue';
import ContactSection from '@/components/portfolio/ContactSection.vue';
import HeroSection from '@/components/portfolio/HeroSection.vue';
import JourneySection from '@/components/portfolio/JourneySection.vue';
import ProjectsSection from '@/components/portfolio/ProjectsSection.vue';
import ResumeSection from '@/components/portfolio/ResumeSection.vue';
import ServicesSection from '@/components/portfolio/ServicesSection.vue';
import SkillsSection from '@/components/portfolio/SkillsSection.vue';
import { portfolioData } from '@/data/portfolio';
</script>

<template>
    <HeroSection :personal="portfolioData.personal" />
    <AboutSection :personal="portfolioData.personal" />
    <JourneySection
        :education="portfolioData.education"
        :experience="portfolioData.experience"
    />
    <ResumeSection :personal="portfolioData.personal" />
    <ProjectsSection :projects="portfolioData.projects" />
    <ServicesSection :services="portfolioData.services" />
    <SkillsSection :skills="portfolioData.skills" />
    <ContactSection :personal="portfolioData.personal" />
</template>
