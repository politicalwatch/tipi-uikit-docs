<template>
  <div class="container">
    <h2>Buttons</h2>
    <p>
      <a href="#" class="c-button u-margin-right-2">Botón texto</a>
      <a href="#" class="c-button" disabled>Botón texto disabled</a>
    </p>
    <p>
      <a href="#" class="c-button c-button--primary u-margin-right-2">Botón primary</a>
      <a href="#" class="c-button c-button--primary" disabled>Botón primary disabled</a>
    </p>
    <p>
      <a href="#" class="c-button c-button--secondary u-margin-right-2">Botón secondary</a>
      <a href="#" class="c-button c-button--secondary" disabled>Botón secondary disabled</a>
    </p>
    <p>
      <a href="#" class="c-button c-button--primary c-button--icon-left u-margin-right-2"><tipi-icon :icon="icon" />Botón primary icon</a>
      <a href="#" class="c-button c-button--secondary c-button--icon-left"><tipi-icon icon="success" />Botón secondary icon</a>
    </p>
    <p>
      <a href="#" class="c-button c-button--primary c-button--icon-right u-margin-right-2">Botón primary icon <tipi-icon :icon="icon" /></a>
      <a href="#" class="c-button c-button--secondary c-button--icon-right">Botón secondary icon <tipi-icon icon="success" /></a>
    </p>
    <p>
      <a href="#" class="c-button c-button--compact u-margin-right-2">Botón compacto texto</a>
      <a href="#" class="c-button c-button--compact" disabled>Botón compacto texto disabled</a>
    </p>
    <p>
      <a href="#" class="c-button c-button--compact c-button--primary u-margin-right-2">Botón compacto primary</a>
      <a href="#" class="c-button c-button--compact c-button--primary" disabled>Botón compacto primary disabled</a>
    </p>
    <p>
      <a href="#" class="c-button c-button--compact c-button--secondary u-margin-right-2">Botón compacto secondary</a>
      <a href="#" class="c-button c-button--compact c-button--secondary" disabled>Botón compacto secondary disabled</a>
    </p>
    <p>
      <a href="#" class="c-button c-button--compact c-button--primary c-button--icon-left u-margin-right-2"><tipi-icon :icon="icon" />Botón compacto primary icon</a>
      <a href="#" class="c-button c-button--compact c-button--icon-left c-button--secondary"><tipi-icon icon="success" />Botón compacto secondary icon</a>
    </p>
    <p>
      <a href="#" class="c-button c-button--compact c-button--primary c-button--icon-right u-margin-right-2">Botón compacto primary icon <tipi-icon :icon="icon" /></a>
      <a href="#" class="c-button c-button--compact c-button--icon-right c-button--secondary">Botón compacto secondary icon <tipi-icon icon="success" /></a>
    </p>
    <div class="u-bg-black u-padding-3">
      <a href="#" class="c-button c-button--outline c-button--icon-right u-margin-right-2">Botón outline icon <tipi-icon :icon="icon" /></a>
      <a href="#" class="c-button c-button--outline c-button--icon-right" disabled>Botón outline icon disabled <tipi-icon icon="success" /></a>
    </div>

    <pre v-highlightjs="ex1"><code class="html"></code></pre>
  </div>
</template>

<script>
import { TipiIcon } from 'tipi-uikit';
import icon from '!html-loader!../assets/icon-close.svg';

export default {
  name: 'Buttons',
  components: {
    TipiIcon,
  },
  data() {
    return {
      ex1:
`<p>
  <a href="#" class="c-button">Botón texto</a>
  <a href="#" class="c-button" disabled>Botón texto disabled</a>
</p>
<p>
  <a href="#" class="c-button c-button--primary">Botón primary</a>
  <a href="#" class="c-button c-button--primary" disabled>Botón primary disabled</a>
</p>
<p>
  <a href="#" class="c-button c-button--secondary">Botón secondary</a>
  <a href="#" class="c-button c-button--secondary" disabled>Botón secondary disabled</a>
</p>
<p>
  <a href="#" class="c-button c-button--primary c-button--icon-left"><tipi-icon :icon="icon" />Botón primary icon/a>
  <a href="#" class="c-button c-button--secondary c-button--icon-left"><tipi-icon icon="success" />Botón secondary icon</a>
</p>
<p>
  <a href="#" class="c-button c-button--primary c-button--icon-right">Botón primary <tipi-icon :icon="icon" /></a>
  <a href="#" class="c-button c-button--secondary c-button--icon-right">Botón primary disabled <tipi-icon icon="success" /></a>
</p>
<p>
  <a href="#" class="c-button c-button--compact">Botón compacto texto</a>
  <a href="#" class="c-button c-button--compact" disabled>Botón compacto texto disabled</a>
</p>
<p>
  <a href="#" class="c-button c-button--compact c-button--primary">Botón compacto primary</a>
  <a href="#" class="c-button c-button--compact c-button--primary" disabled>Botón compacto primary disabled</a>
</p>
<p>
  <a href="#" class="c-button c-button--compact c-button--secondary">Botón compacto secondary</a>
  <a href="#" class="c-button c-button--compact c-button--secondary" disabled>Botón compacto secondary disabled</a>
</p>
<p>
  <a href="#" class="c-button c-button--compact c-button--primary c-button--icon-left"><tipi-icon :icon="icon" />Botón compacto primary icon</a>
  <a href="#" class="c-button c-button--compact c-button--icon-left c-button--secondary"><tipi-icon icon="success" />Botón compacto secondary icon</a>
</p>
<p>
  <a href="#" class="c-button c-button--compact c-button--primary c-button--icon-right">Botón compacto primary icon <tipi-icon :icon="icon" /></a>
  <a href="#" class="c-button c-button--compact c-button--icon-right c-button--secondary">Botón compacto secondary icon <tipi-icon icon="success" /></a>
</p>
<p>
  <a href="#" class="c-button c-button--outline c-button--icon-right u-margin-right-2">Botón outline icon <tipi-icon :icon="icon" /></a>
  <a href="#" class="c-button c-button--outline c-button--icon-right" disabled>Botón outline icon disabled <tipi-icon icon="success" /></a>
</p>
`,
      icon,
    }
  },
}
</script>
