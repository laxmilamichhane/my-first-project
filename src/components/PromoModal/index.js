import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Promomodal = ({ onClose, selected }) => {
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

          <View style={{ paddingVertical: 40, paddingHorizontal: 30 }}>
            <Image source={require('./gift.png')} style={styles.image} />
            <Text style={styles.title}>Want to Gift your friends?</Text>
            <Text style={styles.des}>Log in to reedem your gifts.</Text>
            <View style={styles.buttonbox}>
              <Text style={styles.login}>Log in</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Promomodal;
