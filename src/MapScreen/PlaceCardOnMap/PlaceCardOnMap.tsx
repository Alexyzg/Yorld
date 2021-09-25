import React, { useCallback, useEffect, useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
// @ts-ignore
import Androw from 'react-native-androw';
// @ts-ignore
import { getColorFromURL } from 'rn-dominant-color';
import { useNavigation } from '@react-navigation/core';
import { Paths } from '../../navigation/paths.types';
import { Place } from '../../types';
import { GRAY } from '../../assets/colors';

type PlaceCardOnMapType = {
  place: Place;
};

type Colors = {
  primary: string;
  secondary: string;
  background: string;
  detail: string;
};

export const PlaceCardOnMap: React.FC<PlaceCardOnMapType> = React.memo(
  ({
    place,
    place: {
      previewImage,
      type,
      location: { address },
    },
  }) => {
    const { navigate } = useNavigation();
    const [primaryColor, setPrimaryColor] = useState<string>('#fff');
    // TODO: Prepare color upfront (for example on Server)
    const calcColor = useCallback(() => {
      getColorFromURL(previewImage)
        .then((colors: Colors) => {
          setPrimaryColor(colors.primary);
        })
        .catch((e: any) => {
          console.log(e);
        });
    }, [previewImage]);

    useEffect(() => {
      calcColor();
    }, [calcColor]);

    const navigateToPlace = useCallback(() => {
      navigate(Paths.Place, { place, primaryColor });
    }, [navigate, place, primaryColor]);

    return (
      <Pressable style={styles.wrapper} onPress={navigateToPlace}>
        <Androw style={styles.shadow}>
          <Image
            style={styles.image}
            source={{
              uri: previewImage,
            }}
          />
        </Androw>
        <View style={styles.infoWrapper}>
          <Text style={styles.title}>{type}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
      </Pressable>
    );
  },
);

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
    shadowColor: GRAY,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  image: {
    position: 'absolute',
    top: -20,
    left: 10,
    width: 150,
    height: 130,
    borderRadius: 20,
  },
  infoWrapper: {
    flex: 1,
    width: 160,
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
    color: '#B53830',
  },
  shadow: {
    shadowColor: GRAY,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
    width: 180,
    height: 130,
  },
});
