/* Copyright 2023 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// @ts-check

/**
 * Only add the version groups for which we want to enforce specific range or version.
 */

/** @type {import("syncpack").RcFile} */
const config = {
  sortFirst: [
    "name",
    "description",
    "homepage",
    "version",
    "private",
    "sideEffects",
    "workspaces",
    "type",
    "module",
    "main",
    "types",
    "keywords",
    "files",
    "bin",
    "publishConfig",
    "license",
    "scripts",
    "acme:scripts",
    "dependencies",
    "devDependencies",
    "peerDependencies",
    "packageManager"
  ],
  sortAz: ["devDependencies", "dependencies", "peerDependencies", "optionalDependencies"],
  versionGroups: [
    {
      label: "ArcGIS Core dev dependency",
      dependencies: ["@arcgis/core"],
      dependencyTypes: ["dev", "prod"],
      packages: ["**"],
      pinVersion: "rc"
    },
    {
      label: "ArcGIS Components dev and prod dependency",
      dependencyTypes: ["dev", "prod"],
      dependencies: [
        "@arcgis/coding-components",
        "@arcgis/coding-components-angular",
        "@arcgis/coding-components-react",
        "@arcgis/map-components",
        "@arcgis/map-components-angular",
        "@arcgis/map-components-react"
      ],
      packages: ["**"],
      pinVersion: "next"
    },
    {
      label: "Calcite Components dev dependency",
      dependencies: ["@esri/calcite-components"],
      packages: ["**"],
      dependencyTypes: ["dev", "prod"],
      pinVersion: "latest"
    },
    {
      label: "React for dev and prod",
      dependencyTypes: ["dev", "prod"],
      dependencies: ["react", "react-dom"],
      packages: ["**"],
      pinVersion: "^18.2.0"
    },
    {
      label: "Angular for dev and prod",
      dependencyTypes: ["dev", "prod"],
      dependencies: [
        "@angular/animations",
        "@angular/common",
        "@angular/compiler",
        "@angular/core",
        "@angular/forms",
        "@angular/platform-browser",
        "@angular/platform-browser-dynamic",
        "@angular/router"
      ],
      packages: ["**"],
      pinVersion: "^17.1.0"
    },
    {
      label: "Vite for dev",
      dependencyTypes: ["dev"],
      dependencies: ["vite"],
      packages: ["**"],
      pinVersion: "5.1.1"
    },
    {
      label: "Webpack for dev",
      dependencyTypes: ["dev", "prod"],
      dependencies: ["webpack"],
      packages: ["**"],
      pinVersion: "5.90.1"
    },
    {
      label: "vue for dev, prod",
      dependencyTypes: ["dev", "prod"],
      dependencies: ["vue"],
      packages: ["**"],
      pinVersion: "3.4.18"
    },
    {
      label: "css-loader for dev",
      dependencyTypes: ["dev"],
      dependencies: ["css-loader"],
      packages: ["**"],
      pinVersion: "6.10.0"
    }
  ]
};

module.exports = config;
