import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function CookiesPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-foreground">
                Cookie-k Szabályzata
              </h1>
              <p className="text-sm text-muted-foreground">
                Utolsó frissítés: {currentYear}
              </p>
            </div>
          </div>
        </section>

        {/* 1. Mi a sütik? */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              1. Mi a sütik?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A sütik (cookies) kis adatfájlok, amelyeket az Ön böngészője tárol. Ezek az adatok segítik az oldalnak az Ön böngészésének nyomon követésében és az Ön preferenciáinak megjegyzésében.
            </p>
          </div>
        </section>

        {/* 2. Milyen Sütiket Használunk? */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              2. Milyen Sütiket Használunk?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Az alábbi típusú sütiket használjuk:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Szükséges sütik</h3>
                <p className="text-muted-foreground">Az oldal alapvető működéséhez szükséges.</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Analitikai sütik</h3>
                <p className="text-muted-foreground">Az oldal használatának elemzéséhez.</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Preferencia sütik</h3>
                <p className="text-muted-foreground">Az Ön beállításainak megjegyzéséhez.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Google Analytics */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              3. Google Analytics
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ezt az oldalt a Google Analytics elemzi. Ez a szolgáltatás sütiket használ az Ön böngészésének elemzéséhez. A Google saját adatvédelmi szabályzata a Google Privacy Policy-ban található meg.
            </p>
          </div>
        </section>

        {/* 4. A Sütik Kezelése */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              4. A Sütik Kezelése
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Az Ön böngészőjében módosíthatja a sütik beállításait:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Google Chrome</h3>
                <p className="text-muted-foreground">Beállítások → Adatvédelem és biztonság → Sütik és egyéb webhelyadatok.</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Firefox</h3>
                <p className="text-muted-foreground">Beállítások → Adatvédelem és biztonság → Sütik és weboldal adatok.</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Safari</h3>
                <p className="text-muted-foreground">Beállítások → Adatvédelem → Sütik kezelése.</p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 text-foreground">Microsoft Edge</h3>
                <p className="text-muted-foreground">Beállítások → Adatvédelem, keresés és szolgáltatások → Törölje a böngészési adatokat.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. A Sütik Disabling */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              5. A Sütik Disabling
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ha letiltja a sütiket, az oldal egyes funkciói nem működhetnek megfelelően. Javasoljuk az alapvető sütiket engedélyezni.
            </p>
          </div>
        </section>

        {/* 6. A Sütik Vagyis Nem */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              6. A Sütik Vagyis Nem
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Harmadik féltől származó linkek és hirdetések is elhelyezhetnek sütiket. Nem vagyunk felelősek ezekért.
            </p>
          </div>
        </section>

        {/* 7. Kapcsolat */}
        <section className="py-16 md:py-24">
          <div className="container px-6 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground">
              7. Kapcsolat
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Ha kérdéseid vannak a cookie-k szabályzattal kapcsolatban, lépj fel velünk kapcsolatot az /about oldalon.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
