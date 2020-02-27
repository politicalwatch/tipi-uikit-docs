<template>
  <div id="app">
    <div class="o-container">
      <header><h1 class="u-padding-top-2 u-padding-bottom-2">TipiUI Documentation</h1></header>
      <div class="o-grid">
        <aside class="o-grid__col u-12 u-3@md">
          <ul>
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/base">Base</router-link></li>
            <li>
              <router-link to="/container">Objetos</router-link>
              <ul>
                <li><router-link to="/container">Container</router-link></li>
                <li><router-link to="/grid">Grid</router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="/header">Componentes</router-link>
              <ul>
                <li><router-link to="/header">Header</router-link></li>
                <li><router-link to="/Navbar">Navbar</router-link></li>
                <li><router-link to="/messages">Messages</router-link></li>
                <li><router-link to="/buttons">Buttons</router-link></li>
                <li><router-link to="/icons">Icons</router-link></li>
                <li><router-link to="/forms">Forms</router-link></li>
                <li><router-link to="/splash">Splash</router-link></li>
                <li><router-link to="/initiative-card">Initiative Card</router-link></li>
                <li><router-link to="/text">Text</router-link></li>
                <li><router-link to="/initiative-meta">Initiative Meta</router-link></li>
                <li><router-link to="/loader">Loader</router-link></li>
                <li><router-link to="/deputy">Deputy</router-link></li>
                <li><router-link to="/topics">Topics</router-link></li>
                <li><router-link to="/topic-card">Topic Card</router-link></li>
                <li><router-link to="/topic-pill">Topic Pill</router-link></li>
                <li><router-link to="/topic-link">Topic Link</router-link></li>
              </ul>
            </li>
            <li>
              <router-link to="/colors">Utilidades</router-link>
              <ul>
                <li><router-link to="/colors">Colors</router-link></li>
                <li><router-link to="/offsets">Offsets</router-link></li>
                <li><router-link to="/helpers">Helpers</router-link></li>
                <li><router-link to="/visibility">Visibility</router-link></li>
                <li><router-link to="/texts">Texts</router-link></li>
                <li><router-link to="/borders">Borders</router-link></li>
              </ul>
            </li>
          </ul>
        </aside>
        <section class="o-grid__col u-12 u-9@md">
          <router-view/>
        </section>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  p, li {
    code {
      font-weight: bold;
      color: #666;
    }
  }
</style>
