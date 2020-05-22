import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';

interface IProps {
  data: {
    title: string;
    description: string;
  }[];
  position: Animated.AnimatedDivision;
}

const Dots: React.FC<IProps> = ({ data, position }) => (
  <View style={styles.dotsWrapper}>
    {data.map((_, i) => {
      const opacity = position.interpolate({
        inputRange: [i - 1, i, i + 1],
        outputRange: [0.3, 1, 0.3],
        extrapolate: 'clamp',
      });

      return (
        <Animated.View
          key={i}
          style={{
            opacity,
            height: 10,
            width: 10,
            backgroundColor: '#fefffe',
            margin: 8,
            borderRadius: 5,
          }}
        />
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  dotsWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
});

export default Dots;
