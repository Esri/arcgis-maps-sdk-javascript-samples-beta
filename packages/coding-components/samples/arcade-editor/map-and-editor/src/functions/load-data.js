import WebMap from "@arcgis/core/WebMap";

/**
 * Simple data loader against public data.
 * For this sample we are using the Popup profile.
 * We need a web map, a feature layer for the definition.
 * We need a web map, a feature layer and a feature set for the test data.
 */
export async function loadData() {
  const webMap = new WebMap({
    portalItem: { id: "93d14bfd59a84af0be99a883feba052b" },
  });
  await webMap.loadAll();

  const featureLayer = webMap.findLayerById("California_Water_5683");

  const featureSet = await featureLayer.queryFeatures({
    where: "1=1",
    outFields: ["*"],
    returnGeometry: true,
  });

  return { webMap, featureLayer, featureSet };
}
