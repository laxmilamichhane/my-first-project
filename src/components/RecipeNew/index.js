import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const RecipeNew = ({ image, name, des }) => {
  return (
    <TouchableOpacity activeOpacity={0.85}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'column', flex: 1 }}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.des}>{des}</Text>
        </View>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};
export default RecipeNew;
