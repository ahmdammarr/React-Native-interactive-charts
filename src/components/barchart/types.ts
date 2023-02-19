import type { ReactElement } from 'react';
export type BarChartDataProps = {
  label: string;
  value: number;
}[];

export type BarChartProps = {
  data: BarChartDataProps;
  axisColor?: string;
  barColor?: string;
  hasLabels?: boolean;
  hasValues?: boolean;
  hasLabelsAxis?: boolean;
  hasValuesAxis?: boolean;
  selectedBarColor?: string;
  labelsColor?: string;
  valuesColor?: string;
  isClickableBars?: boolean;
  containerHeight?: number;
  containerWidth?: number;
  graphMargin?: number;
  barWidth?: number;
  svgBackground?: ReactElement;
  size?: { width?: number; height?: number };
  fontSize?: number;
  power?: number;
};
