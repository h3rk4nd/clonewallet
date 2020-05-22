import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import MaterialIcon from '../Components/MaterialIcon';

interface IProps {}

const Header: React.FC<IProps> = () => (
  <View style={styles.header}>
    <View style={styles.currency}>
      <View>
        <Image
          style={{
            width: 70,
            height: 70,
          }}
          source={require('../Assets/Images/ark.png')}
        />
      </View>
      <View style={styles.coinInfo}>
        <View style={{ marginBottom: 2 }}>
          <Text style={[styles.textLogan, styles.bold, { fontSize: 12 }]}>
            SELECT COIN
          </Text>
        </View>
        <View>
          <Text
            style={[
              styles.textAlabaster,
              styles.bold,
              { fontSize: 16, marginBottom: 2 },
            ]}
          >
            TRX
          </Text>
        </View>
        <View style={[styles.flexRow]}>
          <Text style={[styles.textLogan]}>= </Text>
          <Text style={[styles.textAlabaster, styles.bold, { fontSize: 16 }]}>
            0.012267
          </Text>
          <Text style={[styles.textLogan]}> USD</Text>
        </View>
      </View>
    </View>
    <View style={styles.iconGroup}>
      <View style={styles.iconWrapper}>
        <MaterialIcon size={40} name='expand-more' color='#efefef' />
      </View>
      <View style={styles.iconWrapper}>
        <MaterialIcon size={40} name='notifications-none' color='#efefef' />
      </View>
      <View style={styles.iconWrapper}>
        <MaterialIcon size={40} name='add' color='#efefef' />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  currency: {
    flexDirection: 'row',
  },
  iconGroup: {
    flexDirection: 'row',
  },
  iconWrapper: {
    paddingLeft: 10,
  },
  coinInfo: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  textLogan: {
    color: '#989ab5',
  },
  textAlabaster: {
    color: '#fcfcfc',
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default Header;
