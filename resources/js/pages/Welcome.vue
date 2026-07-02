<script setup lang="ts">
import { Head, Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';
import { dashboard } from '@/routes';

const page = usePage();
const dashboardUrl = computed(() =>
    page.props.currentTeam ? dashboard(page.props.currentTeam.slug).url : '/',
);
</script>

<template>
    <Head title="Welcome" />
    <div
        class="flex min-h-screen items-center justify-center bg-background p-6"
    >
        <div class="w-full max-w-2xl space-y-4 text-center">
            <h1 class="text-4xl font-semibold tracking-tight">
                Welcome to the portfolio
            </h1>
            <p class="text-muted-foreground">
                The site is now focused on public content only.
            </p>
            <Link
                v-if="dashboardUrl !== '/'"
                :href="dashboardUrl"
                class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground"
            >
                Dashboard
            </Link>
        </div>
    </div>
</template>
