import React, { Fragment, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { G, Line, Rect, Svg, Text } from 'react-native-svg';
import { scalePoint, scaleLinear } from 'd3-scale';
import { range, max } from 'd3-array';
import type { BarChartProps } from './types';
import { truncString } from '../../helpers/truncString';

const abbr = require('number-abbreviate');

const { width } = Dimensions.get('screen');
export const BarChart = ({
  data,
  svgBackground,
  containerHeight = 261.166,
  containerWidth = width * 0.9,
  graphMargin = 12,
  barWidth = 14,
  axisColor = '#fff',
  barColor = '#000000',
  selectedBarColor = '#1a759f',
  labelsColor = '#fff',
  valuesColor = '#fff',
  isClickableBars = false,
  hasLabelsAxis = true,
  hasLabels = false,
  hasValuesAxis = true,
  hasValues = false,
  fontSize = 10,
  power: thePower,
}: BarChartProps): React.ReactElement => {
  const [selectedBar, setSelectedBar] = useState('');

  const graphHeight = containerHeight - graphMargin;
  const graphWidth = containerWidth - graphMargin;

  const xDomain = data.map((item) => item.label);
  const xRange = [0, graphWidth];
  const x = scalePoint().domain(xDomain).range(xRange).padding(1);
  const largestValue = max(data.map((item) => item.value)) || 0;
  const power =
    thePower ||
    parseInt(
      `1${Array.from(Array(largestValue.toString().length - 1).fill('0')).join(
        ''
      )}`
    );

  const yAxiesValues = range(0, largestValue + power, power);

  const yDomain = [0, largestValue || 0];

  const yRange = [0, graphHeight];

  const y = scaleLinear().domain(yDomain).range(yRange);

  return (
    <View style={[styles.viewContainer]}>
      <Svg
        style={[
          styles.svgContainer,
          {
            width: graphWidth,
            height: graphHeight,
            aspectRatio: graphWidth / graphHeight,
          },
        ]}
        width="100%"
        viewBox={`0 0 ${containerWidth} ${containerHeight}`}
        preserveAspectRatio="none"
      >
        {svgBackground || null}
        <G y={graphHeight} x={hasValues ? graphMargin : 0}>
          {data.map((item) => {
            return (
              <Fragment key={`all-bar-component-${item.label}`}>
                <Rect
                  key={`bar-${item.label}`}
                  x={x(item?.label)}
                  y={-y(item.value)}
                  width={barWidth}
                  height={y(item.value)}
                  fill={
                    isClickableBars && selectedBar === item.label
                      ? selectedBarColor
                      : barColor
                  }
                  onPress={() => setSelectedBar(item.label)}
                />
                {selectedBar === item.label && (
                  <G
                    key={`tip-${item.label}`}
                    x={(x(item?.label) || 0) - graphWidth / 10}
                    y={y(item.value + graphHeight / 3) * -1}
                  />
                )}
              </Fragment>
            );
          })}
          {hasLabels &&
            data.map((item) => (
              <Text
                key={`label${item.label}`}
                fontSize={fontSize}
                fill={labelsColor}
                x={(x(item?.label) || 0) + barWidth / 2}
                y={graphMargin}
                textAnchor="middle"
              >
                {truncString({
                  text: item?.label,
                  maxLength: 3,
                })}
              </Text>
            ))}
          {hasValues &&
            yAxiesValues.map((value) => {
              return (
                <Text
                  key={`label${value}`}
                  fontSize={fontSize}
                  fill={valuesColor}
                  y={-y(value) + graphMargin}
                  textAnchor="middle"
                >
                  {abbr(value)}
                </Text>
              );
            })}
          {hasLabelsAxis && (
            <Line
              x1={graphMargin + 2}
              y1={1}
              x2={graphWidth + 2}
              y2={1}
              stroke={axisColor}
              strokeWidth="1.5"
            />
          )}
          {hasValuesAxis && (
            <Line
              x1={graphMargin + 2}
              y1={1}
              x2={graphMargin + 2}
              y2={-y(largestValue)}
              stroke={axisColor}
              strokeWidth="1.5"
            />
          )}
        </G>
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  svgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    alignItems: 'center',
  },
});
