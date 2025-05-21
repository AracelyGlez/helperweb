import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

// Definición de tipos
type Cita = {
  id: string;
  alumno: string;
  numeroControl: string;
  carrera: string;
  fecha: string;
  hora: string;
  motivo: string;
  estado: 'pendiente' | 'confirmada' | 'cancelada' | 'realizada' | 'reagendada';
};

type Psicologo = {
  nombre: string;
  especialidad: string;
  correo: string;
  telefono: string;
};

// Datos iniciales
const psicologoData: Psicologo = {
  nombre: 'Dra. Ana Martínez',
  especialidad: 'Psicología Clínica',
  correo: 'ana.martinez@universidad.edu',
  telefono: '55 1234 5678',
};

const citasIniciales: Cita[] = [
  {
    id: '1',
    alumno: 'Juan Pérez',
    numeroControl: '20210001',
    carrera: 'Ingeniería',
    fecha: '2023-11-15',
    hora: '10:00',
    motivo: 'Ansiedad académica',
    estado: 'pendiente',
  },
  {
    id: '2',
    alumno: 'María López',
    numeroControl: '20210002',
    carrera: 'Medicina',
    fecha: '2023-11-16',
    hora: '11:30',
    motivo: 'Orientación vocacional',
    estado: 'confirmada',
  },
  {
    id: '3',
    alumno: 'Carlos Sánchez',
    numeroControl: '20210003',
    carrera: 'Derecho',
    fecha: '2023-11-17',
    hora: '09:00',
    motivo: 'Problemas de adaptación',
    estado: 'realizada',
  },
];

