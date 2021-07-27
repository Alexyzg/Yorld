import React from 'react';
import MapboxGL, { OnPressEvent } from '@react-native-mapbox-gl/maps';
import { CoordsArr } from '../../types';
import { getCoordsLikeArr } from '../../utils';

const mockedcoordinates = [
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
] as CoordsArr[];

const markerStyle = {
  circleRadius: 5,
  circleColor: '#fbb03b',
};

type PlaceMarkersLayerProps = {
  coordinatesOfPlaces?: CoordsArr[];
  onMarkerPress: (coordinates: CoordsArr) => void;
};

export const PlaceMarkersLayer: React.FC<PlaceMarkersLayerProps> = React.memo(
  ({ coordinatesOfPlaces = mockedcoordinates, onMarkerPress }) => {
    const formatedCoordinatesOfPlaces = {
      type: 'MultiPoint',
      coordinates: coordinatesOfPlaces,
    } as GeoJSON.MultiPoint;

    return (
      <MapboxGL.ShapeSource
        id="PlaceMarkersLayer"
        shape={formatedCoordinatesOfPlaces}
        onPress={(event: OnPressEvent) => {
          onMarkerPress(getCoordsLikeArr(event.coordinates));
        }}>
        <MapboxGL.CircleLayer id="PlaceMarker" style={markerStyle} />
      </MapboxGL.ShapeSource>
    );
  },
);
