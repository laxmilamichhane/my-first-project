import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const BuyModal = ({ onClose, selected }) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#0005',
          alignItems: 'center',
        }}>
        <View style={styles.screen}>
          <TouchableOpacity activeOpacity={0.85} onPress={() => onClose()}>
            <Image source={require('./close.png')} style={styles.icon} />
          </TouchableOpacity>

          <View style={{ paddingVertical: 50 }}>
            <Image source={require('./coin.png')} style={styles.image} />
            <Text style={styles.title}>Premium Coin Pack💰💰 </Text>
            <Text style={styles.des}>Buy coins now and buy new pro gifts.</Text>
            <View style={styles.buttonbox}>
              <Text style={styles.login}>Buy Now</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default BuyModal;
