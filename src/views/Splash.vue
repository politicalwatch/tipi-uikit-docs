<template>
  <div class="container">
    <h2>Splash</h2>
    <p></p>
    <p><a href="#" @click="launchSplash" class="c-button c-button--primary">Lanzar splash</a></p>
    <tipi-splash>
      <p>Puedes introducir cualquier contenido HTML dentro del componente Splash</p>
      <p><img src="https://via.placeholder.com/800x300.png" alt=""></p>
    </tipi-splash>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>


  </div>
</template>

<script>
import { TipiSplash } from 'tipi-uikit';

export default {
  name: 'Splash',
  components: {
    TipiSplash,
  },
  data() {
    return {
      ex1:
`<div class="c-splash" >
  <div class="c-splash__outer">
    <div class="c-splash__inner">
      ...
      <p><a class="c-splash__close c-button c-button--primary" href="#">Comenzar</a></p>
    </div>
  </div>
</div>`,
    }
  },
  methods: {
    launchSplash: function() {
      window.sessionStorage.setItem('closedSplash', false);
      window.location.reload();
    },
  },
}
</script>
