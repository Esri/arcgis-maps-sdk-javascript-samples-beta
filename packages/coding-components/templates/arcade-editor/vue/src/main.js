import "./style.css"; // App style

import { createApp } from "vue";
import App from "./App.vue";

// Lazy loading ESM
import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader"

defineCodingElements(window, {
  resourcesUrl: "./assets",
});

defineCalciteElements(window, {
  resourcesUrl: "./assets",
});

// Pure ESM
// import { setAssetPath } from "@arcgis/coding-components/dist/components";
// import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
// import "@esri/calcite-components/dist/components/calcite-scrim";

// setAssetPath(`${location.origin}${location.pathname}assets`);

createApp(App).mount("#app");
