<template>
  <div class="variants">
    <Variant v-for="variant in variants" :key="variant.name" :logo="variant.variant.logo" :name="variant.name" />
  </div>
</template>

<script>

import Variant from './Variant.vue'

export default {
  name: 'Variants',
  components: {
    Variant
  },
  data() {
    return {
      variants: [
          {
              "type": "docker",
              "version": "20211019",
              "name": "Docker",
              "variant": {
                  "id": "d5ff282b-dd1a-4c9a-a0c8-c9524b1370e9",
                  "slug": "docker",
                  "name": "Docker",
                  "deployType": "docker",
                  "logo": "https://static-assets.cellar.services.clever-cloud.com/logos/docker.svg"
              },
              "description": "Docker",
              "enabled": true,
              "comingSoon": false,
              "maxInstances": 40,
              "tags": [],
              "deployments": [
                  "git"
              ],
              "flavors": [
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
              ],
              "defaultFlavor": {
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
              "buildFlavor": {
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
              }
          },
          {
              "type": "dotnet",
              "version": "20211019",
              "name": ".NET core",
              "variant": {
                  "id": "08af642a-e48c-40d0-9fc0-124ee9dc0535",
                  "slug": "dotnet",
                  "name": ".NET core",
                  "deployType": "dotnet",
                  "logo": "https://static-assets.cellar.services.clever-cloud.com/logos/dotnet.svg"
              },
              "description": ".NET Core",
              "enabled": true,
              "comingSoon": false,
              "maxInstances": 40,
              "tags": [
                  ".net",
                  "core",
                  "asp"
              ],
              "deployments": [
                  "git"
              ],
              "flavors": [
                  {
                      "name": "pico",
                      "mem": 256,
                      "cpus": 1,
                      "gpus": 0,
                      "disk": null,
                      "price": 0.1073883162,
                      "available": true,
                      "microservice": true,
                      "machine_learning": false,
                      "nice": 5,
                      "price_id": "apps.pico",
                      "memory": {
                          "unit": "B",
                          "value": 268435456,
                          "formatted": "256 MiB"
                      }
                  },
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
              ],
              "defaultFlavor": {
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
              "buildFlavor": {
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
              }
          },
          {
              "type": "erlang",
              "version": "20211019",
              "name": "Elixir",
              "variant": {
                  "id": "9e23b9a8-d40e-41ad-9739-5d31b81e200e",
                  "slug": "elixir",
                  "name": "Elixir",
                  "deployType": "erlang",
                  "logo": "https://static-assets.cellar.services.clever-cloud.com/logos/elixir.svg"
              },
              "description": "Erlang applications",
              "enabled": true,
              "comingSoon": false,
              "maxInstances": 40,
              "tags": [],
              "deployments": [
                  "git"
              ],
              "flavors": [
                  {
                      "name": "pico",
                      "mem": 256,
                      "cpus": 1,
                      "gpus": 0,
                      "disk": null,
                      "price": 0.1073883162,
                      "available": true,
                      "microservice": true,
                      "machine_learning": false,
                      "nice": 5,
                      "price_id": "apps.pico",
                      "memory": {
                          "unit": "B",
                          "value": 268435456,
                          "formatted": "256 MiB"
                      }
                  },
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
              ],
              "defaultFlavor": {
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
              "buildFlavor": {
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
              }
          },
          {
              "type": "go",
              "version": "20211019",
              "name": "Go",
              "variant": {
                  "id": "b7e506a9-241e-49b9-85d4-df74d85e0178",
                  "slug": "go",
                  "name": "Go",
                  "deployType": "go",
                  "logo": "https://static-assets.cellar.services.clever-cloud.com/logos/go.svg"
              },
              "description": "go",
              "enabled": true,
              "comingSoon": false,
              "maxInstances": 40,
              "tags": [],
              "deployments": [
                  "git"
              ],
              "flavors": [
                  {
                      "name": "pico",
                      "mem": 256,
                      "cpus": 1,
                      "gpus": 0,
                      "disk": null,
                      "price": 0.1073883162,
                      "available": true,
                      "microservice": true,
                      "machine_learning": false,
                      "nice": 5,
                      "price_id": "apps.pico",
                      "memory": {
                          "unit": "B",
                          "value": 268435456,
                          "formatted": "256 MiB"
                      }
                  },
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
              ],
              "defaultFlavor": {
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
              "buildFlavor": {
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
              }
          }
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.variants {
  background-color: #dbd0d0;
  overflow-y: scroll;
}

</style>
