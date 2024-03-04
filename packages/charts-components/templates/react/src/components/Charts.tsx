/* Copyright 2024 Esri
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

import { useEffect, useRef, useCallback } from 'react';

import { ArcgisChartsActionBar, ArcgisChartsScatterPlot } from '@arcgis/charts-components-react';
import { ScatterPlotModel } from '@arcgis/charts-model';

import { loadFeatureLayer } from '../functions/load-data';

import './Charts.css';
// set the default action bar based on the series type
function setDefaultActionBar(chartElementId: string, seriesType: string) {
  const actionBarElement = document.getElementById(chartElementId) as HTMLArcgisChartsActionBarElement;

  if (actionBarElement !== null) {
    actionBarElement.actionBarHideActionsProps = {
      hideRotateChart: seriesType === 'histogramSeries' || seriesType === 'pieSeries' || seriesType === 'scatterSeries',
      hideFilterByExtent: true,
      hideZoom: true,
      hideSelection: true,
      hideFullExtent: true,
    };
  }
}

export default function Charts() {
  const scatterPlotRef = useRef(null);

  // useCallback to prevent the function from being recreated when the component rebuilds
  const initializeChart = useCallback(async () => {
    const featureLayer = await loadFeatureLayer();

    const scatterPlotParams = {
      layer: featureLayer,
      xAxisFieldName: 'Earnings',
      yAxisFieldName: 'Cost',
    };

    const scatterPlotModel = new ScatterPlotModel(scatterPlotParams);

    const config = await scatterPlotModel.config;

    scatterPlotRef.current.config = config;
    scatterPlotRef.current.layer = featureLayer;

    // add event listener when selection is made on the chart to enable/disable action bar buttons
    scatterPlotRef.current.addEventListener('arcgisChartsSelectionComplete', (event: CustomEvent) => {
      const actionBarElement = document.getElementById('scatter-plot-action-bar') as HTMLArcgisChartsActionBarElement;

      const selectionData = event.detail;
      if (selectionData.selectionOIDs === undefined || selectionData.selectionOIDs.length === 0) {
        actionBarElement.disableClearSelection = true;
        actionBarElement.disableFilterBySelection = true;
      } else {
        actionBarElement.disableClearSelection = false;
        actionBarElement.disableFilterBySelection = false;
      }
    });

    // set the default actions for the action bar based on the series type
    setDefaultActionBar('scatter-plot-action-bar', config.series[0].type);
  }, []);

  // Register a function that will execute after the current render cycle
  useEffect(() => {
    initializeChart().catch(console.error);
  }, [initializeChart]);

  return (
    <ArcgisChartsScatterPlot ref={scatterPlotRef} class='chart-component' id='scatter-plot-chart'>
      <ArcgisChartsActionBar slot='action-bar' id='scatter-plot-action-bar'></ArcgisChartsActionBar>
    </ArcgisChartsScatterPlot>
  );
}
