<template>
  <div class="container">
    <h2>Offsets</h2>
    <p>Al igual que en las columnas del grid se especifican los anchos de cada una con las clases <code>u-(columna)[@(breakpoint)]</code> que se especifican en el apartado Grid. Hay disponibles una serie de clases para mover las columnas hacia la derecha usando un offsets con el formato <code>u-offset-(numero-de-columnas)[@(breakpoint)]</code> dónde:</p>
    <ul>
      <li>(columna): número del 1 al 12</li>
      <li>(breakpoint): <code>xs, sm, md, lg, xl</code></li>
    </ul>
    <p>Por ejemplo a la última columna se le aplica un offset de 5 columnas y de 3 columnas a partir del breakpoint <code>sm</code>:</p>
    <div class="o-grid">
      <div class="o-grid__col u-2">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">2/12</span>
      </div>
      <div class="o-grid__col u-2">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">2/12</span>
      </div>
      <div class="o-grid__col u-3 u-5@sm u-offset-5 u-offset-3@sm">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">3-5/12</span>
      </div>
    </div>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'Offsets',
  data() {
    return {
      ex1:
`<div class="o-grid">
  <div class="o-grid__col u-2">
    2/12
  </div>
  <div class="o-grid__col u-2">
    2/12
  </div>
  <div class="o-grid__col u-3 u-5@sm u-offset-5 u-offset-3@sm">
    3-5/12
  </div>
</div>`,
    }
  },
}
</script>
