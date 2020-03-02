<template>
  <div class="container">
    <h2>Topics</h2>
    <p>Muestra la lista de topics y tags enlazados a su búsqueda, recibe como parámetro un array con los <code>topics</code> de la iniciativa, otro array con los <code>tags</code>, y por último, el parámetro <code>topicsStyles</code> que es un objeto con los estilos de cada temática</p>
    <tipi-topics meta="ODS Tratados" :topics="['ODS 1 - Fin de la Pobreza','ODS 11 - Ciudades y comunidades sostenibles','ODS 7 - Energía asequible y no contaminante']" :tags="[{'tag':'Bono social','topic':'ODS 1 - Fin de la Pobreza','times':1,'subtopic':'1.4 Recursos económicos y servicios básicos'},{'tag':'Bono social','topic':'ODS 11 - Ciudades y comunidades sostenibles','times':8,'subtopic':'11.1 Acceso a viviendas adecuadas'},{'tag':'Bono social y electricidad','topic':'ODS 7 - Energía asequible y no contaminante','times':7,'subtopic':'7.1 Acceso universal a energía'},{'tag':'Factura eléctrica','topic':'ODS 7 - Energía asequible y no contaminante','times':7,'subtopic':'7.1 Acceso universal a energía'}]" :topicsStyles="{'ODS 1 - Fin de la Pobreza':{'shortname':'ODS 1','color':'#eb1c2d','image':'ods-1.svg'},'ODS 7 - Energía asequible y no contaminante':{'shortname':'ODS 7','color':'#fdb713','image':'ods-7.svg'},'ODS 11 - Ciudades y comunidades sostenibles':{'shortname':'ODS 11','color':'#f69c39','image':'ods-11.svg'}}"/>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>
    <p>Esto sería un ejemplo de <code>topicsStyles</code></p>
    <pre v-highlightjs="ex2"><code class="js"></code></pre>

  </div>
</template>

<script>
import { TipiTopics } from 'tipi-uikit';

export default {
  name: 'Topics',
  components: {
    TipiTopics,
  },
  data() {
    return {
      ex1:
`<tipi-topics meta="ODS tratados" :topics="initiative.topics" :tags="initiative.tags" :topicsStyles="styles.topics" />`,
      ex2:
`{
   "ODS 1 - Fin de la Pobreza":{
      "shortname":"ODS 1",
      "color":"#eb1c2d",
      "image":"ods-1.svg"
   },
   "ODS 7 - Energía asequible y no contaminante":{
      "shortname":"ODS 7",
      "color":"#fdb713",
      "image":"ods-7.svg"
   },
   "ODS 11 - Ciudades y comunidades sostenibles":{
      "shortname":"ODS 11",
      "color":"#f69c39",
      "image":"ods-11.svg"
   }
}`,
    }
  },
}
</script>

