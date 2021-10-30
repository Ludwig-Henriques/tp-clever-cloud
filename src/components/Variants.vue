<template>
  <div class="variants">
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

</style>
