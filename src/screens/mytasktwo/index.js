import React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import MyTasktwo from '../../components/MyTasktwo';

import styles from './style';
const App = () => (

  <View style={{ backgroundColor: '#f4b0c0', flex: 1, paddingTop: 60 }}>

    <View style={styles.con}>
      <Text style={styles.how}>How is Syntax doing?</Text>
      <View style={styles.all}>
        <View style={styles.water}>
          <Text style={styles.text}>WATER</Text>
        </View>
        <View style={styles.three}>
          <Text style={{ fontWeight: 'bold' }}>APPETITE </Text>
          <Text style={{ paddingStart: 12, fontWeight: 'bold' }}> ALLERGY</Text>
          <Text style={{ paddingStart: 12, fontWeight: 'bold' }}>GROOMING</Text>
        </View>
      </View>

      <MyTasktwo
        name="Water consumption"
        imageUrl="https://previews.123rf.com/images/alekseyvanin/alekseyvanin1803/alekseyvanin180300248/96610998-water-drop-filled-outline-icon-line-vector-sign-linear-colorful-pictogram-isolated-on-white-droplet-.jpg"
        description="Moderate"
      />

      <MyTasktwo
        name="Current, energy level"
        imageUrl="https://image.shutterstock.com/z/stock-vector-cute-cartoon-shiba-inu-puppy-taking-power-nap-with-charging-battery-adorable-sleeping-dog-drawing-1525556282.jpg"
        description="Moderate"
      />
      <Text style={styles.how}>Other needs</Text>
      <View style={{ScrollView:'horizontal'}}>
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{
              uri:
                'https://thumbs.dreamstime.com/b/dog-puppy-scoop-cartoon-logo-design-vector-dog-puppy-holding-scoop-cartoon-logo-design-eps-format-suitable-your-design-170045649.jpg',
            }}
            style={styles.image2}
          />
          <Image
            source={{
              uri:
                'https://png.pngtree.com/png-clipart/20190604/original/pngtree-cute-cartoon-animals-vector-material-png-image_1367054.jpg',
            }}
            style={styles.image2}
          />
          <Image
            source={{
              uri:
                'https://pp.netclipart.com/pp/s/18-188288_animal-grooming-animals-homepage-bathing-the-dog-clipart.png',
            }}
            style={styles.image2}
          />
          <Image
            source={{
              uri:
                'https://thumbs.dreamstime.com/b/sleeping-dog-illustration-vector-isolated-white-background-sleeping-dog-illustration-cartoon-dog-136792890.jpg',
            }}
            style={styles.image2}/>
            <Image
            source={{
              uri:
                'https://thumbs.dreamstime.com/b/sleeping-dog-illustration-vector-isolated-white-background-sleeping-dog-illustration-cartoon-dog-136792890.jpg',
            }}
            style={styles.image2}
          />
        </View>
        <View style={styles.footer}>
          <Text style={styles.lowertext}>Playtime</Text>
          <Text style={styles.lowertext}>Lunch</Text>
          <Text style={styles.lowertext}>Shower</Text>
          <Text style={styles.lowertext}>Bedtime</Text>
          <Text style={styles.lowertext}>Bedtime</Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#f9a9bc', padding: 12, borderWidth: 1, borderColor: '#f9a9bc', borderTopLeftRadius: 46, borderTopRightRadius: 46, }}>
        <Text style={styles.how}>Medical routine</Text>
        <View style={styles.lowercontainer}>
          <Text style={styles.lasttext}>• Rabies Vaccine ✔</Text>
          <Text style={styles.lasttext}>• Distemper  (not yet)</Text>
          <Text style={styles.lasttext}>• Leptospirosis  ✔</Text>
        </View>
      </View>
    </View>
  </View>



);
export default App;
