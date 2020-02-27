<template>
  <div class="container">
    <h2>Messages</h2>
    <tipi-message>Esto sería un mensaje por defecto...</tipi-message>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <p>Las propiedades que se le pueden pasar a este complemento son</p>
    <ul>
      <li><code>icon</code>: si se añade este atributo mostrará el icono correspondiente</li>
      <li><code>type</code>: acepta como valores <code>success</code> y <code>error</code>, por defecto es <code>success</code> </li>
    </ul>

    <tipi-message icon type="error">Esto sería un mensaje de error con icono...</tipi-message>
    <tipi-message icon type="success">Esto sería un mensaje de éxito con icono...</tipi-message>
    <tipi-message icon type="info">Esto sería un mensaje de información con icono...</tipi-message>
    <tipi-message>Esto sería un mensaje de éxito sin icono...</tipi-message>
    <tipi-message type="error">Esto sería un mensaje de error sin icono...</tipi-message>
    <tipi-message type="info">Esto sería un mensaje de información sin icono...</tipi-message>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>

    <h3>HTML</h3>
    <pre v-highlightjs="ex3"><code class="html"></code></pre>


  </div>
</template>

<script>
import { TipiMessage } from 'tipi-uikit';

export default {
  name: 'Messages',
  components: {
    TipiMessage,
  },
  data() {
    return {
      ex1:
`<tipi-message>Esto sería un mensaje por defecto...</tipi-message>`,
      ex2:
`<tipi-message icon type="error">Esto sería un mensaje de error con icono...</tipi-message>
<tipi-message icon type="success">Esto sería un mensaje de éxito con icono...</tipi-message>
<tipi-message icon type="info">Esto sería un mensaje de información con icono...</tipi-message>
<tipi-message>Esto sería un mensaje de éxito sin icono...</tipi-message>
<tipi-message type="error">Esto sería un mensaje de error sin icono...</tipi-message>
<tipi-message type="info">Esto sería un mensaje de información sin icono...</tipi-message>`,
    ex3:
`<div class="c-message c-message--error">
  <div class="c-message__wrapper">
    <span class="c-message__icon"> <svg...> </span>
    Esto sería un mensaje de éxito con icono...
  </div>
</div>`,
    }
  },
}
</script>
