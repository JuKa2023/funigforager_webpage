# Fungi Forager Webseite

Ein Projekt von:
- [@JuKa2023](https://github.com/JuKa2023)
- [@Nadiagiliberti](https://github.com/NadiaGiliberti)

„Fungi Forager“ ist ein interaktives Lernspiel, das Spieler:innen in eine realistisch gestaltete Waldumgebung entführt, um fundiertes Basiswissen zur Pilzbestimmung zu 
vermitteln. Der Spielumfang umfasst die Suche, Erfassung und Klassifizierung von ca. 20 ausgewählten Pilzarten (essbar, ungeniessbar, giftig), die im Laufe des Spiels im integrierten Lexikon freigeschaltet und mit Bildern, Merkmalen und Hintergrundwissen versehen werden. Die zentralen Lernziele sind:
• Die Unterscheidung zwischen essbaren und giftigen Pilzen
• Das Erkennen typischer Merkmale (Farbe, Lamellenstruktur und Hutform)

## Verwendete Ressourcen

### Schriftarten
- **[Architects Daughter](https://fonts.google.com/specimen/Architects+Daughter)** - Verwendet für Überschriften und dekorativen Text
- **[Montserrat](https://fonts.google.com/specimen/Montserrat)** - Verwendet für Fließtext (Schriftstärken: 400, 600, 700, inkl. Kursiv)

Beide Schriftarten werden von Google Fonts geladen und als CSS Custom Properties in `src/style.css` definiert.

### Eigene Assets
- **3D-Modelle** - Pilz-GLB-Modelle gespeichert im `public/mushroom/` Verzeichnis

### Technologien
- **Vue 3** - Progressives JavaScript Framework
- **TypeScript** - Typsicheres JavaScript
- **Tailwind CSS** - Utility-First CSS Framework
- **PocketBase** - Backend-Datenbank für Pilzdaten
- **Three.js** - 3D-Modell-Rendering

## Projekt-Setup

### Voraussetzungen
- Node.js (v20.19.0 oder v22.12.0+)
- npm (kommt mit Node.js)

### Installation

1. **Abhängigkeiten installieren:**
   ```sh
   npm install
   ```

2. **PocketBase einrichten:**
   
   PocketBase wird als Backend-Datenbank verwendet. Das Schema ist in `pocketbase_schema.md` dokumentiert.
   
   - PocketBase von [pocketbase.io](https://pocketbase.io/docs/) herunterladen
   - Die PocketBase-Executable im Projektstamm platzieren
   - PocketBase-Server starten:
     ```sh
     ./pocketbase serve
     ```
   - Admin-UI unter `http://127.0.0.1:8090/_/` aufrufen
   - Eine Collection namens `mushroooms` mit den in `pocketbase_schema.md` angegebenen Feldern erstellen

### Entwicklung

**Development-Server starten:**
```sh
npm run dev
```

**PocketBase starten (in einem separaten Terminal):**
```sh
./pocketbase serve
```

Die Anwendung ist unter `http://localhost:5173` verfügbar (oder dem Port, der in Ihrem Terminal angezeigt wird).

### Build für Produktion

**Typ-Prüfung, Kompilierung und Minifizierung:**
```sh
npm run build
```

**Produktions-Build Vorschau:**
```sh
npm run preview
```

### Code-Qualität

**Linting mit ESLint:**
```sh
npm run lint
```

**Formatierung mit Prettier:**
```sh
npm run format
```

