<template>
  <h1>Model viewer</h1>
  <Loading />
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
// import { ModelViewerElement } from "@google/model-viewer";
export default {
  components:{
    Loading: defineAsyncComponent(() => import("./components/Loading.vue")),
  },
  setup(){
    return{
      
    }
  }
}
</script>

<style>
</style>
