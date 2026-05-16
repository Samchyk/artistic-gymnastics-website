import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear()

  const sections = [
    { id: 'bevezeto', label: '1. Bevezető' },
    { id: 'gyujtes', label: '2. Az adatok gyűjtése' },
    { id: 'felhasznalas', label: '3. Az adatok felhasználása' },
    { id: 'vedelem', label: '4. Az adatok védelme' },
    { id: 'megosztas', label: '5. Az adatok megosztása' },
    { id: 'torles', label: '6. Az adatok törlése' },
    { id: 'sutik', label: '7. A sütik' },
    { id: 'linkek', label: '8. Külső linkek' },
    { id: 'jogok', label: '9. Az Ön jogai' },
    { id: 'kapcsolat', label: '10. Kapcsolat' },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-16 md:py-24 border-b border-border bg-gradient-to-b from-secondary/20 via-background to-background overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
          <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary/10 blur-3xl"></div>

          <div className="container px-6 relative">
            <div className="max-w-2xl">
              <div className="inline-flex items-center mb-6 text-accent text-sm font-medium">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-accent mr-3"></span>
                Jogi információk
              </div>
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter mb-6 text-foreground text-balance">
                Adatvédelmi Szabályzat
              </h1>
              <p className="text-sm text-muted-foreground">
                Utolsó frissítés: {currentYear}
              </p>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 md:py-20">
          <div className="container px-6">
            <div className="grid gap-12 md:gap-16 lg:grid-cols-[240px_1fr] max-w-5xl mx-auto">
              {/* Table of contents */}
              <aside className="hidden lg:block">
                <div className="sticky top-24">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
                    Tartalomjegyzék
                  </p>
                  <nav className="flex flex-col gap-2 text-sm border-l border-border pl-4">
                    {sections.map((s) => (
                      <a
                        key={s.id}
                        href={`#${s.id}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {s.label}
                      </a>
                    ))}
                  </nav>
                </div>
              </aside>

              {/* Article body */}
              <div className="max-w-2xl">
                <div className="rounded-2xl border border-border bg-card shadow-sm p-6 md:p-10">
                  <div className="article-prose">
                    <h2 id="bevezeto">1. Bevezető</h2>
                    <p>
                      A Magyar Tornasport Portál (&bdquo;mi&rdquo;, &bdquo;minket&rdquo; vagy &bdquo;a Szolgáltató&rdquo;) elkötelezett az Ön személyes adatainak védelme mellett. Ez az Adatvédelmi Szabályzat elmagyarázza, hogyan gyűjtjük, használjuk fel, védjük és tesszük elérhetővé az Ön adatait.
                    </p>

                    <h2 id="gyujtes">2. Az adatok gyűjtése</h2>
                    <p>Az alábbi módokon gyűjthetünk személyes adatokat:</p>
                    <ul>
                      <li>Közvetlenül az Ön által megadott információ (név, e-mail cím).</li>
                      <li>Automatikus adatgyűjtés (sütik, böngészési jellemzők).</li>
                      <li>Analitikai adatok (pl. Google Analytics, Vercel Analytics).</li>
                    </ul>

                    <h2 id="felhasznalas">3. Az adatok felhasználása</h2>
                    <p>Az adatokat az alábbi célokra használjuk:</p>
                    <ul>
                      <li>Az oldal működtetése és folyamatos fejlesztése.</li>
                      <li>A felhasználói élmény javítása.</li>
                      <li>Az Ön megkeresésére adott válasz.</li>
                      <li>Jogi kötelezettségek teljesítése.</li>
                    </ul>

                    <h2 id="vedelem">4. Az adatok védelme</h2>
                    <p>
                      Megfelelő technikai és szervezeti intézkedéseket alkalmazunk az adatok védelme érdekében. Az adatokhoz csak jogosult személyek férhetnek hozzá.
                    </p>

                    <h2 id="megosztas">5. Az adatok megosztása</h2>
                    <p>
                      Az Ön adatait nem adjuk el harmadik félnek. Jogi kötelezettség teljesítésétől eltekintve az adatokat csak az Ön kifejezett beleegyezésével osztjuk meg.
                    </p>

                    <h2 id="torles">6. Az adatok törlése</h2>
                    <p>
                      Önnek joga van bármikor kérni adatai törlését. Kérjük, ezzel kapcsolatban vegye fel velünk a kapcsolatot az alábbi e-mail címen.
                    </p>

                    <h2 id="sutik">7. A sütik</h2>
                    <p>
                      Az oldal sütiket használ a felhasználói élmény javításához és a forgalom elemzéséhez. A sütik beállításai bármikor módosíthatók a böngészőjében, illetve a sütibeállítások panelünkön.
                    </p>

                    <h2 id="linkek">8. Külső linkek</h2>
                    <p>
                      Az oldal tartalmazhat harmadik fél által üzemeltetett webhelyekre mutató linkeket. Ezen oldalak tartalmáért és adatvédelmi gyakorlatáért nem vállalunk felelősséget.
                    </p>

                    <h2 id="jogok">9. Az Ön jogai</h2>
                    <p>A GDPR alapján Önnek joga van:</p>
                    <ul>
                      <li>hozzáférni a tárolt személyes adataihoz;</li>
                      <li>kérni az adatok helyesbítését;</li>
                      <li>kérni az adatok törlését;</li>
                      <li>kérni az adatkezelés korlátozását;</li>
                      <li>tiltakozni az adatkezelés ellen.</li>
                    </ul>

                    <h2 id="kapcsolat">10. Kapcsolat</h2>
                    <p>
                      Amennyiben kérdése merül fel az Adatvédelmi Szabályzattal kapcsolatban, lépjen velünk kapcsolatba a <a href="/about">Rólunk</a> oldalon megadott elérhetőségeken.
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-xs text-muted-foreground">
                  Ez a dokumentum tájékoztató jellegű, és nem helyettesíti az egyedi esetekben szükséges jogi tanácsadást.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
