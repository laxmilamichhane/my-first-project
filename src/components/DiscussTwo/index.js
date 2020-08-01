import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

const DiscussTwo = ({ title, selected }) => {
  return (
    <View style={[styles.container, selected && { backgroundColor: 'orange', borderRadius: 12 }]}>
      <Text style={styles.text}>{title}</Text>
    </View>

  );
};
export default DiscussTwo;