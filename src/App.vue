<template>
    <div class="bg-page relative min-h-dvh overflow-hidden font-sans">
        <svg width="0" height="0" class="absolute" aria-hidden="true">
            <defs>
                <linearGradient
                    id="brand"
                    gradientUnits="userSpaceOnUse"
                    x1="0"
                    y1="0"
                    x2="24"
                    y2="24"
                >
                    <stop offset="0" stop-color="var(--color-brand-from)" />
                    <stop offset="0.5" stop-color="var(--color-brand-mid)" />
                    <stop offset="1" stop-color="var(--color-brand-to)" />
                </linearGradient>
            </defs>
        </svg>

        <RouterView />
    </div>
</template>
