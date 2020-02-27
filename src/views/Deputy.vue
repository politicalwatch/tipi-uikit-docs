<template>
  <div class="container">
    <h2>Deputy</h2>
    <p>Muestra la cabecera de pagina para un diputado concreto</p>
    <tipi-deputy :deputy="{ name: 'Nombre del diputado', 'image':  'http://www.congreso.es/wc/htdocs/web/img/diputados/99_14.jpg' }" :parliamentaryGroup="{ name: 'Grupo Parlamentario VOX', id: 'fc464404da6a44463d7e76db08761fd75a42b2eb', shortname: 'GVOX' }"/>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <p>Permite generar una lista de enlaces con del propio diputado si se incluyen entre las etiquetas del componente:</p>
    <tipi-deputy :deputy="{ name: 'Nombre del diputado', 'image':  'http://www.congreso.es/wc/htdocs/web/img/diputados/99_14.jpg' }" :parliamentaryGroup="{ name: 'Grupo Parlamentario VOX', id: 'fc464404da6a44463d7e76db08761fd75a42b2eb', shortname: 'GVOX' }">
      <a :href="url"><tipi-icon icon="twitter" /> Twitter</a>
      <a :href="`mailto:${url}`"><tipi-icon icon="mail" /> Email</a>
    </tipi-deputy>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>
  </div>
</template>

<script>
import { TipiDeputy, TipiIcon } from 'tipi-uikit';

export default {
  name: 'Deputy',
  components: {
    TipiDeputy,
    TipiIcon
  },
  data() {
    return {
      ex1:
`<tipi-deputy :deputy="DiputadoObject" :parliamentaryGroup="GrupoObject" />`,
      ex2:
`<tipi-deputy :deputy="DiputadoObject" :parliamentaryGroup="GrupoObject">
  <a :href="url"><tipi-icon icon="twitter" /> Twitter</a>
  <a :href="\`mailto:\${url}\`"><tipi-icon icon="mail" /> Email</a>
</tipi-deputy>`,
    ex3:
`<div class="c-loader">
  <div class="c-loader__spinner">
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
    <div class="c-loader__spinner-dot"></div>
  </div>
  <div class="c-loader__text">
    <h4 class="c-loader__title">Cargando datos</h4>
    Puede llevar unos minutos
  </div>
</div>`,
    }
  },
}
</script>

