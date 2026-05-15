'use client'

import Image from 'next/image'
import Link from 'next/link'

interface SectionPreviewProps {
  title: string
  description: string
  href: string
  image?: string
  layout?: 'left' | 'right'
}

export function SectionPreview({ title, description, href, image, layout = 'left' }: SectionPreviewProps) {
  return (
    <Link href={href}>
      <div className={`group cursor-pointer py-12 md:py-16 border-b border-border last:border-b-0 transition-all hover:bg-muted/30 animate-slideUp ${layout === 'right' ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className={`flex-1 ${layout === 'right' ? 'md:text-right' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 text-foreground group-hover:text-primary transition-colors text-balance">
              {title}
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed mb-6">
              {description}
            </p>
            <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all gap-1">
              Tudj meg több
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
          <div className="flex-1 h-48 md:h-64 w-full rounded-lg overflow-hidden flex-shrink-0">
            {image ? (
              <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-foreground/40">
                  <svg className="w-16 h-16 mx-auto mb-2 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Tartalom
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}
