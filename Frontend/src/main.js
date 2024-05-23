import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { auth } from "./stores/auth";
import { collection } from "./stores/collection";
import { temp } from "./stores/temp";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

auth();
collection();
temp();
