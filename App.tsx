import React from 'react';
import { StyleProp, StyleSheet } from 'react-native';

import MapboxGL, { FillExtrusionLayerStyle } from "@react-native-mapbox-gl/maps";

export const MapboxStyles = 'mapbox://styles/alyonayanuchek/ck9pti76v3cic1ilchpjj6obq';
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  }
});

const centerVilnius = [25.279652, 54.687157]
export const App = () => (
  <MapboxGL.MapView
    style={styles.map}
    styleURL={MapboxStyles}
    surfaceView
    compassEnabled={false}
  >
    <MapboxGL.Camera pitch={60} zoomLevel={14} centerCoordinate={centerVilnius} />
    <MapboxGL.FillExtrusionLayer
      id='building3d'
      sourceLayerID='building'
      style={fillExtrusionLayerStyle}
    />
  </MapboxGL.MapView>
);

const fillExtrusionLayerStyle = {
  fillExtrusionHeight: [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height']
  ],
  fillExtrusionBase: [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height']
  ],
  fillExtrusionColor: '#fff',
  fillExtrusionOpacity: 0.6
} as StyleProp<FillExtrusionLayerStyle>;
