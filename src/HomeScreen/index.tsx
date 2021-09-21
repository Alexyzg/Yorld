import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { MyCarousel } from './Slider';

export const HomeScreen: React.FC = () => (
  <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
    <Text
      style={{
        marginTop: 80,
        marginLeft: 30,
        width: 250,
        fontSize: 42,
      }}
    >
      Good morning
    </Text>
    <MyCarousel />
  </SafeAreaView>
);
