import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CitasPsicologicasScreen from '../screens/CitasPsicologicasScreen';
import AsesoriasScreen from '../screens/AsesoriasScreen';
import AlumnoScreen from '../screens/AlumnoScreen';
import RedirectScreen from '../screens/RedireccionScreen';
import VistaPsicologoScreen from '../screens/VistaPsicologoScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CitasPsicologicas">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CitasPsicologicas" component={CitasPsicologicasScreen} />
        <Stack.Screen name="Asesorias" component={AsesoriasScreen} />
        <Stack.Screen name="Alumnos" component={AlumnoScreen} />
        <Stack.Screen name="VistaPsicologo" component={VistaPsicologoScreen} />
        <Stack.Screen name="Redireccion" component={RedirectScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
