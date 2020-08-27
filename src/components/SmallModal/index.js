import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const SmallModal = ({ onClose }) => {
  return (
    <View style={{ backgroundColor: '#0005', flex: 1 }}>
      <View
        style={{
          backgroundColor: 'white',
          margin: 6,
          borderRadius: 20,
          marginTop: '90%',
        }}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: 'red',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              padding: 10,
            }}>
            <Image source={require('./gift.png')} style={styles.gift} />
          </View>
          <View style={{ flexDirection: 'column', padding: 10 }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.wehave}>We have a gift for you</Text>
              <TouchableOpacity activeOpacity={0.85} onPress={() => onClose()}>
                <Image
                  source={require('./close.png')}
                  style={styles.closeicon}
                />
              </TouchableOpacity>
            </View>
            <Text style={styles.smalltext}>Lorem ipsum dolor sit amet,</Text>
            <Text style={styles.smalltext}>consecetur adipig elit.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default SmallModal;
