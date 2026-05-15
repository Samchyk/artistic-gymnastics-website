import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function CookiesPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
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

        <section className="py-12 md:py-16">
          <div className="container px-6 max-w-2xl">
            <div className="prose prose-base max-w-none 
              prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight
              prose-h2:text-3xl prose-h3:text-2xl
              prose-p:text-foreground prose-p:leading-relaxed prose-p:text-base
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:hover:text-primary/80
              prose-ul:text-foreground prose-ol:text-foreground
              prose-li:text-base prose-li:leading-relaxed">
              
              <h2>1. Mi a sütik?</h2>
              <p>
                A sütik (cookies) kis adatfájlok, amelyeket az Ön böngészője tárol. Ezek az adatok segítik az oldalnak az Ön böngészésének nyomon követésében és az Ön preferenciáinak megjegyzésében.
              </p>

              <h2>2. Milyen Sütiket Használunk?</h2>
              <p>
                Az alábbi típusú sütiket használjuk:
              </p>
              <ul>
                <li><strong>Szükséges sütik:</strong> Az oldal alapvető működéséhez szükséges</li>
                <li><strong>Analitikai sütik:</strong> Az oldal használatának elemzéséhez</li>
                <li><strong>Preferencia sütik:</strong> Az Ön beállításainak megjegyzéséhez</li>
              </ul>

              <h2>3. Google Analytics</h2>
              <p>
                Ezt az oldalt a Google Analytics elemzi. Ez a szolgáltatás sütiket használ az Ön böngészésének elemzéséhez. A Google saját adatvédelmi szabályzata a Google Privacy Policy-ban található meg.
              </p>

              <h2>4. A Sütik Kezelése</h2>
              <p>
                Az Ön böngészőjében módosíthatja a sütik beállításait:
              </p>
              <ul>
                <li><strong>Google Chrome:</strong> Beállítások → Adatvédelem és biztonság → Sütik és egyéb webhelyadatok</li>
                <li><strong>Firefox:</strong> Beállítások → Adatvédelem és biztonság → Sütik és weboldal adatok</li>
                <li><strong>Safari:</strong> Beállítások → Adatvédelem → Sütik kezelése</li>
                <li><strong>Microsoft Edge:</strong> Beállítások → Adatvédelem, keresés és szolgáltatások → Törölje a böngészési adatokat</li>
              </ul>

              <h2>5. A Sütik Disabling</h2>
              <p>
                Ha letiltja a sütiket, az oldal egyes funkciói nem működhetnek megfelelően. Javasoljuk az alapvető sütiket engedélyezni.
              </p>

              <h2>6. A Sütik Vagyis Nem</h2>
              <p>
                Harmadik féltől származó linkek és hirdetések is elhelyezhetnek sütiket. Nem vagyunk felelősek ezekért.
              </p>

              <h2>7. Kapcsolat</h2>
              <p>
                Ha kérdéseid vannak a cookie-k szabályzattal kapcsolatban, lépj fel velünk kapcsolatot az /about oldalon.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
