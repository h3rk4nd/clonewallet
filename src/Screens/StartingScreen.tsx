import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import LinearGradientButton from '../Components/LinearGradientButton';
import Carousel from '../Components/Carousel';

interface IProps {}

const StartingScreen: React.FC<IProps> = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen}>
      <Carousel />
      <View style={styles.buttonGroup}>
        <LinearGradientButton
          onPress={() => navigation.navigate('MainNavigator')}
          title='create wallet'
          colors={['#ed3e72', '#7e3ff0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          viewStyle={[{ marginBottom: 10 }]}
        />
        <LinearGradientButton
          onPress={() => navigation.navigate('MainNavigator')}
          title='restore wallet'
          colors={['#ed3e72', '#7e3ff0']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </View>
      <View style={styles.versionContainer}>
        <Text style={styles.version}>v3.2.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#191a2a',
  },
  buttonGroup: {
    paddingHorizontal: 20,
  },
  versionContainer: {
    marginVertical: 20,
    alignItems: 'center',
  },
  version: {
    color: '#606387',
  },
});

export default StartingScreen;
