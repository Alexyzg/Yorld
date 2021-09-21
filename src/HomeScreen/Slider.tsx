import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { SliderEntry } from './SliderEntry';
import {
  FamilyValues,
  FatherBackpack,
  FatherBaseball,
  FatherFishing,
  FatherShoulders,
} from '../assets/svg';

const x = 100; // center
const y = 50; // center
const r = 50; // radius

const { width: viewportWidth } = Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const colors = {
  black: '#1a1917',
  gray: '#888888',
  background1: '#B721FF',
  background2: '#21D4FD',
};

const styles = StyleSheet.create({
  slider: {
    marginTop: 45,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  }
});

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: '15 events \nin your\nneighborhood today',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
    ImageC: FamilyValues,
    backgroundColor: '#8ccccc',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    illustration: 'https://i.imgur.com/XC202Hl.jpeg',
    ImageC: FatherBaseball,
    backgroundColor: '#76a5d4',
  },
  {
    title: 'White Pocket Sunset',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
    ImageC: FatherShoulders,
    backgroundColor: '#facd95',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
    ImageC: FatherBackpack,
    backgroundColor: '#5B4A46',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
    ImageC: FatherFishing,
    backgroundColor: '#E38A62',
  },
];

export const MyCarousel = () => (
  <Carousel
    data={ENTRIES1}
    renderItem={({ item}) => <SliderEntry data={item} />}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
    containerCustomStyle={styles.slider}
    contentContainerCustomStyle={styles.sliderContentContainer}
    useScrollView
    layoutCardOffset={'9'}
  />
);
