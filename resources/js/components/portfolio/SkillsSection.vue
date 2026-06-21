<script setup lang="ts">
import type { SkillGroup } from '@/types/portfolio';

defineProps<{
    skills: SkillGroup[];
}>();
</script>

<template>
    <section
        id="skills"
        class="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur"
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
                <div class="skill-marquee mt-5 overflow-hidden">
                    <div class="skill-track flex w-max gap-4">
                        <div
                            v-for="copy in 2"
                            :key="copy"
                            class="flex gap-4"
                        >
                            <div
                                v-for="item in group.items"
                                :key="`${copy}-${item.name}`"
                                class="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/10 p-3"
                                :title="item.name"
                            >
                                <img
                                    v-if="item.logo"
                                    :src="item.logo"
                                    :alt="item.name"
                                    class="h-9 w-9 object-contain"
                                    loading="lazy"
                                >
                                <span
                                    v-else
                                    class="text-sm font-semibold text-cyan-100"
                                >
                                    {{ item.name }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<style scoped>
.skill-marquee {
    mask-image: linear-gradient(to right, transparent, black 12%, black 88%, transparent);
}

.skill-track {
    animation: skill-marquee 16s linear infinite;
}

.skill-marquee:hover .skill-track {
    animation-play-state: paused;
}

@keyframes skill-marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(calc(-50% - 0.5rem));
    }
}
</style>
