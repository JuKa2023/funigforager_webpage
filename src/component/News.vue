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
        class="pt-8 news-item"
        :class="{ 'text-white border-t border-gray-300': idx !== 0 }"
        :style="{ animationDelay: `${idx * 0.1}s` }"
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
import { computed, onMounted } from 'vue'
import type { PropType } from 'vue'

interface ArticleLink {
  href: string
  label?: string
}

interface Article {
  id?: string
  date: string | Date
  title: string
  body?: string
  points?: string[]
  link?: ArticleLink
}

const props = defineProps({
  articles: { type: Array as PropType<Article[]>, default: () => [] },
  title: { type: String, default: '' },
  newestFirst: { type: Boolean, default: true },
})

const headingId = `news-heading-${Math.random().toString(36).slice(2, 8)}`

const sortedArticles = computed(() => {
  const arr = [...props.articles]
  arr.sort((a: Article, b: Article) => new Date(a.date).getTime() - new Date(b.date).getTime())
  return props.newestFirst ? arr.reverse() : arr
})

function isoDate(d: string | Date): string {
  return new Date(d).toISOString().slice(0, 10)
}

function formatMonthYear(d: string | Date): string {
  const dt = new Date(d)
  return new Intl.DateTimeFormat('de-DE', {
    month: 'long',
    year: 'numeric',
  }).format(dt)
}

// Intersection Observer to trigger animation when items come into view
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target) // Stop observing once animated
        }
      })
    },
    {
      threshold: 0.1, // Trigger when 10% of the item is visible
      rootMargin: '0px 0px -50px 0px', // Trigger slightly before item enters viewport
    },
  )

  // Observe all news items
  const newsItems = document.querySelectorAll('.news-item')
  newsItems.forEach((item) => observer.observe(item))
})
</script>

<style scoped>
/* News item animation - only triggers when in view */
.news-item {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.6s ease-out,
    transform 0.6s ease-out;
}

.news-item.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
