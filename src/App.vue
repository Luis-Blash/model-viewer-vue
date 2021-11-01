<template>
  <h1>Model viewer</h1>
  <Loading />
  <Reality />
  <Camara />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components:{
    Loading: defineAsyncComponent(() => import("./components/Loading.vue")),
    Reality: defineAsyncComponent(() => import("./components/Reality.vue")),
    Camara: defineAsyncComponent(() => import("./components/Camara.vue")),
  },
  setup(){
    return{
      
    }
  }
}
</script>

<style>
</style>
