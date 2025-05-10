//para agregar el calendario es nevcesario instalr npm install react-native-calendars...

import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker'; // Importar el Picker

export default function CitasPsicologicasScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [motivo, setMotivo] = useState('');

  // Datos simulados del alumno se supone que estos datos se modificaran segun cada alumno que beste logeado
  const alumno = {
    nombre: 'Ana López',
    numeroControl: '20251234',
    carrera: 'Psicología'
  };

  const handleAgendar = () => {
    if (!selectedDate || !selectedTime || !motivo) {
      alert('Por favor selecciona una fecha, hora y escribe el motivo.');
      return;
    }
    alert(`Cita agendada para el ${selectedDate} a las ${selectedTime} con motivo: ${motivo}`);
  };

  return (
    <ScrollView style={styles.container}>
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
    {/* Aqui en el calendario aun no registra las fechas que ay estan ocupadas pero ya esta importando la libreria que puse al principio */}
      {/* Campos de selección de fecha y motivo */}
      <View style={styles.dateAndMotivoBox}>
        <Text style={styles.label}>Fecha de la cita:</Text>
        <Calendar
          onDayPress={(day: { dateString: string }) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#f7b2d9' },
          }}
          style={styles.calendar}
        />
        <Text style={styles.selectedDateText}>
          {selectedDate ? `Fecha seleccionada: ${selectedDate}` : 'Selecciona una fecha'}
        </Text>

        {/* Selector de hora */}
        <Text style={styles.label}>Hora de la cita:</Text>
        <Picker
          selectedValue={selectedTime}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
          style={styles.picker}
        >
          {/* Opciones de hora */}
          <Picker.Item label="10:00 - 11:00" value="10:00 - 11:00" />
          <Picker.Item label="11:00 - 12:00" value="11:00 - 12:00" />
          <Picker.Item label="12:00 - 13:00" value="12:00 - 13:00" />
          <Picker.Item label="13:00 - 14:00" value="13:00 - 14:00" />
          <Picker.Item label="14:00 - 15:00" value="14:00 - 15:00" />
          <Picker.Item label="15:00 - 16:00" value="15:00 - 16:00" />
          <Picker.Item label="16:00 - 17:00" value="16:00 - 17:00" />
        </Picker>
        <Text style={styles.selectedTimeText}>
          {selectedTime ? `Hora seleccionada: ${selectedTime}` : 'Selecciona una hora'}
        </Text>

        <Text style={styles.label}>Motivo de la cita:</Text>
        <TextInput
          placeholder="Escribe el motivo de la cita"
          value={motivo}
          onChangeText={setMotivo}
          style={styles.input}
          multiline
        />
      </View>

      {/* Botón para guardar la cita */}
      <Pressable style={styles.button} onPress={handleAgendar}>
        <Text style={styles.buttonText}>Guardar Cita</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffeef4',
    padding: 10,
  },
  header: {
    fontSize: 22,
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
    width: 60,  // Reducir el tamaño de la imagen
    height: 60, // Reducir el tamaño de la imagen
    alignSelf: 'center',
    marginBottom: 15,
  },
  infoBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#c2185b',
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 15,
    height: 250,  // Reducir el tamaño del calendario
  },
  selectedDateText: {
    fontSize: 14,
    color: '#c2185b',
    textAlign: 'center',
    marginBottom: 15,
  },
  selectedTimeText: {
    fontSize: 14,
    color: '#c2185b',
    textAlign: 'center',
    marginBottom: 15,
  },
  input: {
    borderColor: '#c2185b',
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
    minHeight: 50,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: '#f06292',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dateAndMotivoBox: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 15,
  },
});
