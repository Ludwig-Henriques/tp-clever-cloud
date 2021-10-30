<template>
  <div class="item">
    <span>{{nameVariant}}</span>
    <span>{{nameFlavor}}</span>
    <span>{{(price * 41.904).toFixed(2)}} €</span>
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
  padding: 10px;
  min-height: 50px;
}

.item span {
  margin-left: 10px;
}

.item button {
  margin-left: auto;
}

</style>
