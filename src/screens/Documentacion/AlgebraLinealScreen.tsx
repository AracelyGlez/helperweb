import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AlgebraLinealScreen = () => {
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
        <Text style={styles.topBarTitle}>Álgebra Lineal</Text>
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
          <Text style={styles.title}>Álgebra Lineal</Text>
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
        <Text style={styles.topicTitle}>1. Números complejos</Text>

        <Text style={styles.subtopicTitle}>1.1 Definición y origen de los números complejos</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Introducción histórica: resolución de raíces negativas.
        {"\n"}2. Representación algebraica de un número complejo (a + bi).
        {"\n"}3. Interpretación geométrica en el plano complejo.
        {"\n"}4. Aplicaciones en física y electrónica.
        {"\n"}5. Comparación entre números reales y complejos.
        </Text>

        <Text style={styles.subtopicTitle}>1.2 Operaciones fundamentales con números complejos</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Suma y resta de números complejos.
        {"\n"}2. Multiplicación de números complejos.
        {"\n"}3. División de números complejos usando conjugados.
        {"\n"}4. Conjugado de un número complejo y sus propiedades.
        {"\n"}5. Verificación de propiedades como distributividad o conmutatividad.
        </Text>

        <Text style={styles.subtopicTitle}>1.3 Potencias de “i”, módulo o valor absoluto de un número complejo</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Cálculo de i elevado a potencias enteras.
        {"\n"}2. Patrón cíclico de las potencias de i (i¹, i², i³, i⁴...).
        {"\n"}3. Cálculo del módulo de un número complejo.
        {"\n"}4. Propiedades del módulo en operaciones.
        {"\n"}5. Interpretación geométrica del módulo como distancia al origen.
        </Text>

        <Text style={styles.subtopicTitle}>1.4 Forma polar y exponencial de un número complejo</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Conversión de forma binómica a polar.
        {"\n"}2. Cálculo del módulo y argumento (ángulo) de un número complejo.
        {"\n"}3. Representación en forma polar: r(cosθ + i·senθ).
        {"\n"}5. Aplicaciones prácticas de la forma polar en ingeniería.
        </Text>

        <Text style={styles.subtopicTitle}>1.5 Teorema de De Moivre, potencias y extracción de raíces</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Aplicación de De Moivre.

        </Text>

        <Text style={styles.topicTitle}>2. Matrices y determinantes</Text>

        <Text style={styles.subtopicTitle}>2.1 Definición de matriz, notación y orden</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Qué es una matriz y cómo se representa.
        {"\n"}2. Notación de matrices en forma general A = [aᵢⱼ].
        {"\n"}3. Determinación del orden de una matriz (m x n).
        {"\n"}4. Matrices como arreglos rectangulares de números.
        {"\n"}5. Introducción a aplicaciones de matrices en sistemas lineales.
        </Text>

        <Text style={styles.subtopicTitle}>2.2 Operaciones con matrices</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Suma y resta de matrices.
        {"\n"}2. Multiplicación de una matriz por un escalar.
        {"\n"}3. Multiplicación de matrices (producto matricial).
        {"\n"}4. Propiedades algebraicas de las operaciones.
        {"\n"}5. Matriz transpuesta.
        </Text>

        <Text style={styles.subtopicTitle}>2.3 Clasificación de las matrices</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Matriz cuadrada.
        {"\n"}2. Matriz diagonal, escalar e identidad.
        {"\n"}3. Matriz simétrica y antisimétrica.
        {"\n"}4. Matriz nula.
        {"\n"}5. Matriz triangular superior e inferior.
        </Text>

        <Text style={styles.subtopicTitle}>2.4 Transformaciones elementales por renglón. Escalonamiento de una matriz. Núcleo y rango de una matriz</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Intercambio de renglones.
        {"\n"}2. Multiplicación de un renglón por una constante.
        {"\n"}3. Suma de múltiplos de un renglón a otro.
        {"\n"}4. Matriz escalonada y escalonada reducida.
        {"\n"}5. Cálculo del rango y del núcleo de una matriz.
        </Text>

        <Text style={styles.subtopicTitle}>2.5 Cálculo de la inversa de una matriz</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Condición de existencia de la inversa (det ≠ 0).
        {"\n"}2. Cálculo por método de Gauss-Jordan.
        {"\n"}3. Verificación con la matriz identidad.
        {"\n"}4. Inversa de matrices 2x2 y 3x3.
        {"\n"}5. Propiedades de la matriz inversa.
        </Text>

        <Text style={styles.subtopicTitle}>2.6 Definición de determinante de una matriz</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Determinante de una matriz 2x2.
        {"\n"}2. Determinante de una matriz 3x3 (regla de Sarrus).
        {"\n"}3. Determinante por cofactores.
        {"\n"}4. Interpretación geométrica del determinante.
        {"\n"}5. Determinantes de matrices superiores a 3x3.
        </Text>

        <Text style={styles.subtopicTitle}>2.7 Propiedades de los determinantes</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Determinante de la transpuesta es igual al original.
        {"\n"}2. Cambio de signo al intercambiar renglones.
        {"\n"}3. Factor común de un renglón o columna.
        {"\n"}4. Determinante de un producto de matrices.
        {"\n"}5. Si dos renglones son iguales, el determinante es cero.
        </Text>

        <Text style={styles.subtopicTitle}>2.8 Inversa de una matriz cuadrada a través de la adjunta</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Cálculo de la matriz de cofactores.
        {"\n"}2. Cálculo de la matriz adjunta (transpuesta de cofactores).
        {"\n"}3. División entre el determinante.
        {"\n"}4. Inversa con fórmula: A⁻¹ = adj(A)/det(A).
        {"\n"}5. Comparación entre método de Gauss y adjunta.
        </Text>

        <Text style={styles.subtopicTitle}>2.9 Aplicación de matrices y determinantes</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Solución de sistemas de ecuaciones lineales.
        {"\n"}2. Análisis en redes eléctricas.
        {"\n"}3. Modelado económico con matrices.
        {"\n"}4. Transformaciones lineales en geometría.
        {"\n"}5. Cálculo de áreas y volúmenes en álgebra lineal.
        </Text>

        <Text style={styles.topicTitle}>3. Sistemas de ecuaciones lineales</Text>

        <Text style={styles.subtopicTitle}>3.1 Definición de sistemas de ecuaciones lineales</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Sistemas con varias incógnitas.
        {"\n"}2. Representación matricial del sistema.
        {"\n"}3. Solución de sistemas con métodos algebraicos.
        {"\n"}4. Sistemas homogéneos y no homogéneos.
        {"\n"}5. Aplicaciones en ciencias e ingeniería.
        </Text>

        <Text style={styles.subtopicTitle}>3.2 Clasificación de los sistemas de ecuaciones lineales y tipos de solución</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Sistemas compatibles e incompatibles.
        {"\n"}2. Sistemas determinados e indeterminados.
        {"\n"}3. Tipos de soluciones: única, infinitas o ninguna.
        {"\n"}4. Discusión de sistemas mediante el rango.
        {"\n"}5. Sistema homogéneo con solución trivial y no trivial.
        </Text>

        <Text style={styles.subtopicTitle}>3.3 Interpretación geométrica de las soluciones</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Intersección de rectas en R².
        {"\n"}2. Intersección de planos en R³.
        {"\n"}3. Visualización de soluciones como puntos o líneas.
        {"\n"}4. Sistema sin solución → planos paralelos.
        {"\n"}5. Sistema con infinitas soluciones → planos coincidentes.
        </Text>

        <Text style={styles.subtopicTitle}>3.4 Métodos de solución: Gauss, Gauss-Jordan, inversa de matriz, regla de Cramer</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Método de eliminación de Gauss.
        {"\n"}2. Gauss-Jordan para reducción completa.
        {"\n"}3. Solución mediante matriz inversa: AX = B.
        {"\n"}4. Regla de Cramer con determinantes.
        {"\n"}5. Comparación de métodos en eficiencia y aplicabilidad.
        </Text>

        <Text style={styles.subtopicTitle}>3.5 Aplicaciones</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Optimización lineal.
        {"\n"}2. Análisis de estructuras en ingeniería civil.
        {"\n"}3. Modelos económicos con restricciones.
        {"\n"}4. Sistemas eléctricos y electrónicos.
        {"\n"}5. Balanceo de reacciones químicas.
        </Text>

        <Text style={styles.topicTitle}>4. Espacios vectoriales</Text>

        <Text style={styles.subtopicTitle}>4.1 Definición de espacio vectorial</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Conjuntos que cumplen con axiomas de espacio vectorial.
        {"\n"}2. Ejemplos: ℝⁿ, polinomios, matrices.
        {"\n"}3. Operaciones internas (suma y producto por escalar).
        {"\n"}4. Criterios para verificar si un conjunto es espacio vectorial.
        {"\n"}5. Espacios vectoriales sobre ℝ y ℂ.
        </Text>

        <Text style={styles.subtopicTitle}>4.2 Definición de subespacio vectorial y sus propiedades</Text>
        <Text style={styles.contentText}>
        Ejemplos de temas que se estudian:
        {"\n"}1. Verificación de un subespacio.
        {"\n"}2. Propiedades: cerrado bajo suma y producto escalar.
        {"\n"}3. Subespacio generado por vectores.

            </Text>




 </View>
           {/* Sección de Videos */}
                <View ref={videosRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                  
                  {[
                    {title: '01. Sistemas de ecuaciones lineales, 2 variables', url: 'https://youtu.be/Kzq-05kQVgc'},
                    {title: '02. Ecuaciones de 3 variables Análisis Completo ', url: 'https://youtu.be/zX3nj-QZ9gA?list=PL9SnRnlzoyX32lX7zNawatnGQP7IPLIi5'},
                    {title: '03. Álgebra lineal ', url: 'https://youtu.be/cp-6QPcTZeA?list=PL9SnRnlzoyX32lX7zNawatnGQP7IPLIi5'},
                    {title: '04. Álgebra Lineal - Método de Gauss Jordan', url: 'https://youtu.be/7L9YojcJmz8?list=PL9SnRnlzoyX32lX7zNawatnGQP7IPLIi5'},

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
        
        export default AlgebraLinealScreen;



                  