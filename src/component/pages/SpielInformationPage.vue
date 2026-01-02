<!-- src/component/layout/BasePage.vue -->
<template>
  <HeroHeader
    title="Über das Spiel"
    :image="heroImage"
    :fullScreen="true"
    :sticky="true"
    :parallax="false"
    :enableScrollEffects="true"
    :maxScale="1.2"
    :baseOverlayOpacity="0.35"
    :maxExtraOverlayOpacity="0.55"
    :scrollText="true"
    :textScrollFactor="0.4"
    :maxTextShiftPx="150"
    :fadeTextOnScroll="true"
    :textFadeStrength="1.2"
  />
  <main class="parallax-main">
    <div class="relative z-10 pt-[120px] sm:pt-[180px]">
      <section class="max-w-5xl mx-auto px-4 py-10">
        <p class="text-m mb-6 text-white">
          In Fungi Forager erkundest du eine 3D-Waldwelt, inspiriert von echten Schweizer
          Landschaften. Dein Ziel, Pilze finden, bestimmen und im Lexikon festhalten. Aber Vorsicht,
          nicht alle sind essbar!
        </p>
      </section>
      <section class="max-w-5xl mx-auto px-4 py-10 mt-24">
        <h2 class="text-3xl font-bold mb-6 text-white">Für wen ist das Spiel?</h2>
        <p class="text-m mb-6 text-white">
          Ganz egal, ob du Gamer:in oder Naturliebhaber:in bist – hier wirst du auf spielerische Weise
          zur Pilzexpert:in!
        </p>
      </section>

      <div class="min-h-screen w-full text-emerald-50 flex items-center justify-center p-6">
        <div class="w-full max-w-5xl">
          <div
            class="rounded-l border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm p-8 md:p-10"
          >
            <h1 class="text-3xl md:text-4xl font-semibold tracking-wide mb-8">Spielmechanik</h1>
            <ul class="feature-list">
              <li class="feature-item">
                <img src="@/assets/pilz_icon.png" alt="Mushroom Icon" class="feature-icon" />
                <div class="space-y-1">
                  <p class="feature-title">Erkunden</p>
                  <p class="feature-text">
                    Bewege dich frei durch den Wald und entdecke Pilze an unterschiedlichen Orten.
                  </p>
                </div>
              </li>

              <li class="feature-item">
                <img src="@/assets/pilz_icon.png" alt="Mushroom Icon" class="feature-icon" />
                <div class="space-y-1">
                  <p class="feature-title">Untersuchen</p>
                  <p class="feature-text">
                    Betrachte sie genau: Form, Farbe, Lamellen, Geruch.
                  </p>
                </div>
              </li>

              <li class="feature-item">
                <img src="@/assets/pilz_icon.png" alt="Mushroom Icon" class="feature-icon" />
                <div class="space-y-1">
                  <p class="feature-title">Entscheiden</p>
                  <p class="feature-text">
                    Ist der Pilz essbar oder giftig?
                  </p>
                </div>
              </li>

              <li class="feature-item">
                <img src="@/assets/pilz_icon.png" alt="Mushroom Icon" class="feature-icon" />
                <div class="space-y-1">
                  <p class="feature-title">Lernen</p>
                  <p class="feature-text">
                    Jeder Fund erweitert dein Lexikon mit Bildern, Merkmalen und spannenden Infos.
                  </p>
                </div>
              </li>
            </ul>

            <div class="mt-10 rounded-xl border p-4">
              <p class="text-sm md:text-base text-emerald-200/80 leading-relaxed">
                Sinkt dein Energielevel auf null, fällst du in Ohnmacht und verlierst Punkte, aber
                dein Lexikon bleibt erhalten, damit du beim nächsten Mal klüger bist.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section class="w-full max-w-5xl mx-auto text-emerald-50 p-6 space-y-8">
        <h2 class="text-3xl md:text-4xl font-semibold tracking-wide">Entwicklung</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div
            class="bg-[#b9975b] bg-opacity-80 rounded-s shadow-lg border border-white/10 p-4 flex flex-col items-center text-center"
          >
            <p class="font-semibold mb-4">3D-Modelle erstellt in Blender</p>
            <img src="../../assets/3d_icons_blender.png" alt="Blender Mushroom" class="w-24 h-24" />
          </div>

          <div
            class="bg-[#b9975b] bg-opacity-80 rounded-s shadow-lg border border-white/10 p-4 flex flex-col items-center text-center"
          >
            <p class="font-semibold mb-4">Gameplay umgesetzt mit Unity Engine</p>
            <img src="../../assets/3d_icons_unity.png" alt="Unity Controller" class="w-24 h-24" />
          </div>

          <div
            class="bg-[#b9975b] bg-opacity-80 rounded-s shadow-lg border border-white/10 p-4 flex flex-col items-center text-center"
          >
            <p class="font-semibold mb-4">Pilzdaten basieren auf echten Schweizer Arten</p>
            <img src="../../assets/3d_icons_arten.png" alt="Mushroom Database" class="w-24 h-24" />
          </div>
        </div>
      </section>
    </diV>
  </main>
</template>

<script setup lang="ts">
import HeroHeader from '../HeroHeader.vue'
import heroImage from '../../assets/hintergrundbild/pilzwald.png'
</script>
