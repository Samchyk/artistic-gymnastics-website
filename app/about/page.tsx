import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

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

function ContactForm() {
  return (
    <form className="space-y-6" onSubmit={(e) => {
      e.preventDefault()
      alert('Köszönjük az üzenetedért! Hamarosan felvesszük veled a kapcsolatot.')
    }}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Név
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="A te neved"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email cím
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="te@pelda.com"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
          Tárgy
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Mire vonatkozik az üzenet?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Üzenet
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          placeholder="Írj ide az üzenetednek..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
      >
        Üzenet küldése
      </button>
    </form>
  )
}
