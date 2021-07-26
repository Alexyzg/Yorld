import React from 'react';
import { SafeAreaView, StyleProp, StyleSheet } from 'react-native';

import MapboxGL, { FillExtrusionLayerStyle } from "@react-native-mapbox-gl/maps";

export const MapboxStyles = 'mapbox://styles/alyonayanuchek/ck9pti76v3cic1ilchpjj6obq';
const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  }
});

const centerVilnius = [25.279652, 54.687157];
const mockedPoints = [
  [25.278652, 54.688157],
  [25.280652, 54.689157],
  [25.277652, 54.687657],
  [25.281652, 54.687157],
  [25.279652, 54.687357],
  [25.285652, 54.687157],
  [25.285652, 54.687157],
  [25.287652, 54.687157],
  [25.289652, 54.687157],
  [25.279652, 54.687957],
];

export const App = () => (
  <SafeAreaView>
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
      <MapboxGL.ShapeSource
        id="placesMarkers"
        shape={{
          type: "MultiPoint",
          coordinates: mockedPoints,
        }}
      >
        <MapboxGL.CircleLayer 
          id="placeCircrleMarker"
          style={{
            circleRadius: 5,
            circleColor: '#fbb03b'
          }}/>
      </MapboxGL.ShapeSource>
    </MapboxGL.MapView>
  </SafeAreaView>
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
  // TODO: can be removed? 
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
