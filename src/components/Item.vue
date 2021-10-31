<template>
  <div class="item">
    <span class="item-nameVariant">{{nameVariant}}</span>
    <span>{{nameFlavor}}</span>
    <span class="item-price">{{(price * 41.904).toFixed(2)}} €</span>
    <button @click="removeItem()">Remove</button>
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
  min-height: 50px;
  padding: 0 10px 0 0;
  margin: 10px;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  cursor: pointer;
}

.item-nameVariant{
  height: 70px;
  width: 100px;
  line-height: 70px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  margin: -2px 10px -2px -2px;
  background-color: #8383bb;
  color: #fff;
  margin-right: 10px;
}

.item span {
  font-weight: bold;
}

.item-price {
  margin-left: auto;
  margin-right: 10px;
}

.item button {
  padding: 10px 20px;
  border: none;
  background-color: #C49090;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  text-transform: uppercase;
}

.item button:hover {
  background-color: #a85151;
}

</style>
