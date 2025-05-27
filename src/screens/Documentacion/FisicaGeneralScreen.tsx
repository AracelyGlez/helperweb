import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FisicaGeneralScreen = () => {
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
        <Text style={styles.topBarTitle}>Fisica General</Text>
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
          <Text style={styles.title}>Fisica General</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1hlhfDiFl4InwPJhaqCl68M1EpKUlqRhb/view?usp=sharing')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
         {/* Sección de Documentación */}
                <View ref={documentacionRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Documentación Completa</Text> 

            <Text style={styles.topicTitle}>1. Estática</Text>

            <Text style={styles.subtopicTitle}>1.1 Conceptos básicos y definiciones</Text>
            <Text style={styles.contentText}>
            1. Fuerza y vector fuerza.
            {"\n"}2. Punto de aplicación.
            {"\n"}3. Línea de acción.
            {"\n"}4. Sistema de fuerzas.
            {"\n"}5. Equilibrio estático.
            </Text>

            <Text style={styles.subtopicTitle}>1.2 Resultante de fuerzas coplanares</Text>
            <Text style={styles.contentText}>
            1. Suma de fuerzas concurrentes.
            {"\n"}2. Método del paralelogramo.
            {"\n"}3. Resultante de fuerzas paralelas.
            {"\n"}4. Composición de fuerzas.
            {"\n"}5. Resultante en el plano XY.
            </Text>

            <Text style={styles.subtopicTitle}>1.3 Componentes rectangulares de una fuerza</Text>
            <Text style={styles.contentText}>
            1. Descomposición en eje X.
            {"\n"}2. Descomposición en eje Y.
            {"\n"}3. Ángulo de inclinación.
            {"\n"}4. Vector unitario.
            {"\n"}5. Aplicación en análisis de estructuras.
            </Text>

            <Text style={styles.subtopicTitle}>1.4 Condiciones de equilibrio, primera Ley de Newton</Text>
            <Text style={styles.contentText}>
            1. Condición de fuerza neta cero.
            {"\n"}2. Sistema en reposo.
            {"\n"}3. Ley de inercia.
            {"\n"}4. Fuerzas equilibrantes.
            {"\n"}5. Aplicación en cuerpos estáticos.
            </Text>

            <Text style={styles.subtopicTitle}>1.5 Cuerpos rígidos y principio de transmisibilidad</Text>
            <Text style={styles.contentText}>
            1. Definición de cuerpo rígido.
            {"\n"}2. Transmisibilidad de fuerzas.
            {"\n"}3. Aplicación en vigas.
            {"\n"}4. Desplazamiento sin deformación.
            {"\n"}5. Equilibrio de cuerpos rígidos.
            </Text>

            <Text style={styles.subtopicTitle}>1.6 Momento de una fuerza respecto a un punto</Text>
            <Text style={styles.contentText}>
            1. Definición de momento.
            {"\n"}2. Momento con respecto al origen.
            {"\n"}3. Momento de fuerzas concurrentes.
            {"\n"}4. Uso de brazo de palanca.
            {"\n"}5. Aplicación en palancas.
            </Text>

            <Text style={styles.subtopicTitle}>1.7 Teorema de Varignon</Text>
            <Text style={styles.contentText}>
            1. Suma de momentos.
            {"\n"}2. Momento resultante de fuerzas.
            {"\n"}3. Aplicación en sistemas de fuerzas.
            {"\n"}4. Cálculo simplificado de momentos.
            {"\n"}5. Uso en problemas de equilibrio.
            </Text>

            <Text style={styles.topicTitle}>2. Dinámica de la partícula</Text>

            <Text style={styles.subtopicTitle}>2.1 Cinemática</Text>
            <Text style={styles.contentText}>
            1. Definición de trayectoria.
            {"\n"}2. Movimiento rectilíneo uniforme.
            {"\n"}3. Cálculo de velocidad.
            {"\n"}4. Aceleración constante.
            {"\n"}5. Gráficas de posición y tiempo.
            </Text>

            <Text style={styles.subtopicTitle}>2.2 Cinética</Text>
            <Text style={styles.contentText}>
            1. Segunda Ley de Newton.
            {"\n"}2. Fuerzas netas.
            {"\n"}3. Masa y aceleración.
            {"\n"}4. Fuerza de fricción.
            {"\n"}5. Aplicaciones prácticas.
            </Text>

            <Text style={styles.topicTitle}>3. Óptica</Text>

            <Text style={styles.subtopicTitle}>3.1 Óptica geométrica</Text>
            <Text style={styles.contentText}>
            1. Naturaleza de la luz.
            {"\n"}2. Velocidad de la luz en distintos medios.
            {"\n"}3. Ley de reflexión.
            {"\n"}4. Ley de refracción (Ley de Snell).
            {"\n"}5. Uso de espejos planos y cóncavos.
            </Text>

            <Text style={styles.subtopicTitle}>3.2 Estudio y aplicaciones de emisión láser</Text>
            <Text style={styles.contentText}>
            1. Principio de emisión estimulada.
            {"\n"}2. Tipos de láser.
            {"\n"}3. Aplicaciones médicas.
            {"\n"}4. Uso en telecomunicaciones.
            {"\n"}5. Láser en industria y ciencia.
            </Text>

            <Text style={styles.topicTitle}>4. Introducción a la Termodinámica</Text>

            <Text style={styles.subtopicTitle}>4.1 Definiciones</Text>
            <Text style={styles.contentText}>
            1. Sistema termodinámico.
            {"\n"}2. Estado y propiedad.
            {"\n"}3. Energía interna.
            {"\n"}4. Trabajo y calor.
            {"\n"}5. Proceso termodinámico.
            </Text>

            <Text style={styles.subtopicTitle}>4.2 Escalas de temperatura</Text>
            <Text style={styles.contentText}>
            1. Escala Celsius.
            {"\n"}2. Escala Fahrenheit.
            {"\n"}3. Escala Kelvin.
            {"\n"}4. Conversión entre escalas.
            {"\n"}5. Temperatura absoluta.
            </Text>

            <Text style={styles.subtopicTitle}>4.3 Capacidad calorífica</Text>
            <Text style={styles.contentText}>
            1. Capacidad calorífica a presión constante.
            {"\n"}2. Capacidad calorífica a volumen constante.
            {"\n"}3. Calor específico.
            {"\n"}4. Calor latente.
            {"\n"}5. Aplicaciones prácticas.
            </Text>

            <Text style={styles.subtopicTitle}>4.4 Leyes de la Termodinámica</Text>
            <Text style={styles.contentText}>
            1. Primera Ley (conservación de la energía).
            {"\n"}2. Segunda Ley (entropía).
            {"\n"}3. Tercera Ley (cero absoluto).
            {"\n"}4. Ley cero (equilibrio térmico).
            {"\n"}5. Aplicaciones en máquinas térmicas.
            </Text>

            <Text style={styles.topicTitle}>5. Electrostática</Text>

            <Text style={styles.subtopicTitle}>5.1 Definiciones</Text>
            <Text style={styles.contentText}>
            1. Carga eléctrica.
            {"\n"}2. Electrización.
            {"\n"}3. Ley de Coulomb.
            {"\n"}4. Campo eléctrico.
            {"\n"}5. Potencial eléctrico.
            </Text>

            <Text style={styles.subtopicTitle}>5.2 Sistemas de unidades</Text>
            <Text style={styles.contentText}>
            1. Coulomb (C).
            {"\n"}2. Newton (N).
            {"\n"}3. Volt (V).
            {"\n"}4. Farad (F).
            {"\n"}5. Sistema Internacional (SI).
            </Text>

            <Text style={styles.subtopicTitle}>5.3 Carga eléctrica y sus propiedades</Text>
            <Text style={styles.contentText}>
            1. Carga puntual.
            {"\n"}2. Conservación de la carga.
            {"\n"}3. Cuantización de la carga.
            {"\n"}4. Cargas iguales y opuestas.
            {"\n"}5. Interacción eléctrica.
            </Text>

            <Text style={styles.subtopicTitle}>5.4 Leyes de la electrostática</Text>
            <Text style={styles.contentText}>
            1. Ley de Coulomb.
            {"\n"}2. Ley de Gauss.
            {"\n"}3. Principio de superposición.
            {"\n"}4. Distribución de carga en conductores.
            {"\n"}5. Campo eléctrico en diferentes geometrías.
            </Text>

            <Text style={styles.subtopicTitle}>5.5 Campo eléctrico</Text>
            <Text style={styles.contentText}>
            1. Campo alrededor de una carga puntual.
            {"\n"}2. Líneas de campo eléctrico.
            {"\n"}3. Campo uniforme.
            {"\n"}4. Campo debido a un dipolo.
            {"\n"}5. Energía potencial eléctrica.
            </Text>

            <Text style={styles.subtopicTitle}>5.6 Cálculo de potencial eléctrico en diferentes configuraciones</Text>
            <Text style={styles.contentText}>
            1. Potencial de una carga puntual.
            {"\n"}2. Potencial de un sistema de cargas.
            {"\n"}3. Potencial en un dipolo eléctrico.
            {"\n"}4. Potencial de un campo uniforme.
            {"\n"}5. Potencial y energía.
            </Text>

            <Text style={styles.subtopicTitle}>5.7 Capacitores con dieléctrico</Text>
            <Text style={styles.contentText}>
            1. Definición de capacitor.
            {"\n"}2. Capacitor con aire.
            {"\n"}3. Dieléctricos comunes.
            {"\n"}4. Constante dieléctrica.
            {"\n"}5. Efecto del dieléctrico en la capacitancia.
            </Text>

            <Text style={styles.subtopicTitle}>5.8 Energía asociada a un campo eléctrico</Text>
            <Text style={styles.contentText}>
            1. Energía almacenada en un capacitor.
            {"\n"}2. Densidad de energía eléctrica.
            {"\n"}3. Trabajo eléctrico.
            {"\n"}4. Energía en campos no uniformes.
            {"\n"}5. Aplicaciones prácticas.
            </Text>

            <Text style={styles.subtopicTitle}>5.9 Capacitores en serie y paralelo</Text>
            <Text style={styles.contentText}>
            1. Capacitores en serie.
            {"\n"}2. Capacitores en paralelo.
            {"\n"}3. Cálculo de capacitancia equivalente.
            {"\n"}4. Carga y voltaje en circuitos.
            {"\n"}5. Aplicaciones en filtros y circuitos.
            </Text>

            <Text style={styles.topicTitle}>6. Electrodinámica</Text>

            <Text style={styles.subtopicTitle}>6.1 Definiciones de corriente, resistencia, resistividad, densidad de corriente y conductividad</Text>
            <Text style={styles.contentText}>
            1. Corriente eléctrica.
            {"\n"}2. Resistencia eléctrica.
            {"\n"}3. Resistividad.
            {"\n"}4. Densidad de corriente.
            {"\n"}5. Conductividad eléctrica.
            </Text>

            <Text style={styles.subtopicTitle}>6.2 Ley de Ohm</Text>
            <Text style={styles.contentText}>
            1. Relación voltaje-corriente.
            {"\n"}2. Resistencia constante.
            {"\n"}3. Aplicaciones prácticas.
            {"\n"}4. Circuitos resistivos.
            {"\n"}5. Variaciones con temperatura.
            </Text>

            <Text style={styles.subtopicTitle}>6.3 Potencia</Text>
            <Text style={styles.contentText}>
            1. Potencia eléctrica.
            {"\n"}2. Fórmulas de potencia.
            {"\n"}3. Energía consumida.
            {"\n"}4. Eficiencia energética.
            {"\n"}5. Potencia en circuitos resistivos.
            </Text>

            <Text style={styles.subtopicTitle}>6.4 Leyes de Kirchhoff</Text>
            <Text style={styles.contentText}>
            1. Ley de corrientes (nodo).
            {"\n"}2. Ley de voltajes (malla).
            {"\n"}3. Análisis de circuitos.
            {"\n"}4. Aplicaciones en circuitos complejos.
            {"\n"}5. Resolución de sistemas de ecuaciones.
            </Text>

            <Text style={styles.topicTitle}>7. Electromagnetismo</Text>

            <Text style={styles.subtopicTitle}>7.1 Definiciones</Text>
            <Text style={styles.contentText}>
            1. Campo magnético.
            {"\n"}2. Corriente eléctrica.
            {"\n"}3. Fuerza magnética.
            {"\n"}4. Flujo magnético.
            {"\n"}5. Inducción electromagnética.
            </Text>

            <Text style={styles.subtopicTitle}>7.2 Campo magnético terrestre</Text>
            <Text style={styles.contentText}>
            1. Origen del campo magnético terrestre.
            {"\n"}2. Magnetósfera.
            {"\n"}3. Uso en brújulas.
            {"\n"}4. Variaciones temporales.
            {"\n"}5. Influencia en comunicaciones.
            </Text>

            <Text style={styles.subtopicTitle}>7.3 Trayectoria de las cargas en movimiento dentro de un campo magnético</Text>
            <Text style={styles.contentText}>
            1. Fuerza de Lorentz.
            {"\n"}2. Movimiento circular de cargas.
            {"\n"}3. Movimiento helicoidal.
            {"\n"}4. Aplicación en ciclotrones.
            {"\n"}5. Efectos en conductores.
            </Text>

            <Text style={styles.subtopicTitle}>7.4 Fuerzas magnéticas entre corrientes</Text>
            <Text style={styles.contentText}>
            1. Fuerza entre conductores paralelos.
            {"\n"}2. Ley de Ampère.
            {"\n"}3. Campo magnético alrededor de un conductor.
            {"\n"}4. Interacción magnética.
            {"\n"}5. Aplicación en motores eléctricos.
            </Text>

            <Text style={styles.subtopicTitle}>7.5 Leyes de electromagnetismo</Text>
            <Text style={styles.contentText}>
            1. Ley de Faraday.
            {"\n"}2. Ley de Lenz.
            {"\n"}3. Ley de Ampère-Maxwell.
            {"\n"}4. Ley de Gauss para magnetismo.
            {"\n"}5. Aplicaciones en generación eléctrica.
            </Text>

            <Text style={styles.subtopicTitle}>7.6 Ley de Ampere</Text>
            <Text style={styles.contentText}>
            1. Circuito magnético.
            {"\n"}2. Campo alrededor de solenoides.
            {"\n"}3. Campo en conductores largos.
            {"\n"}4. Cálculo del campo magnético.
            {"\n"}5. Aplicaciones en electroimanes.
            </Text>

            <Text style={styles.subtopicTitle}>7.7 Inductancia magnética</Text>
            <Text style={styles.contentText}>
            1. Definición de inductancia.
            {"\n"}2. Inductores en circuitos.
            {"\n"}3. Energía almacenada en inductores.
            {"\n"}4. Coeficiente de acoplamiento.
            {"\n"}5. Aplicaciones en filtros y transformadores.
            </Text>

            <Text style={styles.subtopicTitle}>7.8 Energía asociada con un campo magnético</Text>
            <Text style={styles.contentText}>
            1. Energía en un inductor.
            {"\n"}2. Densidad de energía magnética.
            {"\n"}3. Trabajo realizado por campos magnéticos.
            {"\n"}4. Energía en sistemas electromagnéticos.
            {"\n"}5. Aplicaciones en almacenamiento de energía.
            </Text>

            <Text style={styles.subtopicTitle}>7.9 Densidad de energía magnética</Text>
            <Text style={styles.contentText}>
            1. Fórmula de densidad de energía.
            {"\n"}2. Campo magnético uniforme.
            {"\n"}3. Energía por unidad de volumen.
            {"\n"}4. Aplicación en materiales magnéticos.
            {"\n"}5. Medición experimental.
            </Text>

            <Text style={styles.subtopicTitle}>7.10 Aplicaciones</Text>
            <Text style={styles.contentText}>
            1. Motores eléctricos.
            {"\n"}2. Generadores eléctricos.
            {"\n"}3. Transformadores.
            {"\n"}4. Almacenamiento magnético de datos.
            {"\n"}5. Sistemas de resonancia magnética.
            </Text>




</View>
           {/* Sección de Videos */}
                <View ref={videosRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                  
                  {[
                    {title: '01. Física General - Análisis Dimensional', url: 'https://youtu.be/Mn2SP5A9E8E?list=PLspYgKxU81GYAn6PaYc-wDr8Jz6xbQr8e'},
                    {title: '02. Física General - Suma y descomposición de vectores', url: 'https://youtu.be/_9K5jC23l4U?list=PLspYgKxU81GYAn6PaYc-wDr8Jz6xbQr8e'},
                    {title: '03. Fuerza ', url: 'https://youtu.be/TSUlqWyYsMo?list=PLspYgKxU81GYAn6PaYc-wDr8Jz6xbQr8e'},
                    {title: '04. Calor', url: 'https://youtu.be/lmKcTQ0Rjmk?list=PLspYgKxU81GYAn6PaYc-wDr8Jz6xbQr8e'},

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
        
        export default FisicaGeneralScreen;



                  