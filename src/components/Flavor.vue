<template>
  <div class="flavor">
    <span>{{size}}</span>
    <span>CPUs: {{cpus}}</span>
    <span>GPUs: {{gpus}}</span>
    <span>RAM: {{ram}}</span>
    <button>Select</button>
  </div>
</template>

<script>
export default {
  name: 'Flavor',
  props: {
    size: String,
    cpus: String,
    gpus: String,
    ram: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flavor {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  min-height: 50px;
}

.flavor span {
  margin-left: 10px;
}

.flavor button {
  margin-left: auto;
}

</style>
