<template>
  <button @click="selectVariant(variant)" class="variant" :class="{active: variant==variantSelected}">
    <img :src="logo" >
    <div class="variant-content">
      <span>{{name}}</span>
      <button v-if="variant==variantSelected" @click="selectVariant(variant)">Selected</button>
      <button v-else @click="selectVariant(variant)">Select</button>
    </div>
    
  </button>
</template>

<script>
export default {
  name: 'Variant',
  props: {
    variant: Object,
  },
  computed: {
    logo () {
      return this.variant.variant.logo
    },
    name () {
      return this.variant.name
    },
    variantSelected () {
      return this.$store.state.variantSelected
    }
  },
  methods: {
    selectVariant (value) {
      this.$store.dispatch('updateVariantSelected', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.variant {
  display: flex;
  width: calc(100% - 20px);
  justify-content: start;
  align-items: stretch;
  padding: 0 10px 0 0;
  margin: 10px;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
}

.variant.active, .variant:hover {
  border-color: #c49090
}

.variant-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
}

.variant span {
  font-size: 15px;
}

.variant img {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 70px;
  margin: -2px 10px -2px -2px;
}

.variant button {
  padding: 5px 15px;
  border: none;
  background-color: #dbd0d0;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.variant.active button, .variant button:hover {
  background-color: #c49090;
  color: #fff;
}

</style>
