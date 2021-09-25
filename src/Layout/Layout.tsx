import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Categories } from './Categories';
import { Children } from '../types';

const HEADER_HEIGHT = 80;

type MapHeaderProps = {
  isGrid: boolean;
  toggleView: (value: boolean) => void;
};

export const MapHeader: React.FC<MapHeaderProps> = ({ isGrid, toggleView }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Vilnius</Text>
    <TouchableOpacity
      style={{ height: 30, width: 30, backgroundColor: 'blue' }}
      onPress={() => toggleView(!isGrid)}
    >
      <View style={{}} />
    </TouchableOpacity>
  </View>
);

const MapFilter = ({ showTime }: { showTime: boolean }) => (
  <View style={styles.overlayContainer}>
    <LinearGradient
      colors={['#ffffff', '#ffffff00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.2 }}
      style={{ height: showTime ? 90 : 40, width: '100%' }}
    />
    <Categories showTime={showTime} />
  </View>
);

export type LayoutProps = {
  children: Children;
  isGrid: boolean;
  toggleView: () => void;
  showTime?: boolean;
};

export const Layout: React.FC<LayoutProps> = React.memo(
  ({ children, showTime = false, isGrid, toggleView }) => (
    <>
      <MapHeader isGrid={isGrid} toggleView={toggleView} />
      {children}
      <MapFilter showTime={showTime} />
    </>
  ),
);

const styles = StyleSheet.create({
  overlayContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    marginTop: HEADER_HEIGHT,
    height: 300,
  },
  headerText: {
    fontFamily: 'Roboto',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24,
    paddingLeft: 22,
  },
  header: {
    backgroundColor: '#fff',
    height: 80,
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 40 : 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 30,
  },
});
