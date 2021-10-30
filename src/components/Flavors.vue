<template>
  <div class="flavors">
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
}

</style>
