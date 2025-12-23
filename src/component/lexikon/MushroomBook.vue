<template>
  <div class="book-container flex justify-center items-center p-8">
    <div class="book relative flex w-full max-w-6xl aspect-[3/2] shadow-2xl rounded-sm overflow-hidden bg-[#E5BE7F]">
      <!-- Left Page -->
      <div class="page left-page flex-1 p-8 border-r border-[#9E8048] relative">
        <div v-if="currentMushroomLeft" class="h-full pb-8 overflow-y-auto pr-2 custom-scrollbar">
          <h2 class="text-4xl font-handwriting mb-3 text-gray-800">{{ currentMushroomLeft.name }}</h2>

          <!-- 3D Model Viewer -->
          <div class="float-left w-[45%] mr-4 mb-3">
            <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden border-4 border-[#e8dcc5] shadow-inner">
              <MushroomModelViewer
                v-if="currentMushroomLeft.mushroom_3d_model"
                :modelPath="currentMushroomLeft.mushroom_3d_model"
                :edibility="getEdibilityType(currentMushroomLeft)"
                class="w-full h-full"
              />
            </div>
          </div>

          <!-- Flowing Text Content -->
          <div class="font-serif text-gray-700 text-sm">
            <div v-if="currentMushroomLeft.latin_name" class="mb-3">
              <span class="font-architect font-bold block text-base">Latein</span>
              <p class="font-montserrat text-xs leading-relaxed">{{ currentMushroomLeft.latin_name }}</p>
            </div>

            <div v-if="currentMushroomLeft.description" class="mb-3">
              <span class="font-architect font-bold block text-base">Aussehen</span>
              <p class="font-montserrat text-xs leading-relaxed">{{ currentMushroomLeft.description }}</p>
            </div>

            <div v-if="currentMushroomLeft.size" class="mb-3">
              <span class="font-architect font-bold block text-base">Grösse</span>
              <p class="font-montserrat text-xs">{{ currentMushroomLeft.size }}</p>
            </div>

            <div v-if="currentMushroomLeft.location" class="mb-3">
              <span class="font-architect font-bold block text-base">Standort</span>
              <p class="font-montserrat text-xs">{{ currentMushroomLeft.location }}</p>
            </div>

            <div v-if="currentMushroomLeft.season" class="mb-3">
              <span class="font-architect font-bold block text-base">Erscheinungszeit</span>
              <p class="font-montserrat text-xs">{{ currentMushroomLeft.season }}</p>
            </div>

            <div v-if="currentMushroomLeft.edibility" class="mb-3">
              <span class="font-architect font-bold block text-base">Speisewert</span>
              <p class="font-montserrat text-xs" :class="{'text-green-700': isEdible(currentMushroomLeft), 'text-red-700': isPoisonous(currentMushroomLeft)}">
                {{ currentMushroomLeft.edibility }}
              </p>
            </div>

            <div v-if="currentMushroomLeft.confusion_risk" class="mb-3">
              <span class="font-architect font-bold block text-base">Verwechslungsgefahr</span>
              <p class="font-montserrat text-xs">{{ currentMushroomLeft.confusion_risk }}</p>
            </div>
          </div>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 font-serif text-xs">
            {{ currentPage * 2 + 1 }}
          </div>
        </div>
      </div>

      <!-- Right Page -->
      <div class="page right-page flex-1 p-8 relative bg-[#E5BE7F]">
        <div v-if="currentMushroomRight" class="h-full pb-8 overflow-y-auto pr-2 custom-scrollbar">
          <h2 class="text-4xl font-handwriting mb-3 text-gray-800">{{ currentMushroomRight.name }}</h2>

          <!-- 3D Model Viewer -->
          <div class="float-left w-[45%] mr-4 mb-3">
            <div class="aspect-square bg-gray-200 rounded-lg overflow-hidden border-4 border-[#e8dcc5] shadow-inner">
              <MushroomModelViewer
                v-if="currentMushroomRight.mushroom_3d_model"
                :modelPath="currentMushroomRight.mushroom_3d_model"
                :edibility="getEdibilityType(currentMushroomRight)"
                class="w-full h-full"
              />
            </div>
          </div>

          <!-- Flowing Text Content -->
          <div class="font-serif text-gray-700 text-sm">
            <div v-if="currentMushroomRight.latin_name" class="mb-3">
              <span class="font-architect font-bold block text-base">Latein</span>
              <p class="font-montserrat text-xs leading-relaxed">{{ currentMushroomRight.latin_name }}</p>
            </div>

            <div v-if="currentMushroomRight.description" class="mb-3">
              <span class="font-architect font-bold block text-base">Aussehen</span>
              <p class="font-montserrat text-xs leading-relaxed">{{ currentMushroomRight.description }}</p>
            </div>

            <div v-if="currentMushroomRight.size" class="mb-3">
              <span class="font-architect font-bold block text-base">Grösse</span>
              <p class="font-montserrat text-xs">{{ currentMushroomRight.size }}</p>
            </div>

            <div v-if="currentMushroomRight.location" class="mb-3">
              <span class="font-architect font-bold block text-base">Standort</span>
              <p class="font-montserrat text-xs">{{ currentMushroomRight.location }}</p>
            </div>

            <div v-if="currentMushroomRight.season" class="mb-3">
              <span class="font-architect font-bold block text-base">Erscheinungszeit</span>
              <p class="font-montserrat text-xs">{{ currentMushroomRight.season }}</p>
            </div>

            <div v-if="currentMushroomRight.edibility" class="mb-3">
              <span class="font-architect font-bold block text-base">Speisewert</span>
              <p class="font-montserrat text-xs" :class="{'text-green-700': isEdible(currentMushroomRight), 'text-red-700': isPoisonous(currentMushroomRight)}">
                {{ currentMushroomRight.edibility }}
              </p>
            </div>

            <div v-if="currentMushroomRight.confusion_risk" class="mb-3">
              <span class="font-architect font-bold block text-base">Verwechslungsgefahr</span>
              <p class="font-montserrat text-xs">{{ currentMushroomRight.confusion_risk }}</p>
            </div>

            <div v-if="currentMushroomRight.tipp" class="mb-3">
              <span class="font-architect font-bold block text-base">Tipp</span>
              <p class="font-montserrat text-xs italic text-gray-600">{{ currentMushroomRight.tipp }}</p>
            </div>
          </div>

          <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 font-serif text-xs">
            {{ currentPage * 2 + 2 }}
          </div>
        </div>
      </div>

      <!-- Navigation Controls -->
      <button
        @click="prevPage"
        :disabled="currentPage === 0"
        class="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#8b4513] text-white shadow-lg hover:bg-[#a0522d] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        @click="nextPage"
        :disabled="!hasNextPage"
        class="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#8b4513] text-white shadow-lg hover:bg-[#a0522d] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <!-- Center Spine Effect -->
      <div class="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Mushroom } from '@/types'
import { pb } from '@/lib/pocketbase'
import MushroomModelViewer from './MushroomModelViewer.vue'

const props = defineProps<{
  mushrooms: Mushroom[]
}>()

const currentPage = ref(0)

const currentMushroomLeft = computed(() => {
  return props.mushrooms[currentPage.value * 2]
})

const currentMushroomRight = computed(() => {
  return props.mushrooms[currentPage.value * 2 + 1]
})

const hasNextPage = computed(() => {
  return (currentPage.value + 1) * 2 < props.mushrooms.length
})

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (hasNextPage.value) {
    currentPage.value++
  }
}

const getImageUrl = (mushroom: Mushroom) => {
  if (!mushroom.image) return ''
  // If it's a full URL, return it
  if (mushroom.image.startsWith('http')) return mushroom.image
  // Otherwise construct PB URL
  return pb.files.getUrl(mushroom, mushroom.image)
}

const isEdible = (mushroom: Mushroom) => {
  const text = mushroom.edibility?.toLowerCase() || ''
  return text.includes('essbar') || text.includes('gut') || text.includes('lecker')
}

const isPoisonous = (mushroom: Mushroom) => {
  const text = mushroom.edibility?.toLowerCase() || ''
  return text.includes('giftig') || text.includes('tödlich') || text.includes('ungenießbar')
}

const getEdibilityType = (mushroom: Mushroom) => {
  if (isEdible(mushroom)) return 'edible'
  if (isPoisonous(mushroom)) return 'poisonous'
  return 'neutral'
}
</script>

<style scoped>
.book {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
}

.custom-scrollbar::-webkit-scrollbar {
  width: 4px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #d1c4b0;
  border-radius: 4px;
}
</style>
