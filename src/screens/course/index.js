import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';

const New = () => (
  <ScrollView>
    <View
      style={{
        backgroundColor: 'lightgray',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
      }}>
      <View style={{ flex: 1, marginHorizontal: 10 }}>
        <View style={{ flexDirection: 'row-reverse' }}>
          <Image
            source={{
              uri:
                'https://cdn2.iconfinder.com/data/icons/people-80/96/Picture1-512.png',
            }}
            style={styles.img}
          />
          <Text style={styles.name}>Hey Laxmi,</Text>
        </View>

        <Text style={styles.description}>Find a course you want to learn</Text>
        <Image
          source={{
            uri:
              'https://i.dlpng.com/static/png/4659342-search-box-png-5-png-image-search-box-png-320_240_preview.png',
          }}
          style={styles.image}
        />
      </View>
    </View>
    <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 10 }}>
      <Text style={styles.category}>Categories</Text>
      <Text style={styles.see}>See all</Text>
    </View>

    <View
      style={{
        backgroundColor: 'lightgray',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <Image
          source={{
            uri:
              'https://dmi-uploads.imgix.net/general/Mobile-Marketing-Strategy.gif?fm=jpg&ixlib=php-1.1.0&q=3&w=2060&s=760c63887e5bd82130b31a199dca82d1',
          }}
          style={styles.img2}
        />
        <Image source={require('./business.png')} style={styles.img3} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 10,
          marginVertical: 20,
          marginBottom: 60,
        }}>
        <Image source={require('./pic.png')} style={styles.img4} />
        <Image
          source={{
            uri:
              'https://previews.123rf.com/images/vasabii/vasabii1608/vasabii160800069/60929459-vector-illustration-of-ui-ux-developmentflat-line-design-concept-.jpg',
          }}
          style={styles.img5}
        />
      </View>
    </View>
  </ScrollView>
);
export default New;
