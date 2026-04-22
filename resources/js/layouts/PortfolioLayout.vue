<template>
    <div class="min-h-screen bg-[radial-gradient(circle_at_top,_#0f172a,_#020617_55%)] text-slate-100">
        <div class="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-8 lg:px-10">
            <header class="mb-10 flex items-center justify-between border-b border-white/10 pb-6">
                <div>
                    <p class="text-xs font-semibold uppercase tracking-[0.35em] text-cyan-300">
                        Portfolio
                    </p>
                    <h1 class="mt-2 text-2xl font-semibold text-white">
                        Section page sample
                    </h1>
                </div>

                <nav class="hidden gap-6 text-sm text-slate-300 md:flex">
                    <a href="#about" class="transition hover:text-white">About</a>
                    <a href="#education" class="transition hover:text-white">Education</a>
                    <a href="#projects" class="transition hover:text-white">Projects</a>
                    <a href="#skills" class="transition hover:text-white">Skills</a>
                </nav>
            </header>

            <main class="flex-1">
                <slot />
            </main>
        </div>
    </div>
</template>
