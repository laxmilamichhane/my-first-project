import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import InputBox from '../../components/InputBox';
import PhoneButton from '../../components/PhoneButton';
import { ScrollView } from 'react-native-gesture-handler';

const App = ({ navigation }) => (
  <ScrollView>
    <View style={{ flex: 1 }}>
      <Text style={styles.title}>Verify Mobile Number</Text>
      <Text style={styles.des}>We have sent a verification code to</Text>
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={styles.num}>061551015 </Text>
        <Text style={styles.des}>Enter the Code below boxes</Text>
      </View>
      <Image
        source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQpwO69Lx-FQTBWSC6raJRZZ_Pxf-2RRFwINA&usqp=CAU',
        }}
        style={styles.img}
      />
      <View style={{ flexDirection: 'row', marginLeft: 50, marginTop: 10 }}>
        <InputBox />
        <InputBox />
        <InputBox />
        <InputBox />
      </View>
      <PhoneButton
        name="VERIFY & PROCEED"
        onPress={() => navigation.navigate('Fill your information')}
      />
      <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
        <Text style={{ fontSize: 16 }}>Don't Receive Code?</Text>
        <Text
          style={{
            fontSize: 16,
            color: 'green',
            marginLeft: 2,
            fontWeight: 'bold',
          }}>
          Resend code
        </Text>
      </View>
    </View>
  </ScrollView>
);
export default App;
