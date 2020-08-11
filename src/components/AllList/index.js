import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';

import styles from './styles';

const AllList = ({ title, dis, image, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <View style={styles.twotext}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{dis}</Text>
      </View>

      <FlatList
        keyExtractor={(item, index) => item.title + index.toString()}
        data={image}
        renderItem={({ item, index }) => {
          return <Image source={item} style={styles.image} />;
        }}
      />
    </View>
  );
};
export default AllList;
