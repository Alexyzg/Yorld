import React from 'react';
import { StyleSheet, View, } from 'react-native';
import * as Animatable from 'react-native-animatable';
import RNMasonryScroll from 'react-native-masonry-scrollview';
import Image from 'react-native-scalable-image';
import { useResponsiveWidth } from 'react-native-responsive-dimensions';

const { createAnimatableComponent } = Animatable;

const AnimatableView = createAnimatableComponent(View);

const images = [
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1558981001-792f6c0d5068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580502734537-c6a7ee0bdb41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580500325788-5012abe74ebf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
  'https://images.unsplash.com/photo-1580524764764-284c2a54b185?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
];

export const Grid = () => {
  const imageWidth: number = useResponsiveWidth(50) - 20;

  return (
    <RNMasonryScroll
      removeClippedSubviews={true}
      columns={2}
      evenColumnStyle={styles.evenColumnStyle}
      oddColumnStyle={styles.oddColumnStyleVertical}
      horizontal={false}
    >
      {images.map((image, imageIndex) => (
        <AnimatableView
          key={image + imageIndex}
          animation={'fadeInUp'}
          delay={100 * imageIndex}
          style={styles.imageContainer}
        >
          <Image source={{ uri: image }} width={imageWidth} key={imageIndex} />
        </AnimatableView>
      ))}
    </RNMasonryScroll>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'silver',
  },
  evenColumnStyle: { marginTop: 50 },
  oddColumnStyleVertical: { marginTop: 50 },
});
