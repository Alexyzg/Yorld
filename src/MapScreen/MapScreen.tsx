import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { MapboxMap } from '../MapboxMap';
import { PlaceCardOnMap } from './PlaceCardOnMap';
import { useFireBase } from '../../firebase/FirebaseExample';
import { requestLocationPermission } from '../hooks/useRequestPermission';

export const MapScreen: React.FC = () => {
  const [place, setPlace] = useState<null | object>();

  useFireBase();

  const fetchData = useCallback(async () => {
    await requestLocationPermission();
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <SafeAreaView>
      {place && <PlaceCardOnMap />}
      <MapboxMap setPlace={setPlace} />
    </SafeAreaView>
  );
};
