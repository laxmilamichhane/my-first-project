import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const SmegButtons = ({ title, name, img, type, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.name}>{name}</Text>
        <Image source={img} style={styles.image} />
      </View>
      <Text
        style={{
          color: 'orange',
          fontSize: 16,
          marginTop: 8,
          marginLeft: 10,
        }}>
        {date}
      </Text>
    </View>
  );
};
export default SmegButtons;
