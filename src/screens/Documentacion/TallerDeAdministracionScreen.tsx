// taller  de investigacion:
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TallerAdministracionScreen = () => {
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
        <Text style={styles.topBarTitle}>Taller de Administración</Text>
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
          <Text style={styles.title}>Taller de Administración</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1DL-RmWwyIAyOD2sBeJvpEzYoH_EgKohp/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Documentación */}
        <View ref={documentacionRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Documentación Completa</Text>
          
          {/* 1. Introducción */}
          <Text style={styles.topicTitle}>1. Introducción</Text>
          
          <Text style={styles.subtopicTitle}>1.1 Definición y objetivo</Text>
          <Text style={styles.contentText}>
            La administración es un proceso sistemático que implica planear, organizar, dirigir y controlar recursos para alcanzar objetivos organizacionales de manera eficiente.
          </Text>
          
          <Text style={styles.subtopicTitle}>1.2 Definición de empresa y clasificación</Text>
          <Text style={styles.contentText}>
            <Text style={styles.bold}>Por tamaño:</Text> Micro, pequeña, mediana, grande
            {"\n"}<Text style={styles.bold}>Por actividad:</Text> Industriales, comerciales, de servicios
            {"\n"}<Text style={styles.bold}>Por propiedad:</Text> Públicas, privadas, mixtas
          </Text>

          <Text style={styles.subtopicTitle}>1.3 Áreas básicas de una organización</Text>
          <Text style={styles.contentText}>
            • Financiera {"\n"}• Producción {"\n"}• Comercial {"\n"}• Recursos Humanos {"\n"}• Administrativa
          </Text>

          <Text style={styles.subtopicTitle}>1.4 Proceso administrativo</Text>
          <Text style={styles.contentText}>
            1. Planeación {"\n"}2. Organización {"\n"}3. Dirección {"\n"}4. Control
          </Text>

          <Text style={styles.subtopicTitle}>1.5 Desempeño gerencial</Text>
          <Text style={styles.contentText}>
            Capacidad para gestionar recursos y lograr objetivos organizacionales
          </Text>

          <Text style={styles.subtopicTitle}>1.6 Tipos de gerentes</Text>
          <Text style={styles.contentText}>
            • Nivel superior {"\n"}• Nivel medio {"\n"}• Nivel operativo
          </Text>

          <Text style={styles.subtopicTitle}>1.7 Destrezas gerenciales</Text>
          <Text style={styles.contentText}>
            • Técnicas {"\n"}• Humanas {"\n"}• Conceptuales
          </Text>

          {/* 2. Administración y entorno */}
          <Text style={styles.topicTitle}>2. Administración y entorno</Text>
          
          <Text style={styles.subtopicTitle}>2.1 Modelo de sistemas abiertos</Text>
          <Text style={styles.contentText}>
            Las empresas interactúan con su entorno recibiendo insumos y entregando productos/servicios
          </Text>
          
          <Text style={styles.subtopicTitle}>2.2 Medio externo</Text>
          <Text style={styles.contentText}>
            Factores económicos, políticos, socioculturales, tecnológicos y competitivos
          </Text>

          <Text style={styles.subtopicTitle}>2.3 Medio interno</Text>
          <Text style={styles.contentText}>
            Cultura organizacional, estructura, recursos humanos y políticas internas
          </Text>

          <Text style={styles.subtopicTitle}>2.4 Cultura corporativa</Text>
          <Text style={styles.contentText}>
            Valores, creencias y normas compartidas que definen el comportamiento organizacional
          </Text>

          <Text style={styles.subtopicTitle}>2.5 Globalización</Text>
          <Text style={styles.contentText}>
            Exige administración flexible e innovadora para competir en mercados internacionales
          </Text>

          {/* 3. Toma de decisiones */}
          <Text style={styles.topicTitle}>3. Toma de decisiones</Text>
          
          <Text style={styles.subtopicTitle}>3.1 Niveles de decisión</Text>
          <Text style={styles.contentText}>
            • Estratégico {"\n"}• Táctico {"\n"}• Operativo
          </Text>
          
          <Text style={styles.subtopicTitle}>3.2 Estilos de decisión</Text>
          <Text style={styles.contentText}>
            Autocrático, participativo, delegativo
          </Text>

          <Text style={styles.subtopicTitle}>3.3 Proceso de decisión</Text>
          <Text style={styles.contentText}>
            1. Identificar problema {"\n"}2. Analizar alternativas {"\n"}3. Evaluar riesgos {"\n"}4. Seleccionar opción {"\n"}5. Implementar {"\n"}6. Evaluar resultados
          </Text>

          {/* 4. Mecánica del proceso administrativo */}
          <Text style={styles.topicTitle}>4. Mecánica del proceso administrativo</Text>
          
          <Text style={styles.subtopicTitle}>4.1 Planeación</Text>
          <Text style={styles.contentText}>
            <Text style={styles.bold}>Tipos:</Text>
            {"\n"}• Estratégica {"\n"}• Táctica {"\n"}• Operativa
            {"\n\n"}<Text style={styles.bold}>Técnicas:</Text>
            {"\n"}• Análisis FODA {"\n"}• Métodos cuantitativos {"\n"}• Escenarios
          </Text>
          
          <Text style={styles.subtopicTitle}>4.2 Organización</Text>
          <Text style={styles.contentText}>
            Diseño de estructuras, departamentalización, jerarquías y delegación
          </Text>

          {/* 5. Dinámica del proceso administrativo */}
          <Text style={styles.topicTitle}>5. Dinámica del proceso administrativo</Text>
          
          <Text style={styles.subtopicTitle}>5.1 Dirección</Text>
          <Text style={styles.contentText}>
            • Liderazgo {"\n"}• Motivación {"\n"}• Comunicación {"\n"}• Toma de decisiones
          </Text>
          
          <Text style={styles.subtopicTitle}>5.2 Control</Text>
          <Text style={styles.contentText}>
            <Text style={styles.bold}>Proceso:</Text>
            {"\n"}1. Establecer estándares {"\n"}2. Medir desempeño {"\n"}3. Comparar resultados {"\n"}4. Corregir desviaciones
          </Text>

          <Text style={styles.subtopicTitle}>5.3 Análisis de costos</Text>
          <Text style={styles.contentText}>
            Evaluación de costos para optimizar recursos y mejorar rentabilidad
          </Text>

          {/* 6. Administración de proyectos */}
          <Text style={styles.topicTitle}>6. Administración de proyectos</Text>
          
          <Text style={styles.subtopicTitle}>6.1 Fundamentos</Text>
          <Text style={styles.contentText}>
            Gestión de alcance, tiempo, costos y calidad en proyectos específicos
          </Text>
          
          <Text style={styles.subtopicTitle}>6.2 Etapas</Text>
          <Text style={styles.contentText}>
            1. Inicio {"\n"}2. Planificación {"\n"}3. Ejecución {"\n"}4. Monitoreo {"\n"}5. Cierre
          </Text>

          <Text style={styles.subtopicTitle}>6.3 Metodologías</Text>
          <Text style={styles.contentText}>
            • PMI {"\n"}• SCRUM {"\n"}• Agile {"\n"}• PRINCE2
          </Text>
        </View>

        {/* Sección de Videos */}
        <View ref={videosRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
          
          {[
            {title: 'Introducción a la administración', url: 'https://youtu.be/ZUUqDU2s33U'},
            {title: 'Proceso administrativo completo', url: 'https://youtu.be/FaaGEUcWjzc?list=PLeisD5SiojSd3Fis_eNLbYWE1ltAY4kuY'},
            {title: 'Toma de decisiones gerenciales', url: 'https://youtu.be/EY07a0nzr7Y'},
            {title: 'Planeación estratégica', url: 'https://youtu.be/5IK7wEnf60Y'},
            {title: 'Gestión de proyectos', url: 'https://youtu.be/QRwMZ56EzKM'}
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

export default TallerAdministracionScreen;