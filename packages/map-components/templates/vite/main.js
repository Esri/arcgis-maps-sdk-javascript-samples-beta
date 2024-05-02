  import "./styles.css";
  // Lazy loading ESM
  // import { defineCustomElements } from "@arcgis/map-components/dist/loader";
  // defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });
  
  import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
  import { defineCustomElements as defineMapElements } from "@arcgis/map-components/dist/loader";

  defineMapElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.30/assets" });
  defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.7.1/assets" });
  const mapElement = document.querySelector('arcgis-map');
  mapElement.addEventListener('arcgisViewReadyChange', event => { 
    console.log('MapView ready', event);
  });