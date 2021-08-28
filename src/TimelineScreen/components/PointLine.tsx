import React from 'react';
import PropTypes from 'prop-types';
import Dash from 'react-native-dash';
import moment from 'moment';
import { Text, View } from 'react-native';
import { Point } from './Point';

export const PointLine = ({
  data,
  isLastMember,
  dayTextStyle,
  length,
  monthTextStyle,
  monthFontColor,
  monthFontFamily,
  dayFontColor,
  dayFontFamily,
}) => (
  <View style={styles.container}>
    <View style={styles.containerGlue}>
      <Text style={dayTextStyle || _dayTextStyle(dayFontColor, dayFontFamily)}>
        {moment(data).format('DD') || '19'}
      </Text>
      <Text
        style={
          monthTextStyle || _monthTextStyle(monthFontColor, monthFontFamily)
        }
      >
        {moment(data).format('ddd').toUpperCase() || 'TUE'}
      </Text>
    </View>
    <View style={styles.dividerStyle}>
      {!isLastMember && (
        <Dash dashGap={7} dashColor="#e3e3e3" style={_dashStyle(length)} />
      )}
      <Point />
    </View>
  </View>
);

PointLine.propTypes = {
  dayFontColor: PropTypes.string,
  dayFontFamily: PropTypes.string,
  monthFontColor: PropTypes.string,
  monthFontFamily: PropTypes.string,
};

PointLine.defaultProps = {
  dayFontColor: '#984cf8',
  monthFontColor: '#ded9e6',
};

const _monthTextStyle = (color, fontFamily) => ({ color, fontFamily });

const _dayTextStyle = (color, fontFamily) => ({
  color,
  fontFamily,
  fontWeight: '700',
});

const _dashStyle = length => ({
  width: 1,
  height: 110 * length,
  flexDirection: 'column',
});

const styles = {
  container: {
    flexDirection: 'row',
    marginLeft: 24,
  },
  containerGlue: {
    marginTop: -7,
    marginRight: 12,
    alignItems: 'center',
    flexDirection: 'column',
  },
  dividerStyle: {
    paddingTop: 12,
    marginLeft: 12,
  },
};
