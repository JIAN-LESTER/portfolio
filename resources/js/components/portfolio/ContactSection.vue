<script setup lang="ts">
import { useForm } from '@inertiajs/vue3';
import type { PersonalInfo } from '@/types/portfolio';

defineProps<{
    personal: PersonalInfo;
}>();

const form = useForm({
    message: '',
});

function submitBuildRequest() {
    form.post('/contact/build-request', {
        preserveScroll: true,
        onSuccess: () => form.reset(),
    });
}
</script>

<template>
    <section
        id="contact"
        class="scroll-mt-24 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-8 shadow-xl shadow-cyan-950/10"
    >
        <p class="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-100">
            Contact
        </p>
        <h2 class="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Let’s build something meaningful together
        </h2>
        <p class="mt-4 max-w-2xl text-base leading-7 text-cyan-50/90">
            Reach out if you want to collaborate on web applications, portfolio work, or product ideas.
        </p>

        <form class="mt-8 max-w-2xl space-y-4" @submit.prevent="submitBuildRequest">
            <div>
                <label for="build-request" class="text-sm font-medium text-white">
                    What do you want me to build?
                </label>
                <textarea
                    id="build-request"
                    v-model="form.message"
                    rows="5"
                    required
                    minlength="10"
                    maxlength="3000"
                    class="mt-2 w-full resize-y rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm leading-6 text-white placeholder:text-cyan-50/50 focus:border-cyan-200 focus:outline-none focus:ring-2 focus:ring-cyan-200/30"
                    placeholder="Describe the website, app, feature, or system you want built."
                />
                <p v-if="form.errors.message" class="mt-2 text-sm text-red-200">
                    {{ form.errors.message }}
                </p>
                <p v-else-if="form.wasSuccessful" class="mt-2 text-sm text-cyan-100">
                    Your request was sent.
                </p>
            </div>

            <button
                type="submit"
                :disabled="form.processing"
                class="rounded-full border border-white/20 bg-white px-5 py-2 text-sm font-medium text-slate-950 transition hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {{ form.processing ? 'Sending...' : 'Send request' }}
            </button>
        </form>

        <div class="mt-6 flex flex-wrap gap-3 text-sm">
            <a
                :href="`mailto:${personal.email}`"
                class="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-white transition hover:bg-white/20"
            >
                {{ personal.email }}
            </a>
            <a
                v-if="personal.github"
                :href="personal.github"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-white/20 px-5 py-2 text-white transition hover:bg-white/10"
            >
                GitHub
            </a>
            <a
                v-if="personal.linkedin"
                :href="personal.linkedin"
                target="_blank"
                rel="noreferrer"
                class="rounded-full border border-white/20 px-5 py-2 text-white transition hover:bg-white/10"
            >
                LinkedIn
            </a>
        </div>
    </section>
</template>
