import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const SettingBoxes = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.55} onPress={onPress}>
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SettingBoxes;
