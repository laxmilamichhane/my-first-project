import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './styles';

const InputBox = ({ num }) => {
  return (
    <View style={styles.box}>
      <TextInput style={styles.text} keyboardType="numeric">
        {}
      </TextInput>
    </View>
  );
};
export default InputBox;
