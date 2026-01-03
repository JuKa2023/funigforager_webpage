export type NewsItem = {
  id?: string
  date: string | Date
  title: string
  body?: string
  points?: string[]
  link?: { href: string; label?: string }
}

export const newsItems: NewsItem[] = [
  {
    id: '2026-01-release',
    date: '2026-01-01',
    title: 'Offizieller Release – Spiel out now',
    body: 'Der offizielle Release ist live – viel Spaß beim Spielen!',
  },
  {
    id: '2025-11-beta',
    date: '2025-11-01',
    title: 'Beta-Release steht bevor!',
    body: 'Die erste spielbare Version ist fast fertig. In Kürze kannst du durch den digitalen Wald streifen und dein Wissen testen.',
  },
]
