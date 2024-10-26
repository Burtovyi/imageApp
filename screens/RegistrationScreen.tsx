import {
  Text,
  View,
  Button,
  TextInput,
  ImageBackground,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  SectionList,
  Image,
} from 'react-native';
import React, { useState } from 'react';

import { globalColors } from '../styles/global';

import Input from '../components/input';
import showPassword from '../components/btnShowPassword';

const RegistrationScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.background}>
      <View style={styles.formContainer}>
        <View style={styles.addPhoto}>
          <TouchableOpacity style={styles.addPhotoIcon}>
            <Image source={require('../assets/images/addPhoto.png')} />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Реєстрація</Text>
        <View style={[styles.innerContainer, styles.inputBlock]}>
          <Input placeholder='Логін' />
          <Input placeholder='Емейл' />
          <Input
            placeholder='Пароль'
            rightButton={showPassword()}
            outerStyle={styles.password}
          />
        </View>
        <View style={styles.innerContainer}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Зареєструватися</Text>
          </View>
          <Text style={styles.textLogIn}>Вже є аккаунт? Вхід</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default RegistrationScreen;

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
    height: 550,
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

  innerContainer: {
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
    marginTop: 16,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
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
});
