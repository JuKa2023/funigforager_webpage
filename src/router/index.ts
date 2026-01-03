import { createRouter, createWebHistory } from 'vue-router'

import LandingPage from '@/component/pages/LandingPage.vue'
import HinweisPage from '@/component/pages/HinweisPage.vue'
import LexikonPage from '@/component/pages/LexikonPage.vue'
import SpielinformationPage from '@/component/pages/SpielInformationPage.vue'
import UeberUnsPage from '@/component/pages/UeberUnsPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: LandingPage, name: 'landing' },
    { path: '/hinweis', component: HinweisPage, name: 'hinweis' },
    { path: '/lexikon', component: LexikonPage, name: 'lexikon' },
    { path: '/spielinformation', component: SpielinformationPage, name: 'spielinformation' },
    { path: '/ueberuns', component: UeberUnsPage, name: 'ueberuns' },
  ],
})

export default router
