'use client'

import { useEffect } from 'react'
import 'sal.js/dist/sal.css'

export function SalInit() {
  useEffect(() => {
    const initSal = async () => {
      const sal = (await import('sal.js')).default

      sal({
        threshold: 0.3,
        once: true,
        root: null,
      })
    }

    initSal()
  }, [])

  return null
}
