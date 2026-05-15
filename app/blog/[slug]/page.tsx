import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { blogArticles } from '@/lib/blog-data'
import { notFound } from 'next/navigation'

interface Params {
  slug: string
}

export function generateStaticParams() {
  return blogArticles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const article = blogArticles.find(a => a.slug === slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = blogArticles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 2)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        {/* Article Header */}
        <article className="py-12 md:py-16 border-b border-border">
          <div className="container px-6 max-w-2xl">
            <Link href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6 text-sm font-medium">
              <svg className="w-4 h-4 mr-2 transition-transform hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Vissza a blogra
            </Link>
            
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {article.readTime} perc olvasás
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-foreground text-balance">
              {article.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {article.excerpt}
            </p>

            <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </article>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container px-6 max-w-2xl">
            <div className="prose prose-base max-w-none 
              prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-foreground prose-p:leading-relaxed prose-p:text-base
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:hover:text-primary/80
              prose-ul:text-foreground prose-ol:text-foreground
              prose-li:text-base prose-li:leading-relaxed
              prose-code:text-primary prose-code:bg-secondary/10 prose-code:rounded
              dark:prose-headings:text-foreground dark:prose-p:text-muted-foreground
              dark:prose-strong:text-foreground dark:prose-a:text-primary"
              dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '\n').trim() }}
            />
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-16 md:py-24 border-t border-border bg-secondary/5">
            <div className="container px-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-12 text-foreground">
                Kapcsolódó cikkek
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                {relatedArticles.map((relatedArticle) => (
                  <Link key={relatedArticle.id} href={`/blog/${relatedArticle.slug}`}>
                    <article className="group cursor-pointer h-full p-8 rounded-lg border border-border hover:border-primary/50 transition-all hover:bg-background">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-block px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary">
                          {relatedArticle.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {relatedArticle.readTime} min
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground group-hover:text-primary transition-colors text-balance">
                        {relatedArticle.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedArticle.excerpt}
                      </p>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
