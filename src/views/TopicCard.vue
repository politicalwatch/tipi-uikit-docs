<template>
  <div class="container">
    <h2>Topic Card</h2>
    <p>Muestra la cabecera de una temática concreta, recibe como parámetro el propio <code>topic</code> y el objeto de estilos de topics <code>topicsStyles</code></p>
    <tipi-topic-card :topic="{'icon':'S_SDG-goals_icons-individual-rgb-01.png','description':['Acabar con la pobreza en todas sus formas en todo el mundo'],'id':'b6edb295ec18e1100eccdc468a5b9c1bdff2070f','shortname':'ODS 1','name':'ODS 1 - Fin de la Pobreza'}" :topicsStyles="{'ODS 1 - Fin de la Pobreza':{'shortname':'ODS 1','color':'#eb1c2d','image':'ods-1.svg'}}"/>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>
    <p>Puedes ver un ejemplo de topicStyles en la documentación del componentent <a href="/topics">Topics</a></p>
  </div>
</template>

<script>
import { TipiTopicCard } from 'tipi-uikit';

export default {
  name: 'topic-card',
  components: {
    TipiTopicCard,
  },
  data() {
    return {
      ex1:
`<tipi-topic-card :topic="topic" :topicsStyles="styles" />`,
    }
  },
}
</script>

