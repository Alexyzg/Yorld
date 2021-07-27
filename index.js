import {AppRegistry} from 'react-native';
import {App} from './App';
import {name as appName} from './app.json';

import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYWxpdHNrZXZpY2giLCJhIjoiY2p5bWtwYmgwMGluZDNpbXRwMWk2eG51NyJ9.PHQubjbq-xlcJJGeBT4yNw',
);

AppRegistry.registerComponent(appName, () => App);
