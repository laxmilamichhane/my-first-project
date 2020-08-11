import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const AdventurePlaces = ({ place, images, name, image, bgcolor, onPress }) => {
  return (
    <View style={[styles.containers, { backgroundColor: bgcolor }]}>
      <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
        <Image source={image[0]} style={styles.images} />
        <Text style={styles.text}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={images[0]} style={styles.icon} />
          <Text style={styles.placee}>{place}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default AdventurePlaces;
