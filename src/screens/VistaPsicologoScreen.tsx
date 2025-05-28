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
import { useCitas } from '../components/CitasContext';

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

const psicologoData: Psicologo = {
  nombre: 'Dra. Ana Martínez',
  especialidad: 'Psicología Clínica',
  correo: 'ana.martinez@universidad.edu',
  telefono: '55 1234 5678',
};

const VistaPsicologoScreen = () => {
  const { citas, actualizarCita, agregarCita: agregarCitaContext, eliminarCita } = useCitas();
  const [modalVisible, setModalVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [reagendarModalVisible, setReagendarModalVisible] = useState(false);
  const [editarModalVisible, setEditarModalVisible] = useState(false);
  const [citaSeleccionada, setCitaSeleccionada] = useState<Cita | null>(null);
  const [citaEditando, setCitaEditando] = useState<Cita | null>(null);
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

  // Función de eliminación corregida
  const handleEliminarCita = (id: string) => {
    // Verificar que la cita existe
    const citaAEliminar = citas.find(c => c.id === id);
    if (!citaAEliminar) {
      Alert.alert("Error", "La cita no existe o ya fue eliminada");
      return;
    }

    Alert.alert(
      "Confirmar eliminación",
      `¿Estás seguro de eliminar la cita de ${citaAEliminar.alumno}?`,
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        { 
          text: "Eliminar", 
          onPress: () => {
            eliminarCita(id);
            Alert.alert("Éxito", "Cita eliminada correctamente");
          }
        }
      ]
    );
  };

  // Resto de funciones (confirmar, cancelar, reagendar, etc.)
  const confirmarCita = (id: string) => {
    actualizarCita(id, { estado: 'confirmada' });
    Alert.alert('Cita confirmada', 'La cita ha sido confirmada exitosamente');
  };

  const cancelarCita = (id: string) => {
    actualizarCita(id, { estado: 'cancelada' });
    Alert.alert('Cita cancelada', 'La cita ha sido cancelada');
  };

  const marcarRealizada = (id: string) => {
    actualizarCita(id, { estado: 'realizada' });
    Alert.alert('Cita completada', 'La cita ha sido marcada como realizada');
  };

  const abrirModalReagendar = (cita: Cita) => {
    setCitaSeleccionada(cita);
    setNuevaFecha(cita.fecha);
    setNuevaHora(cita.hora);
    setReagendarModalVisible(true);
  };

  const abrirModalEditar = (cita: Cita) => {
    setCitaEditando({...cita});
    setEditarModalVisible(true);
  };

  const guardarEdicionCita = () => {
    if (!citaEditando) return;

    actualizarCita(citaEditando.id, {
      alumno: citaEditando.alumno,
      numeroControl: citaEditando.numeroControl,
      carrera: citaEditando.carrera,
      fecha: citaEditando.fecha,
      hora: citaEditando.hora,
      motivo: citaEditando.motivo
    });

    setEditarModalVisible(false);
    Alert.alert('Éxito', 'Cita actualizada correctamente');
  };

  const reagendarCita = () => {
    if (!nuevaFecha || !nuevaHora || !citaSeleccionada) {
      Alert.alert('Error', 'Por favor complete todos los campos');
      return;
    }

    actualizarCita(citaSeleccionada.id, { 
      fecha: nuevaFecha, 
      hora: nuevaHora,
      estado: 'reagendada',
      motivo: `${citaSeleccionada.motivo} (Reagendado: ${motivoReagendo || 'sin motivo especificado'})`
    });

    setReagendarModalVisible(false);
    setCitaSeleccionada(null);
    Alert.alert('Éxito', 'La cita ha sido reagendada correctamente');
  };

  const agregarCita = () => {
    if (!nuevaCita.alumno || !nuevaCita.fecha || !nuevaCita.hora) {
      Alert.alert('Error', 'Por favor complete todos los campos requeridos');
      return;
    }

    agregarCitaContext({
      alumno: nuevaCita.alumno,
      numeroControl: nuevaCita.numeroControl,
      carrera: nuevaCita.carrera,
      fecha: nuevaCita.fecha,
      hora: nuevaCita.hora,
      motivo: nuevaCita.motivo,
    });

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

  // Componente de tarjeta de cita
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
        <TouchableOpacity 
          style={[styles.button, styles.editButton]}
          onPress={() => abrirModalEditar(cita)}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={() => handleEliminarCita(cita.id)}
        >
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>

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
          </>
        )}
        
        {cita.estado === 'confirmada' && (
          <TouchableOpacity 
            style={[styles.button, styles.completeButton]}
            onPress={() => marcarRealizada(cita.id)}
          >
            <Text style={styles.buttonText}>Realizada</Text>
          </TouchableOpacity>
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

      {/* Modales (agregar, editar, reagendar, perfil) */}
      {/* ... (mantén el código existente de los modales) ... */}
    </View>
  );
};

// Estilos (se mantienen iguales)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F7F0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#B8DFD8',
    borderBottomWidth: 1,
    borderBottomColor: '#7CBCB5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3A6351',
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
    borderLeftColor: '#FFD3B6',
  },
  cardConfirmada: {
    borderLeftWidth: 5,
    borderLeftColor: '#A2D2FF',
  },
  cardRealizada: {
    borderLeftWidth: 5,
    borderLeftColor: '#CAFFBF',
  },
  cardCancelada: {
    borderLeftWidth: 5,
    borderLeftColor: '#FFADAD',
  },
  cardReagendada: {
    borderLeftWidth: 5,
    borderLeftColor: '#D8B5FF',
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
    color: '#FF9A76',
  },
  statusConfirmada: {
    color: '#7FB3D5',
  },
  statusRealizada: {
    color: '#88C9A1',
  },
  statusCancelada: {
    color: '#FF6B6B',
  },
  statusReagendada: {
    color: '#B693F8',
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
    backgroundColor: '#7FB3D5',
  },
  cancelButton: {
    backgroundColor: '#FF6B6B',
  },
  completeButton: {
    backgroundColor: '#88C9A1',
  },
  reagendarButton: {
    backgroundColor: '#B693F8',
  },
  editButton: {
    backgroundColor: '#FFC107',
  },
  deleteButton: {
    backgroundColor: '#F44336',
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
    backgroundColor: '#88C9A1',
  },
  cancelModalButton: {
    backgroundColor: '#FF6B6B',
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