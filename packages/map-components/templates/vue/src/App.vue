<script setup>
import Map from "./components/Map.vue";
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
defineCustomElements(window);
</script>

<template>
  <Map />
</template>