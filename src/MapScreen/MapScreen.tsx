import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { MapboxMap } from '../MapboxMap';
import { PlaceCardOnMap } from './PlaceCardOnMap';
import { useFireBase } from '../../firebase/FirebaseExample';

export const MapScreen: React.FC = () => {
  const [place, setPlace] = useState<null | object>();
  useFireBase();
  return (
    <SafeAreaView>
      {place && <PlaceCardOnMap />}
      <MapboxMap setPlace={setPlace} />
    </SafeAreaView>
  );
};
