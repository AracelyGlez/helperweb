import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const PerfilPsicologoScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
        }}
        style={styles.avatar}
      />
      <Text style={styles.nombre}>Dra. Ana Martínez</Text>
      <Text style={styles.info}>Correo: ana.martinez@univ.edu.mx</Text>
      <Text style={styles.info}>Especialidad: Psicología Clínica</Text>
      <Text style={styles.info}>Teléfono: 442-123-4567</Text>

      <View style={styles.boton}>
        <Button title="Cerrar sesión" onPress={() => alert("Sesión cerrada")} color="#B22222" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBEA",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginVertical: 4,
  },
  boton: {
    marginTop: 30,
    width: "80%",
  },
});

export default PerfilPsicologoScreen;
