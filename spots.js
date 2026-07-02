// Madeira Explorer
// POI Datenbank V1.0

const madeiraSpots = [

{
    id: "praia-calheta",
    name: "🏖️ Praia da Calheta",
    category: "baden",
// ✔ Google Maps geprüft
    lat: 32.719058,
    lng: -17.174369,
    description: `Geschützter Sandstrand an der Marina von Calheta.`,
    details: `Praia da Calheta ist einer der wenigen Sandstrände Madeiras und wurde mit hellem Sand künstlich angelegt. Die geschützte Bucht sorgt meist für ruhiges Wasser und eignet sich besonders für Familien sowie entspannte Badetage. Direkt am Strand befinden sich Restaurants, Cafés, Parkplätze und die Marina von Calheta.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "praia-seixal",
    name: "🖤 Praia do Seixal",
    category: "baden",
    lat: 32.82251876490777,
    lng: -17.103111922298897,
    description: `Schwarzer Naturstrand an der Nordküste Madeiras.`,
    details: `Praia do Seixal zählt zu den schönsten Stränden Madeiras und ist für seinen feinen schwarzen Vulkansand bekannt. Umgeben von steilen grünen Berghängen bietet der Strand eine außergewöhnliche Kulisse. Er eignet sich hervorragend zum Baden, Fotografieren und Entspannen und gehört zu den beliebtesten Ausflugszielen an der Nordküste.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "porto-moniz",
    name: "🌊 Porto Moniz Naturpools",
    category: "baden",
    lat: 32.867815,
    lng: -17.169757,
    description: `Berühmte Lavapools direkt am Atlantik.`,
    details: `Die natürlichen Meerwasserbecken von Porto Moniz wurden durch erkaltete Lavaströme geformt und werden ständig mit frischem Atlantikwasser gespeist. Die Anlage verfügt über Umkleiden, Duschen, Sonnenterrassen und gastronomische Angebote. Sie zählt zu den bekanntesten Sehenswürdigkeiten Madeiras.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "garajau",
    name: "🤿 Praia do Garajau",
    category: "schnorcheln",
    lat: 32.63830,
    lng: -16.84830,
    description: `Meeresschutzgebiet mit guter Unterwasserwelt.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "prainha",
    name: "🏝️ Prainha",
    category: "baden",
    lat: 32.744725,
    lng: -16.706104,
    description: `Kleiner schwarzer Naturstrand bei Caniçal.`,
    details: `Prainha ist einer der wenigen natürlichen Sandstrände Madeiras. Der dunkle Vulkansand und die geschützte Bucht machen ihn besonders bei Einheimischen und Ruhesuchenden beliebt. Eine kleine Strandbar und Parkmöglichkeiten befinden sich in unmittelbarer Nähe.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "praia-formosa",
    name: "🌴 Praia Formosa",
    category: "baden",
    lat: 32.640974,
    lng: -16.953432,
    description: `Größter Strand im Raum Funchal.`,
    details: `Praia Formosa ist der größte öffentliche Strand Madeiras und besteht aus einer Mischung aus Kies und schwarzem Vulkansand. Die lange Promenade verbindet den Strand mit dem Lido-Bereich von Funchal. Restaurants, Cafés und sanitäre Einrichtungen befinden sich direkt am Strand.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "doca-cavacas",
    name: "🌊 Doca do Cavacas",
    category: "naturpool",
    lat: 32.6353,
    lng: -16.9479,
    description: `Kleine natürliche Meerespools direkt am Atlantik.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "jardim-mar",
    name: "🌊 Jardim do Mar",
    category: "baden",
    lat: 32.737080,
    lng: -17.212180,
    description: `Küstenort mit Bademöglichkeiten und spektakulären Klippen.`,
    details: `Jardim do Mar ist ein kleines Küstendorf an der Südwestküste Madeiras. Obwohl der Ort vor allem für seine Promenade und die hohen Wellen bekannt ist, gibt es geschützte Einstiegsstellen ins Meer. Besonders beliebt ist Jardim do Mar bei Surfern, Fotografen und Besuchern, die die entspannte Atmosphäre genießen möchten.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "paul-mar",
    name: "🌊 Paul do Mar",
    category: "baden",
    lat: 32.754120,
    lng: -17.227350,
    description: `Fischerdorf mit Meerzugang und spektakulären Sonnenuntergängen.`,
    details: `Paul do Mar ist eines der bekanntesten Fischerdörfer Madeiras. Entlang der Uferpromenade gibt es mehrere Zugänge zum Meer sowie kleine Badebereiche zwischen den Felsen. Der Ort ist außerdem ein beliebter Treffpunkt für Surfer und bietet zahlreiche Restaurants mit Blick auf den Atlantik.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "ponta-pargo",
    name: "🌅 Farol da Ponta do Pargo",
    category: "aussicht",
    lat: 32.813850,
    lng: -17.263070,
    description: `Leuchtturm am westlichsten Punkt Madeiras mit spektakulären Klippen.`,
    details: `Der Farol da Ponta do Pargo steht auf der Ponta da Vigia, rund 290 Meter über dem Atlantik, und markiert den westlichsten Punkt Madeiras. Der 1922 in Betrieb genommene Leuchtturm beherbergt ein kleines Leuchtturmmuseum und bietet einen beeindruckenden Blick auf die Steilküste und den offenen Atlantik. Besonders zum Sonnenuntergang zählt dieser Ort zu den schönsten Aussichtspunkten der Insel. Wenige Gehminuten entfernt befindet sich zudem der Miradouro da Garganta Funda mit Blick auf einen rund 140 Meter hohen Wasserfall.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "massapez",
    name: "🌅 Miradouro do Massapez",
    category: "aussicht",
    lat: 32.771063894168954,
    lng: -17.238311682774214,
    description: `Aussichtspunkt oberhalb von Fajã da Ovelha mit Blick auf Paul do Mar und Jardim do Mar.`,
    details: `Der Miradouro do Massapez gehört zu den schönsten Aussichtspunkten im Westen Madeiras. Von der Aussichtsplattform eröffnet sich ein beeindruckender Blick auf die Steilküste sowie die Küstenorte Paul do Mar und Jardim do Mar. Sitzgelegenheiten laden zum Verweilen ein, während sich besonders am Abend spektakuläre Sonnenuntergänge über dem Atlantik beobachten lassen. Der Aussichtspunkt ist direkt mit dem Auto erreichbar und eignet sich hervorragend als Fotostopp auf einer Rundfahrt durch den Westen der Insel.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "rabacal",
    name: "🥾 Rabaçal Parkplatz",
    category: "wandern",
    lat: 32.755276,
    lng: -17.132706,
    description: `Offizieller Ausgangspunkt für die Wanderungen zu den 25 Fontes und zum Risco-Wasserfall.`,
    details: `Der Rabaçal-Parkplatz ist der wichtigste Ausgangspunkt für einige der bekanntesten Wanderungen Madeiras, darunter die PR6 Levada das 25 Fontes, die PR6.1 zum Risco-Wasserfall und die Levada do Alecrim. Vom Parkplatz führt eine asphaltierte Straße etwa 2 Kilometer bergab bis zum Forsthaus Rabaçal, alternativ verkehrt ein kostenpflichtiger Shuttlebus. Vor Ort befinden sich Parkplätze und Informationstafeln. Besonders in der Hauptsaison empfiehlt sich eine frühe Anreise, da der Parkplatz schnell belegt ist.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "25-fontes",
    name: "🥾 Levada das 25 Fontes",
    category: "wandern",
    lat: 32.75763298756145,
    lng: -17.13254128699442,
    description: `Eine der bekanntesten Levada-Wanderungen Madeiras zu 25 Quellen.`,
    details: `Die Levada das 25 Fontes (PR6) zählt zu den beliebtesten Wanderungen Madeiras. Der gut ausgebaute Levadaweg führt durch den UNESCO-geschützten Lorbeerwald bis zu einem natürlichen Felsenbecken, das von zahlreichen kleinen Wasserfällen gespeist wird. Am Ziel stürzen die namensgebenden 25 Quellen über moosbewachsene Felsen in einen klaren Bergsee. Die Wanderung eignet sich für trittsichere Wanderer und bietet unterwegs eindrucksvolle Ausblicke auf den ursprünglichen Laurisilva-Wald. Besonders am frühen Morgen ist die Strecke deutlich ruhiger als am Nachmittag.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "risco-wasserfall",
    name: "💧 Risco Wasserfall",
    category: "wandern",
    lat: 32.758934,
    lng: -17.137993,
    description: `Beeindruckender Wasserfall im Rabaçal-Tal mit rund 100 Metern Fallhöhe.`,
    details: `Der Risco-Wasserfall gehört zu den bekanntesten Wasserfällen Madeiras und ist über die kurze Wanderung PR6.1 vom Forsthaus Rabaçal erreichbar. Das Wasser stürzt nahezu senkrecht über eine hohe Basaltwand in die Tiefe und bietet besonders nach Regenfällen ein eindrucksvolles Naturschauspiel. Der Aussichtspunkt liegt nur wenige Gehminuten von der Abzweigung zur Levada das 25 Fontes entfernt und lässt sich hervorragend mit dieser Wanderung kombinieren.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "levada-alecrim",
    name: "🌿 Levada do Alecrim",
    category: "wandern",
    lat: 32.751186,
    lng: -17.131684,
    description: `Ruhige Levada-Wanderung zu Wasserfällen und dem Lagoa do Vento.`,
    details: `Die Levada do Alecrim gehört zu den weniger überlaufenen Wanderungen im Rabaçal-Gebiet. Der Weg führt durch den ursprünglichen Lorbeerwald zu kleinen Wasserfällen und bietet die Möglichkeit, einen Abstecher zur beeindruckenden Lagoa do Vento zu unternehmen. Im Vergleich zur Levada das 25 Fontes ist die Strecke meist deutlich ruhiger und eignet sich besonders für Naturliebhaber, die die Landschaft abseits der größten Besucherströme erleben möchten.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "pico-arieiro",
    name: "⛰️ Pico do Arieiro",
    category: "aussicht",
    lat: 32.734971,
    lng: -16.928819,
    description: `Dritthöchster Gipfel Madeiras mit spektakulärer Bergkulisse.`,
    details: `Der Pico do Arieiro ist mit 1.818 Metern der dritthöchste Berg Madeiras und einer der bekanntesten Aussichtspunkte der Insel. Dank der gut ausgebauten Zufahrtsstraße ist der Gipfel bequem erreichbar. Von hier starten die berühmte Wanderung zum Pico Ruivo sowie mehrere kürzere Panoramawege. Besonders bei Sonnenaufgang und oberhalb der Wolken bietet sich ein beeindruckender Blick über die Bergwelt Madeiras. Vor Ort befinden sich ein großer Parkplatz, ein Café, sanitäre Anlagen und verschiedene Aussichtsterrassen.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "ponta-sao-lourenco",
    name: "🌅 Ponta de São Lourenço",
    category: "wandern",
    lat: 32.744885,
    lng: -16.683335,
    description: `Spektakuläre Küstenwanderung über die östliche Halbinsel Madeiras.`,
    details: `Die Vereda da Ponta de São Lourenço (PR8) zählt zu den beliebtesten Wanderungen Madeiras. Der gut ausgebaute Weg führt durch eine karge Vulkanlandschaft mit eindrucksvollen Felsformationen und spektakulären Ausblicken auf die Nord- und Südküste. Anders als der grüne Rest der Insel ist die Halbinsel von einer trockenen, fast wüstenartigen Vegetation geprägt. Unterwegs erwarten dich mehrere Aussichtspunkte, steile Klippen und die Casa do Sardinha als Rastmöglichkeit. Für die rund 6 bis 8 Kilometer lange Hin- und Rückwanderung solltest du je nach Tempo etwa 3 bis 4 Stunden einplanen. Sonnenschutz und ausreichend Wasser sind besonders wichtig, da es unterwegs kaum Schatten gibt.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "fanal",
    name: "🌲 Fanal Lorbeerwald",
    category: "natur",
    lat: 32.810982,
    lng: -17.145162,
    description: `Mystischer Lorbeerwald mit jahrhundertealten Bäumen und häufigem Nebel.`,
    details: `Der Fanal Lorbeerwald gehört zum UNESCO-Weltnaturerbe Laurisilva und zählt zu den bekanntesten Naturattraktionen Madeiras. Die teilweise mehrere hundert Jahre alten Til-Bäume verleihen dem Wald eine einzigartige Atmosphäre, besonders wenn Nebel zwischen den knorrigen Baumkronen aufzieht. Rund um den Parkplatz laden zahlreiche Wege zu kurzen Spaziergängen oder längeren Wanderungen ein. Picknickplätze und weite Wiesen machen Fanal auch zu einem beliebten Ziel für einen entspannten Aufenthalt in der Natur. Je nach Wetter verändert sich die Stimmung innerhalb weniger Minuten – von sonnig bis geheimnisvoll nebelverhangen.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "veu-noiva",
    name: "🌊 Véu da Noiva",
    category: "aussicht",
    lat: 32.824187,
    lng: -17.146409,
    description: `Berühmter Wasserfall, der direkt von den Klippen ins Meer stürzt.`,
    details: `Der Véu da Noiva (Brautschleier-Wasserfall) gehört zu den bekanntesten Naturattraktionen Madeiras. Der Wasserfall stürzt von den steilen Klippen der Nordküste direkt in den Atlantik und erinnert mit seinem feinen Wasserband an einen Brautschleier. Vom Miradouro do Véu da Noiva bietet sich ein hervorragender Blick auf den Wasserfall, die alte Küstenstraße und die spektakuläre Felslandschaft. Besonders nach Regenfällen führt der Wasserfall deutlich mehr Wasser und bietet ein eindrucksvolles Naturschauspiel.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "pico-ruivo",
    name: "⛰️ Pico Ruivo",
    category: "wandern",
    lat: 32.75918625497622,
    lng: -16.943003967428947,
    description: `Höchster Gipfel Madeiras mit spektakulärem 360°-Panoramablick.`,
    details: `Mit 1.862 Metern ist der Pico Ruivo der höchste Berg Madeiras und eines der beliebtesten Wanderziele der Insel. Der Gipfel ist ausschließlich zu Fuß erreichbar und kann über die berühmte PR1 vom Pico do Arieiro oder über die kürzere PR1.2 ab Achada do Teixeira bestiegen werden. Oben erwartet Besucher ein beeindruckender Rundumblick über das zentrale Bergmassiv, tiefe Täler und bei klarem Wetter bis zur Nord- und Südküste sowie zu den Desertas-Inseln. Unterhalb des Gipfels befindet sich die Berghütte Casa de Abrigo do Pico Ruivo mit Einkehrmöglichkeit und Toiletten.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "eira-serrado",
    name: "🏞️ Eira do Serrado",
    category: "aussicht",
    lat: 32.67972875897292,
    lng: -16.900579421673983,
    description: `Spektakulärer Aussichtspunkt hoch über dem Nonnental (Curral das Freiras).`,
    details: `Der Miradouro da Eira do Serrado gehört zu den bekanntesten Aussichtspunkten Madeiras. Von der Plattform auf rund 1.095 Metern Höhe eröffnet sich ein beeindruckender Blick auf das tief eingeschnittene Curral das Freiras (Nonnental), das vollständig von steilen Berggipfeln umgeben ist. Der Aussichtspunkt ist bequem über einen kurzen, gepflasterten Fußweg vom Parkplatz erreichbar und verfügt über ein Café, Souvenirshop und sanitäre Anlagen. Besonders am frühen Morgen oder späten Nachmittag sorgen wechselnde Lichtverhältnisse für außergewöhnliche Fotomotive.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "home",
    name: "🏠 Ausgangspunkt Unterkunft",
    category: "home",
    lat: 32.71334731397877,
    lng: -17.158790468875203,
    description: `Startpunkt für eure Madeira-Touren.`,
    status: "verified"
},

{
    id: "mercado-funchal",
    name: "🛒 Mercado dos Lavradores",
    category: "einkaufen",
    lat: 32.648680,
    lng: -16.903839,
    description: `Traditioneller Markt in Funchal mit Obst, Fisch und regionalen Produkten.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "funchal-altstadt",
    name: "🏛️ Altstadt Funchal",
    category: "ausflug",
    lat: 32.648918,
    lng: -16.904515,
    description: `Historisches Zentrum mit Gassen, Restaurants und Street Art.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "cabo-girao",
    name: "🌅 Cabo Girão",
    category: "aussicht",
    lat: 32.65509231570813,
    lng: -17.003813697957397,
    description: `Skywalk auf einer der höchsten Steilklippen Europas.`,
    details: `Cabo Girão erhebt sich rund 580 Meter über dem Atlantik und zählt zu den höchsten Steilklippen Europas. Die gläserne Skywalk-Plattform ermöglicht einen spektakulären Blick senkrecht hinab auf das Meer und die Fajãs unterhalb der Steilküste. Von hier reicht die Aussicht entlang der Südküste bis nach Funchal. Restaurants, Cafés, Souvenirläden und Parkplätze befinden sich direkt am Aussichtspunkt. Cabo Girão gehört zu den meistbesuchten Sehenswürdigkeiten Madeiras.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "pingo-doce-calheta",
    name: "🛒 Pingo Doce Calheta",
    category: "supermarkt",
    lat: 32.720928,
    lng: -17.176874,
    description: `Großer Supermarkt direkt an der Marina von Calheta.`,
    details: `Der Pingo Doce ist der wichtigste Supermarkt in Calheta und ideal für den täglichen Einkauf. Neben Lebensmitteln gibt es eine Frischetheke, Bäckerei, Obst- und Gemüseabteilung sowie regionale Produkte. Kostenlose Parkplätze befinden sich direkt vor dem Eingang.

• Sortiment: Lebensmittel & Frischetheke
• Lage: Marina Calheta
• Parkplätze: direkt vor Ort
• Google: ⭐ 4,4
• Ideal für: täglichen Einkauf`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "marina-calheta",
    name: "⛵ Marina Calheta",
    category: "ausflug",
    lat: 32.721500,
    lng: -17.177800,
    description: `Schöner Ausgangspunkt für Spaziergänge, Restaurants und Meerblick.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "ribeira-brava",
    name: "🌊 Ribeira Brava",
    category: "ort",
    lat: 32.670700,
    lng: -17.064700,
    description: `Kleiner Küstenort mit Strand, Cafés und guter Infrastruktur.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "miradouro-nazare",
    name: "🌅 Miradouro da Nazaré",
    category: "aussicht",
    lat: 32.66674660783711,
    lng: -16.92861570561117,
    description: `Panoramablick über Funchal, den Hafen und die Südküste.`,
    details: `Der Miradouro da Nazaré zählt zu den schönsten Aussichtspunkten oberhalb von Funchal. Von der Plattform eröffnet sich ein weiter Blick über die gesamte Bucht, den Hafen, die Altstadt und die Südküste Madeiras. Durch die gute Erreichbarkeit mit dem Auto eignet sich der Aussichtspunkt ideal für einen kurzen Fotostopp. Besonders in den Abendstunden entstehen hier beeindruckende Aufnahmen der beleuchteten Stadt.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "miradouro-raposeira",
    name: "🌅 Miradouro da Raposeira",
    category: "aussicht",
    lat: 32.69528250452562,
    lng: -17.11690492355784,
    description: `Aussichtspunkt mit weitem Blick über die Südküste Madeiras.`,
    details: `Der Miradouro da Raposeira liegt oberhalb der Südküste und bietet einen herrlichen Blick über Ribeira Brava, das Meer und die umliegenden Berghänge. Der kleine Aussichtspunkt ist ruhig gelegen und eignet sich hervorragend für eine kurze Pause während einer Rundfahrt. Bei klarer Sicht reicht der Blick weit entlang der Südküste.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "veleiro-calhau",
    name: "🌊 Calhau da Lapa",
    category: "natur",
    lat: 32.66791268511744,
    lng: -17.10131690894648,
    description: `Versteckte Felsbucht mit Höhlen, Meerzugang und spektakulärer Steilküste.`,
    details: `Calhau da Lapa ist einer der verstecktesten Küstenorte Madeiras. Über einen steilen Treppenweg gelangt man zu einer kleinen Felsbucht mit ehemaligen Fischerhäusern, natürlichen Meerzugängen und in den Fels gebauten Höhlen. Die abgeschiedene Lage, das glasklare Wasser und die imposanten Steilklippen machen den Ort zu einem beliebten Ziel für Fotografen und Ruhesuchende. Der Abstieg ist anspruchsvoll, wird aber mit einer außergewöhnlichen Kulisse belohnt.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "miradouro-boa-morte",
    name: "🌅 Miradouro da Boa Morte",
    category: "aussicht",
    lat: 32.83362341624942,
    lng: -17.23696815330574,
    description: `Aussichtspunkt mit spektakulärem Blick auf die Nordwestküste Madeiras.`,
    details: `Der Miradouro da Boa Morte liegt an der wilden Nordwestküste Madeiras zwischen Achadas da Cruz und Ponta do Pargo. Von der Aussichtsplattform eröffnet sich ein weiter Blick auf die steilen Klippen, den Atlantik und die zerklüftete Küstenlandschaft. Der Aussichtspunkt ist ruhig gelegen und eignet sich hervorragend für Fotostopps sowie zum Beobachten des Sonnenuntergangs. Durch die abgeschiedene Lage gehört er zu den weniger bekannten, aber besonders eindrucksvollen Aussichtspunkten der Insel.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "ribeira-janela",
    name: "🌊 Ribeira da Janela",
    category: "natur",
    lat: 32.855483,
    lng: -17.152917,
    description: `Berühmte Felsnadeln im Atlantik und eines der bekanntesten Fotomotive Madeiras.`,
    details: `Ribeira da Janela ist für die markanten Basaltfelsen bekannt, die unmittelbar vor der Küste aus dem Atlantik aufragen. Über einen kurzen Fußweg gelangt man zu einer kleinen Aussichtsplattform mit Tunnel, von der sich die imposanten Felsformationen besonders gut fotografieren lassen. Bei starker Brandung und zum Sonnenuntergang entstehen hier spektakuläre Aufnahmen. Der Spot lässt sich ideal mit Porto Moniz, Seixal und dem Véu da Noiva kombinieren.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "garganta-funda",
    name: "💦 Miradouro da Garganta Funda",
    category: "natur",
	lat: 32.820100,
	lng: -17.251220,
    description: `Aussichtspunkt auf einen rund 140 Meter hohen Wasserfall an der Steilküste.`,
    details: `Der Miradouro da Garganta Funda liegt unweit des Farol da Ponta do Pargo und bietet einen beeindruckenden Blick auf einen der höchsten Wasserfälle Madeiras. Vom Parkplatz führt ein einfacher Fußweg von etwa fünf Minuten zum Aussichtspunkt. Besonders nach Regenfällen stürzt der Wasserfall mit großer Wassermenge über die Steilküste in Richtung Atlantik. Durch die ruhige Lage zählt der Spot noch immer zu den Geheimtipps der Insel.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "guindaste",
    name: "🌉 Miradouro do Guindaste",
    category: "aussicht",
    lat: 32.824841,
    lng: -16.860153,
    description: `Moderner Skywalk mit spektakulärem Blick auf die Nordküste Madeiras.`,
    details: `Der Miradouro do Guindaste liegt oberhalb von Faial und verfügt über zwei gläserne Aussichtsplattformen, die weit über die Steilküste hinausragen. Von hier reicht der Blick entlang der Nordküste bis zur Penha d'Águia, zur Ponta de São Lourenço und bei guter Sicht sogar bis zur Insel Porto Santo. Besonders zum Sonnenaufgang zählt der Skywalk zu den eindrucksvollsten Aussichtspunkten Madeiras. Parkplätze befinden sich unmittelbar am Aussichtspunkt.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "manifattura-gelato",
    name: "🍕 Manifattura Di Gelato",
    category: "essen",
    lat: 32.71835474267299,
    lng: -17.171421243004833,
    description: `Beliebtes italienisches Restaurant direkt an der Marina von Calheta.`,
    details: `Manifattura Di Gelato gehört zu den beliebtesten Restaurants Madeiras und verbindet authentische italienische Küche mit hausgemachtem Gelato. Die große Terrasse direkt am Yachthafen bietet einen herrlichen Blick auf die Marina und den Atlantik. Besonders Pizza, Pasta und die Eisspezialitäten genießen einen hervorragenden Ruf.

• Spezialität: Pizza, Pasta & Gelato
• Lage: Marina Calheta
• Preis: €€
• Google: ⭐ 4,6 (3.590 Bewertungen)
• Tripadvisor: ⭐ 4,5 (968 Bewertungen)
• Reservierung: am Abend empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "leme-marisqueira",
    name: "🦞 Leme Marisqueira",
    category: "essen",
    lat: 32.718635375686404,
    lng: -17.172077036950135,
    description: `Beliebtes Fischrestaurant direkt an der Marina von Calheta.`,
    details: `Leme Marisqueira gehört zu den bekanntesten Restaurants in Calheta und ist besonders für frischen Fisch, Meeresfrüchte und typisch madeirensische Spezialitäten bekannt. Die große Terrasse direkt am Yachthafen bietet einen herrlichen Blick auf die Marina und den Atlantik. Freundlicher Service und großzügige Portionen machen das Restaurant zu einer der besten Adressen für ein entspanntes Abendessen.

• Spezialität: Fisch & Meeresfrüchte
• Lage: Marina Calheta
• Preis: €€–€€€
• Google: ⭐ 4,7 (4.432 Bewertungen)
• Tripadvisor: ⭐ 4,4 (390 Bewertungen)
• Reservierung: am Abend empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "convento-vinhas",
    name: "🍷 Restaurante Convento das Vinhas",
    category: "essen",
    lat: 32.723884,
    lng: -17.174512,
    description: `Traditionelles Restaurant mit regionaler Küche und Panoramablick über Calheta.`,
    details: `Das Restaurante Convento das Vinhas liegt oberhalb von Calheta und ist bekannt für seine typisch madeirensische Küche, großzügigen Portionen und die schöne Aussicht über die Küste. Serviert werden frischer Fisch, Fleischspieße (Espetada), Degenfisch mit Banane sowie weitere regionale Spezialitäten. Die Terrasse macht das Restaurant besonders in den Abendstunden zu einem beliebten Ziel.

• Spezialität: Madeirensische Küche, Fisch & Espetada
• Lage: Oberhalb von Calheta
• Preis: €€–€€€
• Google: ⭐ 4,3 (952 Bewertungen)
• Tripadvisor: ⭐ 4,2 (374 Bewertungen)
• Reservierung: empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "o-ideal",
    name: "🐟 Restaurante O Ideal",
    category: "essen",
    lat: 32.75292957288899,
    lng: -17.224905451072992,
    description: `Traditionelles Restaurant direkt an der Promenade von Paul do Mar.`,
    details: `Das Restaurante O Ideal zählt zu den bekanntesten Adressen an der Südwestküste Madeiras. Direkt am Meer gelegen werden hier frischer Fisch, Meeresfrüchte und typische madeirensische Spezialitäten serviert. Trotz seiner einfachen, ungezwungenen Atmosphäre überzeugt das Restaurant seit Jahren mit hervorragender Qualität und einem ausgezeichneten Preis-Leistungs-Verhältnis.

• Spezialität: Fisch, Meeresfrüchte & Degenfisch
• Lage: Promenade Paul do Mar
• Preis: €€
• Google: ⭐ 4,7 (2.233 Bewertungen)
• Tripadvisor: ⭐ 4,7 (440 Bewertungen)
• Reservierung: meist nicht möglich, Wartezeit am Abend einplanen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "sol-poente",
    name: "🌅 Restaurante Sol Poente",
    category: "essen",
    lat: 32.6786297366095,
    lng: -17.10421604460533,
    description: `Restaurant direkt am Meer mit regionaler Küche und spektakulären Sonnenuntergängen.`,
    details: `Das Restaurante Sol Poente liegt unmittelbar an der Uferpromenade von Paul do Mar und gehört zu den schönsten Plätzen für ein Abendessen mit Blick auf den Atlantik. Serviert werden frischer Fisch, Espetada, Meeresfrüchte sowie weitere traditionelle Spezialitäten Madeiras. Die Terrasse direkt am Wasser macht das Restaurant besonders in den Abendstunden zu einem beliebten Treffpunkt.

• Spezialität: Fisch, Espetada & regionale Küche
• Lage: Promenade Paul do Mar
• Preis: €€
• Google: ⭐ 4,6 (ca. 1.450 Bewertungen)
• Tripadvisor: ⭐ 4,5 (ca. 380 Bewertungen)
• Reservierung: am Abend empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "maktub-pub",
    name: "🍹 Maktub Pub",
    category: "essen",
    lat: 32.76504968442537,
    lng: -17.23456843716952,
    description: `Beliebte Sunset-Bar mit Snacks, Cocktails und Meerblick.`,
    details: `Das Maktub Pub ist einer der bekanntesten Treffpunkte in Paul do Mar. Direkt an der Promenade gelegen bietet die Terrasse einen fantastischen Blick auf den Atlantik und spektakuläre Sonnenuntergänge. Neben Cocktails und regionalem Bier werden Burger, Sandwiches und kleine Gerichte serviert. Ideal für einen entspannten Ausklang des Tages.

• Spezialität: Cocktails, Burger & Snacks
• Lage: Promenade Paul do Mar
• Preis: €€
• Google: ⭐ 4,7 (ca. 1.900 Bewertungen)
• Tripadvisor: ⭐ 4,5 (ca. 250 Bewertungen)
• Reservierung: nicht erforderlich`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "joes-bar",
    name: "🍹 Joe's Bar",
    category: "essen",
    lat: 32.73854743974976,
    lng: -17.211095559606953,
    description: `Beliebte Bar und Restaurant mit Meerblick im Herzen von Jardim do Mar.`,
    details: `Joe's Bar gehört seit vielen Jahren zu den bekanntesten Treffpunkten in Jardim do Mar. Direkt an der Promenade gelegen bietet die Terrasse einen herrlichen Blick auf den Atlantik. Serviert werden Burger, Steaks, Fischgerichte, Cocktails und regionale Getränke. Besonders zum Sonnenuntergang herrscht hier eine entspannte Atmosphäre.

• Spezialität: Burger, Steak & Cocktails
• Lage: Promenade Jardim do Mar
• Preis: €€
• Google: ⭐ 4,7 (ca. 1.300 Bewertungen)
• Tripadvisor: ⭐ 4,5 (ca. 320 Bewertungen)
• Reservierung: nicht erforderlich`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "portinho",
    name: "🍽️ Portinho",
    category: "essen",
    lat: 32.737864,
    lng: -17.212782,
    description: `Gemütliches Restaurant mit regionaler Küche und Meerblick.`,
    details: `Das Portinho liegt direkt an der Promenade von Jardim do Mar und ist für seine entspannte Atmosphäre sowie frische regionale Küche bekannt. Neben Fisch- und Fleischgerichten werden auch vegetarische Speisen angeboten. Die Terrasse mit Blick auf den Atlantik macht das Restaurant besonders am Abend zu einem beliebten Ziel.

• Spezialität: Regionale Küche & Fisch
• Lage: Promenade Jardim do Mar
• Preis: €€
• Google: ⭐ 4,6 (ca. 700 Bewertungen)
• Tripadvisor: ⭐ 4,5 (ca. 180 Bewertungen)
• Reservierung: empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "polo-norte",
    name: "🐟 Restaurante Polo Norte",
    category: "essen",
    lat: 32.866772,
    lng: -17.166728,
    description: `Beliebtes Restaurant direkt an den Naturpools von Porto Moniz.`,
    details: `Das Restaurante Polo Norte zählt zu den bekanntesten Restaurants in Porto Moniz. Direkt an den berühmten Lavapools gelegen, bietet es einen herrlichen Blick auf den Atlantik. Serviert werden frischer Fisch, Meeresfrüchte sowie typisch madeirensische Spezialitäten. Ideal für eine Mittagspause nach dem Besuch der Naturpools.

• Spezialität: Fisch & Meeresfrüchte
• Lage: Naturpools Porto Moniz
• Preis: €€
• Google: ⭐ 4,5
• Tripadvisor: ⭐ 4,5
• Reservierung: in der Hauptsaison empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "gaivota",
    name: "🦞 Restaurante Gaivota",
    category: "essen",
    lat: 32.867483,
    lng: -17.169083,
    description: `Traditionsrestaurant mit regionaler Küche und Blick auf die Naturpools.`,
    details: `Das Restaurante Gaivota gehört seit vielen Jahren zu den bekanntesten Restaurants in Porto Moniz. Von der Terrasse genießt man einen schönen Blick auf die Naturpools und den Atlantik. Die Speisekarte bietet frischen Fisch, Meeresfrüchte sowie zahlreiche regionale Gerichte. Durch die zentrale Lage eignet sich das Restaurant ideal nach einem Besuch der Lavapools.

• Spezialität: Fisch & regionale Küche
• Lage: Porto Moniz Naturpools
• Preis: €€
• Google: ⭐ 4,4
• Tripadvisor: ⭐ 4,5
• Reservierung: empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "akua",
    name: "🍤 Akua",
    category: "essen",
    lat: 32.647975,
    lng: -16.908394,
    description: `Modernes Spitzenrestaurant mit kreativer Fischküche im Herzen von Funchal.`,
    details: `Das Akua gehört zu den besten Restaurants Madeiras und ist besonders für seine moderne Interpretation regionaler Fischgerichte bekannt. Hochwertige Zutaten, kreative Küche und ein stilvolles Ambiente machen es zu einer ausgezeichneten Wahl für einen besonderen Abend.

• Spezialität: Fisch & Meeresfrüchte
• Lage: Altstadt Funchal
• Preis: €€€
• Google: ⭐ 4,8 (ca. 2.900 Bewertungen)
• Tripadvisor: ⭐ 5,0
• Reservierung: unbedingt empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "armazem-sal",
    name: "🥩 Armazém do Sal",
    category: "essen",
    lat: 32.648697,
    lng: -16.908247,
    description: `Elegantes Restaurant mit gehobener madeirensischer Küche.`,
    details: `Das Armazém do Sal befindet sich in einem historischen Salzlager im Zentrum von Funchal. Serviert werden hochwertige Fisch-, Fleisch- und vegetarische Gerichte mit modernem Einfluss. Das stilvolle Ambiente und der ausgezeichnete Service machen das Restaurant zu einer der Top-Adressen der Insel.

• Spezialität: Gehobene madeirensische Küche
• Lage: Zentrum Funchal
• Preis: €€€
• Google: ⭐ 4,7 (ca. 2.600 Bewertungen)
• Tripadvisor: ⭐ 4,5
• Reservierung: empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "casal-penha",
    name: "🍷 Casal da Penha",
    category: "essen",
    lat: 32.644857,
    lng: -16.914575,
    description: `Traditionsrestaurant mit mediterraner Küche und schöner Gartenterrasse.`,
    details: `Das Casal da Penha gehört zu den beliebtesten Restaurants Funchals und überzeugt mit regionaler Küche, frischem Fisch sowie hervorragenden Fleischgerichten. Die idyllische Gartenterrasse sorgt für eine entspannte Atmosphäre und macht das Restaurant besonders in den Abendstunden zu einer ausgezeichneten Wahl.

• Spezialität: Fisch, Fleisch & mediterrane Küche
• Lage: Oberhalb des Lido-Zentrums
• Preis: €€€
• Google: ⭐ 4,7 (ca. 2.400 Bewertungen)
• Tripadvisor: ⭐ 4,5
• Reservierung: empfohlen`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "encumeada",
    name: "⛰️ Miradouro da Encumeada",
    category: "aussicht",
    lat: 32.75624248619484,
    lng: -17.019512498486915,
    description: `Aussichtspunkt am Encumeada-Pass mit Blick auf Nord- und Südküste.`,
    details: `Der Miradouro da Encumeada liegt auf rund 1.000 Metern Höhe am Encumeada-Pass und gehört zu den bekanntesten Aussichtspunkten Madeiras. Bei klarer Sicht eröffnet sich ein außergewöhnlicher Blick über das zentrale Bergmassiv sowie gleichzeitig auf die Nord- und Südküste der Insel. Der Aussichtspunkt ist ein beliebter Zwischenstopp auf der Passstraße und Ausgangspunkt mehrerer Wanderungen durch den Lorbeerwald. Direkt vor Ort befinden sich Parkmöglichkeiten, ein Restaurant, ein Café sowie ein Souvenirgeschäft.`,
    gpsChecked: true,
    status: "finished"
},

{
    id: "continente-modelo-calheta",
    name: "🛒 Continente Modelo Calheta",
    category: "supermarkt",
    lat: 32.720481,
    lng: -17.177458,
    description: `Moderner Supermarkt mit großer Auswahl nahe der Marina.`,
    details: `Der Continente Modelo bietet ein umfangreiches Sortiment mit frischen Lebensmitteln, regionalen Produkten, Haushaltsartikeln und einer eigenen Bäckerei. Dank der zentralen Lage eignet er sich hervorragend für größere Einkäufe während des Urlaubs.

• Sortiment: Vollsortiment
• Lage: Calheta
• Parkplätze: kostenlos
• Google: ⭐ 4,4
• Ideal für: Wocheneinkauf`,
    gpsChecked: true,
    status: "finished"
},

{
    id:"barquipan-lda",

    name:"🥖 Barquipan, Lda.",

    category:"baeckerei",

    lat:32.726994281015166,
    lng:-17.17939291776402,

    description:"Beliebte Bäckerei in Calheta mit frischem Brot, Gebäck und Snacks.",

    details:`Die Padaria Sra. da Estrela gehört zu den beliebtesten Bäckereien in Calheta. Täglich werden frisches Brot, Brötchen, portugiesisches Gebäck sowie kleine Snacks und Kaffee angeboten. Ideal für ein Frühstück oder Proviant vor einem Ausflug.

• Sortiment: Brot, Brötchen & Gebäck
• Lage: Zentrum Calheta
• Google: ⭐ 4,6
• Ideal für: Frühstück & Snacks`,

    gpsChecked:true,

    status:"finished"
},

{
    id:"farmacia-varela",

    name:"💊 Farmácia Varela",

    category:"apotheke",

    lat:32.723930,
    lng:-17.173930,

    description:"Gut ausgestattete Apotheke in Estreito da Calheta.",

    details:`Die Farmácia Varela ist die wichtigste Apotheke im Raum Calheta. Neben verschreibungspflichtigen Medikamenten gibt es Reiseapotheke, Sonnenschutz, Kosmetik sowie eine kompetente Beratung.

• Lage: Estreito da Calheta
• Google: ⭐ 4,6
• Öffnungszeiten: täglich geöffnet
• Ideal für: Medikamente & Reisebedarf`,

    gpsChecked:true,

    status:"finished"
},

{
    id:"galp-calheta",

    name:"⛽ Galp Calheta",

    category:"tankstelle",

    lat:32.730575635521824,
    lng:-17.178035089037888,

    description:"Große Tankstelle mit Shop und Waschanlage.",

    details:`Die Galp ist die wichtigste Tankstelle im Raum Calheta. Neben Benzin und Diesel gibt es einen Shop mit Getränken, Snacks sowie eine kleine Cafeteria. Ideal zum Tanken vor längeren Inselrundfahrten.

• Marke: Galp
• Lage: Estrela da Calheta
• Shop & Café vorhanden
• Google: ⭐ 4,4
• Ideal für: Tanken vor Ausflügen`,

    gpsChecked:true,

    status:"finished"
},



{
    id:"funchal",

    name:"📍 Funchal",

    category:"ort",

    lat:32.649628,
    lng:-16.908678,

    description:"Hauptstadt Madeiras mit Altstadt, Hafen, Märkten und zahlreichen Restaurants.",

    details:`Funchal ist das kulturelle und wirtschaftliche Zentrum Madeiras. Die Stadt verbindet historische Gassen, moderne Promenaden und zahlreiche Sehenswürdigkeiten. Besonders sehenswert sind die Altstadt (Zona Velha), der Mercado dos Lavradores, die Seilbahn nach Monte sowie die Uferpromenade.

• Highlights: Altstadt, Markt, Hafen & Seilbahn
• Parken: mehrere Parkhäuser im Zentrum
• Ideal für: Bummeln, Essen & Shopping
• Google: ⭐ 4,7`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"camara-lobos",

    name:"📍 Câmara de Lobos",

    category:"ort",

    lat:32.647255,
    lng:-16.977771,

    description:"Malerisches Fischerdorf mit bunten Booten und gemütlicher Promenade.",

    details:`Câmara de Lobos gilt als eines der schönsten Fischerdörfer Madeiras. Der kleine Naturhafen mit den traditionellen Fischerbooten inspirierte bereits Winston Churchill zu mehreren Gemälden. Rund um den Hafen laden zahlreiche Restaurants und Bars zum Verweilen ein.

• Highlights: Hafen, Promenade & Restaurants
• Spezialität: Poncha
• Ideal für: Abendessen & Sonnenuntergang
• Google: ⭐ 4,7`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"calheta",

    name:"📍 Calheta",

    category:"ort",

    lat:32.720746,
    lng:-17.175066,

    description:"Beliebter Urlaubsort mit Sandstrand, Marina und guter Infrastruktur.",

    details:`Calheta gehört zu den beliebtesten Urlaubsorten an der Südwestküste Madeiras. Der künstliche Sandstrand, die Marina sowie zahlreiche Restaurants, Cafés und Einkaufsmöglichkeiten machen den Ort zu einem idealen Ausgangspunkt für Inselerkundungen.

• Highlights: Strand, Marina & Promenade
• Infrastruktur: sehr gut
• Ideal für: Baden, Essen & Einkaufen
• Google: ⭐ 4,7`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"porto-moniz-ort",

    name:"📍 Porto Moniz",

    category:"ort",

    lat:32.866770,
    lng:-17.166742,

    description:"Küstenort mit berühmten Lavapools und spektakulärer Nordküste.",

    details:`Porto Moniz ist vor allem für seine natürlichen Lavapools bekannt. Der Ort bietet außerdem Restaurants, Cafés, eine schöne Uferpromenade und zählt zu den beliebtesten Ausflugszielen an der Nordwestküste Madeiras.

• Highlights: Naturpools & Promenade
• Ideal für: Baden & Tagesausflug
• Parkplätze: vorhanden
• Google: ⭐ 4,8`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"seixal",

    name:"📍 Seixal",

    category:"ort",

    lat:32.822425,
    lng:-17.110233,

    description:"Kleiner Küstenort an der Nordküste mit schwarzem Sandstrand und Wasserfällen.",

    details:`Seixal zählt zu den schönsten Orten an der Nordküste Madeiras. Bekannt ist der Ort vor allem für den schwarzen Naturstrand Praia do Seixal, die üppig grüne Landschaft und zahlreiche Wasserfälle entlang der Küstenstraße. Trotz seiner Beliebtheit hat sich Seixal seinen ursprünglichen Charme bewahrt.

• Highlights: Schwarzer Sandstrand & Wasserfälle
• Ideal für: Baden, Fotografieren & Natur
• Parkplätze: vorhanden
• Google: ⭐ 4,8`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"santana",

    name:"📍 Santana",

    category:"ort",

    lat:32.805684,
    lng:-16.882174,

    description:"Bekannt für die traditionellen strohgedeckten Häuser im Norden Madeiras.",

    details:`Santana ist einer der bekanntesten Orte Madeiras. Berühmt sind die traditionellen dreieckigen Häuser mit Strohdach, die heute als Wahrzeichen der Insel gelten. Daneben bietet Santana schöne Gärten, kleine Cafés sowie eine gute Ausgangslage für Wanderungen im Nordosten.

• Highlights: Strohhäuser & Ortszentrum
• Ideal für: Kultur & Fotostopp
• Parkplätze: vorhanden
• Google: ⭐ 4,7`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"machico",

    name:"📍 Machico",

    category:"ort",

    lat:32.715453,
    lng:-16.766140,

    description:"Historische Küstenstadt mit Sandstrand, Promenade und Restaurants.",

    details:`Machico gilt als erster Siedlungsort Madeiras. Heute bietet die Stadt eine schöne Promenade, einen künstlichen Sandstrand, zahlreiche Restaurants sowie einen kleinen Yachthafen. Durch die Nähe zum Flughafen eignet sich Machico hervorragend für einen Zwischenstopp.

• Highlights: Strand, Promenade & Altstadt
• Ideal für: Baden & Stadtbummel
• Parkplätze: ausreichend vorhanden
• Google: ⭐ 4,7`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"canical",

    name:"📍 Caniçal",

    category:"ort",

    lat:32.738396,
    lng:-16.738224,

    description:"Ruhiger Hafenort und Ausgangspunkt zur Ponta de São Lourenço.",

    details:`Caniçal liegt an der Ostküste Madeiras und war lange das Zentrum des Walfangs. Heute ist der Ort vor allem Ausgangspunkt für die Wanderung zur Ponta de São Lourenço. Außerdem befinden sich hier ein kleiner Hafen, Restaurants und das Walmuseum.

• Highlights: Hafen, Walmuseum & PR8
• Ideal für: Wanderer & Tagesausflug
• Parkplätze: vorhanden
• Google: ⭐ 4,6`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"sao-vicente",

    name:"📍 São Vicente",

    category:"ort",

    lat:32.796702,
    lng:-17.043836,

    description:"Charmanter Ort an der Nordküste mit Kirche, Promenade und Lavalandschaft.",

    details:`São Vicente liegt eingebettet zwischen den grünen Bergen der Nordküste. Der Ort bietet eine schöne Uferpromenade, historische Gebäude und mehrere Restaurants. Von hier lassen sich zahlreiche Ausflüge in das zentrale Bergland unternehmen.

• Highlights: Ortszentrum & Nordküste
• Ideal für: Zwischenstopp & Essen
• Parkplätze: vorhanden
• Google: ⭐ 4,7`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"ponta-do-sol",

    name:"📍 Ponta do Sol",

    category:"ort",

    lat:32.679433,
    lng:-17.100512,

    description:"Sonnigster Ort Madeiras mit historischer Altstadt und schöner Uferpromenade.",

    details:`Ponta do Sol gilt als der sonnenreichste Ort Madeiras. Rund um den kleinen Hafen laden Cafés, Restaurants und eine hübsche Promenade zum Verweilen ein. Die historischen Gassen und die entspannte Atmosphäre machen den Ort zu einem beliebten Zwischenstopp entlang der Südküste.

• Highlights: Altstadt, Hafen & Promenade
• Ideal für: Spaziergang & Café
• Parkplätze: vorhanden
• Google: ⭐ 4,7`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"jardim-do-mar-ort",

    name:"📍 Jardim do Mar",

    category:"ort",

    lat:32.737475,
    lng:-17.212315,

    description:"Charmantes Küstendorf mit Promenade und spektakulären Sonnenuntergängen.",

    details:`Jardim do Mar gehört zu den schönsten Küstenorten im Südwesten Madeiras. Autofrei im Ortskern, mit kleinen Gassen, gemütlichen Cafés und einer Promenade direkt am Atlantik. Besonders beliebt bei Surfern und Fotografen.

• Highlights: Promenade & Sonnenuntergang
• Ideal für: Spaziergang & Abendessen
• Parkplätze: oberhalb des Ortes
• Google: ⭐ 4,8`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"paul-do-mar-ort",

    name:"📍 Paul do Mar",

    category:"ort",

    lat:32.754318,
    lng:-17.228090,

    description:"Traditionelles Fischerdorf mit Promenade, Restaurants und Surferflair.",

    details:`Paul do Mar ist eines der bekanntesten Fischerdörfer Madeiras. Entlang der Uferpromenade befinden sich Restaurants, Bars und mehrere Meerzugänge. Besonders in den Abendstunden herrscht eine entspannte Atmosphäre mit wunderschönen Sonnenuntergängen.

• Highlights: Promenade & Fischrestaurants
• Ideal für: Abendessen & Sonnenuntergang
• Parkplätze: vorhanden
• Google: ⭐ 4,8`,

    gpsChecked:true,

    status:"finished"
},
{
    id:"curral-das-freiras",

    name:"📍 Curral das Freiras",

    category:"ort",

    lat:32.716733,
    lng:-16.969871,

    description:"Abgeschiedenes Bergdorf im berühmten Nonnental.",

    details:`Curral das Freiras liegt tief eingebettet zwischen den höchsten Bergen Madeiras. Das Dorf ist bekannt für seine spektakuläre Lage und Spezialitäten aus Esskastanien. Die Anfahrt durch die Berge zählt bereits zu den schönsten Straßen der Insel.

• Highlights: Bergpanorama & Kastanienspezialitäten
• Ideal für: Tagesausflug
• Parkplätze: vorhanden
• Google: ⭐ 4,7`,

    gpsChecked:true,

    status:"finished"
}
];

module.exports = madeiraSpots;