import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

const PhoneButton = ({ name, color, txtcolor, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={[styles.buttonbox, { backgroundColor: color || '#2cba75' }]}>
        <Text style={[styles.text, { color: txtcolor || 'white' }]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default PhoneButton;
