import React, { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
  NativeModules,
} from 'react-native';
import { BlurView } from '@react-native-community/blur';

const { StatusBarManager } = NativeModules;

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

export const Cross = ({ onPress }) => {
  const [height, setHeight] = useState(STATUSBAR_HEIGHT);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      StatusBarManager.getHeight(statusBarHeight => {
        setHeight(statusBarHeight.height);
      });
    }
  }, []);
  return (
    <View
      style={{
        ...styles.cross,
        top: height + 20,
      }}
    >
      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 20, left: 50, right: 40 }}
        onPress={onPress}
      >
        <BlurView
          blurType="dark"
          blurAmount={10}
          reducedTransparencyFallbackColor={'#000'}
          overlayColor={'rgba(0,0,0,0)'}
          blurRadius={25}
          style={{ height: 40, width: 40 }}
        />
        <View style={styles.left}>
          <View style={styles.right} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cross: {
    position: 'absolute',
    right: 20,
    borderRadius: 50,
    overflow: 'hidden',
    height: 38,
    width: 38,
    backgroundColor: 'rgba(71,70,70,0.7)',
    zIndex: 1,
    borderColor: 'rgba(71,70,70,0.1)',
    borderWidth: 1,
  },
  left: {
    height: 14,
    width: 2,
    backgroundColor: 'white',
    transform: [{ rotate: '45deg' }],
    borderRadius: 20,
    marginTop: -29,
    marginLeft: 17,
  },
  right: {
    height: 14,
    width: 2,
    backgroundColor: 'white',
    transform: [{ rotate: '90deg' }],
    borderRadius: 20,
  },
});
