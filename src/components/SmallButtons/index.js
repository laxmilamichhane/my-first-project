import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const SmallButtons = ({ name, bgcolor }) => {
  return (
    <View style={[styles.container, { backgroundColor: bgcolor }]}>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};
export default SmallButtons;
