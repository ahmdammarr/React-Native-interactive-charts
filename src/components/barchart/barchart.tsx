import React, { Fragment } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { G, Line, Rect, Svg, Text } from 'react-native-svg';
import { scalePoint, scaleLinear } from 'd3-scale';
import { range, max } from 'd3-array';
// const abbr = require('number-abbreviate')
import type { BarChartProps } from './types';

const { width } = Dimensions.get('screen');
export const BarChart = ({
  data,
  svgBackground,
  containerHeight = 261.166,
  containerWidth = width * 0.9,
  graphMargin = 14,
  barWidth = 14,
  graphGridWidth = width / 15,
  axisColor = '#fff',
  barColor = '#000000',
  selectedBarColor = '#1a759f',
  labelsColor = '#fff',
  valuesColor = '#fff',
  isClickableBars = false,
  hideLabels = false,
  hideLabelsAxis = false,
  hideValues = false,
  hideValuesAxis = false,
}: BarChartProps): React.ReactElement => {
  const [selectedBar, setSelectedBar] = React.useState('');

  const graphHeight = containerHeight - 2 * graphMargin;
  const graphWidth = containerWidth - 2 * graphMargin;

  const xDomain = data.map((item) => item.label);
  const xRange = [0, graphWidth];
  const x = scalePoint().domain(xDomain).range(xRange).padding(1);

  const largestValue = Math.max(...data.map((item) => item.value));
  const power = parseInt(
    `1${Array.from(Array(largestValue.toString().length - 1).fill('0')).join(
      ''
    )}`
  );

  const maxValu = Math.ceil(largestValue / power) * power;

  const yAxiesValues = range(0, maxValu + power, power);

  const yDomain = [0, max(data, (d) => d.value)];
  const yRange = [0, graphHeight];

  const y = scaleLinear()
    //@ts-ignore
    .domain(yDomain)
    .range(yRange);

  return (
    <View style={[styles.viewContainer, { width: width * 0.9 }]}>
      <Svg
        style={[
          styles.svgContainer,
          {
            width: width * 0.9,
            aspectRatio: containerWidth / containerHeight,
          },
        ]}
        width="100%"
        viewBox={`0 0 ${containerWidth - 10} ${containerHeight}`}
        preserveAspectRatio="none"
      >
        {svgBackground || null}

        <G y={graphHeight + graphMargin} x={20}>
          {!hideLabelsAxis && (
            <Line
              x1={10}
              y1={2}
              x2={graphWidth - graphGridWidth + 10}
              y2={2}
              stroke={axisColor}
              strokeWidth="1.5"
            />
          )}
          {!hideValuesAxis && (
            <Line
              x1={10}
              y1={2}
              x2={10}
              y2={-y(largestValue + 50)}
              stroke={axisColor}
              strokeWidth="1.5"
            />
          )}
          {data.map((item, index) => {
            return (
              <Fragment key={String(index)}>
                <Rect
                  key={`bar${item.label}`}
                  x={x(item?.label) || 0 - barWidth / 2}
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
                    key={item.label}
                    x={(x(item?.label) || 0) - graphWidth / 10}
                    y={y(item.value + graphHeight / 3) * -1}
                  >
                    {/* <ToolTip value={item?.value} /> */}
                  </G>
                )}
              </Fragment>
            );
          })}
          {!hideLabels &&
            data.map((item) => (
              <Text
                key={`label${item.value}`}
                fontSize="10"
                fill={labelsColor}
                x={(x(item?.label) || 0) + 5}
                y={12.5}
                textAnchor="middle"
              >
                {item.label}
              </Text>
            ))}

          {!hideValues &&
            yAxiesValues.map((item, index) => (
              <Text
                key={`label${item + index}`}
                fontSize="10"
                fill={valuesColor}
                x={-4}
                y={-y(item)}
                textAnchor="middle"
              >
                {
                  //abbr(item)
                  item
                }
              </Text>
            ))}
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
