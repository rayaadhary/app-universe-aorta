<script setup>
import { ref } from 'vue'
import { t } from '../prefs'

defineProps({
    placeholder: { type: String, default: '' },
    autocomplete: { type: String, default: 'off' },
})

// ponytail: input tanpa v-model (belum ada validasi/submit), sambungkan saat dibutuhkan
const show = ref(false)

const eye = [
    'M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z',
    'M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z',
]
const eyeOff = [
    'M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.774 3.162 10.066 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243',
]
</script>

<template>
    <div class="relative">
        <svg
            viewBox="0 0 24 24"
            class="pointer-events-none absolute top-1/2 left-4 h-4 w-4 -translate-y-1/2 text-muted dark:text-slate-500"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
        >
            <path
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
        </svg>

        <input
            :type="show ? 'text' : 'password'"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            class="field pr-11 pl-11"
        />

        <button
            type="button"
            class="absolute top-1/2 right-3 -translate-y-1/2 text-muted transition hover:text-ink dark:text-slate-400 dark:hover:text-white"
            :aria-label="show ? t('hidePassword') : t('showPassword')"
            :aria-pressed="show"
            @click="show = !show"
        >
            <svg
                viewBox="0 0 24 24"
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
            >
                <path v-for="(d, i) in (show ? eyeOff : eye)" :key="i" :d="d" />
            </svg>
        </button>
    </div>
</template>
