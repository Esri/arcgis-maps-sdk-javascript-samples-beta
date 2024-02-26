<script setup>
import { ref, onMounted } from "vue";
import { loadFeatureLayer } from "../utils/load-data";
import { ScatterPlotModel } from "@arcgis/charts-model";

// Read more about ref() at https://vuejs.org/api/reactivity-core.html#ref
const scatterPlotRef = ref(null);

// Registers a callback to be called after the component has been mounted
// See: https://vuejs.org/api/composition-api-lifecycle.html#onmounted
onMounted(async () => {
  if (scatterPlotRef.value) {
    const featureLayer = await loadFeatureLayer("8871626e970a4f3e9d6113ec63a92f2f");

    const scatterPlotParams = {
      layer: featureLayer,
      xAxisFieldName: "Earnings",
      yAxisFieldName: "Cost"
    };

    const scatterPlotModel = new ScatterPlotModel(scatterPlotParams);

    const config = await scatterPlotModel.config;

    scatterPlotRef.value.config = config;
    scatterPlotRef.value.layer = featureLayer;
  }
});
</script>

<template>
  <arcgis-charts-scatter-plot ref="scatterPlotRef" class="chart-container"></arcgis-charts-scatter-plot>
</template>
