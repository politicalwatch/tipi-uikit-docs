<template>
  <div class="home">
    <h2>Instalar TipiUI Kit</h2>
    <p>Para instalar TipiUI Kit es necesario ejecutar en tu proyecto el siguiente comando:</p>
    <p><code>yarn add politicalwatch/tipi-uikit --save</code></p>

    <p>Una vez instalado en el archivo principal de tu proyecto (generalmente main.js) importa la hoja de estilos:</p>
    <p><code>import '../node_modules/tipi-uikit/src/styles/main.scss';</code></p>

    <p>Ahora puedes importar cualquiera de los componentes de TipiUI Kit como harías normalmente, en tus vistas y componentes añadiendo, por ejemplo:</p>

    <p><code>import { TipiMessage } from 'tipi-uikit';</code></p>

    <h2>Sobreescribir variables SCSS</h2>

    <p>Si quieres sobreescribir variables, añade a tu proyecto un archivo .scss, por ejemplo en <code>src/styles/_variables.scss</code> y a continuación, en tu configuración de webpack o vue-cli (vue.config.js) añade lo siguiente:</p>

    <pre v-highlightjs="ex1"><code class="js"></code></pre>

    <p>En tu archivo <code>_variables.scss</code> ya puedes sobreescribir las variables que necesites, te dejanmos un ejemplo de ello:</p>

    <pre v-highlightjs="ex2"><code class="scss"></code></pre>
  </div>
</template>

<script>

export default {
  name: 'GettingStarted',
  data() {
    return {
      ex1:
`module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: \`@import "@/styles/_variables.scss";\`,
      },
    },
  },
};`,
      ex2:
`
// Colors
$primary: #ff6565 !default;
$black: #000 !default;
$white: #fff !default;
$neutral: #ddd !default;
$secondary: #9cb0bf !default;
$secondary-dark: #2d4252 !default;
$secondary-light: #f4f6f8 !default;
$primary-dark: #d64949 !default;
$primary-light: #ffe0e0 !default;
$error: #e81c1c !default;
$completed: #4dca7f !default;

$colors: (
  "primary": $primary,
  "primary-dark": $primary-dark,
  "primary-light": $primary-light,
  "secondary": $secondary,
  "secondary-dark": $secondary-dark,
  "secondary-light": $secondary-light,
  "error": $error,
  "white": $white,
  "black": $black,
  "completed": $completed,
  "neutral": $neutral,
) !default;


//Breakpoints
$xs: 450px !default;
$sm: 768px !default;
$md: 992px !default;
$lg: 1024px !default;
$xl: 1200px !default;

$xxs-max: $xs - 0.1 !default;
$xs-max: $sm - 0.1 !default;
$sm-max: $md - 0.1 !default;
$md-max: $lg - 0.1 !default;
$lg-max: $xl - 0.1 !default;

$breakpoints: (
  xs: $xs,
  sm: $sm,
  md: $md,
  lg: $lg,
  xl: $xl
) !default;

$breakpoints-max: (
  max-xs: $xs-max,
  max-sm: $sm-max,
  max-md: $md-max,
  max-lg: $lg-max
) !default;

$breakpoint-class: '\\@' !default;

//Fonts
@import url('https://fonts.googleapis.com/css?family=Rubik:300,400,500&display=swap');

$font-primary: 'Rubik', sans-serif !default;

//Spacers and sizes

$base-radius: 4px;

$o-container: 1120px !default;
$o-container__gutter:               32px !default;
$o-container__gutter-single:        $o-container__gutter/2 !default;
$container-max: $o-container + $o-container__gutter !default;

$grid-gap: 32px !default;
$grid-gap-single: $grid-gap/2 !default;

$spacer-unit: 8px !default;

$grid-fractions: (
  '1': 1/12,
  '2': 2/12,
  '2-5': 2/10,
  '3': 3/12,
  '4': 4/12,
  '5': 5/12,
  '6': 6/12,
  '7': 7/12,
  '8': 8/12,
  '9': 9/12,
  '10': 10/12,
  '11': 11/12,
  '12': 12/12
) !default;

$o-section-gap: $spacer-unit * 4 !default;
$o-section-gap-lg: $o-section-gap !default;

$percent-widths: (
  15,
  20,
  25,
  33,
  40,
  50
) !default;

$logo-mobile-width: 200px !default;
$logo-desktop-width: 350px !default;
$decorator-mobile-height: $spacer-unit * 6 !default;
$decorator-desktop-height: $spacer-unit * 12 !default;
`,
    }
  }
}
</script>
