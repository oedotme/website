import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { default as Index } from '@/pages'

export default function NotFound() {
  const { replace } = useRouter()

  useEffect(() => {
    replace('/')
  }, [replace])

  return <Index />
}
