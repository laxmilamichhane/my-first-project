import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LoginSignup = ({ name, textcolor, bgcolor, borderColor, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{ marginTop: 20 }}>
        <View
          style={[
            styles.buttoncontainer,
            { backgroundColor: bgcolor, borderColor: borderColor },
          ]}>
          <Text style={[styles.text, { color: textcolor }]}>{name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default LoginSignup;
