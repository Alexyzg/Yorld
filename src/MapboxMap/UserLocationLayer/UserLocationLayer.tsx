import React, { useMemo } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import { DARK_MARSHY, MARSHY } from '../../assets/colors';
import { CoordsArr } from '../../types';

type UserLocationLayerProps = {
  userLocation: CoordsArr;
};

export const UserLocationLayer: React.FC<UserLocationLayerProps> = React.memo(
  ({ userLocation }) => {
    const [lat, lng] = userLocation;
    const shape: GeoJSON.FeatureCollection = useMemo(() => {
      return {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: { type: 'Point', coordinates: [lng, lat] },
            properties: { id: 'userLocation', geo: { lng, lat } },
            id: 'userLocation',
          },
        ],
      };
    }, [lat, lng]);
    return !lat && !lng ? null : (
      <MapboxGL.ShapeSource
        key="userLocationShapeSource"
        id="userLocationShapeSource"
        shape={shape}
      >
        <MapboxGL.CircleLayer
          key="userLocationBackgroundCircle"
          id="userLocationBackgroundCircle"
          style={styles.background}
        />
        <MapboxGL.CircleLayer
          key="userLocationGreenCircle"
          id="userLocationGreenCircle"
          aboveLayerID="userLocationBackgroundCircle"
          style={styles.foreground}
        />
      </MapboxGL.ShapeSource>
    );
  },
);

export const styles = {
  background: {
    circleRadius: 9,
    color: DARK_MARSHY,
  },
  foreground: {
    circleRadius: 8,
    circleColor: MARSHY,
  },
};
