import React,  { useState } from 'react';
import { View, Text, StyleSheet, Pressable} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { ProfesoresScreenRouteProp } from '../navigation/types'; 
import { horariosProfesores } from '../data/horarios';

const ProfesoresScreen = () => {
  const route = useRoute<ProfesoresScreenRouteProp>(); 
  const { materia } = route.params;
  
  const [selectedProfesor, setSelectedProfesor] = useState(materia.profesores[0] || '');
  const [selectedHorario, setSelectedHorario] = useState('');

const getHorariosPorProfesorYMateria = (profesorName: string, materiaId: string) => {
  const horarios = horariosProfesores
    .filter(item => 
      item.nombreProfesor === profesorName && 
      item.materiaId === materiaId
    )
    .flatMap(item => item.horarios);

  return horarios.length > 0 ? horarios : ['Horario no disponible'];
};

  const horariosDisponibles = getHorariosPorProfesorYMateria(selectedProfesor, materia.id);

  //Profesor y horario
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profesores disponibles</Text>

      
      <View style={styles.pickerRow}>
        <Text style={styles.label}>Selecciona un profesor:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedProfesor}
            onValueChange={(itemValue) => {
              setSelectedProfesor(itemValue);
              setSelectedHorario('');
            }}
            dropdownIconColor="#2db5cf"
          >
            {materia.profesores.map((profesor, index) => (
              <Picker.Item key={`prof-${index}`} label={profesor} value={profesor} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.pickerRow}>
        <Text style={styles.label}>Selecciona un horario:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            style={styles.picker}
            selectedValue={selectedHorario}
            onValueChange={setSelectedHorario}
            enabled={!!selectedProfesor}
            dropdownIconColor="#2db5cf"
          >
            <Picker.Item label="Selecciona un horario" value="" />
            {horariosDisponibles.map((horario, index) => (
              <Picker.Item key={`hora-${index}`} label={horario} value={horario} />
            ))}
          </Picker>
        </View>
      </View>
      {selectedHorario && (
        <Pressable
          style={styles.confirmButton}
          onPress={() => {
            alert(`Asesoría agendada con ${selectedProfesor} el ${selectedHorario}`);
          }}
        >
          <Text style={styles.confirmButtonText}>Confirmar Asesoría</Text>
        </Pressable>
      )}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#f0ddfa',
    padding: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f0742',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    elevation: 3,
  },
  infoRow: {
    marginBottom: 15,
    padding: 15,
  },
  infoLabel: {
    fontWeight: 'bold',
    color: '#2db5cf',
    marginBottom: 5,
    padding: 15,
  },
  infoText: {
    color: '#333',
    fontSize: 16,
  },
  picker: {
    width: '100%',
    backgroundColor: '#fff',
    height: '100%',
    alignContent: 'center',
  },
  confirmationContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e8f8fc',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2db5cf',
  },
  confirmationText: {
    color: '#185d7a',
    marginBottom: 10,
    textAlign: 'center',
  },
  pickerRow: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#60087a',
    marginBottom: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#8140ab',
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
    height: 40,
    width: '80%',
  },
  confirmButton: {
    backgroundColor: '#7414a0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    width: 200,
  },
  confirmButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ProfesoresScreen;