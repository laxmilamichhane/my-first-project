import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const InputBox = ({ letter, onPress, selected }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={styles.box}>
        <Text style={styles.text}>{selected ? ' ' : letter}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default InputBox;
