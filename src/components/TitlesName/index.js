import React from 'react';
import { Text } from 'react-native';

import styles from './styles';

const TitlesName = ({ name }) => {
  return <Text style={styles.text}>{name}</Text>;
};
export default TitlesName;
