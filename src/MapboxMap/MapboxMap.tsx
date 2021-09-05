import MapboxGL from '@react-native-mapbox-gl/maps';
import React, { useCallback } from 'react';
import { CoordsArr } from '../types';
import { useCameraApi } from './hooks/cameraApi.hooks';
import { stylesFor3d, styles, mapboxStylesUrl } from './MapboxMap.styles';
import { PlaceMarkersLayer } from './PlaceMarkersLayer';
import { Layout } from '../Layout/Layout';

const centerVilnius = [25.279652, 54.687157];

type MapboxMapProps = {
  setPlace: (place: object | null) => void;
};

export const MapboxMap: React.FC<MapboxMapProps> = React.memo(
  ({ setPlace }) => {
    const { cameraRef, cameraApi } = useCameraApi();
    const onMarkerPress = useCallback(
      (coordinates: CoordsArr) => {
        setPlace({});
        cameraApi.centeringByCoordinate(coordinates);
      },
      [setPlace, cameraApi],
    );

    const onEmptyMapPress = useCallback(() => {
      setPlace(null);
    }, [setPlace]);

    return (
     <Layout showTime>
        <MapboxGL.MapView
          style={styles.map}
          styleURL={mapboxStylesUrl}
          surfaceView
          compassEnabled={false}
          logoEnabled={false}
          onPress={onEmptyMapPress}
        >
          <MapboxGL.Camera
            ref={cameraRef}
            pitch={60}
            zoomLevel={14}
            centerCoordinate={centerVilnius}
            minZoomLevel={6}
          />
          {/* 3d part of map */}
          <MapboxGL.FillExtrusionLayer
            id="building3d"
            sourceLayerID="building"
            style={stylesFor3d}
          />
          <PlaceMarkersLayer onMarkerPress={onMarkerPress} />
        </MapboxGL.MapView>
      </Layout>
    );
  },
);
