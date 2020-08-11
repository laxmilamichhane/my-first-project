import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './styles';

const RecipeNew = ({ image, name, des }) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'column', marginLeft: 6 }}>
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.des}>{des}</Text>
          </View>
          <Image source={image} style={styles.image} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default RecipeNew;
