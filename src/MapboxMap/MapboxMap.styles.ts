import {StyleProp, StyleSheet} from 'react-native';
import {FillExtrusionLayerStyle} from '@react-native-mapbox-gl/maps';

export const mapboxStylesUrl =
  'mapbox://styles/alyonayanuchek/ck9pti76v3cic1ilchpjj6obq';

export const stylesFor3d = {
  fillExtrusionHeight: [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'height'],
  ],
  // TODO: can be removed?
  fillExtrusionBase: [
    'interpolate',
    ['linear'],
    ['zoom'],
    15,
    0,
    15.05,
    ['get', 'min_height'],
  ],
  fillExtrusionColor: '#fff',
  fillExtrusionOpacity: 0.6,
} as StyleProp<FillExtrusionLayerStyle>;

export const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
});
