import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const FriendsList = ({ name, relation, image, onPress }) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={[styles.container]}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={image} style={styles.image} />

          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{name}</Text>
            <View
              style={{
                backgroundColor: 'black',
                borderRadius: 20,
                padding: 2,
                alignSelf: 'flex-start',
                marginTop: 8,
              }}>
              <Text style={styles.description}>{relation}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default FriendsList;
