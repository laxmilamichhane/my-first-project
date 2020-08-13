import React from 'react';
import { View, Image, TextInput } from 'react-native';

import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchBar = ({ showIcon, onPress }) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
          {showIcon && (
            <Image source={require('./search.png')} style={styles.search} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchBar;
