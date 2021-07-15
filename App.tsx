import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import MapboxGL from "@react-native-mapbox-gl/maps";

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  }
});

export const App = () => (
  <MapboxGL.MapView style={styles.map} />
);
