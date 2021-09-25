// TODO: refactoring
import React from 'react';
import {
  Text,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
// @ts-ignore
import Androw from 'react-native-androw';
import { Cross } from './Cross';
import { GridImageView } from '../GridImageView/GridImageViewer';
import { Place, Social } from '../types';

const DeviceWindow = Dimensions.get('window');
const SIZES = {
  // Window Size
  WINDOW_WIDTH: DeviceWindow.width,
  WINDOW_HEIGHT: DeviceWindow.height,

  //detail screens
  DETAILS_HORIZONTAL_MARGIN: 8,
  DETAILS_BETWEEN_MARGIN: 14,
};

const blockBackground = 'rgba(252,252,252,0.78)';

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
    width:
      (SIZES.WINDOW_WIDTH -
        SIZES.DETAILS_HORIZONTAL_MARGIN * 2 -
        SIZES.DETAILS_BETWEEN_MARGIN * 3) /
      4,
    height:
      (SIZES.WINDOW_WIDTH -
        SIZES.DETAILS_HORIZONTAL_MARGIN * 2 -
        SIZES.DETAILS_BETWEEN_MARGIN * 3) /
      4,
    marginLeft: SIZES.DETAILS_BETWEEN_MARGIN,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
  button: {
    alignItems: 'center',
    backgroundColor: '#FF9161',
    padding: 6,
    margin: 10,
    marginBottom: 20,
    borderRadius: 40,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  contentContainer: {
    flex: 1,
  },
  bottomBlock: {
    borderRadius: 20,
    backgroundColor: blockBackground,
    width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
    height: 160,
    marginHorizontal: SIZES.DETAILS_HORIZONTAL_MARGIN,
    marginTop: 10,
  },
  topBlock: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: blockBackground,
    width: SIZES.WINDOW_WIDTH - SIZES.DETAILS_HORIZONTAL_MARGIN * 2,
    height: 160,
  },
  actionIcon: {
    height: '90%',
    width: '90%',
    paddingTop: 0,
  },
  shadow: {
    shadowColor: '#0a0808',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
    height: '55%',
    width: '55%',
    marginTop: 3,
    marginLeft: 3,
  },
});

const ActionPanel: React.FC<{
  socials: Social[];
}> = React.memo(() => (
  <View style={styles.actionPanel}>
    <View
      style={{ ...styles.action, marginLeft: SIZES.DETAILS_HORIZONTAL_MARGIN }}
    >
      <Androw style={{ ...styles.shadow, marginBottom: 2, marginTop: -4 }}>
        <Image
          style={{ ...styles.actionIcon }}
          source={require('../assets/svg/planet.png')}
        />
      </Androw>
      <Text>Website</Text>
    </View>
    <View style={styles.action}>
      <Androw style={styles.shadow}>
        <Image
          style={styles.actionIcon}
          source={require('../assets/svg/map.png')}
        />
      </Androw>
      <Text>Map</Text>
    </View>
    <View style={styles.action}>
      <Androw style={styles.shadow}>
        <Image
          style={styles.actionIcon}
          source={require('../assets/svg/marker.png')}
        />
      </Androw>
      <Text>Navigate</Text>
    </View>
    <View style={styles.action}>
      <Androw style={styles.shadow}>
        <Image
          style={styles.actionIcon}
          source={require('../assets/svg/share.png')}
        />
      </Androw>
      <Text>Share</Text>
    </View>
  </View>
));

type PropsPlaceDetailScreen = {
  route: {
    params: {
      place: Place;
      primaryColor: string;
    };
  };
};

export const PlaceDetailScreen: React.FC<PropsPlaceDetailScreen> = React.memo(
  ({
    route: {
      params: {
        primaryColor,
        place: {
          previewImage,
          name,
          location: { address },
          socials,
          images,
        },
      },
    },
  }) => {
    return (
      <SecondaryScreen>
        <ScrollView
          style={{ ...styles.wrapper, backgroundColor: primaryColor + 'bb' }}
        >
          <View>
            <View style={styles.upperBar} />
            <View style={styles.blockWrapper}>
              <Image
                source={{ uri: previewImage }}
                style={{ ...styles.image, height: 300 }}
              />
              <View style={styles.topBlock}>
                <View style={styles.contentContainer}>
                  <View>
                    <View
                      style={{
                        paddingLeft: 7,
                        paddingTop: 5,
                        flexDirection: 'row',
                      }}
                    >
                      <Image
                        style={{ width: 31 }}
                        source={require('./park.png')}
                      />
                      <Text
                        style={{
                          fontSize: 17,
                          fontWeight: 'bold',
                          color: '#666666',
                          paddingTop: 8,
                        }}
                      >
                        {address}
                      </Text>
                    </View>
                  </View>
                  <Text
                    style={{
                      marginTop: -8,
                      fontSize: 22,
                      fontWeight: 'bold',
                      paddingLeft: 12,
                    }}
                  >
                    {name}
                  </Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => {}}>
                  <Text style={styles.buttonText}>PLAN FOR FUTURE</Text>
                </TouchableOpacity>
              </View>
            </View>
            <ActionPanel socials={socials} />
            <View style={styles.imageGalleryBlock}>
              <GridImageView data={images} heightOfGridImage={90} />
            </View>
            <View style={styles.bottomBlock} />
          </View>
        </ScrollView>
      </SecondaryScreen>
    );
  },
);

export const SecondaryScreen: React.FC = React.memo(({ children }) => {
  const { goBack } = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      {children}
      <Cross onPress={goBack} />
    </View>
  );
});
