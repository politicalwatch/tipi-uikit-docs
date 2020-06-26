<template>
  <div class="container">
    <h2>Icons</h2>
    <p>Puedes usar los iconos definidos por defecto en el UI Kit de esta forma:</p>
    <div class="o-grid">
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="advanced" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="bell" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="calendar" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="chevron-down" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="chevron-left" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="chevron-right" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="chevron-up" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="close-menu" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="close" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="download" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="error" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="hamburger" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="mail" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="open-blank" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="success" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="building" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="twitter" /></div>
      <div class="o-grid__col o-grid__col--fill"><tipi-icon icon="github" /></div>
    </div>
    <pre v-highlightjs="ex"><code class="html"></code></pre>
    <p>Puedes especificar el color manualmente usando la propiedad <code>color</code>:</p>
    <tipi-icon icon="success" color="#ccc"/>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>
    <p>También puedes especificar el color entre los colores definidos usando la clase modificadora<code>c-icon--(color)</code>:</p>
    <tipi-icon icon="success" class="c-icon--primary"/>
    <tipi-icon icon="advanced" class="c-icon--secondary"/>
    <tipi-icon icon="error" class="c-icon--error"/>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>
    <p>Puedes usar tu propio icono SVG cargando previamente el asset y pasándolo como parámetro</p>
    <tipi-icon :icon="icon" />
    <pre v-highlightjs="ex3"><code class="js"></code></pre>
  </div>
</template>

<script>
import { TipiIcon } from 'tipi-uikit';
import icon from '!html-loader!../assets/icon-close.svg';

export default {
  name: 'Icons',
  components: {
    TipiIcon,
  },
  data() {
    return {
      ex:
`<tipi-icon icon="advanced "/>
<tipi-icon icon="bell" />
<tipi-icon icon="calendar" />
<tipi-icon icon="chevron-down" />
<tipi-icon icon="chevron-left" />
<tipi-icon icon="chevron-right" />
<tipi-icon icon="chevron-up" />
<tipi-icon icon="close-menu" />
<tipi-icon icon="close" />
<tipi-icon icon="download" />
<tipi-icon icon="error" />
<tipi-icon icon="hamburger" />
<tipi-icon icon="mail" />
<tipi-icon icon="open-blank" />
<tipi-icon icon="success" />
<tipi-icon icon="building" />
<tipi-icon icon="twitter" />
<tipi-icon icon="github" />`,
      ex1:
`<tipi-icon icon="success" color="#ccc"/>`,
      ex2:
`<tipi-icon icon="success" class="c-icon--primary"/>
<tipi-icon icon="advanced" class="c-icon--secondary"/>
<tipi-icon icon="error" class="c-icon--error"/>`,
      ex3:
`//Import svg icon with html-loader
import icon from '!html-loader!../assets/icon-close.svg';

//add icon as data in your component
data() {
  return {
    icon,
  }
}

//Use in your template
<tipi-icon :icon="icon" />`,
      icon,
    }
  },
}
</script>
