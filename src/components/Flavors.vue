<template>
  <div class="flavors">
    <h2>Flavors</h2>
    <p>Add the flavor to the cart</p>
    <Flavor v-for="flavor in flavors" :key="flavor.name" :flavor="flavor" />
  </div>
</template>

<script>

import Flavor from './Flavor.vue'

export default {
  name: 'Flavors',
  components: {
    Flavor
  },
  computed: {
    flavors () {
      return this.$store.state.variantSelected.flavors
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flavors {
  background-color: #d0d5d0;
  overflow-y: scroll;
  border: 2px solid #d0d5d0;
}

.flavors h2, .flavors p {
  margin: 5px 0;
}

.flavors h2 {
  text-transform: uppercase;
}

</style>
