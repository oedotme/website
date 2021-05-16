import { useEffect, useRef } from 'preact/hooks'
import { useLocation } from 'wouter-preact'

export default function Redirect({ to }: { to: string }): null {
  const ref = useRef<() => void>()
  const [, navigate] = useLocation()

  ref.current = () => navigate(to)

  useEffect(() => {
    ref.current?.()
  }, [])

  return null
}
