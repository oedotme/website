import { useEffect } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

import { env } from '@/config'

export const useScrollToTop = (): void => {
  const [location] = useLocation()

  useEffect(() => {
    !env.mode.dev && window.scrollTo(0, 0)
  }, [location])
}
