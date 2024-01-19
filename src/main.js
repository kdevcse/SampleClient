import { createApp } from 'vue';
import ROUTER from "./router";
import App from './App.vue';

const app = createApp(App);

app.use(ROUTER);

app.mount('#app');
