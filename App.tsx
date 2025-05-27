import 'react-native-gesture-handler';
import React from 'react';
 import { enableScreens } from 'react-native-screens';
 import { StatusBar, View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createNativeStackNavigator } from '@react-navigation/native-stack';

 //Pantallas
 import LoginScreen from './src/screens/LoginScreen';
 import HomeScreen from './src/screens/HomeScreen';
 import CitasPsicologicas from './src/screens/CitasPsicologicasScreen';
 import CitasPsicologicasScreen from './src/screens/CitasPsicologicasScreen';
 import AsesoriasScreen from './src/screens/AsesoriasScreen';
 import AlumnoScreen from './src/screens/AlumnoScreen';
 import RedirectionScreen from './src/screens/RedireccionScreen';
 import VistaPsicologoScreen from './src/screens/VistaPsicologoScreen';
 import ProfesoresScreen from './src/screens/ProfesoresScreen'; 
 import CalculoDiferencialScreen from './src/screens/Documentacion/CalculoDiferencalScreen';
 import FundamentosDeInvestigacionScreen from './src/screens/Documentacion/FundamentosDeInvestigacionScreen';
 import FundamentosDeProgramacionScreen from './src/screens/Documentacion/FundamentosDeProgramacionScreen';
 import MatematicasDiscretasScreen from './src/screens/Documentacion/MatematicasDiscretasScreen';
 import TallerDeAdministracionScreen from './src/screens/Documentacion/TallerDeAdministracionScreen';
 import TallerDeEticaScreen from './src/screens/Documentacion/TallerDeEticaScreen';
 import VistaMaestroScreen from './src/screens/VistaMaestroScreen';
 import ContabilidadFinancieraScreen from './src/screens/Documentacion/ContabilidadFinancieraScreen';
 import CalculoIntegralScreen from './src/screens/Documentacion/CalculoIntegralScreen';
 import DesarrolloSustentableScreen from './src/screens/Documentacion/DesarrolloSustentableScreen';
 import PooScreen from './src/screens/Documentacion/POOScreen';
 import QuimicaScreen from './src/screens/Documentacion/QuimicaScreen';
 import ProbabilidadEstadisticaScreen from './src/screens/Documentacion/ProbabilidadEstadisticaScreen';
 import CalculoVectorialScreen from './src/screens/Documentacion/CalculoVectorialScreen';
 import EstructuraDatosScreen from './src/screens/Documentacion/EstructuraDatosScreen';
 import CulturaEmpresarialScreen from './src/screens/Documentacion/CulturaEmpresarialScreen';
 import AlgebraLinealScreen from './src/screens/Documentacion/AlgebraLinealScreen';
 import SistemasOperativosScreen from './src/screens/Documentacion/SistemasOperativosScreen';
 import FisicaGeneralScreen from './src/screens/Documentacion/FisicaGeneralScreen';

//  // Configuración inicial
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
          <Stack.Screen
          name="VistaMaestro"
          component={VistaMaestroScreen}
          options={{title:'VistaMaestro'}}
          />
          {/* Materias */ } 
          <Stack.Screen name="CalculoDiferencial" component={CalculoDiferencialScreen} />
          <Stack.Screen name="FundamentosDeProgramacion" component={FundamentosDeProgramacionScreen} />
          <Stack.Screen name="TallerDeEtica" component={TallerDeEticaScreen} />
          <Stack.Screen name="MatesDiscretas" component={MatematicasDiscretasScreen} />
          <Stack.Screen name="FundamentosDeInvestigacion" component={FundamentosDeInvestigacionScreen} />
          <Stack.Screen name="TallerDeAdmin" component={TallerDeAdministracionScreen} />
          <Stack.Screen name="CalculoIntegral" component={CalculoIntegralScreen} /> 
          <Stack.Screen name="ContabilidadFinanciera" component={ContabilidadFinancieraScreen} />
          <Stack.Screen name="DesarrolloSustentable" component={DesarrolloSustentableScreen} />
          <Stack.Screen name="Poo" component={PooScreen} /> 
          <Stack.Screen name="Quimica" component={QuimicaScreen} />
          <Stack.Screen name="Probabilidad" component={ProbabilidadEstadisticaScreen} />
          <Stack.Screen name="CalculoVectorial" component={CalculoVectorialScreen} /> 
          <Stack.Screen name="EstructuraDeDatos" component={EstructuraDatosScreen} />
          <Stack.Screen name="CulturaEmpresarial" component={CulturaEmpresarialScreen} />
          <Stack.Screen name="AlgebraLineal" component={AlgebraLinealScreen} /> 
          <Stack.Screen name="SistemasOperativos" component={SistemasOperativosScreen} />
          <Stack.Screen name="Fisica" component={FisicaGeneralScreen} />    
     <Stack.Screen name="Redireccion" component={RedirectionScreen}/>
         </Stack.Navigator>
       </NavigationContainer>
     </>
   );
 }  


// // // ///para ver solo la pestaña que estoy probando

//   import ContabilidadFinaneraScreen from './src/screens/Documentacion/ProbabilidadEstadisticaScreen'; // Ajusta la ruta si está en otro lugar


// export default function App() {
//   return <ContabilidadFinaneraScreen />;
//  } 
