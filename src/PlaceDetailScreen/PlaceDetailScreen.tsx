// TODO: refactoring
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { colorsFromUrl } from 'react-native-dominant-color';
import { Cross } from '../Cross';
import { GridImageView } from '../GridImageView/GridImageViewer';

const mockedImage =
  'https://fastly.4sqi.net/img/general/699x268/1425885_EwQcMnKdiwbVywGpm5N0qT5DNwegdjEkm7ynqObMLUA.jpg';

const imageList = [
  'data:image/jpeg;base64,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',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCXIOqUGVUpKNalDYa-cF7FD40hejXLX3sXp7_7PqZUW1rw7ChoPAs-kd1b3Y7dz_nSyc&usqp=CAU',
  'https://m.media-amazon.com/images/S/aplus-media/sc/bdff3f16-5786-4a0a-b1a4-b4531d63dad9.__CR200,0,600,600_PT0_SX300_V1___.jpg',
  'https://fastly.4sqi.net/img/general/699x268/137020271_36xdsq2aHjn4Z9it2-sMhjuvi6Um0eoqP5mdnvkPC8Y.jpg',
  'https://www.okta-elpe.com/uploads/resources/12218/okta_playground-novo-lisice_photo-2-fenlarge.jpg?lm=AB89D98BEB08F8E519FFB6AE96DE6CBC',
  'https://i.pinimg.com/originals/00/05/d3/0005d32b6bc95f36d42ea96b27762e50.jpg',
];

const DeviceWindow = Dimensions.get('window');
const SIZES = {
  // Window Size
  WINDOW_WIDTH: DeviceWindow.width,
  WINDOW_HEIGHT: DeviceWindow.height,

  //detail screens
  DETAILS_HORIZONTAL_MARGIN: 12,
};

const blockBackground = 'rgba(252,252,252,0.78)';

const ImageBlockStyle = {
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  backgroundColor: blockBackground,
  width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
  height: 160,
};

const ImageBlockStyle2 = {
  borderRadius: 20,
  backgroundColor: blockBackground,
  width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
  height: 160,
  marginHorizontal: SIZES.DETAILS_HORIZONTAL_MARGIN,
  marginTop: 10,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  header: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  blockWrapper: {
    width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
    marginHorizontal: SIZES.DETAILS_HORIZONTAL_MARGIN,
    borderRadius: 10,
    overflow: 'hidden',
  },
  upperBar: {
    width: SIZES.WINDOW_WIDTH,
    height: 40,
  },
  image: {
    height: SIZES.WINDOW_HEIGHT * 0.45,
    width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: '#ddd',
  },
  paginationWrapper: {
    marginTop: -60,
  },
  dot: {
    width: 40,
    height: 6,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  dotInactive: {
    width: 6,
  },
  action: {
    borderRadius: 20,
    backgroundColor: blockBackground,
    width: (SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 5) / 4,
    height: (SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 5) / 4,
    marginLeft: SIZES.DETAILS_HORIZONTAL_MARGIN,
    marginTop: 10,
  },
  actionPanel: {
    flex: 1,
    flexDirection: 'row',
  },
  imageGalleryBlock: {
    borderRadius: 20,
    backgroundColor: blockBackground,
    width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
    height: 250,
    paddingHorizontal: 5,
    marginHorizontal: SIZES.DETAILS_HORIZONTAL_MARGIN,
    marginTop: 10,
    paddingVertical: 30,
  },
});

const ActionPanel: React.FC<{
  images: string[];
}> = React.memo(() => (
  <View style={styles.actionPanel}>
    <View style={styles.action} />
    <View style={styles.action} />
    <View style={styles.action} />
    <View style={styles.action} />
  </View>
));

export const PlaceDetailScreen: React.FC = React.memo(props => {
  const [color, setColor] = useState<any>('#fff');

  // TODO: Prepare color upfront (for example on Server)
  const calcColor = useCallback(async () => {
    colorsFromUrl(mockedImage, (err, colors) => {
      if (!err) {
        setColor(colors.lightVibrantColor);
      }
    });
  });

  useEffect(() => {
    calcColor();
  }, [calcColor]);

  return (
    <SecondaryScreen>
      <ScrollView style={{ ...styles.wrapper, backgroundColor: color }}>
        <View>
          <View style={styles.upperBar} />
          <View style={styles.blockWrapper}>
            <Image
              source={{ uri: mockedImage }}
              style={{ ...styles.image, height: 300 }}
            />
            <View style={ImageBlockStyle} />
          </View>
          <ActionPanel />
          <View style={styles.imageGalleryBlock}>
            <GridImageView data={imageList} heightOfGridImage={90} />
          </View>
          <View style={ImageBlockStyle2} />
        </View>
      </ScrollView>
    </SecondaryScreen>
  );
});

export const SecondaryScreen: React.FC = React.memo(({ children }) => {
  const { goBack } = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      {children}
      <Cross onPress={goBack} />
    </View>
  );
});
