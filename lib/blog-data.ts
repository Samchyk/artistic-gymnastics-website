export interface BlogArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  readTime: number
  published: boolean
  image: string
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'foundations',
    title: 'A Műtornászat Alapjai',
    excerpt: 'Ismerje meg a műtornászat történetét, alapelveit és a legfontosabb sportági ismereteket.',
    category: 'Alapok',
    readTime: 8,
    published: true,
    image: '/fundamentals-cover.jpg',
    content: `
# A Műtornászat Alapjai

A műtornászat egy lenyűgöző sportág, amely évszázadokra nyúlik vissza. Szépségét az olyan fizikai készségek kombinációjában rejlik, mint az erő, rugalmasság, koordináció és művészi kifejezés.

## A Történet

A modern műtornászat a 18. századi német tornagyakorlatokból fejlődött ki. Johann Friedrich GutsMuths és Friedrich Ludwig Jahn voltak az úttörők, akik megteremtették az alapokat.

## Alapvetõ Készségek

A sikeres műtornász fejlesztendő képességei:

- **Erő**: Szükséges az összetett elemek végrehajtásához
- **Rugalmasság**: Lehetővé teszi a széles és expresszív mozgásokat
- **Egyensúly**: Kritikus fontosságú a gerenda és padló gyakorlataiban
- **Koordináció**: Az összetett elemek szinkronizálásához szükséges
- **Artisztikum**: Az esztétikai értékek hozzáadása a műtornához

## A Műtornász Nő Verseny Felépítése

A női műtornázók négy eszközön versenyeznek:
1. Fejtámasz
2. Gerendázás
3. Lólódás
4. Padló

## Pontozási Rendszer

A modern pontozás két részre oszlik:
- **D-pont**: Az elemek technikai értéke
- **E-pont**: Az elemek végrehajtásának minősége

Ez az egyensúly biztosítja, hogy a technikai készség és az artisztikum egyaránt értékelődik.
    `
  },
  {
    id: '2',
    slug: 'technique',
    title: 'Technikai Fejlesztés',
    excerpt: 'Részletes útmutató a technikai elemek elsajátításához és a sérülésmentesség biztosításához.',
    category: 'Technika',
    readTime: 10,
    published: true,
    image: '/technique-cover.jpg',
    content: `
# Technikai Fejlesztés

A műtornászati technika fejlesztése fokozatos, módszeres megközelítést igényel. A sérülésmentesség és a helyes forma biztosítása kiemelkedően fontos.

## Progresszív Fejlesztés

Minden új elemnek vannak előfeltételei:

1. **Mozgékonyság gyakorlatok**: Rugalmasság és mozgástartomány fejlesztése
2. **Erő alapok**: Mag-, felső és alsó test erősítése
3. **Technikai alapok**: Az alapelemek precíz megtanulása
4. **Progresszió**: Fokozatos nehézítés

## Biztonsági Protokollok

- Megfelelő felszerelés és pálya használata
- Edzővel történő felügyelet minden munka során
- Fokozatos terhelés növelése
- Rendszeres pihenés és regeneráció

## Közös Technikai Hibák

- Az ízületi szögek helytelen pozíciója
- Gyors progresszió sérülések nélkül
- Anyag előtti fáradtság

A technikai tökéletesség hosszú út, de az alapok szilárd megépítése létfontosságú.
    `
  },
  {
    id: '3',
    slug: 'competition',
    title: 'Versenyzés és Versenyek',
    excerpt: 'A versenyrendszer, pontozás és a legfontosabb nemzetközi és hazai versenyek ismertetője.',
    category: 'Versenyzés',
    readTime: 9,
    published: true,
    image: '/competition-cover.jpg',
    content: `
# Versenyzés és Versenyek

A műtornászati verseny világszerte szigorú szabályok és protokollok szerint működik.

## Versenyrendszer

### Csapatverseny
- Minden csapat maximum 6 tornászt nevezhet
- A legjobb 4 pontja számít az eszközkönként
- A 2 szabad gyakorlat közül az egyik nem számít

### Egyéni Verseny
- Minden tornász egyéni pontokért versenyez
- Az egyéni készségek felmérésének legfontosabb formája

### Készületi Finálé
- Az öt legjobb tornász versenyez szétválasztott gyakorlatokkal

## Pontozási Részletek

A pontozás a következő elemekből áll:

**Kiindulási érték (D-pont)**
- Az összes előírt és szabad elem összeszorzódott értéke

**Végrehajtási érték (E-pont)**
- 10.0-ás skálából indul az edzők
- Levonások a technikai hibákért

## Fő Versenyek

- **Olimpiai Játékok**: Négyévente
- **Világbajnokság**: Évenként
- **Kontinentális Bajnokságok**: Évente
- **Nemzeti Bajnokságok**: A versenyképzés alapja

## A Verseny Ettikája

A műtornászat továbbra is a tisztesség, a kölcsönös támogatás és a sportos magatartás értékeit helyezi elõtérbe.
    `
  },
  {
    id: '4',
    slug: 'training',
    title: 'Edzésmódszertani Trendek',
    excerpt: 'Modern edzésmódszerek, tudományos alapok és az innovatív tréningtechnikák alkalmazása.',
    category: 'Edzés',
    readTime: 11,
    published: true,
    image: '/training-cover.jpg',
    content: `
# Edzésmódszertani Trendek

A modern műtornászat edzésmódszertana tudomány-alapú megközelítésre támaszkodik.

## Tudományos Alapú Edzés

### Periodizáció
- **Makrociklus**: Teljes szezon (általában 1 év)
- **Mezociklus**: 4-8 hét szakaszok
- **Mikrociklus**: Heti szintek

### Terhelés Menedzselés

A terhelés menedzselés kritikus:
- Megfelelő edzésintenzitás
- Pihenés és helyreállítás
- Felépítés és leépítés szakaszok

## Innovatív Tréningtechnikák

### Virtuális Valóság Edzés
- Mentális képzéshez és szimuláció
- Mozgáselemzéshez és visszajelzéshez

### Biomechanikai Elemzés
- Videó elemzés
- 3D mozgásfigyelemmel kísérés
- Mozgásmódosítások optimalizálása

### Erősítés Protokollok

- Komplex gyakorlatok
- Funkcióélis edzés
- Prevenció-orientált edzés

## Csapatmunka

A sikeres program magában foglal:
- Edzőket
- Sportorvosat
- Fiziológust
- Pszichológust
- Fizioterapeutát

Az összes szakember az atlétáért dolgozik.
    `
  },
  {
    id: '5',
    slug: 'science',
    title: 'Sporttudományi Háttér',
    excerpt: 'Az élsport tudományi alapjai, fiziológia és biomechanika a gyakorlatban.',
    category: 'Tudomány',
    readTime: 12,
    published: true,
    image: '/mental-cover.jpg',
    content: `
# Sporttudományi Háttér

A műtornászat a tudományi kutatások és gyakorlat közötti szintézise.

## Fiziológia és Adaptáció

### Kardiovaszkuláris Adaptáció
- Edzett tornászok alacsonyabb nyugalmi pulzusa
- Megnövekedett oxigénfelhasználás

### Izomadaptáció
- Fehérjelánc szintézisnövekedés
- Mitokondriális entwickelés
- Izomrost típusváltozás

## Biomechanika

### Erőelemzés
- Laboratóriumi erőplatformok
- Lendületmegmaradás elve
- Teljesítményelemzés

### Mozgáselemzés
- Szögek és szögsebesség
- Ízületi terhelések
- Optimális technika meghatározása

## Sérülésmegelőzés

### Kockázati Tényezők
- Túlterhelés
- Készséghiányok
- Biomechanikai eltérések

### Prevenció Stratégiák
- Erősítési program
- Rugalmassági edzés
- Helyreállítási módszerek

## Kognitív Fejlődés

A műtornászat fejleszti a kognitív funkciókat:
- Térbeli tudatosság
- Memória
- Döntéshozatal
- Stresszkezelés

Az élsport tudománya folyamatosan fejlődik és bővül.
    `
  },
  {
    id: '6',
    slug: 'coaching',
    title: 'Edzők Fejlesztése',
    excerpt: 'Professzionális fejlődési útvonal, képzés és a modern edző szerepe.',
    category: 'Edzés',
    readTime: 10,
    published: true,
    image: '/nutrition-cover.jpg',
    content: `
# Edzők Fejlesztése

A minőségi edzők a műtornászat fejlesztésének alapja.

## Edzői Képzési Szintek

### Amatőr Szint
- Alapvető biztonság és technika
- Alapszintű ismeretek

### Regionális Szint
- Mélyebb technikai tudás
- Versenyzésre való felkészítés

### Nemzetközi Szint
- Élitszintű tudás
- Világversenyekre való felkészítés

## Alapvető Kompetenciák

Egy modern edzőnek ismernie kell:
- **Biomechanika**: Az erő és mozgás törvényei
- **Fiziológia**: Az emberi test adaptációja
- **Pszichológia**: Mentális felkészítés
- **Pedagógia**: Effektív oktatás
- **Biztonság**: Sérülésmegelőzés

## Folyamatos Képzés

- Szemináriumok és műhelyek
- Tudományos konferenciák
- Nemzetközi Best Practices
- Peer Learning

## Etikai Felelősség

Az edzők felelősek:
- Az atlétáik biztonságáért
- A fejlődésük mentorálásáért
- Pozitív értékek modellezéséért
- Hosszú távú egészségért

A jó edző sokkal többet jelent, mint a technika tanítása.
    `
  },
  {
    id: '7',
    slug: 'youth',
    title: 'Ifjúsági Program',
    excerpt: 'Tehetséggondozás, korai felismerés és a jövő bajnokok felkészítése.',
    category: 'Ifjúsági',
    readTime: 9,
    published: true,
    image: '/recovery-cover.jpg',
    content: `
# Ifjúsági Program

A tehetséggondozás a nemzetközi versenyképesség alapja.

## Tehetség Felismerése

### Egyéni Jellemzők
- Fizikai adottságok
- Koordinációs képesség
- Mentális rugalmasság
- Kitartás és szorgalom

### Szisztematikus Szűrés
- Iskolai programok
- Közösségi edzőpontok
- Nyílt próbák

## Fejlesztési Szintek

### Kezdő Szint (6-8 évesek)
- Játékos ismerkedés az eszközökkel
- Alapvető mozgásalap fejlesztése
- Biztonság és szórakozás

### Középsőszint (9-12 évesek)
- Alapvető elemek megtanítása
- Versenyfelkészítés kezdete
- Speciális edzés

### Felsőszint (13+ évesek)
- Magas szintű technikai fejlesztés
- Nemzeti versenyek
- Nemzetközi felkészítés

## Holisztikus Fejlődés

Figyelembe kell venni:
- Fizikai fejlődés
- Mentális egészség
- Iskolai tanulmányok
- Társadalmi készségek

## Hosszú Távú Perspektíva

A tehetséggondozás nem az azonnali eredményekről szól, hanem:
- Fenntartható fejlődésről
- Egész életi karrier építésről
- Felépített alapokról

Az ifjúságban befektetett munka később meghozza az eredményeket.
    `
  }
]
