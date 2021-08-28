import { storage } from '@/utils'

const doc = typeof window !== 'undefined' ? window.document.documentElement : undefined
const dmq = typeof window !== 'undefined' ? window.matchMedia('(prefers-color-scheme: dark)').matches : false
const key = 'color-scheme'

type Theme = 'auto' | 'dark' | 'light'

export const theme = {
  set: (value: Theme): void => (doc?.setAttribute(key, value), storage.set(key, value)),
  get: (): Theme => (doc?.getAttribute(key) === 'auto' ? (dmq ? 'dark' : 'light') : (doc?.getAttribute(key) as Theme)),
  load: (): void => doc?.setAttribute(key, storage.get(key) || 'auto'),
}
