import React from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles';

const CreativityTwo = ({ name, input, color, isPassword = false }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>{name}</Text>
      <TextInput
        secureTextEntry={isPassword}
        style={[styles.input, { borderColor: color }]}>
        {input}
      </TextInput>
    </View>
  );
};

export default CreativityTwo;
