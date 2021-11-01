import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import {ModelViewerElement} from '@google/model-viewer'

const app = createApp(App);
const model = new ModelViewerElement('model-viewer')
app.use(model)
app.use(store)
app.mount('#app')
