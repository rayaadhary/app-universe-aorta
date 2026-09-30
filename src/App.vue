<script setup>
import logo from './assets/logo.png'
import { prefs, t } from './prefs'
// ponytail: tombol masih placeholder, arahkan ke /daftar & /masuk saat halaman itu dibuat
</script>

<template>
  <div class="bg-page relative min-h-dvh overflow-hidden font-sans">
    <svg width="0" height="0" class="absolute" aria-hidden="true">
      <defs>
        <linearGradient id="brand" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
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
      class="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pt-14 pb-9 text-center"
    >
      <img :src="logo" alt="AORTA" class="mx-auto w-28" />

      <h1
        class="mt-4 translate-x-[0.14em] text-4xl font-bold tracking-[0.28em] text-ink dark:text-white"
      >
        AORTA
      </h1>
      <p class="mt-3 text-[15px] text-muted dark:text-slate-400">{{ t('tagline') }}</p>

      <h2 class="mt-12 text-[34px] font-bold leading-tight text-ink dark:text-white">
        {{ t('welcome') }}
      </h2>

      <div class="mt-10 flex flex-col gap-5">
        <article
          class="rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-[0_16px_44px_-24px_rgba(70,105,160,0.55)] dark:border-white/10 dark:bg-white/5 dark:shadow-none"
        >
          <div class="flex items-start gap-4">
            <svg
              viewBox="0 0 24 24"
              class="mt-1 h-11 w-11 shrink-0"
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
            <div>
              <h3 class="text-base font-semibold text-ink dark:text-white">
                {{ t('registerTitle') }}
              </h3>
              <p class="mt-1 text-sm leading-relaxed text-muted dark:text-slate-400">
                {{ t('registerDesc') }}
              </p>
            </div>
          </div>
          <button
            type="button"
            class="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm font-semibold tracking-[0.1em] text-white uppercase shadow-lg shadow-teal-500/20 transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-brand-to active:brightness-95"
          >
            {{ t('registerCta') }}
          </button>
        </article>

        <article
          class="rounded-3xl border border-slate-100 bg-white p-5 text-left shadow-[0_16px_44px_-24px_rgba(70,105,160,0.55)] dark:border-white/10 dark:bg-white/5 dark:shadow-none"
        >
          <div class="flex items-start gap-4">
            <svg
              viewBox="0 0 24 24"
              class="mt-1 h-11 w-11 shrink-0"
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
            <div>
              <h3 class="text-base font-semibold text-ink dark:text-white">
                {{ t('loginTitle') }}
              </h3>
              <p class="mt-1 text-sm leading-relaxed text-muted dark:text-slate-400">
                {{ t('loginDesc') }}
              </p>
            </div>
          </div>
          <button
            type="button"
            class="mt-5 flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 py-3.5 text-sm font-semibold tracking-[0.1em] text-ink uppercase transition hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand-to dark:border-white/25 dark:text-white dark:hover:bg-white/10"
          >
            {{ t('loginCta') }}
          </button>
        </article>
      </div>

      <div class="mt-auto flex flex-wrap items-center justify-center gap-3 pt-8">
        <label
          class="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[13px] font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path
              d="M12 3a14 14 0 0 1 3.5 9A14 14 0 0 1 12 21a14 14 0 0 1-3.5-9A14 14 0 0 1 12 3z"
            />
          </svg>
          <select
            v-model="prefs.locale"
            :aria-label="t('language')"
            class="cursor-pointer appearance-none bg-transparent pr-1 outline-none"
          >
            <option value="id">Bahasa Indonesia</option>
            <option value="en">English</option>
          </select>
          <svg
            viewBox="0 0 24 24"
            class="h-3.5 w-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </label>

        <label
          class="flex cursor-pointer items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[13px] font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 dark:border-white/15 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10"
        >
          <svg
            viewBox="0 0 24 24"
            class="h-4 w-4 shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none" />
          </svg>
          <select
            v-model="prefs.theme"
            :aria-label="t('theme')"
            class="cursor-pointer appearance-none bg-transparent pr-1 outline-none"
          >
            <option value="light">{{ t('themeLight') }}</option>
            <option value="dark">{{ t('themeDark') }}</option>
            <option value="system">{{ t('themeSystem') }}</option>
          </select>
          <svg
            viewBox="0 0 24 24"
            class="h-3.5 w-3.5 shrink-0"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </label>
      </div>
    </main>
  </div>
</template>
