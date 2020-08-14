import React from 'react';
import { Image, FlatList, View } from 'react-native';
import styles from './styles';
const PhotoGallery = ({ image }) => {
  return (
    <View style={{ marginLeft: 110, marginTop: 10 }}>
      <FlatList
        horizontal
        keyExtractor={(item, index) => item.title + index.toString()}
        data={image}
        renderItem={({ item, index }) => {
          return <Image source={item} style={styles.image} />;
        }}
      />
    </View>
  );
};
export default PhotoGallery;
