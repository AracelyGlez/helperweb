// src/screens/RoleBasedRedirectScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import { useAuthWithRole } from '../hooks/useAuthWithRole';

type RedirectScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Redireccion'>;

const RoleBasedRedirectScreen: React.FC = () => {
  const navigation = useNavigation<RedirectScreenNavigationProp>();
  const { 
    currentUser, 
    userRole, 
    isLoading, 
    error 
  } = useAuthWithRole();

  useEffect(() => {
    console.log("[Redirección] Estado actual:", {
      isLoading,
      userRole,
      currentUser: currentUser?.uid,
      error
    });

    // Solo actuar cuando la carga haya terminado
    if (!isLoading) {
      // Caso 1: Hay error de autenticación
      if (error) {
        console.error("[Redirección] Error:", error);
        navigation.replace('Login');
        return;
      }

      // Caso 2: No hay usuario autenticado
      if (!currentUser) {
        console.log("[Redirección] No hay usuario, redirigiendo a Login");
        navigation.replace('Login');
        return;
      }

      // Caso 3: Usuario sin rol definido
      if (!userRole) {
        console.error("[Redirección] Usuario sin rol definido", {
          uid: currentUser.uid,
          email: currentUser.email
        });
        navigation.replace('Login');
        return;
      }

      // Redirección basada en roles (convertido a minúsculas para evitar case sensitivity)
      const normalizedRole = userRole.toLowerCase();
      console.log(`[Redirección] Rol detectado: ${normalizedRole}`);

      switch (normalizedRole) {
        case 'alumno':
          navigation.replace('Alumnos');
          break;
        case 'admin':
          navigation.replace('Home');
          break;
        case 'psicologo':
          navigation.replace('CitasPsicologicas');
          break;
           case 'maestro':
          navigation.replace('VistaMaestro');
          break;
        default:
          console.error("[Redirección] Rol no reconocido:", normalizedRole);
          navigation.replace('Login');
      }
    }
  }, [isLoading, userRole, currentUser, error, navigation]);

  // Estado de carga
  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Verificando credenciales...</Text>
      </View>
    );
  }

  // Vista de transición (se muestra brevemente antes de redirigir)
  return (
    <View style={styles.container}>
      <Text style={styles.redirectingText}>Redirigiendo...</Text>
      {error && (
        <Text style={styles.errorText}>Error: {error}</Text>
      )}
    </View>
  );
};

// Estilos mejorados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 16,
    color: '#333',
  },
  redirectingText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  errorText: {
    marginTop: 20,
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default RoleBasedRedirectScreen;