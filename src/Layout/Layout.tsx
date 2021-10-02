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
import SwitchSelector from 'react-native-switch-selector';
import { Children } from '../types';
import { SwitchToListButton } from '../components/SwitchToListButton/SwitchToListButton';
import { FilterButton } from '../components/FilterButton/FilterButton';

const HEADER_HEIGHT = 80;

type MapHeaderProps = {
  isGrid: boolean;
  toggleView: (value: boolean) => void;
};

export const MapHeader: React.FC<MapHeaderProps> = ({ isGrid, toggleView }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Vilnius</Text>
  </View>
);
const options = [
  {
    label: 'Places',
    value: '1',
    testID: 'switch-one',
    accessibilityLabel: 'switch-one',
  },
  {
    label: 'Events',
    value: '1.5',
    testID: 'switch-one-thirty',
    accessibilityLabel: 'switch-one-thirty',
  },
  {
    label: 'Courses',
    value: '2',
    testID: 'switch-two',
    accessibilityLabel: 'switch-two',
  },
];

type PapFilterProps = {
  showTime: boolean;
  types: any[];
  setFilter: (type: string) => void;
};

// const MapFilter: React.FC<PapFilterProps> = React.memo(
//   ({ showTime, types, setFilter }) => (
//     <View style={styles.overlayContainer}>
//       <LinearGradient
//         colors={['#ffffff', '#ffffff00']}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 0, y: 1.2 }}
//         style={{ height: showTime ? 90 : 40, width: '100%' }}
//       />
//
//     </View>
//   ),
// );

const MapFilter = ({ showTime }: { showTime: boolean }) => (
  <View style={styles.overlayContainer}>
    <LinearGradient
      colors={['#ffffff', '#ffffff00']}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.2 }}
      style={{ height: showTime ? 90 : 40, width: '100%' }}
    />
    <SwitchSelector
      options={options}
      initial={0}
      onPress={value => console.log(`Call onPress with value: ${value}`)}
      style={{
        position: 'absolute',
        top: 10,
        left: 0,
        right: 0,
        // borderColor: '#eee',
        // borderWidth: 1,
        marginHorizontal: 40,
        borderRadius: 60,
      }}
      bold
      buttonColor={'#7FAD5B'}
      backgroundColor={'#f6f6f6'}
      selectedTextContainerStyle={{}}
    />
  </View>
);

export type LayoutProps = {
  children: Children;
  isGrid: boolean;
  toggleView: (value: boolean) => void;
  showTime?: boolean;
  types: any[];
  setFilter: (type: string) => void;
};

export const Layout: React.FC<LayoutProps> = React.memo(
  ({ children, showTime = false, isGrid, toggleView, types, setFilter }) => (
    <>
      <MapHeader isGrid={isGrid} toggleView={toggleView} />
      {children}
      <MapFilter showTime={showTime} types={types} setFilter={setFilter} />
      <FilterButton />
      <SwitchToListButton onPress={() => toggleView(!isGrid)} />
      <MapFilter showTime={showTime} />
      <Categories showTime={showTime} types={types} setFilter={setFilter} />
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
