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
        <div class="section-inner" data-stage-scroll>
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
                            loading="eager"
                            decoding="async"
                            fetchpriority="high"
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
    max-height: 100%;
    padding: 0 15px;
    padding-inline: clamp(15px, 8vw, 140px);
    max-width: 1600px;
    margin-inline: auto;
    overflow-y: auto;
    overscroll-behavior: contain;
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
    opacity: 1;
    transform: none;
}

.preview-wrap {
    min-width: 0;
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
    position: relative;
    width: fit-content;
    max-width: 100%;
    margin-left: auto;
    transform: translateZ(0);
}

.preview-frame::before {
    content: '';
    position: absolute;
    inset: 12px -12px -12px 12px;
    border: 1px solid var(--depth-dim);
    border-radius: 16px;
}

.preview-image {
    position: relative;
    display: block;
    width: auto;
    max-width: 100%;
    max-height: min(78vh, 760px);
    height: auto;
    box-sizing: border-box;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--panel);
}

@media (max-width: 900px) {
    .panel {
        grid-template-columns: 1fr;
    }

    .preview-frame {
        margin-inline: 0 auto;
    }

    .preview-image {
        max-height: 52vh;
    }
}

@media (max-width: 640px) {
    .resume {
        align-items: stretch;
    }

    .section-inner {
        padding-block: 5.25rem 2rem;
        padding-inline: clamp(18px, 6vw, 30px);
    }

    .panel {
        gap: 1.35rem;
        align-items: start;
    }

    .eyebrow {
        margin-bottom: 0.75rem;
    }

    .title {
        margin-top: 0.75rem;
        font-size: clamp(1.7rem, 9vw, 2.25rem);
    }

    .desc {
        line-height: 1.6;
    }

    .actions {
        margin-top: 1.15rem;
    }

    .btn {
        width: 100%;
        box-sizing: border-box;
    }

    .preview-frame {
        width: 100%;
        margin-inline: auto;
    }

    .preview-frame::before {
        inset: 8px -8px -8px 8px;
        border-radius: 12px;
    }

    .preview-image {
        width: 100%;
        max-height: none;
        border-radius: 12px;
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
