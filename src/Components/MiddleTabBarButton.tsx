import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface IProps {
  title: string;
  isActive: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

const MiddleTabBarButton: React.FC<IProps> = ({ title, isActive, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        {isActive ? (
          <LinearGradient
            style={styles.outside}
            colors={['#ed3e72', '#7e3ff0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={styles.inner}>
              <Text
                style={{ color: '#fcfcfc', fontSize: 10, fontWeight: 'bold' }}
              >
                {title}
              </Text>
            </View>
          </LinearGradient>
        ) : (
          <View style={[styles.inner, { width: 120 }]}>
            <Text
              style={{ color: '#fcfcfc', fontSize: 10, fontWeight: 'bold' }}
            >
              {title}
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { alignItems: 'center', justifyContent: 'center' },
  outside: {
    height: 35,
    padding: 2,
    width: 120,
    borderRadius: 10,
  },
  inner: {
    backgroundColor: '#191a2a',
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MiddleTabBarButton;
