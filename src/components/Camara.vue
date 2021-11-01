<template>
  <h1>Camara</h1>
  <div class="container">
    <!-- Camara -->
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
                  camera-controls => Control de camara
                </li>
              </ul>
            </div>
          </div>
          <!-- modelo -->
          <div class="col">
            <model-viewer
              camera-controls
              loading="eager"
              poster="/assets/poster-astronaut.png"
              src="/assets/Astronaut.glb"
              alt="A 3D model of a shishkebab"
            ></model-viewer>
          </div>
        </div>
      </div>

      <!-- orbit -->
      <div class="row">
        <div class="row">
          <div class="col">
            <div class="col">
              <h2>Etiquetas basicas</h2>
            </div>
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item">
                  camera-orbit => Camara orbitada al ininicio
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <model-viewer
              camera-controls
              camera-orbit="45deg 55deg 2.5m"
              loading="eager"
              poster="/assets/poster-astronaut.png"
              src="/assets/Astronaut.glb"
              alt="A 3D model of a shishkebab"
            ></model-viewer>
          </div>
        </div>
      </div>

      <!-- desactive -->
      <div class="row">
        <div class="row">
          <div class="col">
            <div class="col">
              <h2>Etiquetas basicas</h2>
            </div>
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item">
                  disable-zoom => Desactivar el zoom
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <model-viewer
              camera-controls
              disable-zoom
              loading="eager"
              poster="/assets/poster-astronaut.png"
              src="/assets/Astronaut.glb"
              alt="A 3D model of a shishkebab"
            ></model-viewer>
          </div>
        </div>
      </div>

      <!-- agregar datos -->
      <div class="row">
        <div class="row">
          <div class="col">
            <div class="col">
              <h2>Etiquetas basicas</h2>
            </div>
            <div class="col">
              <ul class="list-group">
                <li class="list-group-item">Crear puntos de informacion</li>
                <li class="list-group-item">
                  usa la etiqueta de button dentro del model-viewer
                </li>
              </ul>
            </div>
          </div>
          <div class="col">
            <model-viewer
              class="camara"
              camera-controls
              disable-zoom
              loading="eager"
              poster="/assets/poster-astronaut.png"
              src="/assets/Astronaut.glb"
              alt="A 3D model of a shishkebab"
            >
              <button
                slot="hotspot-visor"
                data-position="0 1.75 0.35"
                data-normal="0 0 1"
              ></button>
              <button
                slot="hotspot-hand"
                data-position="-0.54 0.93 0.1"
                data-normal="-0.73 0.05 0.69"
              >
                <div id="annotation">This hotspot disappears completely</div>
              </button>
              <button
                slot="hotspot-foot"
                data-position="0.16 0.1 0.17"
                data-normal="-0.07 0.97 0.23"
                data-visibility-attribute="visible"
              ></button>
            </model-viewer>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.camara {
  width: 350px;
  height: 500px;
}

button {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 10px;
  border: none;
  background-color: blue;
  box-sizing: border-box;
}

button[slot="hotspot-hand"] {
  --min-hotspot-opacity: 0;
  background-color: red;
}

button[slot="hotspot-foot"]:not([data-visible]) {
  background-color: transparent;
  border: 3px solid blue;
}

#annotation{
    background-color: #888888;
    position: absolute;
    transform: translate(10px, 10px);
    border-radius: 10px;
    padding: 10px;
  }
</style>