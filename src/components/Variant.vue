<template>
  <div class="variant">
    <img :src="logo" >
    <span>{{name}}</span>
    <button>Select</button>
  </div>
</template>

<script>
export default {
  name: 'Variant',
  props: {
    name: String,
    logo: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.variant {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
}

.variant img {
  width: 50px;
  margin-right: 10px;
}

.variant button {
  margin-left: auto;
}

</style>
