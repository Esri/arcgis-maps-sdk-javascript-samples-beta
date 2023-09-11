<script setup>
  import "@arcgis/map-components/dist/components/arcgis-map";
  import "@arcgis/map-components/dist/components/arcgis-search";
</script>

<template>
  <arcgis-map item-id="d5dda743788a4b0688fe48f43ae7beb9">
    <arcgis-search position="top-right" />
  </arcgis-map>
</template>

<style>
  @import "@arcgis/core/assets/esri/themes/dark/main.css";

  main,
  arcgis-map {
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
