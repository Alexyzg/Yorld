import React from 'react';
import { View, StyleSheet } from 'react-native';

export const MoveLeft = () => (
  <View style={styles.background}>
    <View style={[styles.top, styles.topLeft]}>
      <View style={[styles.bottom, styles.bottomLeft]} />
    </View>
  </View>
);

export const MoveRight = () => (
  <View style={styles.background}>
    <View style={[styles.top, styles.topRight]}>
      <View style={[styles.bottom, styles.bottomRight]} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  background: {
    height: 80,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
  },
  top: {
    height: 20,
    width: 3,
    backgroundColor: 'white',
  },
  topLeft: { transform: [{ rotate: '45deg' }] },
  topRight: { transform: [{ rotate: '-45deg' }] },
  bottom: {
    height: 20,
    width: 3,
    backgroundColor: 'white',
    marginTop: 9,
    transform: [{ rotate: '-90deg' }],
  },
  bottomLeft: { marginLeft: 9 },
  bottomRight: { marginLeft: -9 },
});
