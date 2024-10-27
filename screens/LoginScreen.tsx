import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import React, { useState } from 'react';

import { globalColors } from '../styles/global';
import showPassword from '../components/btnShowPassword';
import Input from '../components/input';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPassword, setIsShowPassword] = useState(false);

  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.background}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Увійти</Text>
        <View style={styles.innerContainer}>
          <Input
            placeholder='Адреса електронної пошти'
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder='Пароль'
            value={password}
            onChangeText={setPassword}
            secureTextEntry={isShowPassword}
            rightButton={showPassword()}
            outerStyle={styles.password}
          />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Увійти</Text>
        </TouchableOpacity>
        <View style={styles.registerText}>
          <TouchableOpacity>
            <Text>Немає акаунту?</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.registerLink}>Зареєструватися</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

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
    height: 490,
    width: '100%',
    bottom: 0,
  },

  title: {
    marginTop: 32,
    marginBottom: 32,
    fontWeight: '500',
    fontSize: 30,
    lineHeight: 35,
    color: globalColors.black,
  },

  btn: {
    width: '100%',
    height: 51,
    backgroundColor: globalColors.primary,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    marginTop: 43,
  },

  btnText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: globalColors.white,
  },

  innerContainer: {
    width: '100%',
    gap: 16,
  },

  input: {
    width: '100%',
    height: 50,
    backgroundColor: globalColors.light,
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: globalColors.gray,
    marginBottom: 16,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  registerText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  registerLink: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 18,
    color: globalColors.secondary,
  },
});

export default LoginScreen;
