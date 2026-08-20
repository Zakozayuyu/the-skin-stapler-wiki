import type { LocalizedArticle, LocalizedArticleId } from './types';

type ContentLocale = 'de' | 'pt-br' | 'es';
type PhaseTwoId = Extract<LocalizedArticleId, 'characters' | 'gameplay' | 'who-is' | 'reddit' | 'achievements' | 'puzzle-solutions'>;

const sourceSets: Record<PhaseTwoId, Array<{ label: string; url: string }>> = {
  gameplay: [
    { label: 'Steam — official full-game page', url: 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/' },
    { label: 'Steam — official demo page', url: 'https://store.steampowered.com/app/4343530/The_Skin_Stapler_Demo/' },
    { label: 'Tainted Pact — official itch.io page', url: 'https://taintedpact88.itch.io/the-skin-stapler' }
  ],
  characters: [
    { label: 'Steam — official full-game page', url: 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/' },
    { label: 'CaseOh — complete released-game playthrough', url: 'https://www.youtube.com/watch?v=EcgnRprUU5k' },
    { label: 'BlairVA — performer playthrough and cast evidence', url: 'https://www.youtube.com/watch?v=RmrnKkYjeqU' }
  ],
  'who-is': [
    { label: 'Steam — official full-game page', url: 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/' },
    { label: 'CaseOh — complete released-game playthrough', url: 'https://www.youtube.com/watch?v=EcgnRprUU5k' },
    { label: 'GabeHype — 100% complete-game run', url: 'https://www.youtube.com/watch?v=1kEFUOGxgjE' }
  ],
  reddit: [
    { label: 'Reddit — r/caseoh_ launch discussion', url: 'https://www.reddit.com/r/caseoh_/comments/1vhro89/the_skin_stapler/' },
    { label: 'Reddit — community review thread', url: 'https://www.reddit.com/r/Zeepond/comments/1vn94tb/the_skin_stapler_review/' },
    { label: 'Bloody Disgusting — published review', url: 'https://bloody-disgusting.com/video-games/3962809/the-skin-stapler-review-psx-horror-throwback-favors-humor-over-gameplay/' },
    { label: 'Steam — current user reviews', url: 'https://store.steampowered.com/app/4310610/The_Skin_Stapler/' }
  ],
  achievements: [
    { label: 'Steam Community — official achievement list', url: 'https://steamcommunity.com/stats/4310610/achievements' },
    { label: 'SteamDB — dated achievement snapshot', url: 'https://steamdb.info/app/4310610/stats/' },
    { label: 'LaTanaDiMrX — 100% achievements run', url: 'https://www.youtube.com/watch?v=sQCd1xziBWc' }
  ],
  'puzzle-solutions': [
    { label: 'GabeHype — 100% complete-game run', url: 'https://www.youtube.com/watch?v=1kEFUOGxgjE' },
    { label: 'CaseOh — complete released-game playthrough', url: 'https://www.youtube.com/watch?v=EcgnRprUU5k' },
    { label: 'Steam Community — official achievement list', url: 'https://steamcommunity.com/stats/4310610/achievements' }
  ]
};

export const phaseTwoArticles: Record<ContentLocale, Record<PhaseTwoId, LocalizedArticle>> = {
  de: {
    gameplay: {
      id: 'gameplay', keyword: 'The Skin Stapler Gameplay',
      title: 'The Skin Stapler Gameplay: So spielt es sich',
      description: 'Das Gameplay von The Skin Stapler verbindet Ermittlungen, Dialoge, leichte Rätsel, wechselnde Figuren und kurze QTEs in einer linearen Horrorgeschichte.',
      eyebrow: 'Spielablauf und Spielzeit',
      directAnswer: 'The Skin Stapler ist ein lineares First-Person-Horrorspiel für eine Person. Du untersuchst Tatorte, sprichst mit Figuren, erledigst kurze Schichtaufgaben und löst leichte Rätsel. Klassische Kämpfe sind selten; ein direkter Durchlauf dauert meist ungefähr drei Stunden.',
      sections: [
        { title: 'Der grundlegende Spielablauf', paragraphs: ['Als Dick Slater untersuchst du Tatorte, sammelst Beweise und folgst Kassetten und Dialogen. Andere Kapitel wechseln zu Zivilpersonen in Wohnungen und Arbeitsstätten. Die Schauplätze sind kompakt und die Handlung führt meist linear von einer Interaktion zur nächsten.'], bullets: ['Aktuelles Ziel lesen und Gespräche beenden', 'Aktiven Raum nach Beweisen und Interaktionen absuchen', 'Kurze Arbeitsaufgaben oder QTEs abschließen', 'Neue Kassetten und Wege prüfen'] },
        { title: 'Kampf, Verfolgung und Tod', paragraphs: ['Die Entwicklerbeschreibung betont Spannung statt traditioneller Überlebensmechanik. Es gibt bedrohliche Szenen und eine späte Schusswaffen-Sequenz, aber kein belegtes umfangreiches System für Waffen, Munition oder Verbesserungen.', 'Mehrere Todesfälle sind Teil der Geschichte. Sie beweisen nicht, dass eine frei spielbare Kampfsequenz verloren wurde.'] },
        { title: 'Kapitel und spielbare Perspektiven', paragraphs: ['Die Handlung wechselt zwischen der Polizeiarbeit von Dick Slater und den letzten Schichten mehrerer Zivilpersonen. Bestätigte Schauplätze sind unter anderem Burrows Apartment, Carrion City PD, Quick Fix, Gutters End, Lunas Donutladen, Underworld VHS, Lazar’s Blood Bank und das Flesh Pit.', 'Die Wechsel sind Teil einer zusammenhängenden Einzelspieler-Handlung. Es handelt sich nicht um auswählbare Mehrspielerrollen.'] },
        { title: 'Wie lange dauert The Skin Stapler?', paragraphs: ['Aufgezeichnete und veröffentlichte Beispiele liegen ungefähr zwischen 2,5 und 4 Stunden. Erkundung, Kommentare, Wiederholungen und Erfolge können die Dauer auf etwa fünf Stunden erhöhen. Die kostenlose Demo hat eine offizielle Schätzung von 30–45 Minuten.'] },
        { title: 'Was tun, wenn du festhängst?', paragraphs: ['Lies zuerst das aktuelle Bildschirmziel und lass laufende Gespräche vollständig enden. Suche anschließend im aktiven Raum Tische, Schränke, Theken, Türen und deutlich interaktive Objekte ab. Viele Wege öffnen erst, nachdem eine Schichtaufgabe, ein Beweisstück oder eine Kassette bearbeitet wurde.', 'Du musst keine Stufen grinden, Munition horten oder eine offene Welt absuchen. Der Fortschritt folgt einem kurzen, vorgegebenen Ablauf.'] },
        { title: 'Demo, Speicherstand und Sprache', paragraphs: ['Die kostenlose Demo ist eine eigene Steam-App mit drei bestätigten Abschnitten: Polizeiarbeit, Hexys Quick-Fix-Schicht und Blairs Schicht in Gutters End. Ein Demo-Spielstand wird nicht als bestätigter Übertrag in die Vollversion behandelt.', 'Steam nennt Englisch für Oberfläche, vollständige Sprachausgabe und Untertitel. Dieser deutsche Guide bedeutet nicht, dass das Spiel selbst eine deutsche Lokalisierung besitzt.'] },
        { title: 'Was nicht bestätigt ist', paragraphs: ['Offizielle Quellen dokumentieren keine vollständige Tastenbelegung, genauen Checkpoint-Regeln oder Schwierigkeitsstufen. Steam nennt nur Englisch für Oberfläche, Audio und Untertitel. Die deutsche Seite ist ein Guide und keine deutsche Spielübersetzung.'] }
      ],
      faq: [
        { question: 'Ist The Skin Stapler ein Mehrspieler-Spiel?', answer: 'Nein. Die geprüfte Steam-Seite beschreibt ein Einzelspieler-Spiel ohne Koop- oder Mehrspielerfunktion.' },
        { question: 'Ist The Skin Stapler ein Shooter?', answer: 'Kampf ist nicht der Hauptablauf. Die meiste Zeit verbringst du mit Erkundung, Dialogen, Beweisen und kurzen Aufgaben.' },
        { question: 'Wie lange dauert die Demo?', answer: 'Steam nennt für die separate kostenlose Demo etwa 30–45 Minuten.' }
      ],
      sources: sourceSets.gameplay
    },
    characters: {
      id: 'characters', keyword: 'The Skin Stapler Charaktere',
      title: 'The Skin Stapler Charaktere: Figuren und Rollen',
      description: 'Alle belegten Figuren aus The Skin Stapler mit Rolle, Schauplatz, Spielbarkeit und klar markierten unbekannten Schicksalen.',
      eyebrow: 'Figuren aus Carrion City',
      directAnswer: 'Zu den wichtigsten Figuren gehören Detective Dick Slater, sein Partner Robbie Knox, Fefe, Hexy, Blair, Luna, Nurse Layna, Scaroline und Elias Crow. Mehrere Zivilpersonen sind spielbar; Elias Crow wird im späten Spiel als Skin Stapler identifiziert.',
      sections: [
        { title: 'Spielbare Figuren', paragraphs: ['Dick Slater führt die Ermittlungen. Robbie Knox ist zeitweise spielbar und begleitet ihn. Die Handlung wechselt außerdem zu Fefe in den Burrows Apartments, Hexy bei Quick Fix, Blair in Gutters End, Luna in ihrem Laden, Scaroline in Underworld VHS und Nurse Layna in Lazar’s Blood Bank.'], bullets: ['Dick Slater — leitender Ermittler', 'Robbie Knox — junger CCPD-Partner', 'Fefe — spielbare Eröffnungsfigur', 'Hexy — Angestellte bei Quick Fix', 'Blair — Angestellte in Gutters End', 'Luna — Ladenbesitzerin', 'Scaroline — Besitzerin von Underworld VHS', 'Nurse Layna — Figur im Blutbank-Kapitel'] },
        { title: 'Antagonist und Nebenfiguren', paragraphs: ['Elias Crow ist Besitzer des Flesh Pit und die wahre Identität des Skin Stapler. Silus ist sein Zwillingsbruder und Teil des Rachemotivs. Scaroline betreibt Underworld VHS; DJ Woolz ist über Radiosendungen mit Carrion City verbunden.', 'Chief O’Brien, Roxy, Elmer, Lucas und Mr. Shrimp erscheinen als weitere Figuren. Nicht für jede Rolle sind Spielbarkeit, Sprecher oder endgültiges Schicksal belegt.'] },
        { title: 'Welche Schicksale sind sicher?', paragraphs: ['Robbies Opfer im Finale sowie die Todesfälle von Fefe, Blair und Luna sind durch veröffentlichte Spielabläufe gestützt. Hexy übersteht ihre Quick-Fix-Begegnung. Bei Scaroline, Nurse Layna und mehreren Nebenfiguren bleiben Details offen.', 'Elias wird im Finale angeschossen. Ob er eindeutig stirbt oder festgenommen wird, ist im geprüften Material nicht zuverlässig geklärt.'] },
        { title: 'Figuren nach Schauplatz', paragraphs: ['Fefe eröffnet die Vollversion in den Burrows Apartments. Hexy arbeitet im Quick Fix und serviert Hotdogs, Blair übernimmt die Nachtschicht in Gutters End, Luna führt einen Donut- und Kaffeeladen, Scaroline leitet Underworld VHS und Nurse Layna erscheint in Lazar’s Blood Bank.', 'Chief O’Brien, Roxy und Elmer gehören zum CCPD-Umfeld. Lucas und Mr. Shrimp sind mit Gutters End verbunden; DJ Woolz berichtet über das Radio.'] },
        { title: 'Bestätigte Sprecherzuordnungen', paragraphs: ['Der offizielle Besetzungsstand ordnet unter anderem Blair @blairvira, Luna Luna Arcana, Fefe @CovfefeChan, Scaroline @Scarolinetv_, Nurse Layna Layna Lazar und DJ Woolz @KingWoolz zu. HexyIRL wird sowohl Hexy als auch dem Titelkiller zugeordnet; diese Doppelrolle wird zusätzlich in Blairs aufgezeichnetem Spielablauf genannt.', 'Rollenhandles und Figurennamen bleiben getrennt. „Luna“ und „Nurse Layna“ sind zum Beispiel nicht dieselbe Figur oder Sprecherin.'] },
        { title: 'Namen und Sprecher vorsichtig lesen', paragraphs: ['Die Schreibweise von Silus’ Nachnamen variiert zwischen Kaine, Kane und Kain. Figurenname, Sprecherhandle und reale Person sind nicht automatisch dasselbe. Die Besetzungsseite trennt bestätigte Zuordnungen von offenen Rollen.'] }
      ],
      faq: [
        { question: 'Wer ist die Hauptfigur?', answer: 'Dick Slater ist der zentrale Ermittler, während mehrere Kapitel zu anderen spielbaren Perspektiven wechseln.' },
        { question: 'Wer ist der Skin Stapler?', answer: 'Die Vollversion enthüllt Elias Crow, Besitzer des Flesh Pit, als Skin Stapler.' },
        { question: 'Sind alle Schicksale bestätigt?', answer: 'Nein. Bei mehreren Nebenfiguren und bei Elias’ endgültigem Zustand bleiben die geprüften Quellen uneindeutig.' }
      ],
      sources: sourceSets.characters
    },
    'who-is': {
      id: 'who-is', keyword: 'Wer ist der Skin Stapler?',
      title: 'Wer ist der Skin Stapler? Identität und Motiv',
      description: 'Der Skin Stapler ist Elias Crow. Hier stehen sein Flesh-Pit-Hintergrund, Silus, Dick Slaters Rolle und die Beweise der Enthüllung.',
      eyebrow: 'Massive Handlungsspoiler',
      directAnswer: 'Der Skin Stapler ist Elias Crow, Besitzer des Restaurants Flesh Pit. Er verfolgt Dick Slater aus Rache, weil Slater 1979 Elias’ Zwillingsbruder Silus erschoss. Zwei vollständige Spielabläufe stützen dieselbe Identität und dasselbe Motiv.',
      sections: [
        { title: 'Wie die Identität enthüllt wird', paragraphs: ['Die Ermittlung verbindet alte Akten, verzerrte Kassetten, Scarolines Fund und den Namen Elias Crow mit dem Flesh Pit. Späte Dialoge erklären, dass Elias und Silus bei der Geburt getrennt und von verschiedenen Familien großgezogen wurden.'] },
        { title: 'Warum Elias tötet', paragraphs: ['Dick Slater erschoss Silus während des Falls um den Full Mooner Gooner. Elias betrachtet Slater als Verantwortlichen für den Verlust seines Bruders und baut seine Mordserie als persönliche Rache auf.'] },
        { title: 'Welche Beweise führen zum Flesh Pit?', paragraphs: ['Alte Akten nennen Silus, verzerrte Kassetten begleiten mehrere Tatorte und ein später Behälter enthält die Aufforderung, den Täter zu finden. Robbies und Dicks Dialog verbindet schließlich Elias Crow mit dem Flesh Pit und stellt den Zusammenhang mit Silus her.', 'Die Identität entsteht damit aus mehreren Hinweisen und nicht aus einem einzelnen Fanpost oder einer Demo-Theorie. Zwei vollständige veröffentlichte Durchläufe zeigen denselben Ablauf.'] },
        { title: 'Was bedeutet der Name Skin Stapler?', paragraphs: ['„The Skin Stapler“ ist die Bezeichnung von Polizei und Medien für den Serienmörder. Die offiziellen Store-Texte beschreiben seine Methode: Er häutet Opfer und befestigt die Haut mit Klammern an Wänden in der Nähe. Elias Crow ist der reale Name hinter dieser Bezeichnung.'] },
        { title: 'Was im Flesh Pit passiert', paragraphs: ['Die Spur führt zum Restaurant des Täters. Robbie und Dick geraten dort in die letzte Konfrontation; Robbie opfert sich und Dick schießt auf Elias.', 'Das geprüfte Bildmaterial klärt nicht eindeutig, ob Elias stirbt oder anschließend festgenommen wird. Diese Seite wählt deshalb keine der beiden Deutungen als sichere Tatsache.'] },
        { title: 'Offene Namensfragen', paragraphs: ['Silus’ Nachname erscheint als Kaine, Kane und Kain. Auch eine einzelne Community-Quelle nennt einen anderen Namen für den Täter, wird aber von keiner zweiten Quelle gestützt. Elias Crow bleibt die mehrfach bestätigte Identität.'] }
      ],
      faq: [
        { question: 'Wie lautet der echte Name des Skin Stapler?', answer: 'Sein Name ist Elias Crow.' },
        { question: 'Wem gehört das Flesh Pit?', answer: 'Elias Crow wird im Spiel als Besitzer des Flesh Pit identifiziert.' },
        { question: 'Stirbt Elias am Ende?', answer: 'Dick schießt auf Elias, aber sein endgültiger Zustand ist im geprüften Material nicht eindeutig bestätigt.' }
      ],
      sources: sourceSets['who-is']
    },
    reddit: {
      id: 'reddit', keyword: 'The Skin Stapler Reddit',
      title: 'The Skin Stapler auf Reddit: Spielermeinungen',
      description: 'Eine ausgewogene Zusammenfassung der Reddit-, Steam- und itch.io-Reaktionen zu Humor, Horror, Spielzeit, Steuerung und Handlung.',
      eyebrow: 'Community-Reaktionen',
      directAnswer: 'Die Diskussionen loben häufig PSX-Optik, Sprecher und schwarzen Humor, kritisieren aber auch wiederholte grobe Witze, einfache Aufgaben und eine kurze oder gleichförmige Struktur. Das Bild ist überwiegend positiv, aber deutlich vom persönlichen Humor abhängig.',
      sections: [
        { title: 'Was Spieler mochten', paragraphs: ['Positive Beiträge nennen den Grindhouse-Stil, die auffällige Besetzung, das kurze Format und den Wechsel zwischen groteskem Horror und absurden Alltagsszenen. Besonders die Hot-Dog-Szene und Reaktionen bekannter Creator wurden oft geteilt.'] },
        { title: 'Was Spieler kritisierten', paragraphs: ['Kritik richtet sich gegen wiederholte sexuelle oder grobe Witze, einfache QTEs, gelegentlich unhandliche Bewegung und das Gefühl, manche Momente seien vor allem für Clips gebaut. Einzelne Steam-Deck-Berichte nennen unpräzise Minispiele; das ist eine Community-Erfahrung, keine offizielle Kompatibilitätsaussage.'] },
        { title: 'Humor oder ernsthafter Horror?', paragraphs: ['Genau hier gehen die Meinungen am stärksten auseinander. Befürworter mögen die Mischung aus PSX-Schmutzoptik, B-Movie-Dialogen und grotesken Todesfällen; Kritiker empfinden die sexuellen Wortspiele und Wiederholungen als kindisch. Beides sind Reaktionen auf dieselbe bewusst überzeichnete Grindhouse-Ausrichtung.', 'Die Gewalt bleibt trotz der Komik deutlich. Steam warnt vor starkem Blut, Gore, erschreckenden Szenen und Inhalten für Erwachsene.'] },
        { title: 'Spielzeit und Wertung richtig einordnen', paragraphs: ['Berichte reichen ungefähr von 2,5 bis 5 Stunden. Die Unterschiede entstehen durch Erkundung, Kommentare und Wiederholungen. Steam-Bewertung, Anzahl der Rezensionen und Stimmen ändern sich laufend und werden daher nur mit Datum zitiert.'] },
        { title: 'Wie die Stichprobe entstand', paragraphs: ['Die Sammlung konzentriert sich auf die ersten zwei Wochen nach der Veröffentlichung und enthält Reddit-Threads, Steam-Rezensionen, itch.io-Kommentare, Medienkritiken und aufgezeichnete Reaktionen. Mehrere Reddit-Beiträge waren Crossposts derselben Creator und wurden nicht als unabhängige Zustimmung gezählt.', 'Die größte sichtbare Reddit-Welle entstand nach einem CaseOh-Durchlauf. Deshalb ist die Stichprobe stärker streamerbezogen als eine repräsentative Käuferumfrage.'] },
        { title: 'Was Reddit nicht bestätigen kann', paragraphs: ['Reddit-Kommentare belegen keine Plattform, Sprecherzuordnung, Veröffentlichung oder künftige Aktualisierung. Dafür haben Steam, Entwicklerangaben und sichtbares Gameplay Vorrang. Gelöschte Beiträge und Suchausschnitte werden nicht als sichere Fakten behandelt.'] }
      ],
      faq: [
        { question: 'Gibt es einen offiziellen Subreddit?', answer: 'Das geprüfte Material zeigt Diskussionen in mehreren Communities, aber keinen belegten offiziellen Haupt-Subreddit.' },
        { question: 'Sind die Reaktionen positiv?', answer: 'Viele Reaktionen sind positiv, doch Humor, Wiederholung und Länge werden kontrovers bewertet.' },
        { question: 'Wie aktuell sind die Meinungen?', answer: 'Die Sammlung stammt vor allem aus den ersten zwei Wochen nach der Veröffentlichung im August 2026.' }
      ],
      sources: sourceSets.reddit
    },
    achievements: {
      id: 'achievements', keyword: 'The Skin Stapler Erfolge',
      title: 'The Skin Stapler Erfolge: Alle 16 Freischaltungen',
      description: 'Alle 16 Steam-Erfolge mit Bedingungen, dem verpassbaren Thank-You-Zettel, Kassetten-Reparatur und Kapitelbezug.',
      eyebrow: 'Steam-Daten vom 20. August 2026',
      directAnswer: 'The Skin Stapler hat in den geprüften Steam-Daten 16 Erfolge. Die meisten werden durch Kapitel und Finale freigeschaltet. Skin Successfully Stapled! ist am leichtesten zu verpassen: Interagiere in Dick Slaters Büro mit dem “Thank You”-Zettel.',
      sections: [
        { title: 'Alle 16 Erfolge und ihre Bedingungen', paragraphs: ['Die offiziellen Steam-Daten vom 20. August 2026 enthalten die folgenden 16 Namen und Freischaltbedingungen. Die Prozentwerte ändern sich laufend, die Bedingungen sind deshalb wichtiger als die Momentaufnahme der globalen Rate.'], bullets: ['FeFe - Master Baiter — The Burrows Apartment abschließen', 'Dick Slater - Big D — The Carrion City PD abschließen', 'One... Two... He’s Coming For You. — Aftermath Part 1 abschließen', 'Hexy - Wiener Whisperer — The Quick Fix abschließen', 'Blair - Shrimply Irresistible — The Gutters End abschließen', 'Three, Four, Better Lock Your Door... — Aftermath Part 2 abschließen', 'LunaArcana - Glazed and Confused — Luna’s Cream Filled Donuts abschließen', 'Five, six, grab your crucifix... — Aftermath Part 3 abschließen', 'Scaroline - The Tape Collector — The Underworld VHS abschließen', 'Seven, Eight, Gonna Stay Up Late... — Aftermath Part 4 abschließen', 'Layna Lazar - The Blood Queen — Lazar’s Blood Bank abschließen', 'Nine, Ten, Never Jank Again. — Final Aftermath abschließen', 'Runebee - Jank Ya Later! — die Skin-Stapler-Kassetten reparieren', 'KingWoolz - The Last Nut Standing — Closing In abschließen', 'Robbie Knox - Mind Officially Blown — die letzte Zwischensequenz erreichen', 'Skin Successfully Stapled! — den “Thank You”-Zettel in Dick Slaters Büro untersuchen'] },
        { title: 'Der leicht verpassbare Erfolg', paragraphs: ['Skin Successfully Stapled! verlangt die Interaktion mit dem “Thank You”-Zettel in Dick Slaters Büro. Seine globale Steam-Rate lag im Snapshot bei ungefähr 26,7 Prozent. Diese Zahl ist veränderlich und kein dauerhafter Wert.'] },
        { title: 'Sichere Reihenfolge für einen normalen Durchlauf', paragraphs: ['Die ersten zwölf Erfolge folgen den benannten Kapiteln und vier Aftermath-Abschnitten. Danach kommen die Kassetten-Reparatur, Closing In und die letzte Zwischensequenz. Für diese Fortschrittserfolge ist im geprüften Material weder ein Schwierigkeitsgrad noch ein alternativer Handlungsweg verlangt.', 'Prüfe den Thank-You-Zettel während des Büroabschnitts, statt ihn bis nach dem Finale aufzuschieben. Das ist die einzige klar belegte optionale Interaktion in der Liste.'] },
        { title: 'Kassetten-Erfolg', paragraphs: ['Runebee - Jank Ya Later! verlangt laut Steam das Reparieren der Skin-Stapler-Kassetten. Das Material belegt keinen Universalcode und keine vollständige offizielle Fehlerbehebung. Prüfe die im Ermittlungsweg verfügbaren beschädigten Kassetten.'] },
        { title: 'Wenn ein Erfolg nicht erscheint', paragraphs: ['Beende zunächst die zugehörige Szene und überprüfe den aktuellen Steam-Status. Bei Runebee - Jank Ya Later! müssen die im Ermittlungsweg freigelegten beschädigten Kassetten bearbeitet werden; eine genaue offizielle Reparatur- oder Speicherdatei-Anleitung ist nicht veröffentlicht.', 'Lösche keine Spielstände und bearbeite keine Dateien auf Grundlage ungeprüfter Tipps. Die vorhandenen Quellen dokumentieren keine offizielle technische Fehlerbehebung.'] },
        { title: 'Was die Liste nicht enthält', paragraphs: ['Die geprüften Daten zeigen keinen Schwierigkeits-, Speedrun-, Mehrspieler- oder alternatives-Ende-Erfolg. Technische Freischaltprobleme werden von den Quellen nicht erklärt; sichere keine erfundenen Datei- oder Speicherstandlösungen.'] }
      ],
      faq: [
        { question: 'Wie viele Erfolge gibt es?', answer: 'Die Steam-Daten vom 20. August 2026 enthalten 16 Erfolge.' },
        { question: 'Welcher Erfolg ist verpassbar?', answer: 'Skin Successfully Stapled! erfordert den Thank-You-Zettel in Dick Slaters Büro.' },
        { question: 'Gibt es Schwierigkeits-Erfolge?', answer: 'In der geprüften Liste ist kein Schwierigkeits-Erfolg vorhanden.' }
      ],
      sources: sourceSets.achievements
    },
    'puzzle-solutions': {
      id: 'puzzle-solutions', keyword: 'The Skin Stapler Rätsellösungen',
      title: 'The Skin Stapler Rätsellösungen und Codes',
      description: 'Der belegte Code 1979, das Flesh-Pit-Fleischwaagenrätsel, beschädigte Kassetten und die offen markierte Tarot-Reihenfolge.',
      eyebrow: 'Nur belegte Lösungen',
      directAnswer: 'Der bestätigte Zahlencode lautet 1979. Im Flesh Pit sammelst du vier passende Beweisstücke für die Fleischwaage. Beschädigte Kassetten müssen im Ermittlungsweg bearbeitet werden. Die genaue Tarotkarten-Reihenfolge ist im Material nicht eindeutig bestätigt.',
      sections: [
        { title: 'Bilderrahmen-Code: 1979', paragraphs: ['Sammle in Robbies Ermittlungsabschnitt alle vier Beweisstücke. Der alte Rahmen zeigt 5719, während ein Brief auf 1979 verweist. Gib 1979 ein, um den Behälter mit der letzten Kassette zu öffnen.'] },
        { title: 'Wenn der Code noch nicht angenommen wird', paragraphs: ['Der Zahlencode ist Teil einer Beweiskette. Ein Beweisstück liegt im aufgezeichneten Ablauf hinter einem Plüschobjekt, ein weiteres im Bereich eines Ordners oder Schreibtischs. Erst wenn alle vier Teile registriert sind, ist die Interaktion vollständig vorbereitet.', '5719 ist die sichtbare Ausgangszahl; der Brief liefert den entscheidenden Bezug zu 1979. Ein anderer Zufallscode ist in den geprüften Durchläufen nicht belegt.'] },
        { title: 'Flesh-Pit-Fleischwaage', paragraphs: ['Die Wandnotiz “sins paid in pounds of flesh” weist auf die Waage. Suche die zugänglichen Räume, den Gefrier- oder Schrankbereich und die Theke nach vier passenden Beweisstücken ab und lege sie auf die Waage. Danach folgt eine weitere Tür- oder Schalterinteraktion mit Robbie.'] },
        { title: 'Warum keine erfundene Gegenstandsliste steht', paragraphs: ['Die Aufzeichnung bestätigt vier passende Fleisch-Beweise, zeigt aber nicht alle endgültigen Inventarnamen sauber. Ein sichtbares Messer lässt sich beispielsweise nicht sofort aufnehmen. Dieser Guide nennt deshalb Suchbereiche und Objektivlogik, statt falsche feste Namen oder eine nicht belegte Reihenfolge zu veröffentlichen.'] },
        { title: 'Tarot-Beweiskasten', paragraphs: ['Justice, Death, Judgment und Devil gehören zum Mechanismus. Das Video zeigt mehrere Versuche, aber nicht sauber die angenommene Endreihenfolge. Ohne zweiten Beleg wird hier keine feste Reihenfolge erfunden.'] },
        { title: 'Schnelle Prüfliste', paragraphs: ['Bilderrahmen: vier Beweise sammeln und 1979 eingeben. Flesh Pit: vier geeignete Beweise auf die Waage legen und anschließend Robbies Tür- oder Schalterziel fortsetzen. Kassetten: beschädigte Exemplare im Ermittlungsweg bearbeiten. Tarot: Rückmeldung der aktuellen Spielversion nutzen, bis eine sauber belegte Reihenfolge vorliegt.'] },
        { title: 'Kassetten und “Blood Puzzle”', paragraphs: ['Für beschädigte Kassetten gibt es keinen belegten Mastercode. “Blood Puzzle” ist kein bestätigter offizieller Rätselname; gemeint sein kann die Blutglas-Aufgabe in Lazar’s Blood Bank oder die Fleischwaage im Finale.'] }
      ],
      faq: [
        { question: 'Wie lautet der Zahlencode?', answer: 'Der bestätigte Bilderrahmen-Code lautet 1979.' },
        { question: 'Wie ist die Tarot-Reihenfolge?', answer: 'Die genaue angenommene Reihenfolge ist in den geprüften Quellen nicht zuverlässig bestätigt.' },
        { question: 'Gibt es einen Universalcode für Kassetten?', answer: 'Im geprüften Material ist kein verlässlicher Universalcode belegt.' }
      ],
      sources: sourceSets['puzzle-solutions']
    }
  },
  'pt-br': {
    gameplay: {
      id: 'gameplay', keyword: 'gameplay de The Skin Stapler',
      title: 'Gameplay de The Skin Stapler: Como o jogo funciona',
      description: 'O gameplay de The Skin Stapler mistura investigação, diálogos, puzzles leves, personagens alternados e QTEs curtos em uma história linear.',
      eyebrow: 'Mecânicas e duração',
      directAnswer: 'The Skin Stapler é um horror linear em primeira pessoa para um jogador. Você investiga cenas, conversa com personagens, cumpre tarefas de turno e resolve puzzles leves. O combate é raro, e uma partida direta costuma durar por volta de três horas.',
      sections: [
        { title: 'Loop principal', paragraphs: ['Com Dick Slater, você procura provas e acompanha fitas e diálogos. Outros capítulos passam para civis em apartamentos e locais de trabalho. Os mapas são compactos e a progressão normalmente depende da interação atual.'], bullets: ['Leia o objetivo e termine os diálogos', 'Procure provas na sala ativa', 'Conclua tarefas e QTEs curtos', 'Confira novas fitas e passagens'] },
        { title: 'Combate e perigo', paragraphs: ['A descrição da desenvolvedora prioriza tensão em vez de combate tradicional. Há ameaças roteirizadas e uma sequência final com arma, mas nenhuma fonte aprovada comprova um sistema amplo de munição, equipamentos ou melhorias.', 'Algumas mortes fazem parte do roteiro e não significam que o jogador perdeu uma luta convencional.'] },
        { title: 'Capítulos e perspectivas jogáveis', paragraphs: ['A história alterna a investigação de Dick Slater com os últimos turnos de vários civis. Os locais confirmados incluem Burrows Apartment, Carrion City PD, Quick Fix, Gutters End, a loja de donuts de Luna, Underworld VHS, Lazar’s Blood Bank e Flesh Pit.', 'Essas mudanças pertencem à mesma campanha para um jogador. Não são personagens selecionáveis em um modo multiplayer.'] },
        { title: 'Quanto tempo leva para zerar?', paragraphs: ['Exemplos publicados e gravados ficam entre aproximadamente 2,5 e 4 horas. Exploração, comentários, tentativas e conquistas podem aproximar uma partida de cinco horas. A demo tem estimativa oficial de 30–45 minutos.'] },
        { title: 'O que fazer quando o caminho trava', paragraphs: ['Leia o objetivo na tela e deixe os diálogos próximos terminarem. Depois, confira mesas, armários, balcões, portas e objetos claramente interativos na sala atual. Muitas passagens só abrem quando uma tarefa de turno, uma prova ou uma fita foi processada.', 'Não é necessário ganhar níveis, guardar munição ou vasculhar um mundo aberto. O avanço segue uma rota curta e dirigida.'] },
        { title: 'Demo, save e idioma', paragraphs: ['A demo gratuita é um aplicativo separado na Steam e apresenta três ritmos confirmados: investigação policial, o turno de Hexy no Quick Fix e o turno de Blair no Gutters End. A transferência de save da demo para o jogo completo não está confirmada.', 'A Steam lista inglês para interface, áudio completo e legendas. A existência deste guia em português não significa que o jogo possua localização em português.'] },
        { title: 'O que continua sem confirmação', paragraphs: ['As fontes oficiais não detalham teclas, checkpoints, salvamento manual ou dificuldades. A Steam lista somente inglês para interface, áudio e legendas; este guia em português não indica localização do jogo.'] }
      ],
      faq: [
        { question: 'The Skin Stapler tem multiplayer?', answer: 'Não. A página verificada da Steam apresenta um jogo para um jogador.' },
        { question: 'É um jogo de tiro?', answer: 'O combate não é a mecânica principal; investigação, diálogos e tarefas ocupam a maior parte do tempo.' },
        { question: 'Quanto dura a demo?', answer: 'A Steam estima 30–45 minutos para a demo gratuita separada.' }
      ],
      sources: sourceSets.gameplay
    },
    characters: {
      id: 'characters', keyword: 'personagens de The Skin Stapler',
      title: 'Personagens de The Skin Stapler: Lista e papéis',
      description: 'Personagens confirmados de The Skin Stapler com papel, local, estado jogável e destinos desconhecidos claramente marcados.',
      eyebrow: 'Elenco de Carrion City',
      directAnswer: 'Os personagens principais incluem Dick Slater, Robbie Knox, Fefe, Hexy, Blair, Luna, Nurse Layna, Scaroline e Elias Crow. Vários civis são jogáveis; no fim da história, Elias Crow é identificado como o Skin Stapler.',
      sections: [
        { title: 'Personagens jogáveis', paragraphs: ['Dick Slater conduz a investigação e Robbie Knox trabalha ao seu lado. A história também passa por Fefe nos Burrows Apartments, Hexy no Quick Fix, Blair no Gutters End, Luna em sua loja, Scaroline na Underworld VHS e Nurse Layna no Lazar’s Blood Bank.'], bullets: ['Dick Slater — detetive principal', 'Robbie Knox — parceiro novato', 'Fefe — personagem da abertura', 'Hexy — funcionária do Quick Fix', 'Blair — funcionária do Gutters End', 'Luna — dona da loja', 'Scaroline — dona da Underworld VHS', 'Nurse Layna — personagem do banco de sangue'] },
        { title: 'Antagonista e elenco de apoio', paragraphs: ['Elias Crow é o dono do Flesh Pit e a identidade real do Skin Stapler. Silus é seu irmão gêmeo e está ligado à vingança. Scaroline administra a Underworld VHS, enquanto DJ Woolz aparece pelas transmissões de rádio.', 'Chief O’Brien, Roxy, Elmer, Lucas e Mr. Shrimp completam o elenco conhecido. Nem todos têm jogabilidade, voz ou destino confirmados.'] },
        { title: 'Quais destinos foram confirmados?', paragraphs: ['O sacrifício de Robbie e as mortes de Fefe, Blair e Luna aparecem em gameplays completos. Hexy sobrevive ao encontro no Quick Fix. Scaroline, Nurse Layna e vários coadjuvantes continuam com detalhes pendentes.', 'Dick atira em Elias no final, mas as fontes não deixam claro se ele morre ou é preso.'] },
        { title: 'Personagens por local', paragraphs: ['Fefe abre o jogo completo nos Burrows Apartments. Hexy trabalha no Quick Fix e prepara cachorros-quentes; Blair cobre o turno da madrugada no Gutters End; Luna administra uma loja de donuts e café; Scaroline dirige a Underworld VHS; Nurse Layna aparece no Lazar’s Blood Bank.', 'Chief O’Brien, Roxy e Elmer pertencem ao núcleo da CCPD. Lucas e Mr. Shrimp estão ligados ao Gutters End, enquanto DJ Woolz aparece nas transmissões de rádio.'] },
        { title: 'Vozes confirmadas', paragraphs: ['O material de elenco associa Blair a @blairvira, Luna a Luna Arcana, Fefe a @CovfefeChan, Scaroline a @Scarolinetv_, Nurse Layna a Layna Lazar e DJ Woolz a @KingWoolz. HexyIRL aparece ligado a Hexy e ao assassino do título; a dupla função também é mencionada no vídeo da própria Blair.', 'Nome de personagem, usuário do intérprete e identidade real não são equivalentes. Luna e Nurse Layna, por exemplo, são personagens e intérpretes diferentes.'] },
        { title: 'Nomes e atores', paragraphs: ['O sobrenome de Silus aparece como Kaine, Kane e Kain. Nome do personagem, perfil do ator e pessoa real não devem ser misturados. O guia de vozes separa relações confirmadas das pendentes.'] }
      ],
      faq: [
        { question: 'Quem é o protagonista?', answer: 'Dick Slater é o investigador principal, com capítulos adicionais em outras perspectivas jogáveis.' },
        { question: 'Quem é o Skin Stapler?', answer: 'A versão completa revela Elias Crow, dono do Flesh Pit.' },
        { question: 'Todos os destinos são conhecidos?', answer: 'Não. Algumas figuras de apoio e o estado final de Elias continuam ambíguos.' }
      ],
      sources: sourceSets.characters
    },
    'who-is': {
      id: 'who-is', keyword: 'quem é o Skin Stapler',
      title: 'Quem é o Skin Stapler? Identidade e motivação',
      description: 'O Skin Stapler é Elias Crow. Entenda sua ligação com o Flesh Pit, Silus, Dick Slater e as provas da revelação.',
      eyebrow: 'Grandes spoilers',
      directAnswer: 'O Skin Stapler é Elias Crow, dono do restaurante Flesh Pit. Ele busca vingança contra Dick Slater porque o detetive matou seu irmão gêmeo, Silus, em 1979. Dois gameplays completos sustentam a mesma identidade e motivação.',
      sections: [
        { title: 'Como a identidade é revelada', paragraphs: ['Arquivos antigos, fitas distorcidas, a descoberta de Scaroline e o nome de Elias Crow levam ao Flesh Pit. Diálogos tardios explicam que Elias e Silus foram separados no nascimento e criados por famílias diferentes.'] },
        { title: 'Por que Elias mata', paragraphs: ['Dick Slater matou Silus durante o caso Full Mooner Gooner. Elias responsabiliza Slater pela perda do irmão e transforma a série de assassinatos em vingança pessoal.'] },
        { title: 'Quais provas levam ao Flesh Pit?', paragraphs: ['Arquivos antigos citam Silus, fitas distorcidas aparecem em diversas cenas e um recipiente tardio guarda a mensagem para que o detetive encontre o assassino. O diálogo de Robbie e Dick liga Elias Crow ao Flesh Pit e relaciona Elias a Silus.', 'A identidade é construída por várias pistas, não por uma teoria da época da demo. Duas partidas completas independentes apresentam a mesma revelação.'] },
        { title: 'O que significa “The Skin Stapler”?', paragraphs: ['The Skin Stapler é o nome usado pela polícia e pela mídia para o serial killer. As páginas oficiais descrevem o método: ele remove a pele das vítimas e a grampeia em paredes próximas. Elias Crow é o nome real por trás do apelido.'] },
        { title: 'O confronto no Flesh Pit', paragraphs: ['Robbie e Dick chegam ao restaurante de Elias. Robbie se sacrifica e Dick atira em Elias.', 'As imagens verificadas não definem claramente se Elias morre ou é preso. Esta página não escolhe uma interpretação sem prova.'] },
        { title: 'Conflitos de nomes', paragraphs: ['O sobrenome de Silus varia entre Kaine, Kane e Kain. Uma única fonte comunitária usa outro nome para o assassino, mas não tem confirmação independente. Elias Crow é a identidade repetidamente comprovada.'] }
      ],
      faq: [
        { question: 'Qual é o nome real do Skin Stapler?', answer: 'O nome dele é Elias Crow.' },
        { question: 'Quem é o dono do Flesh Pit?', answer: 'O jogo identifica Elias Crow como proprietário do Flesh Pit.' },
        { question: 'Elias morre no final?', answer: 'Dick atira nele, mas o estado final de Elias não fica inequivocamente confirmado nas fontes.' }
      ],
      sources: sourceSets['who-is']
    },
    reddit: {
      id: 'reddit', keyword: 'The Skin Stapler Reddit',
      title: 'The Skin Stapler no Reddit: Opiniões dos jogadores',
      description: 'Resumo equilibrado das reações no Reddit, Steam e itch.io sobre humor, horror, duração, controles e história.',
      eyebrow: 'Reações da comunidade',
      directAnswer: 'As discussões elogiam visual PSX, vozes e humor sombrio, mas também criticam piadas repetidas, tarefas simples e estrutura curta ou parecida entre capítulos. A recepção tende ao positivo, porém depende muito do gosto pelo humor adulto.',
      sections: [
        { title: 'O que os jogadores gostaram', paragraphs: ['Comentários positivos destacam o estilo grindhouse, o elenco reconhecível, a duração curta e a combinação de horror grotesco com cenas absurdas. O capítulo do cachorro-quente e as reações de criadores foram muito compartilhados.'] },
        { title: 'Principais críticas', paragraphs: ['As críticas citam piadas adultas repetidas, QTEs simples, movimento ocasionalmente desconfortável e momentos pensados para clipes. Relatos sobre Steam Deck são experiências comunitárias, não confirmação oficial de compatibilidade.'] },
        { title: 'Comédia ou terror sério?', paragraphs: ['Esse é o principal ponto de divisão. Quem gostou destaca a mistura de visual PSX sujo, diálogos de filme B e mortes grotescas; quem não gostou considera os trocadilhos sexuais e a repetição infantis. As duas leituras respondem ao mesmo estilo grindhouse deliberadamente exagerado.', 'A violência continua explícita apesar da comédia. A Steam alerta para sangue intenso, gore, cenas assustadoras e conteúdo adulto.'] },
        { title: 'Duração e notas mudam', paragraphs: ['Relatos variam de aproximadamente 2,5 a 5 horas. Exploração e comentários explicam parte da diferença. Nota, quantidade de reviews e votos na Steam são dados vivos e precisam de data.'] },
        { title: 'Como a amostra foi montada', paragraphs: ['A coleta cobre principalmente as duas primeiras semanas depois do lançamento e reúne threads do Reddit, análises na Steam, comentários do itch.io, críticas publicadas e reações em vídeo. Crossposts repetidos pelos mesmos criadores não foram contados como opiniões independentes.', 'A maior onda visível no Reddit veio depois da transmissão de CaseOh. Por isso, a amostra é mais ligada a streamers do que uma pesquisa representativa de compradores.'] },
        { title: 'O que o Reddit não confirma', paragraphs: ['Comentários não substituem Steam ou a desenvolvedora para plataformas, vozes, lançamento ou atualizações. Posts apagados e trechos de busca não são tratados como fatos firmes.'] }
      ],
      faq: [
        { question: 'Existe um subreddit oficial?', answer: 'O material mostra conversas em várias comunidades, mas não confirma um subreddit oficial principal.' },
        { question: 'As opiniões são positivas?', answer: 'Muitas são positivas, mas humor, repetição e duração dividem os jogadores.' },
        { question: 'De quando são essas reações?', answer: 'A maior parte da amostra vem das duas primeiras semanas após o lançamento de agosto de 2026.' }
      ],
      sources: sourceSets.reddit
    },
    achievements: {
      id: 'achievements', keyword: 'conquistas de The Skin Stapler',
      title: 'Conquistas de The Skin Stapler: As 16 da Steam',
      description: 'As 16 conquistas da Steam, o bilhete Thank You perdível, o desbloqueio das fitas e a relação com os capítulos.',
      eyebrow: 'Dados da Steam em 20 de agosto de 2026',
      directAnswer: 'Os dados verificados mostram 16 conquistas. A maioria acompanha capítulos e o final. Skin Successfully Stapled! é a mais fácil de perder: interaja com o bilhete “Thank You” no escritório de Dick Slater.',
      sections: [
        { title: 'As 16 conquistas e seus requisitos', paragraphs: ['Os dados oficiais da Steam coletados em 20 de agosto de 2026 mostram os 16 nomes e requisitos abaixo. As porcentagens globais mudam; os requisitos são a referência mais útil para planejar a partida.'], bullets: ['FeFe - Master Baiter — conclua The Burrows Apartment', 'Dick Slater - Big D — conclua The Carrion City PD', 'One... Two... He’s Coming For You. — conclua Aftermath Part 1', 'Hexy - Wiener Whisperer — conclua The Quick Fix', 'Blair - Shrimply Irresistible — conclua The Gutters End', 'Three, Four, Better Lock Your Door... — conclua Aftermath Part 2', 'LunaArcana - Glazed and Confused — conclua Luna’s Cream Filled Donuts', 'Five, six, grab your crucifix... — conclua Aftermath Part 3', 'Scaroline - The Tape Collector — conclua The Underworld VHS', 'Seven, Eight, Gonna Stay Up Late... — conclua Aftermath Part 4', 'Layna Lazar - The Blood Queen — conclua Lazar’s Blood Bank', 'Nine, Ten, Never Jank Again. — conclua Final Aftermath', 'Runebee - Jank Ya Later! — conserte as fitas do Skin Stapler', 'KingWoolz - The Last Nut Standing — conclua Closing In', 'Robbie Knox - Mind Officially Blown — chegue à cena final', 'Skin Successfully Stapled! — interaja com o bilhete “Thank You” no escritório de Dick Slater'] },
        { title: 'Conquista fácil de perder', paragraphs: ['Skin Successfully Stapled! exige o bilhete “Thank You” no escritório de Slater. A taxa global era de cerca de 26,7% no recorte coletado. A porcentagem muda com o tempo.'] },
        { title: 'Ordem segura em uma partida normal', paragraphs: ['As primeiras doze conquistas acompanham capítulos nomeados e as quatro partes de Aftermath. Depois vêm o conserto das fitas, Closing In e a cena final. As fontes verificadas não exigem dificuldade específica nem rota alternativa para esses desbloqueios de progresso.', 'Examine o bilhete Thank You durante a passagem pelo escritório. Não deixe essa interação opcional para depois do final.'] },
        { title: 'Conquista das fitas', paragraphs: ['Runebee - Jank Ya Later! exige consertar as fitas do Skin Stapler. Não há código universal confirmado nem solução técnica oficial completa nas fontes aprovadas.'] },
        { title: 'Se uma conquista não aparecer', paragraphs: ['Finalize a cena correspondente e confira o estado atual na Steam. Para Runebee - Jank Ya Later!, processe as fitas danificadas liberadas pela investigação; as fontes não fornecem uma sequência oficial completa de reparo ou um método de edição de save.', 'Não apague saves nem altere arquivos com base em dicas não verificadas. Não existe solução técnica oficial documentada no material coletado.'] },
        { title: 'O que não aparece na lista', paragraphs: ['Os dados verificados não mostram conquista de dificuldade, speedrun, multiplayer ou final alternativo. Problemas técnicos de desbloqueio também não têm correção oficial documentada no material.'] }
      ],
      faq: [
        { question: 'Quantas conquistas existem?', answer: 'A lista da Steam coletada em 20 de agosto de 2026 contém 16.' },
        { question: 'Qual conquista é perdível?', answer: 'Skin Successfully Stapled! exige o bilhete no escritório de Dick Slater.' },
        { question: 'Há conquista de dificuldade?', answer: 'Nenhuma conquista de dificuldade aparece na lista verificada.' }
      ],
      sources: sourceSets.achievements
    },
    'puzzle-solutions': {
      id: 'puzzle-solutions', keyword: 'soluções de puzzles de The Skin Stapler',
      title: 'Soluções de puzzles de The Skin Stapler',
      description: 'Código 1979, balança de carne no Flesh Pit, fitas danificadas e a ordem de tarô ainda marcada como não confirmada.',
      eyebrow: 'Somente respostas verificadas',
      directAnswer: 'O código numérico confirmado é 1979. No Flesh Pit, reúna quatro provas relacionadas à carne para a balança. As fitas danificadas fazem parte da investigação. A ordem exata das cartas de tarô não foi confirmada com segurança.',
      sections: [
        { title: 'Código do porta-retrato: 1979', paragraphs: ['Reúna as quatro provas na investigação de Robbie. O quadro mostra 5719 e uma carta aponta para 1979. Digite 1979 para abrir o recipiente com a fita final.'] },
        { title: 'Se o código ainda não funcionar', paragraphs: ['O código faz parte de uma cadeia de provas. No vídeo, uma peça fica atrás de um objeto de pelúcia e outra aparece perto de uma pasta ou mesa. A interface só fica pronta depois que as quatro provas são registradas.', '5719 é o número visível no quadro; a carta estabelece a referência a 1979. Nenhum código aleatório alternativo foi confirmado.'] },
        { title: 'Balança do Flesh Pit', paragraphs: ['A frase “sins paid in pounds of flesh” indica a balança. Procure quatro provas adequadas nas salas acessíveis, área fria ou armário e balcão. Coloque os itens na balança e siga para a interação seguinte de Robbie.'] },
        { title: 'Por que não há uma lista inventada de itens', paragraphs: ['A gravação confirma quatro provas relacionadas à carne, mas não exibe com clareza todos os nomes finais do inventário. Uma faca visível, por exemplo, não pode ser coletada imediatamente. Este guia indica áreas e a lógica do objetivo sem publicar nomes ou ordem não comprovados.'] },
        { title: 'Caixa de tarô', paragraphs: ['Justice, Death, Judgment e Devil aparecem no mecanismo. O vídeo registra várias tentativas, mas não mostra de forma limpa a ordem aceita. Sem uma segunda prova, este guia não inventa uma sequência.'] },
        { title: 'Checklist rápido', paragraphs: ['Porta-retrato: reúna quatro provas e use 1979. Flesh Pit: coloque quatro provas adequadas na balança e continue a interação de porta ou interruptor de Robbie. Fitas: processe as unidades danificadas pela rota de investigação. Tarô: use o retorno visual da versão atual até existir uma sequência registrada com clareza.'] },
        { title: 'Fitas e busca por Blood Puzzle', paragraphs: ['Não existe um código mestre verificado para as fitas. “Blood Puzzle” não é um nome oficial confirmado; pode indicar a tarefa do frasco no Lazar’s Blood Bank ou a balança de carne do final.'] }
      ],
      faq: [
        { question: 'Qual é o código numérico?', answer: 'O código confirmado do porta-retrato é 1979.' },
        { question: 'Qual é a ordem do tarô?', answer: 'A ordem aceita não foi confirmada de forma confiável nas fontes.' },
        { question: 'Existe código universal para as fitas?', answer: 'Nenhum código universal foi comprovado no material aprovado.' }
      ],
      sources: sourceSets['puzzle-solutions']
    }
  },
  es: {
    gameplay: {
      id: 'gameplay', keyword: 'jugabilidad de The Skin Stapler',
      title: 'Jugabilidad de The Skin Stapler: Cómo se juega',
      description: 'La jugabilidad de The Skin Stapler combina investigación, diálogos, puzles ligeros, personajes alternos y QTE breves en una historia lineal.',
      eyebrow: 'Mecánicas y duración',
      directAnswer: 'The Skin Stapler es un juego lineal de terror en primera persona para un jugador. Investigas escenas, hablas con personajes, completas tareas y resuelves puzles ligeros. El combate es escaso y una partida directa suele durar unas tres horas.',
      sections: [
        { title: 'Bucle principal', paragraphs: ['Con Dick Slater buscas pruebas y sigues cintas y diálogos. Otros capítulos cambian a civiles en pisos y lugares de trabajo. Los escenarios son compactos y el avance suele depender de la interacción actual.'], bullets: ['Lee el objetivo y termina los diálogos', 'Busca pruebas en la sala activa', 'Completa tareas y QTE breves', 'Revisa nuevas cintas y rutas'] },
        { title: 'Combate y peligro', paragraphs: ['La descripción del estudio prioriza la tensión sobre el combate tradicional. Hay amenazas guionizadas y una secuencia final con arma, pero ninguna fuente aprobada demuestra un sistema amplio de munición, equipo o mejoras.', 'Varias muertes forman parte del guion y no significan que el jugador haya perdido un combate convencional.'] },
        { title: 'Capítulos y perspectivas jugables', paragraphs: ['La historia alterna la investigación de Dick Slater con los últimos turnos de varios civiles. Entre los lugares confirmados están Burrows Apartment, Carrion City PD, Quick Fix, Gutters End, la tienda de dónuts de Luna, Underworld VHS, Lazar’s Blood Bank y Flesh Pit.', 'Estos cambios pertenecen a una sola campaña para un jugador. No son personajes seleccionables dentro de un modo multijugador.'] },
        { title: '¿Cuánto se tarda en terminar?', paragraphs: ['Los ejemplos publicados y grabados oscilan entre unas 2,5 y 4 horas. Explorar, repetir y buscar logros puede acercar la partida a cinco horas. La demo tiene una estimación oficial de 30–45 minutos.'] },
        { title: 'Qué hacer si no puedes avanzar', paragraphs: ['Lee el objetivo en pantalla y deja que terminen los diálogos cercanos. Después revisa mesas, armarios, mostradores, puertas y objetos claramente interactivos de la sala activa. Muchas rutas se abren solo después de completar una tarea de turno, registrar una prueba o tratar una cinta.', 'No hace falta subir niveles, guardar munición ni registrar un mundo abierto. El progreso sigue una ruta breve y dirigida.'] },
        { title: 'Demo, partida e idioma', paragraphs: ['La demo gratuita es una aplicación independiente de Steam y presenta tres ritmos confirmados: investigación policial, el turno de Hexy en Quick Fix y el turno de Blair en Gutters End. No está confirmada la transferencia de la partida de la demo al juego completo.', 'Steam solo enumera inglés para interfaz, audio completo y subtítulos. La existencia de esta guía en español no significa que el juego tenga localización en español.'] },
        { title: 'Datos todavía no confirmados', paragraphs: ['Las fuentes oficiales no detallan controles, puntos de guardado, guardado manual ni dificultades. Steam solo enumera inglés para interfaz, audio y subtítulos; esta guía en español no implica una traducción del juego.'] }
      ],
      faq: [
        { question: '¿The Skin Stapler tiene multijugador?', answer: 'No. La página verificada de Steam lo presenta como juego para un jugador.' },
        { question: '¿Es un shooter?', answer: 'El combate no es el bucle principal; predominan investigación, diálogos y tareas.' },
        { question: '¿Cuánto dura la demo?', answer: 'Steam estima entre 30 y 45 minutos para la demo gratuita independiente.' }
      ],
      sources: sourceSets.gameplay
    },
    characters: {
      id: 'characters', keyword: 'personajes de The Skin Stapler',
      title: 'Personajes de The Skin Stapler: Lista y papeles',
      description: 'Personajes confirmados de The Skin Stapler con papel, ubicación, estado jugable y destinos desconocidos claramente señalados.',
      eyebrow: 'Reparto de Carrion City',
      directAnswer: 'Los personajes principales incluyen a Dick Slater, Robbie Knox, Fefe, Hexy, Blair, Luna, Nurse Layna, Scaroline y Elias Crow. Varios civiles son jugables; al final, Elias Crow es identificado como el Skin Stapler.',
      sections: [
        { title: 'Personajes jugables', paragraphs: ['Dick Slater dirige la investigación y Robbie Knox trabaja a su lado. La historia también cambia a Fefe en Burrows Apartments, Hexy en Quick Fix, Blair en Gutters End, Luna en su tienda, Scaroline en Underworld VHS y Nurse Layna en Lazar’s Blood Bank.'], bullets: ['Dick Slater — detective principal', 'Robbie Knox — compañero novato', 'Fefe — personaje inicial', 'Hexy — empleada de Quick Fix', 'Blair — empleada de Gutters End', 'Luna — propietaria de la tienda', 'Scaroline — propietaria de Underworld VHS', 'Nurse Layna — personaje del banco de sangre'] },
        { title: 'Antagonista y secundarios', paragraphs: ['Elias Crow es el dueño de Flesh Pit y la identidad real del Skin Stapler. Silus es su hermano gemelo y forma parte de la venganza. Scaroline dirige Underworld VHS y DJ Woolz aparece mediante emisiones de radio.', 'Chief O’Brien, Roxy, Elmer, Lucas y Mr. Shrimp completan el elenco conocido. No todos tienen jugabilidad, voz o destino confirmados.'] },
        { title: 'Destinos confirmados y desconocidos', paragraphs: ['El sacrificio de Robbie y las muertes de Fefe, Blair y Luna aparecen en partidas completas. Hexy sobrevive a su encuentro en Quick Fix. Scaroline, Nurse Layna y varios secundarios mantienen datos pendientes.', 'Dick dispara a Elias, pero las fuentes no aclaran de forma definitiva si muere o es detenido.'] },
        { title: 'Personajes por lugar', paragraphs: ['Fefe abre el juego completo en Burrows Apartments. Hexy trabaja en Quick Fix y prepara perritos calientes; Blair cubre el turno nocturno de Gutters End; Luna gestiona una tienda de dónuts y café; Scaroline dirige Underworld VHS; Nurse Layna aparece en Lazar’s Blood Bank.', 'Chief O’Brien, Roxy y Elmer pertenecen al entorno de la CCPD. Lucas y Mr. Shrimp están relacionados con Gutters End, mientras que DJ Woolz aparece en las emisiones de radio.'] },
        { title: 'Voces confirmadas', paragraphs: ['El material del reparto vincula a Blair con @blairvira, a Luna con Luna Arcana, a Fefe con @CovfefeChan, a Scaroline con @Scarolinetv_, a Nurse Layna con Layna Lazar y a DJ Woolz con @KingWoolz. HexyIRL aparece asociado a Hexy y al asesino titular; el vídeo de la propia Blair también menciona ese doble papel.', 'El nombre del personaje, el usuario del intérprete y la persona real no son equivalentes. Luna y Nurse Layna, por ejemplo, son personajes e intérpretes distintos.'] },
        { title: 'Nombres y voces', paragraphs: ['El apellido de Silus aparece como Kaine, Kane y Kain. El nombre de un personaje, el usuario del intérprete y su identidad real no deben mezclarse. La guía del reparto separa asignaciones confirmadas y pendientes.'] }
      ],
      faq: [
        { question: '¿Quién es el protagonista?', answer: 'Dick Slater es el investigador principal, con capítulos adicionales desde otras perspectivas.' },
        { question: '¿Quién es el Skin Stapler?', answer: 'El juego completo revela a Elias Crow, propietario de Flesh Pit.' },
        { question: '¿Se conocen todos los destinos?', answer: 'No. Algunos secundarios y el estado final de Elias siguen siendo ambiguos.' }
      ],
      sources: sourceSets.characters
    },
    'who-is': {
      id: 'who-is', keyword: 'quién es el Skin Stapler',
      title: '¿Quién es el Skin Stapler? Identidad y motivo',
      description: 'El Skin Stapler es Elias Crow. Descubre su relación con Flesh Pit, Silus, Dick Slater y las pruebas de la revelación.',
      eyebrow: 'Grandes spoilers',
      directAnswer: 'El Skin Stapler es Elias Crow, propietario del restaurante Flesh Pit. Busca vengarse de Dick Slater porque el detective mató a su hermano gemelo Silus en 1979. Dos partidas completas respaldan la misma identidad y motivación.',
      sections: [
        { title: 'Cómo se descubre la identidad', paragraphs: ['Expedientes antiguos, cintas distorsionadas, el hallazgo de Scaroline y el nombre de Elias Crow conducen a Flesh Pit. Los diálogos finales explican que Elias y Silus fueron separados al nacer y criados por familias distintas.'] },
        { title: 'Por qué mata Elias', paragraphs: ['Dick Slater mató a Silus durante el caso Full Mooner Gooner. Elias culpa a Slater de la pérdida y convierte los asesinatos en una venganza personal.'] },
        { title: '¿Qué pruebas conducen a Flesh Pit?', paragraphs: ['Los expedientes antiguos citan a Silus, las cintas distorsionadas aparecen en varias escenas y un recipiente tardío guarda el mensaje que invita al detective a encontrar al asesino. El diálogo de Robbie y Dick vincula a Elias Crow con Flesh Pit y establece su relación con Silus.', 'La identidad se construye mediante varias pistas, no mediante una teoría de la demo. Dos partidas completas independientes presentan la misma revelación.'] },
        { title: '¿Qué significa “The Skin Stapler”?', paragraphs: ['The Skin Stapler es el nombre que usan la policía y los medios para el asesino en serie. Las páginas oficiales describen su método: desuella a las víctimas y grapa la piel en paredes cercanas. Elias Crow es el nombre real detrás del apodo.'] },
        { title: 'El enfrentamiento en Flesh Pit', paragraphs: ['Robbie y Dick llegan al restaurante de Elias. Robbie se sacrifica y Dick dispara a Elias.', 'Las imágenes verificadas no aclaran si Elias muere o es detenido. Esta página no escoge una interpretación sin pruebas.'] },
        { title: 'Conflictos de nombres', paragraphs: ['El apellido de Silus varía entre Kaine, Kane y Kain. Una sola fuente comunitaria usa otro nombre para el asesino, pero carece de confirmación independiente. Elias Crow es la identidad respaldada por varias fuentes.'] }
      ],
      faq: [
        { question: '¿Cuál es el nombre real del Skin Stapler?', answer: 'Su nombre es Elias Crow.' },
        { question: '¿Quién es el dueño de Flesh Pit?', answer: 'El juego identifica a Elias Crow como propietario de Flesh Pit.' },
        { question: '¿Muere Elias al final?', answer: 'Dick le dispara, pero su estado final no queda confirmado de manera inequívoca.' }
      ],
      sources: sourceSets['who-is']
    },
    reddit: {
      id: 'reddit', keyword: 'The Skin Stapler Reddit',
      title: 'The Skin Stapler en Reddit: Opiniones de jugadores',
      description: 'Resumen equilibrado de reacciones en Reddit, Steam e itch.io sobre humor, terror, duración, controles e historia.',
      eyebrow: 'Reacciones de la comunidad',
      directAnswer: 'Las conversaciones elogian el aspecto PSX, las voces y el humor negro, pero también critican bromas repetidas, tareas sencillas y una estructura corta o uniforme. La recepción tiende a ser positiva, aunque depende mucho del gusto por el humor adulto.',
      sections: [
        { title: 'Lo que gustó a los jugadores', paragraphs: ['Los comentarios positivos destacan el estilo grindhouse, el reparto reconocible, la duración breve y la mezcla de terror grotesco con escenas absurdas. El capítulo del perrito caliente y las reacciones de creadores se compartieron mucho.'] },
        { title: 'Críticas habituales', paragraphs: ['Las críticas señalan bromas adultas repetidas, QTE simples, movimiento algo incómodo y escenas pensadas para clips. Los comentarios sobre Steam Deck son experiencias comunitarias, no una confirmación oficial de compatibilidad.'] },
        { title: '¿Comedia o terror serio?', paragraphs: ['Ese es el principal punto de división. Quienes lo disfrutaron destacan la mezcla de estética PSX sucia, diálogos de serie B y muertes grotescas; quienes no conectaron con él consideran infantiles los juegos de palabras sexuales y la repetición. Ambas lecturas responden al mismo estilo grindhouse deliberadamente exagerado.', 'La violencia sigue siendo explícita pese a la comedia. Steam advierte de sangre intensa, gore, escenas aterradoras y contenido para adultos.'] },
        { title: 'Duración y puntuaciones cambiantes', paragraphs: ['Los testimonios van aproximadamente de 2,5 a 5 horas. La exploración y los comentarios explican parte de la diferencia. La valoración y el número de reseñas de Steam cambian continuamente y necesitan fecha.'] },
        { title: 'Cómo se reunió la muestra', paragraphs: ['La recopilación cubre sobre todo las dos primeras semanas tras el lanzamiento e incluye hilos de Reddit, reseñas de Steam, comentarios de itch.io, críticas publicadas y reacciones en vídeo. Los crossposts repetidos por los mismos creadores no se contaron como opiniones independientes.', 'La mayor oleada visible en Reddit apareció después de una partida de CaseOh. Por eso, la muestra está más ligada a streamers que una encuesta representativa de compradores.'] },
        { title: 'Lo que Reddit no puede confirmar', paragraphs: ['Los comentarios no sustituyen a Steam o al estudio para plataformas, reparto, lanzamiento o futuras actualizaciones. Las publicaciones borradas y los fragmentos de buscador no se consideran hechos sólidos.'] }
      ],
      faq: [
        { question: '¿Existe un subreddit oficial?', answer: 'El material muestra conversaciones en varias comunidades, pero no confirma un subreddit oficial principal.' },
        { question: '¿Las opiniones son positivas?', answer: 'Muchas son positivas, pero el humor, la repetición y la duración dividen a los jugadores.' },
        { question: '¿De cuándo son estas reacciones?', answer: 'La mayor parte de la muestra procede de las dos primeras semanas tras el lanzamiento de agosto de 2026.' }
      ],
      sources: sourceSets.reddit
    },
    achievements: {
      id: 'achievements', keyword: 'logros de The Skin Stapler',
      title: 'Logros de The Skin Stapler: Los 16 de Steam',
      description: 'Los 16 logros de Steam, la nota Thank You perdible, el desbloqueo de las cintas y su relación con los capítulos.',
      eyebrow: 'Datos de Steam del 20 de agosto de 2026',
      directAnswer: 'Los datos verificados muestran 16 logros. La mayoría sigue los capítulos y el final. Skin Successfully Stapled! es el más fácil de perder: interactúa con la nota “Thank You” del despacho de Dick Slater.',
      sections: [
        { title: 'Los 16 logros y sus requisitos', paragraphs: ['Los datos oficiales de Steam recopilados el 20 de agosto de 2026 contienen los 16 nombres y requisitos siguientes. Los porcentajes globales cambian; las condiciones son la referencia útil para organizar la partida.'], bullets: ['FeFe - Master Baiter — completa The Burrows Apartment', 'Dick Slater - Big D — completa The Carrion City PD', 'One... Two... He’s Coming For You. — completa Aftermath Part 1', 'Hexy - Wiener Whisperer — completa The Quick Fix', 'Blair - Shrimply Irresistible — completa The Gutters End', 'Three, Four, Better Lock Your Door... — completa Aftermath Part 2', 'LunaArcana - Glazed and Confused — completa Luna’s Cream Filled Donuts', 'Five, six, grab your crucifix... — completa Aftermath Part 3', 'Scaroline - The Tape Collector — completa The Underworld VHS', 'Seven, Eight, Gonna Stay Up Late... — completa Aftermath Part 4', 'Layna Lazar - The Blood Queen — completa Lazar’s Blood Bank', 'Nine, Ten, Never Jank Again. — completa Final Aftermath', 'Runebee - Jank Ya Later! — repara las cintas del Skin Stapler', 'KingWoolz - The Last Nut Standing — completa Closing In', 'Robbie Knox - Mind Officially Blown — llega a la escena final', 'Skin Successfully Stapled! — interactúa con la nota “Thank You” del despacho de Dick Slater'] },
        { title: 'El logro fácil de perder', paragraphs: ['Skin Successfully Stapled! exige la nota “Thank You” del despacho de Slater. Su tasa global era aproximadamente del 26,7% en la captura recopilada. Este porcentaje cambia con el tiempo.'] },
        { title: 'Orden seguro en una partida normal', paragraphs: ['Los primeros doce logros siguen los capítulos con nombre y las cuatro partes de Aftermath. Después llegan la reparación de las cintas, Closing In y la escena final. Las fuentes verificadas no exigen una dificultad concreta ni una ruta alternativa para esos logros de progreso.', 'Examina la nota Thank You durante el paso por el despacho. No dejes esa interacción opcional para después del final.'] },
        { title: 'El logro de las cintas', paragraphs: ['Runebee - Jank Ya Later! exige reparar las cintas del Skin Stapler. No hay un código universal confirmado ni una solución técnica oficial completa en las fuentes aprobadas.'] },
        { title: 'Si un logro no aparece', paragraphs: ['Termina la escena correspondiente y comprueba su estado actual en Steam. Para Runebee - Jank Ya Later!, procesa las cintas dañadas que descubre la investigación; las fuentes no ofrecen una secuencia oficial completa de reparación ni un método de edición de partidas.', 'No borres partidas ni modifiques archivos siguiendo consejos no contrastados. El material recopilado no documenta una solución técnica oficial.'] },
        { title: 'Lo que no incluye la lista', paragraphs: ['Los datos no muestran logros de dificultad, speedrun, multijugador o final alternativo. El material tampoco documenta una corrección oficial para problemas técnicos de desbloqueo.'] }
      ],
      faq: [
        { question: '¿Cuántos logros hay?', answer: 'La lista de Steam recopilada el 20 de agosto de 2026 contiene 16.' },
        { question: '¿Qué logro es perdible?', answer: 'Skin Successfully Stapled! exige la nota del despacho de Dick Slater.' },
        { question: '¿Hay logros de dificultad?', answer: 'No aparece ningún logro de dificultad en la lista verificada.' }
      ],
      sources: sourceSets.achievements
    },
    'puzzle-solutions': {
      id: 'puzzle-solutions', keyword: 'soluciones de puzles de The Skin Stapler',
      title: 'Soluciones de puzles de The Skin Stapler',
      description: 'Código 1979, balanza de carne de Flesh Pit, cintas dañadas y el orden del tarot todavía marcado como no confirmado.',
      eyebrow: 'Solo respuestas verificadas',
      directAnswer: 'El código numérico confirmado es 1979. En Flesh Pit, reúne cuatro pruebas relacionadas con la carne para la balanza. Las cintas dañadas forman parte de la investigación. El orden exacto de las cartas del tarot no está confirmado con fiabilidad.',
      sections: [
        { title: 'Código del marco: 1979', paragraphs: ['Reúne las cuatro pruebas durante la investigación de Robbie. El marco muestra 5719 y una carta apunta a 1979. Introduce 1979 para abrir el recipiente con la cinta final.'] },
        { title: 'Si el código todavía no funciona', paragraphs: ['El código forma parte de una cadena de pruebas. En el vídeo, una pieza está detrás de un objeto de peluche y otra aparece cerca de una carpeta o escritorio. La interfaz queda preparada cuando las cuatro pruebas se han registrado.', '5719 es el número visible del marco; la carta establece la referencia a 1979. No se ha confirmado ningún código alternativo aleatorio.'] },
        { title: 'Balanza de Flesh Pit', paragraphs: ['La frase “sins paid in pounds of flesh” señala la balanza. Busca cuatro pruebas apropiadas en las salas accesibles, la zona fría o armario y el mostrador. Coloca los objetos y continúa con la siguiente interacción de Robbie.'] },
        { title: 'Por qué no se inventa una lista de objetos', paragraphs: ['La grabación confirma cuatro pruebas relacionadas con la carne, pero no muestra con claridad todos los nombres finales del inventario. Un cuchillo visible, por ejemplo, no puede recogerse de inmediato. Esta guía indica zonas y la lógica del objetivo sin publicar nombres ni un orden no demostrados.'] },
        { title: 'Caja de tarot', paragraphs: ['Justice, Death, Judgment y Devil aparecen en el mecanismo. El vídeo registra varios intentos, pero no muestra claramente el orden aceptado. Sin una segunda prueba, la guía no inventa una secuencia.'] },
        { title: 'Lista rápida de comprobación', paragraphs: ['Marco: reúne cuatro pruebas e introduce 1979. Flesh Pit: coloca cuatro pruebas adecuadas en la balanza y continúa con la puerta o interruptor de Robbie. Cintas: procesa las unidades dañadas durante la investigación. Tarot: utiliza la respuesta visual de la versión actual hasta que exista una secuencia registrada con claridad.'] },
        { title: 'Cintas y búsqueda “Blood Puzzle”', paragraphs: ['No existe un código maestro verificado para las cintas. “Blood Puzzle” no es un nombre oficial confirmado; puede referirse a la tarea del frasco en Lazar’s Blood Bank o a la balanza de carne del final.'] }
      ],
      faq: [
        { question: '¿Cuál es el código numérico?', answer: 'El código confirmado del marco es 1979.' },
        { question: '¿Cuál es el orden del tarot?', answer: 'El orden aceptado no está confirmado de forma fiable en las fuentes.' },
        { question: '¿Existe un código universal para las cintas?', answer: 'El material aprobado no confirma ningún código universal.' }
      ],
      sources: sourceSets['puzzle-solutions']
    }
  }
};
