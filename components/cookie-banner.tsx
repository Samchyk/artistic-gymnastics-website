'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieAccepted = localStorage.getItem('cookieAccepted')
    if (!cookieAccepted) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 animate-in slide-in-from-bottom-4 duration-300">
      <div className="mx-4 mb-4 rounded-lg border border-border bg-background p-6 shadow-lg md:mx-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h3 className="font-display font-bold text-foreground mb-2">
              Cookie-k Használata
            </h3>
            <p className="text-sm text-muted-foreground">
              Az oldal cookie-kat használ az Ön böngészésének elemzéséhez. Az oldal használatával Ön beleegyezik a cookie-k használatába.{' '}
              <Link href="/cookies" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Tudj meg több
              </Link>
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleAccept}
              className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Elfogadom
            </button>
            <button
              onClick={() => setIsVisible(false)}
              className="px-6 py-2 rounded-lg border border-border text-foreground hover:bg-secondary/5 transition-colors font-medium whitespace-nowrap"
            >
              Elutasítom
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
