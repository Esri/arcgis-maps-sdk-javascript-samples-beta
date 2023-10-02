import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
// import { defineCustomElements as defineArcadeEditorElements } from "@arcgis/coding-components/dist/loader";

defineCalciteElements(window, { resourcesUrl: "./assets" });
// defineArcadeEditorElements(window, { resourcesUrl: "./assets" })

// Set component assets path
// import { setAssetPath } from '@esri/calcite-components/dist/components';
// setAssetPath(`${location.origin}${location.pathname}assets`);

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
