// TODO: refactoring
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { CustomImageSlider } from './CustomImageSlider';

const mockedImages = [
  'https://memepedia.ru/wp-content/uploads/2019/08/readyimage_78556.jpg',
  'https://myprojects.info/img/blog/den-programmista2.jpg',
  'https://www.meme-arsenal.com/memes/7c859e89b33d292da74e5167686439e5.jpg',
  'https://www.meme-arsenal.com/memes/fddac5de94e8193d7df2058cfd294fc4.jpg',
];

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export const PlaceDetailScreen: React.FC = React.memo(() => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.wrapper}>
      <CustomImageSlider images={mockedImages} />
      <Pressable onPress={goBack}>
        <Text style={styles.header}>Back</Text>
      </Pressable>
    </View>
  );
});
