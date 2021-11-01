<template>
  <h1>Loading</h1>
  <div class="container">
    <div class="row">
      <div class="col">
        <model-viewer
          id="reveal"
          loading="eager"
          camera-controls
          auto-rotate
          poster="../../assets/poster-shishkebab.png"
          src="../assets/shishkebab.glb"
          alt="A 3D model of a shishkebab"
        ></model-viewer>
      </div>
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>