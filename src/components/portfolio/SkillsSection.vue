<script setup lang="ts">
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
    Layers,
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
import * as si from 'simple-icons/icons';
import type { Component } from 'vue';
import { useSectionSlide } from '@/composables/useScrollStage';
import type { SkillGroup, SkillItem } from '@/types/portfolio';

defineProps<{ skills: SkillGroup[] }>();

const { isActiveSection } = useSectionSlide('skills');

const brandMap: Record<string, { path: string; hex: string }> = {
    dart: si.siDart,
    docker: si.siDocker,
    figma: si.siFigma,
    firebase: si.siFirebase,
    firebasefunctions: si.siFirebase,
    firebasestorage: si.siFirebase,
    flutter: si.siFlutter,
    git: si.siGit,
    github: si.siGithub,
    javascript: si.siJavascript,
    laravel: si.siLaravel,
    mysql: si.siMysql,
    nextjs: si.siNextdotjs,
    php: si.siPhp,
    postgresql: si.siPostgresql,
    prisma: si.siPrisma,
    react: si.siReact,
    tailwindcss: si.siTailwindcss,
    typescript: si.siTypescript,
    vercel: si.siVercel,
};

function brandKey(value: string) {
    return value.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function getBrand(item: SkillItem) {
    return brandMap[brandKey(item.name)];
}

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
    'file-type': SquareTerminal,
    flame: Flame,
    'folder-open': FolderOpen,
    'git-branch': GitBranch,
    github: Github,
    javascript: Braces,
    laravel: Braces,
    layers: Layers,
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
    return item.logo ? (iconMap[item.logo] ?? Code) : Code;
}
</script>

<template>
    <section
        class="stage-section skills"
        :class="{ 'is-active': isActiveSection }"
    >
        <div class="section-inner" data-stage-scroll>
            <p class="eyebrow">SKILLS</p>

            <div class="grid">
                <article
                    v-for="(group, i) in skills"
                    :key="group.title"
                    class="card"
                    :style="{ transitionDelay: `${0.08 * i}s` }"
                >
                    <h3 class="title">{{ group.title }}</h3>
                    <div class="icon-grid">
                        <span
                            v-for="item in group.items"
                            :key="item.name"
                            class="icon-tile"
                        >
                            <span class="icon-visual">
                                <svg
                                    v-if="getBrand(item)"
                                    viewBox="0 0 24 24"
                                    class="icon icon--brand"
                                    :style="{
                                        '--brand-color': `#${getBrand(item)!.hex}`,
                                    }"
                                >
                                    <path :d="getBrand(item)!.path" />
                                </svg>
                                <component
                                    :is="getIcon(item)"
                                    v-else
                                    class="icon"
                                    aria-hidden="true"
                                />
                            </span>
                            <span class="icon-name">{{ item.name }}</span>
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
    max-height: 100%;
    overflow-y: auto;
    overscroll-behavior: contain;
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
    opacity: 1;
    transform: translateY(0);
    transition:
        opacity 0.5s ease,
        transform 0.5s ease,
        border-color 0.2s ease;
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
    grid-template-columns: repeat(auto-fill, minmax(84px, 1fr));
    gap: 0.6rem;
}

.icon-tile {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
    padding: 0.75rem 0.4rem;
    border: 1px solid var(--line);
    border-radius: 10px;
    background: var(--panel-2);
    transition:
        transform 0.18s ease,
        border-color 0.18s ease,
        background 0.18s ease;
}

.icon-tile:hover {
    transform: translateY(-3px);
    border-color: var(--signal-dim);
    background: var(--panel);
}

.icon-visual {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
}

.icon {
    width: 22px;
    height: 22px;
    color: var(--paper);
    transition: color 0.18s ease;
}

.icon--brand {
    fill: var(--brand-color, var(--paper));
    opacity: 0.85;
    transition: opacity 0.18s ease;
}

.icon-tile:hover .icon--brand {
    opacity: 1;
}

.icon-tile:hover .icon {
    color: var(--signal);
}

.icon-name {
    font-family: var(--font-mono);
    font-size: 0.62rem;
    letter-spacing: 0.02em;
    color: var(--depth);
    text-align: center;
    line-height: 1.2;
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
    .skills {
        align-items: stretch;
    }

    .section-inner {
        padding-block: 5.5rem 2rem;
        padding-inline: clamp(18px, 6vw, 30px);
    }

    .eyebrow {
        margin-bottom: 1.35rem;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 1.25rem;
        padding-bottom: 1rem;
    }

    .card {
        padding: 1.1rem;
    }

    .icon-grid {
        gap: 0.75rem;
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
