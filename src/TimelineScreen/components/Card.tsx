import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import moment from 'moment';
import Androw from 'react-native-androw';
import { isAndroid } from '@freakycoder/react-native-helpers';

const styles = {
  container: {
    width: '85%',
    height: null,
    paddingTop: 12,
    paddingLeft: 16,
    paddingBottom: 3,
    borderRadius: 322,
    alignSelf: 'baseline',
    flexDirection: 'column',
  },
  cardContainerGlue: {
    width: '100%',
    paddingLeft: 16,
  },
};

export const _dateStyle = (color, fontFamily, isCard) => ({
  color,
  fontFamily,
  fontSize: 10,
  marginLeft: 32,
  marginTop: isCard ? 8 : 0,
});

export const _subtitleStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  fontSize: 12,
  marginTop: 8,
  fontWeight: '600',
});

export const _titleStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  fontSize: 14,
  fontWeight: 'bold',
});

export const _shadowStyle = (isCard, shadowColor) =>
  isCard
    ? {
        backgroundColor: 'transparent',
        shadowColor,
        shadowRadius: 7,
        shadowOpacity: 0.09,
        shadowOffset: {
          width: 0,
          height: 3,
        },
      }
    : null;

export const _cardContainer = (isCard, shadowColor, backgroundColor) => {
  return [
    {
      marginTop: -5,
      paddingTop: 12,
      marginLeft: 24,
      borderRadius: 12,
      flexDirection: 'row',
      paddingBottom: isCard ? 12 : 6,
    },
    isCard && {
      shadowColor,
      backgroundColor,
      shadowRadius: 7,
      shadowOpacity: 0.05,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
  ];
};

export const Card = ({
  data,
  date,
  title,
  isCard,
  subtitle,
  dateStyle,
  titleStyle,
  shadowColor,
  subtitleStyle,
  dateFontColor,
  titleFontColor,
  dateFontFamily,
  titleFontFamily,
  subtitleFontColor,
  subtitleFontFamily,
  cardBackgroundColor,
}) => (
  <Androw
    style={[
      styles.container,
      isAndroid && _shadowStyle(isCard, shadowColor, cardBackgroundColor),
    ]}
  >
    <Androw style={_cardContainer(isCard, shadowColor, cardBackgroundColor)}>
      <View style={styles.cardContainerGlue}>
        <Text
          numberOfLines={1}
          style={titleStyle || _titleStyle(titleFontColor, titleFontFamily)}
        >
          {data.title}
        </Text>
        <Text
          numberOfLines={2}
          style={
            subtitleStyle ||
            _subtitleStyle(subtitleFontColor, subtitleFontFamily)
          }
        >
          {data.subtitle}
        </Text>
      </View>
    </Androw>
    <Text
      numberOfLines={1}
      style={dateStyle || _dateStyle(dateFontColor, dateFontFamily, isCard)}
    >
      {moment(data.date).format('DD ddd, HH:mm')}
    </Text>
  </Androw>
);

Card.propTypes = {
  date: PropTypes.string,
  isCard: PropTypes.bool,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  shadowColor: PropTypes.string,
  dateFontColor: PropTypes.string,
  dateFontFamily: PropTypes.string,
  titleFontColor: PropTypes.string,
  subtitleFontColor: PropTypes.string,
  subtitleFontFamily: PropTypes.string,
  cardBackgroundColor: PropTypes.string,
};

Card.defaultProps = {
  isCard: true,
  shadowColor: '#000',
  date: 'Tue 16, 19:09',
  dateFontColor: '#ccc',
  titleFontColor: '#556084',
  cardBackgroundColor: '#fff',
  subtitleFontColor: '#8c93ab',
  title: 'React Native Beautiful Timeline',
  subtitle: 'Etiam volutpat ligula metus, quis.',
};
