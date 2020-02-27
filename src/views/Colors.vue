<template>
  <div class="container">
    <h2>Colors</h2>
    <h5>Utilidades para especificar color del texto</h5>
    <p class="u-padding-1 u-color-primary">u-color-primary</p>
    <p class="u-padding-1 u-color-primary-dark">u-color-primary-dark</p>
    <p class="u-padding-1 u-color-primary-light u-bg-black">u-color-primary-light</p>
    <p class="u-padding-1 u-color-secondary">u-color-secondary</p>
    <p class="u-padding-1 u-color-secondary-dark">u-color-secondary-dark</p>
    <p class="u-padding-1 u-color-secondary-light u-bg-black">u-color-secondary-light</p>
    <p class="u-padding-1 u-color-error">u-color-error</p>
    <p class="u-padding-1 u-color-white u-bg-black">u-color-white</p>
    <p class="u-padding-1 u-color-black">u-color-black</p>
    <p class="u-padding-1 u-color-completed">u-color-completed</p>
    <p class="u-padding-1 u-color-neutral">u-color-neutral</p>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <h5>Utilidades para especificar colores de fondo</h5>

    <p class="u-padding-1 u-bg-primary">u-bg-primary</p>
    <p class="u-padding-1 u-bg-primary-dark">u-bg-primary-dark</p>
    <p class="u-padding-1 u-bg-primary-light">u-bg-primary-light</p>
    <p class="u-padding-1 u-bg-secondary">u-bg-secondary</p>
    <p class="u-padding-1 u-bg-secondary-dark">u-bg-secondary-dark</p>
    <p class="u-padding-1 u-bg-secondary-light">u-bg-secondary-light</p>
    <p class="u-padding-1 u-bg-error">u-bg-error</p>
    <p class="u-padding-1 u-bg-white">u-bg-white</p>
    <p class="u-padding-1 u-bg-black u-color-white">u-bg-black</p>
    <p class="u-padding-1 u-bg-completed">u-bg-completed</p>
    <p class="u-padding-1 u-bg-neutral">u-bg-neutral</p>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'Colors',
  data() {
    return {
      ex1:
`<p class="u-color-primary">u-color-primary</p>
<p class="u-color-primary-dark">u-color-primary-dark</p>
<p class="u-color-primary-light u-bg-black">u-color-primary-light</p>
<p class="u-color-secondary">u-color-secondary</p>
<p class="u-color-secondary-dark">u-color-secondary-dark</p>
<p class="u-color-secondary-light u-bg-black">u-color-secondary-light</p>
<p class="u-color-error">u-color-error</p>
<p class="u-color-white u-bg-black">u-color-white</p>
<p class="u-color-black">u-color-black</p>
<p class="u-color-completed">u-color-completed</p>
<p class="u-color-neutral">u-color-neutral</p>`,
      ex2:
`<p class="u-bg-primary">u-bg-primary</p>
<p class="u-bg-primary-dark">u-bg-primary-dark</p>
<p class="u-bg-primary-light">u-bg-primary-light</p>
<p class="u-bg-secondary">u-bg-secondary</p>
<p class="u-bg-secondary-dark">u-bg-secondary-dark</p>
<p class="u-bg-secondary-light">u-bg-secondary-light</p>
<p class="u-bg-error">u-bg-error</p>
<p class="u-bg-white">u-bg-white</p>
<p class="u-bg-black u-color-white">u-bg-black</p>
<p class="u-bg-completed">u-bg-completed</p>
<p class="u-bg-neutral">u-bg-neutral</p>`,
    }
  },
}
</script>
