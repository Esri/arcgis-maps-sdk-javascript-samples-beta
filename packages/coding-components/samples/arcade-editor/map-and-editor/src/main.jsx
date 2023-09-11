import React from "react";
import ReactDOM from "react-dom/client";

import { setAssetPath } from "@arcgis/coding-components/dist/components";
import "@arcgis/coding-components/dist/components/arcgis-arcade-editor";
import "@esri/calcite-components/dist/components/calcite-button";
import "@esri/calcite-components/dist/components/calcite-scrim";

setAssetPath(`${location.origin}${location.pathname}assets/components/assets`);

import ArcadeEditor from "./components/ArcadeEditor";
import Map from "./components/Map";

import "./main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <ArcadeEditor />
      <Map />
    </div>
  </React.StrictMode>
);
