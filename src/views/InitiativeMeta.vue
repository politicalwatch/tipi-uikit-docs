<template>
  <div class="container">
    <h2>Initiative Meta</h2>
    <div class="o-grid">
      <div class="o-grid__col u-12 u-4@sm">
        <tipi-initiative-meta :initiative="{ status: 'En tramitacion', url: '#', title: 'Titulo de iniciativa'}" link-text="Ver en el Congreso de los Diputados" />
      </div>
      <div class="o-grid__col u-12 u-4@sm">
        <tipi-initiative-meta :initiative="{ status: 'Respondida', url: '#', title: 'Titulo de iniciativa'}" link-text="Ver en el Congreso de los Diputados" />
      </div>
      <div class="o-grid__col u-12 u-4@sm">
        <tipi-initiative-meta :initiative="{ status: 'No celebrada', url: '#', title: 'Titulo de iniciativa'}" link-text="Ver en el Congreso de los Diputados" />
      </div>
    </div>

    <p>El parámetro <code>link-text</code> es opcional, si no se especifica no se mostrará el enlace</p>

    <pre v-highlightjs="ex1"><code class="html"></code></pre>
  </div>
</template>

<script>
import { TipiInitiativeMeta } from 'tipi-uikit';

export default {
  name: 'InitiativeMeta',
  components: {
    TipiInitiativeMeta,
  },
  data() {
    return {
      ex1:
`<tipi-initiative-meta
  :initiative="initiative"
  link-text="Ver en el Congreso de los Diputados"
/>`,
    }
  },
}
</script>
