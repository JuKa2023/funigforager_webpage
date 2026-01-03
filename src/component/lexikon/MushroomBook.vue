<template>
  <div class="book-wrapper w-full flex justify-center items-center py-4 md:p-8">
    <!-- Desktop Book View -->
    <div class="book-container hidden md:flex justify-center items-center w-full">
      <div
        class="book relative flex w-full max-w-6xl aspect-[3/2] shadow-2xl rounded-sm overflow-hidden bg-[#E5BE7F]"
      >
        <!-- Left Page -->
        <div class="page left-page flex-1 p-8 border-r border-[#9E8048] relative">
          <MushroomPage
            v-if="currentMushroomLeft"
            :mushroom="currentMushroomLeft"
            :pageNumber="currentPage * 2 + 1"
          />
        </div>

        <!-- Right Page -->
        <div class="page right-page flex-1 p-8 relative bg-[#E5BE7F]">
          <MushroomPage
            v-if="currentMushroomRight"
            :mushroom="currentMushroomRight"
            :pageNumber="currentPage * 2 + 2"
          />
        </div>

        <!-- Book Navigation -->
        <button
          @click="prevPage"
          :disabled="currentPage === 0"
          class="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#8b4513] text-white shadow-lg hover:bg-[#a0522d] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          @click="nextPage"
          :disabled="!hasNextPage"
          class="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-[#8b4513] text-white shadow-lg hover:bg-[#a0522d] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- Center Spine Effect -->
        <div
          class="absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none"
        ></div>
      </div>
    </div>

    <!-- Mobile/Tablet Carousel View -->
    <div class="mobile-carousel md:hidden w-full max-w-md mx-auto px-4">
      <div
        class="book relative w-full aspect-[3/5] sm:aspect-[3/4] shadow-xl rounded-lg overflow-hidden bg-[#E5BE7F] flex flex-col"
      >
        <div class="page flex-1 p-6 relative overflow-hidden">
          <MushroomPage
            v-if="currentMobileMushroom"
            :mushroom="currentMobileMushroom"
            :pageNumber="currentMobileIndex + 1"
          />
        </div>

        <!-- Mobile Navigation overlay -->
        <div
          class="absolute bottom-4 left-0 right-0 flex justify-between px-6 pointer-events-none z-20"
        >
          <button
            @click="prevMobile"
            :disabled="currentMobileIndex === 0"
            class="pointer-events-auto p-2 rounded-full bg-[#8b4513]/90 text-white shadow-lg hover:bg-[#a0522d] disabled:opacity-0 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            @click="nextMobile"
            :disabled="!hasNextMobile"
            class="pointer-events-auto p-2 rounded-full bg-[#8b4513]/90 text-white shadow-lg hover:bg-[#a0522d] disabled:opacity-0 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Page Indicator -->
      <div class="text-center mt-4 font-serif text-[#8b4513]">
        {{ currentMobileIndex + 1 }} / {{ mushrooms.length }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Mushroom } from '@/types'
import MushroomPage from './MushroomPage.vue'

const props = defineProps<{
  mushrooms: Mushroom[]
}>()

// Desktop Book Logic
const currentPage = ref(0) // Logic page index (pair of pages)

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

// Mobile Carousel Logic
const currentMobileIndex = ref(0)

const currentMobileMushroom = computed(() => {
  return props.mushrooms[currentMobileIndex.value]
})

const hasNextMobile = computed(() => {
  return currentMobileIndex.value < props.mushrooms.length - 1
})

const prevMobile = () => {
  if (currentMobileIndex.value > 0) {
    currentMobileIndex.value--
  }
}

const nextMobile = () => {
  if (hasNextMobile.value) {
    currentMobileIndex.value++
  }
}
</script>

<style scoped>
.book {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
}
</style>
