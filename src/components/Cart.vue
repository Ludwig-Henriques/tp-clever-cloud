<template>
  <div class="cart">
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
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cart {
  background-color: #d0d0db;
  overflow-y: scroll;
}

</style>
