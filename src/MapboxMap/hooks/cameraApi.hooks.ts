import MapboxGL from '@react-native-mapbox-gl/maps';
import { useRef, useMemo } from 'react';
import { CoordsArr } from '../../types';

const defaultcamersSettings = {
  pitch: 60,
  zoomLevel: 17,
  animationDuration: 800,
  heading: 180,
};

export const useCameraApi = () => {
  const cameraRef = useRef<MapboxGL.Camera>(null);

  const cameraApi = useMemo<{
    centeringByCoordinate: (coordinate: CoordsArr) => void;
  }>(
    () => ({
      centeringByCoordinate: ([lng, lat]) => {
        cameraRef.current?.setCamera({
          centerCoordinate: [+lng, +lat],
          ...defaultcamersSettings,
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
