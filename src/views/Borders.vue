<template>
  <div class="container">
    <h2>Borders</h2>
    <p>Utilidades para especificar bordes de elementos. todas las clases pueden ser usadas con el sufijo <code>@breakpoint</code> dónde breakpoint puede ser <code>xs, sm, md, lg, xl</code></p>
    <p class="u-padding-1 u-border"><code>u-border:</code>Todos los bordes</p>
    <p class="u-padding-1 u-border-right"><code>u-border-right:</code> Borde derecho</p>
    <p class="u-padding-1 u-border-left"><code>u-border-left:</code> Borde izquierdo</p>
    <p class="u-padding-1 u-border-top"><code>u-border-top:</code> Borde superior</p>
    <p class="u-padding-1 u-border-bottom"><code>u-border-bottom:</code> Borde inferior</p>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'Borders',
  data() {
    return {
      ex1:
`<p class="u-border">Todos los bordes</p>
<p class="u-border-right">Borde derecho</p>
<p class="u-border-left">Borde izquierdo</p>
<p class="u-border-top">Borde superior</p>
<p class="u-border-bottom">Borde inferior</p>`,
    }
  },
}
</script>
