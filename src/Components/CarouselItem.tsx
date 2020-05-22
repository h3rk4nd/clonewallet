import React from 'react';
import { View, Text, Dimensions, ScaledSize } from 'react-native';

interface IProps {
  item: {
    title: string;
    description: string;
  };
}

const CarouselItem: React.FC<IProps> = ({ item }) => {
  const { width }: ScaledSize = Dimensions.get('window');

  return (
    <View style={{ width, paddingHorizontal: 20, justifyContent: 'center' }}>
      <Text
        style={{
          width: width / 2,
          fontSize: 36,
          color: '#fefffe',
          marginBottom: 10,
        }}
      >
        {item.title}
      </Text>
      <Text
        style={{
          width: width / 2,
          fontSize: 16,
          color: '#9a9cb6',
        }}
      >
        {item.description}
      </Text>
    </View>
  );
};

export default CarouselItem;
