import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      
      <main className="flex-1">
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container px-6">
            <div className="max-w-2xl">
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-foreground">
                Adatvédelmi Szabályzat
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
              
              <h2>1. Bevezető</h2>
              <p>
                A Magyar Tornasport Portál (&ldquo;mi&rdquo;, &ldquo;nk&rdquo; vagy &ldquo;a cég&rdquo;) elkötelezett az Ön személyes adatainak védelme mellett. Ez az Adatvédelmi Szabályzat elmagyarázza, hogyan gyűjtjük, felhasználjuk, védjük és tesszük elérhetővé az Ön adatait.
              </p>

              <h2>2. Az Adatok Gyűjtése</h2>
              <p>
                Az alábbi módokon gyűjthetünk személyes adatokat:
              </p>
              <ul>
                <li>Közvetlenül az Ön által megadott információ (név, e-mail cím)</li>
                <li>Automatikus adatgyűjtés (sütik, böngészési jellemzők)</li>
                <li>Analitikai adatok (Google Analytics)</li>
              </ul>

              <h2>3. Az Adatok Felhasználása</h2>
              <p>
                Az adatokat az alábbiak céljára használjuk:
              </p>
              <ul>
                <li>Az oldal működtetése és fejlesztése</li>
                <li>A felhasználói élmény javítása</li>
                <li>Az Ön megkeresésére válaszolva</li>
                <li>Jogi kötelezettségek teljesítése</li>
              </ul>

              <h2>4. Az Adatok Védelme</h2>
              <p>
                Megfelelő technikai és szervezeti intézkedéseket teszünk az adatok védelme érdekében. Az adatokat csak jogosult személyek érik el.
              </p>

              <h2>5. Az Adatok Megosztása</h2>
              <p>
                Az Ön adatait nem adjuk el harmadik félnek. Jogi kötelezettség teljesítésétől eltekintve, csak az Ön beleegyezésével osztjuk meg az adatokat.
              </p>

              <h2>6. Az Adatok Törlése</h2>
              <p>
                Jogában áll bármikor kérni az adatai törlését. Kérjük, forduljon hozzánk az e-mail címünk segítségével.
              </p>

              <h2>7. A Sütik</h2>
              <p>
                Az oldal sütiket használ az Ön meghatározásához és az oldal megjelenítéséhez. Az Ön böngészőjében módosítható a sütik beállítása.
              </p>

              <h2>8. Külső Linkek</h2>
              <p>
                Az oldal harmadik féltől származó linkeket tartalmazhat. Nem vagyunk felelősek ezek tartalmáért és adatvédelmi gyakorlatáért.
              </p>

              <h2>9. Jogod az Adatokhoz</h2>
              <p>
                A GDPR szerint jogod van:
              </p>
              <ul>
                <li>Hozzáférni az Ön adataihoz</li>
                <li>Az Ön adatainak helyesbítésére kérni</li>
                <li>Az Ön adatainak törlésére kérni</li>
                <li>Az adatfeldolgozás korlátozására kérni</li>
              </ul>

              <h2>10. Kapcsolat</h2>
              <p>
                Ha kérdéseid vannak az adatvédelmi szabályzattal kapcsolatban, lépj fel velünk kapcsolatot az /about oldalon.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
