import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  ScaledSize,
} from 'react-native';
import CarouselItem from './CarouselItem';
import Dots from './Dots';

const data = [
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

const Carousel: React.FC<IProps> = () => {
  const { width }: ScaledSize = Dimensions.get('window');
  const xOffset = new Animated.Value(0);
  const position = Animated.divide(xOffset, width);

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: xOffset } } }],
    { useNativeDriver: false }
  );

  return (
    <View style={styles.carousel}>
      <FlatList
        data={data}
        keyExtractor={(_, i) => `key${i}`}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment='center'
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <CarouselItem item={item} />}
        onScroll={onScroll}
      />

      <Dots data={data} position={position} />
    </View>
  );
};

const styles = StyleSheet.create({
  carousel: {
    flex: 1,
  },
});

export default Carousel;
