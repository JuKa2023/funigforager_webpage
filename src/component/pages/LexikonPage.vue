<template>
  <main class="lexikon-page min-h-screen relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 py-10 relative z-10">
      <h1
        v-if="title"
        class="text-4xl font-bold mb-8 text-[#ffffff] text-center font-serif tracking-widest"
      >
        {{ title }}
      </h1>

      <div v-if="loading" class="flex justify-center items-center h-64">
        <div
          class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e0d5c1]"
        ></div>
      </div>

      <div v-else-if="error" class="text-center text-red-400 p-8 bg-black/20 rounded-lg">
        <p>Fehler beim Laden der Pilze: {{ error }}</p>
        <button
          @click="fetchMushrooms"
          class="mt-4 px-4 py-2 bg-[#8b4513] text-white rounded hover:bg-[#a0522d]"
        >
          Erneut versuchen
        </button>
      </div>

      <div
        v-else-if="mushrooms.length === 0"
        class="text-center text-[#e0d5c1] p-8 bg-black/20 rounded-lg"
      >
        <p class="text-xl font-serif">
          🍄 Es konnten keine Pilze im Wald gefunden werden, komme später wieder.
        </p>
      </div>

      <MushroomBook v-else :mushrooms="mushrooms" />

      <slot />
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { pb } from '@/lib/pocketbase'
import type { Mushroom } from '@/types'
import MushroomBook from '@/component/lexikon/MushroomBook.vue'

defineProps({
  title: { type: String, default: 'Pilzlexikon' },
})

const mushrooms = ref<Mushroom[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const fetchMushrooms = async () => {
  loading.value = true
  error.value = null
  try {
    // Ruft alle Pilze ab, sortiert nach Namen
    const records = await pb.collection('mushrooms').getFullList<Mushroom>({
      sort: 'name',
    })
    mushrooms.value = records
  } catch (e: any) {
    console.error('Error fetching mushrooms:', e)
    error.value = e.message || 'Unbekannter Fehler'
  } finally {
    // Ladezustand beenden, unabhängig von Erfolg oder Misserfolg
    loading.value = false
  }
}

onMounted(() => {
  fetchMushrooms()
})
</script>

<style scoped>
.lexikon-page {
  background: linear-gradient(to bottom, #031600 0%, #0d2818 50%, rgb(0, 0, 0) 100%);
}
</style>
