import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

import Posts from '../components/Posts';
import { globalColors } from '../styles/Global';

const ProfileScreen: React.FC = () => {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.background}>
      <View style={styles.formContainer}>
        <ImageBackground
          source={require('../assets/images/profilePhoto.png')}
          style={styles.addPhoto}>
          <TouchableOpacity style={styles.addPhotoIcon}>
            <Image source={require('../assets/images/addPhoto.png')} />
          </TouchableOpacity>
        </ImageBackground>

        <Text style={styles.title}>Natali Romanova</Text>

        <ScrollView>
          <Posts
            idPost='1'
            imgUrl={require('../assets/images/postPhoto.png')}
            title='Ліс'
            likes={12}
            comments={3}
            country='Ukraine'
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  formContainer: {
    flex: 1,
    position: 'absolute',
    paddingLeft: 16,
    paddingRight: 16,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    backgroundColor: globalColors.white,
    alignItems: 'center',
    height: '80%',
    width: '100%',
    bottom: 0,
  },
  addPhoto: {
    marginTop: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: globalColors.light,
    marginBottom: 32,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  addPhotoIcon: {
    width: 25,
    height: 25,
    marginRight: -14,
    marginBottom: 14,
  },
  title: {
    fontFamily: 'Roboto-Medium',
    color: globalColors.black,
    fontSize: 30,
    lineHeight: 35,
    textAlign: 'center',
    marginBottom: 32,
  },

  postContainer: {
    gap: 16,
    width: '100%',
  },

  inputBlock: {
    marginBottom: 43,
  },

  textLogIn: {
    fontFamily: 'Roboto-Regular',
    color: globalColors.secondary,
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'center',
  },
  password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: globalColors.primary,
    borderRadius: 100,
    width: '100%',
    height: 51,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: globalColors.white,
    fontSize: 16,
    lineHeight: 19,
  },
  line: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
