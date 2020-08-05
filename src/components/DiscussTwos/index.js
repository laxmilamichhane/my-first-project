import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const DiscussTwos = ({ image, title, small }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={[styles.text, small && { fontSize: 20 }]}>{title} </Text>
    </View>
  );
};
export default DiscussTwos;
