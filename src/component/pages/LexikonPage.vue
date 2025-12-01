<!-- src/component/pages/LexikonPage.vue -->
<template>
  <main class="parallax-main min-h-screen bg-[#2c3e50] relative overflow-hidden">
    <!-- Background elements to give a forest vibe -->
    <div class="absolute inset-0 opacity-10 pointer-events-none">
      <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 py-10 relative z-10">
      <h1 v-if="title" class="text-4xl font-bold mb-8 text-[#ffffff] text-center font-serif tracking-widest">{{ title }}</h1>

      <div v-if="loading" class="flex justify-center items-center h-64">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#e0d5c1]"></div>
      </div>

      <div v-else-if="error" class="text-center text-red-400 p-8 bg-black/20 rounded-lg">
        <p>Fehler beim Laden der Pilze: {{ error }}</p>
        <button @click="fetchMushrooms" class="mt-4 px-4 py-2 bg-[#8b4513] text-white rounded hover:bg-[#a0522d]">Erneut versuchen</button>
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
import MushroomBook from '@/component/MushroomBook.vue'

defineProps({
  title: { type: String, default: 'Pilzlexikon' }
})

const mushrooms = ref<Mushroom[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const fetchMushrooms = async () => {
  loading.value = true
  error.value = null
  try {
    // Fetch all mushrooms, sorted by name
    const records = await pb.collection('mushroooms').getFullList<Mushroom>({
      sort: 'name',
    })
    mushrooms.value = records
  } catch (e: any) {
    console.error('Error fetching mushrooms:', e)
    // For demo purposes, if PB fails, we might want to show some dummy data or just the error
    // error.value = e.message || 'Unbekannter Fehler'

    // Fallback to dummy data if connection fails (for development/demo without running PB)
    console.warn('Falling back to dummy data due to error')
    mushrooms.value = getDummyMushrooms()
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchMushrooms()
})

// Dummy data for fallback/testing
const getDummyMushrooms = (): Mushroom[] => {
  return [
    {
      id: '1',
      collectionId: 'demo',
      collectionName: 'mushrooms',
      created: '',
      updated: '',
      name: 'Fliegenpilz',
      latin_name: 'Amanita muscaria',
      description: 'Der Fliegenpilz ist wohl der bekannteste Giftpilz. Sein roter Hut mit den weißen Punkten ist unverwechselbar. Er gilt als Glückssymbol, ist aber giftig.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Amanita_muscaria_3_vliegenzwammen_op_rij.jpg/640px-Amanita_muscaria_3_vliegenzwammen_op_rij.jpg',
      size: 'Hut 5-20 cm breit, Stiel bis 20 cm hoch',
      location: 'Meist unter Birken oder Fichten, saure Böden',
      season: 'Juli bis November',
      edibility: 'Giftig (enthält Ibotensäure und Muscimol)',
      confusion_risk: 'Kaiserling (essbar, aber gelbe Lamellen)',
      tipp: 'Finger weg! Aber schön anzusehen.',
      mushroom_3d_model: ''
    },
    {
      id: '2',
      collectionId: 'demo',
      collectionName: 'mushrooms',
      created: '',
      updated: '',
      name: 'Pfifferling',
      latin_name: 'Cantharellus cibarius',
      description: 'Der Pfifferling hat eine kräftig dottergelbe bis goldgelbe Farbe. Sein Hut ist anfangs gewölbt, später trichterförmig mit unregelmäßig gewelltem Rand.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Chanterelle_Cantharellus_cibarius.jpg/640px-Chanterelle_Cantharellus_cibarius.jpg',
      size: 'Hut 2-10 cm, Stiel kurz und fest',
      location: 'Laub- und Nadelwälder, gerne bei Fichten und Buchen',
      season: 'Juni bis November',
      edibility: 'Hervorragender Speisepilz',
      confusion_risk: 'Falscher Pfifferling (wenig giftig, aber fade)',
      tipp: 'Am besten schmecken sie in Butter gebraten mit etwas Petersilie.',
      mushroom_3d_model: ''
    },
    {
      id: '3',
      collectionId: 'demo',
      collectionName: 'mushrooms',
      created: '',
      updated: '',
      name: 'Steinpilz',
      latin_name: 'Boletus edulis',
      description: 'Der König der Pilze. Brauner Hut, weißes bis olivgelbes Röhrenfutter, dicker bauchiger Stiel mit weißem Netz.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Boletus_edulis_EtgHolzmoeger.jpg/640px-Boletus_edulis_EtgHolzmoeger.jpg',
      size: 'Hut 5-25 cm, Stiel bis 15 cm dick',
      location: 'Nadel- und Laubwald, unter Fichten, Buchen',
      season: 'Juli bis November',
      edibility: 'Ausgezeichneter Speisepilz',
      confusion_risk: 'Gallenröhrling (bitter, dunkles Netz)',
      tipp: 'Die Röhren sollten bei älteren Exemplaren entfernt werden.',
      mushroom_3d_model: ''
    }
  ]
}
</script>
