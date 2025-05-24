// Calculo Integral
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const PooScreen = () => {
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
                <Text style={styles.topBarTitle}>Programacón Orientada a Objetos</Text>
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
                    <Text style={styles.title}>Programación Orientada a Objetos</Text>
                    <Text style={styles.subtitle}>Temario de la Materia</Text>

                    <View style={styles.pdfButtonContainer}>
                        <TouchableOpacity
                            style={styles.pdfButton}
                            onPress={() => Linking.openURL('https://drive.google.com/file/d/1BJ4fXMNdsB3iNXua_NEcLvnNcKjvHkhG/view')}
                        >
                            <MaterialIcons name="picture-as-pdf" size={20} color="white" />
                            <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Sección de Documentación */}
                    <View ref={documentacionRef} style={styles.section}>
                        <Text style={styles.sectionTitle}>Documentación Completa</Text>
                    </View>

                    {/*1 Introducción al paradigma de la programación orientada a objetos*/}
                    <Text style={styles.topicTitle}>1 Introducción al paradigma de la programación orientada a objetos</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>1.1 Elementos del modelo de objetos: clases, objetos, abstracción, modularidad, encapsulamiento, herencia y polimorfismo</Text>{"\n"}
                    <Text style={styles.contentText}>
                        <Text style={styles.bold}>Clases:</Text>{"\n"}
                        Una clase es una plantilla o molde que define las características (atributos) y comportamientos (métodos) que sus objetos pueden tener. Es una abstracción que representa un
                        conjunto de objetos con propiedades y comportamientos comunes.{"\n"}
                        <Text style={styles.bold}>Objetos:</Text>{"\n"}
                        Un objeto es una instancia concreta de una clase. Cada objeto tiene sus propios valores para los atributos definidos por la clase y puede ejecutar los métodos que esta contiene.{"\n"}
                        <Text style={styles.bold}>Abstracción:</Text>{"\n"}
                        Es el proceso de simplificar la realidad modelando solo las características esenciales de un objeto, ignorando detalles irrelevantes para el contexto del programa.{"\n"}
                        <Text style={styles.bold}>Modularidad:</Text>{"\n"}
                        La modularidad consiste en dividir un programa en partes o módulos independientes (por ejemplo, clases o paquetes) que se pueden desarrollar, probar y mantener por separado.{"\n"}
                        <Text style={styles.bold}>Encapsulamiento:</Text>{"\n"}
                        s el mecanismo que oculta los datos internos de un objeto y solo permite el acceso a través de métodos públicos, protegiendo la integridad de la información y
                        evitando modificaciones accidentales.{"\n"}
                        <Text style={styles.bold}>Herencia:</Text>{"\n"}
                        La herencia permite crear nuevas clases (subclases) a partir de clases existentes (superclases), heredando atributos y métodos, y permitiendo la
                        reutilización de código y la extensión de funcionalidades.{"\n"}
                        <Text style={styles.bold}>Polimorfismo:</Text>{"\n"}
                        Es la capacidad de un mismo método o función para comportarse de diferentes maneras según el objeto que lo invoque. Permite que diferentes clases respondan a
                        un mismo mensaje o llamada de método con comportamientos específicos.{"\n\n"}
                        <Text style={styles.subtopicTitle}>1.2 Lenguaje de modelado unificado: diagrama de clases</Text>{"\n"}
                        ¿Qué es UML?{"\n"}
                        El Lenguaje de Modelado Unificado (UML, por sus siglas en inglés: Unified Modeling Language) es un lenguaje estándar para visualizar, especificar,
                        construir y documentar los componentes de un sistema de software. UML no es un lenguaje de programación, sino un conjunto de notaciones gráficas
                        utilizadas para modelar sistemas, especialmente orientados a objetos.{"\n"}
                        ¿Qué es un Diagrama de Clases?{"\n"}
                        El diagrama de clases es uno de los diagramas más importantes de UML. Se utiliza para representar la estructura estática de un sistema, mostrando:{"\n"}
                        •Las <Text style={styles.bold}>clases</Text> del sistema.{"\n"}
                        •Sus <Text style={styles.bold}>atributos</Text> y métodos.{"\n"}
                        •Las <Text style={styles.bold}>relaciones</Text> entre clases (asociaciones, herencias, composiciones, etc.).{"\n\n"}
                    </Text>

                    {/* 2 Clases y objetos*/}
                    <Text style={styles.topicTitle}>2 Clases y objetos</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>2.1 Declaración de clases: atributos, métodos, encapsulamiento</Text>{"\n"}
                    <Text style={styles.contentText}>
                        ¿Qué es una clase?{"\n"}
                        Una clase es una plantilla que define cómo serán los objetos creados a partir de ella. Contiene:{"\n"}
                        <Text style={styles.bold}>Atributos:</Text> También llamados campos o propiedades. Representan el estado del objeto.{"\n"}
                        <Text style={styles.bold}>Métodos:</Text> Funciones que definen el comportamiento del objeto.{"\n"}
                        Encapsulamiento:{"\n"}
                        El encapsulamiento consiste en ocultar los detalles internos del objeto (normalmente los atributos), y solo permitir su acceso o modificación
                        mediante métodos definidos (como getters y setters).{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.2 Instanciación de una clase</Text>{"\n"}
                        Instanciar una clase significa  <Text style={styles.bold}>crear un objeto</Text> a partir de esa clase.{"\n"}
                        <Text style={styles.bold}>Ejemplo</Text>{"\n"}
                        persona1 = Persona("Ana", 30){"\n"}
                        persona1.hablar()  # Output: Hola, me llamo Ana y tengo 30 años.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.3 Referencia al objeto actual</Text>{"\n"}
                        La referencia al objeto actual se realiza mediante la palabra clave:{"\n"}
                        •self en Python{"\n"}
                        •this en Java, C++, C#, etc.{"\n"}
                        Esta palabra se usa dentro de los métodos para referirse a los atributos o métodos del objeto actual, es decir, al que está ejecutando ese método.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.4 Métodos: declaración, mensajes, paso de parámetros, retorno de valores</Text>{"\n"}
                        <Text style={styles.bold}>Declaración de métodos</Text>{"\n"}
                        Un método es una función definida dentro de una clase. Define el comportamiento de los objetos.{"\n"}
                        <Text style={styles.bold}> Mensajes</Text>{"\n"}
                        Cuando se invoca un método en un objeto, se dice que se envía un mensaje al objeto:{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.5 Constructores y destructores declaración, uso y aplicaciones</Text>{"\n"}
                        <Text style={styles.bold}> Constructor</Text>{"\n"}
                        Es un método especial que se ejecuta automáticamente al crear un objeto.{"\n"}
                        <Text style={styles.bold}> Destructor</Text>{"\n"}
                        Es un método que se ejecuta cuando un objeto es destruido.{"\n"}
                        Aplicaciones:{"\n"}
                        • El constructor se usa para inicializar valores al crear el objeto.{"\n"}
                        •El destructor se usa para liberar recursos como archivos, memoria o conexiones.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.6 Sobrecarga de métodos</Text>{"\n"}
                        La sobrecarga de métodos ocurre cuando una clase tiene múltiples métodos con el mismo nombre pero diferentes parámetros (cantidad o tipo).{"\n"}
                        <Text style={styles.subtopicTitle}>2.7 Sobrecarga de operadores: Concepto y utilidad, operadores unarios y binarios</Text>{"\n"}
                        La sobrecarga de operadores permite redefinir el comportamiento de operadores (+, -, ==, etc.) cuando se usan con objetos de una clase.{"\n"}
                        Esto es útil para:{"\n"}
                        •Sumar objetos personalizados (como vectores, fracciones, etc.).{"\n"}
                        •Comparar objetos de forma intuitiva.{"\n"}
                        •Mejorar legibilidad y expresividad del código.{"\n"}
                    </Text>

                    {/* 3 Herencia*/}
                    <Text style={styles.topicTitle}>3 Herencia</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>3.1 Definición: clase base, clase derivada</Text>{"\n"}
                    <Text style={styles.contentText}>
                        <Text style={styles.bold}>Clase base (superclase o padre):</Text>Es la clase original que define atributos y métodos comunes.{"\n"}
                        <Text style={styles.bold}>Clase derivada (subclase o hija):</Text>Es la clase que hereda de otra clase, obteniendo sus miembros
                        (atributos y métodos), y puede añadir o modificar comportamientos.{"\n"}
                        <Text style={styles.bold}>Ejemplo</Text>{"\n"}
                        class Animal:  # Clase base{"\n"}
                        def hablar(self):{"\n"}
                        print("Hace un sonido"){"\n"}

                        class Perro(Animal):  # Clase derivada{"\n"}
                        def ladrar(self):{"\n"}
                        print("Guau guau"){"\n\n"}
                        <Text style={styles.subtopicTitle}>3.2 Clasificación: herencia simple, herencia múltiple</Text>{"\n"}
                        Herencia simple: Una clase deriva de una única clase base.{"\n"}
                        <Text style={styles.bold}>Ejemplo</Text>{"\n"}
                        class Gato(Animal):  # Solo hereda de Animal{"\n"}
                        def maullar(self):{"\n"}
                        print("Miau"){"\n"}
                        Herencia múltiple:{"\n"}
                        Una clase hereda de más de una clase base{"\n"}
                        class Volador:{"\n"}
                        def volar(self):{"\n"}
                        print("Estoy volando"){"\n"}

                        class Murciélago(Animal, Volador):  # Herencia múltiple{"\n"}
                        pass{"\n\n"}
                        <Text style={styles.subtopicTitle}> 3.3 Reutilización de miembros heredados</Text>{"\n"}
                        Una clase derivada puede usar directamente métodos y atributos heredados de la clase base.{"\n"}
                        <Text style={styles.bold}>Ejemplo</Text>{"\n"}
                        m = Murciélago(){"\n"}
                        m.hablar()  # De Animal{"\n"}
                        m.volar()   # De Volador{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.4 Referencia al objeto de la clase base</Text>{"\n"}
                        Se usa para invocar métodos o atributos de la clase base desde la clase derivada.{"\n"}
                        <Text style={styles.bold}>Ejemplo</Text>{"\n"}
                        class Animal:{"\n"}
                        def hablar(self):{"\n"}
                        print("Sonido genérico"){"\n"}

                        class Perro(Animal):{"\n"}
                        def hablar(self):{"\n"}
                        super().hablar()  # Llamada al método de la clase base{"\n"}
                        print("Guau"){"\n\n"}
                        <Text style={styles.subtopicTitle}>3.5 Constructores y destructores en clases derivadas</Text>{"\n"}
                        Una subclase puede definir su propio constructor, pero debe llamar al constructor de la clase base para asegurar la inicialización completa.{"\n"}
                        <Text style={styles.bold}>Ejemplo</Text>{"\n"}
                        class Animal:{"\n"}
                        def __init__(self, nombre):{"\n"}
                        self.nombre = nombre{"\n"}

                        class Perro(Animal):{"\n"}
                        def __init__(self, nombre, raza):{"\n"}
                        super().__init__(nombre)  # Llama al constructor de Animal{"\n"}
                        self.raza = raza{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.6 Redefinición de métodos en clases derivadas</Text>{"\n"}
                        Consiste en redefinir un método de la clase base en la clase derivada para cambiar su comportamiento.{"\n"}
                        <Text style={styles.bold}>Ejemplo</Text>{"\n"}
                        class Animal:{"\n"}
                        def hablar(self):{"\n"}
                        print("Animal hace un sonido"){"\n"}

                        class Gato(Animal):{"\n"}
                        def hablar(self):  # Sobrescribe el método{"\n"}
                        print("Miau"){"\n"}
                    </Text>

                    {/* 4 Polimorfismo*/}
                    <Text style={styles.topicTitle}>4 Polimorfismo</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>4.1 Definición</Text>{"\n"}
                    <Text style={styles.contentText}>
                        Polimorfismo significa "muchas formas". En POO, permite que un mismo método pueda tener
                        diferentes comportamientos dependiendo del objeto que lo invoque.{"\n\n"}

                        <Text style={styles.subtopicTitle}>4.2 Clases abstractas: definición, métodos abstractos, implementación de clases abstractas,
                            modelado de clases abstractas</Text>{"\n"}
                        Una clase abstracta es una clase que no puede ser instanciada y puede tener métodos sin implementar (abstractos) y también métodos normales.
                         <Text style={styles.bold}>Método abstracto:</Text> No tiene cuerpo y debe ser implementado por las subclases.{"\n\n"}

                        <Text style={styles.subtopicTitle}>4.3 Interfaces: definición, implementación de interfaces, herencia de interfaces</Text>{"\n"}
                        Una interfaz es como un contrato: solo define métodos abstractos. Las clases que implementan una interfaz deben definir todos sus métodos.
                        Herencia de interfaces: Una interfaz puede heredar de otra (usando extends), y una clase puede implementar múltiples interfaces:{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.4 Variables polimórficas (plantillas): definición,
                            uso y aplicaciones</Text>{"\n"}
                        Variables polimórficas:{"\n"}
                        Una variable polimórfica es una referencia de tipo padre que puede almacenar objetos de subtipos.{"\n"}
                        Plantillas (Genéricos en Java):{"\n"}
                        Los genéricos permiten definir clases o métodos que trabajan con tipos genéricos.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.5 Reutilización de código</Text>{"\n"}
                        El polimorfismo, las clases abstractas, las interfaces y los genéricos permiten:{"\n"}
                        • Evitar duplicación de código.{"\n"}
                        •Facilitar mantenimiento.{"\n"}
                        • Permitir extensibilidad del sistema.{"\n\n"}
                    </Text>

                    {/* 5 Excepciones*/}
                    <Text style={styles.topicTitle}>5 Excepciones</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>5.1 Definición</Text>{"\n"}
                    <Text style={styles.contentText}>
                        Una excepción es un evento que ocurre durante la ejecución de un programa y que interrumpe su flujo normal.
                        Java maneja las excepciones usando una estructura especial que permite capturarlas, controlarlas o propagarlas.{"\n\n"}
                        <Text style={styles.subtopicTitle}>5.2 Tipos de excepciones</Text>{"\n"}
                         <Text style={styles.bold}>1. Checked Exceptions (Comprobadas):</Text>{"\n"}
                        •Son verificadas por el compilador.{"\n"}
                        Ejemplo: IOException, SQLException.{"\n"}
                        • Deben ser tratadas con try-catch o declaradas con throws.{"\n"}
                        <Text style={styles.bold}> 2. Unchecked Exceptions (No comprobadas):</Text>{"\n"}
                        • Son subclases de RuntimeException.{"\n"}
                        •No requieren ser tratadas obligatoriamente.{"\n"}
                        Ejemplo: ArithmeticException, NullPointerException{"\n\n"}
                        <Text style={styles.subtopicTitle}>5.3 Propagación de excepciones</Text>{"\n"}
                        Una excepción puede propagarse a través de la pila de llamadas hasta que sea atrapada por un bloque try-catch.{"\n\n"}
                        <Text style={styles.subtopicTitle}>5.4 Gestión de excepciones: manejo de excepciones, lanzamiento de excepciones</Text>{"\n"}
                        Permite capturar y manejar errores en tiempo de ejecución sin detener el programa de forma abrupta.{"\n\n"}
                        <Text style={styles.subtopicTitle}>5.5 Creación y manejo de excepciones definidas por el usuarios</Text>{"\n"}
                        Puedes crear tus propias excepciones heredando de Exception o RuntimeException.{"\n"}
                    </Text>

                    {/* 6 Flujos y archivos*/}
                    <Text style={styles.topicTitle}>6 Flujos y archivos</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>6.1 Definición</Text>{"\n"}
                    <Text style={styles.contentText}>
                        Un flujo (stream) es una secuencia de datos que puede leerse o escribirse. Los archivos se utilizan para almacenar esos datos de forma persistente (en disco).{"\n\n"}
                        <Text style={styles.subtopicTitle}>6.2 Clasificación: Archivos de texto y binarios</Text>{"\n"}
                         <Text style={styles.bold}>🔹Archivos de texto</Text>{"\n"}
                        •Contienen caracteres legibles para humanos.{"\n"}
                        •Se accede usando clases como FileReader y BufferedReader.{"\n"}
                       <Text style={styles.bold}> 🔹Archivos binarios</Text>{"\n"}
                       • Contienen datos codificados (números, objetos, imágenes).{"\n"}
                        •Se accede usando clases como FileInputStream, ObjectInputStream.{"\n\n"}
                        <Text style={styles.subtopicTitle}>6.3 Operaciones básicas y tipos de acceso</Text>{"\n"}
                         <Text style={styles.bold}>🔹Operaciones básicas:</Text>{"\n"}
                        •Abrir archivo{"\n"}

                        •Leer / Escribir{"\n"}

                        •Cerrar archivo{"\n"}

                         <Text style={styles.bold}>🔹Tipos de acceso:</Text>{"\n"}
                       <Text style={styles.bold}>• Secuencial:</Text> Desde el inicio hasta el final (lectura línea por línea o byte por byte).{"\n"}

                        <Text style={styles.bold}>•Aleatorio:</Text> Acceso a posiciones específicas (usando RandomAccessFile).{"\n\n"}
                        <Text style={styles.subtopicTitle}>6.4 Manejo de objetos persistentes</Text>{"\n"}
                        Para guardar y recuperar objetos completos se utiliza la serialización, que convierte objetos en una secuencia de bytes para almacenarlos.{"\n\n"}
                    </Text>
                    
                    {/* Sección de Videos */}
                              <View ref={videosRef} style={styles.section}>
                                <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                    
                                {[
                                  { title: 'Herencia', url: 'https://youtu.be/LZPafq9Ve_Q?si=JM6MzhUeeIQjBXKB' },
                                  { title: 'Creación de clases y objetos', url: 'https://youtu.be/oMWrJwMPd6k?si=2dXTPSiyJzIJmHnB' },
                                  { title: 'Método Constructor', url: 'https://youtu.be/5EGS6lnghYE?si=Tlh-C-winZlXQTM5' },
                                  { title: 'Sobrecarga de Métodosa', url: 'https://youtu.be/qHyw-9CxXVs?si=EDH1ECqpzBWo3j8ode ' },
                                  { title: 'Encapsulamiento y métodos accesores (Getters y Setters)', url: 'https://youtu.be/8LyjCiuynKw?si=MwVpUPE8K52l0f6P' },
                                  { title: 'Java: introducción a las excepciones', url: 'https://youtu.be/kGzwPunAOxk?si=AV9Mi_lHxNbj0utI' },
                                  { title: 'Polimorfismo ', url: 'https://youtu.be/RXcUTWczbag?si=CZ9QajCPHU79Igns' }
                                 
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
                </View>
            </ScrollView>


        </View>
    );
};

//Estilos
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

export default PooScreen;