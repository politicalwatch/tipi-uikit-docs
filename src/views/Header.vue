<template>
  <div class="container">
    <h2>Header</h2>
    <tipi-header title="Título de la página o sección" subtitle="Subtítulo de la pagina o sección" />
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <p>Las propiedades que se le pueden pasar a este complemento son</p>
    <ul class="u-margin-bottom-4">
      <li><code>title</code>: El título de la página o sección</li>
      <li><code>subtitle</code>: Si se quiere usar subtítulo, si no se especifica no se muestra</li>
    </ul>

    <h3>HTML</h3>
    <pre v-highlightjs="ex3"><code class="html"></code></pre>


  </div>
</template>

<script>
import { TipiHeader } from 'tipi-uikit';

export default {
  name: 'Header',
  components: {
    TipiHeader,
  },
  data() {
    return {
      ex1:
`<tipi-header
  title="Título de la página o sección"
  subtitle="Subtítulo de la pagina o sección"
/>`,
    ex3:
`<header class="c-page-header">
  <h1 class="c-page-header__title">
    ...
  </h1>
  <p class="c-page-header__subtitle">...</p>
</header>`,
    }
  },
}
</script>
