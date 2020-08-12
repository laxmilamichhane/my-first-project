import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SettingBoxes = ({ image, title, icon, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Image source={icon} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
};
export default SettingBoxes;
