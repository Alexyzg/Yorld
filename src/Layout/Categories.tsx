import React from 'react';
import { StyleSheet } from 'react-native';
import { Category } from '../Category/Category';

const data1 = [
  { id: 8, title: 'Today' },
  { id: 9, title: '24' },
  { id: 10, title: '25' },
  { id: 11, title: '26' },
  { id: 1, title: '27' },
  { id: 2, title: '28' },
  { id: 3, title: '29' },
  { id: 4, title: '30' },
  { id: 5, title: '31' },
  { id: 6, title: '32' },
];

const data2 = [
  { id: 8, title: 'Theater', color: '#7FAD5B' },
  { id: 9, title: 'Cinema', color: '#FFC2B6' },
  { id: 10, title: 'Playground', color: '#FFE6E3' },
  { id: 11, title: 'Museum', color: '#8CC8FF' },
  { id: 8, title: 'Theater', color: '#7F73D2' },
  { id: 9, title: 'Cinema', color: '#FF9161' },
  { id: 10, title: 'Playground', color: '#EC8F73' },
  { id: 11, title: 'Museum', color: '#56549E' },
];

export const Categories = ({ showTime = false }) => (
  <>
    <Category
      itemText={'title'}
      itemSelected={() => {}}
      data={data2}
      style={styles.category1Style}
      itemStyles={styles.item1Styles}
      colorItemDefault={'#fff'}
      colorItemSelected={'#333'}
      colorTextDefault={'#fff'}
      colorTextSelected={'#fff'}
    />
    {showTime ? (
      <Category
        itemText={'title'}
        itemSelected={() => {}}
        data={data1}
        style={styles.category2Style}
        itemStyles={styles.item2Styles}
        colorItemDefault={'#fff'}
        colorItemSelected={'#e0e0e0'}
        colorTextDefault={'#707070'}
        colorTextSelected={'#000000'}
      />
    ) : null}
  </>
);

const styles = StyleSheet.create({
  category1Style: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
  },
  item1Styles: {
    backgroundColor: '#fff',
    borderRadius: 20,
    fontWeight: '800',
  },
  category2Style: {
    backgroundColor: 'transparent',
    position: 'absolute',
    width: '100%',
    marginTop: 50,
  },
  item2Styles: {
    backgroundColor: '#fff',
    borderRadius: 20,
    fontWeight: '800',
  },
});
