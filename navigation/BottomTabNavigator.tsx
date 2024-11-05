import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import Home from '../screens/Home';
import CreatePostsScreen from '../screens/CreatePostsScreen';
import CommentsScreen from '../screens/CommentsScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name='Login'
        component={LoginScreen}
        options={
          {
            // headerShown: false,
          }
        }
      />
      <Tab.Screen
        name='Registration'
        component={RegistrationScreen}
        options={
          {
            // headerShown: false,
          }
        }
      />
      {/* <Tab.Screen
        name='Home'
        component={Home}
        options={
          {
            // headerShown: true,
          }
        }
      /> */}
      {/* <Tab.Screen
        name='CreatePostsScreen'
        component={CreatePostsScreen}
        options={{
          headerShown: true,
        }}
      /> */}

      <Tab.Screen
        name='CommentsScreen'
        component={CommentsScreen}
        options={{
          headerShown: true,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
