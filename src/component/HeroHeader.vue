<template>
  <header
    :class="headerClass"
    :style="headerStyle"
  >
    <!-- Background image that scales -->
    <div
      class="absolute inset-0"
      :class="bgClass"
      :style="bgImageStyle"
    ></div>

    <!-- Dark overlay that gets darker on scroll -->
    <div
      class="absolute inset-0"
      :style="overlayStyle"
    ></div>

    <!-- Content (H1 + P that move + fade with scroll) -->
    <div class="relative text-center px-4" :style="titleStyle">
      <h1 class="text-3xl md:text-5xl font-bold text-white">
        {{ title }}
      </h1>

      <p v-if="subtitle" class="mt-2 text-lg md:text-xl text-white drop-shadow">
        {{ subtitle }}
      </p>
    </div>

    <!-- Scroll Indicator -->
    <div 
      v-if="fullScreen"
      class="scroll-indicator"
      :style="scrollIndicatorStyle"
    >
      <p class="scroll-text">runter scrollen</p>
      <svg 
        class="scroll-arrow" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M12 5V19M12 19L5 12M12 19L19 12" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </header>
</template>

<script setup>
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  subtitle: { type: String, default: '' },
  image: { type: String, required: true },

  // Layout
  fullScreen: { type: Boolean, default: false },
  minHeightPx: { type: Number, default: 320 },
  sticky: { type: Boolean, default: false },
  parallax: { type: Boolean, default: false },

  // Scroll effects for background + overlay
  enableScrollEffects: { type: Boolean, default: true },
  maxScale: { type: Number, default: 1.1 },               // max 10% zoom

  baseOverlayOpacity: { type: Number, default: 0.4 },     // starting darkness
  maxExtraOverlayOpacity: { type: Number, default: 0.4 }, // extra darkness

  // Scroll effects for text movement
  scrollText: { type: Boolean, default: true },           // move H1 + P
  textScrollFactor: { type: Number, default: 0.3 },       // speed of text movement
  maxTextShiftPx: { type: Number, default: 120 },         // clamp movement

  // NEW: text fading
  fadeTextOnScroll: { type: Boolean, default: true },     // fade text out while scrolling
  textFadeStrength: { type: Number, default: 1 },         // 1 = fully gone at scrollProgress=1
})

const scrollProgress = ref(0) // 0–1 based on scroll (for bg & overlay)
const titleOffset = ref(0)    // px offset for H1 + P

function handleScroll() {
  const y = window.scrollY || 0
  const refDistance = window.innerHeight || 1
  const progress = Math.min(y / refDistance, 1)

  if (props.enableScrollEffects) {
    scrollProgress.value = progress
  }

  if (props.scrollText) {
    const shift = Math.min(y * props.textScrollFactor, props.maxTextShiftPx)
    titleOffset.value = shift
  }
}

onMounted(() => {
  if (props.enableScrollEffects || props.scrollText || props.fadeTextOnScroll) {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // initialize once based on current scroll position
  }
})

onBeforeUnmount(() => {
  if (props.enableScrollEffects || props.scrollText || props.fadeTextOnScroll) {
    window.removeEventListener('scroll', handleScroll)
  }
})

// --- Classes & styles ---

const headerClass = computed(() => [
  'w-full',
  'relative',
  'overflow-hidden',               // so scaled bg doesn’t overflow
  'flex items-center justify-center',
  'select-none',
  props.sticky ? 'sticky top-0' : '',
])

const headerStyle = computed(() => ({
  height: props.fullScreen ? '100vh' : `${props.minHeightPx}px`,
}))

const bgClass = computed(() => (props.parallax ? 'bg-fixed' : ''))

// Background image scales with scroll
const bgImageStyle = computed(() => {
  const scale = props.enableScrollEffects
    ? 1 + (props.maxScale - 1) * scrollProgress.value
    : 1

  return {
    backgroundImage: `url('${props.image}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    transform: `scale(${scale})`,
    transition: 'transform 80ms linear',
    willChange: 'transform',
  }
})

// Overlay becomes darker with scroll
const overlayStyle = computed(() => {
  if (!props.enableScrollEffects) {
    return {
      backgroundColor: `rgba(0, 0, 0, ${props.baseOverlayOpacity})`,
      pointerEvents: 'none',
    }
  }

  const extra = props.maxExtraOverlayOpacity * scrollProgress.value
  const opacity = Math.min(props.baseOverlayOpacity + extra, 1)

  return {
    backgroundColor: `rgba(0, 0, 0, ${opacity})`,
    transition: 'background-color 80ms linear',
    pointerEvents: 'none',
  }
})

// Text (H1 + P) moves + fades with scroll
const titleStyle = computed(() => {
  const style = {}

  // Movement
  if (props.scrollText) {
    style.transform = `translateY(-${titleOffset.value}px)`
    style.willChange = 'transform, opacity'
  }

  // Fading
  if (props.fadeTextOnScroll) {
    const fadeProgress = scrollProgress.value // 0 → 1
    const opacity = Math.max(1 - fadeProgress * props.textFadeStrength, 0)
    style.opacity = opacity
  }

  return style
})

// Scroll indicator fades out quickly as user scrolls
const scrollIndicatorStyle = computed(() => {
  // Fade out faster than the title (multiply by 2 for quicker fade)
  const fadeProgress = Math.min(scrollProgress.value * 2, 1)
  const opacity = Math.max(1 - fadeProgress, 0)
  
  return {
    opacity: opacity,
    transition: 'opacity 200ms ease-out'
  }
})
</script>

<style scoped>
header {
  transition: opacity 200ms ease;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 20;
  pointer-events: none;
}

.scroll-text {
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 0.05em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  margin: 0;
}

.scroll-arrow {
  color: white;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
