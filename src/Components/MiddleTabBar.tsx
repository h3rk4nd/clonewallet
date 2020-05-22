import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import MiddleTabBarButton from '../Components/MiddleTabBarButton';
import Tokens from '../Components/Tokens';
import Transactions from '../Components/Transactions';

interface IProps {}

const MiddleTabBar: React.FC<IProps> = () => {
  const [state, setState] = useState(true);

  return (
    <>
      <View style={styles.container}>
        <MiddleTabBarButton
          title='TOKENS'
          isActive={state}
          onPress={() => {
            if (!state) setState(!state);
          }}
        />
        <MiddleTabBarButton
          title='TRANSACTIONS'
          isActive={!state}
          onPress={() => {
            if (state) setState(!state);
          }}
        />
      </View>
      {state ? <Tokens /> : <Transactions />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default MiddleTabBar;
