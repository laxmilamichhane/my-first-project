import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const HomeScreen = ({ name }) => {
  return <Text style={styles.text}>{name}</Text>;
};
export default HomeScreen;
