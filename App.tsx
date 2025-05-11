import 'react-native-gesture-handler';
import React from 'react';
import { enableScreens } from 'react-native-screens';
import { StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pantallas
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
//import CitasPsicologicas from './src/screens/CitasPsicologicasScreen';
import CitasPsicologicasScreen from './src/screens/CitasPsicologicasScreen';
import AsesoriasScreen from './src/screens/AsesoriasScreen';

// Configuración inicial
enableScreens();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen 
            name="Login" 
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'Inicio' }}
          />
          <Stack.Screen 
            name="CitasPsicologicas" 
            component={CitasPsicologicasScreen}
            options={{ title: 'Inicio' }}
          />
          <Stack.Screen 
            name="Asesorias" 
            component={AsesoriasScreen}
            options={{ title: 'Inicio' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}


// ///para ver solo la pestaña que estoy probando
// import React from 'react';
// import CitasPsicologicasScreen from './src/screens/CitasPsicologicasScreen'; // Ajusta la ruta si está en otro lugar

// export default function App() {
//   return <CitasPsicologicasScreen />;
// }