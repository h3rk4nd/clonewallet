import React from 'react';
import { SafeAreaView, StyleSheet, View, StatusBar } from 'react-native';

interface IProps {
  barStyle?: 'light-content' | 'default' | 'dark-content' | undefined;
}

const Layout: React.FC<IProps> = ({ children, barStyle }) => (
  <View style={styles.layout}>
    <StatusBar barStyle={barStyle ? barStyle : 'light-content'} />
    <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
  </View>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#191a2a',
  },
  safeArea: {
    backgroundColor: '#191a2a',
    flex: 1,
  },
});

export default Layout;
