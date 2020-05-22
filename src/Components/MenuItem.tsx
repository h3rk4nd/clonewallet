import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from '../Components/MaterialIcon';

interface IProps {}

const MenuItem: React.FC<IProps> = () => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <LinearGradient
        style={styles.container}
        colors={['#ed3e72', '#7e3ff0']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.inner}>
          <MaterialIcon color='#fdfffe' name='send' size={30} />
        </View>
      </LinearGradient>
      <Text style={{ color: '#5e6086', fontWeight: 'bold', fontSize: 12 }}>
        SEND
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 3,
    height: 90,
    width: 90,
    borderRadius: 45,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  inner: {
    backgroundColor: '#191a2a',
    flex: 1,
    borderRadius: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MenuItem;
