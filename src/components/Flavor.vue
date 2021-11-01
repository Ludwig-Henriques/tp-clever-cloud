<template>
  <button @click="selectFlavor" class="flavor">
    <div class="flavor-name">
      <span>{{name}}</span>
      <span class="flavor-price">{{(price * 41.904).toFixed(2)}} €</span>
    </div>
    <div class="flavor-content">
      <div class="flavor-content-configuration">
        <p><span>CPUs:</span><span>{{cpus}}</span></p>
        <p><span>GPUs:</span><span>{{gpus}}</span></p>
        <p><span>RAM:</span><span>{{mem}}</span></p>
      </div>
      
      <button>Add to cart</button>
    </div>
  </button>
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
    },
    price () {
      return this.flavor.price
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
  width: calc(100% - 20px);
  justify-content: start;
  align-items: stretch;
  min-height: 50px;
  padding: 0 10px 0 0;
  margin: 10px;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
}

.flavor:hover {
  border-color: #6f916f;
}

.flavor-name {
  height: 70px;
  width: 70px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: -2px 10px -2px -2px;
  background-color: #6f916f;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center
}

.flavor-price { 
  font-weight: bold;
}

.flavor-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-grow: 1;
}

.flavor-content-configuration{
  display: flex;
  align-self: stretch;
}

.flavor-content-configuration p {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 15px;
  flex-grow: 1;
}

.flavor-content-configuration p span:first-child {
  font-size: 12px;
  font-weight: bold;
  margin-right: 3px;
}

.flavor button {
  padding: 5px 15px;
  border: none;
  background-color: #d0d5d0;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.flavor button:hover {
  background-color: #6f916f;
  color: #fff;
}

</style>
