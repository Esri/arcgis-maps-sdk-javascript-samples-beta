import { useEffect, useCallback } from "react";

import { loadData } from "../functions/load-data";

import "./ArcadeEditor.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["arcgis-arcade-editor"]: any;
      ["calcite-scrim"]: any;
    }
  }
}

export default function ArcadeEditor() {
  // useCallback to prevent the function from being recreated when the component rebuilds
  const initializeTheEditor = useCallback(async () => {
    // Get the Arcade editor element
    const arcadeEditorElt = document.querySelector("arcgis-arcade-editor");

    // Log script change events
    arcadeEditorElt.addEventListener("scriptChange", async (e) => {
      console.log("script:", (e as CustomEvent).detail);
      // console.log("outputType on script:", await arcadeEditorElt.getOutputType());
    });

    // Log editor diagnostics
    arcadeEditorElt.addEventListener("diagnosticsChange", async (e) => {
      console.log("diagnostics:", (e as CustomEvent).detail);
    });

    // Start loading data
    const data = await loadData();

    // Tells Arcade Editor to use the 'popup' profile and provides the necessary data used as
    // definition for the profile variables. Feature Layer and Web Map instances are used by the
    // Editor UX to help users understand the structure of data used.
    // Note that for the $feature variable, we pass the feature layer instance as for definition
    // the editor needs the metadata of the feature not an actual feature.
    arcadeEditorElt.profile = {
      id: "popup",
      definitions: {
        $feature: data.featureLayer as __esri.FeatureLayer,
        $layer: data.featureLayer as __esri.FeatureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer as __esri.FeatureLayer,
      },
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
        $datastore: (data.featureLayer as __esri.FeatureLayer).url,
      }
    };

    // Set a script on the editor
    arcadeEditorElt.script = "$feature";

    // Remove scrim
    if (document.querySelector("calcite-scrim")) {
      document.querySelector("calcite-scrim").remove();
    }
  }, []);

  // Register a function that will execute after the current render cycle
  useEffect(() => {
    initializeTheEditor().catch(console.error);
  }, [initializeTheEditor]);

  return (
    <div>
      <div className="editor-wrapper">
        <arcgis-arcade-editor />
      </div>
      <calcite-scrim loading></calcite-scrim>
    </div>
  );
}
