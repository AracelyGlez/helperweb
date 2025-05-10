//para agregar el calendario es nevcesario instalr npm install react-native-calendars...

// src/screens/CitasPsicologicasScreen.tsx
import { StyleSheet, Text, View, TextInput, Pressable, Image } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
//import { DateObject } from 'react-native-calendars';

export default function CitasPsicologicasScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [motivo, setMotivo] = useState('');

  // Datos simulados del alumno
  const alumno = {
    nombre: 'Ana López',
    numeroControl: '20251234',
    carrera: 'Psicología'
  };

  const handleAgendar = () => {
    if (!selectedDate || !motivo) {
      alert('Por favor selecciona una fecha y escribe el motivo.');
      return;
    }
    alert(`Cita agendada para el ${selectedDate}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Agenda tu cita psicológica</Text>
      <Text style={styles.subText}>“Tu salud mental importa. ¡Estamos para escucharte!”</Text>

      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3048/3048398.png' }}
        style={styles.image}
      />

      <View style={styles.infoBox}>
        <Text style={styles.label}>Nombre:</Text>
        <Text>{alumno.nombre}</Text>
        <Text style={styles.label}>Número de control:</Text>
        <Text>{alumno.numeroControl}</Text>
        <Text style={styles.label}>Carrera:</Text>
        <Text>{alumno.carrera}</Text>
      </View>

      <Calendar
  onDayPress={(day: { dateString: string }) => setSelectedDate(day.dateString)}
  markedDates={{
    [selectedDate]: { selected: true, selectedColor: '#f7b2d9' },
  }}
  style={styles.calendar}
/>

      <TextInput
        placeholder="Motivo de la cita"
        value={motivo}
        onChangeText={setMotivo}
        style={styles.input}
        multiline
      />

      <Pressable style={styles.button} onPress={handleAgendar}>
        <Text style={styles.buttonText}>Agendar Cita</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeef4',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#c2185b',
    textAlign: 'center',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#8e024b',
    textAlign: 'center',
    marginBottom: 15,
    fontStyle: 'italic'
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15,
  },
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#c2185b',
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 15,
  },
  input: {
    borderColor: '#c2185b',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    minHeight: 60,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#f06292',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});