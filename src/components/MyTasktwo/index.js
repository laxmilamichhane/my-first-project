import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

const MyTasktwo = ({ name, description, imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.imagee} />
      <View>
        <Text style={styles.text}>{name} </Text>
        <Text style={styles.des}>{description}</Text>
      </View>
    </View>
  );
};
export default MyTasktwo;
