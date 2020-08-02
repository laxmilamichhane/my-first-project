import React from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import styles from './styles';

const UpcomingTask = ({ color, title, dis, tasknumber, image }) => {
  return (
    <View style={[styles.dabbas, { backgroundColor: color }]}>
      <FlatList  data={image} renderItem={({ item, index }) => {
        return <Image source={item} style={styles.image}
        />
      }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{dis}</Text>
      <Text style={styles.number}>{tasknumber}</Text>

    </View>
  );
};
export default UpcomingTask;