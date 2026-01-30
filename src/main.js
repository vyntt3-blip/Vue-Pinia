import { createApp } from "vue";
import App from "./App.vue";
import "@/assets/main.css";
import router from "@/router/routes";
import { createPinia } from "pinia";
import store from "@/store/index";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(store);
app.mount("#app");
