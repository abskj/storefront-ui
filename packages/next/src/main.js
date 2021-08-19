import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@storefront-ui/vue/styles.scss";

createApp(App).use(router).mount("#app");
