import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Categories } from './Categories';

const HEADER_HEIGHT = 80;

const MapHeader = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Vilnius</Text>
  </View>
);

const MapFilter = ({ showTime }) => (
  <View style={styles.overlayContainer}>
    <LinearGradient
      colors={['#fff', 'transparent']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.2 }}
      style={{ height: showTime ? 90:40, width: '100%' }}
    />
    <Categories showTime={showTime} />
  </View>
);

export const Layout = ({ children, showTime=false }) => (
  <>
   <MapHeader />
    {children}
    <MapFilter showTime={showTime} />
  </>
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
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  header: {
    backgroundColor: '#fff',
    height: 80,
    width: '100%',
    paddingTop: 40,
  },
});
