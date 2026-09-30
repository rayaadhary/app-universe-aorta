<script setup>
import logo from './assets/logo.png'
// ponytail: tombol masih placeholder, arahkan ke /daftar & /masuk saat halaman itu dibuat
</script>

<template>
  <div
    class="relative min-h-dvh overflow-hidden font-sans"
    style="
      background-image:
        radial-gradient(110% 70% at 0% 0%, #e4f7f6 0%, transparent 55%),
        radial-gradient(90% 60% at 100% 100%, #eee9fc 0%, transparent 55%),
        linear-gradient(180deg, #fcfeff 0%, #f3f8fd 100%);
    "
  >
    <svg width="0" height="0" class="absolute">
      <defs>
        <linearGradient id="brand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="var(--color-brand-from)" />
          <stop offset="0.5" stop-color="var(--color-brand-mid)" />
          <stop offset="1" stop-color="var(--color-brand-to)" />
        </linearGradient>
      </defs>
    </svg>

    <svg
      class="pointer-events-none absolute -top-24 -left-20 w-[400px]"
      viewBox="0 0 400 300"
      fill="none"
      aria-hidden="true"
    >
      <path d="M-20 260C70 250 140 150 210 60C250 8 320-20 400-10" stroke="#8ed3e6" stroke-width="2" />
      <path d="M30-50C150 0 220 90 240 230" stroke="#cdeef5" stroke-width="1.5" />
    </svg>
    <svg
      class="pointer-events-none absolute -bottom-28 -right-24 w-[380px]"
      viewBox="0 0 380 300"
      fill="none"
      aria-hidden="true"
    >
      <path d="M420 20C330 50 260 150 240 330" stroke="#c9b8f5" stroke-width="2" />
    </svg>

    <main
      class="relative mx-auto flex min-h-dvh w-full max-w-md flex-col items-center px-6 pt-14 pb-9 text-center"
    >
      <img :src="logo" alt="AORTA" class="w-32" />

      <h1 class="mt-4 translate-x-[0.14em] text-4xl font-bold tracking-[0.28em] text-ink">AORTA</h1>
      <p class="mt-3 text-[15px] text-muted">Satu manusia. Satu kehidupan. Satu sistem.</p>

      <h2 class="mt-14 text-[34px] font-bold leading-tight text-ink">
        Selamat <span class="text-brand">datang!</span>
      </h2>

      <div class="mt-10 grid w-full grid-cols-2 gap-4">
        <article
          class="rounded-3xl border border-white/70 bg-white/55 px-4 py-7 shadow-[0_14px_44px_-20px_rgba(70,105,160,0.55)] backdrop-blur-sm"
        >
          <svg
            viewBox="0 0 24 24"
            class="mx-auto h-11 w-11"
            fill="none"
            stroke="url(#brand)"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M14 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="8" cy="7" r="4" />
            <path d="M19 8v6" />
            <path d="M22 11h-6" />
          </svg>
          <p class="mt-5 text-[11px] font-semibold tracking-[0.06em] text-slate-500">
            BELUM PUNYA AORTA?
          </p>
          <button
            type="button"
            class="mt-4 w-full rounded-full bg-brand py-3 text-sm font-bold tracking-[0.12em] text-white shadow-lg shadow-teal-500/20 transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-brand-to focus-visible:ring-offset-2 active:brightness-95"
          >
            DAFTAR
          </button>
        </article>

        <article
          class="rounded-3xl border border-white/70 bg-white/55 px-4 py-7 shadow-[0_14px_44px_-20px_rgba(70,105,160,0.55)] backdrop-blur-sm"
        >
          <svg
            viewBox="0 0 24 24"
            class="mx-auto h-11 w-11"
            fill="none"
            stroke="url(#brand)"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <path d="m10 17 5-5-5-5" />
            <path d="M15 12H3" />
          </svg>
          <p class="mt-5 text-[11px] font-semibold tracking-[0.06em] text-slate-500">
            SUDAH PUNYA AORTA?
          </p>
          <button
            type="button"
            class="mt-4 w-full rounded-full bg-brand py-3 text-sm font-bold tracking-[0.12em] text-white shadow-lg shadow-teal-500/20 transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-brand-to focus-visible:ring-offset-2 active:brightness-95"
          >
            MASUK
          </button>
        </article>
      </div>

      <button
        type="button"
        class="mt-auto flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/85 px-5 py-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-white focus-visible:ring-2 focus-visible:ring-brand-to focus-visible:ring-offset-2"
      >
        <svg
          viewBox="0 0 24 24"
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a14 14 0 0 1 3.5 9A14 14 0 0 1 12 21a14 14 0 0 1-3.5-9A14 14 0 0 1 12 3z" />
        </svg>
        Bahasa Indonesia
        <svg
          viewBox="0 0 24 24"
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </main>
  </div>
</template>
