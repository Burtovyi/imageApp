import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from '@expo/vector-icons/Ionicons';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
      <Tab.Screen
        name='Login'
        component={LoginScreen}
        options={{
          title: 'Login',
          tabBarIcon: () => (
            <Ionicons
              name='log-in-outline'
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name='Registration'
        component={RegistrationScreen}
        options={{
          title: 'Registration',
          tabBarIcon: () => (
            <Ionicons
              name='person-add-outline'
              size={24}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
