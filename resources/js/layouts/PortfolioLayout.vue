<template>
    <div class="min-h-screen scroll-smooth bg-[radial-gradient(circle_at_top,_#164e63,_#020617_45%)] text-slate-100">
        <div class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-8 lg:px-10">
            <header class="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/80 py-5 backdrop-blur">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                        Portfolio
                    </p>
                    <h1 class="mt-1 text-xl font-semibold text-white">
                        Jian Lester Tabarno
                    </h1>
                </div>

                <nav class="hidden gap-6 text-sm text-slate-300 md:flex">
                    <a href="#hero" class="transition hover:text-white">Home</a>
                    <a href="#about" class="transition hover:text-white">About</a>
                    <a href="#education" class="transition hover:text-white">Education</a>
                    <a href="#projects" class="transition hover:text-white">Projects</a>
                    <a href="#skills" class="transition hover:text-white">Skills</a>
                    <a href="#contact" class="transition hover:text-white">Contact</a>
                </nav>
            </header>

            <main class="flex-1 pb-12">
                <slot />
            </main>
        </div>
    </div>
</template>
