<!-- src/component/layout/BasePage.vue -->
<template>
  <HeroHeader
    title="Willkommen im Wald der Pilze"
    :image="heroImage"
    :fullScreen="true"
    :sticky="true"
    :parallax="true"
  />
  <main class="parallax-main relative z-10 pt-10 sm:pt-16">
    <section>
      <p class="text-m mb-6 text-white">
        Fungi Forager ist ein interaktives Lernspiel, das dich in eine 3D-Waldwelt entführt. Hier
        lernst du spielerisch über echte Pilzarten zu bestimmen.
      </p>
      <div class="flex justify-center gap-4">
        <Button variant="white">Über Uns</Button>
        <Button variant="red">Zum Spiel</Button>
      </div>
    </section>
    <section>
      <h2 class="text-3xl font-bold mb-6">Unsere Mission</h2>
      <p class="text-m mb-6 text-white">
        Immer weniger Menschen kennen sich mit der Natur aus. Mit Fungi Forager möchten wir dieses
        Wissen zurückbringen.
      </p>
    </section>
    <div class="max-w-5xl mx-auto px-4 py-10">
      <NewsSection title="Neuigkeiten aus dem Wald" :articles="articles" />
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import NewsSection from '../News.vue'
import HeroHeader from '../HeroHeader.vue'
import Button from '../Button.vue'
import { newsItems } from '../../data/news.ts'
import heroImage from '../../assets/hintergrundbild/platzhalter_wald.jpeg'
const articles = ref(newsItems)
</script>
