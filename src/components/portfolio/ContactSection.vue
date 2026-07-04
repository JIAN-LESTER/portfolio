<script setup lang="ts">
import { reactive } from 'vue';
import { useSectionSlide } from '@/composables/useScrollStage';
import type { PersonalInfo } from '@/types/portfolio';

const props = defineProps<{
    personal: PersonalInfo;
}>();

const { isActiveSection } = useSectionSlide('contact');

const form = reactive({
    name: '',
    email: '',
    service: '',
    message: '',
    processing: false,
    wasSuccessful: false,
    errors: {} as Record<string, string>,
});

function submitBuildRequest() {
    form.processing = true;
    form.wasSuccessful = false;
    form.errors = {};

    const subject = encodeURIComponent(`Build request: ${form.service}`);
    const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.service}\n\n${form.message}`,
    );

    window.location.href = `mailto:${props.personal.email}?subject=${subject}&body=${body}`;

    form.processing = false;
    form.wasSuccessful = true;
    form.name = '';
    form.email = '';
    form.service = '';
    form.message = '';
}
</script>

<template>
    <section
        id="contact"
        class="stage-section contact"
        :class="{ 'is-active': isActiveSection }"
    >
        <div class="section-inner">
            <div
                class="contact-panel rounded-3xl border border-cyan-300/20 bg-slate-950/80 p-6 shadow-2xl shadow-cyan-950/20 sm:p-8"
            >
                <div
                    class="contact-inner grid gap-4 lg:grid-cols-[0.8fr_1fr] lg:items-center"
                >
                    <div class="contact-copy">
                        <p
                            class="text-sm font-semibold tracking-[0.35em] text-cyan-200 uppercase"
                        >
                            Contact
                        </p>
                        <h2
                            class="mt-4 text-3xl font-semibold text-white sm:text-4xl"
                        >
                            Let&rsquo;s build something meaningful together
                        </h2>
                        <p class="mt-4 text-base leading-7 text-slate-300">
                            Tell me what you want built, from a website or
                            mobile app to a custom system or AI-powered feature.
                        </p>

                        <div class="mt-6 flex flex-wrap gap-3 text-sm">
                            <a
                                :href="`mailto:${personal.email}`"
                                class="contact-link border-cyan-200/30 bg-cyan-300 px-5 py-2 text-slate-950 hover:bg-cyan-200"
                            >
                                {{ personal.email }}
                            </a>
                            <a
                                v-if="personal.github"
                                :href="personal.github"
                                target="_blank"
                                rel="noreferrer"
                                class="contact-link border-white/15 px-5 py-2 text-white hover:border-cyan-200/40 hover:bg-white/10"
                            >
                                GitHub
                            </a>
                            <a
                                v-if="personal.linkedin"
                                :href="personal.linkedin"
                                target="_blank"
                                rel="noreferrer"
                                class="contact-link border-white/15 px-5 py-2 text-white hover:border-cyan-200/40 hover:bg-white/10"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <form
                        class="contact-form rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-slate-950/20 sm:p-6"
                        @submit.prevent="submitBuildRequest"
                    >
                        <div class="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label
                                    for="visitor-name"
                                    class="text-sm font-medium text-white"
                                >
                                    Your name
                                </label>
                                <input
                                    id="visitor-name"
                                    v-model="form.name"
                                    type="text"
                                    required
                                    maxlength="120"
                                    class="request-field mt-3 w-full rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 text-sm leading-6 text-white placeholder:text-slate-500 focus:border-cyan-200 focus:ring-2 focus:ring-cyan-200/20 focus:outline-none"
                                    placeholder="Juan Dela Cruz"
                                />
                                <p
                                    v-if="form.errors.name"
                                    class="status-message mt-3 text-sm text-red-200"
                                >
                                    {{ form.errors.name }}
                                </p>
                            </div>

                            <div>
                                <label
                                    for="visitor-email"
                                    class="text-sm font-medium text-white"
                                >
                                    Email address
                                </label>
                                <input
                                    id="visitor-email"
                                    v-model="form.email"
                                    type="email"
                                    required
                                    maxlength="255"
                                    class="request-field mt-3 w-full rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 text-sm leading-6 text-white placeholder:text-slate-500 focus:border-cyan-200 focus:ring-2 focus:ring-cyan-200/20 focus:outline-none"
                                    placeholder="name@example.com"
                                />
                                <p
                                    v-if="form.errors.email"
                                    class="status-message mt-3 text-sm text-red-200"
                                >
                                    {{ form.errors.email }}
                                </p>
                            </div>
                        </div>

                        <div class="mt-4">
                            <label
                                for="service-request"
                                class="text-sm font-medium text-white"
                            >
                                System or service needed
                            </label>
                            <input
                                id="service-request"
                                v-model="form.service"
                                type="text"
                                required
                                maxlength="150"
                                class="request-field mt-3 w-full rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 text-sm leading-6 text-white placeholder:text-slate-500 focus:border-cyan-200 focus:ring-2 focus:ring-cyan-200/20 focus:outline-none"
                                placeholder="Website, mobile app, admin system, AI feature, or support service"
                            />
                            <p
                                v-if="form.errors.service"
                                class="status-message mt-3 text-sm text-red-200"
                            >
                                {{ form.errors.service }}
                            </p>
                        </div>

                        <div class="mt-4">
                            <label
                                for="build-request"
                                class="text-sm font-medium text-white"
                            >
                                Project details
                            </label>
                            <textarea
                                id="build-request"
                                v-model="form.message"
                                rows="6"
                                required
                                minlength="10"
                                maxlength="3000"
                                class="request-field mt-3 w-full resize-y rounded-2xl border border-white/15 bg-slate-900/90 px-4 py-3 text-sm leading-6 text-white placeholder:text-slate-500 focus:border-cyan-200 focus:ring-2 focus:ring-cyan-200/20 focus:outline-none"
                                placeholder="Describe the website, app, feature, or system you want built."
                            />
                            <p
                                v-if="form.errors.message"
                                class="status-message mt-3 text-sm text-red-200"
                            >
                                {{ form.errors.message }}
                            </p>
                            <p
                                v-else-if="form.wasSuccessful"
                                class="status-message success-message mt-3 text-sm text-cyan-100"
                            >
                                Your request was sent.
                            </p>
                        </div>

                        <div
                            class="mt-5 flex items-center justify-between gap-4"
                        >
                            <span class="text-xs text-slate-400">
                                Minimum 10 characters
                            </span>
                            <button
                                type="submit"
                                :disabled="form.processing"
                                class="send-button rounded-full border border-cyan-200/30 bg-cyan-300 px-5 py-2 text-sm font-medium text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {{
                                    form.processing
                                        ? 'Sending...'
                                        : 'Send request'
                                }}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact {
    display: flex;
    align-items: center;
}

.section-inner {
    width: 100%;
    padding: 0 15px;
    padding-inline: clamp(15px, 8vw, 140px);
    max-width: 1600px;
    margin-inline: auto;
}

.contact-panel {
    width: 100%;
    max-width: 980px;
    margin-inline: auto;
    padding-block: clamp(1.5rem, 4vh, 2.5rem);
    animation: contact-rise 520ms ease-out both;
}

.contact-inner {
    width: 100%;
}

@media (max-width: 640px) {
    .section-inner {
        padding-inline: 1.5rem;
    }
}

.contact-copy,
.contact-form {
    animation: contact-rise 620ms ease-out both;
}

.contact-form {
    animation-delay: 120ms;
}

.contact-link {
    border-width: 1px;
    border-radius: 9999px;
    transition:
        transform 180ms ease,
        border-color 180ms ease,
        background-color 180ms ease,
        box-shadow 180ms ease;
}

.contact-link:hover,
.send-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgb(8 145 178 / 0.18);
}

.request-field {
    transition:
        transform 180ms ease,
        border-color 180ms ease,
        box-shadow 180ms ease,
        background-color 180ms ease;
}

.request-field:focus {
    transform: translateY(-1px);
    box-shadow: 0 16px 40px rgb(8 145 178 / 0.16);
}

.send-button {
    transition:
        transform 180ms ease,
        background-color 180ms ease,
        box-shadow 180ms ease;
}

.status-message {
    animation: status-pop 220ms ease-out both;
}

.success-message {
    animation:
        status-pop 220ms ease-out both,
        success-pulse 1200ms ease-out;
}

@keyframes contact-rise {
    from {
        opacity: 0;
        transform: translateY(18px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes status-pop {
    from {
        opacity: 0;
        transform: translateY(6px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes success-pulse {
    0% {
        text-shadow: 0 0 0 rgb(103 232 249 / 0);
    }

    45% {
        text-shadow: 0 0 18px rgb(103 232 249 / 0.55);
    }

    100% {
        text-shadow: 0 0 0 rgb(103 232 249 / 0);
    }
}
</style>
