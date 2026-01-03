<template>
  <div class="h-full pb-8 overflow-y-auto pr-2 custom-scrollbar">
    <h2 class="text-4xl font-handwriting mb-3 text-gray-800">{{ mushroom.name }}</h2>

    <!-- 3D Model Viewer -->
    <div class="float-left w-[45%] mr-4 mb-3">
      <div
        class="aspect-square bg-gray-200 rounded-lg overflow-hidden border-4 border-[#e8dcc5] shadow-inner"
      >
        <MushroomModelViewer
          v-if="mushroom.mushroom_3d_model"
          :modelPath="mushroom.mushroom_3d_model"
          :edibility="getEdibilityType(mushroom)"
          class="w-full h-full"
        />
      </div>
    </div>

    <!-- Flowing Text Content -->
    <div class="font-serif text-gray-700 text-sm">
      <div v-if="mushroom.latin_name" class="mb-3">
        <span class="font-architect font-bold block text-base">Latein</span>
        <p class="font-montserrat text-[8px] sm:text-[10px] leading-relaxed">
          {{ mushroom.latin_name }}
        </p>
      </div>

      <div v-if="mushroom.description" class="mb-3">
        <span class="font-architect font-bold block text-base">Aussehen</span>
        <p class="font-montserrat text-[8px] sm:text-[10px] leading-relaxed">
          {{ mushroom.description }}
        </p>
      </div>

      <div v-if="mushroom.size" class="mb-3">
        <span class="font-architect font-bold block text-base">Grösse</span>
        <p class="font-montserrat text-[8px] sm:text-[10px]">{{ mushroom.size }}</p>
      </div>

      <div v-if="mushroom.location" class="mb-3">
        <span class="font-architect font-bold block text-base">Standort</span>
        <p class="font-montserrat text-[8px] sm:text-[10px]">{{ mushroom.location }}</p>
      </div>

      <div v-if="mushroom.season" class="mb-3">
        <span class="font-architect font-bold block text-base">Erscheinungszeit</span>
        <p class="font-montserrat text-[8px] sm:text-[10px]">{{ mushroom.season }}</p>
      </div>

      <div v-if="mushroom.edibility" class="mb-3">
        <span class="font-architect font-bold block text-base">Speisewert</span>
        <p
          class="font-montserrat text-[8px] sm:text-[10px]"
          :class="{ 'text-green-700': isEdible(mushroom), 'text-red-700': isPoisonous(mushroom) }"
        >
          {{ mushroom.edibility }}
        </p>
      </div>

      <div v-if="mushroom.confusion_risk" class="mb-3">
        <span class="font-architect font-bold block text-base">Verwechslungsgefahr</span>
        <p class="font-montserrat text-[8px] sm:text-[10px]">{{ mushroom.confusion_risk }}</p>
      </div>

      <div v-if="mushroom.tipp" class="mb-3">
        <span class="font-architect font-bold block text-base">Tipp</span>
        <p class="font-montserrat text-[8px] sm:text-[10px] italic text-gray-600">
          {{ mushroom.tipp }}
        </p>
      </div>
    </div>

    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400 font-serif text-xs">
      {{ pageNumber }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Mushroom } from '@/types'
import MushroomModelViewer from './MushroomModelViewer.vue'

defineProps<{
  mushroom: Mushroom
  pageNumber: number
}>()

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
