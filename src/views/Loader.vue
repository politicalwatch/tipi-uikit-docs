<template>
  <div class="container">
    <h2>Loader</h2>
    <p>Puede recibir como parámetros opcionales <code>title</code> y <code>subtitle</code></p>
    <tipi-loader />
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <tipi-loader title="Cargando datos" subtitle="Puede llevar unos minutos"/>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>

    <h3>HTML</h3>
    <pre v-highlightjs="ex3"><code class="html"></code></pre>


  </div>
</template>

<script>
import { TipiLoader } from 'tipi-uikit';

export default {
  name: 'Loader',
  components: {
    TipiLoader,
  },
  data() {
    return {
      ex1:
`<tipi-loader />`,
      ex2:
`<tipi-loader title="Cargando datos" subtitle="Puede llevar unos minutos"/>`,
    ex3:
`<div class="c-loader">
  <div class="c-loader__spinner">
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
  </div>
  <div class="c-loader__text">
    <h4 class="c-loader__title">Cargando datos</h4>
    Puede llevar unos minutos
  </div>
</div>`,
    }
  },
}
</script>

