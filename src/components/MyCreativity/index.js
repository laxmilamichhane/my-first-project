import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import styles from './style';

const MyCreativity = ({ name, bgcolor, color }) => {
  return (
    <ScrollView>
      <View style={[styles.container, { backgroundColor: bgcolor }]}>
        <Text style={[styles.text1, color && { color }]}>
          {name.toUpperCase()}
        </Text>
      </View>
    </ScrollView>
  );
};
export default MyCreativity;
