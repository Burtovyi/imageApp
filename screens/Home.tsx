import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

import { globalColors } from '../styles/Global';
import Posts from '../components/Posts';
import React from 'react';
const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>Home</Text>
      </View>

      <ScrollView style={styles.postsContainer}>
        <Posts
          idPost='1'
          imgUrl={require('../assets/images/postPhoto.png')}
          title='Ліс'
          comments={3}
          country='Ivano-Frankivsk Region, Ukraine'
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.white,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  postsContainer: {
    gap: 16,
    width: '100%',
  },
});

export default Home;
