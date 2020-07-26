import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

const MyCard = ({ small, title, lower, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color || 'orange' }]}>
      <Text style={styles.small}>{small || 'small text'}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.lower}>{lower}</Text>
    </View>
  );
};

export default MyCard;
