import { StyleSheet, Text, View, TextInput, Pressable, Image, ScrollView, Platform } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SetStateAction, useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function CitasPsicologicasScreen() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [motivo, setMotivo] = useState('');

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

      <View style={styles.dateAndMotivoBox}>
        <Text style={styles.label}>Fecha de la cita:</Text>
        <Calendar
          onDayPress={(day: { dateString: SetStateAction<string>; }) => setSelectedDate(day.dateString)}
          markedDates={{
            [selectedDate]: { selected: true, selectedColor: '#f7b2d9' },
          }}
          style={styles.calendar}
          theme={{
            selectedDayBackgroundColor: '#f7b2d9',
            todayTextColor: '#c2185b',
            arrowColor: '#c2185b',
          }}
        />

        <View style={{ marginTop: 20, marginBottom: 15 }}>
          
          <Text style={styles.selectedDateText}>
            {selectedDate ? `Fecha seleccionada: ${selectedDate}` : 'Selecciona una fecha'}
          </Text>
        </View>

        <Text style={styles.label}>Hora de la cita:</Text>
        <Picker
          selectedValue={selectedTime}
          onValueChange={(itemValue) => setSelectedTime(itemValue)}
          style={styles.picker}
        >
          <Picker.Item label="Selecciona una hora" value="" />
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
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginBottom: 15,
  },
  label: {
    fontWeight: 'bold',
    color: '#c2185b',
    marginBottom: 5,
  },
  calendar: {
    borderRadius: 10,
    marginBottom: 5,
    height: 250,
  },
  selectedDateText: {
    fontSize: 16,
    color: '#c2185b',
    textAlign: 'center',
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
    backgroundColor: 'white',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#f06292',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    width: 160,
    alignSelf: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dateAndMotivoBox: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
  picker: {
    height: Platform.OS === 'ios' ? 160 : 50,
    width: '100%',
    marginBottom: 10,
  },
});