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

import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

/**
 * Simple data loader against public data.
 * For the test data, we need a feature layer.
 */
export async function loadFeatureLayer(portalItemId) {
  const featureLayer = new FeatureLayer({
    portalItem: {
      id: portalItemId
    }
  });

  await featureLayer.load();

  return featureLayer;
}
