'use client'

import Link from 'next/link'
import { useState } from 'react'

const DOMAIN = 'magyargymnastics'
const DOMAIN_EMAIL = 'contact@magyargymnastics.hu'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container flex h-16 items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-display font-bold tracking-tighter text-foreground hover:text-primary transition-colors">
          {DOMAIN}
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-sm text-foreground hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/about" className="text-sm text-foreground hover:text-primary transition-colors">
            Rólunk
          </Link>
          <Link href="/privacy" className="text-sm text-foreground hover:text-primary transition-colors">
            Adatvédelem
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border">
          <div className="flex flex-col gap-4 p-6">
            <Link href="/blog" className="text-sm text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
            <Link href="/about" className="text-sm text-foreground hover:text-primary transition-colors">
              Rólunk
            </Link>
            <Link href="/privacy" className="text-sm text-foreground hover:text-primary transition-colors">
              Adatvédelem
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
