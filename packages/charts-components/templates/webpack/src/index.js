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

import { ScatterPlotModel } from "@arcgis/charts-model";
import { loadFeatureLayer } from "./load-data";

// Lazy loading ESM
import { defineCustomElements as defineChartsElements } from "@arcgis/charts-components/dist/loader";

defineChartsElements(window, {
  resourcesUrl: "../arcgis-charts/"
});

const createScatterPlot = async () => {
  const scatterPlotRef = document.querySelector("arcgis-charts-scatter-plot");

  const featureLayer = await loadFeatureLayer("8871626e970a4f3e9d6113ec63a92f2f");

  const scatterPlotParams = {
    layer: featureLayer,
    xAxisFieldName: "Earnings",
    yAxisFieldName: "Cost"
  };

  const scatterPlotModel = new ScatterPlotModel(scatterPlotParams);

  const config = await scatterPlotModel.config;

  scatterPlotRef.config = config;
  scatterPlotRef.layer = featureLayer;
};

createScatterPlot();
