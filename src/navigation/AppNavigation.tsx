import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Paths } from './paths.types';
import { MapScreen } from '../MapScreen';
import { PlaceDetailScreen } from '../PlaceDetailScreen/PlaceDetailScreen';

const Stack = createStackNavigator();

export const AppNavigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName={Paths.Map} headerMode="none">
      <Stack.Screen name={Paths.Map} component={MapScreen} />
      <Stack.Screen name={Paths.Place} component={PlaceDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
