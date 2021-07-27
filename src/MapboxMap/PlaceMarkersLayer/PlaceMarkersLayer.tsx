import React from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';

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
];

const markerStyle = {
  circleRadius: 5,
  circleColor: '#fbb03b',
};

type CoordinatesOfPlaces = [number, number][];

export const PlaceMarkersLayer: React.FC<{
  coordinatesOfPlaces?: CoordinatesOfPlaces;
}> = React.memo(({coordinatesOfPlaces = mockedcoordinates}) => {
  const formatedCoordinatesOfPlaces = {
    type: 'MultiPoint',
    coordinates: coordinatesOfPlaces,
  } as GeoJSON.MultiPoint;

  return (
    <MapboxGL.ShapeSource
      id="PlaceMarkersLayer"
      shape={formatedCoordinatesOfPlaces}>
      <MapboxGL.CircleLayer id="PlaceMarker" style={markerStyle} />
    </MapboxGL.ShapeSource>
  );
});
