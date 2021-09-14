import { useEffect, useState } from 'react';
import { AppState } from 'react-native';
import { RESULTS } from 'react-native-permissions';
import Geolocation from '@react-native-community/geolocation';
import { CoordsArr } from '../types';
import { checkPermission } from './useRequestPermission';

export const useGeolocation = () => {
  const [position, setPosition] = useState<CoordsArr>([0, 0]);
  const [locationGranted, setLocationGranted] = useState(false);
  const handleAppStateChange = (nextAppState: string | undefined) => {
    if (nextAppState === 'active' || nextAppState === undefined) {
      checkPermission().then(resp =>
        setLocationGranted(resp === RESULTS.GRANTED),
      );
    }
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    handleAppStateChange(undefined);
    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, []);

  useEffect(() => {
    if (locationGranted) {
      const watchId = Geolocation.watchPosition(
        ({ coords: { latitude, longitude } }) => {
          setPosition([latitude, longitude]);
        },
        error => console.error(error),
        {
          distanceFilter: 5,
          maximumAge: 0,
          useSignificantChanges: true,
        },
      );
      return () => Geolocation.clearWatch(watchId);
    }
  }, [locationGranted]);

  return position;
};
