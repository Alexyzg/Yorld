import React, { useCallback } from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {GRAY, WHITE, TEAL, ORANGE} from '../../assets/colors';
import {
  checkPermission,
  requestLocationPermission,
} from '../../hooks/useRequestPermission';
import { RESULTS } from 'react-native-permissions';
import { useNavigation } from '@react-navigation/core';
import { Paths } from '../../navigation/paths.types';

const ICON_SIZE = 25;

type MyLocationButtonProps = {
  onMyLocationPress: () => void;
};

export const MyLocationButton: React.FC<MyLocationButtonProps> = React.memo(
  ({ onMyLocationPress }) => {
    const { navigate } = useNavigation();

    const onButtonPress = useCallback(async () => {
      await checkPermission().then(resp => {
        if (resp === RESULTS.BLOCKED) {
          navigate(Paths.RequestLocation);
        } else if (resp === RESULTS.DENIED) {
          requestLocationPermission();
        } else {
          onMyLocationPress();
        }
      });
    }, [onMyLocationPress, navigate]);

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
    bottom: 260,
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
