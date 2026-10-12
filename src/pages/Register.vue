<script setup>
import { computed, ref } from 'vue'
import logo from '../assets/logo.png'
import { t } from '../prefs'
import PrefsBar from '../components/PrefsBar.vue'
import SecureInput from '../components/SecureInput.vue'

const years = Array.from({ length: 90 }, (_, i) => new Date().getFullYear() - i)

const country = ref(t('countries')[0].v)
const phoneSample = computed(
    () => t('countries').find((c) => c.v === country.value)?.p ?? t('phPhone')
)
</script>

<template>
    <main
        class="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-6 pt-12 pb-9 text-center"
    >
        <div class="flex flex-wrap items-center justify-center gap-3">
            <svg
                viewBox="0 0 24 24"
                class="h-8 w-8 shrink-0 text-brand"
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
            <h1
                class="text-center text-2xl font-bold text-ink dark:text-white"
            >
                {{ t("registerHeading") }}
            </h1>
            <img :src="logo" alt="AORTA" class="h-8 w-auto" />
        </div>

        <p class="mt-4 text-sm leading-relaxed text-muted dark:text-slate-400">
            {{ t("registerSubtitle") }}
        </p>

        <form class="mt-7 space-y-4 text-left" @submit.prevent>
            <label
                class="block text-[13px] font-medium text-ink dark:text-white"
            >
                {{ t("fFullName") }}
                <span class="relative mt-1.5 block">
                    <svg
                        viewBox="0 0 24 24"
                        class="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted dark:text-slate-500"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.8"
                        stroke-linecap="round"
                        aria-hidden="true"
                    >
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4.5 19.5a7.5 7.5 0 0 1 15 0" />
                    </svg>
                    <input
                        type="text"
                        autocomplete="name"
                        :placeholder="t('phFullName')"
                        class="field pr-4 pl-11"
                    />
                </span>
            </label>

            <div>
                <p
                    class="text-[13px] font-medium text-ink dark:text-white"
                >
                    {{ t("fDob") }}
                </p>
                <div class="mt-1.5 grid grid-cols-[1.15fr_1.3fr_1fr] gap-2">
                    <select
                        class="field pr-8 pl-4"
                        :aria-label="t('phDay')"
                    >
                        <option value="">{{ t("phDay") }}</option>
                        <option v-for="d in 31" :key="d" :value="d">
                            {{ d }}
                        </option>
                    </select>
                    <select
                        class="field pr-8 pl-4"
                        :aria-label="t('phMonth')"
                    >
                        <option value="">{{ t("phMonth") }}</option>
                        <option v-for="(m, i) in t('months')" :key="m" :value="i + 1">
                            {{ m }}
                        </option>
                    </select>
                    <select
                        class="field pr-8 pl-4"
                        :aria-label="t('phYear')"
                    >
                        <option value="">{{ t("phYear") }}</option>
                        <option v-for="y in years" :key="y" :value="y">
                            {{ y }}
                        </option>
                    </select>
                </div>
            </div>

            <label
                class="block text-[13px] font-medium text-ink dark:text-white"
            >
                {{ t("fPhone") }}
                <span class="mt-1.5 grid grid-cols-[3fr_2fr] gap-2">
                    <span class="relative block">
                        <svg
                            viewBox="0 0 24 24"
                            class="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-muted dark:text-slate-500"
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
                            v-model="country"
                            class="field pr-6 pl-10"
                            :aria-label="t('fPhone')"
                        >
                            <option
                                v-for="c in t('countries')"
                                :key="c.v"
                                :value="c.v"
                            >
                                {{ c.l }}
                            </option>
                        </select>
                    </span>
                    <input
                        type="tel"
                        autocomplete="tel"
                        :placeholder="phoneSample"
                        class="field px-4"
                    />
                </span>
            </label>

            <div>
                <p class="text-[13px] font-medium text-ink dark:text-white">
                    {{ t("fOtp") }}
                </p>
                <div class="mt-1.5 grid grid-cols-6 gap-2">
                    <input
                        v-for="i in 6"
                        :key="i"
                        type="text"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        maxlength="1"
                        class="field text-center"
                        :aria-label="`${t('fOtp')} ${i}`"
                    />
                </div>
            </div>

            <label
                class="block text-[13px] font-medium text-ink dark:text-white"
            >
                {{ t("fPassword") }}
                <SecureInput
                    class="mt-1.5"
                    :placeholder="t('phPassword')"
                    autocomplete="new-password"
                />
                <span
                    class="mt-1.5 block text-[11px] leading-snug text-muted dark:text-slate-400"
                >
                    {{ t("helperPassword") }}
                </span>
            </label>

            <label
                class="block text-[13px] font-medium text-ink dark:text-white"
            >
                {{ t("fPasswordConfirm") }}
                <SecureInput
                    class="mt-1.5"
                    :placeholder="t('phPasswordConfirm')"
                    autocomplete="new-password"
                />
                <span
                    class="mt-1 block text-[11px] leading-snug text-muted dark:text-slate-400"
                >
                    {{ t("helperPassword2") }}
                </span>
            </label>

            <button
                type="button"
                class="mt-2 w-full rounded-full bg-brand py-3 text-sm font-semibold tracking-wider text-white uppercase shadow-lg shadow-teal-500/20 transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-brand-to active:brightness-95"
            >
                {{ t("ctaContinue") }}
            </button>
        </form>

        <PrefsBar justify="between" class="mt-auto pt-8" />
    </main>
</template>
