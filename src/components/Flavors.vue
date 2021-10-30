<template>
  <div class="flavors">
    <Flavor v-for="flavor in flavors" :key="flavor.name" :size="flavor.name" :cpus="flavor.cpus" :gpus="flavor.gpus" :ram="flavor.mem" />
  </div>
</template>

<script>

import Flavor from './Flavor.vue'

export default {
  name: 'Flavors',
  components: {
    Flavor
  },
  data() {
    return {
      flavors: [
        {
          "name": "nano",
          "mem": 512,
          "cpus": 1,
          "gpus": 0,
          "disk": null,
          "price": 0.1431844215,
          "available": true,
          "microservice": true,
          "machine_learning": false,
          "nice": 5,
          "price_id": "apps.nano",
          "memory": {
            "unit": "B",
            "value": 536870912,
            "formatted": "512 MiB"
          }
        },
        {
          "name": "XS",
          "mem": 1024,
          "cpus": 1,
          "gpus": 0,
          "disk": null,
          "price": 0.3436,
          "available": true,
          "microservice": false,
          "machine_learning": false,
          "nice": 0,
          "price_id": "apps.XS",
          "memory": {
            "unit": "B",
            "value": 1073741824,
            "formatted": "1024 MiB"
          }
        },
        {
          "name": "S",
          "mem": 2048,
          "cpus": 2,
          "gpus": 0,
          "disk": null,
          "price": 0.6873,
          "available": true,
          "microservice": false,
          "machine_learning": false,
          "nice": 0,
          "price_id": "apps.S",
          "memory": {
            "unit": "B",
            "value": 2147483648,
            "formatted": "2048 MiB"
          }
        },
        {
          "name": "M",
          "mem": 4096,
          "cpus": 4,
          "gpus": 0,
          "disk": null,
          "price": 1.7182,
          "available": true,
          "microservice": false,
          "machine_learning": false,
          "nice": 0,
          "price_id": "apps.M",
          "memory": {
            "unit": "B",
            "value": 4294967296,
            "formatted": "4096 MiB"
          }
        },
        {
          "name": "L",
          "mem": 8192,
          "cpus": 6,
          "gpus": 0,
          "disk": null,
          "price": 3.4364,
          "available": true,
          "microservice": false,
          "machine_learning": false,
          "nice": 0,
          "price_id": "apps.L",
          "memory": {
            "unit": "B",
            "value": 8589934592,
            "formatted": "8192 MiB"
          }
        },
        {
          "name": "XL",
          "mem": 16384,
          "cpus": 8,
          "gpus": 0,
          "disk": null,
          "price": 6.8729,
          "available": true,
          "microservice": false,
          "machine_learning": false,
          "nice": 0,
          "price_id": "apps.XL",
          "memory": {
            "unit": "B",
            "value": 17179869184,
            "formatted": "16384 MiB"
          }
        },
        {
          "name": "2XL",
          "mem": 24576,
          "cpus": 12,
          "gpus": 0,
          "disk": null,
          "price": 13.7458,
          "available": true,
          "microservice": false,
          "machine_learning": false,
          "nice": 0,
          "price_id": "apps.2XL",
          "memory": {
            "unit": "B",
            "value": 25769803776,
            "formatted": "24576 MiB"
          }
        },
        {
          "name": "3XL",
          "mem": 32768,
          "cpus": 16,
          "gpus": 0,
          "disk": null,
          "price": 27.4915,
          "available": true,
          "microservice": false,
          "machine_learning": false,
          "nice": 0,
          "price_id": "apps.3XL",
          "memory": {
            "unit": "B",
            "value": 34359738368,
            "formatted": "32768 MiB"
          }
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.flavors {
  background-color: #d0d5d0;
  overflow-y: scroll;
}

</style>
