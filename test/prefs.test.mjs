import assert from 'node:assert/strict'

const store = new Map()
globalThis.localStorage = {
  getItem: (k) => store.get(k) ?? null,
  setItem: (k, v) => store.set(k, v),
}
globalThis.matchMedia = () => ({ matches: false, addEventListener() {} })
const classes = new Set()
globalThis.document = {
  createElement: () => ({ innerHTML: '', content: { firstChild: null } }),
  documentElement: {
    classList: {
      toggle: (name, force) => (force ? classes.add(name) : classes.delete(name)),
      contains: (name) => classes.has(name),
    },
  },
}

const { prefs, t } = await import('../src/prefs.js')
const { nextTick } = await import('vue')

prefs.theme = 'dark'
await nextTick()
assert.ok(classes.has('dark'), 'theme dark -> html.dark')

prefs.theme = 'light'
await nextTick()
assert.ok(!classes.has('dark'), 'theme light -> no html.dark')

prefs.locale = 'en'
await nextTick()
assert.equal(t('welcome'), 'Welcome!')
assert.equal(store.get('aorta.theme'), 'light', 'theme tersimpan')
assert.equal(store.get('aorta.lang'), 'en', 'locale tersimpan')

prefs.locale = 'id'
await nextTick()
assert.equal(t('welcome'), 'Selamat datang!')

console.log('prefs ok')
