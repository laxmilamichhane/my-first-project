import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const NameTypes = ({ type, color, selected }) => {
  return (
    <View
      style={[
        styles.container,
        selected && {
          borderRadius: 20,
        },
      ]}>
      <Text
        style={[
          styles.type,
          color && { color },
          selected && { fontWeight: 'bold', marginLeft: 18 },
        ]}>
        {type}
      </Text>
    </View>
  );
};
export default NameTypes;
