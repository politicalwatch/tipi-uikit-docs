<template>
  <div class="container">
    <h2>Topic Pill</h2>
    <p>Muestra los topics en pastillas con su nombre corto y su color (si se pasa como parámetro el objecto <code>topicsStyle</code>). Este componente recibe como parámetro además el array con los <code>topics</code> a mostrar.</p>
    <tipi-topic-pill :topics="['ODS 1 - Fin de la Pobreza','ODS 11 - Ciudades y comunidades sostenibles','ODS 7 - Energía asequible y no contaminante']" :topicsStyles="{'ODS 1 - Fin de la Pobreza':{'shortname':'ODS 1','color':'#eb1c2d','image':'ods-1.svg'},'ODS 7 - Energía asequible y no contaminante':{'shortname':'ODS 7','color':'#fdb713','image':'ods-7.svg'},'ODS 11 - Ciudades y comunidades sostenibles':{'shortname':'ODS 11','color':'#f69c39','image':'ods-11.svg'}}"/>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>
    <p>TopicPill, a su vez, puede mostrar estas pastillas como enlaces a marcadores generados del tipo <code>#topic-N</code> si se especifíca el parámetro <code>with-links</code></p>
    <tipi-topic-pill :topics="['ODS 1 - Fin de la Pobreza','ODS 11 - Ciudades y comunidades sostenibles','ODS 7 - Energía asequible y no contaminante']" :topicsStyles="{'ODS 1 - Fin de la Pobreza':{'shortname':'ODS 1','color':'#eb1c2d','image':'ods-1.svg'},'ODS 7 - Energía asequible y no contaminante':{'shortname':'ODS 7','color':'#fdb713','image':'ods-7.svg'},'ODS 11 - Ciudades y comunidades sostenibles':{'shortname':'ODS 11','color':'#f69c39','image':'ods-11.svg'}}" with-links/>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>
    <tipi-topic-pill :topics="[]" :topicsStyles="{'no-topic':{'shortname':'Sin ODS'}}" />
    <pre v-highlightjs="ex3"><code class="html"></code></pre>

  </div>
</template>

<script>
import { TipiTopicPill } from 'tipi-uikit';

export default {
  name: 'TopicPill',
  components: {
    TipiTopicPill,
  },
  data() {
    return {
      ex1:
`<tipi-topic-pill :topics="initiative.topics" :topicsStyles="styles" />`,
      ex2:
`<tipi-topic-pill :topics="initiative.topics" :topicsStyles="styles" with-links />`,
      ex3:
`<tipi-topic-pill :topics="[]" :topicsStyles="{'no-topic':{'shortname':'Sin ODS'}}" />`,
    }
  },
}
</script>

