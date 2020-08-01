import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles';

const DesignTask = ({ title, top, image }) => {
  return (
    <View style={styles.container}>
      <View style={styles.both}>
        <Image source={{ uri: image }} style={styles.img} />
        <View style={styles.bottoms}>
          <Text style={styles.stitle}>{title}</Text>
          <Text style={styles.top}>{top}</Text>
        </View>
      </View>
    </View>
  );
};

export default DesignTask;
