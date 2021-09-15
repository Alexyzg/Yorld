import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { MapboxMap } from '../MapboxMap';
import { PlaceCardOnMap } from './PlaceCardOnMap';
import { usePlaces } from '../hooks/usePlaces';
import { requestLocationPermission } from '../hooks/useRequestPermission';
import { Place } from '../types';

export const MapScreen: React.FC = () => {
  const [place, setPlace] = useState<undefined | Place>();

  const places = usePlaces();

  const requestPermission = useCallback(async () => {
    await requestLocationPermission();
  }, []);

  useEffect(() => {
    requestPermission();
  }, [requestPermission]);

  return (
    <SafeAreaView>
      {place && <PlaceCardOnMap place={place} />}
      <MapboxMap setPlace={setPlace} places={places} />
    </SafeAreaView>
  );
};
