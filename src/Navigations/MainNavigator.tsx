import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabScreenOptionsType } from './Interfaces';

import BalanceScreen from '../Screens/Main/BalanceScreen';
import SettingsScreen from '../Screens/Main/SettingsScreen';

import BottomTabBar from '../Components/BottomTabBar';

interface IProps {}

const MainNavigator: React.FC<IProps> = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  const screenOptions: BottomTabScreenOptionsType = () => ({});

  return (
    <Navigator
      initialRouteName='Balance'
      screenOptions={screenOptions}
      tabBar={BottomTabBar}
    >
      <Screen name='Balance' component={BalanceScreen} />
      <Screen name='Settings' component={SettingsScreen} />
    </Navigator>
  );
};

export default MainNavigator;
