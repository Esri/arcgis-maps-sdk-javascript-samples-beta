import React, { useEffect, useState } from "react";

import ArcadeEditor from "../components/ArcadeEditor";

import { loadData } from "../functions/load-data";

export default function Home() {
  const [editorData, setEditorData] = useState(null);

  useEffect(() => {
    async function dynamicallyImportComponents() {
      const { setAssetPath } = await import("@arcgis/coding-components/dist/components");
      setAssetPath(`${window.location.origin}${window.location.pathname}assets`);

      await import("@arcgis/coding-components/dist/components/arcgis-arcade-editor");
      await import("@esri/calcite-components/dist/components/calcite-scrim");
    }

    dynamicallyImportComponents();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadData();

      setEditorData(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Arcade Editor</h1>
      <p>Multiple Arcade Editors on a single page</p>

      <ArcadeEditor
        hideDocActions={true}
        script={"//Profile: popup \n$feature"}
        lang={"en"}
        dir={"ltr"}
        profile={
          editorData
            ? {
                id: "popup",
                definitions: {
                  $feature: editorData.featureLayer,
                  $layer: editorData.featureLayer,
                  $map: editorData.webMap,
                  $datastore: editorData.featureLayer
                }
              }
            : undefined
        }
        testData={
          editorData
            ? {
                profileVariableInstances: {
                  $feature: editorData.featureSet.features[0],
                  $layer: editorData.featureLayer,
                  $map: editorData.webMap,
                  $datastore: editorData.featureLayer.url
                }
              }
            : undefined
        }
      />

      <ArcadeEditor
        script={"//Profile: visualization \n$view.scale"}
        lang={"ar"}
        dir={"rtl"}
        profile={
          editorData
            ? {
                id: "visualization",
                definitions: {
                  $feature: editorData.featureLayer,
                  $view: { scale: 10 }
                }
              }
            : undefined
        }
        testData={
          editorData
            ? {
                profileVariableInstances: {
                  $feature: editorData.featureSet.features[0],
                  $view: { scale: 10 }
                }
              }
            : undefined
        }
      />
    </div>
  );
}
