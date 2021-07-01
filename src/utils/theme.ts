import { storage } from '@/utils'

const html = typeof window !== 'undefined' ? document.firstElementChild : undefined
const key = 'color-scheme'

export const theme = {
  set: (value: string): void => (html?.setAttribute(key, value), storage.set(key, value)),
  get: (): string | null | undefined => html?.getAttribute(key),
  load: (): void => html?.setAttribute(key, storage.get(key) || 'auto'),
}
