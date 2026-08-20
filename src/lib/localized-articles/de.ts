import type { BaseLocalizedArticleId, LocalizedArticle } from './types';

export const deArticles: Record<BaseLocalizedArticleId, LocalizedArticle> = {
  walkthrough: {
    id: 'walkthrough', keyword: 'The Skin Stapler Komplettlösung',
    title: 'The Skin Stapler Komplettlösung: Alle Kapitel',
    description: 'Die The Skin Stapler Komplettlösung führt von Fefes Apartment über CCPD und die Arbeitsschichten bis zu Closing In und dem Finale im Flesh Pit.',
    eyebrow: 'Kompletter Weg durch Version 1.0',
    directAnswer: 'Die Hauptroute beginnt in Fefes Apartment, führt über CCPD, Quick Fix, Gutters End, Lunas Laden, Underworld VHS und Lazar’s Blood Bank und endet nach Closing In im Flesh Pit. Wer feststeckt, sollte zuerst das aktuelle Ziel, offene Gespräche, Beweise, Schichtaufgaben und beschädigte Tonbänder prüfen.',
    sections: [
      { title: 'Kapitel in der richtigen Reihenfolge', paragraphs: ['Die veröffentlichte Fassung folgt einer festen, erzählten Route. Zwischen den spielbaren Schauplätzen liegen mehrere Aftermath-Abschnitte, in denen Slater und Robbie die neuen Spuren einordnen.', 'Zwei vollständige Spieldurchläufe bestätigen dieselbe grobe Reihenfolge. Die Laufzeiten unterscheiden sich, die Abfolge der Orte bleibt jedoch gleich.'], bullets: ['The Night Before at the Burrows Apartments – Fefe', 'Carrion City Police Department – Dick Slater', 'The Quick Fix – Hexy', 'Gutters End Bowling Alley – Blair', 'Luna’s Cream Filled Donut Holes – Luna', 'Underworld VHS – Scaroline', 'Lazar’s Blood Bank – Nurse Layna', 'Closing In – Dick Slater', 'The Flesh Pit – Finale'] },
      { title: 'So kommt die Handlung weiter', paragraphs: ['The Skin Stapler ist kein Open-World-Spiel. Fortschritt entsteht durch Gespräche, untersuchte Tatorte, erledigte Aufgaben während der Arbeitsschichten und reparierte oder abgespielte Tonbänder.', 'Ein allgemeines Passwort, ein geheimer Kapitelcode oder ein Überspringen aller Rätsel ist nicht belegt. Aktualisiert sich das Ziel nicht, fehlt meistens noch eine Interaktion im aktuellen Raum.'], bullets: ['Aktuelles Ziel aufrufen und vollständig lesen', 'Gespräche bis zum Ende ablaufen lassen', 'Schreibtische, Türen, Theken und Beweisstücke prüfen', 'Jeden Schritt der jeweiligen Schichtaufgabe abschließen', 'Nach einem Zielwechsel erneut zuvor verschlossene Wege testen'] },
      { title: 'Demo und Vollversion sind nicht identisch', paragraphs: ['Die kostenlose Demo enthält CCPD, Quick Fix und Gutters End. Fefes Apartment, die späteren Arbeitsorte, Closing In und der Flesh Pit gehören zur erweiterten Vollversion.', 'Darum sollte die Vollversion von Anfang an gespielt werden. Ein direkter Einstieg über alte Demo-Kapitel bildet die endgültige Erzählreihenfolge nicht vollständig ab.'] },
      { title: 'Spielzeit und Erfolge', paragraphs: ['Tainted Pact beschreibt das Spiel als kurze Horrorgeschichte für einen Abend. Die ausgewerteten vollständigen Videos dauern etwa 2 Stunden 46 Minuten bis 3 Stunden 5 Minuten; Erkundung und Wiederholungen können die eigene Spielzeit verlängern.', 'Steam führt 16 Erfolge. Die Recherche belegt nicht jede einzelne Freischaltbedingung, deshalb werden hier keine angeblich verpassbaren Aufgaben erfunden.'] },
      { title: 'Was noch nicht bestätigt ist', paragraphs: ['Eine Fan-Wiki berichtet von leicht unterschiedlichen Epilogformulierungen je nach angehörten Tonbändern. Zwei direkt vergleichbare Durchläufe lagen dafür nicht vor; mögliche Varianten sind daher noch nicht bestätigt.', 'Auch Schreibweisen aus automatisch erzeugten Untertiteln schwanken, etwa Fefe/Fifi und Kain/Kane. Für Fefe gilt die Schreibweise des Cast-Posters.'] }
    ],
    faq: [
      { question: 'Wie lange dauert The Skin Stapler?', answer: 'Ein direkter Durchlauf dauert in den ausgewerteten Videos ungefähr drei Stunden. Gründliche Erkundung, Wiederholungen und Erfolgssuche können länger dauern.' },
      { question: 'Wie viele Hauptkapitel gibt es?', answer: 'Die belegte Route umfasst neun größere spielbare Schauplätze sowie mehrere verbindende Aftermath-Abschnitte.' },
      { question: 'Gibt es einen festen Rätselcode?', answer: 'Ein universeller Code ist nicht belegt. Die meisten Blockaden entstehen durch fehlende Gespräche, Beweise, Tonbänder oder Schichtschritte.' },
      { question: 'Ist die Anleitung für die Demo?', answer: 'Nein. Sie folgt der im August 2026 veröffentlichten Vollversion; die Demo enthält nur drei der frühen Abschnitte.' }
    ]
  },
  ending: {
    id: 'ending', keyword: 'The Skin Stapler Ende erklärt',
    title: 'The Skin Stapler Ende erklärt: Die ganze Geschichte',
    description: 'Das Ende von The Skin Stapler enthüllt Elias Crow, sein Motiv, Robbies Schicksal und Slaters Abschied. Mögliche Epilogvarianten bleiben unbestätigt.',
    eyebrow: 'Achtung: massive Spoiler',
    directAnswer: 'Der Skin Stapler ist Elias Crow, Besitzer des Restaurants Flesh Pit. Er will sich an Dick Slater rächen, weil Slater seinen Bruder Silus getötet hat; im Finale fällt Robbie, Slater schießt mit Robbies Waffe auf Elias und verlässt Carrion City. Ob Elias stirbt oder festgenommen wird, bleibt im geprüften Material uneindeutig.',
    sections: [
      { title: 'Wer ist der Skin Stapler?', paragraphs: ['Die Ermittlungen führen zu Elias Crow und zum Flesh Pit. Vollständige Spielmitschnitte nennen seinen Namen, seinen Aufenthaltsort und sein Motiv noch vor der letzten Konfrontation.', 'Die Identität stammt damit aus Dialogen der Vollversion und nicht aus einer Demo-Theorie. Zwei voneinander unabhängige Transkripte geben dieselbe Auflösung wieder.'] },
      { title: 'Warum jagt Elias Dick Slater?', paragraphs: ['Elias handelt aus Rache für seinen Bruder Silus Kain. Er sagt Slater, dieser habe ihm einen wichtigen Menschen genommen, und kündigt an, ihm nun ebenfalls jemanden zu nehmen.', 'Automatische Untertitel schreiben den Nachnamen teilweise als Kane. Ob Kain oder Kane im offiziellen Abspann steht, ist noch nicht bestätigt.'] },
      { title: 'Was passiert mit Robbie?', paragraphs: ['Elias überwältigt und fesselt beide Ermittler. Robbie wird im Verlauf der Auseinandersetzung niedergeschlagen und fordert Slater auf, seine Waffe zu benutzen.', 'Slater tötet Elias und verabschiedet sich anschließend von Robbie. Robbie erholt sich vor Szenenende nicht; Slaters Worte behandeln den Verlust als endgültig.'] },
      { title: 'Warum verlässt Slater Carrion City?', paragraphs: ['Der Fall ist gelöst, aber Slater hat seinen neuen Partner verloren. Er erklärt, dass er nicht länger versuchen werde, die Stadt zu retten, und fährt davon.', 'Damit endet die Geschichte bitter statt triumphal. Dick schießt auf Elias; dessen endgültiger Zustand ist nicht eindeutig zu sehen. Slater glaubt nicht mehr daran, Carrion City reparieren zu können.'] },
      { title: 'Gibt es mehrere Enden?', paragraphs: ['Die ausgewerteten Vollversion-Videos zeigen ein bestätigtes Hauptende. Ein Fan-Bericht erwähnt kleine Unterschiede im Epilog abhängig von gehörten Tonbändern, doch ein direkter Vergleich fehlt.', 'Ein Demo-Video vom Februar 2026 trägt zwar „all endings“ im Titel, belegt aber keine Enden der August-Vollversion. Weitere Varianten bleiben deshalb noch nicht bestätigt.'] }
    ],
    faq: [
      { question: 'Wer ist der Mörder?', answer: 'Elias Crow, der Besitzer des Flesh Pit, ist der Skin Stapler.' },
      { question: 'Was ist Elias’ Motiv?', answer: 'Er rächt den Tod seines Bruders Silus Kain, den Dick Slater getötet hat.' },
      { question: 'Stirbt Robbie?', answer: 'Robbie wird niedergeschlagen, überlässt Slater seine Waffe und kehrt nicht zurück. Slaters Abschied behandelt seinen Tod als endgültig.' },
      { question: 'Bleibt Slater in Carrion City?', answer: 'Nein. Nach dem Kampf erklärt er, dass er die Stadt nicht mehr retten will, und verlässt sie.' }
    ]
  },
  wiki: {
    id: 'wiki', keyword: 'The Skin Stapler Wiki',
    title: 'The Skin Stapler Wiki: Lösung, Besetzung und Ende',
    description: 'Das The Skin Stapler Wiki bündelt Komplettlösung, Ende, Figuren, Sprecher, Demo, Veröffentlichung und geprüfte Fakten zur Vollversion für Windows.',
    eyebrow: 'Unabhängiges Nachschlagewerk',
    directAnswer: 'Dieses The Skin Stapler Wiki sammelt geprüfte Informationen zur Vollversion: Kapitelweg, Ende, Figuren, Sprecher, Demo, Veröffentlichung und offizielle Bezugsquellen. Es ist ein unabhängiger Fan-Guide und keine offizielle Seite von Tainted Pact oder Assemble Entertainment.',
    sections: [
      { title: 'Das Spiel in Kürze', paragraphs: ['The Skin Stapler ist ein Einzelspieler-Horrorspiel im Retro-PSX- und Grindhouse-Stil. Dick Slater und Robbie Knox verfolgen in Carrion City einen Mörder, während andere Kapitel die Opferperspektive zeigen.', 'Tainted Pact entwickelte das Spiel, Assemble Entertainment veröffentlichte es am 6. August 2026 für Windows. Offiziell unterstützt werden englische Oberfläche, Sprachausgabe und Untertitel.'] },
      { title: 'Wo neue Spieler anfangen sollten', paragraphs: ['Wer ohne große Spoiler beginnen möchte, nutzt zuerst den Einsteiger-Guide und die Gameplay-Übersicht. Die Komplettlösung enthält die Reihenfolge aller bestätigten Schauplätze.', 'Die Endseite nennt den Täter, sein Motiv und die Schicksale von Robbie und Slater. Sie ist deshalb bewusst vom allgemeinen Guide getrennt.'] },
      { title: 'Bestätigte Eckdaten', paragraphs: ['Steam führt die Vollversion als Einzelspieler-Spiel mit 16 Erfolgen. Die separate kostenlose Demo erschien am 30. Januar 2026 und enthält CCPD, Quick Fix und Gutters End.', 'Eine PlayStation-, Xbox-, Switch-, Mobil- oder macOS-Version ist in den ausgewerteten offiziellen Quellen nicht angekündigt. Andere Plattformen sind noch nicht bestätigt.'], bullets: ['Veröffentlichung: 6. August 2026', 'Plattform: Windows PC über Steam und GOG', 'Entwickler: Tainted Pact', 'Publisher: Assemble Entertainment', 'Offizielle Sprache: Englisch', 'Steam-Erfolge: 16'] },
      { title: 'Offizielle Quellen und Fan-Wikis', paragraphs: ['Eine offizielle Wiki des Studios ist nicht belegt. Verlässliche Primärquellen sind die Steam-Seite, das itch.io-Profil des Entwicklers, Steam Discussions und Mitteilungen von Tainted Pact oder Assemble Entertainment.', 'Zwei unabhängige Fan-Wikis erscheinen in der Suche. Ihre Aussagen werden hier nur übernommen, wenn sie mit offiziellen Angaben oder sichtbarem Gameplay übereinstimmen.'] },
      { title: 'Ausgeschlossene und offene Angaben', paragraphs: ['Ein Aggregator mit Mobile-, Trainer- und Cheat-Engine-Angeboten wurde ausgeschlossen, weil seine Plattformangaben der offiziellen Windows-Veröffentlichung widersprechen. Auch ein veralteter IGN-Eintrag mit dem Zeitfenster Q3 2026 ersetzt nicht das bestätigte Datum.', 'Variable Spielerzahlen, Bewertungen, Preise und Rabatte werden nur mit Datum genannt. Unbelegte alternative Enden oder ältere Cast-Einträge bleiben als noch nicht bestätigt markiert.'] }
    ],
    faq: [
      { question: 'Ist dies eine offizielle Wiki?', answer: 'Nein. Die Seite ist ein unabhängiger Fan-Guide und verweist für offizielle Angaben auf Entwickler, Publisher und Stores.' },
      { question: 'Ist die Vollversion erschienen?', answer: 'Ja. Die Windows-Version erschien am 6. August 2026 auf Steam und GOG.' },
      { question: 'Gibt es Mehrspieler?', answer: 'Die offiziellen Store-Seiten führen nur Einzelspieler. Ein Mehrspielermodus ist nicht bestätigt.' },
      { question: 'Gibt es Einlösecodes?', answer: 'Ein offizielles Code-System ist nicht dokumentiert. Diese Wiki erfindet keine Codes.' }
    ]
  },
  fefe: {
    id: 'fefe', keyword: 'The Skin Stapler Fefe',
    title: 'The Skin Stapler Fefe: Figur und Sprecherin',
    description: 'The Skin Stapler Fefe eröffnet die Vollversion in einem Apartment. Hier stehen ihre Sprecherin FeFe, der Demo-Status und alle bestätigten Fakten.',
    eyebrow: 'Figur und Stimme',
    directAnswer: 'Fefe ist die spielbare Figur am Anfang der Vollversion. Sie erwacht während eines Gewitters in ihrem Apartment und wird von FeFe, öffentlich bekannt als @CovfefeChan, gesprochen.',
    sections: [
      { title: 'Fefes Rolle im Spiel', paragraphs: ['Ein Bericht vom Veröffentlichungstag beschreibt Fefe als erste spielbare Perspektive. Die Szene beginnt nachts im Apartment mit „midnight matcha“, bevor die Situation kippt.', 'Danach wechselt die Vollversion zur Polizeistation und zu Slaters Ermittlungen. Fefe eröffnet die Geschichte, ersetzt Slater aber nicht als zentralen Ermittler.'] },
      { title: 'Wer spricht Fefe?', paragraphs: ['Der Cast-Poster ordnet Fefe dem Handle @CovfefeChan zu. Die Darstellerin nutzt den Namen FeFe und beschreibt sich öffentlich als Punk-Rock-VTuberin und Sprecherin.', 'Tainted Pact kündigte ihre Beteiligung am 3. Juni 2026 an. Ein bürgerlicher Name oder private Angaben sind nicht Teil der verfügbaren Quellen.'] },
      { title: 'Ist Fefe in der Demo?', paragraphs: ['Nein. Die offizielle Demo nennt nur CCPD mit Dick Slater, Quick Fix mit Hexy und Gutters End mit Blair.', 'Fefes Apartment gehört zur Vollversion vom August. Ob die Szene erst nach der Demo ergänzt oder nur aus dem Probebuild herausgelassen wurde, ist noch nicht bestätigt.'] },
      { title: 'Fefe, FeFe und Fifi', paragraphs: ['Der Figurenname lautet auf dem Cast-Poster Fefe; die Darstellerin schreibt sich FeFe. Beide Schreibweisen meinen Figur und Sprecherin, nicht zwei Figuren.', 'Ein automatisch erzeugtes Transkript gibt einen Erfolg als „Fifi“ wieder. Ob dies ein Erkennungsfehler oder die tatsächliche Schreibweise im Erfolg ist, ist noch nicht bestätigt.'] },
      { title: 'Was über Fefe unbekannt bleibt', paragraphs: ['Nachname, Alter, Beruf, Beziehungen und vollständiges Schicksal werden in den ausgewerteten Figurenquellen nicht belegt. Auch eine offizielle vollständige Kapitelbezeichnung fehlt.', 'Diese Lücken werden nicht mit Fan-Theorien gefüllt. Neue Angaben benötigen eine direkte Spielszene, den Abspann oder eine offizielle Figurenbeschreibung.'] }
    ],
    faq: [
      { question: 'Ist Fefe spielbar?', answer: 'Ja. Ein Bericht zur Vollversion und die Kapitelstruktur nennen sie als erste spielbare Perspektive.' },
      { question: 'Wer spricht Fefe?', answer: 'FeFe, öffentlich als @CovfefeChan bekannt, spricht die Figur.' },
      { question: 'Kommt Fefe in der Demo vor?', answer: 'Sie wird in der offiziellen Beschreibung der drei Demo-Abschnitte nicht genannt.' },
      { question: 'Ist Fifi eine andere Figur?', answer: 'Dafür gibt es keinen Beleg. Fifi stammt aus einem automatischen Transkript; die bestätigte Schreibweise lautet Fefe.' }
    ]
  },
  'hot-dog': {
    id: 'hot-dog', keyword: 'The Skin Stapler Hot-Dog-Szene',
    title: 'The Skin Stapler Hot-Dog-Szene vollständig erklärt',
    description: 'Die The Skin Stapler Hot-Dog-Szene spielt bei Quick Fix. Erfahre Hexys belegte Zubereitungsschritte und warum die Kundenanimation zum Meme wurde.',
    eyebrow: 'Quick Fix aus der Demo',
    directAnswer: 'Die bekannte Hot-Dog-Szene stammt aus Hexys Quick-Fix-Schicht in der kostenlosen Demo. Der Spieler bereitet die Bestellung Schritt für Schritt zu; die ungewöhnliche Essensanimation des Kunden machte den Ausschnitt anschließend zum Meme.',
    sections: [
      { title: 'Wo die Szene stattfindet', paragraphs: ['Quick Fix ist einer von drei offiziell genannten Demo-Abschnitten. Die beiden anderen sind CCPD mit Dick Slater und Gutters End mit Blair.', 'Die Store-Beschreibung fordert ausdrücklich dazu auf, fragwürdige Hot Dogs zu servieren. Es handelt sich weder um eine Mod noch um einen erfundenen Community-Quest.'] },
      { title: 'Die belegte Zubereitungsfolge', paragraphs: ['Hexy nimmt den Anruf an, holt das Fleisch aus dem Hinterraum und bereitet die Bestellung vor. Die ausgewerteten Spieltranskripte zeigen dieselbe Reihenfolge.', 'Zuerst kommen getoastetes Brötchen und gegarte Wurst, danach Senf, Ketchup und Relish. Anschließend „the works“ wählen, den Hot Dog in den Behälter legen und servieren.'], bullets: ['Getoastetes Brötchen', 'Gegarte Wurst', 'Senf und Ketchup', 'Relish', '„The works“', 'In den Behälter legen und servieren'] },
      { title: 'Warum der Clip zum Meme wurde', paragraphs: ['Der Kunde isst den Hot Dog absichtlich auf verstörend-komische Weise. Clips mit Reaktionen darauf verbreiteten sich über TikTok, YouTube Shorts, Instagram, Facebook und itch.io-Kommentare.', '„Hotdog Eating Challenge“ ist eine Community-Bezeichnung, kein offizieller Modus. Veränderliche Aufruf- oder Like-Zahlen werden nicht als dauerhafte Fakten übernommen.'] },
      { title: 'Demo gegen Vollversion', paragraphs: ['Der Quick-Fix-Schauplatz ist auch in der belegten Vollversionsroute vorhanden. Die einzelnen Hot-Dog-Anweisungen sind jedoch nur für die Demo Zeile für Zeile bestätigt.', 'Ob jede Animation, Zutat und Dialogzeile am 6. August unverändert blieb, ist noch nicht bestätigt. Diese Trennung verhindert, dass Demo-Details pauschal zur finalen Fassung erklärt werden.'] },
      { title: 'Was die Szene nicht ist', paragraphs: ['Quick Fix ist kein wiederholbarer Restaurant-Simulator. Die Zubereitung dient als kurze Schichtaufgabe innerhalb einer linearen Horrorgeschichte.', 'Ein geheimes Rezept, eine Qualitätswertung oder ein alternatives Ende durch andere Zutaten ist nicht belegt. Solche Behauptungen bleiben noch nicht bestätigt.'] }
    ],
    faq: [
      { question: 'Wer ist in der Hot-Dog-Szene spielbar?', answer: 'Der Spieler steuert Hexy während ihrer Nachtschicht bei Quick Fix.' },
      { question: 'Ist die Szene offiziell?', answer: 'Ja. Die offizielle Demo-Beschreibung nennt Quick Fix und die fragwürdigen Hot Dogs ausdrücklich.' },
      { question: 'Ist der Clip ein eigener Spielmodus?', answer: 'Nein. Er ist Teil eines linearen Story-Kapitels.' },
      { question: 'Ist die Szene unverändert in der Vollversion?', answer: 'Quick Fix ist vorhanden; die exakte Übereinstimmung aller Demo-Details ist noch nicht bestätigt.' }
    ]
  },
  'release-date': {
    id: 'release-date', keyword: 'The Skin Stapler Erscheinungsdatum',
    title: 'The Skin Stapler Erscheinungsdatum und Plattformen',
    description: 'The Skin Stapler Erscheinungsdatum: Das Spiel erschien am 6. August 2026 für Windows. Hier stehen Steam, GOG, Demo-Datum, Preis und Plattformen.',
    eyebrow: 'Veröffentlichung geprüft',
    directAnswer: 'The Skin Stapler erschien am 6. August 2026 für Windows PC auf Steam und GOG. Die separate kostenlose Steam-Demo wurde bereits am 30. Januar 2026 veröffentlicht.',
    sections: [
      { title: 'Bestätigtes Veröffentlichungsdatum', paragraphs: ['Steam, GOG, die Publisher-Ankündigung und Berichte zum Start nennen den 6. August 2026. Damit ist das Datum kein geplantes Fenster mehr.', 'Einige Regionen zeigen wegen der Zeitzone den 7. August. Veraltete Einträge mit Q3 2026 oder 31. Dezember werden nicht übernommen.'] },
      { title: 'Plattformen zum Start', paragraphs: ['Die Vollversion erschien für Windows über Steam und GOG. GOG bietet eine DRM-freie Version und einen Offline-Installer.', 'PlayStation, Xbox, Nintendo Switch, Android, iOS und macOS werden in den ausgewerteten offiziellen Quellen nicht genannt. Veröffentlichungen dafür sind noch nicht bestätigt.'] },
      { title: 'Demo-Datum und Inhalt', paragraphs: ['Die Demo trägt die Steam-App-ID 4343530 und erschien am 30. Januar 2026. Sie dauert laut Store 30 bis 45 Minuten und enthält CCPD, Quick Fix und Gutters End.', 'Der größere Presse- und Creator-Schub kam im Februar. Das erklärt spätere Artikel, ändert aber nicht das Datum des Steam-Eintrags.'] },
      { title: 'Preis zum Start', paragraphs: ['Der reguläre Einführungspreis wurde mit 14,99 Euro beziehungsweise 14,99 US-Dollar dokumentiert. Steam und GOG boten bis zum 20. August 2026 einen Rabatt von 20 Prozent; GOG zeigte 11,99 Euro.', 'Preise unterscheiden sich nach Region, Steuer und späteren Aktionen. Der heutige Betrag muss deshalb direkt im Store geprüft werden.'] },
      { title: 'Version und offene Punkte', paragraphs: ['Steam nennt 16 Erfolge, Familienbibliothek und vollständige englische Sprachausgabe. GOG führte außerdem The Skin Jankers DLC im Paket.', 'Eine vollständige Patch-Historie, spätere Bundles und plattformübergreifende Spielstände sind in den Quellen nicht belegt. Diese Punkte sind noch nicht bestätigt.'] }
    ],
    faq: [
      { question: 'Wann erschien The Skin Stapler?', answer: 'Am 6. August 2026; einzelne regionale Store-Anzeigen können den 7. August nennen.' },
      { question: 'Auf welchen Plattformen ist es erhältlich?', answer: 'Bestätigt sind Steam und GOG für Windows PC.' },
      { question: 'Wann erschien die Demo?', answer: 'Die separate Steam-Demo erschien am 30. Januar 2026.' },
      { question: 'Gibt es eine PS5-Version?', answer: 'Eine PlayStation-Version ist in den ausgewerteten offiziellen Quellen noch nicht bestätigt.' }
    ]
  },
  'voice-cast': {
    id: 'voice-cast', keyword: 'The Skin Stapler Sprecher',
    title: 'The Skin Stapler Sprecher: Bestätigte Besetzung',
    description: 'The Skin Stapler Sprecher: Die bestätigte englische Besetzung umfasst Dick Slater, Robbie Knox, Fefe, Hexy, Layna, Blair und weitere Rollen.',
    eyebrow: 'Englische Originalbesetzung',
    directAnswer: 'The Skin Stapler ist vollständig auf Englisch vertont. Der belegte Cast umfasst RJ Green, Daniel Suraci, HexyIRL, Layna Lazar, Runebee, Luna Arcana, Blairvira, FeFe, Scaroline und KingWoolz; HexyIRL spricht zwei Rollen.',
    sections: [
      { title: 'Bestätigte Rollen', paragraphs: ['Ein Cast-Poster ordnet elf benannte Figuren zehn öffentlichen Darstellerprofilen zu. Zwei unabhängige Fan-Quellen geben dieselbe Zuordnung wieder; einzelne Entwickler- und Darstellerposts stützen mehrere Rollen.', 'Steam bestätigt unabhängig davon, dass alle Figuren vollständig vertont sind. Andere offizielle Audiosprachen als Englisch werden nicht geführt.'], bullets: ['Dick Slater – RJ Green / @RJGreenVA', 'Robbie Knox – Daniel Suraci / @Daniel_Suraci', 'Hexy und The Skin Stapler – @HexyIRL', 'Nurse Layna – Layna Lazar', 'Bee – @Runebee', 'Luna – Luna Arcana', 'Blair – @Blairvira', 'Fefe – FeFe / @CovfefeChan', 'Scaroline – @Scarolinetv_', 'DJ Woolz – @KingWoolz'] },
      { title: 'Slater, Robbie und Hexy', paragraphs: ['RJ Green spricht den abgebrühten Ermittler Dick Slater, Daniel Suraci dessen jungen Partner Robbie Knox. Der Cast-Poster ist der direkte Beleg für beide Zuordnungen.', 'HexyIRL übernimmt sowohl Hexy aus Quick Fix als auch den Skin Stapler. Diese Doppelrolle wird durch Poster-Wiedergaben und einen Beitrag des Entwicklers gestützt.'] },
      { title: 'Fefe und die spätere Cast-Änderung', paragraphs: ['Tainted Pact kündigte FeFe am 3. Juni 2026 als neues Cast-Mitglied an. Der endgültige Poster ordnet ihr die Figur Fefe zu.', 'Eine frühere Liste enthielt @wolfatyourgate und noch nicht @CovfefeChan. Ob @wolfatyourgate im finalen Abspann weiterhin auftaucht, ist noch nicht bestätigt.'] },
      { title: 'Sprache und Synchronfassungen', paragraphs: ['Steam listet Englisch für Oberfläche, vollständige Sprachausgabe und Untertitel. Die deutsche Oberfläche dieser Fan-Seite bedeutet nicht, dass das Spiel eine deutsche Synchronisation besitzt.', 'Ein offizieller deutscher, portugiesischer oder spanischer Dub-Cast ist nicht belegt. Fan-Synchronisationen oder spätere Sprachupdates bleiben noch nicht bestätigt.'] },
      { title: 'Ist die Liste vollständig?', paragraphs: ['Die Liste umfasst die durch den Cast-Poster gestützten Hauptrollen. Der vollständige laufende Abspann wurde in der Recherche nicht erfasst.', 'Nebenstimmen, Cameos oder spätere Patch-Ergänzungen könnten fehlen. „Bestätigte Besetzung“ bedeutet daher nicht automatisch jede im Spiel hörbare Stimme.'] }
    ],
    faq: [
      { question: 'Wer spricht Dick Slater?', answer: 'RJ Green beziehungsweise @RJGreenVA ist als Dick Slater aufgeführt.' },
      { question: 'Wer spricht Robbie Knox?', answer: 'Daniel Suraci beziehungsweise @Daniel_Suraci spricht Robbie.' },
      { question: 'Wer spricht den Skin Stapler?', answer: '@HexyIRL spricht sowohl den Killer als auch Hexy.' },
      { question: 'Gibt es eine deutsche Synchronisation?', answer: 'Nein, in den ausgewerteten offiziellen Angaben ist nur englische Sprachausgabe bestätigt.' }
    ]
  }
};
