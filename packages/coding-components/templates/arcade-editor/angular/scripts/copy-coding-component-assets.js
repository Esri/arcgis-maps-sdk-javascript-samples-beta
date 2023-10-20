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

var ncp = require("ncp").ncp;
var resolvePkg = require("resolve-pkg");

ncp.limit = 16;

ncp(resolvePkg("@arcgis/coding-components/dist/arcgis-coding-components/assets/"), "./src/assets/", function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("Coding components assets copied!");
});
