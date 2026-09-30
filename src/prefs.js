import { reactive, watch } from 'vue'

const messages = {
  id: {
    tagline: 'Satu manusia. Satu kehidupan. Satu sistem.',
    welcome: 'Selamat datang',
    registerTitle: 'Belum punya akun AORTA?',
    registerDesc: 'Daftar untuk mulai menggunakan.',
    registerCta: 'Daftar',
    loginTitle: 'Sudah punya akun AORTA?',
    loginDesc: 'Masuk untuk lanjut penggunaan.',
    loginCta: 'Masuk',
    language: 'Bahasa',
    theme: 'Tema tampilan',
    themeLight: 'Terang',
    themeDark: 'Gelap',
    themeSystem: 'Sistem',
  },
  en: {
    tagline: 'One person. One life. One system.',
    welcome: 'Welcome',
    registerTitle: 'No account yet AORTA?',
    registerDesc: 'Register now to start using AORTA.',
    registerCta: 'Register',
    loginTitle: 'Already have an account AORTA?',
    loginDesc: 'Sign in to continue to your account.',
    loginCta: 'Sign in',
    language: 'Language',
    theme: 'Appearance',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'System',
  },
}

const prefs = reactive({
  locale: localStorage.getItem('aorta.lang') || 'id',
  theme: localStorage.getItem('aorta.theme') || 'system',
})

function t(key) {
  return messages[prefs.locale]?.[key] ?? messages.id[key] ?? key
}

function applyTheme() {
  const dark =
    prefs.theme === 'dark' ||
    (prefs.theme === 'system' && matchMedia('(prefers-color-scheme: dark)').matches)
  document.documentElement.classList.toggle('dark', dark)
}

watch(prefs, () => {
  localStorage.setItem('aorta.lang', prefs.locale)
  localStorage.setItem('aorta.theme', prefs.theme)
  applyTheme()
})

matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (prefs.theme === 'system') applyTheme()
})

applyTheme()

export { prefs, t }
