<script setup>
import { prefs, t } from '../prefs'

defineProps({
    justify: { type: String, default: 'center' },
})
</script>

<template>
    <div
        class="flex flex-wrap items-center gap-3"
        :class="justify === 'between' ? 'justify-between' : 'justify-center'"
    >
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
                <path
                    d="M12 3a9 9 0 0 0 0 18z"
                    fill="currentColor"
                    stroke="none"
                />
            </svg>
            <select
                v-model="prefs.theme"
                :aria-label="t('theme')"
                class="cursor-pointer appearance-none bg-transparent pr-1 outline-none"
            >
                <option value="light">{{ t("themeLight") }}</option>
                <option value="dark">{{ t("themeDark") }}</option>
                <option value="system">{{ t("themeSystem") }}</option>
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
</template>
