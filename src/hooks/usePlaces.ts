import { useState, useEffect } from 'react';
import { Place } from '../types';

const data = require('../../data.json');

export const usePlaces = () => {
  const [places, setPlaces] = useState<Place[] | undefined>();
  useEffect(() => {
    // TODO remove reduce after consistent data
    setPlaces(
      data.reduce(
        (acc: Place[], item: Place) =>
          item.previewImage ? [...acc, item] : acc,
        [],
      ),
    );
  }, []);
  return places;
};
