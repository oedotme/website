import { storage } from '@/utils'

const doc = typeof window !== 'undefined' ? window.document.documentElement : undefined
const key = 'color-scheme'

export const theme = {
  set: (value: string): void => (doc?.setAttribute(key, value), storage.set(key, value)),
  get: (): string | null | undefined => doc?.getAttribute(key),
  load: (): void => doc?.setAttribute(key, storage.get(key) || 'auto'),
}
