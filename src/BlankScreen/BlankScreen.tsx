import React from 'react';
import { View, Text } from 'react-native';

export const BlankScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Coming soon!</Text>
  </View>
);

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#000',
  },
};
