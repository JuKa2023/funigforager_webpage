<!-- src/component/layout/BasePage.vue -->
<template>
  <main class="min-h-screen parallax-main text-white">
    <div class="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <!-- Page title -->
      <h1 class="text-center text-3xl md:text-5xl font-semibold tracking-wide mb-12 md:mb-16">
        Hinweis
      </h1>

      <!-- Intro lead -->
      <p class="mx-auto max-w-prose text-white leading-relaxed mb-10">
        Die Inhalte dieses Pilzsammel-Spiels und -Lexikons dienen ausschliesslich zu Unterhaltungs- und
        Lernzwecken. Sie stellen keine verlässliche Entscheidungsgrundlage für das tatsächliche
        Sammeln wildwachsender Pilze dar.
      </p>

      <!-- Sections -->
      <ul class="space-y-10 md:space-y-12">
        <li v-for="(s, i) in sections" :key="i" class="space-y-2">
          <h2 class="text-xl md:text-2xl font-semibold text-white">
            {{ s.title }}
          </h2>
          <p class="max-w-prose text-white leading-relaxed">
            {{ s.body }}
          </p>
        </li>
      </ul>

      <!-- Footer acceptance note -->
      <p class="mt-12 md:mt-16 max-w-prose text-sm md:text-base text-white leading-relaxed">
        Durch die Nutzung dieses Spiels und Lexikons erkennst du an, dass du die oben genannten
        Hinweise gelesen, verstanden und akzeptiert hast.
      </p>
    </div>
  </main>
</template>

<script setup lang="ts">
type Section = {
  title: string
  body: string
}

const sections: Section[] = [
  {
    title: 'Kein Ersatz für Expertenwissen',
    body:
      'Unser Spiel und das begleitende Pilzlexikon können eine fachkundige Beratung nicht ersetzen. ' +
      'Pilze sicher zu bestimmen, erfordert langjährige Erfahrung und botanisch-mykologisches Fachwissen.'
  },
  {
    title: 'Unverzichtbare Expertenkontrolle',
    body:
      'Bevor du wild wachsende Pilze sammelst oder verhst, müssen die Exemplare unbedingt ' +
      'von einem qualifizierten Pilzsachverständigen oder einer anerkannten Pilzberatungsstelle ' +
      'begutachtet und freigegeben werden.'
  },
  {
    title: 'Haftungsausschluss',
    body:
      'Wir übernehmen keinerlei Haftung für Schäden, Vergiftungen oder sonstige Folgen, die durch ' +
      'eigenmächtiges Sammeln und Verzehren von Pilzen entstehen. Jegliche Nutzung der hier gezeigten ' +
      'Informationen erfolgt auf eigenes Risiko.'
  },
  {
    title: 'Keine Garantien',
    body:
      'Trotz grösster Sorgfalt können weder Vollständigkeit noch Richtigkeit der Angaben garantiert werden. ' +
      'Variationen in Aussehen, Standort und Entwicklungsstadium einzelner Pilzarten können eine sichere ' +
      'Bestimmung erschweren oder unmöglich machen.'
  }
]
</script>

<style scoped>
/* Optional: gentle heading spacing similar to your screenshot */
h1 { letter-spacing: 0.02em; }
</style>