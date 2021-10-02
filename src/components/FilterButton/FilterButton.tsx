import React from 'react';
import { TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { GRAY, WHITE, TEAL, DARK_GRAY } from '../../assets/colors';

const ICON_SIZE = 25;

type MyLocationButtonProps = {
  onMyLocationPress: () => void;
};

export const FilterButton: React.FC<MyLocationButtonProps> = React.memo(() => (
  <TouchableHighlight
    style={styles.searchButton}
    onPress={() => {}}
    underlayColor={TEAL}
  >
    <Icon style={styles.searchIcon} name="filter" size={ICON_SIZE} />
  </TouchableHighlight>
));

const styles = StyleSheet.create({
  searchButton: {
    position: 'absolute',
    right: 16,
    bottom: 390,
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
    color: DARK_GRAY,
  },
});
