// TODO: try undestand this file and refactoring
import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const DeviceWindow = Dimensions.get('window');
const SIZES = {
  // Window Size
  WINDOW_WIDTH: DeviceWindow.width,
  WINDOW_HEIGHT: DeviceWindow.height,

  //detail screens
  DETAILS_HORIZONTAL_MARGIN: 12,
};

const COLORS = {
  WHITE: '#fff',
};

const renderCarouselItem = ({ item }: { item: string }) => (
  <Image style={styles.image} source={{ uri: item }} />
);

export const CustomImageSlider: React.FC<{
  images: string[];
}> = React.memo(({ images = [] }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <>
      <View style={styles.upperBar} />
      <View style={styles.blockWrapper}>
        <Carousel
          data={images}
          renderItem={renderCarouselItem}
          sliderWidth={SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2}
          itemWidth={SIZES.WINDOW_WIDTH}
          onSnapToItem={index => {
            setActiveSlide(index);
          }}
        />
        <Pagination
          dotsLength={images.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationWrapper}
          dotStyle={styles.dot}
          inactiveDotStyle={styles.dotInactive}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
        />
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  blockWrapper: {
    width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
    marginHorizontal: SIZES.DETAILS_HORIZONTAL_MARGIN,
    borderRadius: 10,
    overflow: 'hidden',
  },
  upperBar: {
    backgroundColor: COLORS.WHITE,
    width: SIZES.WINDOW_WIDTH,
    height: 40,
  },
  image: {
    height: SIZES.WINDOW_HEIGHT * 0.45,
    width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
    borderRadius: 10,
    backgroundColor: '#ddd',
  },
  paginationWrapper: {
    marginTop: -60,
  },
  dot: {
    width: 40,
    height: 6,
    borderRadius: 5,
    backgroundColor: COLORS.WHITE,
  },
  dotInactive: {
    width: 6,
  },
});
