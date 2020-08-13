import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

const RecentSearch = ({ title, icon }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={icon} style={styles.icon} />
    </View>
  );
};
export default RecentSearch;
