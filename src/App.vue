<template>
  <div id="app">
      <Total />
      <Variants />
      <Flavors />
      <Cart />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Total from './components/Total.vue'
import Variants from './components/Variants.vue'
import Flavors from './components/Flavors.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    Total,
    Variants,
    Flavors,
    Cart
  }
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
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px minmax(calc(33% - 45px), 1fr);
  grid-gap: 10px;
  box-sizing: border-box;
  padding: 10px;
}

</style>
