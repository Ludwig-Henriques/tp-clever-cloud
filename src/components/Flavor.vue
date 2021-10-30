<template>
  <div class="flavor">
    <span>{{name}}</span>
    <span>CPUs: {{cpus}}</span>
    <span>GPUs: {{gpus}}</span>
    <span>RAM: {{mem}}</span>
    <button @click="selectFlavor">Select</button>
  </div>
</template>

<script>
export default {
  name: 'Flavor',
  props: {
    flavor: Object
  },
  computed: {
    name () {
      return this.flavor.name
    },
    cpus () {
      return this.flavor.cpus
    },
    gpus () {
      return this.flavor.gpus
    },
    mem () {
      return this.flavor.mem
    }
  },
  methods: {
    selectFlavor() {
      let item = {
        nameVariant: this.$store.state.variantSelected.name,
        nameFlavor: this.name,
        price: this.flavor.price
      }
      this.$store.dispatch('addItem', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flavor {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  min-height: 50px;
}

.flavor span {
  margin-left: 10px;
}

.flavor button {
  margin-left: auto;
}

</style>
