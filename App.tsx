import { StyleSheet, Text, View , TextInput, Pressable} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.loginBox}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      
      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        keyboardType="email-address"
      />
      
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        secureTextEntry
      />
      
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Ingresar</Text>
      </Pressable>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Registro</Text>
      </Pressable>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center',    // Centra horizontalmente
    backgroundColor: 'rgba(0,0,0,0.5)', // Fondo semitransparente (opcional)
  },
  loginBox: {
    width: '50%',                           // Ancho del cuadro
    backgroundColor: 'white',               // Fondo blanco
    borderRadius: 10,                       // Bordes redondeados
    padding: 20,                            // Espaciado interno
    shadowColor: '#000',                    // Sombra (opcional)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,                           // Sombra en Android
    alignItems: 'center',                   // Centra contenido interno
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
    backgroundColor: '#007bff',  // Color del botón (azul)
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