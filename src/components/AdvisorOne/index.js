import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const AdvisorOne = ({ top, image, down, time }) => (
  <TouchableOpacity activeOpacity={0.85}>
    <View style={styles.container}>
      <View style={styles.double}>
        <Image source={image[0]} style={styles.image} />
        <View style={{ flexDirection: 'column', marginLeft: 8 }}>
          <Text style={styles.title}>{top}</Text>
          <Text style={styles.title}>{down}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
export default AdvisorOne;
