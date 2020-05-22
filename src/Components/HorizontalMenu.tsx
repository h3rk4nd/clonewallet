import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MenuItem from './MenuItem';

const data = [
  {
    title: 'Welcome to CloneWallet',
    description: 'Multi coin p2p wallet',
  },
  {
    title: 'Welcome to CloneWallet',
    description: 'Multi coin p2p wallet',
  },
  {
    title: 'Welcome to CloneWallet',
    description: 'Multi coin p2p wallet',
  },
  {
    title: 'Welcome to CloneWallet',
    description: 'Multi coin p2p wallet',
  },
  {
    title: 'Welcome to CloneWallet',
    description: 'Multi coin p2p wallet',
  },
];

interface IProps {}

const HorizontalMenu: React.FC<IProps> = () => {
  return (
    <View style={{ marginTop: 40 }}>
      <FlatList
        data={data}
        keyExtractor={(_, i) => `key${i}`}
        renderItem={({ item }) => <MenuItem />}
        horizontal
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.container}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default HorizontalMenu;
