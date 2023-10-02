import { Component } from "@angular/core";
import { loadData } from "../functions/load-data.service";
import { IEditorProfileDefinition, IPredefinedProfile } from "@arcgis/coding-components/dist/types/utils/profile/types";
import { IEditorTestContext } from "@arcgis/coding-components/dist/types/utils/arcade-executor";

// Calcite Components
import "@esri/calcite-components/dist/components/calcite-scrim";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "arcade-editor-angular-sample";

  // Property to track loading state
  public isLoading: boolean = true;

  // Properties for the arcade editor
  public profile!: IEditorProfileDefinition | IPredefinedProfile;
  public testData!: IEditorTestContext;

  ngOnInit() {
    // Call async functions here
    this.fetch();
  }

  // Async function to fetch data
  async fetch() {
    const data = await loadData();

    this.profile = {
      id: "popup",
      definitions: {
        $feature: data.featureLayer,
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer
      }
    };

    this.testData = {
      profileVariableInstances: {
        $feature: data.featureSet.features[0],
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer.url
      }
      // spatialReference: {wkid: 3857},
      // timeZone: "system"
    };

    // Once data is fetched, set isLoading to false
    this.isLoading = false;
  }
}
