<template>
  <div class="container">
    <h2>Topic Link</h2>
    <p>Muestra una patilla con un enlace a la temática, acepta como parámetros el propio <code>topic</code>, <code>image</code>, <code>color</code> y <code>path</code>. Este último se usa para generar el enlace.</p>
    <div class="o-grid o-grid--center">
      <div class="o-grid__col u-12 u-3@sm">
        <tipi-topic-link :topic="{'icon':'S_SDG-goals_icons-individual-rgb-01.png','description':['Acabar con la pobreza en todas sus formas en todo el mundo'],'id':'b6edb295ec18e1100eccdc468a5b9c1bdff2070f','shortname':'ODS 1','name':'ODS 1 - Fin de la Pobreza'}" image="ods-1.svg" color="#eb1c2d" path="ods"/>
      </div>
    </div>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>
  </div>
</template>

<script>
import { TipiTopicLink } from 'tipi-uikit';

export default {
  name: 'TopicLink',
  components: {
    TipiTopicLink,
  },
  data() {
    return {
      ex1:
`<tipi-topic-link :topic="topic" image="ods-1.svg" color="#eb1c2d" path="ods"/>`,
    }
  },
}
</script>

