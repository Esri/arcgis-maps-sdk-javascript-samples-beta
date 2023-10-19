import "./style.css"; // App style

// Lazy loading ESM
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
defineCustomElements();

// Pure ESM
// import "@arcgis/map-components/dist/components/arcgis-map";
// import "@arcgis/map-components/dist/components/arcgis-search";
// import "@arcgis/map-components/dist/components/arcgis-legend";

import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
