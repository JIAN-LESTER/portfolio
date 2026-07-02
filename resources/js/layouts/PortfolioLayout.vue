<template>
    <div class="min-h-screen scroll-smooth bg-[radial-gradient(circle_at_top,_#164e63,_#020617_45%)] text-slate-100">
        <header class="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
            <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
                <a href="#hero" class="shrink-0">
                    <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                        Portfolio
                    </p>
                    <h1 class="mt-1 text-xl font-semibold text-white">
                        Jian Lester Tabarno
                    </h1>
                </a>

                <nav class="flex w-full gap-5 overflow-x-auto pb-1 text-sm whitespace-nowrap text-slate-300 md:w-auto md:gap-6 md:pb-0">
                    <a href="#hero" class="transition hover:text-white focus:text-white">Home</a>
                    <a href="#about" class="transition hover:text-white focus:text-white">About</a>
                    <a href="#education" class="transition hover:text-white focus:text-white">Education</a>
                    <a href="#projects" class="transition hover:text-white focus:text-white">Projects</a>
                    <a href="#services" class="transition hover:text-white focus:text-white">Services</a>
                    <a href="#skills" class="transition hover:text-white focus:text-white">Skills</a>
                    <a href="#contact" class="transition hover:text-white focus:text-white">Contact</a>
                </nav>
            </div>
        </header>

        <div class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 sm:px-8 lg:px-10">
            <main class="flex-1 pb-12">
                <slot />
            </main>
        </div>
    </div>
</template>
