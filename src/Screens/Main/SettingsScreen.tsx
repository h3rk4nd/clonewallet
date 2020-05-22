import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {}

const SettingsScreen: React.FC<IProps> = () => {
  return (
    <View style={styles.screen}>
      <Text style={{ fontWeight: 'bold', fontSize: 48, color: '#fdfffe' }}>
        SettingsScreen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#191a2a',
  },
});

export default SettingsScreen;
