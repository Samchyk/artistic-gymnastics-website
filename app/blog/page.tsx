import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { blogArticles } from '@/lib/blog-data'

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 border-b border-border bg-gradient-to-b from-secondary/20 via-background to-background overflow-hidden">
          {/* decorative accent */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>

          <div className="container px-6 relative">
            <div className="max-w-2xl">
              <div className="inline-flex items-center mb-6 text-accent text-sm font-medium">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent mr-3"></span>
                Müvelödési Blog
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-foreground text-balance">
                Tudás, technika és inspiráció
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Ismerkedjen meg a műtornászat világával: tanulmányok, technikák, tudományos alapok és gyakorlati tanácsok a sportág minden szintjén.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16 md:py-24">
          <div className="container px-6">
            <div className="grid gap-8 md:gap-12">
              {blogArticles.map((article, index) => (
                <Link key={article.id} href={`/blog/${article.slug}`}>
                  <article className={`group cursor-pointer pb-12 border-b border-border last:border-b-0 transition-all hover:opacity-80 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                            {article.category}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            {article.readTime} perc olvasás
                          </span>
                        </div>
                        
                        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 text-foreground group-hover:text-primary transition-colors text-balance">
                          {article.title}
                        </h2>
                        
                        <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                          {article.excerpt}
                        </p>
                        
                        <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all gap-1">
                          Olvasd el
                          <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                      
                      <div className="relative w-full md:w-64 h-48 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex-shrink-0 overflow-hidden">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
