<template>
  <HeroHeader
    title="Wer wir sind"
    :image="heroImage"
    :fullScreen="true"
    :sticky="true"
    :parallax="false"
    :enableScrollEffects="true"
    :maxScale="1.2"
    :baseOverlayOpacity="0.35"
    :maxExtraOverlayOpacity="0.55"
    :scrollText="true"
    :textScrollFactor="0.4"
    :maxTextShiftPx="150"
    :fadeTextOnScroll="true"
    :textFadeStrength="1.2"
  />
  <main class="relative z-10">
    <section
      class="relative pt-[120px] sm:pt-[180px] mx-auto max-w-5xl px-6 py-12 md:py-16 space-y-14 md:space-y-20"
    >
      <!-- Wer wir sind -->
      <div class="space-y-4">
        <h2 class="text-2xl md:text-3xl font-semibold text-white">Wer wir sind</h2>
        <p class="max-w-prose leading-relaxed text-white">
          Wir sind Juliette Kauflin und Nadia Giliberti, zwei Studentinnen mit Leidenschaft für
          Design, Natur und spielerisches Lernen.
        </p>
        <p class="max-w-prose leading-relaxed text-white">
          Dieses Projekt entstand im Rahmen unseres Studiums als kreative Antwort auf ein reales
          Problem: viele Kinder und Jugendliche haben kaum noch Bezug zur Natur. Mit
          <span class="italic">Fungi Forager</span>
          möchten wir das ändern: digital, interaktiv und mit Spass am Entdecken.
        </p>
      </div>

      <!-- Das Projekt in Kürze -->
      <div class="space-y-4">
        <h2 class="text-2xl md:text-3xl font-semibold text-white">Das Projekt in Kürze</h2>
        <p class="max-w-prose leading-relaxed text-white">
          <span class="italic">Fungi Forager</span> kombiniert moderne 3D-Technik mit Umweltbildung.
          Unser Ziel ist es, Wissen über Pilze und Natur wieder spannend und zugänglich zu machen, das nicht durch Bücher, sondern durch das Erleben in einem sicheren Raum.
        </p>
        <p class="max-w-prose leading-relaxed text-white">
          Das Projekt wurde von uns eigenständig konzipiert, gestaltet und umgesetzt, von der Idee bis zum spielbaren Prototyp wurde alles selbst umgesetzt.
        </p>
      </div>

      <!-- Team -->
      <div class="space-y-6">
        <h2 class="text-2xl md:text-3xl font-semibold text-white">Unser Team</h2>

        <ul class="grid grid-cols-1 md:grid-cols-2 gap-10">
          <li v-for="member in team" :key="member.name" class="relative group">
            <!--
              Avatar überlappt die Karte
              - Absolute Positionierung, um es teilweise ausserhalb der Karte zu platzieren
              - group-hover:scale-110 für Zoom-Effekt beim Hover
              - origin-bottom-left stellt sicher, dass es vom richtigen Punkt aus wächst
             -->
            <img
              :src="member.avatar"
              :alt="member.name"
              class="absolute top-4 -left-4 w-40 md:w-50 select-none drop-shadow-2xl pointer-events-none transition-transform duration-300 ease-out group-hover:scale-110 origin-bottom-left z-10"
            />

            <!--
              Karten-Styling
              - group-hover:scale-105 für leichten Vergrösserungseffekt
              - group-hover:bg-amber-200 um den Hintergrund beim Hover leicht abzudunkeln
            -->
            <article
              class="bg-amber-200/90 text-emerald-950 rounded-s shadow-xl p-6 pl-28 md:pl-32 min-h-38 flex flex-col justify-center transition-transform duration-300 ease-out group-hover:scale-105 group-hover:bg-amber-200"
            >
              <h3 class="text-lg md:text-xl font-semibold">{{ member.name }}</h3>
              <ul class="mt-2 space-y-1 text-sm md:text-base">
                <li v-for="(r, i) in member.roles" :key="i" class="flex items-start gap-2">
                  <span aria-hidden="true">✦</span>
                  <span>{{ r }}</span>
                </li>
              </ul>
            </article>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import HeroHeader from '../HeroHeader.vue'
import heroImage from '../../assets/hintergrundbild/pilzwald.png'
import JulieImage from '../../assets/3Dcharacter_julie.png'
import NadiaImage from '../../assets/3Dcharacter_nadia.png'

type Member = {
  name: string
  avatar: string
  roles: string[]
}

// Daten, die die in der Kartenliste anzuzeigenden Teammitglieder definieren
const team: Member[] = [
  {
    name: 'Nadia Giliberti',
    avatar: NadiaImage,
    roles: ['3D-Design', 'Game Design', 'Logik'],
  },
  {
    name: 'Juliette Kauflin',
    avatar: JulieImage,
    roles: ['UX/ Webdesign', '3D-Design', 'Visuals'],
  },
]
</script>

<style scoped>
/* optional micro-tweaks */
h1 {
  letter-spacing: 0.02em;
}
</style>
