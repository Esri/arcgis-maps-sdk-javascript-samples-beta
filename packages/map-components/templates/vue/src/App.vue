<script setup lang="ts">
import { defineCustomElements } from '@arcgis/map-components/dist/loader'
defineCustomElements(window)

function onReady(event: any) {
  console.log("Map View ready", event);
}

const popupOptions = defineProps({
  dockEnabled: {
    type: Boolean,
    default: () => true
  },
  dockOptions: {
    type: Object,
    default: () => {
      return {
        position: 'bottom-right',
        breakpoint: false
      }
    }
  }
})
</script>

<template>
  <arcgis-map item-id="d5dda743788a4b0688fe48f43ae7beb9" @arcgisViewReadyChange="onReady" .popup="popupOptions">
    <arcgis-search position="top-right" />
    <arcgis-legend position="bottom-left" />
  </arcgis-map>
</template>

<style>
@import './style.css';
@import 'https://js.arcgis.com/next/@arcgis/core/assets/esri/themes/dark/main.css';
</style>