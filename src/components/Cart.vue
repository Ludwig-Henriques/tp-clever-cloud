<template>
  <div class="cart">
    <Item v-for="item in items" :key="item.nameVariant+item.nameFlavor" :nameVariant="item.nameVariant" :nameFlavor="item.nameFlavor" :price="item.price" />
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
  name: 'Cart',
  components: {
    Item
  },
  data() {
    return{
      items: [
        {
          nameVariant: "Docker",
          nameFlavor: "nano",
          price: "16"
        },
        {
          nameVariant: "PHP",
          nameFlavor: "nano",
          price: "10"
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.cart {
  background-color: green;
  overflow-y: scroll;
}

</style>
