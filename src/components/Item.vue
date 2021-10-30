<template>
  <div class="item">
    <span>{{nameVariant}}</span>
    <span>{{nameFlavor}}</span>
    <span>{{price}}</span>
    <button>Remove</button>
  </div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    nameVariant: String,
    nameFlavor: String,
    price: String,
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
