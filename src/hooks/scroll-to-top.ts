import { useEffect } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

export const useScrollToTop = (): void => {
  const [location] = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
}
