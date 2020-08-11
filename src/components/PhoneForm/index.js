import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import styles from './styles';

const PhoneForm = ({ name, showIcon }) => {
  return (
    <View>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        {showIcon && (
          <Image source={require('./pin.png')} style={styles.locate} />
        )}
      </View>
    </View>
  );
};
export default PhoneForm;