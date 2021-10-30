<template>
  <div id="app">
      <div class="total">Total</div>
      <div class="variants">Variants
      </div>
      <div class="flavors">
        Flavors
      </div>
      <div class="cart">
        Cart
      </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
body {
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-template-rows: 80px 1fr;
  grid-gap: 20px;
  box-sizing: border-box;
  padding: 20px;
}

.total{
  background-color: orange;
  grid-column: 1 / -1;
}

.variants {
  background-color: blue;
  overflow-y: scroll;
}
.flavors {
  background-color: red;
  overflow-y: scroll;
}
.cart {
  background-color: green;
  overflow-y: scroll;
}
</style>
