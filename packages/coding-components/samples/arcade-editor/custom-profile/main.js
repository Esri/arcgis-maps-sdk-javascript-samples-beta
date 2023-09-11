import "./style.css"; // Arcade editor styles

import { setAssetPath } from "@arcgis/coding-components/dist/components";
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
import "@esri/calcite-components/dist/components/calcite-scrim";

setAssetPath(`${location.origin}${location.pathname}assets`);

// Get the Arcade editor element
const arcadeEditorElt = document.querySelector("arcgis-arcade-editor");

// Tells Arcade Editor to use the 'popup' profile and provides the necessary data used as
// definition for the profile variables.
arcadeEditorElt.profile = {
  // Add desired function bundles
  bundles: ["core"],
  variables: [
    {
      name: "$number",
      description: "This number is only for demo purposes",
      type: "number",
    },
    {
      name: "$dictionary",
      description: "This dictionary has some text in it",
      type: "dictionary",
      properties: [
        {
          name: "someText",
          type: "text",
        },
      ],
    },
  ],
};

// Tells Arcade Editor to the following test data. The data provided must match the expected data for the
// profile used.
arcadeEditorElt.testData = {
  profileVariableInstances: {
    $number: 5,
    $dictionary: { someText: "hello" },
  },
  spatialReference: {
    wkid: 4326,
  },
};

// Set a script on the editor
arcadeEditorElt.script = "Console($number);\n\nreturn $dictionary;";

// Everything has been loaded and assigned, we can remove scrim
document.getElementById("scrim").remove();
