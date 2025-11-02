<!-- src/component/layout/BasePage.vue -->
<template>
  <main class="min-h-screen bg-white">
    <div class="max-w-5xl mx-auto px-4 py-10">
      <h1 v-if="title" class="text-3xl font-bold mb-6">{{ title }}</h1>
      <slot />
    </div>
  </main>
</template>

<script setup>
defineProps({
  title: { type: String, default: '' }
})
</script>