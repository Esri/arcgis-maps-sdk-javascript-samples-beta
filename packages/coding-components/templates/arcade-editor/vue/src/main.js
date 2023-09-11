import "./style.css"; // App style

import { createApp } from "vue";
import { setAssetPath } from "@arcgis/coding-components/dist/components";
import App from "./App.vue";

// Can only set the asset path once for Arcade and Calcite components
setAssetPath(`${location.origin}${location.pathname}assets`);

createApp(App).mount("#app");
