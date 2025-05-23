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
import AlumnoScreen from './src/screens/AlumnoScreen';
import RedirectionScreen from './src/screens/RedireccionScreen';
import VistaPsicologoScreen from './src/screens/VistaPsicologoScreen';
import ProfesoresScreen from './src/screens/ProfesoresScreen'; 


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
            options={{ title: 'CitasPsicologicas' }}
          />
          <Stack.Screen 
            name="Asesorias" 
            component={AsesoriasScreen}
            options={{ title: 'Asesorias' }}
          />
         <Stack.Screen
         name="Alumnos"
         component={AlumnoScreen}
         options={{title:'Alumno'}}
         />
          <Stack.Screen
         name="VistaPsicologo"
         component={VistaPsicologoScreen}
         options={{title:'VistaPsicologo'}}
         />
         <Stack.Screen
         name="Profesores"
         component={ProfesoresScreen}
         options={{title:'Profesores'}}
         />
    <Stack.Screen name="Redireccion" component={RedirectionScreen}/>
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