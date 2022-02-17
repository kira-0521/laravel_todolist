require("./bootstrap");

import { createApp } from "vue";
// import { router } from "vue-router";
import App from "./vue/app";

const app = createApp(App);
// app.use(router);
app.mount("#app");
