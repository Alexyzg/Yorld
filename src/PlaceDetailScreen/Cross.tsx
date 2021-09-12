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
          blurType="light"
          blurAmount={10}
          reducedTransparencyFallbackColor={'#000'}
          // overlayColor={'rgba(256,256,256,.1)'}
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
    // backgroundColor: 'rgba(226,226,226,0.1)',
    zIndex: 1,
  },
  left: {
    height: 14,
    width: 2,
    backgroundColor: 'white',
    transform: [{ rotate: '45deg' }],
    borderRadius: 20,
    marginTop: -28,
    marginLeft: 18,
  },
  right: {
    height: 14,
    width: 2,
    backgroundColor: 'white',
    transform: [{ rotate: '90deg' }],
    borderRadius: 20,
  },
});
