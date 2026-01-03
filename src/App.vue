<script setup lang="ts">
import Header from '@/component/Header.vue'
import Footer from '@/component/Footer.vue'
</script>

<template>
  <div class="app-wrapper">
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<style scoped>
.app-wrapper {
  min-height: 100vh;
  background: linear-gradient(to bottom, transparent 0%, rgb(0, 0, 0) 100%);
}

main {
  min-height: calc(
    100vh - 64px - 48px
  ); /* viewport height minus header and footer approximate heights */
}
</style>
