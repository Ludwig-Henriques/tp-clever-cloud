<template>
  <div class="total">
    <p>Total: {{(total * 41.904).toFixed(2)}}€</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      total: 60.15
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.total{
  background-color:#ddd;
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.total p {
  font-size: 2rem;
  font-weight: 700;
  color: #000;
}

</style>
