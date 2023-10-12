import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
  // Must be included for component packages that don't yet have an Angular wrapper
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// Angular wrapper for coding components
import { ComponentLibraryModule } from '@arcgis/coding-components-angular';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentLibraryModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
