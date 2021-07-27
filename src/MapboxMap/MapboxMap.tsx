import MapboxGL from '@react-native-mapbox-gl/maps';
import React from 'react';
import { useCameraApi } from './hooks/cameraApi.hooks';
import { stylesFor3d, styles, mapboxStylesUrl } from './MapboxMap.styles';
import { PlaceMarkersLayer } from './PlaceMarkersLayer';

const centerVilnius = [25.279652, 54.687157];

export const MapboxMap: React.FC = React.memo(() => {
  const { cameraRef, cameraApi } = useCameraApi();

  return (
    <MapboxGL.MapView
      style={styles.map}
      styleURL={mapboxStylesUrl}
      surfaceView
      compassEnabled={false}>
      <MapboxGL.Camera
        ref={cameraRef}
        pitch={60}
        zoomLevel={14}
        centerCoordinate={centerVilnius}
      />
      {/* 3d part of map */}
      <MapboxGL.FillExtrusionLayer
        id="building3d"
        sourceLayerID="building"
        style={stylesFor3d}
      />
      <PlaceMarkersLayer onMarkerPress={cameraApi.centeringByCoordinate} />
    </MapboxGL.MapView>
  );
});
