import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

interface IProps {
  name: string;
  size: number;
  color: string;
}

const MaterialIcon: React.FC<IProps> = (props) => <Icon {...props} />;

export default MaterialIcon;
