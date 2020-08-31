import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';

import styles from './styles';

const StartupModal = ({ onClose, item }) => {
  return (
    <View
      style={{
        backgroundColor: '#0009',
        alignItems: 'center',
        flex: 1,
      }}>
      <View style={styles.modal}>
        <Image source={require('./to.png')} style={styles.to} />
        <TouchableOpacity activeOpacity={0.85} onPress={() => onClose()}>
          <Image source={require('./close.png')} style={styles.close} />
          <View style={styles.titlecomingbox}>
            <Text style={styles.title}>{item.title || 'Header'}</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.contents}>
          <View style={styles.markbox}>
            <Text style={styles.mark}>Mark as done ✓</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
            }}>
            <TouchableOpacity>
              <View style={styles.editbox}>
                <Text style={styles.edit}>Edit ✍️</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Alert.alert(
                  'Delete?',
                  'This task will be deleted from your list.',
                  [
                    { text: 'Cancel' },
                    {
                      text: 'Delete',
                      style: 'destructive',
                      onPress: () => alert('Deleted'),
                    },
                  ],
                )
              }>
              <View style={styles.editbox}>
                <Text style={styles.edit}>Delete 🗑️</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default StartupModal;
