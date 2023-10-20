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

import "./style.css";

/**
 * Import functions to define the custom HTML elements from the
 * Map Components and Calcite Components libraries.
 */
import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";

/**
 * Define the custom elements on the window using the Calcite Components
 * distribution build. Use the CDN-hosted assets. When using the CDN-hosted assets,
 * you need to keep the version number in the path the same as the version of
 * `@esri/calcite-components` installed as a dependency of `@arcgis/map-components`.
 */
defineCalciteElements(window, {
  resourcesUrl: "https://js.arcgis.com/calcite-components/1.9.2/assets",
});

/**
 * Use the Map Components distribution build to define and lazy load the custom map elements.
 */
defineMapElements();

/**
 * Use `document.querySelector()` to get a reference to the `arcgis-layer-list` component.
 * Add an event listener for the `arcgis-layer-list` component's `widgetReady` event.
 */
document
  .querySelector("arcgis-layer-list")
  .addEventListener("widgetReady", (event) => {
    /**
     * Get a reference to the layer list widget from the `event.detail` object.
     */
    const layerList = event.detail.widget;
    /**
     * Add a listItemCreatedFunction to the layer list.
     * This function will add a legend in the list item panel for all layers except group layers.
     */
    layerList.listItemCreatedFunction = (event) => {
      const item = event.item;
      if (item.layer.type !== "group") {
        item.panel = {
          content: "legend",
        };
      }
    };
  });

/**
 * Use `document.querySelector()` to get a reference to the `arcgis-map` component.
 * Add an event listener for the `arcgis-map` component's `viewReady` event.
 */
document
  .querySelector("arcgis-map")
  .addEventListener("viewReady", async (event) => {
    /**
     * Get a reference to the view from the `event.detail` object.
     */
    const view = event.detail.view;

    /**
     * Get a reference to the map's portal item
     */
    const portalItem = view.map.portalItem;

    /**
     * Set properties on the `calcite-navigation-logo`
     * from the properties of the 'view.map.portalItem`.
     */
    const navigationLogo = document.querySelector("calcite-navigation-logo");
    navigationLogo.heading = portalItem.title;
    navigationLogo.description = portalItem.snippet;
    navigationLogo.thumbnail = portalItem.thumbnailUrl;

    /**
     * Find the accidental deaths layer in the `view.map.layers` collection.
     */
    const layer = view.map.layers.find(
      (layer) => layer.id === "Accidental_Deaths_8938"
    );

    /**
     * Modify the layer's popup template title.
     */
    layer.popupTemplate.title = "Accidental Deaths";
  });
