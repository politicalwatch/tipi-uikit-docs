<template>
  <div class="container">
    <h2>Container</h2>
    <p>Son el objeto más básico del layout y se usan para englobar otros elementos</p>
    <p>Por defecto sus dimension es de <strong>1120px</strong> con un gap lateral de <strong>16px</strong> y sus principales modificadores son:</p>
    <ul>
      <li><code>o-container--fluid</code>: Pasa a ocupar el 100% del ancho de pantalla</li>
      <li><code>o-container--right</code>: Se alinea a la derecha</li>
      <li><code>o-container--(n)</code>: Donde <em>n=2...12</em> el tamaño del contenedor se verá reducido al número de columnas que se especifique en <em>n</em></li>
    </ul>

    <div class="o-container"><span class="u-block u-padding-3 u-bg-primary u-text-center">Container normal</span></div>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <div class="o-container o-container--5 o-container--right"><span class="u-block u-padding-3 u-bg-primary u-text-center">Container alineado a la izquierda y ocupando 5/12</span></div>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'Container',
  data() {
    return {
      ex1:
`<div class="o-container">Container normal</div>`,
      ex2:
`<div class="o-container o-container--5 o-container--right">...</div>`,
    }
  },
}
</script>
