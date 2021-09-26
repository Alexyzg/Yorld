import React, { useCallback, useEffect } from 'react';
import {
  AppState,
  Linking,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { WanderingInNature } from '../assets/svg';
import {
  DARK_GREEN,
  GRAY,
  LIGHT_GREEN,
  EXTRA_LIGHT_GREEN,
} from '../assets/colors';
import { checkPermission } from '../hooks/useRequestPermission';
import { RESULTS } from 'react-native-permissions';

const backButton = 'Back';
const title = 'We need help finding you';
const subTitle = 'Allow Yorld location access in\n your phone Settings';
const buttonGoToSettings = 'Go to Yorld Settings';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
  },
  backButton: {
    marginTop: 30,
    marginLeft: 20,
    fontSize: 18,
  },
  title: {
    paddingTop: 30,
    fontSize: 28,
    lineHeight: 33,
  },
  subTitle: {
    paddingTop: 30,
    fontSize: 22,
    lineHeight: 28,
    textAlign: 'center',
  },
  buttonGoToSettings: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 40,
    backgroundColor: LIGHT_GREEN,
    shadowColor: GRAY,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  buttonGoToSettingsText: {
    fontSize: 22,
    lineHeight: 28,
    color: DARK_GREEN,
    fontWeight: 'bold',
  },
});

export const RequestSettingsScreen: React.FC = React.memo(() => {
  const { goBack } = useNavigation();
  const handleAppStateChange = useCallback(
    (nextAppState: string) => {
      if (nextAppState === 'active') {
        checkPermission().then(resp => {
          if (resp === RESULTS.GRANTED) {
            goBack();
          }
        });
      }
    },
    [goBack],
  );

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, [handleAppStateChange]);

  return (
    <SafeAreaView style={styles.wrapper}>
      <Pressable onPress={goBack}>
        <Text style={styles.backButton}>{backButton}</Text>
      </Pressable>
      <View style={styles.container}>
        <WanderingInNature />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <TouchableHighlight
          style={styles.buttonGoToSettings}
          onPress={() => Linking.openSettings()}
          underlayColor={EXTRA_LIGHT_GREEN}
        >
          <Text style={styles.buttonGoToSettingsText}>
            {buttonGoToSettings}
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
});
