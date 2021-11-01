<template>
  <div class="item">
    <span class="item-nameVariant">{{nameVariant}}</span>
    <div class="item-content">
      <div class="item-content-description">
        <span>{{nameFlavor}}</span>
        <span class="item-price">{{(price * 41.904).toFixed(2)}} €</span>
      </div>
      <button @click="removeItem()">Remove</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: Object,
  },
  computed: {
    nameVariant () {
      return this.item.nameVariant
    },
    nameFlavor () {
      return this.item.nameFlavor
    },
    price () {
      return this.item.price
    },
  },
  methods: {
    removeItem() {
      this.$store.dispatch('removeItem', this.item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.item {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 10px 0 0;
  margin: 10px;
  background-color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

.item-nameVariant{
  height: 70px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #8383bb;
  color: #fff;
  margin-right: 10px;
}

.item-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.item-content-description {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.item-content-description span {
  font-size: 0.9rem;
}

.item-price {
  margin-left: 5px;
  color: #8383bb;
}

.item span {
  font-weight: bold;
}

.item button {
  padding: 5px 15px;
  border: none;
  background-color: #C49090;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.8rem;
}

.item button:hover {
  background-color: #a85151;
}

</style>
