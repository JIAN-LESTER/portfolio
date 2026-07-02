<script setup lang="ts">
// Purely decorative. Contour lines nod to BukCast's weather-map dashboard;
// the dot grid nods to embeddings/vector space from the RAG work. Kept at
// very low opacity so it reads as texture, not decoration.
</script>

<template>
    <div class="field" aria-hidden="true">
        <svg class="contours" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            <path d="M-50,120 C 200,40 400,200 650,110 S 1100,60 1250,140" />
            <path d="M-50,260 C 220,180 420,340 660,250 S 1080,190 1250,280" />
            <path d="M-50,400 C 240,320 440,480 680,390 S 1060,330 1250,420" />
            <path d="M-50,540 C 260,460 460,620 700,530 S 1040,470 1250,560" />
            <path d="M-50,680 C 280,600 480,760 720,670 S 1020,610 1250,700" />
        </svg>
        <div class="dots"></div>
        <div class="vignette"></div>
    </div>
</template>

<style scoped>
.field {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
    z-index: 0;
}

.contours {
    position: absolute;
    inset: -10%;
    width: 120%;
    height: 120%;
    opacity: 0.16;
    animation: drift 60s linear infinite alternate;
}

.contours path {
    fill: none;
    stroke: var(--depth);
    stroke-width: 1;
}

.contours path:nth-child(odd) {
    stroke: var(--signal);
    opacity: 0.6;
}

.dots {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(var(--line) 1px, transparent 1px);
    background-size: 28px 28px;
    opacity: 0.35;
}

.vignette {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 20%, transparent 0%, var(--ink) 78%);
}

@keyframes drift {
    from {
        transform: translate(0, 0) scale(1);
    }
    to {
        transform: translate(-2%, 1.5%) scale(1.03);
    }
}

@media (prefers-reduced-motion: reduce) {
    .contours {
        animation: none;
    }
}
</style>