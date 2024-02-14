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

import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentLibraryModule } from '@arcgis/map-components-angular';

import { AppComponent } from './app.component';
import { defineCustomElements } from '@arcgis/map-components/dist/loader';

const initializeCustomElements = () => defineCustomElements(window, { resourcesUrl: 'https://js.arcgis.com/map-components/next/assets' });

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentLibraryModule],
  providers: [
    // initialize custom elements when the app initializes
    {
      provide: APP_INITIALIZER,
      useFactory: () => initializeCustomElements,
      deps: [ComponentLibraryModule],
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
