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

import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

// Angular wrapper for coding components
import { ComponentLibraryModule } from "@arcgis/coding-components-angular";
import { CalciteComponentsModule } from "@esri/calcite-components-angular";
import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineCodingElements } from "@arcgis/coding-components/dist/loader";

const initializeCustomElements = () => {
  // define custom elements in the browser, and load the assets from the CDN
  defineCalciteElements(window, { resourcesUrl: "https://js.arcgis.com/calcite-components/2.4.0/assets" });
  defineCodingElements(window, { resourcesUrl: "https://js.arcgis.com/coding-components/next/assets" });
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentLibraryModule, CalciteComponentsModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeCustomElements,
      deps: [ComponentLibraryModule],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
