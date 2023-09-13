import WebMap from "@arcgis/core/WebMap.js";

/**
 * Simple data loader against public data.
 * For this sample we are using the Popup profile.
 * For the profile definition, we need a web map and a feature layer
 * For the test data, we need a web map, a feature layer and a feature set.
 */
async function loadData() {
  const webMap = new WebMap({
    portalItem: { id: "93d14bfd59a84af0be99a883feba052b" }
  });
  await webMap.loadAll();

  const featureLayer = webMap.findLayerById("17c807fd286-layer-47");

  const featureSet = await featureLayer.queryFeatures({
    where: "1=1",
    outFields: ["*"],
    returnGeometry: true
  });

  return { webMap, featureLayer, featureSet };
}

(async () => {
  // Get the Arcade editor element
  const arcadeEditorElt = document.querySelector("arcgis-arcade-editor");

  // Log script change events
  arcadeEditorElt.addEventListener("scriptChange", async (e) => {
    console.log("script:", e.detail);
    // console.log("outputType on script:", await arcadeEditorElt.getOutputType());
  });

  // Log editor diagnostics
  arcadeEditorElt.addEventListener("diagnosticsChange", async (e) => {
    console.log("diagnostics:", e.detail);
  });

  // Start loading data. Don't need to await, we want the fetching to start.
  const dataPromise = loadData();

  // Wait for our data to be loaded and wait for the component to be defined in the custom elements
  const [data] = await Promise.all([dataPromise, customElements.whenDefined("arcgis-arcade-editor")]);

  // Tells Arcade Editor to use the 'popup' profile and provides the necessary data used as
  // definition for the profile variables. Feature Layer and Web Map instances are used by the
  // Editor UX to help users understand the structure of data used.
  // Note that for the $feature variable, we pass the feature layer instance as for definition
  // the editor needs the metadata of the feature not an actual feature.
  arcadeEditorElt.profile = {
    id: "popup",
    definitions: {
      $feature: data.featureLayer,
      $layer: data.featureLayer,
      $map: data.webMap,
      $datastore: data.featureLayer
    }
  };

  // Tells Arcade Editor to the following test data. The data provided must match the expected data for the
  // profile used.
  // Note that for test data, the feature must an instance of a feature. This is not used for user experience
  // but for actually executing the the Arcade expression in the editor.
  arcadeEditorElt.testData = {
    profileVariableInstances: {
      $feature: data.featureSet.features[0],
      $layer: data.featureLayer,
      $map: data.webMap,
      $datastore: data.featureLayer.url
    }
  };

  // Set a script on the editor
  arcadeEditorElt.script = "$feature";

  // Everything has been loaded and assigned, we can remove scrim
  document.getElementById("scrim").remove();
})();