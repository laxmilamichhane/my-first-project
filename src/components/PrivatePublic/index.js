import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

const PrivatePublic = ({ work, onPress, selected, type }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={() => onPress(type)}>
      <View
        style={[
          styles.box,
          selected && {
            borderBottomWidth: 2,
            borderStartWidth: 2,
            borderBottomColor: '#0035d6',
            borderStartColor: '#0035d6',
          },
        ]}>
        <Text style={styles.name}>{work}</Text>

        {selected && (
          <Image source={require('./japan.png')} style={styles.icon} />
        )}
      </View>
    </TouchableOpacity>
  );
};
export default PrivatePublic;
