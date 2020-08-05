import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const DiscussThree = ({ type, color }) => {
  return (
    <View style={styles.cont}>
      <View style={[styles.circle, { backgroundColor: color }]}>
        <Text> </Text>
      </View>
      <Text style={styles.typee}>{type}</Text>
    </View>
  );
};
export default DiscussThree;
