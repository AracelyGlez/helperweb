//Taller de etica documentacionn
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TallerEticaScreen = () => {
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
        <Text style={styles.topBarTitle}>Taller de Ética</Text>
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
          <Text style={styles.title}>Taller de Ética</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1em055buoke9waLC30d7t5ne9AqMCmaLK/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Documentación */}
        <View ref={documentacionRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Documentación Completa</Text>
          
          {/* 1. El sentido de aprender sobre Ética */}
          <Text style={styles.topicTitle}>1. El sentido de aprender sobre Ética</Text>
          
          <Text style={styles.subtopicTitle}>1.1 Generalidades sobre Ética</Text>
          <Text style={styles.contentText}>
            <Text style={styles.bold}>Desarrollo histórico:</Text>
            {"\n"}• Sócrates: La virtud como conocimiento
            {"\n"}• Platón: La idea del bien supremo
            {"\n"}• Aristóteles: Felicidad mediante la virtud
            {"\n"}• Epicuro: Placer como ausencia de dolor
            {"\n\n"}<Text style={styles.bold}>Concepto y objeto de estudio:</Text>
            {"\n"}Estudia la moral y analiza los actos humanos según el bien y el mal.
            {"\n\n"}<Text style={styles.bold}>Ramas de la ética:</Text>
            {"\n"}• Metaética: Analiza significados de juicios morales
            {"\n"}• Ética normativa: Propone normas de conducta
            {"\n"}• Ética aplicada: Dilemas en medicina, tecnología, etc.
          </Text>
          
          <Text style={styles.subtopicTitle}>1.2 Valores éticos</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>Respeto y responsabilidad:</Text> Reconocer dignidad y asumir consecuencias
            {"\n"}• <Text style={styles.bold}>Dignidad:</Text> Valor inherente de todo ser humano
            {"\n"}• <Text style={styles.bold}>Respeto a la vida, diversidad y naturaleza:</Text> Protección ambiental y aceptación de diferencias
            {"\n"}• <Text style={styles.bold}>Libertad:</Text> Decidir sin afectar derechos ajenos
            {"\n"}• <Text style={styles.bold}>Amor:</Text> Propio, hacia otros y patria
            {"\n"}• <Text style={styles.bold}>Gratitud, perdón y redención:</Text> Agradecer, perdonar y corregir
            {"\n"}• <Text style={styles.bold}>Equidad, empatía, solidaridad:</Text> Trato justo, ponerse en lugar del otro, apoyo mutuo
            {"\n"}• <Text style={styles.bold}>Verdad:</Text> Coherencia entre decir y actuar
            {"\n"}• <Text style={styles.bold}>Justicia:</Text> Dar a cada quien lo que merece
            {"\n"}• <Text style={styles.bold}>Servicio:</Text> Ayudar desinteresadamente
            {"\n"}• <Text style={styles.bold}>Trabajo:</Text> Esfuerzo por el bien común
            {"\n"}• <Text style={styles.bold}>Compromiso y honestidad:</Text> Cumplir deberes con sinceridad
          </Text>

          {/* 2. El sentido sociocultural de la Ética */}
          <Text style={styles.topicTitle}>2. El sentido sociocultural de la Ética</Text>
          
          <Text style={styles.subtopicTitle}>2.1 Comportamiento ético</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>En la vida personal y social:</Text> Construir una vida digna
            {"\n"}• <Text style={styles.bold}>En lo académico:</Text> Honestidad al estudiar e investigar
            {"\n"}• <Text style={styles.bold}>En la ciudadanía:</Text> Participación ética en lo público
            {"\n"}• <Text style={styles.bold}>En la comunidad:</Text> Colaboración y solidaridad
          </Text>
          
          <Text style={styles.subtopicTitle}>2.2 Juicio moral y juicio ético</Text>
          <Text style={styles.contentText}>
            • <Text style={styles.bold}>Moral:</Text> Reacción espontánea ante lo correcto/incorrecto
            {"\n"}• <Text style={styles.bold}>Ética:</Text> Análisis razonado y fundamentado
          </Text>

          <Text style={styles.subtopicTitle}>2.3 Axiología</Text>
          <Text style={styles.contentText}>
            Ciencia que estudia los valores y su jerarquización
          </Text>

          <Text style={styles.subtopicTitle}>2.4 Virtudes</Text>
          <Text style={styles.contentText}>
            Prudencia, templanza, fortaleza y justicia
          </Text>

          <Text style={styles.subtopicTitle}>2.5 Derechos Humanos</Text>
          <Text style={styles.contentText}>
            Principios que garantizan libertad, dignidad e igualdad para todos
          </Text>

          {/* 3. Ética en el ejercicio de la profesión */}
          <Text style={styles.topicTitle}>3. Ética en el ejercicio de la profesión</Text>
          
          <Text style={styles.subtopicTitle}>3.1 Ética en la ciencia y tecnología</Text>
          <Text style={styles.contentText}>
            La investigación debe tener límites éticos y buscar el bien común
          </Text>
          
          <Text style={styles.subtopicTitle}>3.2 Ética en la tecnología</Text>
          <Text style={styles.contentText}>
            • Tecnoética y bioética analizan impactos tecnológicos
            {"\n"}• El tecnólogo debe actuar con responsabilidad y respeto a la dignidad humana
          </Text>

          <Text style={styles.subtopicTitle}>3.3 Deontología</Text>
          <Text style={styles.contentText}>
            Conjunto de deberes que rigen el actuar profesional
          </Text>

          <Text style={styles.subtopicTitle}>3.4 Códigos de Ética profesional</Text>
          <Text style={styles.contentText}>
            Normas específicas para cada profesión que guían la conducta
          </Text>

          <Text style={styles.subtopicTitle}>3.5 Dilemas éticos profesionales</Text>
          <Text style={styles.contentText}>
            Situaciones donde chocan valores y hay que decidir correctamente
          </Text>

          {/* 4. La Ética en las instituciones y organizaciones */}
          <Text style={styles.topicTitle}>4. La Ética en las instituciones y organizaciones</Text>
          
          <Text style={styles.subtopicTitle}>4.1 Derechos humanos laborales</Text>
          <Text style={styles.contentText}>
            Condiciones justas, seguridad y trato digno para trabajadores
          </Text>
          
          <Text style={styles.subtopicTitle}>4.2 Responsabilidad social</Text>
          <Text style={styles.contentText}>
            Compromiso de empresas con el entorno y sociedad
          </Text>

          <Text style={styles.subtopicTitle}>4.3 Ética empresarial</Text>
          <Text style={styles.contentText}>
            Actuar con transparencia, justicia y respeto en la empresa
          </Text>

          <Text style={styles.subtopicTitle}>4.4 Liderazgo ético</Text>
          <Text style={styles.contentText}>
            Dirigir con integridad, respeto y ejemplo
          </Text>

          <Text style={styles.subtopicTitle}>4.5 Toma de decisiones éticas</Text>
          <Text style={styles.contentText}>
            Considerar consecuencias, principios y valores al decidir
          </Text>

          <Text style={styles.subtopicTitle}>4.6 Cultura organizacional ética</Text>
          <Text style={styles.contentText}>
            Ambiente laboral que promueve valores, respeto y justicia
          </Text>
        </View>

        {/* Sección de Videos */}
        <View ref={videosRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
          
          {[
            {title: 'Introducción a la Ética', url: 'https://youtu.be/8QYyw4R68v0'},
            {title: 'Valores éticos fundamentales', url: 'https://youtu.be/mANHc3Q3HV0'},
            {title: 'Ética en la sociedad actual', url: 'https://youtu.be/HrSqFa81RWo'},
            {title: 'Dilemas éticos profesionales', url: 'https://youtu.be/HbtoFjXUlZc'},
            {title: 'Responsabilidad social', url: 'https://youtu.be/sQ_DWG34UOE'},
            {title: 'Liderazgo ético', url: 'https://youtu.be/KtMOhLEtB_o'},
            {title: 'Deontología profesional', url: 'https://youtu.be/IJ5q4KIS1nk'},
            {title: 'Códigos de ética', url: 'https://youtu.be/f_rCw6g1Hbs'}
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

export default TallerEticaScreen;