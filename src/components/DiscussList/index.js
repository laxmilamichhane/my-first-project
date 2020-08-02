import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './styles';

const DiscussList = ({ title, time, image, color, colorr }) => {
  return (
    <View style={[styles.list, { backgroundColor: color , borderLeftColor: colorr }]}>

      <Text style={styles.text}>{title}</Text>
      <Text style={styles.time}>{time}</Text>
      
      <View style={{ flexDirection: "row" }}>

        <FlatList horizontal data={image} renderItem={({ item, index }) => {
          return <Image source={item} style={styles.image} />
        }} />

        <Text style={styles.sign}>+</Text>
      </View>
    </View>

  );
};
export default DiscussList;
