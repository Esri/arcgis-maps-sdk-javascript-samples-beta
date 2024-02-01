/* Copyright 2023 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
