<script setup lang="ts">
import type { ServiceItem } from '@/types/portfolio';

defineProps<{
    services: ServiceItem[];
}>();
</script>

<template>
    <section
        id="services"
        class="scroll-mt-24 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/10 backdrop-blur"
    >
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Services Offered
        </p>
        <div class="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            <article
                v-for="service in services"
                :key="service.title"
                class="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
            >
                <h3 class="text-lg font-semibold text-white">
                    {{ service.title }}
                </h3>
                <p class="mt-3 text-sm leading-7 text-slate-300">
                    {{ service.description }}
                </p>
            </article>
        </div>
    </section>
</template>
