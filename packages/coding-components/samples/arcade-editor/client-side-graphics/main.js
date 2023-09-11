import "./style.css"; // Arcade editor styles

import { setAssetPath } from "@arcgis/coding-components/dist/components";
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
import "@esri/calcite-components/dist/components/calcite-scrim";

import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

setAssetPath(`${location.origin}${location.pathname}assets`);

// Get the Arcade editor element
const arcadeEditorElt = document.querySelector("arcgis-arcade-editor");

const polylineGraphic = new Graphic({
  attributes: {
    place: "home",
    ObjectID: 5,
  },
  geometry: {
    type: "polyline",
    paths: [
      [-111.3, 52.68],
      [-98, 49.5],
      [-93.94, 29.89],
    ],
    spatialReference: { wkid: 4326 },
  },
});

const polylineFeature = new FeatureLayer({
  source: [polylineGraphic],
  title: "Example",
  fields: [
    {
      name: "ObjectID",
      alias: "ObjectID",
      type: "oid",
    },
    {
      name: "place",
      alias: "place",
      type: "string",
    },
  ],
  objectIdField: "ObjectID",
  geometryType: "polyline",
});

// Tells Arcade Editor to use the 'popup' profile and provides the necessary data used as
// definition for the profile variables.
arcadeEditorElt.profile = {
  id: "popup",
  disabledVariables: ["$layer", "$map", "$datastore"],
  definitions: {
    $feature: polylineFeature,
  },
};

// Tells Arcade Editor to the following test data. The data provided must match the expected data for the
// profile used.
arcadeEditorElt.testData = {
  profileVariableInstances: {
    $feature: polylineGraphic,
  },
  spatialReference: polylineGraphic.geometry.spatialReference,
};

// Set a script on the editor
arcadeEditorElt.script = "Geometry($feature)";

// Everything has been loaded and assigned, we can remove scrim
document.getElementById("scrim").remove();
