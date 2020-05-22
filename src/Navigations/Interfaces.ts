import { RouteProp } from '@react-navigation/native';
import { StackNavigationOptions } from '@react-navigation/stack';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

interface IScreenOptionsProps {
  route: RouteProp<Record<string, object | undefined>, string>;
  navigation: any;
}

export type StackScreenOptionsType = (
  props: IScreenOptionsProps
) => StackNavigationOptions;

export type BottomTabScreenOptionsType = (
  props: IScreenOptionsProps
) => BottomTabNavigationOptions;
