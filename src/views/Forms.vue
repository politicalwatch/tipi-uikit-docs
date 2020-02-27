<template>
  <div class="container">
    <h2>Forms</h2>
    <h3>Inputs</h3>
    <div class="o-grid">
      <div class="o-grid__col u-12 u-4@md">
        <div class="c-input-label u-block">
          <label for="email">Email</label>
          <input type="email" placeholder="your@email.com">
        </div>
      </div>
      <div class="o-grid__col u-12 u-4@md">
        <div class="c-input-label c-input-label--disabled u-block">
          <label for="email">Email</label>
          <input type="email" placeholder="your@email.com">
        </div>
      </div>
      <div class="o-grid__col u-12 u-4@md">
        <div class="c-input-label c-input-label--error u-block">
          <label for="email">Email</label>
          <input type="email" placeholder="your@email.com">
        </div>
      </div>
    </div>
    <pre v-highlightjs="ex1"><code class="html"></code></pre>

    <h3>Selects</h3>

    <div class="o-grid">
      <div class="o-grid__col u-12 u-4@md">
        <div class="c-select-label u-block">
          <label for="select">Selecciona una opción</label>
          <select name="select" id="select">
            <option value="#">Option 1</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </select>
        </div>
      </div>
      <div class="o-grid__col u-12 u-4@md">
        <div class="c-select-label c-select-label--disabled u-block">
          <label for="select3">Selecciona una opción</label>
          <select name="select3" id="select3">
            <option value="#">Option 1</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </select>
        </div>
      </div>
      <div class="o-grid__col u-12 u-4@md">
        <div class="c-select-label c-select-label--error u-block">
          <label for="select2">Selecciona una opción</label>
          <select name="select2" id="select2">
            <option value="#">Option 1</option>
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </select>
        </div>
      </div>
    </div>
    <pre v-highlightjs="ex2"><code class="html"></code></pre>
    <h3>Multiselecs</h3>
    <p>Requiere instalar vue-multiselect: <code>yarn add vue-multiselect --save</code></p>

    <div class="c-select-label u-block">
      <label for="multiselect">Selecciona una opción</label>
      <multiselect
        selectedLabel="Seleccionado"
        deselectLabel="Pulsa para deseleccionar"
        :options="['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5']"
        v-model="value"
        name="multiselect" id="multiselect" placeholder="Cualquiera"
        allow-empty />
    </div>
    <pre v-highlightjs="ex3"><code class="html"></code></pre>

    <h3>Checkboxes</h3>
    <div class="c-checkbox">
      <input type="checkbox" id="check1"> <label for="check1">Texto de la etiqueta</label>
    </div>
    <div class="c-checkbox">
      <input type="checkbox" id="check2"> <label for="check2">Texto de la etiqueta</label>
    </div>
    <div class="c-checkbox">
      <input type="checkbox" id="check3"> <label for="check3">Texto de la etiqueta</label>
    </div>
    <pre v-highlightjs="ex4"><code class="html"></code></pre>


    <h3>Radio buttons</h3>
    <div class="c-radio">
      <input type="radio" name="radio" id="check4"> <label for="check4">Texto de la etiqueta</label>
    </div>
    <div class="c-radio">
      <input type="radio" name="radio" id="check5"> <label for="check5">Texto de la etiqueta</label>
    </div>
    <div class="c-radio">
      <input type="radio" name="radio" id="check6"> <label for="check6">Texto de la etiqueta</label>
    </div>
    <pre v-highlightjs="ex5"><code class="html"></code></pre>

    <h3>Datepicker</h3>
    <p>Requiere instalar vuejs-datepicker: <code>yarn add vuejs-datepicker --save</code></p>
    <div class="c-datepicker-label">
      <label for="startdate">Selecciona una fecha</label>
      <datepicker
        placeholder="dd/mm/aaaa"
        format="dd/MM/yyyy"
        id="startdate"
        typeable />
    </div>
    <pre v-highlightjs="ex6"><code class="html"></code></pre>

  </div>
</template>

<script>
import 'vue-multiselect/dist/vue-multiselect.min.css';
import Multiselect from 'vue-multiselect';
import Datepicker from 'vuejs-datepicker';


export default {
  name: 'Forms',
  components: {
    Multiselect,
    Datepicker,
  },
  data() {
    return {
      value: '',
      ex1:
`<div class="c-input-label u-block">
  <label for="email">Email</label>
  <input type="email" placeholder="your@email.com">
</div>
<div class="c-input-label c-input-label--disabled u-block">
  <label for="email">Email</label>
  <input type="email" placeholder="your@email.com">
</div>
<div class="c-input-label c-input-label--error u-block">
  <label for="email">Email</label>
  <input type="email" placeholder="your@email.com">
</div>
`,
    ex2:
`<div class="c-select-label u-block">
  <label for="select">Selecciona una opción</label>
  <select name="select" id="select">
    <option value="">Option 1</option>
    <option value="">Option 2</option>
    <option value="">Option 3</option>
    <option value="">Option 4</option>
    <option value="">Option 5</option>
  </select>
</div>
`,
    ex3:
`<div class="c-select-label u-block">
  <label for="multiselect">Selecciona una opción</label>
  <multiselect
    selectedLabel="Seleccionado"
    deselectLabel="Pulsa para deseleccionar"
    :options="['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4', 'Opción 5']"
    v-model="value"
    name="multiselect" id="multiselect" placeholder="Cualquiera"
    allow-empty />
</div>`,
      ex4:
`<div class="c-checkbox">
  <input type="checkbox" id="check1"> <label for="check1">Texto de la etiqueta</label>
</div>
<div class="c-checkbox">
  <input type="checkbox" id="check2"> <label for="check2">Texto de la etiqueta</label>
</div>
<div class="c-checkbox">
  <input type="checkbox" id="check3"> <label for="check3">Texto de la etiqueta</label>
</div>`,
    ex5:
`<div class="c-radio">
  <input type="radio" name="radio" id="check4"> <label for="check4">...</label>
</div>
<div class="c-radio">
  <input type="radio" name="radio" id="check5"> <label for="check5">...</label>
</div>
<div class="c-radio">
  <input type="radio" name="radio" id="check6"> <label for="check6">...</label>
</div>`,
      ex6:
`<div class="c-datepicker-label">
  <label for="startdate">Selecciona una fecha</label>
  <datepicker
    placeholder="dd/mm/aaaa"
    format="dd/MM/yyyy"
    id="startdate"
    typeable />
</div>`,
    }
  },
}
</script>
