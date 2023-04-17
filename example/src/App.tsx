import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-interactive-charts';

const cities = [
  { label: 'Tokyo', value: 37435192 },
  { label: 'Delhi', value: 29399140 },
  { label: 'Shanghai', value: 26317104 },
  { label: 'São Paulo', value: 21846507 },
  { label: 'Mumbai', value: 20185064 },
  { label: 'Beijing', value: 20035455 },
  { label: 'Mexico City', value: 19856717 },
  { label: 'Osaka', value: 19282467 },
  { label: 'Cairo', value: 18945905 },
  { label: 'New York City', value: 18804000 },
  { label: 'Dhaka', value: 18691684 },
  { label: 'Karachi', value: 17432947 },
  // { label: 'Buenos Aires', value: 15594428 },
  // { label: 'Istanbul', value: 15227742 },
  // { label: 'Kolkata', value: 14974063 },
  // { label: 'Manila', value: 14922895 },
  // { label: 'Lagos', value: 13958949 },
  // { label: 'Rio de Janeiro', value: 13320553 },
  // { label: 'Tianjin', value: 13143808 },
  // { label: 'Kinshasa', value: 13130000 },
  // { label: 'Paris', value: 11659751 },
  // { label: 'Lima', value: 11167729 },
  // { label: 'Bangkok', value: 11125192 },
  // { label: 'Seoul', value: 10886292 },
  // { label: 'Nagoya', value: 10512000 },
  // { label: 'Chennai', value: 10262726 },
  // { label: 'Chengdu', value: 10240390 },
  // { label: 'London', value: 10000000 },
  // { label: 'Lahore', value: 10007287 },
  // { label: 'Bogotá', value: 9792570 },
  // { label: 'Johannesburg', value: 9574414 },
  // { label: 'Wuhan', value: 9239700 },
  // { label: 'Tehran', value: 9213731 },
  // { label: 'Bangalore', value: 8903470 },
  // { label: 'Ho Chi Minh City', value: 8831918 },
  // { label: 'Hyderabad', value: 8752000 },
  // { label: 'Baghdad', value: 8836140 },
  // { label: 'Hong Kong', value: 7510700 },
  // { label: 'Hanoi', value: 7556900 },
  // { label: 'Ahmedabad', value: 7410000 },
  // { label: 'Kuala Lumpur', value: 7302000 },
  // { label: 'Santiago', value: 6985834 },
  // { label: 'Surat', value: 6954091 },
  // { label: 'Rio de Janeiro', value: 6747815 },
  // { label: 'Alexandria', value: 6642469 },
  // { label: 'Ankara', value: 6394844 },
  // { label: 'Jeddah', value: 6380000 },
]

export default function App() {
  return (
    <View style={styles.container}>
      <BarChart
        data={cities}
        hasLabels
        hasValues
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
