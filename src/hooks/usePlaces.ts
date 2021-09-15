import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Place } from '../types';

export const usePlaces = () => {
  const [places, setPlaces] = useState<Place[] | undefined>();
  useEffect(() => {
    firestore()
      .collection('places-test')
      .get()
      .then(querySnapshot => {
        let fetchedPlaces = [] as Place[];
        querySnapshot.forEach(documentSnapshot => {
          fetchedPlaces.push(documentSnapshot.data() as Place);
        });
        setPlaces(fetchedPlaces);
      });
  }, []);
  return places;
};
