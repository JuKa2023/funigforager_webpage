<!-- src/component/layout/BasePage.vue -->
<template>
  <HeroHeader
    title="Über das Spiel"
    :image="heroImage"
    :fullScreen="true"
    :sticky="true"
    :parallax="true"
  />
  <main class="parallax-main relative z-10 pt-10 sm:pt-16">
    <section>
      <p class="text-m mb-6 text-white">
        In Fungi Forager erkundest du eine 3D-Waldwelt, inspiriert von echten Schweizer
        Landschaften. Dein Ziel, Pilze finden, bestimmen und im Lexikon festhalten. Aber Vorsicht,
        nicht alle sind essbar!
      </p>
    </section>
    <section>
      <h2 class="text-3xl font-bold mb-6">Für wen ist das Spiel?</h2>
      <p class="text-m mb-6 text-white">
        Ganz egal, ob du Gamer:in oder Naturliebhaber:in bist – hier wirst du auf spielerische Weise
        zur Pilzexpert:in!
      </p>
    </section>

    <div className="min-h-screen w-full text-emerald-50 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl">
        <div
          className="rounded-l border border-white/10 bg-white/5 shadow-xl backdrop-blur-sm p-8 md:p-10"
        >
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide mb-8">Spielmechanik</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <img
                  src="../../assets/pilz_icon.png"
                  alt="Mushroom Icon"
                  className="w-12 h-12 select-none"
                />
                <div className="space-y-1">
                  <p className="font-semibold text-emerald-100">Erkunden</p>
                  <p className="text-emerald-200/90 leading-relaxed">
                    Bewege dich frei durch den Wald und entdecke Pilze an unterschiedlichen Orten.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <img
                  src="../../assets/pilz_icon.png"
                  alt="Mushroom Icon"
                  className="w-12 h-12 select-none"
                />
                <div className="space-y-1">
                  <p className="font-semibold text-emerald-100">Untersuchen</p>
                  <p className="text-emerald-200/90 leading-relaxed">
                    Betrachte sie genau: Form, Farbe, Lamellen, Geruch.
                  </p>
                </div>
              </li>
            </ul>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <img
                  src="../../assets/pilz_icon.png"
                  alt="Mushroom Icon"
                  className="w-12 h-12 select-none"
                />
                <div className="space-y-1">
                  <p className="font-semibold text-emerald-100">Entscheiden</p>
                  <p className="text-emerald-200/90 leading-relaxed">
                    Ist der Pilz essbar oder giftig?
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <img
                  src="../../assets/pilz_icon.png"
                  alt="Mushroom Icon"
                  className="w-12 h-12 select-none"
                />
                <div className="space-y-1">
                  <p className="font-semibold text-emerald-100">Lernen</p>
                  <p className="text-emerald-200/90 leading-relaxed">
                    Jeder Fund erweitert dein Lexikon mit Bildern, Merkmalen und spannenden Infos.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-10 rounded-xl borde p-4">
            <p className="text-sm md:text-base text-emerald-200/80 leading-relaxed">
              Sinkt dein Energielevel auf null, fällst du in Ohnmacht und verlierst Punkte, aber
              dein Lexikon bleibt erhalten, damit du beim nächsten Mal klüger bist.
            </p>
          </div>
        </div>
      </div>
    </div>

    <section className="w-full max-w-5xl mx-auto text-emerald-50 p-6 space-y-8">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">Entwicklung</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        <div
          className="bg-[#b9975b] bg-opacity-80 rounded-s shadow-lg border border-white/10 p-4 flex flex-col items-center text-center"
        >
          <p className="font-semibold text-m mb-4">3D-Modelle erstellt in Blender</p>
          <img
            src="../../assets/3d_icons_blender.png"
            alt="Blender Mushroom"
            className="w-24 h-24"
          />
        </div>

        <div
          className="bg-[#b9975b] bg-opacity-80 rounded-s shadow-lg border border-white/10 p-4 flex flex-col items-center text-center"
        >
          <p className="font-semibold text-m mb-4">Gameplay umgesetzt mit Unity Engine</p>
          <img src="../../assets/3d_icons_unity.png" alt="Unity Controller" className="w-24 h-24" />
        </div>

        <div
          className="bg-[#b9975b] bg-opacity-80 rounded-s shadow-lg border border-white/10 p-4 flex flex-col items-center text-center"
        >
          <p className="font-semibold text-m mb-4">Pilzdaten basieren auf echten Schweizer Arten</p>
          <img
            src="../../assets/3d_icons_arten.png"
            alt="Mushroom Database"
            className="w-24 h-24"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import HeroHeader from '../HeroHeader.vue'
import heroImage from '../../assets/hintergrundbild/platzhalter_wald.jpeg'
</script>
