import React from 'react';
import { Text, Image } from 'react-native';

import styles from './styles';

import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeScreen = ({ image, name, color, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}>
      <Image source={image[0]} style={styles.image} />
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
export default HomeScreen;
