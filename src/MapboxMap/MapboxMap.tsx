import React, { useCallback, useRef, useState } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { CoordsArr } from '../types';
import { useCameraApi } from './hooks/cameraApi.hooks';
import { stylesFor3d, styles, mapboxStylesUrl } from './MapboxMap.styles';
import { PlaceMarkersLayer } from './PlaceMarkersLayer';
import { MyLocationButton } from '../components/MyLocationButton/MyLocationButton';
import {
  centerVilnius,
  MapboxMapProps,
  SetSelectedPlace,
} from './MapboxMap.types';
import { useSwitchBetweenMarkersDots } from './MapboxMap.hooks';

export const MapboxMap: React.FC<MapboxMapProps> = React.memo(
  ({ setPlace, places }) => {
    const { cameraRef, cameraApi } = useCameraApi();
    const [userLocation, setUserLocation] = useState<CoordsArr>();
    const setSelectedPlace = useCallback<SetSelectedPlace>(
      (place, coordinates) => {
        setPlace(place);
        cameraApi.centeringByCoordinate(coordinates);
      },
      [setPlace, cameraApi, places],
    );

    const onMyLocationPress = useCallback(() => {
        console.log('user location', userLocation)
      userLocation && cameraApi.centeringByCoordinate(userLocation);
    }, [userLocation, cameraApi]);

    const onEmptyMapPress = useCallback(() => {
      setPlace(undefined);
    }, [setPlace]);

    const onUpdateUserLocation = useCallback(
      ({ coords: { longitude, latitude } }) => {
        setUserLocation([longitude, latitude]);
      },
      [setUserLocation],
    );

    const mapRef = useRef<MapboxGL.MapView>(null);
    const { showMarkers, zoomLevelListener } =
      useSwitchBetweenMarkersDots(mapRef);

    return (
      <>
        <MapboxGL.MapView
          ref={mapRef}
          style={styles.map}
          styleURL={mapboxStylesUrl}
          surfaceView
          compassEnabled={false}
          logoEnabled={false}
          onPress={onEmptyMapPress}
          onRegionDidChange={zoomLevelListener}
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
          <PlaceMarkersLayer
            setSelectedPlace={setSelectedPlace}
            places={places}
            showMarkers={showMarkers}
          />
          <MapboxGL.UserLocation
            onUpdate={onUpdateUserLocation}
            androidRenderMode={'normal'}
            animated
          />
        </MapboxGL.MapView>
        <MyLocationButton onMyLocationPress={onMyLocationPress} />
      </>
    );
  },
);
