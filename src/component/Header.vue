<template>
  <header class="text-[#AA0000] fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        <img class="text-xl font-bold" src="" alt="Logo" />
          <router-link to="/"></router-link>
        </img>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-10 text-lg">
          <router-link
            to="/"
            class="hover:underline"
            :class="{ 'invisible': $route.name === 'landing' }"
          >Home</router-link>

          <router-link
            to="/hinweis"
            class="hover:underline"
            :class="{ 'hidden': $route.name === 'hinweis' }"
          >Hinweis</router-link>

          <router-link
            to="/lexikon"
            class="hover:underline"
            :class="{ 'hideen': $route.name === 'lexikon' }"
          >Lexikon</router-link>

          <router-link
            to="/spielinformation"
            class="hover:underline"
            :class="{ 'hidden': $route.name === 'spielinformation' }"
          >Spielinformation</router-link>

          <router-link
            to="/ueberuns"
            class="hover:underline"
            :class="{ 'hidden': $route.name === 'ueberuns' }"
          >Über Uns</router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden focus:outline-none"
          @click="mobileOpen = !mobileOpen"
        >
          <img
            :src="mobileOpen ? CloseIcon : BurgerIcon"
            :alt="mobileOpen ? 'Close menu' : 'Open menu'"
            class="w-8 h-8"
          />
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden backdrop-blur-sm px-4 pb-4 space-y-2 text-right
">
      <router-link
        to="/"
        class="block py-2 hover:underline"
        :class="{'hidden': $route.name === 'landing' }"
        @click="mobileOpen=false"
      >Home</router-link>

      <router-link
        to="/hinweis"
        class="block py-2 hover:underline"
        :class="{'hidden': $route.name === 'hinweis' }"
        @click="mobileOpen=false"
      >Hinweis</router-link>

      <router-link
        to="/lexikon"
        class="block py-2 hover:underline"
        :class="{'hidden': $route.name === 'lexikon' }"
        @click="mobileOpen=false"
      >Lexikon</router-link>

      <router-link
        to="/spielinformation"
        class="block py-2 hover:underline"
        :class="{'hidden': $route.name === 'spielinformation' }"
        @click="mobileOpen=false"
      >Spielinformation</router-link>

      <router-link
        to="/ueberuns"
        class="block py-2 hover:underline"
        :class="{'hidden': $route.name === 'ueberuns' }"
        @click="mobileOpen=false"
      >Über Uns</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const mobileOpen = ref(false)

import BurgerIcon from '../assets/icons_burger.svg'
import CloseIcon from '../assets/icons_close.svg'
</script>
