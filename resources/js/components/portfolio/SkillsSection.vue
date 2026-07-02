<script setup lang="ts">
import type { Component } from 'vue';
import {
    Atom,
    Blocks,
    Braces,
    Brain,
    Cloud,
    Code,
    Coffee,
    Container,
    Database,
    DraftingCompass,
    Figma,
    FileCode,
    Flame,
    FolderOpen,
    Github,
    GitBranch,
    LayoutTemplate,
    MessageSquareText,
    Network,
    Palette,
    PanelTop,
    ScanSearch,
    Search,
    Send,
    Smartphone,
    Sparkles,
    SquareTerminal,
    Table2,
    Triangle,
    Wind,
} from 'lucide-vue-next';
import { useSectionSlide } from '@/composables/useScrollStage';
import type { SkillGroup, SkillItem } from '@/types/portfolio';

defineProps<{ skills: SkillGroup[] }>();

const { isActiveSection } = useSectionSlide('skills');

const iconMap: Record<string, Component> = {
    api: Network,
    blocks: Blocks,
    brain: Brain,
    cloud: Cloud,
    coffee: Coffee,
    container: Container,
    dart: Code,
    database: Database,
    'drafting-compass': DraftingCompass,
    firebase: Flame,
    flame: Flame,
    'folder-open': FolderOpen,
    'git-branch': GitBranch,
    github: Github,
    javascript: Braces,
    laravel: Braces,
    'layout-template': LayoutTemplate,
    'message-square-text': MessageSquareText,
    nextjs: Triangle,
    palette: Palette,
    'panel-top': PanelTop,
    'pen-tool': Figma,
    php: FileCode,
    python: Code,
    react: Atom,
    'scan-search': ScanSearch,
    search: Search,
    send: Send,
    smartphone: Smartphone,
    sparkles: Sparkles,
    'table-2': Table2,
    triangle: Triangle,
    typescript: SquareTerminal,
    wind: Wind,
};

function getIcon(item: SkillItem): Component {
    return item.logo ? iconMap[item.logo] ?? Code : Code;
}
</script>

<template>
    <section class="stage-section skills" :class="{ 'is-active': isActiveSection }">
        <div class="section-inner">
            <p class="eyebrow">RECORD 06 / 07 &middot; SKILLS</p>

            <div class="grid">
                <article
                    v-for="(group, i) in skills"
                    :key="group.title"
                    class="card"
                    :style="{ transitionDelay: `${0.08 * i}s` }"
                >
                    <h3 class="title">{{ group.title }}</h3>
                    <div class="icon-grid">
                        <span v-for="item in group.items" :key="item.name" class="icon-tile" :aria-label="item.name" :title="item.name">
                            <component :is="getIcon(item)" class="icon" aria-hidden="true" />
                        </span>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>

<style scoped>
.skills {
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

.eyebrow {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: var(--depth);
    margin-bottom: 1.75rem;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.9rem;
}

.card {
    border: 1px solid var(--line);
    border-radius: 12px;
    padding: 1rem;
    background: var(--panel);
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.5s ease, transform 0.5s ease, border-color 0.2s ease;
}

.is-active .card {
    opacity: 1;
    transform: translateY(0);
}

.card:hover {
    border-color: var(--depth-dim);
}

.title {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--signal);
}

.icon-grid {
    margin-top: 0.85rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, 48px);
    gap: 0.55rem;
}

.icon-tile {
    display: grid;
    place-items: center;
    min-height: 48px;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--panel-2);
    color: var(--paper);
    transition: transform 0.18s ease, border-color 0.18s ease, color 0.18s ease;
}

.icon-tile:hover {
    transform: translateY(-2px);
    border-color: var(--signal-dim);
    color: var(--signal);
}

.icon {
    width: 21px;
    height: 21px;
}

@media (max-width: 980px) {
    .grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (max-width: 620px) {
    .grid {
        grid-template-columns: 1fr;
    }
}

@media (prefers-reduced-motion: reduce) {
    .card {
        transition: none;
        opacity: 1;
        transform: none;
    }

    .icon-tile {
        transition: none;
    }
}
</style>
