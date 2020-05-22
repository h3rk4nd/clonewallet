import React from 'react';
import {
  TouchableWithoutFeedback,
  StyleSheet,
  GestureResponderEvent,
  View,
} from 'react-native';
import MaterialIcon from './MaterialIcon';

interface IProps {
  onPress: (event: GestureResponderEvent) => void;
  name: string;
  size: number;
  color: string;
}

const TabBarButton: React.FC<IProps> = ({ onPress, ...props }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.iconWrapper}>
      <MaterialIcon {...props} />
    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  iconWrapper: {
    padding: 10,
  },
});

export default TabBarButton;
