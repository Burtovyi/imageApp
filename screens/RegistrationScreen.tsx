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

export default function RegistrationScreen() {
  return (
    <ImageBackground
      source={require('../assets/images/background.jpg')}
      style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.addFoto}></TouchableOpacity>
        <Text style={styles.text}>Реєстрація</Text>

        <TextInput
          style={styles.input}
          placeholder='Логін'
          placeholderTextColor='#BDBDBD'
        />
        <TextInput
          style={styles.input}
          placeholder='E-mail'
          placeholderTextColor='#BDBDBD'
        />
        <TextInput
          style={styles.input}
          placeholder='Пароль'
          placeholderTextColor='#BDBDBD'
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 263,
    borderRadius: 25,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addFoto: {
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: '#000',
  },
  text: {
    fontFamily: 'Roboto-Medium',
  },
  input: {
    width: 343,
    height: 50,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    padding: 16,
  },
  text2: {
    fontFamily: 'Roboto-Regular',
  },
});
