import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import styles from './styles';
import NameTypes from '../../components/NameTypes';

const App = ({ navigation }) => (
  <ScrollView>
    <View style={styles.screen}>
      <Text style={styles.title}>Phewa Lake</Text>
      <View style={{ flexDirection: 'row' }}>
        <Image source={require('./marker.png')} style={styles.icon} />
        <Text style={styles.location}>Pokhara, Hallanchwok</Text>
      </View>
      <View style={{ height: 290 }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
            }}>
            <Image
              source={{
                uri:
                  'https://cdn.civitatis.com/nepal/pokhara/galeria/barcas-orilla-lago-phewa.jpg',
              }}
              style={styles.fewa}
            />
            <Image
              source={{
                uri:
                  'https://www.nepal-travel-guide.com/wp-content/uploads/2020/05/image-82.png',
              }}
              style={styles.fewa}
            />
            <Image
              source={{
                uri:
                  'https://media-cdn.tripadvisor.com/media/photo-s/12/47/ca/3b/phewa-lake-pokhara-largejpg.jpg',
              }}
              style={styles.fewa}
            />
            <Image
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Sun_Set_over_Phewa_Lake.jpg/1024px-Sun_Set_over_Phewa_Lake.jpg',
              }}
              style={styles.fewa}
            />
          </View>
        </ScrollView>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <NameTypes type="About" color="white" selected />
        <NameTypes type="Price" />
        <NameTypes type="Facilities" />
        <NameTypes type="Environment" />
      </View>

      <Text style={styles.text}>
        Phewa Lake, Phewa Tal or Fewa Lake (Nepali: फेवा ताल, is a freshwater
        lake in Nepal formerly called Baidam Tal located in the south of the
        Pokhara Valley that includes Pokhara city; parts of Sarangkot and
        Kaskikot.
      </Text>
      <Text style={styles.text}>
        This is the second largest lake in Nepal; the largest in Gandaki Pradesh
        after the Rara lake in the comparison to Nepal's water bodies. The
        Annapurna range on the north is only about 28 km. The lake is also
        famous for the reflection of mount Machhapuchhre and other mountain
        peaks of the Annapurna and Dhaulagiri ranges on its surface.
        <Text style={styles.more}> Read more</Text>
      </Text>

      <View style={{ flexDirection: 'row' }}>
        <View>
          <Image
            source={{
              uri:
                'https://allprowebdesigns.com/blog/wp-content/uploads/2017/11/star_to_heart.gif',
            }}
            style={styles.heart}
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => navigation.navigate('Booking')}>
          <View style={styles.button}>
            <Text style={styles.start}>Book a trip</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
);
export default App;
