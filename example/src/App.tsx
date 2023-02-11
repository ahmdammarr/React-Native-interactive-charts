import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { BarChart } from 'react-native-interactive-charts';

export default function App() {
  

  return (
    <View style={styles.container}>
      <BarChart
        data={[
          { label: 'o', value: 100 },
          { label: 't', value: 200 },
          { label: 'T', value: 300 },
          { label: 'f', value: 400 },
          { label: 'f1', value: 500 },
          { label: 's', value: 600 },
          { label: 's2', value: 700 },
          { label: 'e', value: 800 },
          { label: 'n', value: 900 },
          { label: 'n1', value: 900 }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
