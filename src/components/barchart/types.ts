import type { ReactElement } from 'react';
export type BarChartDataProps = {
  label: string;
  value: number;
}[];

export type BarChartProps = {
  data: BarChartDataProps;
  axisColor?: string;
  barColor?: string;
  hideLabels?: boolean;
  hideValues?: boolean;
  hideLabelsAxis?: boolean;
  hideValuesAxis?: boolean;
  selectedBarColor?: string;
  labelsColor?: string;
  valuesColor?: string;
  isClickableBars?: boolean;
  containerHeight?: number;
  containerWidth?: number;
  graphMargin?: number;
  barWidth?: number;
  graphGridWidth?: number;
  svgBackground?: ReactElement;
};
