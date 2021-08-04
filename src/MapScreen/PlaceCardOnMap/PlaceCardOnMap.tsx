// TODO: refactoring
import React from 'react';
import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Paths } from '../../navigation/paths.types';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 90,
    borderRadius: 20,
    marginHorizontal: '2%',
    width: '96%',
    height: 120,
    backgroundColor: '#FFF',
    zIndex: 1,
    padding: 15,
    flexDirection: 'row',
  },
  image: {
    width: 90,
    height: 90,
  },
  title: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const PlaceCardOnMap: React.FC = React.memo(() => {
  const { navigate } = useNavigation();
  return (
    <Pressable style={styles.wrapper} onPress={() => navigate(Paths.Place)}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://avatars.mds.yandex.net/get-zen_doc/50509/pub_5c98d65563221300b32f4acd_5c98d9c198af3500b23df07b/scale_1200',
        }}
      />
      <Text style={styles.title}>Hi, i am cat.</Text>
    </Pressable>
  );
});
