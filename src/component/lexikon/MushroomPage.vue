<template>
  <div class="h-full pb-8 overflow-y-auto pr-2 custom-scrollbar">
    <h2 class="text-xl md:text-4xl font-handwriting mb-3 text-gray-800">{{ mushroom.name }}</h2>

    <!-- 3D Model Viewer -->
    <div class="w-full float-none md:float-left md:w-[45%] md:mr-4 mb-3">
      <div
        class="aspect-square bg-gray-200 rounded-lg overflow-hidden border-4 border-[#e8dcc5] shadow-inner"
      >
        <MushroomModelViewer
          v-if="mushroom.modelPath"
          :modelPath="mushroom.modelPath"
          :edibility="getEdibilityType(mushroom)"
          class="w-full h-full"
        />
      </div>
    </div>

    <!-- Flowing Text Content -->
    <div class="font-serif text-gray-700 text-sm">
      <div v-if="mushroom.latinName" class="mb-3">
        <span class="font-architect font-bold block text-base">Latein</span>
        <p class="font-montserrat text-[7px] sm:text-[9px] leading-relaxed">
          {{ mushroom.latinName }}
        </p>
      </div>

      <div v-if="mushroom.description" class="mb-3">
        <span class="font-architect font-bold block text-base">Aussehen</span>
        <p class="font-montserrat text-[7px] sm:text-[9px] leading-relaxed">
          {{ mushroom.description }}
        </p>
      </div>

      <div v-if="mushroom.size" class="mb-3">
        <span class="font-architect font-bold block text-base">Grösse</span>
        <p class="font-montserrat text-[7px] sm:text-[9px]">{{ mushroom.size }}</p>
      </div>

      <div v-if="mushroom.location" class="mb-3">
        <span class="font-architect font-bold block text-base">Standort</span>
        <p class="font-montserrat text-[7px] sm:text-[9px]">{{ mushroom.location }}</p>
      </div>

      <div v-if="mushroom.season" class="mb-3">
        <span class="font-architect font-bold block text-base">Erscheinungszeit</span>
        <p class="font-montserrat text-[7px] sm:text-[9px]">{{ mushroom.season }}</p>
      </div>

      <div v-if="mushroom.edibility" class="mb-3">
        <span class="font-architect font-bold block text-base">Speisewert</span>
        <p
          class="font-montserrat text-[7px] sm:text-[9px]"
          :class="{ 'text-green-700': isEdible(mushroom), 'text-red-700': isPoisonous(mushroom) }"
        >
          {{ mushroom.edibility }}
        </p>
      </div>

      <div v-if="mushroom.confusionRisk.length" class="mb-3">
        <span class="font-architect font-bold block text-base">Verwechslungsgefahr</span>
        <p class="font-montserrat text-[7px] sm:text-[9px]">
          {{ mushroom.confusionRisk.join(', ') }}
        </p>
      </div>

      <div v-if="mushroom.tip" class="mb-3">
        <span class="font-architect font-bold block text-base">Tipp</span>
        <p class="font-montserrat text-[7px] sm:text-[9px] italic text-gray-600">
          {{ mushroom.tip }}
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

const isEdible = (mushroom: Mushroom) => mushroom.edibilityStatus === 'edible'

const isPoisonous = (mushroom: Mushroom) => mushroom.edibilityStatus === 'poisonous'

const getEdibilityType = (mushroom: Mushroom) => {
  if (mushroom.edibilityStatus === 'edible') return 'edible'
  if (mushroom.edibilityStatus === 'poisonous') return 'poisonous'
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
