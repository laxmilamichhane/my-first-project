import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import styles from './styles';

const App = () => {
  const [number1, setNumber1] = useState();
  const [number2, setNumber2] = useState();

  const [count, setCount] = useState(0);
  const onPress = () => {
    if (number2 === undefined || number1 === undefined) {
      return;
    }
    setCount(number1 + number2);
  };
  const onPressdecrement = () => {
    if (number1 === undefined || number2 === undefined) {
      return;
    }
    setCount(number1 - number2);
  };

  return (
    <ScrollView>
      <View style={styles.screen}>
        <View>
          <Text style={styles.title}>COUNT</Text>
        </View>
        <View style={styles.view}>
          <TextInput
            style={styles.inputcontainier}
            keyboardType="numeric"
            onChangeText={(userInput) => setNumber1(parseInt(userInput, 10))}
          />
          <TextInput
            style={styles.inputcontainier}
            keyboardType="numeric"
            onChangeText={(userInput) => setNumber2(parseInt(userInput, 10))}
          />
        </View>
        <View>
          <Text style={styles.number}>{count ? count : 0}</Text>
        </View>
        <View style={styles.view}>
          <TouchableOpacity activeOpacity={0.85} onPress={onPress}>
            <View style={styles.buttons}>
              <Text style={styles.increment}>Sum</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85} onPress={onPressdecrement}>
            <View style={styles.buttons}>
              <Text style={styles.increment}>Difference</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default App;
