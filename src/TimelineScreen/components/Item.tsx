import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';
import { ScreenWidth, isAndroid } from '@freakycoder/react-native-helpers';
import { Card } from './Card';
import { PointLine } from './PointLine';

const dummyListData = [1, 2];

const styles = {
  container: {
    width: ScreenWidth,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: isAndroid ? 16 : 0,
  },
  insideListContainer: {
    marginTop: -24,
    flexDirection: 'column',
  },
};

export const Item = ({ data, list, isLastMember }) => {
  return (
    <View style={styles.container}>
      <PointLine
        data={data.date}
        length={list.length}
        isLastMember={isLastMember}
      />
      <View style={styles.insideListContainer}>
        <FlatList
          data={list}
          renderItem={({ item, index }) => <Card key={index} isCard data={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

Item.propTypes = {
  data: PropTypes.object,
  list: PropTypes.array,
};

Item.defaultProps = {
  data: {},
  list: dummyListData,
};
