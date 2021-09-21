import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';

const colors = {
  black: '#1a1917',
  gray: '#888888',
};

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } =
  Dimensions.get('window');

function wp(percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

const slideHeight = viewportHeight * 0.56;
const slideWidth = wp(65);
const itemHorizontalMargin = wp(5);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

const entryBorderRadius = 8;

const styles = StyleSheet.create({
  slideInnerContainer: {
    width: itemWidth,
    height: slideHeight,
    backgroundColor: '#E3F1E2',
    paddingHorizontal: itemHorizontalMargin,
    paddingBottom: 18, // needed for shadow
    borderRadius: entryBorderRadius,
    marginLeft: 8,
  },
  slideInnerContainerEven: {
    backgroundColor: '#8ccccc',
  },
  shadow: {
    position: 'absolute',
    top: 0,
    left: itemHorizontalMargin,
    right: itemHorizontalMargin,
    bottom: 18,
    shadowColor: colors.black,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 10,
    borderRadius: entryBorderRadius,
  },
  imageContainer: {
    flex: 1,
    marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    paddingBottom: 10,
    paddingLeft: 10,
    height: 300,
  },
  image: {
    borderRadius: IS_IOS ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
  },
  // image's border radius is buggy on iOS; let's hack it!
  radiusMask: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: entryBorderRadius,
  },
  textContainer: {
    justifyContent: 'center',
    paddingTop: 20 - entryBorderRadius,
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: entryBorderRadius,
    borderBottomRightRadius: entryBorderRadius,
  },
  title: {
    color: colors.black,
    fontSize: 26,
    lineHeight: 46,
    letterSpacing: 0.5,
  },
  titleEven: {
    color: 'white',
  },
  subtitle: {
    marginTop: 6,
    color: colors.gray,
    fontSize: 12,
    fontStyle: 'italic',
  },
  subtitleEven: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
});

export const SliderEntry = ({
  data: { title, subtitle, backgroundColor, ImageC },
}) => (
  <TouchableOpacity
    activeOpacity={1}
    style={[styles.slideInnerContainer, { backgroundColor }]}
    onPress={() => {
      alert(`You've clicked '${title}'`);
    }}
  >
    <View style={styles.shadow} />
    <View style={styles.textContainer}>
      {title ? (
        <Text style={styles.title} numberOfLines={5}>
          {subtitle}
        </Text>
      ) : null}
    </View>
    <View style={styles.imageContainer}>
      <ImageC style={styles.image} />
      <View style={styles.radiusMask} />
    </View>
  </TouchableOpacity>
);
