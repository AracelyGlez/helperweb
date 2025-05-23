//Fundamentos de inveestigacion:
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FundamentosInvestigacionScreen = () => {
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
        <Text style={styles.topBarTitle}>Fundamentos de Investigación</Text>
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
          <Text style={styles.title}>Fundamentos de Investigación</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1lMxK4wpWXQ6YCBbppchHEi-LpTtMvxrh/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Documentación */}
        <View ref={documentacionRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Documentación Completa</Text>
          
          {/* 1. Conceptos básicos */}
          <Text style={styles.topicTitle}>1. Conceptos básicos de investigación</Text>
          
          <Text style={styles.subtopicTitle}>1.1 Relación hombre-conocimiento-realidad</Text>
          <Text style={styles.contentText}>
            <Text style={styles.bold}>Realidad:</Text> Todo lo que existe independientemente de nuestra percepción.
            {"\n"}<Text style={styles.bold}>Conocimiento:</Text> Construcción mental para interpretar la realidad.
          </Text>
          
          <Text style={styles.subtopicTitle}>1.1.2 Proceso de adquisición del conocimiento</Text>
          <Text style={styles.contentText}>
            • Observación {"\n"}• Formulación de preguntas {"\n"}• Investigación {"\n"}• Interpretación {"\n"}• Validación
          </Text>

          <Text style={styles.subtopicTitle}>1.1.3 Tipos de conocimiento</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>Empírico:</Text> Basado en experiencia {"\n"}
            • <Text style={styles.bold}>Científico:</Text> Sistematizado y verificable {"\n"}
            • <Text style={styles.bold}>Filosófico:</Text> Reflexivo y crítico {"\n"}
            • <Text style={styles.bold}>Religioso:</Text> Basado en creencias {"\n"}
            • <Text style={styles.bold}>Técnico:</Text> Aplicado a problemas prácticos
          </Text>

          <Text style={styles.subtopicTitle}>1.2 Proceso de construcción de la ciencia</Text>
          <Text style={styles.contentText}>
            <Text style={styles.bold}>Características:</Text> Sistemática, Objetiva, Verificable, Metódica
            {"\n\n"}<Text style={styles.bold}>Proceso:</Text>
            {"\n"}1. Observación {"\n"}2. Hipótesis {"\n"}3. Experimentación {"\n"}4. Análisis {"\n"}5. Teorías {"\n"}6. Difusión
          </Text>

          <Text style={styles.subtopicTitle}>1.3 Clasificación de las ciencias</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>Formales:</Text> Matemáticas, Lógica {"\n"}
            • <Text style={styles.bold}>Naturales:</Text> Física, Química, Biología {"\n"}
            • <Text style={styles.bold}>Sociales:</Text> Sociología, Psicología {"\n"}
            • <Text style={styles.bold}>Aplicadas:</Text> Ingeniería, Medicina
          </Text>

          <Text style={styles.subtopicTitle}>1.4 Métodos de investigación</Text>
          <Text style={styles.contentText}>
            <Text style={styles.bold}>Método científico:</Text>
            {"\n"}1. Observación {"\n"}2. Problema {"\n"}3. Hipótesis {"\n"}4. Experimentación {"\n"}5. Análisis {"\n"}6. Conclusión {"\n"}7. Comunicación
          </Text>

          <Text style={styles.subtopicTitle}>1.5 La investigación y el investigador</Text>
          <Text style={styles.contentText}>
            <Text style={styles.bold}>Características del investigador:</Text>
            {"\n"}• Curiosidad {"\n"}• Objetividad {"\n"}• Rigor {"\n"}• Ética
            {"\n\n"}<Text style={styles.bold}>Obstáculos:</Text>
            {"\n"}• Limitaciones de tiempo/recursos {"\n"}• Sesgos {"\n"}• Dificultades metodológicas
          </Text>

          {/* 2. Herramientas de comunicación */}
          <Text style={styles.topicTitle}>2. Herramientas de comunicación</Text>
          
          <Text style={styles.subtopicTitle}>2.1 Comunicación oral vs escrita</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>Oral:</Text> Inmediata, interpersonal, efímera {"\n"}
            • <Text style={styles.bold}>Escrita:</Text> Reflexiva, precisa, permanente
          </Text>
          
          <Text style={styles.subtopicTitle}>2.2 Técnicas de redacción</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>Coherencia:</Text> Orden lógico {"\n"}
            • <Text style={styles.bold}>Concordancia:</Text> Corrección gramatical
          </Text>

          <Text style={styles.subtopicTitle}>2.3 Normas ortográficas</Text>
          <Text style={styles.contentText}>
            Uso correcto de mayúsculas, acentos, signos de puntuación
          </Text>

          <Text style={styles.subtopicTitle}>2.4 Textos académicos</Text>
          <Text style={styles.contentText}>
            • Monografías {"\n"}• Ensayos {"\n"}• Reseñas {"\n"}• Reportes {"\n"}• Tesis {"\n"}• Protocolos
          </Text>

          {/* 3. Desarrollo profesional */}
          <Text style={styles.topicTitle}>3. Desarrollo profesional</Text>
          
          <Text style={styles.subtopicTitle}>3.1 Historia y estado actual</Text>
          <Text style={styles.contentText}>
            Análisis del origen, evolución y situación actual de la profesión
          </Text>
          
          <Text style={styles.subtopicTitle}>3.2 Ámbitos profesionales</Text>
          <Text style={styles.contentText}>
            Sector público, privado, academia, investigación
          </Text>

          <Text style={styles.subtopicTitle}>3.3 Prácticas emergentes</Text>
          <Text style={styles.contentText}>
            Innovaciones y tendencias tecnológicas en la profesión
          </Text>

          {/* 4. Proceso de investigación */}
          <Text style={styles.topicTitle}>4. Proceso de investigación documental</Text>
          
          <Text style={styles.subtopicTitle}>4.1 Fuentes de investigación</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>Primarias:</Text> Documentos originales {"\n"}
            • <Text style={styles.bold}>Secundarias:</Text> Interpretaciones {"\n"}
            • <Text style={styles.bold}>Terciarias:</Text> Resúmenes, índices
          </Text>
          
          <Text style={styles.subtopicTitle}>4.2 Instrumentos</Text>
          <Text style={styles.contentText}>
            Fichas bibliográficas, cuestionarios, entrevistas, bases de datos
          </Text>

          <Text style={styles.subtopicTitle}>4.3 Estructura de investigación</Text>
          <Text style={styles.contentText}>
            1. Elección del tema {"\n"}2. Objetivos {"\n"}3. Búsqueda de información {"\n"}4. Esquema de trabajo {"\n"}5. Fichas de trabajo {"\n"}6. Aparato crítico {"\n"}7. Borrador {"\n"}8. Correcciones {"\n"}9. Informe final
          </Text>
        </View>

        {/* Sección de Videos */}
        <View ref={videosRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
          
          {[
            {title: 'Introducción a la investigación', url: 'https://youtu.be/ZyNyH_n0Hwg?list=PLgRrUKp-fLrv-otctuPts01AIJQ5a0ir1'},
            {title: 'Métodos de investigación', url: 'https://youtu.be/0aJqxL334MU?list=PL5lN9R6IzRN3pElFrcW0zx3nQNJHb3Hnw'},
            {title: 'Tipos de conocimiento', url: 'https://youtu.be/YmvN6nc3WO4'},
            {title: 'Redacción académica', url: 'https://youtu.be/Wp7Wetk5bVU'},
            {title: 'Normas APA', url: 'https://youtu.be/dmbqR2tmbvI'},
            {title: 'Elaboración de tesis', url: 'https://youtu.be/lvMq4qbMDfI'},
            {title: 'Búsqueda de información', url: 'https://youtu.be/T8x5AeRMp_k'},
            {title: 'Ética en investigación', url: 'https://youtu.be/Rn2ruMv8Qz8'},
            {title: 'Presentación de resultados', url: 'https://youtu.be/vTBjPqzZfsc'}
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

export default FundamentosInvestigacionScreen;