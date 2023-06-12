<template>
  <div class="container">
    <h2>Navbar</h2>
    <p>Las variables scss <code>$logo-mobile-width: 200px</code> y <code>$logo-desktop-width: 350px</code> determinan el ancho máximo del logotipo tanto en móvil como en desktop, y pueden ser sobreescritas desde la app principal.</p>
    <tipi-navbar
      :links="[{ route : 'search', name: 'Buscar', condition: true, }, { route: 'topics', name: 'Temáticas', condition: true, }, { route: 'dashboard', name: 'Métricas', condition: true, }, { route: 'scanner', name: 'Scanner', condition: true, }, { route: 'alerts', name: 'Alertas', condition: false, }, { route: 'about', name: 'Acerca', condition: true, }, ]" :disclaimerLink="{ route: 'about-en', name: 'Learn more about this project in English', }"
      logo="/logo-beta.png"
      pre-image="/multicolor.svg"
    />
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <tipi-navbar
      :links="[{ route : 'search', name: 'Buscar', condition: true, }, { route: 'topics', name: 'Temáticas', condition: true, children: [{ route: 'dashboard', name: 'Métricas', condition: true, }, { route: 'scanner', name: 'Scanner', condition: true, }, { route: 'alerts', name: 'Alertas', condition: false, }, { route: 'about', name: 'Acerca', condition: true, },] }, { route: 'dashboard', name: 'Métricas', condition: true, }, ]" :disclaimerLink="{ route: 'about-en', name: 'Learn more about this project in English', }"
      logo="/logo-beta.png"
      pre-image="/multicolor.svg"
    />
    <pre v-highlightjs="ex2"><code class="html"></code></pre>
  </div>
</template>

<script>
import { TipiNavbar } from 'tipi-uikit';

export default {
  name: 'Navbar',
  components: {
    TipiNavbar,
  },
  data() {
    return {
      ex1:
`<tipi-navbar
  :links="[{ route : 'search', name: 'Buscar', condition: true, }, { route: 'topics', name: 'Temáticas', condition: true, }, { route: 'dashboard', name: 'Métricas', condition: true, }, { route: 'scanner', name: 'Scanner', condition: true, }, { route: 'alerts', name: 'Alertas', condition: false, }, { route: 'about', name: 'Acerca', condition: true, }, ]"
  :disclaimerLink="{ route: 'about-en', name: 'Learn more about this project in English', }"
  logo="/logo-beta.png"
  pre-image="/multicolor.svg"
/>`,
      ex2:
`<tipi-navbar
  :links="[{ route : 'search', name: 'Buscar', condition: true, }, { route: 'topics', name: 'Temáticas', condition: true, }, { route: 'dashboard', name: 'Métricas', condition: true, }, { route: 'scanner', name: 'Scanner', condition: true, }, { route: 'alerts', name: 'Alertas', condition: false, }, { route: 'about', name: 'Acerca', condition: true, }, ]"
  :disclaimerLink="{ route: 'about-en', name: 'Learn more about this project in English', }"
  logo="/logo-beta.png"
  pre-image="/multicolor.svg"
/>`,
    }
  },
}
</script>
