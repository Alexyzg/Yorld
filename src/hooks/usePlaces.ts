import { useState, useEffect } from 'react';
import { Place } from '../types';

const data = require('../../data.json').slice(0, 20);

export const usePlaces = () => {
  const [places, setPlaces] = useState<Place[] | undefined>();
  useEffect(() => {
    setPlaces(data);
  }, []);
  return places;
};
