import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

export const Point = ({
  pointShadowColor,
  pointBackgroundColor,
  outerContainerBorderColor,
  outerContainerBackgroundColor,
}) => {
  return (
    <View style={_innerContainer(pointBackgroundColor, pointShadowColor)}>
      <View
        style={_outerContainer(
          outerContainerBorderColor,
          outerContainerBackgroundColor,
        )}
      />
    </View>
  );
};

Point.propTypes = {
  pointShadowColor: PropTypes.string,
  pointBackgroundColor: PropTypes.string,
  outerContainerBorderColor: PropTypes.string,
  outerContainerBackgroundColor: PropTypes.string,
};

Point.defaultProps = {
  pointShadowColor: '#984cf8',
  pointBackgroundColor: '#984cf8',
  outerContainerBorderColor: 'rgba(152, 76, 248, 0.1)',
  outerContainerBackgroundColor: 'rgba(152, 76, 248, 0.05)',
};

const _innerContainer = (backgroundColor, shadowColor) => [
  {
    top: 0,
    left: -4,
    width: 10,
    height: 10,
    backgroundColor,
    borderRadius: 30,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  {
    shadowColor,
    shadowRadius: 8,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
];

const _outerContainer = (borderColor, backgroundColor) => ({
  width: 20,
  height: 20,
  borderColor,
  borderWidth: 1,
  backgroundColor,
  borderRadius: 16,
});
