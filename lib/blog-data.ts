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
    title: 'A műtornászat alapjai',
    excerpt: 'Ismerje meg a műtornászat történetét, alapelveit és a sportág legfontosabb ismereteit.',
    category: 'Alapok',
    readTime: 8,
    published: true,
    image: '/fundamentals-cover.jpg',
    content: `
<p>A műtornászat lenyűgöző sportág, amely évszázados múltra tekint vissza. Szépsége az olyan fizikai képességek egyedülálló kombinációjában rejlik, mint az erő, a hajlékonyság, a koordináció és a művészi kifejezés.</p>

<h2>A sportág története</h2>
<p>A modern torna a 18. század végi és 19. század eleji német tornamozgalomból fejlődött ki. Johann Christoph Friedrich GutsMuths és Friedrich Ludwig Jahn úttörő munkája teremtette meg a mai értelemben vett torna alapjait. A nemzetközi versenyrendszer az 1881-ben alapított Nemzetközi Tornaszövetség (FIG) keretében szilárdult meg.</p>

<h2>Alapvető képességek</h2>
<p>Egy sikeres műtornász fejlesztendő képességei a következők:</p>
<ul>
  <li><strong>Erő</strong> – elengedhetetlen az összetett elemek végrehajtásához.</li>
  <li><strong>Hajlékonyság</strong> – lehetővé teszi a széles ívű, kifejező mozdulatokat.</li>
  <li><strong>Egyensúly</strong> – kritikus jelentőségű a gerendán és a talajon.</li>
  <li><strong>Koordináció</strong> – az összetett elemek pontos időzítéséhez szükséges.</li>
  <li><strong>Művészi kifejezés</strong> – esztétikai értéket ad a gyakorlatnak.</li>
</ul>

<h2>A női verseny felépítése</h2>
<p>A női tornászok négy szeren versenyeznek:</p>
<ol>
  <li>Ugrás</li>
  <li>Felemás korlát</li>
  <li>Gerenda</li>
  <li>Talaj</li>
</ol>

<h2>A férfi verseny felépítése</h2>
<p>A férfi tornászok hat szeren mérik össze tudásukat:</p>
<ol>
  <li>Talaj</li>
  <li>Lólengés</li>
  <li>Gyűrű</li>
  <li>Ugrás</li>
  <li>Korlát</li>
  <li>Nyújtó</li>
</ol>

<h2>A pontozási rendszer</h2>
<p>A modern pontozás két fő részből tevődik össze:</p>
<ul>
  <li><strong>D-pont (Difficulty)</strong> – a gyakorlatba épített elemek technikai értékét és nehézségét tükrözi.</li>
  <li><strong>E-pont (Execution)</strong> – a végrehajtás minőségét értékeli, 10,0 pontról indulva, ahonnan a hibákért levonások történnek.</li>
</ul>
<p>Ez az egyensúly biztosítja, hogy mind a technikai tudás, mind a kivitelezés művészi színvonala értékelődjön.</p>
    `
  },
  {
    id: '2',
    slug: 'technique',
    title: 'Technikai fejlesztés',
    excerpt: 'Részletes útmutató a technikai elemek elsajátításához és a sérülésmentes felkészüléshez.',
    category: 'Technika',
    readTime: 10,
    published: true,
    image: '/technique-cover.jpg',
    content: `
<p>A műtornászati technika fejlesztése fokozatos, módszeres megközelítést igényel. A helyes forma és a sérülésmentesség biztosítása minden szinten kiemelt fontosságú.</p>

<h2>Progresszív fejlesztés</h2>
<p>Minden új elemnek megvannak az előfeltételei. A felkészülés általában a következő szakaszokra bontható:</p>
<ol>
  <li><strong>Mozgékonysági gyakorlatok</strong> – a hajlékonyság és a mozgástartomány kialakítása.</li>
  <li><strong>Erőfejlesztés</strong> – a törzs, valamint a felső- és alsótest erősítése.</li>
  <li><strong>Technikai alapok</strong> – az alapelemek precíz elsajátítása.</li>
  <li><strong>Fokozatos nehezítés</strong> – az elemek bonyolítása lépésről lépésre.</li>
</ol>

<h2>Biztonsági protokollok</h2>
<ul>
  <li>Megfelelő felszerelés és szabványos szerek használata.</li>
  <li>Edzői felügyelet minden új elem gyakorlása során.</li>
  <li>A terhelés fokozatos és tervezett növelése.</li>
  <li>Rendszeres pihenés és tudatos regeneráció.</li>
  <li>Segédeszközök (szivacsgödör, hevederrendszer) alkalmazása a tanulási szakaszban.</li>
</ul>

<h2>Gyakori technikai hibák</h2>
<ul>
  <li>Az ízületi szögek helytelen pozíciója a leérkezésnél.</li>
  <li>Túl gyors progresszió, a köztes lépések kihagyása.</li>
  <li>Fáradt állapotban végzett bonyolult elemek.</li>
  <li>Nem megfelelő bemelegítés vagy levezetés.</li>
</ul>

<h2>A tökéletesítés folyamata</h2>
<p>A technikai tökéletesség hosszú folyamat, de az alapok szilárd lerakása létfontosságú. Egy-egy elem automatizálása több ezer ismétlést igényel, ezért a türelem és a következetesség éppolyan fontos, mint maga a tehetség.</p>
    `
  },
  {
    id: '3',
    slug: 'competition',
    title: 'Versenyzés és versenyek',
    excerpt: 'A versenyrendszer, a pontozás és a legfontosabb nemzetközi és hazai versenyek bemutatása.',
    category: 'Versenyzés',
    readTime: 9,
    published: true,
    image: '/competition-cover.jpg',
    content: `
<p>A nemzetközi műtornászati versenyek világszerte szigorú szabályok és protokollok szerint zajlanak, amelyeket a Nemzetközi Tornaszövetség (FIG) Pontozási Kódexe (Code of Points) rögzít.</p>

<h2>A versenyrendszer</h2>

<h3>Csapatverseny</h3>
<ul>
  <li>Egy csapat legfeljebb öt tornászt nevezhet (a jelenlegi olimpiai formátumban).</li>
  <li>Szerenként három tornász versenyez, és mindhárom pontja számít.</li>
  <li>A csapatpontszám a szerenkénti eredmények összege.</li>
</ul>

<h3>Egyéni összetett</h3>
<ul>
  <li>A tornászok mind a négy (női) vagy hat (férfi) szeren gyakorlatot mutatnak be.</li>
  <li>A végeredmény az egyes szereken elért pontszámok összege.</li>
</ul>

<h3>Szerenkénti döntő</h3>
<ul>
  <li>Szerenként a selejtező nyolc legjobbja jut a döntőbe.</li>
  <li>Országonként legfeljebb két tornász szerepelhet egy szer döntőjében.</li>
</ul>

<h2>A pontozás részletei</h2>

<p><strong>Nehézségi érték (D-pont)</strong></p>
<ul>
  <li>A gyakorlatba beszámított elemek értékének összege.</li>
  <li>Tartalmazza az összekötési bónuszokat és a kompozíciós követelmények teljesítését.</li>
</ul>

<p><strong>Kivitelezési érték (E-pont)</strong></p>
<ul>
  <li>10,0 pontról indul.</li>
  <li>A technikai, művészi és kivitelezési hibákért levonások történnek (0,1; 0,3; 0,5 vagy 1,0 pont).</li>
</ul>

<h2>A legfontosabb versenyek</h2>
<ul>
  <li><strong>Olimpiai játékok</strong> – négyévente, a sportág csúcsrendezvénye.</li>
  <li><strong>Világbajnokság</strong> – általában évente (olimpiai évek kivételével lehet eltérés).</li>
  <li><strong>Európa-bajnokság</strong> – évente, kontinentális szinten.</li>
  <li><strong>Világkupa-sorozat</strong> – egész éven át tartó versenysorozat.</li>
  <li><strong>Nemzeti bajnokságok</strong> – a hazai versenyrendszer alapja.</li>
</ul>

<h2>A verseny etikája</h2>
<p>A műtornászat továbbra is a tisztesség, a kölcsönös tisztelet és a sportszerűség értékeit helyezi előtérbe. A bírók függetlensége és az átlátható pontozás a sportág hitelességének alapja.</p>
    `
  },
  {
    id: '4',
    slug: 'training',
    title: 'Edzésmódszertani trendek',
    excerpt: 'Modern edzésmódszerek, tudományos alapok és innovatív tréningtechnikák alkalmazása.',
    category: 'Edzés',
    readTime: 11,
    published: true,
    image: '/training-cover.jpg',
    content: `
<p>A modern műtornászat edzésmódszertana egyre inkább tudományos alapokra támaszkodik. A tervezés, a terhelésszabályozás és a regeneráció ma már önálló szakterületnek számít.</p>

<h2>Tudományos alapú edzés</h2>

<h3>Periodizáció</h3>
<ul>
  <li><strong>Makrociklus</strong> – a teljes szezon (általában egy év).</li>
  <li><strong>Mezociklus</strong> – 4–8 hetes szakaszok, egy-egy célt szolgálva.</li>
  <li><strong>Mikrociklus</strong> – heti bontású tervezés.</li>
</ul>

<h3>Terhelésmenedzsment</h3>
<p>A terhelés tudatos szabályozása kritikus fontosságú:</p>
<ul>
  <li>Megfelelően adagolt edzésintenzitás.</li>
  <li>Tervezett pihenés és regeneráció.</li>
  <li>Felépítő és levezető szakaszok váltakozása.</li>
  <li>A szubjektív fáradtság és az objektív mutatók (pulzus, alvás) követése.</li>
</ul>

<h2>Innovatív tréningtechnikák</h2>

<h3>Virtuális valóság az edzésben</h3>
<ul>
  <li>Mentális képzés és versenyszimuláció.</li>
  <li>Mozgáselemzés és azonnali visszajelzés.</li>
</ul>

<h3>Biomechanikai elemzés</h3>
<ul>
  <li>Nagy sebességű videóelemzés.</li>
  <li>3D mozgásrögzítés (motion capture).</li>
  <li>Szögek, sebességek és erők mérése a technika finomításához.</li>
</ul>

<h3>Erősítési protokollok</h3>
<ul>
  <li>Komplex, többízületi gyakorlatok.</li>
  <li>Funkcionális edzés a sportspecifikus mozgásokra építve.</li>
  <li>Prevenciós célú kiegészítő munka (törzs, vállöv, csípő).</li>
</ul>

<h2>Csapatmunka az élsportban</h2>
<p>Egy sikeres program ma már egy szakembercsapatra épül:</p>
<ul>
  <li>Vezető- és szakedzők</li>
  <li>Sportorvos</li>
  <li>Fiziológus és teljesítménydiagnoszta</li>
  <li>Sportpszichológus</li>
  <li>Gyúró és gyógytornász</li>
  <li>Táplálkozási tanácsadó</li>
</ul>
<p>Minden szakember egyetlen célért dolgozik: a sportoló hosszú távú, egészséges fejlődéséért.</p>
    `
  },
  {
    id: '5',
    slug: 'science',
    title: 'Sporttudományi háttér',
    excerpt: 'Az élsport tudományos alapjai, a fiziológia és a biomechanika a gyakorlatban.',
    category: 'Tudomány',
    readTime: 12,
    published: true,
    image: '/mental-cover.jpg',
    content: `
<p>A modern műtornászat a tudomány és a gyakorlat szoros együttműködésére épül. A teljesítmény optimalizálása ma már csak interdiszciplináris megközelítéssel képzelhető el.</p>

<h2>Fiziológia és adaptáció</h2>

<h3>Kardiovaszkuláris adaptáció</h3>
<ul>
  <li>Az edzett tornászok nyugalmi pulzusa jellemzően alacsonyabb.</li>
  <li>Hatékonyabb oxigénfelvétel és -hasznosítás (VO₂max).</li>
  <li>Gyorsabb regenerálódás az intenzív erőkifejtések között.</li>
</ul>

<h3>Izomadaptáció</h3>
<ul>
  <li>Fokozott fehérjeszintézis és izomhipertrófia a célzott területeken.</li>
  <li>A mitokondriumok számának és működésének javulása.</li>
  <li>Az izomrostok szerkezeti és funkcionális átalakulása az edzésingerre.</li>
</ul>

<h2>Biomechanika</h2>

<h3>Erőelemzés</h3>
<ul>
  <li>Laboratóriumi erőplatformok használata.</li>
  <li>A lendület és az impulzus megmaradásának alkalmazása az elemek tervezésében.</li>
  <li>A leérkezések terhelésének objektív mérése.</li>
</ul>

<h3>Mozgáselemzés</h3>
<ul>
  <li>Ízületi szögek és szögsebesség nyomon követése.</li>
  <li>Az ízületeket érő terhelés becslése.</li>
  <li>Az optimális technika egyénre szabott meghatározása.</li>
</ul>

<h2>Sérülésmegelőzés</h2>

<h3>Kockázati tényezők</h3>
<ul>
  <li>Krónikus túlterhelés.</li>
  <li>Hiányos alapképességek (erő, mobilitás, stabilitás).</li>
  <li>Aszimmetriák és biomechanikai eltérések.</li>
</ul>

<h3>Prevenciós stratégiák</h3>
<ul>
  <li>Célzott erősítő és stabilizáló program.</li>
  <li>Rendszeres hajlékonysági és mobilizációs munka.</li>
  <li>Aktív regenerációs módszerek (mobilitás, alvás, táplálkozás).</li>
</ul>

<h2>Kognitív fejlődés</h2>
<p>A műtornászat a fizikai képességek mellett számos kognitív funkciót is fejleszt:</p>
<ul>
  <li>Téri tájékozódás és testtudat.</li>
  <li>Motoros memória.</li>
  <li>Gyors döntéshozatal nyomás alatt.</li>
  <li>Stresszkezelés és érzelmi szabályozás.</li>
</ul>
<p>A sporttudomány folyamatosan fejlődik, és új ismeretekkel gazdagítja a felkészítés gyakorlatát.</p>
    `
  },
  {
    id: '6',
    slug: 'coaching',
    title: 'Edzők fejlesztése',
    excerpt: 'A szakmai fejlődés útja, a képzés szintjei és a modern edző szerepe a sportágban.',
    category: 'Edzés',
    readTime: 10,
    published: true,
    image: '/nutrition-cover.jpg',
    content: `
<p>A minőségi edzők jelentik a műtornászat fejlődésének alapját. A tehetség önmagában nem elég – kiváló szakmai vezetés nélkül a legígéretesebb sportoló sem juthat el a legmagasabb szintre.</p>

<h2>Edzői képzési szintek</h2>

<h3>Alapszint</h3>
<ul>
  <li>Alapvető biztonsági és technikai ismeretek.</li>
  <li>Gyermekekkel és kezdőkkel végzett munka.</li>
</ul>

<h3>Regionális szint</h3>
<ul>
  <li>Mélyebb technikai és módszertani tudás.</li>
  <li>Versenyzők felkészítése regionális és országos szintre.</li>
</ul>

<h3>Nemzetközi szint</h3>
<ul>
  <li>Élvonalbeli szaktudás és tapasztalat.</li>
  <li>Felkészítés világversenyekre, olimpiára.</li>
</ul>

<h2>Alapvető kompetenciák</h2>
<p>Egy modern edzőnek több területen kell otthonosan mozognia:</p>
<ul>
  <li><strong>Biomechanika</strong> – az erő és a mozgás törvényei.</li>
  <li><strong>Fiziológia</strong> – az emberi szervezet alkalmazkodása az edzésingerre.</li>
  <li><strong>Sportpszichológia</strong> – mentális felkészítés, motiváció.</li>
  <li><strong>Pedagógia</strong> – hatékony oktatás és visszajelzés.</li>
  <li><strong>Biztonságtechnika</strong> – sérülésmegelőzés, segítségadás.</li>
</ul>

<h2>Folyamatos szakmai fejlődés</h2>
<ul>
  <li>Szemináriumok és műhelymunkák.</li>
  <li>Tudományos konferenciák.</li>
  <li>Nemzetközi módszertani tapasztalatcsere.</li>
  <li>Kollégák közötti tudásmegosztás.</li>
</ul>

<h2>Etikai felelősség</h2>
<p>Az edző felelőssége túlmutat a technikai oktatáson. Az edző felel:</p>
<ul>
  <li>a sportolók fizikai és lelki biztonságáért;</li>
  <li>a fejlődésük tudatos mentorálásáért;</li>
  <li>a pozitív értékek és viselkedésminták közvetítéséért;</li>
  <li>a versenyzők hosszú távú egészségéért.</li>
</ul>
<p>A jó edző tehát sokkal többet ad, mint egy-egy elem megtanítása – emberi mintát is mutat tanítványainak.</p>
    `
  },
  {
    id: '7',
    slug: 'youth',
    title: 'Ifjúsági program',
    excerpt: 'Tehetséggondozás, korai kiválasztás és a jövő bajnokainak felkészítése.',
    category: 'Ifjúsági',
    readTime: 9,
    published: true,
    image: '/recovery-cover.jpg',
    content: `
<p>A tehetséggondozás minden sikeres nemzeti műtornászati program alapja. A tartós nemzetközi versenyképesség nem véletlen műve, hanem évtizedek alatt felépített rendszeré.</p>

<h2>A tehetség felismerése</h2>

<h3>Egyéni jellemzők</h3>
<ul>
  <li>Megfelelő fizikai adottságok (alkat, hajlékonyság).</li>
  <li>Kiemelkedő koordinációs képesség.</li>
  <li>Mentális rugalmasság és tanulékonyság.</li>
  <li>Kitartás, szorgalom és belső motiváció.</li>
</ul>

<h3>Szisztematikus szűrés</h3>
<ul>
  <li>Iskolai testnevelési programok.</li>
  <li>Közösségi edzőpontok és tehetségkutató napok.</li>
  <li>Nyílt próbák egyesületeknél.</li>
</ul>

<h2>Fejlesztési szintek</h2>

<h3>Kezdő szint (6–8 év)</h3>
<ul>
  <li>Játékos ismerkedés a szerekkel.</li>
  <li>Az általános mozgásműveltség kialakítása.</li>
  <li>Biztonságos környezet és élményközpontú edzés.</li>
</ul>

<h3>Középső szint (9–12 év)</h3>
<ul>
  <li>Az alapelemek tudatos elsajátítása.</li>
  <li>A versenyfelkészítés első lépései.</li>
  <li>Specifikus erő- és technikai munka.</li>
</ul>

<h3>Felső szint (13 év felett)</h3>
<ul>
  <li>Magas szintű technikai fejlesztés.</li>
  <li>Részvétel az országos versenyrendszerben.</li>
  <li>Felkészülés a nemzetközi szereplésekre.</li>
</ul>

<h2>Holisztikus fejlődés</h2>
<p>A fiatal sportoló nem szigetelhető el a sporton kívüli életétől. Fontos figyelembe venni:</p>
<ul>
  <li>a fizikai fejlődés ütemét és határait;</li>
  <li>a mentális egészséget és önbecsülést;</li>
  <li>a tanulmányi előmenetelt;</li>
  <li>a társas kapcsolatok minőségét.</li>
</ul>

<h2>Hosszú távú szemlélet</h2>
<p>A tehetséggondozás nem az azonnali eredményekről szól, hanem:</p>
<ul>
  <li>fenntartható, fokozatos fejlődésről;</li>
  <li>egész életen át tartó sportkarrier megalapozásáról;</li>
  <li>szilárd technikai és emberi alapok kiépítéséről.</li>
</ul>
<p>Az ifjúságba fektetett munka évek múlva, kiérlelt formában hozza meg a gyümölcsét.</p>
    `
  }
]
