import React, { useState } from 'react';
import { MapboxMap } from '../MapboxMap';
import { PlaceCardOnMap } from '../MapboxMap/PlaceCardOnMap';

export const MapScreen: React.FC = () => {
  const [place, setPlace] = useState<null | object>();

  return (
    <>
      {place && <PlaceCardOnMap />}
      <MapboxMap setPlace={setPlace} />
    </>
  );
};
