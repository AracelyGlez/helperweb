import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import pooImage from '../../assets/poo.jpg';
import caldif from '../../assets/diferencial.png';
import admin from '../../assets/administracion.jpg';
import algebra from '../../assets/álgebra.jpg';
import conta from '../../assets/contabilidad.jpg';
import cultura from '../../assets/cultura empresarial.jpg';
import desarrollo from '../../assets/desarrollo sustentable.jpg';
import estructura from '../../assets/estructura de datos.jpg';
import etica from '../../assets/etica.jpg';
import fisica from '../../assets/física.jpg';
import fundprogra from '../../assets/fundamentos progra.png';
import calint from '../../assets/integral.png';
import invest from '../../assets/investigacion.jpg';
import discretas from '../../assets/mates discretas.png';
import probabilidad from '../../assets/probabilidad.jpeg';
import quimica from '../../assets/quimica.jpg';
import so from '../../assets/Sistemas Operativos.jpg';
import calvect from '../../assets/vectorial.jpg';


type Materia = {
    id: string;
    name: string;
    image: any;
    semestre: string;
    profesor: string;
  };

  const Asesoria = () => {
    //Datos de cada materia
    const [materias, setMaterias] = useState<Materia[]>([
      {
        id: '1',
        name: 'Cálculo Diferencial',
        image: caldif,
        semestre: '1° semestre',
        profesor: 'Juan Solano',
      },
      {
        id: '2',
        name: 'Fundamentos de programación',
        image: fundprogra,
        semestre: '1° semestre',
        profesor: 'Rocío Névarez',
      },
      {
        id: '3',
        name: 'Taller de Ética',
        image: etica,
        semestre: '1° semestre',
        profesor: 'Erika Martínez',
      },
      {
        id: '4',
        name: 'Matemáticas discretas',
        image: discretas,
        semestre: '1° semestre',
        profesor: 'Alicia Robles',
      },
      {
        id: '5',
        name: 'Fundamentos de investigación',
        image: invest,
        semestre: '1° semestre',
        profesor: 'Víctor López',
      },
      {
        id: '6',
        name: 'Taller de administración',
        image: admin,
        semestre: '1° semestre',
        profesor: 'Cynthia Araiza',
      },
      {
        id: '7',
        name: 'Cálculo Integral',
        image: calint,
        semestre: '2° semestre',
        profesor: 'Elia Mata Sáenz',
      },
      {
        id: '8',
        name: 'POO',
        image: pooImage,
        semestre: '2° semestre',
        profesor: 'David Valtierrez',
      },
      {
        id: '9',
        name: 'Contabilidad Financiera',
        image: conta,
        semestre: '2° semestre',
        profesor: 'Laura Ramírez',
      },
      {
        id: '10',
        name: 'Química',
        image: quimica,
        semestre: '2° semestre',
        profesor: 'Rosario Baray',
      },
      {
        id: '11',
        name: 'Desarrollo sustentable',
        image: desarrollo,
        semestre: '2° semestre',
        profesor: 'Alicia Robles',
      },
      {
        id: '12',
        name: 'Probabilidad y estadística',
        image: probabilidad,
        semestre: '2° semestre',
        profesor: 'Elia Mata Sáenz',
      },
      {
        id: '13',
        name: 'Cálculo Vectorial',
        image: calvect,
        semestre: '3° semestre',
        profesor: 'Martín Salinas',
      },
      {
        id: '14',
        name: 'Estructura de datos',
        image: estructura,
        semestre: '3° semestre',
        profesor: 'Gerardo García',
      },
      {
        id: '15',
        name: 'Cultura Empresarial',
        image: cultura,
        semestre: '3° semestre',
        profesor: 'Osvaldo Reyes',
      },
      {
        id: '16',
        name: 'Álgebra Lineal',
        image: algebra,
        semestre: '3° semestre',
        profesor: 'Horacio Corral',
      },
      {
        id: '17',
        name: 'Sistemas Operativos',
        image: so,
        semestre: '3° semestre',
        profesor: 'Gerardo García',
      },
      {
        id: '18',
        name: 'Física General',
        image: fisica,
        semestre: '3° semestre',
        profesor: 'Elia Mata Sáenz',
      },
    ]);

    //Para que se pueda filtrar aunque no se usen tildes
    const normalizeText = (text: string) => {
        return text
          .toLowerCase()
          .normalize("NFD") 
          .replace(/[\u0300-\u036f]/g, ""); 
      };

    // Estados para búsqueda, semestre y materia 
  const [searchText, setSearchText] = useState('');
  const [selectedSemestre, setSelectedSemestre] = useState('Todo');
  const [selectedMateria, setSelectedMateria] = useState<Materia | null>(null);

  // Filtrar productos por búsqueda y categoría
  const filteredMaterias = materias.filter((materia) => {
    const searchTerm = normalizeText(searchText);
    return (normalizeText(materia.name).includes(searchTerm) || 
     normalizeText(materia.profesor).includes(searchTerm)) &&
    (selectedSemestre === 'Todo' || materia.semestre === selectedSemestre) 
  });

  //Semestres disponibles
  const semestres = ['Todo', '1° semestre', '2° semestre', '3° semestre'];

  if (selectedMateria) {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => setSelectedMateria(null)}
        >
          <Text style={styles.backButtonText}>← Volver</Text>
        </TouchableOpacity>

        <Image
          source={typeof selectedMateria.image === 'string' ? { uri: selectedMateria.image } : selectedMateria.image}
          style={styles.productDetailImage}
        />
        <Text style={styles.materiaNombre}>{selectedMateria.name}</Text>
        <Text style={styles.materiaSemestre}>{selectedMateria.semestre}</Text>
        <Text style={styles.materiaProfesor}>{selectedMateria.profesor}</Text>
        <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Registrarse</Text>
        </Pressable>
      </View>
    );
  }

  // Vista principal de las materias
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Asesorías</Text>

      {/* Barra de búsqueda */}
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar materias o profesores"
        value={searchText}
        onChangeText={setSearchText}
      />

      {/* Filtros por categoría */}
      <View style={styles.semestreContenedor}>
        {semestres.map((semestre) => (
          <TouchableOpacity
            key={semestre}
            style={[
              styles.semestreButton,
              selectedSemestre === semestre && styles.selectedSemestreButton,
            ]}
            onPress={() => setSelectedSemestre(semestre)}
          >
            <Text
              style={[
                styles.semestreButtonText,
                selectedSemestre === semestre && styles.selectedSemestreButtonText,
              ]}
            >
              {semestre.charAt(0).toUpperCase() + semestre.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de materias */}
      <FlatList
        data={filteredMaterias}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.recuadroMateria}
            onPress={() => setSelectedMateria(item)}
          >
            <Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productName}>{item.profesor}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#c0e6ed', 
    //#f5f5f5 blanco
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    backgroundColor: '#2db5cf',
    color: '#FFFFFF',
  },
  button: {
    backgroundColor: '#2db5cf',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
    alignSelf: 'center',
    width: 150,
    maxWidth: '50%',
    marginHorizontal: 20,
  },
   buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  semestreContenedor: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  semestreButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f5fcfc', 
  },
  selectedSemestreButton: {
    backgroundColor: '#1b9bc2', 
  },
  semestreButtonText: {
    color: '#333',
  },
  selectedSemestreButtonText: {
    color: '#fff',
  },
  recuadroMateria: {
    flex: 1,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    elevation: 2,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  productName: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
    color: '#0b87a3',
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    color: '#0379a3',
    fontSize: 16,
  },
  productDetailImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 20,
  },
  materiaNombre: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  materiaSemestre: {
    fontSize: 20,
    color: '#0b87a3',
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  materiaProfesor: {
    fontSize: 16,
    color: '#185d7a',
    marginBottom: 16,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  productDetailDescription: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Asesoria;
 