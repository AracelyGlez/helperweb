//vista de Fundamentos de Programacion.
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const FundamentosProgramacionScreen = () => {
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
        <Text style={styles.topBarTitle}>Fundamentos de Programación</Text>
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
          <Text style={styles.title}>Fundamentos de Programación</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1xHskGqHj8KWkqiWP0w32V7wxq5BrbFWo/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Documentación */}
        <View ref={documentacionRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Documentación Completa</Text>
          
          {/* 1. Diseño Algorítmico */}
          <Text style={styles.topicTitle}>1. Diseño Algorítmico</Text>
          
          <Text style={styles.subtopicTitle}>1.1 Conceptos básicos</Text>
          <Text style={styles.contentText}>
            • Algoritmo: Secuencia lógica de pasos para resolver un problema.
            {"\n"}• Propiedades:
            {"\n"}  o Precisión: Instrucciones claras y no ambiguas.
            {"\n"}  o Finitud: Debe terminar en algún momento.
            {"\n"}  o Entrada/Salida: Datos de entrada y resultados definidos.
            {"\n"}  o Efectividad: Cada paso debe ser ejecutable.
          </Text>
          
          <Text style={styles.subtopicTitle}>1.2 Representación de algoritmos</Text>
          <Text style={styles.contentText}>
            • Gráfica (Diagramas de flujo):
            {"\n"}  o Símbolos estandarizados (óvalo = inicio/fin, rectángulo = proceso, rombo = decisión).
            {"\n"}  o Ejemplo: Diagrama para sumar dos números.
            {"\n"}• Pseudocódigo:
            {"\n"}  o Lenguaje informal similar a código pero sin sintaxis estricta.
            {"\n"}  o Ejemplo:
            {"\n"}    Algoritmo Suma
            {"\n"}      Leer A, B
            {"\n"}      Resultado ← A + B
            {"\n"}      Escribir Resultado
            {"\n"}    FinAlgoritmo
          </Text>

          <Text style={styles.subtopicTitle}>1.3 Diseño de algoritmos</Text>
          <Text style={styles.contentText}>
            • Enfoques:
            {"\n"}  o Top-Down: Dividir el problema en subproblemas más pequeños.
            {"\n"}  o Bottom-Up: Resolver componentes básicos primero.
            {"\n"}• Técnicas:
            {"\n"}  o Divide y vencerás: Ejemplo: Merge Sort.
            {"\n"}  o Programación dinámica: Optimización de subproblemas superpuestos.
          </Text>

          <Text style={styles.subtopicTitle}>1.4 Diseño de funciones</Text>
          <Text style={styles.contentText}>
            • Funciones: Bloques de código reutilizables con un propósito específico.
            {"\n"}• Componentes:
            {"\n"}  o Nombre: Identificador único.
            {"\n"}  o Parámetros: Datos de entrada.
            {"\n"}  o Retorno: Valor devuelto (opcional).
            {"\n"}• Ejemplo en pseudocódigo:
            {"\n"}    Función Sumar(a, b)
            {"\n"}      Retornar a + b
            {"\n"}    FinFunción
          </Text>

          {/* 2. Introducción a la Programación */}
          <Text style={styles.topicTitle}>2. Introducción a la Programación</Text>
          
          <Text style={styles.subtopicTitle}>2.1 Conceptos básicos</Text>
          <Text style={styles.contentText}>
            • Programa: Conjunto de instrucciones ejecutables por una computadora.
            {"\n"}• Lenguaje de programación: Sintaxis y semántica para comunicar instrucciones (ej. Python, C++, Java).
          </Text>
          
          <Text style={styles.subtopicTitle}>2.2 Características de un lenguaje</Text>
          <Text style={styles.contentText}>
            • Tipado: Estático (C++) vs. Dinámico (Python).
            {"\n"}• Paradigmas: Imperativo, orientado a objetos, funcional.
            {"\n"}• Portabilidad: Código que puede ejecutarse en diferentes sistemas.
          </Text>

          <Text style={styles.subtopicTitle}>2.3 Estructura básica de un programa</Text>
          <Text style={styles.contentText}>
            • Esqueleto general (ejemplo en C++):
            {"\n"}    #include {"<iostream>"} // Bibliotecas
            {"\n"}    using namespace std;
            {"\n"}
            {"\n"}    int main() {"{"} // Función principal
            {"\n"}      cout {"<<"} "Hola Mundo"; // Salida
            {"\n"}      return 0;
            {"\n"}{"}"}
          </Text>

          <Text style={styles.subtopicTitle}>2.4 Elementos del lenguaje</Text>
          <Text style={styles.contentText}>
            • Tipos de datos: int, float, char, bool.
            {"\n"}• Literales: Valores fijos (5, 'A', 3.14).
            {"\n"}• Variables: Espacios de memoria con nombre (int edad = 20;).
            {"\n"}• Operadores:
            {"\n"}  o Aritméticos: +, -, *, /.
            {"\n"}  o Lógicos: &&, ||, !.
            {"\n"}• Salida de datos: printf() (C), System.out.println() (Java).
          </Text>

          <Text style={styles.subtopicTitle}>2.5 Traducción de un programa</Text>
          <Text style={styles.contentText}>
            1. Compilación: Conversión a código máquina (ej. gcc programa.c).
            {"\n"}2. Enlace: Integración de bibliotecas.
            {"\n"}3. Ejecución: Ejecutable (./a.out).
            {"\n"}4. Errores:
            {"\n"}  o Sintácticos: Falta ;.
            {"\n"}  o Lógicos: Programa funciona pero da resultados incorrectos.
          </Text>

          {/* 3. Control de Flujo */}
          <Text style={styles.topicTitle}>3. Control de Flujo</Text>
          
          <Text style={styles.subtopicTitle}>3.1 Estructuras secuenciales</Text>
          <Text style={styles.contentText}>
            • Ejecución línea por línea:
            {"\n"}    a = 5
            {"\n"}    b = 10
            {"\n"}    suma = a + b  # Secuencia lineal
          </Text>
          
          <Text style={styles.subtopicTitle}>3.2 Estructuras selectivas</Text>
          <Text style={styles.contentText}>
            • Simple (if):
            {"\n"}    if edad mayor= 18:
            {"\n"}        print("Mayor de edad")
            {"\n"}• Doble (if-else):
            {"\n"}    if nota mayor= 60:
            {"\n"}        print("Aprobado")
            {"\n"}    else:
            {"\n"}        print("Reprobado")
            {"\n"}• Múltiple (switch-case):
            {"\n"}    switch(dia) {"{"}
            {"\n"}      case 1: cout {"<<"} "Lunes"; break;
            {"\n"}      default: cout {"<<"} "Día inválido";
            {"\n"}{"}"}
          </Text>

          <Text style={styles.subtopicTitle}>3.3 Estructuras iterativas</Text>
          <Text style={styles.contentText}>
            • Mientras (while):
            {"\n"}    while contador {"<"} 5:
            {"\n"}        print(contador)
            {"\n"}        contador += 1
            {"\n"}• Hasta (do-while):
            {"\n"}    do {"{"}
            {"\n"}      cout {"<<"} contador;
            {"\n"}      contador++;
            {"\n"}    {"}"} while (contador {"<"} 5);
            {"\n"}• Desde (for):
            {"\n"}    for i in range(0, 5):
            {"\n"}        print(i)
          </Text>

          {/* 4. Organización de datos */}
          <Text style={styles.topicTitle}>4. Organización de datos</Text>
          
          <Text style={styles.subtopicTitle}>4.1 Arreglos unidimensionales</Text>
          <Text style={styles.contentText}>
            • Concepto: Lista de elementos del mismo tipo.
            {"\n"}• Operaciones:
            {"\n"}  o Acceso: arreglo[0] (primer elemento).
            {"\n"}  o Búsqueda: Recorrer hasta encontrar un valor.
            {"\n"}• Aplicaciones: Almacenar notas de estudiantes.
          </Text>
          
          <Text style={styles.subtopicTitle}>4.2 Arreglos multidimensionales</Text>
          <Text style={styles.contentText}>
            • Matrices: Arreglo bidimensional (filas × columnas).
            {"\n"}    matriz = [ [1, 2], [3, 4] ]
            {"\n"}• Operaciones: Suma de matrices, transpuesta.
          </Text>

          <Text style={styles.subtopicTitle}>4.3 Estructuras o registros</Text>
          <Text style={styles.contentText}>
            • Ejemplo en C:
            {"\n"}    struct Alumno {"{"}
            {"\n"}      char nombre[50];
            {"\n"}      int edad;
            {"\n"}{"}"};
          </Text>

          {/* 5. Modularidad */}
          <Text style={styles.topicTitle}>5. Modularidad</Text>
          
          <Text style={styles.subtopicTitle}>5.1 Declaración y uso de módulos</Text>
          <Text style={styles.contentText}>
            • Funciones: Agrupan código reutilizable.
            {"\n"}    def saludar(nombre):
            {"\n"}        print("Hola", nombre)
          </Text>
          
          <Text style={styles.subtopicTitle}>5.2 Paso de parámetros</Text>
          <Text style={styles.contentText}>
            • Por valor: Copia del dato (no modifica el original).
            {"\n"}• Por referencia: Dirección de memoria (sí modifica el original).
          </Text>

          <Text style={styles.subtopicTitle}>5.3 Implementación</Text>
          <Text style={styles.contentText}>
            • Ejemplo modular en Python:
            {"\n"}    # Módulo matemáticas.py
            {"\n"}    def cuadrado(n):
            {"\n"}        return n ** 2
            {"\n"}
            {"\n"}    # Programa principal
            {"\n"}    import matematicas
            {"\n"}    print(matematicas.cuadrado(5))  # Salida: 25
          </Text>

          <Text style={styles.conclusionText}>
            Este temario cubre desde la construcción de algoritmos hasta la implementación de programas estructurados y modulares.
          </Text>
        </View>

        {/* Sección de Videos */}
        <View ref={videosRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
          
          {[
            {title: 'Introducción a la programación', url: 'https://youtu.be/CIIf3nqzWdM?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Conceptos básicos de algoritmos', url: 'https://youtu.be/6pDEKzwhQ-g?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Diagramas de flujo', url: 'https://youtu.be/Kirl27do8JY?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Pseudocódigo', url: 'https://youtu.be/GKNuTQ7M1fQ?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Estructuras de control', url: 'https://youtu.be/nUm1g2GFiYM?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Arreglos y matrices', url: 'https://youtu.be/HYugxv0SqoM?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Funciones y modularidad', url: 'https://youtu.be/VjEQSqedwH8?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Ejercicios resueltos', url: 'https://youtu.be/RFpfW5i99zs?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Programación en Python', url: 'https://youtu.be/9Gf_HrNkmwY?list=PLg9145ptuAijMe24EzQDT6K5zr6b30Gdj'},
            {title: 'Programación en C++', url: 'https://youtu.be/AEiRa5xZaZw?list=PLVGpDy6YzKnLSRzr0KtMFTPGvhok7jddm'},
            {title: 'Depuración de código', url: 'https://youtu.be/FvibfpSVFBw?list=PLAzlSdU-KYwXllXcUCW-BylQZemcDV798'},
            {title: 'Buenas prácticas', url: 'https://youtu.be/f5ofAydgHFU?list=PLHpcPwRNDklKQxB_V8XGwcPSiHSWYb9SQ'}
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
  conclusionText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#7f8c8d',
    marginTop: 20,
    textAlign: 'center',
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

export default FundamentosProgramacionScreen;