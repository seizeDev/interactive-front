import { createApp } from 'vue'
import App from './App.vue'
import './assets/less/common.less'
import { router } from "./router/index.ts";
import {store} from './vuex/store'
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
