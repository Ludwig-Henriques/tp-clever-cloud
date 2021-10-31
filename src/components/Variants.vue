<template>
  <div class="variants">
    <h2>Variants</h2>
    <p>Please select a variant</p>
    <Variant v-for="variant in variants" :key="variant.name" :variant="variant" />
  </div>
</template>

<script>

import Variant from './Variant.vue'

export default {
  name: 'Variants',
  components: {
    Variant
  },
  computed: {
    variants () {
      return this.$store.state.variants
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.variants {
  background-color: #dbd0d0;
  overflow-y: scroll;
}

.variants h2, .variants p {
  margin: 5px 0;
}

.variants h2 {
  text-transform: uppercase;
}

</style>
