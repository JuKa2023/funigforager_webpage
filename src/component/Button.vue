<template>
  <button
    @click="$emit('click')"
    :class="['rounded-xl transition-all duration-200 px-6 py-3', classes]"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  // 'red' or 'white'
  variant: { type: String, default: 'red' },
})

const classes = computed(() => {
  if (props.variant === 'white') {
    return `
        bg-white text-red-700 border-2 border-red-700
        [box-shadow:0_4px_4px_rgba(0,0,0,0.25),inset_0_4px_4px_rgba(0,0,0,0.25)]
        hover:bg-red-700 hover:text-white
        hover:[box-shadow:inset_0_4px_4px_rgba(0,0,0,0.25)]
      `
  }
  // red (primary)
  return `
      bg-red-700 text-white border-2 border-red-700
      [box-shadow:0_4px_4px_rgba(0,0,0,0.25),inset_0_4px_4px_rgba(0,0,0,0.25),inset_0_-4px_4px_rgba(237,237,237,0.25)]
      hover:bg-red-800
      hover:[box-shadow:inset_0_4px_4px_rgba(0,0,0,0.25),inset_0_-4px_4px_rgba(237,237,237,0.25)]
    `
})
</script>
