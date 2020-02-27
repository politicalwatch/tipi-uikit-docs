<template>
  <div class="container">
    <h2>Initiative Card</h2>
    <p>Se puede incluir la tarjeta de la inicitiativa (usada en resultados de búsqueda) haciendo uso del componente <code>tipi-initiative-card</code> y el resultado es el indicado a continuación</p>
    <div class="u-12 u-5@sm u-border u-padding-2">
      <div class="c-initiative-card">
        <div class="c-initiative-card__topics c-topics">
          <div class="c-topics__topic" style="background-color:#f69c39">
            ODS 11
          </div>

          <div class="c-topics__topic" style="background-color:#02558b">
            ODS 16
          </div>
        </div>
        <h2 class="c-initiative-card__title"><a href="#"
            class="">Medidas que la Jefatura Superior de Policía de Valencia va a adoptar para garantizar la seguridad
            ciudadana en el barrio de Ciutat Vella de dicha ciudad</a></h2>
        <div class="c-initiative-card__authors">
          <h3 class="c-initiative-card__label">Diputado/a</h3>
          <p>Gil Lázaro, Ignacio<br>Esteban Calonje, Cristina Alicia<br>Utrilla Cano, Julio</p>
        </div>
        <div class="c-initiative-card__authors">
          <h3 class="c-initiative-card__label">Autor</h3>
          <p>Grupo Parlamentario VOX</p>
        </div>
        <div class="o-grid">
          <div class="o-grid__col">
            <p class="c-initiative-card__date">Actualizado hace 23 días</p>
          </div>
          <div class="o-grid__col o-grid__col--right">
            <a href="#" target="_blank">
              <span class="c-icon c-icon--secondary c-icon--type-open-blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                  <path fill="#2D4252"
                    d="M14.222 14.222H1.778V1.778H8V0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V8h-1.778v6.222zM9.778 0v1.778h3.2l-8.711 8.71 1.244 1.245 8.711-8.71v3.2H16V0H9.778z">
                  </path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <p>Para hacer uso del componente debemos pasar 3 parámetros:</p>
    <ul>
      <li><code>initiative</code>: Objeto de una iniciativa devuelto por la api</li>
      <li><code>extendedLayout</code>: Valor boleano que indica si el layout de la tarjeta es extendido o compacto (menos información)</li>
      <li><code>topicsStyles</code>: Objeto con los estilos de los topics (shortname y color) especificado en la configuración de la app principal</li>
    </ul>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <p>El markup HTML del componente iniciativa es el siguiente:</p>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>

  </div>
</template>

<script>

export default {
  name: 'InitiativeCard',
  data() {
    return {
      ex1:
`<tipi-initiative-card
  :initiative="initiative"
  :extendedLayout="extendedLayout"
  :topicsStyles="topicsStyles"
/>`,
      ex2:
`<div class="c-initiative-card">
  <div class="c-initiative-card__topics c-topics">
    <div class="c-topics__topic" style="background-color:#f69c39">
      ODS 11
    </div>

    <div class="c-topics__topic" style="background-color:#02558b">
      ODS 16
    </div>
  </div>
  <h2 class="c-initiative-card__title">
    <a href="#">...</a>
  </h2>
  <div class="c-initiative-card__authors">
    <h3 class="c-initiative-card__label">Diputado/a</h3>
    <p>... <br>... <br>...</p>
  </div>
  <div class="c-initiative-card__authors">
    <h3 class="c-initiative-card__label">Autor</h3>
    <p>...</p>
  </div>
  <div class="o-grid">
    <div class="o-grid__col">
      <p class="c-initiative-card__date">Actualizado hace 23 días</p>
    </div>
    <div class="o-grid__col o-grid__col--right">
      <a href="#" target="_blank">
        <span class="c-icon c-icon--secondary c-icon--type-open-blank">
          <svg
            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path fill="#2D4252"
              d="M14.222 14.222H1.778V1.778H8V0H1.778C.8 0 0 .8 0 1.778v12.444C0 15.2.8 16 1.778 16h12.444C15.2 16 16 15.2 16 14.222V8h-1.778v6.222zM9.778 0v1.778h3.2l-8.711 8.71 1.244 1.245 8.711-8.71v3.2H16V0H9.778z">
            </path>
          </svg>
        </span>
      </a>
    </div>
  </div>
</div>`,
    }
  },
}
</script>
