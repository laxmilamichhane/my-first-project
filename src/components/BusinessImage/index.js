import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const BusinessImage = ({ image, selected, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={[styles.view, selected && { borderWidth: 3 }]}>
        <Image source={image} style={styles.images} />
      </View>
    </TouchableOpacity>
  );
};
export default BusinessImage;
