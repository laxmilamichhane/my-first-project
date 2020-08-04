import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const FoodFile = ({ image, top, time, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Image source={image[0]} style={styles.image} />
      <View style={styles.twotext}>
        <Text style={styles.title}>{top}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
};
export default FoodFile;