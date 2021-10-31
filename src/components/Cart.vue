<template>
  <div class="cart">
    <h2>Shopping Cart</h2>
    <p v-if="items.length > 0" @click="removeAllItem">Remove all item</p>
    <Item v-for="item in items" :key="item.nameVariant+item.nameFlavor" :item="item" />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'Cart',
  components: {
    Item
  },
  computed: {
    items () {
      return this.$store.state.items
    }
  },
  methods: {
    removeAllItem() {
      this.$store.dispatch('removeAllItem')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cart {
  background-color: #d0d0db;
  overflow-y: scroll;
}

.cart h2, .cart p {
  margin: 5px 0;
}

.cart p {
  display: inline;
  padding: 0 10px;
  background-color: #C49090;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
}

.cart p:hover {
  background-color: #a85151;
}

.cart h2 {
  text-transform: uppercase;
}

</style>
