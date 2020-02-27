<template>
  <div class="container">
    <h2>Text</h2>
    <p>Este componente se usa para mostrar información con un pretítulo ya sean listados o texto simple.</p>
    <h3>Texto simple</h3>
    <tipi-text meta="Etiqueta" value="Mi Dato XXXX" />
    <pre v-highlightjs="ex1"><code class="html"></code></pre>
    <h3>Listado</h3>
    <tipi-text meta="Etiqueta" :value="['Valor 1.XXXX', 'Valor 2.XXXX', 'Valor 3.XXXX']" />
    <pre v-highlightjs="ex2"><code class="html"></code></pre>
    <h3>Listados "complejos"</h3>
    <p>Específicamente se le puede pasar como parámetro <code>value</code> un listado de diputados o grupos parlamentarios, en ese caso hay que pasarle también un parámetro <code>type</code> que defina qué tipo de listado es (coincide con el slug usado en la url) y una fuente de datos para obtener los enlaces, nombres completos y fotografías. </p>
    <div class="o-grid">
      <div class="o-grid__col o-grid__col--fill">
        <div class="c-text"><h6 class="c-text__label">Diputada/o</h6><ul class="c-text__list"><li class="c-text__list-item c-text__list-item--image"><a href="#" class=""><img alt="Angulo Romero, María Teresa" src="http://www.congreso.es/wc/htdocs/web/img/diputados/113_14.jpg" class="c-text__image"></a><div class="c-text__wrapper"><a href="#" class="">Angulo Romero, María Teresa</a></div></li><li class="c-text__list-item c-text__list-item--image"><a href="#" class=""><img alt="Píriz Maya, Víctor Valentín" src="http://www.congreso.es/wc/htdocs/web/img/diputados/9_14.jpg" class="c-text__image"></a><div class="c-text__wrapper"><a href="#" class="">Píriz Maya, Víctor Valentín</a></div></li></ul></div>
      </div>
      <div class="o-grid__col o-grid__col--fill">
        <div class="c-text"><h6 class="c-text__label">Autor</h6><ul class="c-text__list"><li class="c-text__list-item"><div class="c-text__wrapper"><a href="#" class="">Grupo Parlamentario Popular</a></div></li></ul></div>
      </div>
    </div>
    <pre v-highlightjs="ex3"><code class="html"></code></pre>

  </div>
</template>

<script>
import { TipiText } from 'tipi-uikit';

export default {
  name: 'Text',
  components: {
    TipiText,
  },
  data() {
    return {
      ex1:
`<tipi-text meta="Etiqueta" value="Mi Dato XXXX" />`,
      ex2:
`<tipi-text
  meta="Etiqueta"
  :value="['Valor 1.XXXX', 'Valor 2.XXXX', 'Valor 3.XXXX']" />`,
      ex3:
`<tipi-text
  meta="Autor"
  :value="initiative.authors"
  type="parliamentarygroups"
  :source="allParliamentaryGroups" />

<tipi-text meta="Diputada/o"
  :value="initiative.deputies"
  type="deputies"
  :source="allDeputies" />`,
    }
  },
}
</script>
