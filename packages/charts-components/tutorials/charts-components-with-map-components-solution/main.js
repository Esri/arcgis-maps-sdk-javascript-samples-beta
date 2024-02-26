/* Copyright 2024 Esri
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

import "./style.css";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

/**
 * Define the custom elements on the window using the Calcite Components
 * Use the CDN-hosted assets. When using the CDN-hosted assets,
 * you need to keep the version number in the path the same as the version of
 * `@esri/calcite-components` installed as a dependency of `@arcgis/map-components`.
 */
defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.4.0/assets" });

/**
 * Use the Map Components to define and lazy load the custom map elements.
 */
defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/next/assets" });

/**
 * Use the Charts Components to define and lazy load the custom charts elements.
 */
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/next/t9n" });

/**
 * Async function to initialize the scatterplot
 */
(async () => {
  /**
   * Use `document.querySelector()` to get a reference to the `arcgis-map` component and `arcgis-charts-scatter-plot` component.
   * Add an event listener for the `arcgis-map` component's `arcgisViewReadyChange` event.
   */
  const scatterPlotElement = document.getElementById("scatter-plot");
  const mapElement = document.querySelector("arcgis-map");

  mapElement.addEventListener("arcgisViewReadyChange", async (event) => {
    /**
     * Get the map and the view from the event
     */
    const { map, view } = event.target;

    /**
     * Wait for all the map resources to load
     */
    await map.loadAll();

    /**
     * Get the layer from the mapElement and the config from the layer
     */
    const layer = await map.layers.items[0];
    const config = layer.charts[0];

    /**
     * Assign the config and the layer to the chart component to render the chart
     */
    scatterPlotElement.layer = layer;
    scatterPlotElement.config = config;

    /**
     * Get the layerView from the view
     * Add event listener to the scatter plot to listen to the selection complete event, and highlight the selected features on the map
     */
    const featureLayerViews = view.layerViews;

    scatterPlotElement.addEventListener("arcgisChartsSelectionComplete", (event) => {
      map.highlightSelect?.remove();
      map.highlightSelect = featureLayerViews.items[0].highlight(event.detail.selectionOIDs);
    });
  });
})();
