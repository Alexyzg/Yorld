// TODO: refactoring
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import Androw from 'react-native-androw';
import { useNavigation } from '@react-navigation/core';
import { Paths } from '../../navigation/paths.types';

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    bottom: 190,
    borderRadius: 20,
    marginHorizontal: '2%',
    width: '96%',
    height: 120,
    backgroundColor: '#FFF',
    zIndex: 1,
    flexDirection: 'row',
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    position: 'absolute',
    top: -20,
    left: 10,
    width: 150,
    height: 130,
    borderRadius: 20,

  },
  title: {
    marginLeft: -5,
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',

  },
  address: {
    marginLeft: -5,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',

    color: '#B53830'

  },
  shadow: {
    shadowColor: '#171717',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    width: 180,
    height: 130,
  },
});

export const PlaceCardOnMap: React.FC = React.memo(() => {
  const { navigate } = useNavigation();
  return (
    <Pressable style={styles.wrapper} onPress={() => navigate(Paths.Place)}>
      <Androw style={styles.shadow}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://fastly.4sqi.net/img/general/699x268/1425885_EwQcMnKdiwbVywGpm5N0qT5DNwegdjEkm7ynqObMLUA.jpg',
          }}
        />
      </Androw>
      <View style={{flex: 1,  width: 160,}}>
      <Text style={styles.title}>Children's playground</Text>
        <Text style={styles.address}>Konstitucijos pr. 29</Text>
      </View>
    </Pressable>
  );
});
