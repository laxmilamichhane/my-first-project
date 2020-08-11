import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';
import PhoneForm from '../../components/PhoneForm';
import PhoneButton from '../../components/PhoneButton';
import NameTypes from '../../components/NameTypes';

const App = () => (
  <View style={{ flex: 1 }}>
    <View style={styles.uppercontainer}>
      <Text style={styles.name}>
        Find the best flight for the right trip! If not now, when?
        <Image source={require('./tourism.png')} style={styles.image} />
      </Text>
    </View>

    <View
      style={{
        flex: 1,
        paddingBottom: 90,
      }}>
      <View style={{ flexDirection: 'row' }}>
        <NameTypes type="Flights" color="black" />
        <View
          style={{
            backgroundColor: 'black',
            flexDirection: 'row',
            borderBottomLeftRadius: 20,
            borderTopRightRadius: 14,
          }}>
          <NameTypes type="Hotels" color="white" />
          <NameTypes type="Vehicles" color="white" />
          <NameTypes type="Vacations" color="white" />
        </View>
      </View>

      <View style={styles.form}>
        <PhoneForm name="From" showIcon />
        <PhoneForm name="To" showIcon />
      </View>
      <View style={styles.form}>
        <PhoneForm name="Depart" />
        <PhoneForm name="Return" />
      </View>
      <Text style={{ color: 'black', marginLeft: 12, fontSize: 14 }}>
        We have special deals for travellers from 16-25.
      </Text>
      <Text style={{ color: 'red', marginLeft: 12, fontSize: 14 }}>
        Click here to start search.
      </Text>
      <PhoneButton name="CONFIRM" txtcolor="white" color="black" />
    </View>
  </View>
);
export default App;
