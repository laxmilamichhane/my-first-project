import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
const AdventureFun = ({ image, backgroundcolor, name }) => {
  return (
    <View>
      <View
        style={{
          height: 60,
          width: 60,
          flexDirection: 'column',
          marginRight: 30,
          backgroundColor: '#bec7ce',
          borderRadius: 35,
          alignItems: 'center',
        }}>
        <Image
          source={image}
          style={[styles.image, backgroundcolor && { backgroundcolor }]}
        />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};
export default AdventureFun;
