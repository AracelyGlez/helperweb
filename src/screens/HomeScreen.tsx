// HomeScreen.tsx
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types'; // Ajusta según la ruta real

import { View, Text, StyleSheet, Button } from 'react-native';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a la aplicación</Text>
      <Button 
        title="Cerrar sesión" 
        onPress={() => navigation.navigate('Login')}
      />
      <Button 
    title="Agendar Cita Psicológica" 
    onPress={() => navigation.navigate('CitasPsicologicas')} 
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  }
});