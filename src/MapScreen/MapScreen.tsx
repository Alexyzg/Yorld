import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { MapboxMap } from '../MapboxMap';
import { PlaceCardOnMap } from '../MapboxMap/PlaceCardOnMap';

export const MapScreen: React.FC = () => {
  const [place, setPlace] = useState<null | object>();

  return (
    <SafeAreaView>
      {place && <PlaceCardOnMap />}
      <MapboxMap setPlace={setPlace} />
    </SafeAreaView>
  );
};
