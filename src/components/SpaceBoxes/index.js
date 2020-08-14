import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const SpaceBoxes = ({
  title,
  title2,
  day,
  bgcolor,
  type,
  boxcolor,
  typecolor,
  name,
  img,
  bdrwidth,
  onPress,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
      <View style={[styles.container, { borderWidth: bdrwidth }]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{ flexDirection: 'column' }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.title}>{title2}</Text>
          </View>
          <View style={[styles.daybox, { backgroundColor: bgcolor }]}>
            <Text style={styles.day}>{day}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: 36,
            justifyContent: 'space-between',
          }}>
          <View style={[styles.typebox, { backgroundColor: boxcolor }]}>
            <Text style={[styles.type, { color: typecolor }]}>{type}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.name}>{name}</Text>
            <Image source={img} style={styles.photo} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default SpaceBoxes;
