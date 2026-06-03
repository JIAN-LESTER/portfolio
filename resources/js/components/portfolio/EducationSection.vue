<script setup lang="ts">
import EducationCard from '@/components/portfolio/EducationCard.vue';
import type { EducationItem } from '@/types/portfolio';

defineProps<{
    education: EducationItem[];
}>();
</script>

<template>
    <section
        id="education"
        class="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur"
    >
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Education
        </p>
        <div class="mt-6 space-y-4">
            <EducationCard
                v-for="item in education"
                :key="`${item.school}-${item.start}-${item.end}`"
                :education="item"
            />
        </div>
    </section>
</template>
