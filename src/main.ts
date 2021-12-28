import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "./assets/style.scss";
import "element-plus/dist/index.css";
import store from "./store/store";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons";
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
createApp(App)
  .component("v-icon", OhVueIcon)
  .use(ElementPlus)
  .use(store)
  .use(router)
  .mount("#app");
