import type { Metadata } from 'next'
import { Playfair_Display, Lora } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const _playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: '--font-display' });
const _lora = Lora({ subsets: ["latin"], variable: '--font-body' });

export const metadata: Metadata = {
  title: 'Magyar Tornasport - Elegancia és Precizitás',
  description: 'Fedezze fel a magyar műtornászat világát - elméletek, technikák és inspiráció',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className="bg-background">
      <body className={`${_playfairDisplay.variable} ${_lora.variable} font-body antialiased bg-background text-foreground`}>
        {children}
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
