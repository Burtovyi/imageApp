import 'react-native-gesture-handler';

import { ActivityIndicator } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import Home from './screens/Home';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import ProfileScreen from './screens/ProfileScreen';
import CommentsScreen from './screens/CommentsScreen';
import StackNavigator from './navigation/StackNavigator';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <ActivityIndicator size='large' />;
  }

  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <StackNavigator />
    </NavigationContainer>
  );
}
