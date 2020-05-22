import React from 'react';
import {
  TouchableWithoutFeedback,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface IProps extends LinearGradientProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  viewStyle?: StyleProp<ViewStyle>[];
  textStyle?: StyleProp<TextStyle>[];
}

const LinearGradientButton: React.FC<IProps> = ({
  title,
  onPress,
  viewStyle,
  textStyle,
  ...props
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <LinearGradient style={[styles.view, viewStyle]} {...props}>
      <Text style={[styles.text, textStyle]}>{title.toUpperCase()}</Text>
    </LinearGradient>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  view: {
    borderRadius: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LinearGradientButton;
