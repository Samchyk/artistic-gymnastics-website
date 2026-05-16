import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionPreview } from '@/components/section-preview'

const sections = [
  {
    title: 'A Műtornászat Alapjai',
    description: 'Ismerje meg a műtornászat történetét, alapelveit és a legfontosabb sportági ismereteket.',
    href: '/blog/foundations',
    image: '/section-basics.jpg'
  },
  {
    title: 'Technikai Fejlesztés',
    description: 'Részletes útmutató a technikai elemek elsajátításához és a sérülésmentesség biztosításához.',
    href: '/blog/technique',
    image: '/section-technique.jpg'
  },
  {
    title: 'Versenyzés és Versenyek',
    description: 'A versenyrendszer, pontozás és a legfontosabb nemzetközi és hazai versenyek ismertetője.',
    href: '/blog/competition',
    image: '/section-competition.jpg'
  },
  {
    title: 'Edzésmódszertani Trendek',
    description: 'Modern edzésmódszerek, tudományos alapok és az innovatív tréningtechnikák alkalmazása.',
    href: '/blog/training',
    image: '/section-training.jpg'
  },
  {
    title: 'Sporttudományi Háttér',
    description: 'Az élsport tudományi alapjai, fiziológia és biomechanika a gyakorlatban.',
    href: '/blog/science',
    image: '/section-science.jpg'
  },
  {
    title: 'Edzők Fejlesztése',
    description: 'Professzionális fejlődési útvonal, képzés és a modern edző szerepe.',
    href: '/blog/coaching',
    image: '/section-coaching.jpg'
  },
  {
    title: 'Ifjúsági Program',
    description: 'Tehetséggondozás, korai felismerés és a jövő bajnokok felkészítése.',
    href: '/blog/youth',
    image: '/section-youth.jpg'
  }
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="relative h-[560px] md:h-[720px] w-full">
            <Image
              src="/hero-gymnastics.jpg"
              alt="Graceful artistic gymnast performing aerial movement"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay — guarantees readable text regardless of image brightness */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80"></div>

            {/* Text content sits fully inside the image area */}
            <div className="absolute inset-0 flex items-end">
              <div className="container px-6 pb-12 md:pb-20 z-10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center mb-6 text-accent text-sm font-medium">
                    <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent mr-3"></span>
                    A magyar műtornászat hivatalos portálja
                  </div>

                  <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 text-white text-balance drop-shadow-lg">
                    Elegancia és precizitás
                  </h1>

                  <p className="text-lg md:text-2xl text-white/90 mb-8 leading-relaxed text-balance drop-shadow-md max-w-2xl">
                    Fedezze fel a műtornászat világát: történelem, technika, tudomány és inspiráció a legmagasabb szintű sporttevékenységről.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#sections" className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-accent text-accent-foreground font-medium shadow-lg hover:bg-accent/90 transition-colors hover-scale">
                      Kezdj el
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                    <a href="/about" className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-white/80 text-white font-medium hover:bg-white/15 transition-colors backdrop-blur-sm">
                      Rólunk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sections */}
        <section id="sections" className="border-t border-border">
          <div className="container px-6 py-12">
          {sections.map((section, index) => (
            <SectionPreview
              key={index}
              title={section.title}
              description={section.description}
              href={section.href}
              image={section.image}
              layout={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
