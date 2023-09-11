import React, { useEffect, useCallback, useRef } from "react";
import { loadData } from "../functions/load-data";
import "./ArcadeEditor.css";

export default function ArcadeEditor() {
  const arcadeEditorRef = useRef();

  // useCallback to prevent the function from being recreated when the component rebuilds
  const initializeTheEditor = useCallback(async () => {
    // Get the Arcade editor element
    const arcadeEditorElt = arcadeEditorRef.current;

    // Start loading data
    const data = await loadData();

    arcadeEditorElt.profile = {
      id: "popup",
      definitions: {
        $feature: data.featureLayer,
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer,
      },
    };

    arcadeEditorElt.testData = {
      profileVariableInstances: {
        $feature: data.featureSet.features[0],
        $layer: data.featureLayer,
        $map: data.webMap,
        $datastore: data.featureLayer.url,
      },
    };

    // Set a script on the editor
    arcadeEditorElt.script = "// Popup profile\nreturn `The full station name is ${$feature.FULL_STATION_NAME}`;";

    // Remove scrim
    if (document.querySelector("calcite-scrim")) {
      document.querySelector("calcite-scrim").remove();
    }
  }, []);

  // Register a function that will execute after the current render cycle
  useEffect(() => {
    initializeTheEditor().catch(console.error);
  }, [initializeTheEditor]);

  const onSave = async () => {
    if (!arcadeEditorRef.current) return;

    const testResult = await arcadeEditorRef.current.getTestResult();

    if(testResult.type !== "error") {
      const script = await arcadeEditorRef.current.getScript();
      console.log(script);
    }
  };

  return (
    <div>
      <calcite-button onClick={onSave}>Save expression</calcite-button>
      <div className="editor-wrapper">
        <arcgis-arcade-editor ref={arcadeEditorRef} />
      </div>
      <calcite-scrim loading></calcite-scrim>
    </div>
  );
}
