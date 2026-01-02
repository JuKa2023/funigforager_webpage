<!-- src/component/layout/BasePage.vue -->
<template>
  <HeroHeader
    title="Willkommen im Wald der Pilze"
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
  <!-- 
    Konfiguration für HeroHeader:
    - fullScreen: Nimmt 100vh ein
    - sticky: Bleibt fixiert, während der Inhalt darüber scrollt
    - enableScrollEffects: Aktiviert Skalierungs- und Opazitätsänderungen beim Scrollen
    - scrollText/fadeTextOnScroll: Animiert den Titeltext beim Scrollen
  -->
  <main class="parallax-main">
    <div class="relative z-10 pt-[120px] sm:pt-[180px]">
      <section class="max-w-5xl mx-auto px-4 py-10">
        <p class="text-m mb-6 text-white">
          Fungi Forager ist ein interaktives Lernspiel, das dich in eine 3D-Waldwelt entführt. Hier
          lernst du spielerisch über echte Pilzarten zu bestimmen.
        </p>
        <div class="flex justify-center gap-16 mt-16">
          <Button variant="white">Über Uns</Button>
          <Button variant="red">Zum Spiel</Button>
        </div>
      </section>
      <section class="max-w-5xl mx-auto px-4 py-10 mt-24">
        <h2 class="text-3xl font-bold mb-6 text-white">Unsere Mission</h2>
        <p class="text-m mb-6 text-white">
          Immer weniger Menschen kennen sich mit der Natur aus. Mit Fungi Forager möchten wir dieses
          Wissen zurückbringen.
        </p>
      </section>
      <div class="max-w-5xl mx-auto px-4 py-10 mt-24">
        <NewsSection title="Neuigkeiten aus dem Wald" :articles="articles" />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NewsSection from '../News.vue'
import HeroHeader from '../HeroHeader.vue'
import Button from '../Button.vue'
import { newsItems } from '../../data/news.ts'
import heroImage from '../../assets/hintergrundbild/wald_von_oben.png'
const articles = ref(newsItems)
</script>
