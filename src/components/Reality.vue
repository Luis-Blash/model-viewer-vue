<template>
  <h1>Realida aumentada</h1>
  <div class="container">
    <!-- ar -->
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="col">
              <h2>Etiquetas basicas</h2>
            </div>
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item">
                  ar =>  si solo agregas ar, si el telefono lo detecta
                </li>
              </ul>
            </div>
          </div>
          <!-- modelo -->
          <div class="col">
            <model-viewer
              id="reveal"
              loading="eager"
              poster="/assets/poster-astronaut.png"
              src="/assets/Astronaut.glb"
              alt="A 3D model of a shishkebab"
            ></model-viewer>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>