const VistaPsicologoScreen = () => {
  // Estados
  const [citas, setCitas] = useState<Cita[]>(citasIniciales);
  const [modalVisible, setModalVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [reagendarModalVisible, setReagendarModalVisible] = useState(false);
  const [citaSeleccionada, setCitaSeleccionada] = useState<Cita | null>(null);
  const [nuevaFecha, setNuevaFecha] = useState('');
  const [nuevaHora, setNuevaHora] = useState('');
  const [motivoReagendo, setMotivoReagendo] = useState('');
  
  const [nuevaCita, setNuevaCita] = useState<Omit<Cita, 'id' | 'estado'>>({
    alumno: '',
    numeroControl: '',
    carrera: '',
    fecha: '',
    hora: '',
    motivo: '',
  });

  // Funciones para manejar citas
  const confirmarCita = (id: string) => {
    setCitas(citas.map(c => c.id === id ? {...c, estado: 'confirmada'} : c));
    Alert.alert('Cita confirmada', 'La cita ha sido confirmada exitosamente');
  };

  const cancelarCita = (id: string) => {
    setCitas(citas.map(c => c.id === id ? {...c, estado: 'cancelada'} : c));
    Alert.alert('Cita cancelada', 'La cita ha sido cancelada');
  };

  const marcarRealizada = (id: string) => {
    setCitas(citas.map(c => c.id === id ? {...c, estado: 'realizada'} : c));
    Alert.alert('Cita completada', 'La cita ha sido marcada como realizada');
  };

  const abrirModalReagendar = (cita: Cita) => {
    setCitaSeleccionada(cita);
    setNuevaFecha(cita.fecha);
    setNuevaHora(cita.hora);
    setReagendarModalVisible(true);
  };

  const reagendarCita = () => {
    if (!nuevaFecha || !nuevaHora) {
      Alert.alert('Error', 'Por favor ingrese la nueva fecha y hora');
      return;
    }

    if (!motivoReagendo) {
      Alert.alert('Error', 'Por favor ingrese el motivo del reagendo');
      return;
    }

    setCitas(citas.map(c => 
      c.id === citaSeleccionada?.id 
        ? {
            ...c, 
            fecha: nuevaFecha, 
            hora: nuevaHora,
            estado: 'reagendada',
            motivo: `${c.motivo} (Reagendado: ${motivoReagendo})`
          } 
        : c
    ));

    setReagendarModalVisible(false);
    setCitaSeleccionada(null);
    setNuevaFecha('');
    setNuevaHora('');
    setMotivoReagendo('');
    Alert.alert('Éxito', 'La cita ha sido reagendada correctamente');
  };

  const agregarCita = () => {
    if (!nuevaCita.alumno || !nuevaCita.fecha || !nuevaCita.hora) {
      Alert.alert('Error', 'Por favor complete todos los campos requeridos');
      return;
    }

    const nuevaCitaCompleta: Cita = {
      ...nuevaCita,
      id: Math.random().toString(36).substring(7),
      estado: 'pendiente',
    };

    setCitas([...citas, nuevaCitaCompleta]);
    setModalVisible(false);
    setNuevaCita({
      alumno: '',
      numeroControl: '',
      carrera: '',
      fecha: '',
      hora: '',
      motivo: '',
    });
    Alert.alert('Éxito', 'Nueva cita agregada correctamente');
  };

  // Componente de tarjeta de cita normall
  const CitaCard = ({ cita }: { cita: Cita }) => (
    <View style={[
      styles.card,
      cita.estado === 'pendiente' && styles.cardPendiente,
      cita.estado === 'confirmada' && styles.cardConfirmada,
      cita.estado === 'realizada' && styles.cardRealizada,
      cita.estado === 'cancelada' && styles.cardCancelada,
      cita.estado === 'reagendada' && styles.cardReagendada,
    ]}>
      <Text style={styles.cardTitle}>{cita.alumno}</Text>
      <Text style={styles.cardText}>No. Control: {cita.numeroControl}</Text>
      <Text style={styles.cardText}>Carrera: {cita.carrera}</Text>
      <Text style={styles.cardText}>Fecha: {cita.fecha} - {cita.hora}</Text>
      <Text style={styles.cardText}>Motivo: {cita.motivo}</Text>
      <Text style={[
        styles.cardStatus,
        cita.estado === 'pendiente' && styles.statusPendiente,
        cita.estado === 'confirmada' && styles.statusConfirmada,
        cita.estado === 'realizada' && styles.statusRealizada,
        cita.estado === 'cancelada' && styles.statusCancelada,
        cita.estado === 'reagendada' && styles.statusReagendada,
      ]}>
        Estado: {cita.estado.toUpperCase()}
      </Text>

      <View style={styles.buttonsContainer}>
        {cita.estado === 'pendiente' && (
          <>
            <TouchableOpacity 
              style={[styles.button, styles.confirmButton]}
              onPress={() => confirmarCita(cita.id)}
            >
              <Text style={styles.buttonText}>Confirmar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.reagendarButton]}
              onPress={() => abrirModalReagendar(cita)}
            >
              <Text style={styles.buttonText}>Reagendar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.cancelButton]}
              onPress={() => cancelarCita(cita.id)}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
          </>
        )}
        
        {cita.estado === 'confirmada' && (
          <>
            <TouchableOpacity 
              style={[styles.button, styles.completeButton]}
              onPress={() => marcarRealizada(cita.id)}
            >
              <Text style={styles.buttonText}>Realizada</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.button, styles.reagendarButton]}
              onPress={() => abrirModalReagendar(cita)}
            >
              <Text style={styles.buttonText}>Reagendar</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header con botón de perfil */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Citas Programadas</Text>
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => setShowProfile(true)}
        >
          <Text style={styles.profileButtonText}>Perfil Psicólogo</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de citas */}
      <FlatList
        data={citas}
        renderItem={({ item }) => <CitaCard cita={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No hay citas programadas</Text>
        }
      />

      {/* Botón para agregar nueva cita */}
      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Agregar Nueva Cita</Text>
      </TouchableOpacity>

      {/* Modal para agregar nueva cita */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Agregar Nueva Cita</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Nombre del alumno"
              value={nuevaCita.alumno}
              onChangeText={text => setNuevaCita({...nuevaCita, alumno: text})}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Número de control"
              value={nuevaCita.numeroControl}
              onChangeText={text => setNuevaCita({...nuevaCita, numeroControl: text})}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Carrera"
              value={nuevaCita.carrera}
              onChangeText={text => setNuevaCita({...nuevaCita, carrera: text})}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Fecha (YYYY-MM-DD)"
              value={nuevaCita.fecha}
              onChangeText={text => setNuevaCita({...nuevaCita, fecha: text})}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Hora (HH:MM)"
              value={nuevaCita.hora}
              onChangeText={text => setNuevaCita({...nuevaCita, hora: text})}
            />
            
            <TextInput
              style={[styles.input, {height: 80}]}
              placeholder="Motivo de la consulta"
              multiline
              value={nuevaCita.motivo}
              onChangeText={text => setNuevaCita({...nuevaCita, motivo: text})}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelModalButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.addModalButton]}
                onPress={agregarCita}
              >
                <Text style={styles.modalButtonText}>Agregar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Modal de perfil del psicólogo */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showProfile}
        onRequestClose={() => setShowProfile(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Perfil del Psicólogo</Text>
            
            <View style={styles.profileInfo}>
              <Text style={styles.profileText}>Nombre: {psicologoData.nombre}</Text>
              <Text style={styles.profileText}>Especialidad: {psicologoData.especialidad}</Text>
              <Text style={styles.profileText}>Correo: {psicologoData.correo}</Text>
              <Text style={styles.profileText}>Teléfono: {psicologoData.telefono}</Text>
            </View>
            
            <TouchableOpacity 
              style={[styles.modalButton, styles.closeModalButton]}
              onPress={() => setShowProfile(false)}
            >
              <Text style={styles.modalButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal para reagendaaaar cita */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={reagendarModalVisible}
        onRequestClose={() => setReagendarModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Reagendar Cita</Text>
            <Text style={styles.cardText}>Alumno: {citaSeleccionada?.alumno}</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Nueva fecha (YYYY-MM-DD)"
              value={nuevaFecha}
              onChangeText={setNuevaFecha}
            />
            
            <TextInput
              style={styles.input}
              placeholder="Nueva hora (HH:MM)"
              value={nuevaHora}
              onChangeText={setNuevaHora}
            />
            
            <TextInput
              style={[styles.input, {height: 80}]}
              placeholder="Motivo del reagendo"
              multiline
              value={motivoReagendo}
              onChangeText={setMotivoReagendo}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelModalButton]}
                onPress={() => setReagendarModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.addModalButton]}
                onPress={reagendarCita}
              >
                <Text style={styles.modalButtonText}>Reagendar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Estilos con colores por si quiern cambiarlos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F0', // Beige muy claro
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#B8DFD8', // Verde pastel
    borderBottomWidth: 1,
    borderBottomColor: '#7CBCB5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A6351', // Verde oscuro suave
  },
  profileButton: {
    backgroundColor: '#3A6351',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  profileButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    padding: 10,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardPendiente: {
    borderLeftWidth: 5,
    borderLeftColor: '#FFD3B6', // Naranja pastel
  },
  cardConfirmada: {
    borderLeftWidth: 5,
    borderLeftColor: '#A2D2FF', // Azul pastel
  },
  cardRealizada: {
    borderLeftWidth: 5,
    borderLeftColor: '#CAFFBF', // Verde pastel
  },
  cardCancelada: {
    borderLeftWidth: 5,
    borderLeftColor: '#FFADAD', // Rojo pastel
  },
  cardReagendada: {
    borderLeftWidth: 5,
    borderLeftColor: '#D8B5FF', // Lila pastel
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3A6351',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 3,
    color: '#3A6351',
  },
  cardStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 10,
  },
  statusPendiente: {
    color: '#FF9A76', // Naranja pastel
  },
  statusConfirmada: {
    color: '#7FB3D5', // Azul pastel
  },
  statusRealizada: {
    color: '#88C9A1', // Verde pastel
  },
  statusCancelada: {
    color: '#FF6B6B', // Rojo pastel
  },
  statusReagendada: {
    color: '#B693F8', // Lila pastel
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  confirmButton: {
    backgroundColor: '#7FB3D5', // Azul pastel
  },
  cancelButton: {
    backgroundColor: '#FF6B6B', // Rojo pastel
  },
  completeButton: {
    backgroundColor: '#88C9A1', // Verde pastel
  },
  reagendarButton: {
    backgroundColor: '#B693F8', // Lila pastel
  },
  addButton: {
    backgroundColor: '#B8DFD8',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  addButtonText: {
    color: '#3A6351',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#3A6351',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    borderRadius: 10,
    padding: 20,
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#3A6351',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderColor: '#B8DFD8',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  addModalButton: {
    backgroundColor: '#88C9A1', // Verde pastel
  },
  cancelModalButton: {
    backgroundColor: '#FF6B6B', // Rojo pastel
  },
  closeModalButton: {
    backgroundColor: '#3A6351',
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  profileInfo: {
    marginBottom: 20,
  },
  profileText: {
    fontSize: 16,
    marginBottom: 8,
    color: '#3A6351',
  },
});

export default VistaPsicologoScreen;