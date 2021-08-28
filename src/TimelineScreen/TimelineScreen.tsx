import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, FlatList } from 'react-native';
import { ScreenWidth } from '@freakycoder/react-native-helpers';
import { Item } from './components/Item';

export const TimelineScreen = ({ data, backgroundColor }) => (
  <SafeAreaView style={_container(backgroundColor)}>
    <FlatList
      data={data}
      style={styles.listStyle}
      renderItem={({ item, index }) => (
        <Item
          data={item}
          list={item.data}
          isLastMember={index === data.length - 1}
        />
      )}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.contentContainerStyle}
    />
  </SafeAreaView>
);

TimelineScreen.propTypes = {
  data: PropTypes.array,
  backgroundColor: PropTypes.string,
};

TimelineScreen.defaultProps = {
  data: [1, 2, 3, 4, 5],
  backgroundColor: '#fdfdfd',
};

const _container = backgroundColor => ({
  margin: 16,
  height: '100%',
  backgroundColor,
});

const styles = {
  listStyle: {
    width: ScreenWidth,
    paddingTop: 24,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
};
