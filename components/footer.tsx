'use client'

import Link from 'next/link'

const DOMAIN = 'magyargymnastics'
const DOMAIN_EMAIL = 'contact@magyargymnastics.hu'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-3 mb-8">
          <div>
            <h3 className="font-display text-lg font-bold mb-4 text-foreground">{DOMAIN}</h3>
            <p className="text-sm text-muted-foreground">
              Fedezze fel a magyar műtornászat világát elegáns, modern dizájnban.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-4 text-foreground">Navigáció</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">Rólunk</Link></li>
              <li><Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">Cookie-k</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-4 text-foreground">Jogi</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Adatvédelem</Link></li>
              <li><Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">Felhasználási feltételek</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} {DOMAIN} | {DOMAIN_EMAIL}</p>
        </div>
      </div>
    </footer>
  )
}
