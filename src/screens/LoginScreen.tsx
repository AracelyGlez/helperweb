import { StyleSheet, Text, View, TextInput, Pressable, Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from "firebase/firestore"; 
import db from '../firebase/firebaseConfig';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [controlNumber, setControlNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      if (!controlNumber || !password) {
        Alert.alert('Error', 'Por favor ingresa número de control y contraseña');
        return;
      }

      // Consulta Firestore para verificar las credenciales
      const q = query(
        collection(db, 'Asesorados'),
        where('numeroControl', '==', controlNumber),
        where('password', '==', password)
      );

      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        Alert.alert('Error', 'Credenciales incorrectas');
      } else {
        // Usuario autenticado correctamente
        navigation.navigate('Home');
      }
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
      Alert.alert('Error', 'Ocurrió un error al iniciar sesión');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Iniciar Sesión</Text>
        
        <TextInput
          placeholder="Numero de control"
          style={styles.input}
          value={controlNumber}
          onChangeText={setControlNumber}
          keyboardType="email-address"
        />
        
        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  loginBox: {
    width: '50%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});