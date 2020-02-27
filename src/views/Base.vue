<template>
  <div class="container">
    <h2>Base</h2>
    <h3>Listados</h3>
    <div class="o-grid u-margin-bottom-4">
      <div class="o-grid__col o-grid__col--fill">
        <ul>
          <li>Texto del elemento lista</li>
          <li>Texto del elemento lista</li>
          <li>Texto del elemento lista
            <ul>
              <li>Texto del subelemento lista</li>
              <li>Texto del subelemento lista</li>
              <li>Texto del subelemento lista</li>
              <li>Texto del subelemento lista</li>
              <li>Texto del subelemento lista</li>
            </ul>
          </li>
          <li>Texto del elemento lista</li>
          <li>Texto del elemento lista</li>
        </ul>
      </div>
      <div class="o-grid__col o-grid__col--fill">
        <ol>
          <li>Texto del elemento lista</li>
          <li>Texto del elemento lista</li>
          <li>Texto del elemento lista
            <ol>
              <li>Texto del subelemento lista</li>
              <li>Texto del subelemento lista</li>
              <li>Texto del subelemento lista</li>
              <li>Texto del subelemento lista</li>
              <li>Texto del subelemento lista</li>
            </ol>
          </li>
          <li>Texto del elemento lista</li>
          <li>Texto del elemento lista</li>
        </ol>
      </div>
    </div>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <h3>Blockquotes</h3>
    <blockquote>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </blockquote>

    <pre v-highlightjs="ex2"><code class="html"></code></pre>


    <h3>Formularios</h3>
    <div class="o-grid u-margin-bottom-4">
      <div class="o-grid__col u-6">
        <p><input type="text" placeholder="Input text"></p>
      </div>
      <div class="o-grid__col u-6">
        <p><input type="email" placeholder="Input email"></p>
      </div>
      <div class="o-grid__col u-6">
        <p><input type="password" placeholder="Input password"></p>
      </div>
      <div class="o-grid__col u-6">
        <p><textarea placeholder="Textarea"></textarea></p>
      </div>
    </div>
    <pre v-highlightjs="ex3"><code class="html"></code></pre>

    <h3>Tablas</h3>
    <p>Las tablas responsive tendrán la siguiente estructura: </p>
    <table>
      <thead>
        <tr>
          <th>Heading 1</th>
          <th>Heading 2</th>
          <th>Heading 3</th>
          <th>Heading 4</th>
          <th>Heading 5</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Heading 1">Texto tabla valor 1</td>
          <td data-label="Heading 2">Texto tabla valor 2</td>
          <td data-label="Heading 3">Texto tabla valor 3</td>
          <td data-label="Heading 4">Texto tabla valor 4</td>
          <td data-label="Heading 5">Texto tabla valor 5</td>
        </tr>
        <tr>
          <td data-label="Heading 1">Texto tabla valor 1</td>
          <td data-label="Heading 2">Texto tabla valor 2</td>
          <td data-label="Heading 3">Texto tabla valor 3</td>
          <td data-label="Heading 4">Texto tabla valor 4</td>
          <td data-label="Heading 5">Texto tabla valor 5</td>
        </tr>
        <tr>
          <td data-label="Heading 1">Texto tabla valor 1</td>
          <td data-label="Heading 2">Texto tabla valor 2</td>
          <td data-label="Heading 3">Texto tabla valor 3</td>
          <td data-label="Heading 4">Texto tabla valor 4</td>
          <td data-label="Heading 5">Texto tabla valor 5</td>
        </tr>
        <tr>
          <td data-label="Heading 1">Texto tabla valor 1</td>
          <td data-label="Heading 2">Texto tabla valor 2</td>
          <td data-label="Heading 3">Texto tabla valor 3</td>
          <td data-label="Heading 4">Texto tabla valor 4</td>
          <td data-label="Heading 5">Texto tabla valor 5</td>
        </tr>
      </tbody>
    </table>
    <pre v-highlightjs="ex4"><code class="html"></code></pre>

  </div>
</template>

<script>
export default {
  name: 'Base',
  data() {
    return {
      ex1:
`<ul>
  <li>Texto del elemento lista</li>
  <li>Texto del elemento lista
    <ul>
      <li>Texto del subelemento lista</li>
      <li>Texto del subelemento lista</li>
    </ul>
  </li>
  <li>Texto del elemento lista</li>
</ul>
<ol>
  <li>Texto del elemento lista</li>
  <li>Texto del elemento lista
    <ol>
      <li>Texto del subelemento lista</li>
      <li>Texto del subelemento lista</li>
    </ol>
  </li>
  <li>Texto del elemento lista</li>
</ol>`,
      ex2:
`<blockquote>...</blockquote>`,
      ex3:
`<div class="o-grid u-margin-bottom-4">
  <div class="o-grid__col u-6">
    <p><input type="text" placeholder="Input text"></p>
  </div>
  <div class="o-grid__col u-6">
    <p><input type="email" placeholder="Input email"></p>
  </div>
  <div class="o-grid__col u-6">
    <p><input type="password" placeholder="Input password"></p>
  </div>
  <div class="o-grid__col u-6">
    <p><textarea placeholder="Textarea"></textarea></p>
  </div>
</div>`,
      ex4:
`<table>
  <thead>
    <tr>
      <th>Heading 1</th>
      <th>Heading 2</th>
      <th>Heading 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="Heading 1">...</td>
      <td data-label="Heading 2">...</td>
      <td data-label="Heading 3">...</td>
    </tr>
    <tr>
      <td data-label="Heading 1">...</td>
      <td data-label="Heading 2">...</td>
      <td data-label="Heading 3">...</td>
    </tr>
  </tbody>
</table>`,
    }
  },
}
</script>
