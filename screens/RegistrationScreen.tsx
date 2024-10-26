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
} from 'react-native';
import { globalColors } from '../styles/global';

const RegistrationScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={styles.background}>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.addPhoto}></TouchableOpacity>
        <Text style={styles.text}>Реєстрація</Text>

        <TextInput
          style={styles.input}
          placeholder='Логін'
          placeholderTextColor={globalColors.darkGray}
        />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor={globalColors.darkGray}
        />
        <TextInput
          style={styles.input}
          placeholder='Пароль'
          placeholderTextColor={globalColors.darkGray}
        />
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
    borderRadius: 25,
    backgroundColor: globalColors.white,
    alignItems: 'center',
    justifyContent: 'center',
    height: 550,
    width: '100%',
    bottom: 0,
  },
  addPhoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: globalColors.light,
  },
  text: {
    fontFamily: 'Roboto-Medium',
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: globalColors.light,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    padding: 16,
  },
  text2: {
    fontFamily: 'Roboto-Regular',
  },
});
