import { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

export const useFireBase = () => {
  useEffect(() => {
    const subscriber = firestore()
      .collection('places-test')
      .doc('ChIJ-TvILUGR3UYRRxSFCcaDa3M')
      .onSnapshot(documentSnapshot => {
        console.log('Place data: ', documentSnapshot.data());
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);
};
