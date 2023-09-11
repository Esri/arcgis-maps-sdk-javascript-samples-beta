import React, { useEffect, useCallback, useRef } from "react";

import "./ArcadeEditor.css";

export default function ArcadeEditor(props) {
  const arcadeEditorRef = useRef();

  // useCallback to prevent the function from being recreated when the component rebuilds
  const initializeTheEditor = useCallback(async () => {
    // Get the Arcade editor element
    const arcadeEditorElt = arcadeEditorRef.current;

    // Hide documentation actions
    arcadeEditorElt.hideDocumentationActions =
      props.hideDocActions === undefined ? false : props.hideDocActions;

    // Tells Arcade Editor to use the desired profile
    arcadeEditorElt.profile = props.profile;

    // Tells Arcade Editor to follow the test data
    arcadeEditorElt.testData = props.testData;

    // Set a default script on the editor
    arcadeEditorElt.script = props.script;

    // Set a language and direction on the editor
    arcadeEditorElt.lang = props.lang === "" ? "en" : props.lang;
    arcadeEditorElt.dir = props.dir === "rtl" ? "rtl" : "ltr";

    // Remove scrim
    if (document.querySelector("calcite-scrim") && props.profile) {
      document.querySelector("calcite-scrim").remove();
    }
  }, [
    props.hideDocActions,
    props.lang,
    props.dir,
    props.profile,
    props.testData,
    props.script,
  ]);

  // Register a function that will execute after the current render cycle
  useEffect(() => {
    initializeTheEditor().catch(console.error);
  }, [initializeTheEditor]);

  return (
    <div>
      <div className="editor-wrapper">
        <arcgis-arcade-editor ref={arcadeEditorRef} />
        <calcite-scrim loading />
      </div>
    </div>
  );
}
