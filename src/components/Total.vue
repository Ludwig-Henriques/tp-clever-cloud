<template>
  <div class="total">
    <p>Total : </p>
    <p>{{(total * 41.904).toFixed(2)}} €</p>
  </div>
</template>

<script>
export default {
  name: 'Total',
  computed: {
    total () {
      return this.$store.state.total
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
  justify-content: start;
  border: 3px solid #ddd;
}

.total p {
  font-size: 2rem;
  font-weight: 700;
  color: #000;
}

.total p:first-child {
  padding: 0 20px;
}

.total p:last-child {
  flex-grow: 1;
  background: #fff;
}

</style>
