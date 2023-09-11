import React, { useRef, useEffect } from "react";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import ExpressionInfo from "@arcgis/core/popup/ExpressionInfo";
import TextContent from "@arcgis/core/popup/content/TextContent.js";

import "./Map.css";

export default function Map() {
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      const webMap = new WebMap({
        portalItem: {
          id: "93d14bfd59a84af0be99a883feba052b",
        },
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webMap,
      });

      // If we want to do anything else here when webmap is ready
      webMap.when(async () => {
        // Get layer containing from webMap
        const featureLayer = webMap.findLayerById("California_Water_5683");

        // Modify the popup without creating a new popupTemplate
        const arcadeScript =
          "return `The full station name is ${$feature.FULL_STATION_NAME}`;";

        let newExpression = new ExpressionInfo({
          // the name is used to reference the expression value in the template
          name: "expr1",
          title: "custom expression",
          // the Arcade expression stored as text
          expression: arcadeScript,
          returnType: "string",
        });

        featureLayer.popupTemplate.expressionInfos.push(newExpression);

        let textElement = new TextContent();
        textElement.text = `{expression/${newExpression.name}}`;

        featureLayer.popupTemplate.content.push(
          textElement
        );

        // Modify labels
        // ! autocast (JS), not to autocast (TS)
        const labelClass = {
          symbol: {
            type: "text", 
            color: "green",
            font: {
              family: "Playfair Display",
              size: 12,
              weight: "bold",
            },
          },
          labelPlacement: "above-center",
          labelExpressionInfo: {
            expression: "$feature.COUNTY_NAME",
          },
        };

        featureLayer.labelingInfo = [labelClass];
      });

      // The view is now ready for display and can be used
      view.when(async () => {
        // console.log(view.map.layers);
      });
    }
  }, []);

  return <div className="mapDiv" ref={mapDiv}></div>;
}
