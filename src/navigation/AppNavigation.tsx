import React from 'react';
import { View } from 'react-native';
import { AnimatedTabBarNavigator } from 'react-native-animated-nav-tab-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { changeBarColors } from 'react-native-immersive-bars';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Paths } from './paths.types';
import { MapScreen } from '../MapScreen';
import { PlaceDetailScreen } from '../PlaceDetailScreen/PlaceDetailScreen';
import { GridScreen } from '../GridScreen/GridScreen';
import { TimelineScreen } from '../TimelineScreen/TimelineScreen';

const Tabs = AnimatedTabBarNavigator();
const Stack = createStackNavigator();

const TabIconInactiveColor = '#88AB65';
const activeTintColor = '#2F7C6E';
const inactiveTintColor = '#5C7B41';
const activeTabBackgrounds = '#d3e0c2';
const navigatorAppearance = {
  floating: true,
  activeTabBackgrounds: activeTabBackgrounds,
  horizontalPadding: 35,
  topPadding: 5,
  bottomPadding: 5,
  activeColors: inactiveTintColor,
  whenActiveShow: 'icon-only',
};

const TabBarIcon = ({ focused, color, size, name }) => (
  <Icon
    name={name}
    size={size}
    color={focused ? color : TabIconInactiveColor}
    focused={focused}
  />
);

const Options = name => ({
  tabBarIcon: props => <TabBarIcon {...props} name={name} />,
});

const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName={Paths.Map} headerMode="none">
    <Stack.Screen name={Paths.Map} component={MapScreen} />
    <Stack.Screen name={Paths.Place} component={PlaceDetailScreen} />
  </Stack.Navigator>
);

export const AppNavigation: React.FC = () => {
  React.useEffect(() => {
    changeBarColors(false, '#50000000', 'transparent');
  });
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={Paths.Map}
        tabBarOptions={{
          activeTintColor,
          inactiveTintColor,
          tabStyle: { marginBottom: 50 },
        }}
        appearance={navigatorAppearance}
        ta
      >
        <Tabs.Screen
          name={'Map'}
          component={MainStackNavigator}
          options={Options('map-marker')}
        />
        <Tabs.Screen
          name="Search"
          component={GridScreen}
          options={Options('search')}
        />
        <Tabs.Screen
          name="Calendar"
          component={TimelineScreen}
          options={Options('calendar')}
        />
        <Stack.Screen
          name="Self"
          component={() => <View />}
          options={Options('paw')}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
