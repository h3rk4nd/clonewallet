import React from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import TabBarButton from '../Components/TabBarButton';

const icons = [
  {
    name: 'payment',
    routeName: 'Balance',
  },
  {
    name: 'settings',
    routeName: 'Settings',
  },
];

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <View style={styles.tabBar}>
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;
      const icon = icons.find((icon) => icon.routeName === route.name);

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      return (
        <View key={index} style={styles.buttonWrapper}>
          <TabBarButton
            name={icon ? icon.name : 'help_outline'}
            onPress={onPress}
            color={isFocused ? '#eaeaea' : '#5a5a5a'}
            size={30}
          />
        </View>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
  },
  buttonWrapper: {
    flex: 1,
    backgroundColor: '#191a2a',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BottomTabBar;
