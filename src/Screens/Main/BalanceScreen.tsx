import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../../Components/Header';
import Card from '../../Components/Card';
import HorizontalMenu from '../../Components/HorizontalMenu';
import MiddleTabBar from '../../Components/MiddleTabBar';

interface IProps {}

const BalanceScreen: React.FC<IProps> = () => {
  return (
    <View style={styles.screen}>
      <Header />
      <Card />
      <HorizontalMenu />
      <MiddleTabBar />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#191a2a',
    paddingBottom: 100,
  },
});

export default BalanceScreen;
