<template>
  <div class="container">
    <h2>Helpers</h2>
    <p>Posición y alineación</p>
    <ul>
      <li><code>.u-relative</code>: establece el valor <code>relative</code> a la propiedad <code>positin</code></li>
      <li><code>.u-block-center</code>: Establece lor márgenes laterales como automáticos, por lo que si la caja donde se aplica es un bloque quedará centrada en su contenedor.</li>
      <li><code>.u-text-center[@(breakpoint)]</code>: Centra el texto a partir del breakpoint especificado</li>
      <li><code>.u-text-left[@(breakpoint)]</code>: Alinea el texto a la izquierda a partir del breakpoint especificado</li>
      <li><code>.u-text-right[@(breakpoint)]</code>: Alinea el texto a la derecha a partir del breakpoint especificado</li>
    </ul>
    <p>Márgenes, espaciados y anchos</p>
    <ul>
      <li><code>.u-margin(-posicion)(-0...10)[@(breakpoint)]</code>: Establece margenes en la posición que se especifique usando el valor como multiplos de la variable <code>$spacer-unit</code> (por defecto 4px). todos los valores entre paréntesis son opcionales</li>
      <li><code>.u-padding(-posicion)(-0...10)[@(breakpoint)]</code>: Establece paddings en la posición que se especifique usando el valor como multiplos de la variable <code>$spacer-unit</code> (por defecto 4px). todos los valores entre paréntesis son opcionales</li>
      <li><code>.u-w(numero)[@(breakpoint)]</code>: Establece un ancho en porcentaje (%) del elemento, los valores de <code>numero</code> son determinados por la variable <code>$percent-widths</code>, por defecto (15, 20, 25, 33, 40 y 50)</li>
    </ul>

    <p>Ejemplos</p>
    <span class="u-bg-primary u-margin-left-10@sm u-block u-padding-4@sm u-w50@sm">u-block u-padding-5@sm u-w25@sm</span>

    <pre v-highlightjs="ex1"><code class="html"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'Helpers',
  data() {
    return {
      ex1: `<span class="u-margin-left-10@sm u-block u-padding-4@sm u-w50@sm">...</span>`,
    }
  },
}
</script>
