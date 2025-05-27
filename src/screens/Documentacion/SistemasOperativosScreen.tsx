import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const SistemasOperativosScreen = () => {
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
        <Text style={styles.topBarTitle}>Sistemas Operativos</Text>
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
          <Text style={styles.title}>Sistemas Operativos.</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1lOjbGgbfz-etEcsR2pFE28Y_VQY1ER4Q/view?usp=sharing')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
         {/* Sección de Documentación */}
                <View ref={documentacionRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Documentación Completa</Text>

        <Text style={styles.topicTitle}>1. Introducción a los Sistemas Operativos</Text>

        <Text style={styles.subtopicTitle}>1.1 Definición y concepto</Text>
        <Text style={styles.contentText}>
        1. Qué es un sistema operativo.
        {"\n"}2. Diferencias entre software de sistema y de aplicación.
        {"\n"}3. Relación del sistema operativo con el hardware.
        {"\n"}4. Ejemplos de sistemas operativos modernos.
        {"\n"}5. Interfaz entre usuario y hardware.
        {"\n"}6. Linux como sistema operativo libre de propósito general.
        </Text>

        <Text style={styles.subtopicTitle}>1.2 Funciones y características</Text>
        <Text style={styles.contentText}>
        1. Gestión de procesos.
        {"\n"}2. Administración de memoria.
        {"\n"}3. Control de dispositivos de entrada/salida.
        {"\n"}4. Seguridad y protección.
        {"\n"}5. Gestión del sistema de archivos.
        {"\n"}6. Multitarea y multiprogramación.
        </Text>

        <Text style={styles.subtopicTitle}>1.3 Evolución histórica</Text>
        <Text style={styles.contentText}>
        1. Sistemas monoprogramados.
        {"\n"}2. Sistemas por lotes.
        {"\n"}3. Tiempo compartido y sistemas interactivos.
        {"\n"}4. Sistemas distribuidos.
        {"\n"}5. Sistemas móviles.
        {"\n"}6. Historia de UNIX y su influencia en otros sistemas.
        </Text>

        <Text style={styles.subtopicTitle}>1.4 Clasificación</Text>
        <Text style={styles.contentText}>
        1. Sistemas monousuario vs multiusuario.
        {"\n"}2. Sistemas centralizados vs distribuidos.
        {"\n"}3. Sistemas de tiempo real.
        {"\n"}4. Sistemas embebidos.
        {"\n"}5. Sistemas cliente-servidor.
        {"\n"}6. Windows, Linux y Android como ejemplos de diferentes clases.
        </Text>

        <Text style={styles.subtopicTitle}>1.5 Estructura: niveles o estratos de diseño</Text>
        <Text style={styles.contentText}>
        1. Estructura monolítica.
        {"\n"}2. Estructura jerárquica o por capas.
        {"\n"}3. Microkernel.
        {"\n"}4. Máquina virtual.
        {"\n"}5. Sistemas modulares.
        {"\n"}6. Comparación entre estructuras monolíticas y microkernel.
        </Text>

        <Text style={styles.subtopicTitle}>1.6 Núcleo</Text>
        <Text style={styles.contentText}>
        1. Definición de kernel.
        {"\n"}2. Funciones del núcleo.
        {"\n"}3. Diferencias entre kernel y shell.
        {"\n"}4. Kernel residente vs cargado dinámicamente.
        {"\n"}5. Kernel monolítico vs microkernel.
        {"\n"}6. El núcleo de Linux y sus componentes principales.
        </Text>

        <Text style={styles.topicTitle}>2. Administración de Procesos y del procesador</Text>

        <Text style={styles.subtopicTitle}>2.1 Concepto de proceso</Text>
        <Text style={styles.contentText}>
        1. Proceso como programa en ejecución.
        {"\n"}2. Contexto de ejecución de un proceso.
        {"\n"}3. Identificación y control de procesos (PID).
        {"\n"}4. Procesos vs programas.
        {"\n"}5. Recursos asignados a un proceso.
        {"\n"}6. Ejemplo: proceso de instalación de un programa.
        </Text>

        <Text style={styles.subtopicTitle}>2.2 Estados y transiciones de los procesos</Text>
        <Text style={styles.contentText}>
        1. Estados: nuevo, listo, ejecución, bloqueado, terminado.
        {"\n"}2. Diagrama de transición de estados.
        {"\n"}3. Cambio de estado por interrupciones.
        {"\n"}4. Bloqueos por espera de E/S.
        {"\n"}5. Procesos zombies y huérfanos.
        {"\n"}6. Transición de “listo” a “ejecución” por el planificador.
        </Text>

        <Text style={styles.subtopicTitle}>2.3 Procesos ligeros: Hilos o hebras</Text>
        <Text style={styles.contentText}>
        1. Definición de hilo.
        {"\n"}2. Diferencias entre proceso e hilo.
        {"\n"}3. Multihilo en aplicaciones concurrentes.
        {"\n"}4. Beneficios de los hilos frente a procesos completos.
        {"\n"}5. Comunicación entre hilos.
        {"\n"}6. Hilos en Java y su gestión por el sistema operativo.
        </Text>

        <Text style={styles.subtopicTitle}>2.4 Concurrencia y secuenciabilidad</Text>
        <Text style={styles.contentText}>
        1. Ejecución concurrente vs secuencial.
        {"\n"}2. Problemas de sincronización.
        {"\n"}3. Secciones críticas.
        {"\n"}4. Exclusión mutua.
        {"\n"}5. Condiciones de carrera.
        {"\n"}6. Implementación de semáforos para controlar concurrencia.
        </Text>

        <Text style={styles.subtopicTitle}>2.5 Niveles, objetivos y criterios de planificación</Text>
        <Text style={styles.contentText}>
        1. Planificación a corto, mediano y largo plazo.
        {"\n"}2. Objetivos: eficiencia, equidad, respuesta rápida.
        {"\n"}3. Criterios: tiempo de espera, tiempo de retorno.
        {"\n"}4. Carga de CPU y utilización.
        {"\n"}5. Tipos de planificadores.
        {"\n"}6. Comparación entre planificadores FIFO, SJF y Round Robin.
        </Text>

        <Text style={styles.subtopicTitle}>2.6 Técnicas de administración del planificador</Text>
        <Text style={styles.contentText}>
        1. Algoritmo FIFO (primero en entrar, primero en salir).
        {"\n"}2. Algoritmo Round Robin.
        {"\n"}3. Algoritmo por prioridad.
        {"\n"}4. Planificación por multicolas.
        {"\n"}5. Planificación basada en retroalimentación.
        {"\n"}6. Preempción y no preempción en planificación.
        </Text>

        <Text style={styles.topicTitle}>3. Administración de memoria</Text>

        <Text style={styles.subtopicTitle}>3.1 Política y filosofía</Text>
        <Text style={styles.contentText}>
        1. Objetivos de eficiencia y aprovechamiento.
        {"\n"}2. Asignación estática y dinámica.
        {"\n"}3. Carga continua vs segmentada.
        {"\n"}4. Reubicación de procesos en memoria.
        {"\n"}5. Fragmentación interna y externa.
        {"\n"}6. Políticas de reemplazo de páginas.
        </Text>

        <Text style={styles.subtopicTitle}>3.2 Memoria real</Text>
        <Text style={styles.contentText}>
        1. Organización física de la memoria principal.
        {"\n"}2. Asignación contigua de memoria.
        {"\n"}3. Particionamiento fijo y variable.
        {"\n"}4. Gestión de huecos de memoria.
        {"\n"}5. Técnicas de compactación.
        {"\n"}6. Tabla de asignación de memoria.
        </Text>

        <Text style={styles.subtopicTitle}>3.3 Organización de memoria virtual</Text>
        <Text style={styles.contentText}>
        1. Concepto de memoria virtual.
        {"\n"}2. Paginación y segmentación.
        {"\n"}3. Tabla de páginas.
        {"\n"}4. Espacio de direcciones lógico y físico.
        {"\n"}5. Swapping.
        {"\n"}6. Traducción de direcciones mediante MMU.
        </Text>

        <Text style={styles.subtopicTitle}>3.4 Administración de memoria virtual</Text>
        <Text style={styles.contentText}>
        1. Gestión de páginas en ejecución.
        {"\n"}2. Políticas de reemplazo (FIFO, LRU).
        {"\n"}3. Fallos de página.
        {"\n"}4. Memoria caché y buffers.
        {"\n"}5. Protección y compartición de memoria.
        {"\n"}6. Ejecución de programas más grandes que la RAM disponible.
        </Text>

        <Text style={styles.topicTitle}>4. Administración de entrada/salida</Text>

        <Text style={styles.subtopicTitle}>4.1 Dispositivos y manejadores de dispositivos</Text>
        <Text style={styles.contentText}>
        1. Tipos de dispositivos: bloque y carácter.
        {"\n"}2. Controladores de dispositivos.
        {"\n"}3. Manejadores en el kernel.
        {"\n"}4. Abstracción de hardware.
        {"\n"}5. Interfaz con dispositivos externos.
        {"\n"}6. Comunicación entre SO y disco duro.
        </Text>

        <Text style={styles.subtopicTitle}>4.2 Mecanismos y funciones de los manejadores de dispositivos</Text>
        <Text style={styles.contentText}>
        1. Inicialización del dispositivo.
        {"\n"}2. Lectura y escritura.
        {"\n"}3. Manejo de errores.
        {"\n"}4. Interrupciones.
        {"\n"}5. Buffering y caching.
        {"\n"}6. Cola de operaciones de entrada/salida.
        </Text>

        <Text style={styles.subtopicTitle}>4.3 Estructuras de datos para manejo de dispositivos</Text>
        <Text style={styles.contentText}>
        1. Tablas de dispositivos.
        {"\n"}2. Tablas de entrada/salida.
        {"\n"}3. Buffers de entrada/salida.
        {"\n"}4. Punteros de control.
        {"\n"}5. Descriptores de dispositivos.
        {"\n"}6. Ejemplo de estructura para administrar un disco SSD.
        </Text>

        <Text style={styles.subtopicTitle}>4.4 Operaciones de Entrada /salida</Text>
        <Text style={styles.contentText}>
        1. Entrada/salida programada.
        {"\n"}2. Entrada/salida con interrupciones.
        {"\n"}3. Acceso directo a memoria (DMA).
        {"\n"}4. Sincronización de E/S con CPU.
        {"\n"}5. Jerarquía de velocidad de dispositivos.
        {"\n"}6. Transferencia de archivos por dispositivos externos.
        </Text>

        <Text style={styles.topicTitle}>5. Sistemas de archivos</Text>

        <Text style={styles.subtopicTitle}>5.1 Concepto</Text>
        <Text style={styles.contentText}>
        1. Qué es un sistema de archivos.
        {"\n"}2. Relación con almacenamiento secundario.
        {"\n"}3. Archivo como unidad lógica.
        {"\n"}4. Tipos de archivos: texto, binarios, ejecutables.
        {"\n"}5. Montaje de sistemas de archivos.
        {"\n"}6. Ejemplo: sistema de archivos EXT4.
        </Text>

        <Text style={styles.subtopicTitle}>5.2 Noción de archivo real y virtual</Text>
        <Text style={styles.contentText}>
        1. Archivo físico en disco.
        {"\n"}2. Archivos virtuales en RAM.
        {"\n"}3. Archivos temporales.
        {"\n"}4. Archivo como abstracción de flujo de datos.
        {"\n"}5. Vínculos simbólicos.
        {"\n"}6. Representación de archivos de dispositivos.
        </Text>
        <Text style={styles.subtopicTitle}>5.3 Componentes de un sistema de archivos</Text>
        <Text style={styles.contentText}>
        1. Directorios y subdirectorios.
        {"\n"}2. Tabla de asignación de archivos (FAT).
        {"\n"}3. Inodos en sistemas tipo UNIX.
        {"\n"}4. Metadatos de archivos (fecha, permisos).
        {"\n"}5. Bloques de datos.
        {"\n"}6. Controladores y módulos de sistema de archivos.
        </Text>

        <Text style={styles.subtopicTitle}>5.4 Organización lógica y física</Text>
        <Text style={styles.contentText}>
        1. Organización en bloques y sectores.
        {"\n"}2. Organización contigua.
        {"\n"}3. Organización enlazada.
        {"\n"}4. Organización indexada.
        {"\n"}5. Fragmentación y optimización.
        {"\n"}6. Sistema de archivos jerárquico.
        </Text>

        <Text style={styles.subtopicTitle}>5.5 Mecanismos de acceso a los archivos</Text>
        <Text style={styles.contentText}>
        1. Acceso secuencial.
        {"\n"}2. Acceso directo o aleatorio.
        {"\n"}3. Acceso indexado.
        {"\n"}4. Bloqueos y permisos.
        {"\n"}5. Control de concurrencia.
        {"\n"}6. Acceso mediante API de sistema operativo.
        </Text>

        <Text style={styles.subtopicTitle}>5.6 Manejo de espacio en memoria secundaria</Text>
        <Text style={styles.contentText}>
        1. Administración de espacio libre.
        {"\n"}2. Bitmaps para gestión de bloques.
        {"\n"}3. Asignación dinámica.
        {"\n"}4. Fragmentación interna y externa.
        {"\n"}5. Compactación y reubicación.
        {"\n"}6. Gestión de espacio en discos SSD y HDD.
        </Text>

        <Text style={styles.subtopicTitle}>5.7 Modelo jerárquico</Text>
        <Text style={styles.contentText}>
        1. Estructura en árbol de directorios.
        {"\n"}2. Directorio raíz.
        {"\n"}3. Directorios padre e hijo.
        {"\n"}4. Navegación mediante rutas.
        {"\n"}5. Enlaces duros y simbólicos.
        {"\n"}6. Separación de espacios de nombres.
        </Text>

        <Text style={styles.subtopicTitle}>5.8 Mecanismos de recuperación en caso de falla</Text>
        <Text style={styles.contentText}>
        1. Copias de seguridad (backups).
        {"\n"}2. Journaling.
        {"\n"}3. Recuperación tras caída del sistema.
        {"\n"}4. Comprobación y reparación de sistema de archivos.
        {"\n"}5. Sistemas RAID para tolerancia a fallos.
        {"\n"}6. Herramientas como fsck en Linux.
        </Text>

        <Text style={styles.topicTitle}>6. Protección y seguridad</Text>

        <Text style={styles.subtopicTitle}>6.1 Concepto y objetivos de protección y seguridad</Text>
        <Text style={styles.contentText}>
        1. Confidencialidad de datos.
        {"\n"}2. Integridad de la información.
        {"\n"}3. Disponibilidad del sistema.
        {"\n"}4. Autenticación de usuarios.
        {"\n"}5. Control de acceso.
        {"\n"}6. Prevención de accesos no autorizados.
        </Text>

        <Text style={styles.subtopicTitle}>6.2 Clasificación aplicada a la seguridad</Text>
        <Text style={styles.contentText}>
        1. Seguridad física.
        {"\n"}2. Seguridad lógica.
        {"\n"}3. Seguridad administrativa.
        {"\n"}4. Seguridad en red.
        {"\n"}5. Seguridad en aplicaciones.
        {"\n"}6. Seguridad basada en políticas.
        </Text>

        <Text style={styles.subtopicTitle}>6.3 Funciones del sistema de protección</Text>
        <Text style={styles.contentText}>
        1. Definición de permisos.
        {"\n"}2. Autorización y autenticación.
        {"\n"}3. Auditoría y registro de eventos.
        {"\n"}4. Control de acceso a recursos.
        {"\n"}5. Mecanismos de bloqueo.
        {"\n"}6. Prevención de escalamiento de privilegios.
        </Text>

        <Text style={styles.subtopicTitle}>6.4 Implantación de matrices de acceso</Text>
        <Text style={styles.contentText}>
        1. Definición de matrices de control de acceso.
        {"\n"}2. Usuarios y permisos en matrices.
        {"\n"}3. Ejemplo de matriz con permisos R, W, X.
        {"\n"}4. Actualización dinámica de matrices.
        {"\n"}5. Ventajas y desventajas.
        {"\n"}6. Implementación en sistemas operativos modernos.
        </Text>

        <Text style={styles.subtopicTitle}>6.5 Protección basada en el lenguaje</Text>
        <Text style={styles.contentText}>
        1. Uso de lenguajes seguros.
        {"\n"}2. Prevención de buffer overflow.
        {"\n"}3. Manejo seguro de memoria.
        {"\n"}4. Tipos y restricciones en el lenguaje.
        {"\n"}5. Ejecución segura de código.
        {"\n"}6. Ejemplos en Java y .NET.
        </Text>

        <Text style={styles.subtopicTitle}>6.6 Validación y amenazas al sistema</Text>
        <Text style={styles.contentText}>
        1. Tipos de ataques: virus, malware, phishing.
        {"\n"}2. Técnicas de validación de entrada.
        {"\n"}3. Prevención de ataques de inyección.
        {"\n"}4. Análisis de vulnerabilidades.
        {"\n"}5. Actualizaciones y parches.
        {"\n"}6. Herramientas de monitoreo y detección.
        </Text>

        <Text style={styles.subtopicTitle}>6.7 Cifrado</Text>
        <Text style={styles.contentText}>
        1. Conceptos de cifrado simétrico y asimétrico.
        {"\n"}2. Algoritmos populares: AES, RSA.
        {"\n"}3. Uso de certificados digitales.
        {"\n"}4. Protocolos seguros: SSL/TLS.
        {"\n"}5. Firma digital.
        {"\n"}6. Aplicación del cifrado en comunicaciones y almacenamiento.
        </Text>


        



  </View>
           {/* Sección de Videos */}
                <View ref={videosRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                  
                  {[
                    {title: '1. SISTEMAS OPERATIVOS', url: 'https://youtu.be/fsuroRYmagw'},
                    {title: '2. Así funciona tu Sistema Operativo', url: 'https://youtu.be/666Pc5Yp5hM'},
                    {title: '3.Introducción a los sistemas operativos', url: 'https://youtu.be/vldM-3PYAmo?list=PLTd5ehIj0goMTSK7RRAPBF4wP-Nj5DRvT'},
                    {title: '4. Estructura del sistema operativo', url: 'https://youtu.be/ZvP0NlTMRh8?list=PLhU2otMFcLuBLeHGkBsU-zDNtwCCxDxRr'},
                    {title: '5. Planificación del procesador ', url: 'https://youtu.be/BiG3yyeNBsM?list=PLhU2otMFcLuBLeHGkBsU-zDNtwCCxDxRr'},
                    {title: '6. Administración de memoria', url: 'https://youtu.be/v1vwIy77yno?list=PLhU2otMFcLuBLeHGkBsU-zDNtwCCxDxRr'},
                    {title: '7. Interfaz de Sistema de Archivos ', url: 'https://youtu.be/DGdPCx5p-Bs?list=PLhU2otMFcLuBLeHGkBsU-zDNtwCCxDxRr'}
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
        
        export default SistemasOperativosScreen;
