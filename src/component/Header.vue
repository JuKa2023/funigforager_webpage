<template>
  <header class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16 items-center">

        <img class="text-xl font-bold" src="" alt="Logo" />
          <router-link to="/"></router-link>
      </img>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-6">
          <router-link
            to="/"
            class="hover:text-yellow-300"
            :class="{ 'text-yellow-300 font-semibold': $route.name === 'landing' }"
          >Home</router-link>

          <router-link
            to="/hinweis"
            class="hover:text-yellow-300"
            :class="{ 'text-yellow-300 font-semibold': $route.name === 'hinweis' }"
          >Hinweis</router-link>

          <router-link
            to="/lexikon"
            class="hover:text-yellow-300"
            :class="{ 'text-yellow-300 font-semibold': $route.name === 'lexikon' }"
          >Lexikon</router-link>

          <router-link
            to="/spielinformation"
            class="hover:text-yellow-300"
            :class="{ 'text-yellow-300 font-semibold': $route.name === 'spielinformation' }"
          >Spielinformation</router-link>

          <router-link
            to="/ueberuns"
            class="hover:text-yellow-300"
            :class="{ 'text-yellow-300 font-semibold': $route.name === 'ueberuns' }"
          >Über Uns</router-link>
        </nav>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white focus:outline-none"
          @click="mobileOpen = !mobileOpen"
        >
          <span v-if="!mobileOpen">☰</span>
          <span v-else>✖</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileOpen" class="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
      <router-link
        to="/"
        class="block py-2 hover:text-yellow-300"
        :class="{ 'text-yellow-300 font-semibold': $route.name === 'landing' }"
        @click="mobileOpen=false"
      >Home</router-link>

      <router-link
        to="/hinweis"
        class="block py-2 hover:text-yellow-300"
        :class="{ 'text-yellow-300 font-semibold': $route.name === 'hinweis' }"
        @click="mobileOpen=false"
      >Hinweis</router-link>

      <router-link
        to="/lexikon"
        class="block py-2 hover:text-yellow-300"
        :class="{ 'text-yellow-300 font-semibold': $route.name === 'lexikon' }"
        @click="mobileOpen=false"
      >Lexikon</router-link>

      <router-link
        to="/spielinformation"
        class="block py-2 hover:text-yellow-300"
        :class="{ 'text-yellow-300 font-semibold': $route.name === 'spielinformation' }"
        @click="mobileOpen=false"
      >Spielinformation</router-link>

      <router-link
        to="/ueberuns"
        class="block py-2 hover:text-yellow-300"
        :class="{ 'text-yellow-300 font-semibold': $route.name === 'ueberuns' }"
        @click="mobileOpen=false"
      >Über Uns</router-link>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import icon from "@/assets/icons/funigforager_icon.png"
const mobileOpen = ref(false)
</script>