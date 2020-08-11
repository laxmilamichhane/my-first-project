import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const RecipeBox = ({ image, name, des, bgcolor, images, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={[styles.container, { backgroundColor: bgcolor }]}>
        <Image source={image} style={styles.images} />
        <Text style={{ margin: 2 }}>How to cook ➙</Text>
        <Text style={styles.text}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.des}>{des}</Text>
          <Image source={images} style={styles.icon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RecipeBox;
