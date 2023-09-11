import React from "react";
import ReactDOM from "react-dom/client";

import { ArcgisMap, ArcgisSearch } from "@arcgis/map-components-react";

import "@arcgis/core/assets/esri/themes/dark/main.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArcgisMap item-id="d5dda743788a4b0688fe48f43ae7beb9">
      <ArcgisSearch position="top-right"></ArcgisSearch>
    </ArcgisMap>
  </React.StrictMode>
);
