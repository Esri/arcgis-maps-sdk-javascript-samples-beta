import React from 'react';
import ReactDOM from 'react-dom/client';
import ArcadeEditor from './components/ArcadeEditor';

import { defineCustomElements as defineCalciteElements } from "@esri/calcite-components/dist/loader";
import { defineCustomElements as defineArcadeEditorElements } from "@arcgis/coding-components/dist/loader";

defineCalciteElements();
defineArcadeEditorElements();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArcadeEditor />
  </React.StrictMode>
);
