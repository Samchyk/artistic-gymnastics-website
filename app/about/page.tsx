import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-foreground">
                Rólunk
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Dedikáltak vagyunk a magyar műtornászat előmozdítására, a tudás megosztására és a sportág fejlesztésére.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Küldetésünk
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A Magyar Tornasport portál célja, hogy átfogó, magas minőségű információt nyújtson a műtornászat minden aspektusáról. Támogatjuk az atlétákat, edzőket és szurkolókat azzal, hogy elérhetővé tesszük a technikai tudást, a sporttudományi alapokat és az inspirációt.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Szerteágazó Tudás</h3>
                <p className="text-muted-foreground">Történettől a modern edzéstechnikákig, minden szintű információ egy helyen.</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Tudományos Megalapozottság</h3>
                <p className="text-muted-foreground">Minden ajánlás a legújabb tudományos kutatásokon és gyakorlati tapasztalatokon alapul.</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Közösség Építése</h3>
                <p className="text-muted-foreground">A magyar műtornászati közösség összekapcsolása és támogatása.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              Vegyél fel velünk kapcsolatot
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Van kérdésed, javaslat vagy szeretnél közreműködni? Érdekel bennünket a te véleményed és ötleteid.
            </p>

            <ContactForm />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
