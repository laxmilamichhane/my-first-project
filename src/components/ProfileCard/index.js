import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

const ProfileCard = ({ imageUrl, title, description }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row' }}>
        <Image source={{ uri: imageUrl }} style={styles.img} />
        <View style={styles.descriptionView}>
          <Text style={styles.line2}>{title}</Text>
          <Text style={styles.na3}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default ProfileCard;
