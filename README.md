# Fungi Forager Webseite

![Fungi Forager Header](public/readme_header.jpeg)

Ein Projekt von:

- [@JuKa2023](https://github.com/JuKa2023)
- [@Nadiagiliberti](https://github.com/NadiaGiliberti)

„Fungi Forager“ ist ein interaktives Lernspiel, das Spieler:innen in eine Waldumgebung entführt, um Basiswissen zur Pilzbestimmung zu vermitteln. Der Spielumfang umfasst die Suche, Erfassung und Klassifizierung von ausgewählten Pilzarten (essbar oder giftig), die im integrierten Lexikon freigeschaltet und mit Bildern, Merkmalen und Hintergrundwissen versehen werden. Die Website dient als begleitende Website, die als zentraler Informations-Hub dient. Dieses Konzept orientiert sich an etablierten Modellen aus dem Mobile- und Konsolenbereich (wie etwa Clash of Clans), bei denen die Anwendung lokal läuft und durch eine Website mit Neuigkeiten und Hilfestellungen ergänzt wird.

Zentrale Lernziele:

- Unterscheidung zwischen essbaren und giftigen Pilzen
- Erkennen typischer Merkmale (Farbe, Lamellenstruktur, Hutform)

## Funktionsumfang

Was kann das Tool?

- Interaktives Pilzlexikon mit detaillierten Einträgen und 3D-Modelle der Pilze
- Begleitende Informationen zum Spiel Fungi Forager

Was funktioniert noch nicht / bekannte Einschränkungen?

- 3D-Modelle der Pilze werden minim unterschiedlich gross angezeigt. 
- Ansonsten keine uns bekannten Bugs. Gerne melden, wenn es mehr gibt.

## Datenstruktur

Die Pilzdaten werden als statische JSON-Datei gepflegt:

- Datei: `src/data/mushrooms.json`
- Typisierung: `src/types.ts`

Best Practices:

- Harmonisierte Feldnamen in camelCase
- Strukturierte Arrays für Mehrfachwerte (`confusionRisk`)
- Explizite Statuswerte für Logik (`edibilityStatus`)
- Leere Inhalte als `null` statt leere Strings

Feldübersicht:

| Feld | Beschreibung |
| --- | --- |
| `name` | Deutscher Name |
| `latinName` | Wissenschaftlicher Name |
| `description` | Aussehen / Merkmale |
| `size` | Grössenangaben |
| `location` | Standort / Vorkommen |
| `season` | Erscheinungszeit |
| `edibility` | Speisewert (Text) |
| `edibilityStatus` | Normalisierte Logik: `edible`, `poisonous`, `unknown` |
| `confusionRisk` | Verwechslungsgefahr (Array) |
| `tip` | Zusätzlicher Hinweis |
| `modelPath` | Pfad zum 3D-Modell (optional) |
| `updated` | Letzte Aktualisierung |

## Struktur & Code-Lesbarkeit

- Komponentenstruktur nach Seiten und UI-Elementen in `src/component/`
- Typen zentral in `src/types.ts`
- Klar benannte Routen in `src/router/index.ts`
- Einheitliche Formatierung via ESLint + Prettier

## Verwendete Ressourcen

### Schriftarten

- **[Architects Daughter](https://fonts.google.com/specimen/Architects+Daughter)** für die Überschriften
- **[Montserrat](https://fonts.google.com/specimen/Montserrat)** für den Fliesstext

### Eigene Assets

- **3D-Modelle**: GLB-Modelle in `public/mushroom/`

### Technologien

- **Vue 3**: UI-Framework
- **TypeScript** : Typsicherheit
- **Tailwind CSS**: Styling
- **Three.js**: 3D-Rendering

## Projekt-Setup

### Voraussetzungen

- Node.js (v20.19.0 oder v22.12.0+)
- npm (kommt mit Node.js)

### Installation

```sh
npm install
```

### Entwicklung

```sh
npm run dev
```

Die Anwendung ist unter `http://localhost:5173` verfügbar (oder dem Port, der in Ihrem Terminal angezeigt wird).

### Build für Produktion

```sh
npm run build
```

```sh
npm run preview
```

### Code-Qualität

```sh
npm run lint
```

```sh
npm run format
```

## Learnings & Reflexion

- Datenstruktur früh zu definieren vereinfacht UI und Logik.
- Konsistente Feldnamen verhindern Layout- und Filterfehler.
