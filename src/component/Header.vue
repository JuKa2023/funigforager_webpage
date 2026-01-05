<template>
  <header ref="headerRef" class="header-paper fixed top-0 left-0 right-0 z-50 w-full shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">
        <router-link to="/">
          <img class="h-8 w-auto" src="/icon_fungi_text.svg" alt="Fungi Forager Logo" />
        </router-link>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-10 text-lg">
          <router-link to="/" class="nav-link" :class="{ invisible: $route.name === 'landing' }"
            >Home</router-link
          >

          <router-link to="/hinweis" class="nav-link" :class="{ hidden: $route.name === 'hinweis' }"
            >Hinweis</router-link
          >

          <router-link to="/lexikon" class="nav-link" :class="{ hideen: $route.name === 'lexikon' }"
            >Lexikon</router-link
          >

          <router-link
            to="/spielinformation"
            class="nav-link"
            :class="{ hidden: $route.name === 'spielinformation' }"
            >Spielinformation</router-link
          >

          <router-link
            to="/ueberuns"
            class="nav-link"
            :class="{ hidden: $route.name === 'ueberuns' }"
            >Über Uns</router-link
          >
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden focus:outline-none p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
          @click="mobileOpen = !mobileOpen"
        >
          <img
            :src="mobileOpen ? CloseIcon : BurgerIcon"
            :alt="mobileOpen ? 'Close menu' : 'Open menu'"
            class="w-6 h-6"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div
      v-if="mobileOpen"
      class="md:hidden mobile-menu px-4 pb-4 space-y-2 text-right border-t border-white/20"
    >
      <router-link
        to="/"
        class="nav-link block py-2"
        :class="{ hidden: $route.name === 'landing' }"
        @click="mobileOpen = false"
        >Home</router-link
      >

      <router-link
        to="/hinweis"
        class="nav-link block py-2"
        :class="{ hidden: $route.name === 'hinweis' }"
        @click="mobileOpen = false"
        >Hinweis</router-link
      >

      <router-link
        to="/lexikon"
        class="nav-link block py-2"
        :class="{ hidden: $route.name === 'lexikon' }"
        @click="mobileOpen = false"
        >Lexikon</router-link
      >

      <router-link
        to="/spielinformation"
        class="nav-link block py-2"
        :class="{ hidden: $route.name === 'spielinformation' }"
        @click="mobileOpen = false"
        >Spielinformation</router-link
      >

      <router-link
        to="/ueberuns"
        class="nav-link block py-2"
        :class="{ hidden: $route.name === 'ueberuns' }"
        @click="mobileOpen = false"
        >Über Uns</router-link
      >
    </div>
  </header>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const mobileOpen = ref(false)
const headerRef = ref<HTMLElement | null>(null)

import BurgerIcon from '../assets/icons_burger.svg'
import CloseIcon from '../assets/icons_close.svg'

const handleClickOutside = (event: PointerEvent) => {
  // Falls das Menü geschlossen ist oder die Header-Referenz fehlt, nichts tun
  if (!mobileOpen.value || !headerRef.value) return
  // Spezifische Logik zum Schliessen des Menüs, wenn ausserhalb des Headers geklickt wird
  if (!headerRef.value.contains(event.target as Node)) {
    mobileOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('pointerdown', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('pointerdown', handleClickOutside)
})
</script>

<style scoped>
/* Glassmorphism-Effekt für den Header */
.header-paper {
  background: rgba(255, 255, 255, 0.666);
  backdrop-filter: blur(12px) brightness(1.4);
  -webkit-backdrop-filter: blur(12px) brightness(1.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.794);
}

/* Glassmorphism-Effekt für das mobile Menü */
.mobile-menu {
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px) brightness(1.2);
  -webkit-backdrop-filter: blur(12px) brightness(1.2);
}

.nav-link {
  color: #aa0000;
  transition: all 0.2s ease;
  text-decoration: none;
  font-weight: 500;
}

.nav-link:hover {
  color: #cc0000;
  transform: translateY(-1px);
}
</style>
