<template>
    <section :aria-labelledby="headingId" class="w-full">
      <!-- Optional heading -->
      <header v-if="title" class="mb-8">
        <h2 :id="headingId" class="text-white text-3xl font-bold">{{ title }}</h2>
      </header>

      <div v-if="sortedArticles.length === 0" class="text-white italic">
        Keine Neuigkeiten vorhanden.
      </div>

      <ul v-else role="list" class="space-y-8">
        <li
          v-for="(a, idx) in sortedArticles"
          :key="a.id || idx"
          class="pt-8"
          :class="{ 'text-white border-t border-gray-300': idx !== 0 }"
        >
          <div class="grid grid-cols-1 md:grid-cols-12 md:gap-8">
            <!-- Date -->
            <time
              class="md:col-span-3 text-xl font-medium tracking-wide font-architect text-white"
              :datetime="isoDate(a.date)"
              >{{ formatMonthYear(a.date) }}</time
            >

            <!-- Content -->
            <div class="md:col-span-9 space-y-3">
              <p class="font-semibold leading-snug text-white">
                {{ a.title }}
              </p>

              <p v-if="a.body" class="leading-relaxed text-white">
                {{ a.body }}
              </p>

              <!-- Optional list of bullets -->
              <ul v-if="a.points?.length" class="list-disc pl-6 text-gray-800">
                <li v-for="(p, i) in a.points" :key="i">{{ p }}</li>
              </ul>

              <!-- Optional link -->
              <div v-if="a.link" class="pt-1">
                <a
                  :href="a.link.href"
                  class="underline hover:no-underline font-medium"
                  target="_blank"
                  rel="noopener"
                >
                  {{ a.link.label || 'Mehr erfahren' }}
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </template>

  <script setup lang="ts">
  import { computed } from 'vue'

  const props = defineProps({
    articles: { type: Array, default: () => [] },
    title: { type: String, default: '' },
    newestFirst: { type: Boolean, default: true },
  })

  const headingId = `news-heading-${Math.random().toString(36).slice(2, 8)}`

  const sortedArticles = computed(() => {
    const arr = [...props.articles]
    arr.sort((a, b) => new Date(a.date) - new Date(b.date))
    return props.newestFirst ? arr.reverse() : arr
  })

  function isoDate(d) {
    return new Date(d).toISOString().slice(0, 10)
  }

  function formatMonthYear(d) {
    const dt = new Date(d)
    return new Intl.DateTimeFormat('de-DE', {
      month: 'long',
      year: 'numeric',
    }).format(dt)
  }
  </script>

  <style scoped>
  /* no background styles on purpose */
  </style>
