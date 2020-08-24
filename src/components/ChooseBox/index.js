import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const ChooseBox = ({ type, image, selected, onPress, size }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={() => onPress(size)}>
      <View
        style={[
          styles.box,
          selected && {
            borderBottomColor: '#0035d6',
            borderLeftColor: '#0035d6',
            borderStartWidth: 2,
            borderBottomWidth: 2,
          },
        ]}>
        <Image source={image} style={styles.icon} />
        <Text style={styles.name}>{type}</Text>
        {selected && (
          <View style={[styles.button, { backgroundColor: '#0035d6' }]}>
            <Image source={require('./check.png')} style={styles.check} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
export default ChooseBox;
