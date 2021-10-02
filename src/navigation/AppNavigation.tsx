import React from 'react';
import { View } from 'react-native';
import {
  AnimatedTabBarNavigator,
  IAppearanceOptions,
  TabElementDisplayOptions,
} from 'react-native-animated-nav-tab-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { changeBarColors } from 'react-native-immersive-bars';
import Icon from 'react-native-vector-icons/Ionicons';
import { Paths } from './paths.types';
import { MapScreen } from '../MapScreen';
import { PlaceDetailScreen } from '../PlaceDetailScreen/PlaceDetailScreen';
import { TimelineScreen } from '../TimelineScreen/TimelineScreen';
import { RequestSettingsScreen } from '../RequestSettngsScreen';
import { HomeScreen } from '../HomeScreen';
import { BlankScreen } from "../BlankScreen";
import { DARK_GRAY } from '../assets/colors';

const Tabs = AnimatedTabBarNavigator();
const Stack = createStackNavigator();

const TabIconInactiveColor = DARK_GRAY;
const activeTintColor = '#2F7C6E';
const inactiveTintColor = '#5C7B41';
const activeTabBackgrounds = '#d3e0c2';
const navigatorAppearance: Partial<IAppearanceOptions> = {
  floating: true,
  activeTabBackgrounds: 'transparent', // activeTabBackgrounds,
  horizontalPadding: 5,
  topPadding: 5,
  bottomPadding: 5,
  activeColors: inactiveTintColor,
  whenActiveShow: TabElementDisplayOptions.ICON_ONLY,
  dotCornerRadius: 0,
  dotSize: 'small',
};

export type TabBarIconProps = {
  name: string;
  size: number;
  color: string;
  focused: boolean;
};

const TabBarIcon: React.FC<TabBarIconProps> = React.memo(
  ({ focused, color, size, name }) => (
    <>
        {focused ?
            <View
                style={
                    {width: 24,
                        height: 24,
                        backgroundColor: activeTabBackgrounds ,
                        borderRadius: 40,
                        bottom: 4,
                        right: 12,
                        position: 'absolute'}
                } /> : null}
      <Icon
        name={focused ?name: name + '-outline'}
        size={size}
        color={focused ? color : TabIconInactiveColor}
      />

    </>
  ),
);

const getOptions = (name: string) => ({
  tabBarIcon: (props: TabBarIconProps) => (
    <TabBarIcon {...props} size={23} name={name} />
  ),
});

const MainStackNavigator = () => (
  <Stack.Navigator initialRouteName={Paths.Map} headerMode="none">
    <Stack.Screen name={Paths.Map} component={MapScreen} />
    <Stack.Screen name={Paths.Place} component={PlaceDetailScreen} />
    <Stack.Screen
      name={Paths.RequestLocation}
      component={RequestSettingsScreen}
    />
  </Stack.Navigator>
);

export const AppNavigation: React.FC = () => {
  React.useEffect(() => {
    changeBarColors(false, '#50000000', 'transparent');
  });

  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName={'Home'}
        tabBarOptions={{
          activeTintColor,
          inactiveTintColor,
          tabStyle: {
            marginBottom: 50,
            width: 240,
            height: 54,
            alignSelf: 'center',
          },
        }}
        appearance={navigatorAppearance}
      >
        <Tabs.Screen
          name={'Home'}
          component={HomeScreen}
          options={getOptions('home')}
        />
        <Tabs.Screen
          name={'Map'}
          component={MainStackNavigator}
          options={getOptions('earth')}
        />

        <Tabs.Screen
          name="Calendar"
          component={TimelineScreen}
          options={getOptions('calendar')}
        />
        <Tabs.Screen
          name="Self"
          component={BlankScreen}
          options={getOptions('body')}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};
