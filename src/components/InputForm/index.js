import React from 'react';
import { View, Image, TextInput } from 'react-native';

import styles from './styles';

const InputForm = ({ image, isPassword = false, borderColor, placeholder }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.icon} />
      <TextInput
        placeholder={placeholder}
        secureTextEntry={isPassword}
        style={[styles.input, { borderColor: borderColor }]}>
        {}
      </TextInput>
    </View>
  );
};
export default InputForm;
