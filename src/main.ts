import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faMagnifyingGlass,
  faMoon,
  faChevronDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faMoon as famMoonRegular } from "@fortawesome/free-regular-svg-icons";
import "./assets/main.css";
import "./assets/utilities.css";
import router from "./router";

library.add(
  faMagnifyingGlass,
  faMoon,
  famMoonRegular,
  faChevronDown,
  faArrowLeft
);

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
