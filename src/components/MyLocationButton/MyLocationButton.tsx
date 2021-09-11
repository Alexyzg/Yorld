import React, { useCallback } from 'react';
import { TouchableHighlight, StyleSheet, Linking } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { ORANGE, GRAY, WHITE, TEAL } from '../../assets/colors';
import { CoordsArr } from '../../types';
import {
  checkPermission,
  requestLocationPermission,
} from '../../hooks/useRequestPermission';
import { RESULTS } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/core';
import { Paths } from '../../navigation/paths.types';

const ICON_SIZE = 25;

type MyLocationButtonProps = {
  onMyLocationPress: (coordinates: CoordsArr) => void;
  userLocation: CoordsArr;
};

export const MyLocationButton: React.FC<MyLocationButtonProps> = React.memo(
  ({ onMyLocationPress, userLocation }) => {
    const { navigate } = useNavigation();
    const [lat, lng] = userLocation;

    const goToMyLocation = useCallback(() => {
      onMyLocationPress([lng, lat]);
    }, [onMyLocationPress, lat, lng]);

    const onButtonPress = useCallback(async () => {
      await checkPermission().then(resp => {
        console.log(resp)
        if (resp === RESULTS.BLOCKED) {
          navigate(Paths.RequestLocation);
        } else if (resp === RESULTS.DENIED) {
          requestLocationPermission();
        } else {
          goToMyLocation();
        }
      });
    }, [goToMyLocation, navigate]);

    return (
      <TouchableHighlight
        style={styles.searchButton}
        onPress={onButtonPress}
        underlayColor={TEAL}
      >
        <Icon style={styles.searchIcon} name="navigate" size={ICON_SIZE} />
      </TouchableHighlight>
    );
  },
);

const styles = StyleSheet.create({
  searchButton: {
    position: 'absolute',
    right: 16,
    bottom: 200,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: WHITE,
    borderRadius: 20,
    shadowColor: GRAY,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  searchIcon: {
    color: ORANGE,
  },
});
