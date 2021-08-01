import MapboxGL from '@react-native-mapbox-gl/maps';
import { useRef, useMemo } from 'react';
import { CoordsArr } from '../../types';

export const useCameraApi = () => {
  const cameraRef = useRef<MapboxGL.Camera>(null);

  const cameraApi = useMemo<{
    centeringByCoordinate: (coordinate: CoordsArr) => void;
  }>(
    () => ({
      centeringByCoordinate: coordinate => {
        cameraRef.current?.setCamera({
          centerCoordinate: coordinate,
          animationDuration: 800,
        });
      },
    }),
    [],
  );

  return {
    cameraRef,
    cameraApi,
  };
};
