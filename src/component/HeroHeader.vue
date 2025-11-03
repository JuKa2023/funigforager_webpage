<template>
  <header ref="heroEl" :class="headerClass" :style="headerStyle">
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40"></div>

    <!-- Title -->
    <div class="relative text-center px-4" :style="titleStyle">
      <h1 class="text-3xl md:text-5xl font-bold text-white">
        {{ title }}
      </h1>

      <p v-if="subtitle" class="mt-2 text-lg md:text-xl text-white drop-shadow">
        {{ subtitle }}
      </p>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  image: { type: String, required: true },
  fullScreen: { type: Boolean, default: false },
  sticky: { type: Boolean, default: true },
  parallax: { type: Boolean, default: true },
  collapseOffset: { type: Number, default: 60 },
  collapseDelayMs: { type: Number, default: 200 },
  collapseOnScroll: { type: Boolean, default: false },
  shrinkOnScroll: { type: Boolean, default: true },
  minHeightPx: { type: Number, default: 160 },
  titleShiftPx: { type: Number, default: 140 },
})

const backgroundStyle = computed(() => ({ backgroundImage: `url('${props.image}')` }))

const collapsed = ref(false)
let collapseTimer
const heroEl = ref(null)
const baseHeight = ref(0)
const currentHeight = ref(0)
const shrinkProgress = ref(0)
const atMin = ref(false)

function onScroll() {
  if (window.scrollY > props.collapseOffset && !collapsed.value) {
    window.clearTimeout(collapseTimer)
    collapseTimer = window.setTimeout(() => {
      collapsed.value = true
    }, props.collapseDelayMs)
  } else if (window.scrollY <= props.collapseOffset && collapsed.value) {
    window.clearTimeout(collapseTimer)
    collapsed.value = false
  }
}

onMounted(() => {
  // measure initial height for shrink calculations
  const measured = heroEl.value ? heroEl.value.offsetHeight : 0
  baseHeight.value = measured || (props.fullScreen ? window.innerHeight : 320)
  currentHeight.value = baseHeight.value
  if (props.collapseOnScroll) window.addEventListener('scroll', onScroll, { passive: true })
  if (props.shrinkOnScroll) window.addEventListener('scroll', onShrinkScroll, { passive: true })
})

onBeforeUnmount(() => {
  if (props.collapseOnScroll) {
    window.removeEventListener('scroll', onScroll)
    window.clearTimeout(collapseTimer)
  }
  if (props.shrinkOnScroll) window.removeEventListener('scroll', onShrinkScroll)
})

function onShrinkScroll() {
  const minH = props.minHeightPx
  const maxH = baseHeight.value
  const range = Math.max(1, maxH - minH)
  const delta = Math.min(window.scrollY, range)
  shrinkProgress.value = delta / range
  currentHeight.value = Math.max(minH, maxH - delta)
  atMin.value = currentHeight.value <= minH + 0.5
}

const headerClass = computed(() => [
  'w-full',
  'bg-center bg-cover',
  props.parallax ? 'bg-fixed' : '',
  props.sticky && !atMin.value ? 'sticky top-0' : '',
  'flex items-center justify-start relative select-none z-0',
  'hero-sticky',
  props.collapseOnScroll && collapsed.value ? 'hero-collapsed' : '',
])

const headerStyle = computed(() => ({
  ...backgroundStyle.value,
  height: `${currentHeight.value || (props.fullScreen ? window.innerHeight : 320)}px`,
}))

const titleStyle = computed(() => ({
  transform: `translateY(-${shrinkProgress.value * props.titleShiftPx}px)`,
}))
</script>

<style scoped>
.hero-sticky {
  transition:
    height 400ms ease,
    transform 400ms ease,
    opacity 300ms ease;
  will-change: height, transform, opacity;
}
.hero-collapsed {
  transform: translateY(-14px);
  opacity: 0.85;
  overflow: hidden;
}
</style>
