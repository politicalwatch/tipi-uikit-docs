<template>
  <div class="container">
    <h2>Texts</h2>
    <p>Utilidades para especificar un estilo de texto concreto</p>
    <p class="u-text-th1">Texto .u-text-th1</p>
    <p class="u-text-th2">Texto .u-text-th2</p>
    <p class="u-text-th3">Texto .u-text-th3</p>
    <p class="u-text-th4">Texto .u-text-th4</p>
    <p class="u-text-th5">Texto .u-text-th5</p>
    <p class="u-text-th6">Texto .u-text-th6</p>
    <p class="u-text-subtitle">Texto .u-subtitle</p>
    <p class="u-text-overline">Texto .u-overline</p>
    <p class="u-text-tbody">Texto .u-tbody (texto por defecto) Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam rerum amet mollitia ex tenetur beatae distinctio optio molestias repellendus eveniet quae eum molestiae cupiditate reiciendis excepturi quod, ad provident.</p>
    <p class="u-text-tbody2">Texto .u-tbody2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum ipsam rerum amet mollitia ex tenetur beatae distinctio optio molestias repellendus eveniet quae eum molestiae cupiditate reiciendis excepturi quod, ad provident.</p>

    <pre v-highlightjs="ex1"><code class="html"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'Texts',
  data() {
    return {
      ex1:
`    <p class="u-th1">Texto .u-th1</p>
    <p class="u-th2">Texto .u-th2</p>
    <p class="u-th3">Texto .u-th3</p>
    <p class="u-th4">Texto .u-th4</p>
    <p class="u-th5">Texto .u-th5</p>
    <p class="u-th6">Texto .u-th6</p>
    <p class="u-subtitle">Texto .u-subtitle</p>
    <p class="u-overline">Texto .u-overline</p>
    <p class="u-tbody">Texto .u-tbody ...</p>
    <p class="u-tbody2">Texto .u-tbody2 ...</p>`,
    }
  },
}
</script>
