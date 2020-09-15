import React, { useState } from 'react';
import { View } from 'react-native';

import styles from './styles';
import InputBox from '../../components/InputBox';

const source = ['A', 'B', 'C'];

const App = () => {
  const [itemclicked, setItemClicked] = useState([]);
  return (
    <View style={styles.screen}>
      {source.map((letter) => (
        <InputBox
          letter={letter}
          key={letter}
          selected={itemclicked === letter}
          onPress={() => setItemClicked(letter)}
        />
      ))}
    </View>
  );
};
export default App;
