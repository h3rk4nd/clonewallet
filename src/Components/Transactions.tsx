import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../Store';
import MaterialIcon from '../Components/MaterialIcon';
import TokenItem from '../Components/TokenItem';

interface IProps {}

const Transactions: React.FC<IProps> = () => {
  const { tokens } = useSelector((state: RootState) => state.token);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Transactions</Text>
        <View style={styles.filter}>
          <MaterialIcon color='#fcfcfc' name='filter-list' size={25} />
        </View>
      </View>
      <View style={{ height: 150 }}>
        <FlatList
          data={tokens}
          renderItem={({ item }) => <TokenItem token={item} />}
          keyExtractor={(_, i) => `key${i}`}
          scrollEnabled
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: { fontWeight: 'bold', color: '#fdfffe', fontSize: 24 },
  filter: {
    width: 60,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3e415b',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
});

export default Transactions;
