import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SearchResults = ({ type, selected }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
};
export default SearchResults;
