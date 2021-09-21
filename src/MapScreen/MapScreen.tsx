import React, { useEffect, useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { MapboxMap } from '../MapboxMap';
import { PlaceCardOnMap } from './PlaceCardOnMap';
import { usePlaces } from '../hooks/usePlaces';
import { requestLocationPermission } from '../hooks/useRequestPermission';
import { Place } from '../types';
import { Layout } from '../Layout/Layout';
import { Grid } from '../Grid/Grid';

export const MapScreen: React.FC = () => {
  const [place, setPlace] = useState<undefined | Place>();
  const [isGrid, setGrid] = useState(false);

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
      <Layout showTime isGrid={isGrid} toggleView={setGrid}>
        {isGrid ? <Grid /> : <MapboxMap setPlace={setPlace} places={places} />}
      </Layout>
    </SafeAreaView>
  );
};
