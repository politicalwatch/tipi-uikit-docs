<template>

  <div class="o-container">

    <h2>Grid</h2>
    <div class="o-grid">
      <div class="o-grid__col u-4">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">4/12</span>
      </div>
      <div class="o-grid__col u-4">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">4/12</span>
      </div>
      <div class="o-grid__col u-4">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">4/12</span>
      </div>
    </div>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <h2>Opciones de grid</h2>
    <p>Puedes usar las siguiente estructura de clases para generar columnas: <code>u-(columna)[@(breakpoint)]</code> donde:</p>
    <ul>
      <li>(columna): número del 1 al 12</li>
      <li>(breakpoint): <code>xs, sm, md, lg, xl</code></li>
    </ul>
    <p>Por lo tanto las podríamos hacer</p>
    <div class="o-grid">
      <div class="o-grid__col u-12 u-margin-bottom-1 u-margin-bottom-0@sm u-4@sm">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">4/12</span>
      </div>
      <div class="o-grid__col u-12 u-margin-bottom-1 u-margin-bottom-0@sm u-4@sm">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">4/12</span>
      </div>
      <div class="o-grid__col u-12 u-margin-bottom-1 u-margin-bottom-0@sm u-4@sm">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">4/12</span>
      </div>
    </div>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>

    <h2>Modificadores</h2>

    <p>Existen múltiples modificadores para el objeto <code>o-grid</code>, y para los objetos de columna <code>o-grid__col</code>, se detallan a continuación:</p>
    <h4>Objeto Grid:</h4>
    <ul>
      <li><code>o-grid--right</code>: La columna se alinea a la derecha</li>
      <li><code>o-grid--nowrap</code>: Permite overflow de columnas</li>
      <li><code>o-grid--reverse</code>: Cambia la dirección a <em>de derecha a izquierda</em></li>
      <li><code>o-grid--between</code>: Distribuye las columnas manteniendo el mismo espacio entre ellas</li>
      <li><code>o-grid--center</code>: Distribuye las columnas desde el centro</li>
      <li><code>o-grid--align-center</code>: Centra las columnas verticalmente si el alto es distinto</li>
      <li><code>o-grid--wide</code>: Elimina el gap lateral del objeto grid</li>
      <li><code>o-grid--no-gutters</code>: Elimina el gap lateral del objeto grid y el gap entre columnas.</li>
    </ul>
    <h4>Objeto Columna:</h4>
    <ul>
      <li><code>o-grid__col--fill</code>: La columna se extiende hasta ocupar todo el espacio restante de la fila</li>
      <li><code>o-grid__col--right</code>: La columna se alinea a la derecha</li>
    </ul>

    <p>Ejemplo de grid centrado y sin gap entre columnas:</p>
    <div class="o-grid o-grid--center o-grid--no-gutters">
      <div class="o-grid__col u-12 u-margin-bottom-1 u-margin-bottom-0@sm u-2@sm">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">2/12</span>
      </div>
      <div class="o-grid__col u-12 u-margin-bottom-1 u-margin-bottom-0@sm u-2@sm">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">2/12</span>
      </div>
      <div class="o-grid__col u-12 u-margin-bottom-1 u-margin-bottom-0@sm u-2@sm">
        <span class="u-bg-primary u-padding-1 u-block u-text-center">2/12</span>
      </div>
    </div>
    <pre v-highlightjs="ex3"><code class="html"></code></pre>

  </div>

</template>

<script>

export default {
  name: 'Grid',
  data() {
    return {
      ex1:
`<div class="o-grid">
  <div class="o-grid__col u-4">
    4/12
  </div>
  <div class="o-grid__col u-4">
    4/12
  </div>
  <div class="o-grid__col u-4">
    4/12
  </div>
</div>`,
      ex2:
`<div class="o-grid">
  <div class="o-grid__col u-12 u-4@sm">
    4/12
  </div>
  <div class="o-grid__col u-12 u-4@sm">
    4/12
  </div>
  <div class="o-grid__col u-12 u-4@sm">
    4/12
  </div>
</div>`,
      ex3:
`<div class="o-grid o-grid--center o-grid--no-gutters">
  <div class="o-grid__col u-12 u-2@sm">
    2/12
  </div>
  <div class="o-grid__col u-12 u-2@sm">
    2/12
  </div>
  <div class="o-grid__col u-12 u-2@sm">
    2/12
  </div>
</div>`
    };
  },
}
</script>
