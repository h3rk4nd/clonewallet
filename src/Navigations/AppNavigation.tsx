import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackScreenOptionsType } from './Interfaces';
import MainNavigator from './MainNavigator';
import StartingScreen from '../Screens/StartingScreen';
import Layout from '../Components/Layout';

interface IProps {}

const AppNavigation: React.FC<IProps> = () => {
  const { Navigator, Screen } = createStackNavigator();
  const screenOptions: StackScreenOptionsType = () => ({
    animationEnabled: false,
    headerShown: false,
  });

  return (
    <Layout>
      <NavigationContainer>
        <Navigator
          screenOptions={screenOptions}
          initialRouteName='StartingScreen'
        >
          <Screen name='StartingScreen' component={StartingScreen} />
          <Screen name='MainNavigator' component={MainNavigator} />
        </Navigator>
      </NavigationContainer>
    </Layout>
  );
};

export default AppNavigation;
