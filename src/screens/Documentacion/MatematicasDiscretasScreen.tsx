//Matematicas discretas:
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const MatematicasDiscretasScreen = () => {
  const openVideo = (url: string) => {
    Linking.openURL(url);
  };

  // Referencias para las secciones
  const temarioRef = React.useRef<View>(null);
  const documentacionRef = React.useRef<View>(null);
  const videosRef = React.useRef<View>(null);
  const scrollViewRef = React.useRef<ScrollView>(null);

  const scrollToSection = (ref: React.RefObject<View>) => {
    ref.current?.measureLayout(
      findNodeHandle(scrollViewRef.current) as number,
      (x, y) => {
        scrollViewRef.current?.scrollTo({ y: y + 20, animated: true });
      },
      () => console.log('Failed to measure layout')
    );
  };

  return (
    <View style={styles.container}>
      {/* Barra superior azul */}
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Matemáticas Discretas</Text>
      </View>

      {/* Menú de navegación */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => scrollToSection(temarioRef)}
        >
          <MaterialIcons name="description" size={24} color="#2c3e50" />
          <Text style={styles.menuText}>Temario</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => scrollToSection(documentacionRef)}
        >
          <MaterialIcons name="info" size={24} color="#2c3e50" />
          <Text style={styles.menuText}>Documentación</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuItem} 
          onPress={() => scrollToSection(videosRef)}
        >
          <MaterialIcons name="video-library" size={24} color="#2c3e50" />
          <Text style={styles.menuText}>Videos</Text>
        </TouchableOpacity>
      </View>

      <ScrollView 
        ref={scrollViewRef}
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Sección de Temario */}
        <View ref={temarioRef} style={styles.section}>
          <Text style={styles.title}>Matemáticas Discretas</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1SOlbyrb7Quo7vSPw4mFlv_vLM7VNwa7w/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Documentación */}
        <View ref={documentacionRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Documentación Completa</Text>
          
          {/* 1. Sistemas numéricos */}
          <Text style={styles.topicTitle}>1. Sistemas numéricos</Text>
          
          <Text style={styles.subtopicTitle}>1.1 Sistemas numéricos (Binario, Octal, Decimal, Hexadecimal)</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>Decimal:</Text> Base 10 (0-9)
            {"\n"}• <Text style={styles.bold}>Binario:</Text> Base 2 (0-1), fundamental en computación
            {"\n"}• <Text style={styles.bold}>Octal:</Text> Base 8 (0-7), usado en computadoras antiguas
            {"\n"}• <Text style={styles.bold}>Hexadecimal:</Text> Base 16 (0-9, A-F), útil en programación
          </Text>
          
          <Text style={styles.subtopicTitle}>1.2 Conversiones entre sistemas numéricos</Text>
          <Text style={styles.contentText}>
            • Decimal a Binario: División sucesiva entre 2
            {"\n"}• Binario a Hexadecimal: Agrupación de 4 bits
            {"\n"}• Octal a Binario: Conversión directa de cada dígito a 3 bits
          </Text>

          <Text style={styles.subtopicTitle}>1.3 Operaciones básicas</Text>
          <Text style={styles.contentText}>
            • Suma binaria: 1+1=10 (con acarreo)
            {"\n"}• Resta usando complemento a dos
            {"\n"}• Multiplicación/División: Algoritmos adaptados a binario
          </Text>

          <Text style={styles.subtopicTitle}>1.4 Aplicación en computación</Text>
          <Text style={styles.contentText}>
            • Binario: Representación en circuitos digitales
            {"\n"}• Hexadecimal: Direcciones de memoria, códigos de color
          </Text>

          {/* 2. Conjuntos y relaciones */}
          <Text style={styles.topicTitle}>2. Conjuntos y relaciones</Text>
          
          <Text style={styles.subtopicTitle}>2.1 Características de conjuntos</Text>
          <Text style={styles.contentText}>
            • Colección bien definida de objetos
            {"\n"}• Subconjunto: Todos sus elementos pertenecen a otro conjunto
          </Text>
          
          <Text style={styles.subtopicTitle}>2.2 Operaciones con conjuntos</Text>
          <Text style={styles.contentText}>
            • Unión (A∪B), Intersección (A∩B)
            {"\n"}• Diferencia (A-B), Complemento (A')
          </Text>

          <Text style={styles.subtopicTitle}>2.3 Propiedades</Text>
          <Text style={styles.contentText}>
            Conmutatividad, Asociatividad, Distributividad, Leyes de De Morgan
          </Text>

          <Text style={styles.subtopicTitle}>2.4 Producto cartesiano y relación binaria</Text>
          <Text style={styles.contentText}>
            • Producto cartesiano: Conjunto de pares ordenados
            {"\n"}• Relación binaria: Subconjunto del producto cartesiano
          </Text>

          <Text style={styles.subtopicTitle}>2.5 Representación de relaciones</Text>
          <Text style={styles.contentText}>
            Tablas, diagramas de flechas, matrices de adyacencia
          </Text>

          <Text style={styles.subtopicTitle}>2.6 Propiedades de relaciones</Text>
          <Text style={styles.contentText}>
            Reflexivas, Simétricas, Transitivas, Antisimétricas
          </Text>

          <Text style={styles.subtopicTitle}>2.7 Relaciones de equivalencia</Text>
          <Text style={styles.contentText}>
            Reflexivas + Simétricas + Transitivas → Clases de equivalencia
          </Text>

          <Text style={styles.subtopicTitle}>2.8 Funciones</Text>
          <Text style={styles.contentText}>
            • Inyectivas (1-1), Sobreyectivas (sobre), Biyectivas (ambas)
            {"\n"}• Aplicaciones en estructuras de datos y algoritmos
          </Text>

          {/* 3. Lógica matemática */}
          <Text style={styles.topicTitle}>3. Lógica matemática</Text>
          
          <Text style={styles.subtopicTitle}>3.1 Lógica proposicional</Text>
          <Text style={styles.contentText}>
            • Proposiciones: Afirmaciones con valor verdadero/falso
            {"\n"}• Conectivos: ∧ (AND), ∨ (OR), ¬ (NOT), → (implicación)
            {"\n"}• Tablas de verdad: Muestran valores para todas las combinaciones
          </Text>
          
          <Text style={styles.subtopicTitle}>3.2 Lógica de predicados</Text>
          <Text style={styles.contentText}>
            • Cuantificadores: ∀ (para todo), ∃ (existe)
            {"\n"}• Predicados: Funciones lógicas con variables
          </Text>

          <Text style={styles.subtopicTitle}>3.3 Inducción matemática</Text>
          <Text style={styles.contentText}>
            • Base: Probar para n=1
            {"\n"}• Inducción: Asumir para n=k, probar para n=k+1
          </Text>

          <Text style={styles.subtopicTitle}>3.4 Aplicaciones en computación</Text>
          <Text style={styles.contentText}>
            Verificación de programas, diseño de algoritmos, inteligencia artificial
          </Text>

          {/* 4. Álgebra booleana */}
          <Text style={styles.topicTitle}>4. Álgebra booleana</Text>
          
          <Text style={styles.subtopicTitle}>4.1 Teoremas y postulados</Text>
          <Text style={styles.contentText}>
            • Leyes: Identidad, Dominación, Idempotencia, Complementación
            {"\n"}• Teoremas de De Morgan
          </Text>
          
          <Text style={styles.subtopicTitle}>4.2 Optimización de expresiones</Text>
          <Text style={styles.contentText}>
            • Mapas de Karnaugh para simplificación
            {"\n"}• Formas canónicas: Minitérminos y maxitérminos
          </Text>

          <Text style={styles.subtopicTitle}>4.3 Circuitos lógicos</Text>
          <Text style={styles.contentText}>
            Compuertas AND, OR, NOT, NAND, NOR, XOR y sus tablas de verdad
          </Text>

          {/* 5. Teoría de grafos */}
          <Text style={styles.topicTitle}>5. Teoría de grafos</Text>
          
          <Text style={styles.subtopicTitle}>5.1 Elementos y tipos</Text>
          <Text style={styles.contentText}>
            • Vértices (nodos) y aristas (conexiones)
            {"\n"}• Grafos dirigidos/no dirigidos, ponderados/no ponderados
          </Text>
          
          <Text style={styles.subtopicTitle}>5.2 Representación</Text>
          <Text style={styles.contentText}>
            • Matrices de adyacencia
            {"\n"}• Listas de adyacencia (eficiente para grafos dispersos)
          </Text>

          <Text style={styles.subtopicTitle}>5.3 Algoritmos</Text>
          <Text style={styles.contentText}>
            • BFS (Breadth-First Search): Recorrido por niveles
            {"\n"}• DFS (Depth-First Search): Recorrido en profundidad
            {"\n"}• Dijkstra: Camino más corto en grafos ponderados
          </Text>

          {/* 6. Árboles y redes */}
          <Text style={styles.topicTitle}>6. Árboles y redes</Text>
          
          <Text style={styles.subtopicTitle}>6.1 Árboles</Text>
          <Text style={styles.contentText}>
            • Propiedad: Un único camino entre dos nodos
            {"\n"}• Tipos: Binarios, balanceados, AVL, B-trees
          </Text>
          
          <Text style={styles.subtopicTitle}>6.2 Recorridos</Text>
          <Text style={styles.contentText}>
            Inorden, Preorden, Postorden (importantes en expresiones)
          </Text>

          <Text style={styles.subtopicTitle}>6.3 Redes</Text>
          <Text style={styles.contentText}>
            • Flujo máximo: Algoritmo de Ford-Fulkerson
            {"\n"}• Redes de Petri: Modelado de sistemas concurrentes
          </Text>
        </View>

        {/* Sección de Videos */}
        <View ref={videosRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
          
          {[
            {title: 'Sistemas numéricos y conversiones', url: 'https://youtu.be/IV1r79nFyzU'},
            {title: 'Teoría de conjuntos', url: 'https://youtu.be/MnuUCSh3oL8'},
            {title: 'Lógica proposicional completa', url: 'https://youtu.be/MpX61sxR80I?list=PL3v2dgnQ47vzhSdS5oEaGqBnCA-8gADBf'},
            {title: 'Álgebra booleana', url: 'https://youtu.be/nIYj4urE82g?list=PL9nwjHIJ6ruvMfgaJVfCjtP5pC3BSOodU'},
            {title: 'Grafos: conceptos básicos', url: 'https://youtu.be/unBhuuSTNEw'},
            {title: 'Algoritmos en grafos', url: 'https://youtu.be/enS0VKfmuWs'},
            {title: 'Árboles en programación', url: 'https://youtu.be/mXz9wRDpMpc?list=PLsTMY2fmkuRxvpQUvIIiAnvGIfA_Nn6Ky'},
            {title: 'Inducción matemática', url: 'https://youtu.be/F5Xjpg0-NhM'},
            {title: 'Relaciones y funciones', url: 'https://youtu.be/ZK8QUphO4MA'},
            {title: 'Circuitos lógicos', url: 'https://youtu.be/RHHA-bDhfGw'},
            {title: 'Optimización booleana', url: 'https://youtu.be/nCszHELuwxk'},
            {title: 'Aplicaciones discretas', url: 'https://youtu.be/JtB2w0QLRZ4'}
          ].map((video, index) => (
            <TouchableOpacity 
              key={index}
              style={styles.videoButton} 
              onPress={() => openVideo(video.url)}
            >
              <MaterialIcons name="play-circle-outline" size={24} color="#3498db" />
              <Text style={styles.videoButtonText}>{video.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBarTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  menuItem: {
    alignItems: 'center',
  },
  menuText: {
    marginTop: 5,
    fontSize: 12,
    color: '#2c3e50',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  section: {
    marginBottom: 30,
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#7f8c8d',
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#bdc3c7',
    paddingBottom: 5,
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#34495e',
    marginTop: 25,
    marginBottom: 10,
  },
  subtopicTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#16a085',
    marginTop: 15,
    marginBottom: 8,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#34495e',
    textAlign: 'justify',
    marginBottom: 10,
  },
  bold: {
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  pdfButtonContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  pdfButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e74c3c',
    padding: 12,
    borderRadius: 8,
    width: '60%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  pdfButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  videoButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#3498db',
  },
  videoButtonText: {
    fontSize: 16,
    marginLeft: 10,
    color: '#2c3e50',
  },
});

export default MatematicasDiscretasScreen;