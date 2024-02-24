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

import WebMap from "@arcgis/core/WebMap";

import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

/**
 * Use the Charts Components to define and lazy load the custom charts elements.
 */
defineChartsElements(window, { resourcesUrl: "https://js.arcgis.com/charts-components/4.29/t9n" });

/**
 * Use the Map Components to define and lazy load the custom map elements.
 */
defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });

/**
 * Async function to load the feature layer from a pre-configured webmap
 */
async function loadFeatureLayerItem(webmapId, featureLayerIndex) {
  const webmap = new WebMap({
    portalItem: {
      id: webmapId
    }
  });

  await webmap.loadAll();
  const featureLayerItem = webmap.layers.items[featureLayerIndex];

  return featureLayerItem;
}

/**
 * Async function to load feature layer views
 */
async function loadFeatureLayerViews() {
  const featureLayerViews = await map.view.layerViews;

  return featureLayerViews;
}

/**
 * Async function to initialize the scatterplot using @arcgis/charts-model
 */
async function createScatterPlot() {
  /**
   * Loading the feature layer item and the feature layer views from async functions
   */
  const layer = await loadFeatureLayerItem("a72bb6468f57491f84409186446808e1", 0);
  const featureLayerViews = await loadFeatureLayerViews();

  /**
   * Getting the chart config from the layer
   */
  const config = await layer.charts[0];

  /**
   * Getting the chart component
   */
  const scatterPlot = document.getElementById("scatter-plot");

  /**
   * Assigning the config and the layer to the chart component to render the chart
   */
  scatterPlot.config = config;
  scatterPlot.layer = layer;

  /**
   * Adding event listener to the scatter plot to listen to the selection complete event, and highlight the selected features on the map
   */
  scatterPlot.addEventListener("arcgisChartsSelectionComplete", (event) => {
    map.highlightSelect?.remove();
    map.highlightSelect = featureLayerViews.items[0].highlight(event.detail.selectionOIDs);
  });
}

createScatterPlot();
