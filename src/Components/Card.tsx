import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcon from '../Components/MaterialIcon';

interface IProps {}

const Card: React.FC<IProps> = () => {
  return (
    <View
      style={{
        marginTop: 20,
        borderTopWidth: 6,
        borderTopColor: '#ea1410',
        marginHorizontal: 50,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
      }}
    >
      <LinearGradient
        style={styles.container}
        colors={['#23243b', '#30324c']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={{ flex: 1, justifyContent: 'space-between' }}>
          <Text style={[styles.textLogan, styles.bold, { marginBottom: 5 }]}>
            Main Account
          </Text>
          <Text style={[styles.textWildSand]}>wefwefwefwefwef</Text>
          <Text style={[styles.textRomance, styles.bold, { fontSize: 32 }]}>
            0.00
          </Text>
          <Text style={[styles.textRaven, { fontSize: 12, marginTop: -12 }]}>
            = 0.00 USD
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 6,
            }}
          >
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.textLogan,
                  styles.bold,
                  { fontSize: 12, marginBottom: 4 },
                ]}
              >
                AVAILABLE
              </Text>
              <Text style={[styles.textRomance, styles.bold, { fontSize: 12 }]}>
                0.00 TRX
              </Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text
                style={[
                  styles.textLogan,
                  styles.bold,
                  { fontSize: 12, marginBottom: 4 },
                ]}
              >
                STAKING
              </Text>
              <Text style={[styles.textRomance, styles.bold, { fontSize: 12 }]}>
                0.00 TRX
              </Text>
            </View>
          </View>
        </View>
        <View style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <MaterialIcon color='#fcfcfc' name='apps' size={25} />
          <View
            style={{
              padding: 10,
              borderRadius: 10,
              backgroundColor: '#3e415b',
            }}
          >
            <MaterialIcon color='#fcfcfc' name='adjust' size={18} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 200,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    padding: 20,
  },
  textLogan: {
    color: '#9a9bb8',
  },
  textWildSand: {
    color: '#f4f5f5',
  },
  textRomance: {
    color: '#fdfffe',
  },
  textRaven: {
    color: '#73758f',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Card;
