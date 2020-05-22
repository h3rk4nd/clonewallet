import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Token } from '../Store/Token/Types';

interface IProps {
  token: Token;
}

const TokenItem: React.FC<IProps> = ({ token }) => (
  <View style={styles.container}>
    <View>
      <Image
        style={{
          width: 60,
          height: 60,
        }}
        source={require('../Assets/Images/ark.png')}
      />
    </View>
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
      }}
    >
      <View>
        <Text
          style={[
            styles.textRomance,
            styles.bold,
            { fontSize: 16, marginBottom: 2 },
          ]}
        >
          {token.title}
        </Text>
        <Text style={[styles.textCoolGray]}>{token.title}</Text>
      </View>
      <View>
        <Text
          style={[
            styles.textRomance,
            styles.bold,
            { fontSize: 16, marginBottom: 2 },
          ]}
        >
          0.00
        </Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRomance: {
    color: '#fefefe',
  },
  textCoolGray: {
    color: '#8d8fa8',
  },
  bold: {
    fontWeight: 'bold',
  },
});

export default TokenItem;
