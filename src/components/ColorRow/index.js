import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles';

const ColorRow = ({ onPress, backgroundColor, bdrcolor, selected }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View
        style={[
          styles.view,
          { borderColor: bdrcolor, borderWidth: 4 },
          selected && {
            backgroundColor: backgroundColor,
          },
        ]}></View>
    </TouchableOpacity>
  );
};
export default ColorRow;
