import { createPinia } from 'pinia';
import { createApp } from 'vue';
import Toast from "vue-toastification";
import App from './App.vue';
import router from './router';
import "vue-toastification/dist/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';


createApp(App)
    .use(createPinia())
    .use(Toast)
    .use(router)
    .mount('#app')
