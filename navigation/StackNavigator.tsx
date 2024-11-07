import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import RegistrationScreen from '../screens/RegistrationScreen';
import LoginScreen from '../screens/LoginScreen';
// import Home from '../screens/Home';
import BottomTabNavigator from './BottomTabNavigator';

type Props = {
  navigation: any;
  route: any;
};
const StackNavigator: React.FC<Props> = ({ navigation, route }) => {
  return (
    <Stack.Navigator
      initialRouteName='Login'
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        name='Registration'
        component={RegistrationScreen}
      />
      <Stack.Screen
        name='Main'
        component={BottomTabNavigator}
      />
    </Stack.Navigator>
  );
};
export default StackNavigator;
