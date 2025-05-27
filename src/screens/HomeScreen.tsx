// HomeScreen.tsx
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Ajusta según la ruta real de tus tipos de navegación

import { View, Text, StyleSheet, Button, ActivityIndicator } from 'react-native'; // Agregamos ActivityIndicator para el estado de carga

// Importa tu hook de autenticación y rol.
// ¡ASEGÚRATE DE QUE ESTA RUTA SEA CORRECTA para tu proyecto!
import { useAuthWithRole } from '../hooks/useAuthWithRole';
import * as React from 'react';

//import React = require('react');

// También necesitarás importar la función de sign out de Firebase Auth si la usas aquí
// Por ejemplo:
// import { getAuth, signOut } from 'firebase/auth';
// const auth = getAuth(); // Obtén la instancia de auth donde la inicialices


// Define el tipo de navegación para esta pantalla
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  // Usa el hook para obtener la navegación
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Añade el tipo para mejor tipado

  // *** Usa tu hook para obtener el usuario actual, su rol y el estado de carga ***
  const { currentUser, userRole, isLoading } = useAuthWithRole();

  // *** Mostrar un indicador de carga mientras se obtiene el rol ***
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={{ marginTop: 10 }}>Cargando información del usuario...</Text>
      </View>
    );
  }

  // *** Si no hay usuario logueado, esto no debería pasar si usas ProtectedRoute,
  // *** pero es una buena verificación de respaldo. Puedes redirigir aquí.
  if (!currentUser) {
      console.warn("HomeScreen: No user found. Redirecting to login.");
      // Considera redirigir programáticamente aquí si no estás usando ProtectedRoute
      // navigation.navigate('Login');
      return (
        <View style={styles.container}>
          <Text>Debes iniciar sesión para ver este contenido.</Text>
          {/* Puedes agregar un botón para ir al login si no rediriges automáticamente */}
           <Button title="Ir a Iniciar Sesión" onPress={() => navigation.navigate('Login')} />
        </View>
      );
  }


  // *** Si llegamos aquí, significa que isLoading es false y hay un currentUser ***
  // Ahora renderizamos los botones condicionalmente según el userRole

  return (
    <View style={styles.container}>
      {/* El título de bienvenida siempre se muestra si el usuario está logueado */}
      <Text style={styles.title}>Bienvenido a la aplicación</Text>

      {/* 1. Botón Cerrar Sesión: Visible para CUALQUIER usuario logueado */}
      {/* Ya verificamos que hay un currentUser arriba, así que este se mostrará si isLoading es false */}
      <Button
        title="Cerrar sesión"
        onPress={async () => {
          console.log("Iniciando proceso de cierre de sesión...");
          // *** IMPORTANTE: Reemplaza este console.log con tu lógica real de sign out de Firebase Auth ***
          try {
            // Ejemplo (descomenta si usas la importación de signOut):
            // await signOut(auth);
            console.log("Sesión cerrada exitosamente.");
            // Navega a la pantalla de inicio de sesión después de cerrar la sesión
            navigation.navigate('Login');
          } catch (error) {
            console.error("Error al cerrar sesión:", error);
            // Opcional: Mostrar un mensaje de error al usuario
          }
        }}
      />

      {/* 2. Botón Agendar Cita Psicológica: Visible para ALUMNOS y PSICOLOGAS */}
      {/* Usamos el operador && para mostrar el botón solo si la condición del rol es verdadera */}
      {(userRole === 'alumno' || userRole === 'psicologa' || userRole === 'admin') && (
        <Button
          title="Agendar Cita Psicológica"
          onPress={() => navigation.navigate('CitasPsicologicas')}
        />
        
      )}

      {(userRole === 'psicologa' || userRole === 'admin') && (
        <Button
          title="Citas"
          onPress={() => navigation.navigate('VistaPsicologo')}
        />
        
      )}
       {(userRole === 'psicologa' || userRole === 'admin') && (
        <Button
          title="VistaPsicologo"
          onPress={() => navigation.navigate('VistaPsicologo')}
        />
      )}

      {(userRole === 'maestro' || userRole === 'admin') && (
        <Button
          title="VistaMaestro"
          onPress={() => navigation.navigate('VistaMaestro')}
        />
      )}

      {/* 3. Botón Buscar asesorías: Visible solo para ALUMNOS */}
      {/* Usamos el operador && para mostrar el botón solo si el rol es 'alumno' */}
      {(userRole === 'alumno' || userRole === 'admin') && (
        <Button
          title="Buscar asesorías"
          onPress={() => navigation.navigate('Asesorias')}
        />
      )}

      {/* 4. Botón Alumnos: Visible solo para ADMINISTRADORES */}
      {/* Usamos el operador && para mostrar el botón solo si el rol es 'admin' */}
      {(userRole === 'alumno' || userRole === 'admin') && (
        <Button
          title='Alumnos'
          onPress={() => navigation.navigate('Alumnos')}
        />
      )}

       {/* Opcional: Mostrar el rol actual del usuario para depuración */}
       {/* <Text style={{marginTop: 20}}>Tu rol es: {userRole || 'No asignado'}</Text> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Añadido padding para no pegar al borde
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold', // Hacer el título más notorio
  },
  // Puedes añadir estilos específicos para los botones si necesitas
  button: {
      marginVertical: 10, // Espacio vertical entre botones
  }
  // Nota: StyleSheet.create no aplica estilos directamente a Button.
  // Si necesitas más control sobre el estilo de los botones, considera usar TouchableOpacity
  // con Text dentro y aplicar estilos al TouchableOpacity y al Text.
});
