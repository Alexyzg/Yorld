import React, { useCallback, useMemo } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { CoordsArr, Place } from '../types';
import { useCameraApi } from './hooks/cameraApi.hooks';
import { stylesFor3d, styles, mapboxStylesUrl } from './MapboxMap.styles';
import { PlaceMarkersLayer } from './PlaceMarkersLayer';
import { MyLocationButton } from '../components/MyLocationButton/MyLocationButton';

export const centerVilnius: CoordsArr = [25.279652, 54.687157];

type MapboxMapProps = {
  setPlace: (place: Place | undefined) => void;
  places: Place[] | undefined;
};

export const MapboxMap: React.FC<MapboxMapProps> = React.memo(
  ({ setPlace, places }) => {
    const { cameraRef, cameraApi } = useCameraApi();

    const onMarkerPress = useCallback(
      (coordinates: CoordsArr) => {
        //TODO change find place or set place by ID
        const place =
          places &&
          places.find(
            ({
              location: {
                geo: { lng },
              },
            }) => coordinates[0].toFixed(5) === lng.toFixed(5),
          );

        setPlace(place);
        cameraApi.centeringByCoordinate(coordinates);
      },
      [setPlace, cameraApi, places],
    );

    const onMyLocationPress = useCallback(
      (coordinates: CoordsArr) => {
        cameraApi.centeringByCoordinate(coordinates);
      },
      [cameraApi],
    );

    const onEmptyMapPress = useCallback(() => {
      setPlace(undefined);
    }, [setPlace]);

    const coordinatesOfPlaces: CoordsArr[] | undefined = useMemo(
      () =>
        places &&
        places.reduce(
          (
            acc,
            {
              location: {
                geo: { lat, lng },
              },
            },
          ) => [...acc, [lng, lat]],
          [] as CoordsArr[],
        ),
      [places],
    );

    return (
      <>
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
          <PlaceMarkersLayer
            onMarkerPress={onMarkerPress}
            coordinatesOfPlaces={coordinatesOfPlaces}
          />
          <MapboxGL.UserLocation androidRenderMode={'normal'} animated />
        </MapboxGL.MapView>
        <MyLocationButton onMyLocationPress={onMyLocationPress} />
      </>
    );
  },
);
