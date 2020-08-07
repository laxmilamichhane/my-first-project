import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const AdventureTypes = ({ type, color }) => {
  return (
    <View>
      <Text style={[styles.type, color && { color }]}>{type}</Text>
    </View>
  );
};
export default AdventureTypes;
