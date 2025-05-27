import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const EstructuraDatosScreen = () => {
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
        <Text style={styles.topBarTitle}>Estructura de Datos.</Text>
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
          <Text style={styles.title}>Estructura de datos</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/100WIrh5_uict4WH0D3-zA2ehT8rUtu2z/view?usp=sharing')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
         {/* Sección de Documentación */}
                <View ref={documentacionRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Documentación Completa</Text>

                  {/* 1. Introducción a las estructuras de datos */}
            <Text style={styles.topicTitle}>1. Introducción a las estructuras de datos</Text>

            <Text style={styles.subtopicTitle}>1.1 Clasificación de las estructuras de datos</Text>
            <Text style={styles.contentText}>
            • Lineales: listas, pilas, colas.
            {"\n"}• No lineales: árboles, grafos.
            {"\n"}• Estáticas: tamaño fijo como arrays.
            {"\n"}• Dinámicas: tamaño variable como listas enlazadas.
            {"\n"}• Jerárquicas: estructuras tipo árbol.
            </Text>

            <Text style={styles.subtopicTitle}>1.2 Tipos de datos abstractos (TDA)</Text>
            <Text style={styles.contentText}>
            • Lista: colección ordenada de elementos.
            {"\n"}• Pila (stack): acceso LIFO.
            {"\n"}• Cola (queue): acceso FIFO.
            {"\n"}• Árbol binario: nodos con máximo 2 hijos.
            {"\n"}• Tabla hash: búsqueda rápida por clave.
            </Text>

            <Text style={styles.subtopicTitle}>1.3 Ejemplos de TDA’s</Text>
            <Text style={styles.contentText}>
            • Stack para deshacer acciones en un editor.
            {"\n"}• Queue para gestionar tareas en impresora.
            {"\n"}• Lista para almacenar nombres de usuarios.
            {"\n"}• Árbol de decisión en IA.
            {"\n"}• HashMap para almacenar credenciales de acceso.
            </Text>

            <Text style={styles.subtopicTitle}>1.4 Manejo de memoria</Text>
            <Text style={styles.contentText}>
            • Memoria se reserva para almacenar estructuras.
            {"\n"}• Uso de punteros en C/C++.
            {"\n"}• Gestión de memoria en tiempo de ejecución.
            {"\n"}• Desbordamientos por uso incorrecto.
            {"\n"}• Importancia del recolector de basura en lenguajes como Java.
            </Text>

            <Text style={styles.subtopicTitle}>1.4.1 Memoria estática</Text>
            <Text style={styles.contentText}>
            • Array de tamaño fijo en C.
            {"\n"}• Reservada en tiempo de compilación.
            {"\n"}• Acceso a elementos.
            </Text>

            <Text style={styles.subtopicTitle}>1.4.2 Memoria dinámica</Text>
            <Text style={styles.contentText}>
            • Uso de malloc/free en C.
            {"\n"}• LinkedList en Java/Python.
            {"\n"}• Permite crecimiento flexible.
            {"\n"}• Se gestión en tiempo de ejecución.
            </Text>

            <Text style={styles.subtopicTitle}>1.5 Análisis de algoritmos</Text>
            <Text style={styles.contentText}>
            • Estudio de rendimiento de algoritmos.
            {"\n"}• Basado en entrada de datos (n).
            {"\n"}• Uso de notación Big O.
            {"\n"}• Ej: búsqueda secuencial vs. binaria.
            {"\n"}•  optimización de software.
            </Text>

            <Text style={styles.subtopicTitle}>1.5.1 Complejidad en el tiempo</Text>
            <Text style={styles.contentText}>
            • O(1): acceso a array por índice.
            {"\n"}• recorrido de lista.
            {"\n"}• búsqueda binaria.
            {"\n"}• algoritmos de ordenamiento burbuja.
            {"\n"}• algoritmos recursivos exponenciales.
            </Text>

            <Text style={styles.subtopicTitle}>1.5.2 Complejidad en el espacio</Text>
            <Text style={styles.contentText}>
            • Uso de memoria según estructura.
            {"\n"}• Recursión consume más espacio por pila.
            {"\n"}• Variables auxiliares afectan el espacio.
            {"\n"}• Arrays ocupan más que listas enlazadas.
            </Text>

            <Text style={styles.subtopicTitle}>1.5.3 Eficiencia de los algoritmos</Text>
            <Text style={styles.contentText}>
            • Algoritmo eficiente: rápido y con bajo uso de memoria.
            {"\n"}• Ordenamiento rápido (quick sort) vs. burbuja.
            {"\n"}• Trade-off: velocidad vs. complejidad.
            {"\n"}• Hashing eficiente para búsquedas.
            {"\n"}• Elección depende del contexto del problema.
            </Text>
{/* 2. Recursividad */}
            <Text style={styles.topicTitle}>2. Recursividad</Text>

            <Text style={styles.subtopicTitle}>2.1 Definición</Text>
            <Text style={styles.contentText}>
            • Técnica donde una función se llama a sí misma.
            {"\n"}• Cada llamada reduce el problema.
            {"\n"}• Necesita un caso base para detenerse.
            {"\n"}• Ejemplo simple: factorial de un número.
            {"\n"}• Útil para problemas que se dividen en subproblemas similares.
            </Text>

            <Text style={styles.subtopicTitle}>2.2 Procedimientos recursivos</Text>
            <Text style={styles.contentText}>
            • Factorial: n! = n × (n−1)! con caso base 0! = 1.
            {"\n"}• Fibonacci: F(n) = F(n−1) + F(n−2).
            {"\n"}• Búsqueda binaria en forma recursiva.
            {"\n"}• Recorrido de árboles (preorden, inorden, postorden).
            {"\n"}• Torres de Hanoi: mover discos entre varillas.
            </Text>

            <Text style={styles.subtopicTitle}>2.3 Ejemplos de casos recursivos</Text>
            <Text style={styles.contentText}>
            • Suma de elementos en una lista: sum(lista) = lista[0] + sum(lista[1:]).
            {"\n"}• Invertir una cadena: reverse(s) = reverse(s[1:]) + s[0].
            {"\n"}• Potencia: pow(x, n) = x * pow(x, n−1).
            {"\n"}• Contar dígitos de un número.
            {"\n"}• Calcular el máximo común divisor (MCD) usando Euclides.
            </Text>

            {/* 3. Estructuras lineales */}
            <Text style={styles.topicTitle}>3. Estructuras lineales</Text>

            {/* Pilas */}
            <Text style={styles.subtopicTitle}>3.1 Pilas</Text>

            <Text style={styles.subtopicTitle}>3.1.1 Representación en memoria</Text>
            <Text style={styles.contentText}>
            • Uso de array para simular pila en lenguajes como C.
            {"\n"}• Implementación con listas enlazadas en Python.
            {"\n"}• Reservar espacio dinámicamente con punteros.
            {"\n"}• Último elemento insertado apunta a NULL.
            {"\n"}• En Java, puede representarse con Stack.
            </Text>

            <Text style={styles.subtopicTitle}>3.1.2 Operaciones básicas</Text>
            <Text style={styles.contentText}>
            • Apilar un nuevo carácter al evaluar expresiones matemáticas.
            {"\n"}• Desapilar cuando se encuentra un paréntesis cerrado.
            {"\n"}• Consultar el tope al validar expresiones correctamente anidadas.
            {"\n"}• Verificar si la pila está vacía antes de desapilar.
            {"\n"}• Reinicializar pila para analizar múltiples expresiones.
            </Text>

            <Text style={styles.subtopicTitle}>3.1.3 Aplicaciones</Text>
            <Text style={styles.contentText}>
            • Implementación del botón "deshacer" en un editor de texto.
            {"\n"}• Reversión de cadenas, como invertir un nombre.
            {"\n"}• Evaluación de expresiones postfijas (notación polaca inversa).
            {"\n"}• Navegación web: historial de páginas visitadas.
            {"\n"}• Backtracking en algoritmos como el laberinto o sudoku.
            </Text>

            {/* Colas */}
            <Text style={styles.subtopicTitle}>3.2 Colas</Text>

            <Text style={styles.subtopicTitle}>3.2.1 Representación en memoria</Text>
            <Text style={styles.contentText}>
            • Implementación con arrays fijos, con índices de frente y final.
            {"\n"}• Implementación dinámica con punteros.
            {"\n"}• Front apunta al primer elemento, rear al último.
            {"\n"}• Uso de estructuras circulares para reutilizar espacio.
            {"\n"}• Representación en alto nivel con clases en Python o Java.
            </Text>

            <Text style={styles.subtopicTitle}>3.2.2 Operaciones básicas</Text>
            <Text style={styles.contentText}>
            • Encolar tareas en una impresora.
            {"\n"}• Desencolar clientes en una fila bancaria.
            {"\n"}• Inspeccionar el frente sin eliminar el dato.
            {"\n"}• Verificar si la cola está llena en una implementación estática.
            {"\n"}• Reiniciar cola para nuevo conjunto de datos.
            </Text>

            <Text style={styles.subtopicTitle}>3.2.3 Tipos de colas: simples, circulares y bicolas</Text>
            <Text style={styles.contentText}>
            • Cola simple: atención de procesos uno a uno.
            {"\n"}• Cola circular: control de recursos como memoria compartida.
            {"\n"}• Bicola: permitir inserción y eliminación en ambos extremos.
            {"\n"}• Uso de deque en Python para implementar bicolas.
            {"\n"}• Sistema de turnos en el que puede entrar o salir por cualquier extremo.
            </Text>

            <Text style={styles.subtopicTitle}>3.2.4 Aplicaciones</Text>
            <Text style={styles.contentText}>
            • Simulación de colas en aeropuertos o bancos.
            {"\n"}• Gestión de procesos en un sistema operativo.
            {"\n"}• Algoritmos de recorrido por amplitud en grafos (BFS).
            {"\n"}• Servidores web gestionando solicitudes de usuarios.
            {"\n"}• Control de tareas en una línea de ensamblaje.
            </Text>

            {/* Listas */}
            <Text style={styles.subtopicTitle}>3.3 Listas</Text>

            <Text style={styles.subtopicTitle}>3.3.1 Operaciones básicas</Text>
            <Text style={styles.contentText}>
            • Insertar nodo al principio para representar pila.
            {"\n"}• Insertar nodo al final para simular cola.
            {"\n"}• Eliminar nodo específico por valor (ej. borrar un contacto).
            {"\n"}• Buscar elemento en una lista de productos.
            {"\n"}• Recorrer lista para imprimir elementos uno por uno.
            </Text>

            <Text style={styles.subtopicTitle}>3.3.2 Tipos de listas: simplemente enlazadas, doblemente enlazadas y circulares</Text>
            <Text style={styles.contentText}>
            • Lista simplemente enlazada para tareas de prioridad baja.
            {"\n"}• Lista doblemente enlazada para listas de reproducción multimedia.
            {"\n"}• Lista circular para un sistema de navegación cíclico.
            {"\n"}• Usar puntero anterior y siguiente en listas dobles.
            {"\n"}• Referencia al nodo inicial desde el último en listas circulares.
            </Text>

            <Text style={styles.subtopicTitle}>3.3.3 Aplicaciones</Text>
            <Text style={styles.contentText}>
            • Sistema de navegación entre diapositivas.
            {"\n"}• Implementación de listas de tareas con prioridades.
            {"\n"}• Gestión de memoria en sistemas operativos.
            {"\n"}• Manejo de historial de cambios en un editor.
            {"\n"}• Control de turnos en videojuegos por turnos.
            </Text>

    {/* 4. Estructuras no lineales */}
            <Text style={styles.topicTitle}>4. Estructuras no lineales</Text>

            <Text style={styles.subtopicTitle}>4.1 Árboles</Text>

            <Text style={styles.subtopicTitle}>4.1.1 Clasificación de árboles</Text>
            <Text style={styles.contentText}>
            • Árbol binario: cada nodo tiene hasta dos hijos (ej. árbol de búsqueda).
            {"\n"}• Árbol AVL: mantiene balance para búsquedas eficientes.
            {"\n"}• Árbol B: útil en sistemas de bases de datos y archivos.
            {"\n"}• Árbol N-ario: cada nodo puede tener múltiples hijos (usado en jerarquías).
            {"\n"}• Árbol de expresión: representa expresiones matemáticas como (+ (* 2 3) 5).
            </Text>

            <Text style={styles.subtopicTitle}>4.1.2 Operaciones básicas sobre árboles</Text>
            <Text style={styles.contentText}>
            • Inserción en árbol binario de búsqueda: insertar un número respetando el orden.
            {"\n"}• Eliminación de nodo: eliminar un nodo hoja o uno con un hijo.
            {"\n"}• Recorrido en preorden para imprimir todos los nombres de archivos.
            {"\n"}• Búsqueda de un valor en árbol binario (por ejemplo, un número en una agenda).
            {"\n"}• Calcular la altura del árbol para determinar su balance o profundidad.
            </Text>

                        {/* 5. Métodos de ordenamiento */}
            <Text style={styles.topicTitle}>5. Métodos de ordenamiento</Text>

            <Text style={styles.subtopicTitle}>5.1 Algoritmos de ordenamiento internos</Text>

            <Text style={styles.subtopicTitle}>5.1.1 Burbuja</Text>
            <Text style={styles.contentText}>
            • Ordenar listas pequeñas por comparación.
            {"\n"}• Fácil implementación para estudiantes.
            {"\n"}• Uso en casos donde datos casi ordenados.
            {"\n"}• Ejemplo: ordenar calificaciones.
            {"\n"}• No eficiente para grandes conjuntos.
            </Text>

            <Text style={styles.subtopicTitle}>5.1.2 Quicksort</Text>
            <Text style={styles.contentText}>
            • Divide y vencerás: divide lista en sublistas.
            {"\n"}• Uso en bases de datos y sistemas.
            {"\n"}• Rápido en promedio.
            {"\n"}• Ejemplo: ordenar registros de clientes.
            {"\n"}• Selección del pivote impacta rendimiento.
            </Text>

            <Text style={styles.subtopicTitle}>5.1.3 ShellSort</Text>
            <Text style={styles.contentText}>
            • Mejora al método de inserción.
            {"\n"}• Ordena elementos separados por intervalos.
            {"\n"}• Útil para listas medianas.
            {"\n"}• Ejemplo: ordenar inventarios de tiendas.
            {"\n"}• Combina eficiencia y simplicidad.
            </Text>

            <Text style={styles.subtopicTitle}>5.1.4 Radix</Text>
            <Text style={styles.contentText}>
            • Ordena números por dígitos (base).
            {"\n"}• Ideal para datos enteros grandes.
            {"\n"}• Uso en ordenamiento de identificadores.
            {"\n"}• Ejemplo: ordenar números telefónicos.
            {"\n"}• No basado en comparaciones directas.
            </Text>

            <Text style={styles.subtopicTitle}>5.2 Algoritmos de ordenamiento externos</Text>

            <Text style={styles.subtopicTitle}>5.2.1 Intercalación</Text>
            <Text style={styles.contentText}>
            • Combina archivos ordenados.
            {"\n"}• Uso en manejo de grandes bases de datos.
            {"\n"}• Ejemplo: unir listas de clientes de dos sucursales.
            {"\n"}• Reduce tiempo al fusionar archivos ordenados.
            {"\n"}• Importante en sistemas de archivos externos.
            </Text>

            <Text style={styles.subtopicTitle}>5.2.2 Mezcla Directa</Text>
            <Text style={styles.contentText}>
            • Ordena mediante combinaciones sucesivas.
            {"\n"}• Similar a merge sort pero para datos externos.
            {"\n"}• Ejemplo: ordenar registros bancarios masivos.
            {"\n"}• Optimiza acceso a disco.
            {"\n"}• Se usa en aplicaciones de big data.
            </Text>

            <Text style={styles.subtopicTitle}>5.2.3 Mezcla Natural</Text>
            <Text style={styles.contentText}>
            • Detecta secuencias ordenadas naturales en datos.
            {"\n"}• Fusiona segmentos ordenados para mayor eficiencia.
            {"\n"}• Ejemplo: ordenar logs de eventos cronológicos.
            {"\n"}• Reduce operaciones innecesarias.
            {"\n"}• Aplicado en procesamiento de archivos grandes.
            </Text>
            {/* 6. Métodos de búsqueda */}
            <Text style={styles.topicTitle}>6. Métodos de búsqueda</Text>

            <Text style={styles.subtopicTitle}>6.1 Búsqueda secuencial</Text>
            <Text style={styles.contentText}>
            • Buscar un contacto en una lista desordenada.
            {"\n"}• Recorrer elementos uno por uno hasta encontrar el objetivo.
            {"\n"}• Útil en listas pequeñas o no ordenadas.
            {"\n"}• Ejemplo: encontrar una palabra en un texto corto.
            {"\n"}• Sencillo pero poco eficiente para datos grandes.
            </Text>

            <Text style={styles.subtopicTitle}>6.2 Búsqueda binaria</Text>
            <Text style={styles.contentText}>
            • Buscar un número en una lista ordenada.
            {"\n"}• Divide la lista en mitades para reducir búsqueda.
            {"\n"}• Requiere que los datos estén previamente ordenados.
            {"\n"}• Ejemplo: buscar un libro por código en catálogo ordenado.
            {"\n"}• Mucho más eficiente que la búsqueda secuencial.
            </Text>

            <Text style={styles.subtopicTitle}>6.3 Búsqueda por funciones de HASH</Text>
            <Text style={styles.contentText}>
            • Uso de tablas hash para acceso directo.
            {"\n"}• Almacenar y buscar usuarios por su ID.
            {"\n"}• Minimiza colisiones con buenas funciones hash.
            {"\n"}• Ejemplo: base de datos de contraseñas.
            {"\n"}• Muy eficiente para grandes volúmenes de datos.
            </Text>


          </View>
           {/* Sección de Videos */}
                <View ref={videosRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                  
                  {[
                    {title: '1. Qué son las estructuras de datos', url: 'https://youtu.be/oQ0WkIdr73E?list=PLTd5ehIj0goMTSK7RRAPBF4wP-Nj5DRvT'},
                    {title: '2. Listas enlazadas: Teoría', url: 'https://youtu.be/0NzAFk1CwaQ?list=PLTd5ehIj0goMTSK7RRAPBF4wP-Nj5DRvT'},
                    {title: '3. Listas enlazadas en C', url: 'https://youtu.be/vldM-3PYAmo?list=PLTd5ehIj0goMTSK7RRAPBF4wP-Nj5DRvT'},
                    {title: '4. Listas enlazadas en Java', url: 'https://youtu.be/TjlPQPRfWFk?list=PLTd5ehIj0goMTSK7RRAPBF4wP-Nj5DRvT'},
                    {title: '5. Colas: teoría', url: 'https://youtu.be/6i2f6k5PPjs?list=PLTd5ehIj0goMTSK7RRAPBF4wP-Nj5DRvT'},
                    {title: '6. Colas en C', url: 'https://youtu.be/nicbZo7sI_w?list=PLTd5ehIj0goMTSK7RRAPBF4wP-Nj5DRvT'},
                    {title: '7. Colas en Java', url: 'https://youtu.be/sltfRuQkycU?list=PLTd5ehIj0goMTSK7RRAPBF4wP-Nj5DRvT'}
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
        
        export default EstructuraDatosScreen;
