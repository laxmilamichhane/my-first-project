import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const FriendsBox = ({ title, place, onPress, image }) => {
  return (
    <TouchableOpacity activeOpacity={0.55} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />

        <Text style={styles.title}>{title}</Text>
        <Text style={styles.place}>{place}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default FriendsBox;
