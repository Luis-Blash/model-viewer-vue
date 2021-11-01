<template>
  <h1>Componente Loading</h1>
  <div class="container">
    <!-- loading -->
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
                  src: tiene que estar en public/assets
                </li>
                <li class="list-group-item">Alt: nombre del archivo</li>
                <li class="list-group-item">
                  poster: En caso que no cargue aparece
                </li>
                <li class="list-group-item">
                  loading => si le pones loading cargara
                </li>
              </ul>
            </div>
          </div>
          <!-- modelo -->
          <div class="col">
            <model-viewer
              id="reveal"
              loading="eager"
              poster="../assets/logo.png"
              src="/assets/shishkebab.glb"
              alt="A 3D model of a shishkebab"
            ></model-viewer>
          </div>
        </div>
      </div>
    </div>

    <!-- parte dos -->
    <div class="row">
      <div class="col">
        <div class="row">
          <div class="col">
            <div class="col">
              <h2>Etiquetas basicas</h2>
            </div>
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item">class: puedes agregar css</li>
                <li class="list-group-item">Alt: nombre del archivo</li>
              </ul>
            </div>
          </div>
          <!-- modelo -->
          <div class="col">
            <model-viewer
              class="model"
              id="reveal"
              loading="eager"
              poster="/assets/poster-astronaut.png"
              src="/assets/Astronaut.glb"
              alt="A 3D model of a space"
            ></model-viewer>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="col">Column</div>
      <div class="col">Column</div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.model {
  background-color: red;
}
</style>