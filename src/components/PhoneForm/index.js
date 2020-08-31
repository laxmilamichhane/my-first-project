import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './styles';

const PhoneForm = ({ name, showIcon, onChangeText, optional }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.optional}>{optional}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={onChangeText} style={styles.input} />
        {showIcon && (
          <Image source={require('./pin.png')} style={styles.locate} />
        )}
      </View>
    </View>
  );
};
export default PhoneForm;
