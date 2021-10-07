import React, { useCallback, useMemo } from 'react';
import MapboxGL, { OnPressEvent } from '@react-native-mapbox-gl/maps';
import { Place } from '../../types';
import { getCoordsLikeArr } from '../../utils';
import { markerPng } from '../../assets/svg';
import { styles } from './PlaceMarkersLayer.styles';
import { PlaceMarkersLayerProps } from '../MapboxMap.types';

const getFeatureCollectionFromPlaces = (
  places: Place[],
): GeoJSON.FeatureCollection => ({
  type: 'FeatureCollection',
  features: (places || []).map(place => {
    const { lat, lng } = place.location.geo;
    return {
      type: 'Feature',
      geometry: { type: 'Point', coordinates: [+lng, +lat] },
      properties: place,
      id: place.id,
    };
  }),
});

const getVisibility = (styles, flag) => ({
  ...styles,
  visibility: flag ? 'visible' : 'none',
});

export const PlaceMarkersLayer: React.FC<PlaceMarkersLayerProps> = React.memo(
  ({ places = [], setSelectedPlace, showMarkers }) => {
    const coordinatesFeatureCollection = useMemo(
      () => getFeatureCollectionFromPlaces(places),
      [places],
    );

    const onMarkerPress = useCallback(
      (event: OnPressEvent) => {
        setSelectedPlace(
          event.features[0].properties as Place,
          getCoordsLikeArr(event.coordinates),
        );
      },
      [setSelectedPlace],
    );
    return (
      <MapboxGL.ShapeSource
        id="PlaceMarkersLayer"
        shape={coordinatesFeatureCollection}
        onPress={onMarkerPress}
      >
        <MapboxGL.SymbolLayer
          id={'iconLayerId'}
          key={'iconLayerId'}
          style={
            {
              iconImage: markerPng,
              ...getVisibility(styles.symboleLayer, showMarkers),
            }
          }
        />
        <MapboxGL.CircleLayer
          id="PlaceMarker"
          style={getVisibility(styles.dots, !showMarkers)}
        />
      </MapboxGL.ShapeSource>
    );
  },
);
