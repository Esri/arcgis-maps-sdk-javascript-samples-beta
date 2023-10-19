import React from 'react';
import ReactDOM from 'react-dom/client';
import ArcadeEditor from './components/ArcadeEditor';

import { setAssetPath } from '@arcgis/coding-components/dist/components';
setAssetPath(window.location.href);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ArcadeEditor />
  </React.StrictMode>
);
