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

import * as assets from '../../assets';

type Materia = {
    id: string;
    name: string;
    image: number | { uri: string };
    semestre: string;
    profesor: string;
  };

  const Asesoria = () => {
    //Datos de cada materia
    const [materias, setMaterias] = useState<Materia[]>([
      {
        id: '1',
        name: 'Cálculo Diferencial',
        image: assets.caldif,
        semestre: '1° semestre',
        profesor: 'Juan Solano',
      },
      {
        id: '2',
        name: 'Fundamentos de programación',
        image: assets.fundprogra,
        semestre: '1° semestre',
        profesor: 'Rocío Névarez',
      },
      {
        id: '3',
        name: 'Taller de Ética',
        image: assets.etica,
        semestre: '1° semestre',
        profesor: 'Erika Martínez',
      },
      {
        id: '4',
        name: 'Matemáticas discretas',
        image: assets.discretas,
        semestre: '1° semestre',
        profesor: 'Alicia Robles',
      },
      {
        id: '5',
        name: 'Fundamentos de investigación',
        image: assets.invest,
        semestre: '1° semestre',
        profesor: 'Víctor López',
      },
      {
        id: '6',
        name: 'Taller de administración',
        image: assets.admin,
        semestre: '1° semestre',
        profesor: 'Cynthia Araiza',
      },
      {
        id: '7',
        name: 'Cálculo Integral',
        image: assets.calint,
        semestre: '2° semestre',
        profesor: 'Elia Mata Sáenz',
      },
      {
        id: '8',
        name: 'POO',
        image: assets.pooImage,
        semestre: '2° semestre',
        profesor: 'David Valtierrez',
      },
      {
        id: '9',
        name: 'Contabilidad Financiera',
        image: assets.conta,
        semestre: '2° semestre',
        profesor: 'Laura Franco',
      },
      {
        id: '10',
        name: 'Química',
        image: assets.quimica,
        semestre: '2° semestre',
        profesor: 'Rosario Baray',
      },
      {
        id: '11',
        name: 'Desarrollo sustentable',
        image: assets.desarrollo,
        semestre: '2° semestre',
        profesor: 'Alicia Robles',
      },
      {
        id: '12',
        name: 'Probabilidad y estadística',
        image: assets.probabilidad,
        semestre: '2° semestre',
        profesor: 'Elia Mata Sáenz',
      },
      {
        id: '13',
        name: 'Cálculo Vectorial',
        image: assets.calvect,
        semestre: '3° semestre',
        profesor: 'Martín Salinas',
      },
      {
        id: '14',
        name: 'Estructura de datos',
        image: assets.estructura,
        semestre: '3° semestre',
        profesor: 'Gerardo García',
      },
      {
        id: '15',
        name: 'Cultura Empresarial',
        image: assets.cultura,
        semestre: '3° semestre',
        profesor: 'Osvaldo Reyes',
      },
      {
        id: '16',
        name: 'Álgebra Lineal',
        image: assets.algebra,
        semestre: '3° semestre',
        profesor: 'Horacio Corral',
      },
      {
        id: '17',
        name: 'Sistemas Operativos',
        image: assets.so,
        semestre: '3° semestre',
        profesor: 'Gerardo García',
      },
      {
        id: '18',
        name: 'Física General',
        image: assets.fisica,
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

  // Filtrar productos por búsqueda y semestre
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
          style={styles.materiaDetailImage}
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
             <Image source={item.image} style={styles.productImage} />
            <Text style={styles.datos}>{item.name}</Text>
            <Text style={styles.datos}>{item.profesor}</Text>
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
  datos: {
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
  materiaDetailImage: {
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
  });

export default Asesoria;
 