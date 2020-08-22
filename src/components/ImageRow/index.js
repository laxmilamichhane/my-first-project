import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ImageRow = ({ image, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.view,
          selected && {
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'white',
            borderRadius: 120,
          },
        ]}>
        <Image source={image} style={styles.images} />
      </View>
    </TouchableOpacity>
  );
};
export default ImageRow;
