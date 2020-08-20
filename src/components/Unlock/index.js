import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Unlock = ({ dates, months, numbers, dollars, selected, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.screen}>
      <View style={[styles.boxtop, selected && { backgroundColor: '#9ae2ec' }]}>
        <Text style={styles.numbers}>{dates}</Text>
        <Text style={styles.month}>{months}</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.dollars}>{dollars}</Text>
        <Text style={styles.paisa}>{numbers}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Unlock;
