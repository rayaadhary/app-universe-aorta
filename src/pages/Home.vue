<script setup>
import logo from '../assets/logo.png'
import { t } from '../prefs'
import PrefsBar from '../components/PrefsBar.vue'
</script>

<template>
    <main
        class="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pt-14 pb-9 text-center"
    >
        <img :src="logo" alt="AORTA" class="mx-auto w-28" />

        <h1
            class="mt-4 translate-x-[0.14em] text-4xl font-bold tracking-[0.28em] text-ink dark:text-white"
        >
            AORTA
        </h1>
         <p class="mt-3 text-[15px] text-muted dark:text-slate-400">
            {{ t("tagline") }}
        </p> 

        <h2
            class="mt-12 text-[34px] font-bold leading-tight text-ink dark:text-white"
        >
            {{ t("welcome") }}
        </h2>
        <div class="mt-10 grid grid-cols-2 gap-2.5 sm:gap-5">
          <!-- Card Register -->
          <article
            class="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-5 text-left shadow-[0_16px_44px_-24px_rgba(70,105,160,0.55)] dark:border-white/10 dark:bg-white/5 dark:shadow-none"
          >
            <!-- Header: Flexbox (Ikon di kiri melingkupi 2 baris teks di kanan) -->
            <div class="flex items-center gap-2.5 sm:gap-3.5">
              <!-- Icon (Kiri) -->
              <svg
                viewBox="0 0 24 24"
                class="h-8 w-8 sm:h-10 sm:w-10 shrink-0 text-brand"
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
              
              <!-- Container Teks (Kanan: Title + Desc tersusun vertikal) -->
              <div class="flex flex-col justify-center min-w-0">
                <h3 class="text-xs font-semibold text-ink dark:text-white sm:text-base leading-tight break-words">
                  {{ t("registerTitle") }}
                </h3>
                <p class="mt-0.5 text-[10px] sm:text-sm leading-snug text-muted dark:text-slate-400 break-words">
                  {{ t("registerDesc") }}
                </p>
              </div>
            </div>
        
            <!-- Button -->
            <RouterLink
              to="/daftar"
              class="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-brand py-2.5 px-2 text-xs sm:text-sm font-semibold tracking-wider text-white capitalize shadow-lg shadow-teal-500/20 transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-brand-to active:brightness-95"
            >
              <span class="truncate">{{ t("registerCta") }}</span>
            </RouterLink>
          </article>
        
          <!-- Card Login -->
          <article
            class="flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-5 text-left shadow-[0_16px_44px_-24px_rgba(70,105,160,0.55)] dark:border-white/10 dark:bg-white/5 dark:shadow-none"
          >
            <!-- Header: Flexbox (Ikon di kiri melingkupi 2 baris teks di kanan) -->
            <div class="flex items-center gap-2.5 sm:gap-3.5">
              <!-- Icon (Kiri) -->
              <svg
                viewBox="0 0 24 24"
                class="h-8 w-8 sm:h-10 sm:w-10 shrink-0 text-brand"
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
              
              <!-- Container Teks (Kanan: Title + Desc tersusun vertikal) -->
              <div class="flex flex-col justify-center min-w-0">
                <h3 class="text-xs font-semibold text-ink dark:text-white sm:text-base leading-tight break-words">
                  {{ t("loginTitle") }}
                </h3>
                <p class="mt-0.5 text-[10px] sm:text-sm leading-snug text-muted dark:text-slate-400 break-words">
                  {{ t("loginDesc") }}
                </p>
              </div>
            </div>
        
            <!-- Button -->
            <button
              type="button"
              class="mt-4 flex w-full items-center justify-center gap-1.5 rounded-full bg-brand py-2.5 px-2 text-xs sm:text-sm font-semibold tracking-wider text-white capitalize shadow-lg shadow-teal-500/20 transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-brand-to active:brightness-95"
            >
              <span class="truncate">{{ t("loginCta") }}</span>
            </button>
          </article>
        </div>

        <PrefsBar justify="center" class="mt-auto pt-8" />
    </main>
</template>
