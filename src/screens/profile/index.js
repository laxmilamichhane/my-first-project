import React from 'react';
import { View, Text, Image, SafeAreaView, ScrollView } from 'react-native';

import ProfileCard from '../../components/ProfileCard';
import MyCard from '../../components/TaskCard';
import styles from './styles';

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.both}>
          <Image
            source={{
              uri:
                'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png',
            }}
            style={{
              width: 60,
              height: 64,
              borderWidth: 1.5,
              borderRadius: 30,
              borderColor: 'brown',
            }}
          />
          <View>
            <Text style={styles.name}> Laxmi Lamichhane</Text>
            <Text style={styles.na2}>Jr.Developer</Text>
            <Text style={styles.thrd}> 50% of complete work</Text>
            <Image
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Progressbar50.png/798px-Progressbar50.png',
              }}
              style={{ width: 110, height: 20 }}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <ProfileCard
            title="Information"
            description="Learn More"
            imageUrl="https://pluspng.com/img-png/more-info-png-bubble-more-info-png-351.png"
          />
          <ProfileCard
            title="Contact"
            description="Real Talk"
            imageUrl="data:image/png;base64,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',
              }}"
          />
        </View>
        <MyCard
          small="HIGH PRIORITY"
          title="Buy Presents"
          lower="Go and get chritmas pesents"
          color="#f77b39"
        />
        <MyCard
          small="HIGH PRIORITY"
          title="Go To The Store"
          lower="Buy eggs, milk, flour and some"
          color="#f77b39"
        />
        <MyCard
          small="NORMAL PRIORITY"
          title="Go For A  Walk"
          lower="Walk a minimum of 3km today"
          color="#6da6e3"
        />
        <MyCard
          small="NORMAL PRIORITY"
          title="Call store"
          lower="Call store for better experience"
          color="green"
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);
export default App;
