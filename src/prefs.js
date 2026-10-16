import { reactive, watch } from 'vue'

const messages = {
  id: {
    tagline: 'Satu manusia. Satu kehidupan. Satu sistem.',
    welcome: 'Selamat datang',
    registerTitle: 'Belum punya akun?',
    registerDesc: 'Daftar untuk mulai menggunakan.',
    registerCta: 'Daftar',
    loginTitle: 'Sudah punya akun?',
    loginDesc: 'Masuk untuk lanjut penggunaan.',
    loginCta: 'Masuk',
    language: 'Bahasa',
    languagePlaceholder: 'Pilih Bahasa',
    theme: 'Tema tampilan',
    themeLight: 'Terang',
    themeDark: 'Gelap',
    themeSystem: 'Tema Tampilan',
    registerHeading: 'Daftar Akun Aorta',
    registerSubtitle:
      'Lengkapi data berikut untuk mendaftar dan menggunakan aplikasi Aorta.',
    fFullName: 'Nama Lengkap',
    phFullName: 'Masukkan nama lengkap',
    fDob: 'Tanggal Lahir',
    phDay: 'Tanggal',
    phMonth: 'Bulan',
    phYear: 'Tahun',
    fPhone: 'Nomor Telepon',
    phPhone: 'Masukkan nomor telepon aktif',
    fOtp: 'Kode Verifikasi',
    phOtp: 'Masukkan kode verifikasi',
    fPassword: 'Kata Sandi',
    phPassword: 'Masukkan kata sandi',
    helperPassword: 'Wajib memasukkan kata sandi dengan kombinasi huruf dan angka',
    helperPassword2:
      'Pastikan kamu mengingat kata sandi ini untuk masuk ke Aorta.',
    fPasswordConfirm: 'Ulangi Kata Sandi',
    phPasswordConfirm: 'Masukkan ulang kata sandi',
    ctaContinue: 'Lanjut',
    showPassword: 'Tampilkan kata sandi',
    hidePassword: 'Sembunyikan kata sandi',
    months: [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ],
    countries: [
      { v: '+62', l: 'Indonesia (+62)', p: '0812 3456 7890' },
      { v: '+60', l: 'Malaysia (+60)', p: '012 345 6789' },
      { v: '+65', l: 'Singapura (+65)', p: '8123 4567' },
      { v: '+63', l: 'Filipina (+63)', p: '0917 123 4567' },
      { v: '+66', l: 'Thailand (+66)', p: '081 234 5678' },
      { v: '+1', l: 'Amerika (+1)', p: '(201) 555-0123' },
      { v: '+44', l: 'Inggris (+44)', p: '7400 123456' },
      { v: '+81', l: 'Jepang (+81)', p: '090 1234 5678' },
    ],
  },
  en: {
    tagline: 'One person. One life. One system.',
    welcome: 'Welcome',
    registerTitle: 'No account yet AORTA?',
    registerDesc: 'Register to start.',
    registerCta: 'Register',
    loginTitle: 'Already have an account?',
    loginDesc: 'Sign in to continue.',
    loginCta: 'Sign in',
    language: 'Language',
    languagePlaceholder: 'Choose Language',
    theme: 'Appearance',
    themeLight: 'Light',
    themeDark: 'Dark',
    themeSystem: 'Display Theme',
    registerHeading: 'Create Aorta Account',
    registerSubtitle:
      'Complete the following data to register and use the Aorta application.',
    fFullName: 'Full Name',
    phFullName: 'Enter your full name',
    fDob: 'Date of Birth',
    phDay: 'Day',
    phMonth: 'Month',
    phYear: 'Year',
    fPhone: 'Phone Number',
    phPhone: 'Enter your active phone number',
    fOtp: 'Verification Code',
    phOtp: 'Enter verification code',
    fPassword: 'Password',
    phPassword: 'Enter your password',
    helperPassword: 'Password must be a combination of letters and numbers',
    helperPassword2: 'Make sure you remember this password to sign in to Aorta.',
    fPasswordConfirm: 'Confirm Password',
    phPasswordConfirm: 'Re-enter your password',
    ctaContinue: 'Continue',
    showPassword: 'Show password',
    hidePassword: 'Hide password',
    months: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    countries: [
      { v: '+62', l: 'Indonesia (+62)', p: '0812 3456 7890' },
      { v: '+60', l: 'Malaysia (+60)', p: '012 345 6789' },
      { v: '+65', l: 'Singapore (+65)', p: '8123 4567' },
      { v: '+63', l: 'Philippines (+63)', p: '0917 123 4567' },
      { v: '+66', l: 'Thailand (+66)', p: '081 234 5678' },
      { v: '+1', l: 'United States (+1)', p: '(201) 555-0123' },
      { v: '+44', l: 'United Kingdom (+44)', p: '7400 123456' },
      { v: '+81', l: 'Japan (+81)', p: '090 1234 5678' },
    ],
  },
}

const deviceLocale = (navigator.language || '').toLowerCase().startsWith('id')
  ? 'id'
  : 'en'

const prefs = reactive({
  locale: localStorage.getItem('aorta.lang') || '',
  theme: localStorage.getItem('aorta.theme') || 'system',
})

function t(key) {
  return messages[prefs.locale || deviceLocale]?.[key] ?? messages.id[key] ?? key
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
