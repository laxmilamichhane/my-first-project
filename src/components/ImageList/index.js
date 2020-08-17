import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const ImageList = ({ image, name }) => {
  return (
    <View
      style={{
        flexDirection: 'column',
        marginLeft: 30,
        marginTop: 16,
        flex: 1,
      }}>
      <Image source={image} style={styles.images} />
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};
export default ImageList;
