<script setup lang="ts">
import { useSectionSlide } from '@/composables/useScrollStage';
import type { PersonalInfo } from '@/types/portfolio';

defineProps<{ personal: PersonalInfo }>();

const { isActiveSection } = useSectionSlide('resume');
</script>

<template>
    <section
        id="resume"
        class="stage-section resume"
        :class="{ 'is-active': isActiveSection }"
    >
        <div class="section-inner">
            <div class="panel">
                <article class="copy">
                    <p class="eyebrow">RESUME</p>
                    <p class="kicker">PREVIEW</p>
                    <h2 class="title">Resume Preview</h2>
                    <p class="desc">
                        Open the preview in-stage, then download the PDF
                        directly.
                    </p>

                    <div class="actions">
                        <a
                            v-if="personal.resumeUrl"
                            class="btn btn-primary"
                            :href="personal.resumeUrl"
                            download="Tabarno_Resume"
                        >
                            Download resume
                        </a>
                    </div>
                </article>

                <div class="preview-wrap">
                    <div class="preview-frame">
                        <img
                            class="preview-image"
                            src="/images/Resume.png"
                            alt="Resume preview"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.resume {
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

.panel {
    display: grid;
    grid-template-columns: minmax(280px, 380px) minmax(0, 1fr);
    gap: clamp(1.5rem, 4vw, 3rem);
    align-items: center;
}

.eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: var(--depth);
    margin-bottom: 1rem;
}

.kicker {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.1em;
    color: var(--signal);
    text-transform: uppercase;
}

.copy,
.preview-wrap {
    opacity: 0;
    transform: translateY(14px);
}

.preview-wrap {
    min-width: 0;
}

.is-active .copy {
    animation: rise 0.6s ease-out 0.08s forwards;
}

.is-active .preview-wrap {
    animation: rise 0.6s ease-out 0.18s forwards;
}

.title {
    margin-top: 1rem;
    font-family: var(--font-display);
    font-size: clamp(1.9rem, 4vw, 2.8rem);
    color: var(--paper);
}

.desc {
    margin-top: 0.9rem;
    max-width: 46ch;
    color: var(--muted);
    line-height: 1.7;
}

.actions {
    margin-top: 1.5rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.03em;
    padding: 0.78rem 1.3rem;
    border-radius: 999px;
    text-decoration: none;
    transition:
        transform 0.18s ease,
        background-color 0.18s ease;
}

.btn-primary {
    background: var(--signal);
    color: var(--ink);
    border: 1px solid var(--signal);
}

.btn-primary:hover {
    transform: translateY(-2px);
}

.preview-frame {
    width: min(100%, 620px);
    max-width: 100%;
    margin-left: auto;
    border: 1px solid var(--line);
    border-radius: 20px;
    overflow: hidden;
    background: linear-gradient(180deg, var(--panel), var(--panel-2));
    box-shadow: 0 30px 60px -30px rgba(0, 0, 0, 0.6);
}

.preview-image {
    display: block;
    width: 100%;
    height: auto;
}

@keyframes rise {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 900px) {
    .panel {
        grid-template-columns: 1fr;
    }

    .preview-frame {
        width: min(100%, 420px);
        margin-inline: 0 auto;
    }
}

@media (prefers-reduced-motion: reduce) {
    .copy,
    .preview-wrap {
        animation: none !important;
        opacity: 1;
        transform: none;
    }
}
</style>
