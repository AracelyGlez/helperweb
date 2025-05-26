// Quimica
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const QuimicaScreen = () => {
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
                <Text style={styles.topBarTitle}>Química</Text>
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
                    <Text style={styles.title}>Química</Text>
                    <Text style={styles.subtitle}>Temario de la Materia</Text>

                    <View style={styles.pdfButtonContainer}>
                        <TouchableOpacity
                            style={styles.pdfButton}
                            onPress={() => Linking.openURL('https://drive.google.com/file/d/14EZPOrjq8uYzObgWBZb1HrF7ySHK5aSP/view')}
                        >
                            <MaterialIcons name="picture-as-pdf" size={20} color="white" />
                            <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Sección de Documentación */}
                    <View ref={documentacionRef} style={styles.section}>
                        <Text style={styles.sectionTitle}>Documentación Completa</Text>

                        {/*1 Teoría cuántica y estructura atómica*/}
                        <Text style={styles.topicTitle}>1 Teoría cuántica y estructura atómica</Text>{"\n"}
                        <Text style={styles.subtopicTitle}>1.1. El átomo y sus partículas subatómicas.</Text>{"\n"}
                        <Text style={styles.contentText}>
                            El átomo es la unidad fundamental de la materia. Está compuesto por:{"\n"}
                            <Text style={styles.bold}>Electrones:</Text> Con carga negativa, que giran alrededor del núcleo.{"\n"}
                            <Text style={styles.bold}>Protones:</Text> Con carga positiva, situados en el núcleo.{"\n"}
                            <Text style={styles.bold}>Neutrones:</Text> Sin carga eléctrica, también en el núcleo.{"\n\n"}

                            <Text style={styles.subtopicTitle}>1.1.1. Rayos catódicos y rayos anódicos.</Text>{"\n"}
                            <Text style={styles.bold}> Rayos catódicos:</Text> Descubiertos por J.J. Thomson, son haces de electrones emitidos desde
                            el cátodo en tubos de descarga. Sirvieron para identificar al electrón como una partícula subatómica.{"\n"}
                            <Text style={styles.bold}>Rayos anódicos (canales):</Text> Descubiertos por Goldstein, son flujos de iones positivos que se mueven hacia
                            el cátodo, lo que ayudó a comprender la existencia de cargas positivas en el átomo.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.1.2. Radiactividad.</Text>{"\n"}
                            Fenómeno descubierto por Becquerel y estudiado por los Curie. Es la desintegración espontánea del núcleo atómico, emitiendo partículas alfa, beta o rayos
                            gamma. Dio evidencia de que los átomos pueden transformarse en otros elementos.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.2. Base experimental de la teoría cuántica.</Text>{"\n"}
                            <Text style={styles.subtopicTitle}>1.2.1. Teoría ondulatoria de la luz..</Text>{"\n"}
                            Tradicionalmente, la luz se consideraba una onda electromagnética, lo que explicaba fenómenos como interferencia y difracción. Maxwell formuló las ecuaciones
                            del electromagnetismo que sustentan esta idea.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.2.2. Radiación del cuerpo negro y teoría de Planck.</Text>{"\n"}
                            Los cuerpos negros emiten radiación según su temperatura. La física clásica no podía explicar el espectro observado (catástrofe ultravioleta). Planck propuso
                            que la energía se emite en cuantos o paquetes discretos (E = h·f), dando origen a la teoría cuántica.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.2.3. Efecto fotoeléctrico.</Text>{"\n"}
                            Einstein explicó que la luz puede liberar electrones de un metal si su frecuencia es suficientemente alta. Esto confirmó que la luz tiene naturaleza cuántica y
                            se comporta como partículas llamadas fotones.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.2.4. Espectros de emisión y series espectrales.</Text>{"\n"}
                            Cuando los electrones en los átomos absorben energía, saltan a niveles más altos. Al volver a su estado original, emiten luz en frecuencias específicas. Esto
                            produce líneas espectrales, diferentes para cada elemento, lo que dio lugar a la espectroscopía atómica.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.3. Teoría atómica de Bohr.</Text>{"\n"}
                            Bohr propuso un modelo cuántico del hidrógeno:{"\n"}
                            •Los electrones se mueven en órbitas circulares estables alrededor del núcleo.{"\n"}
                            •Solo ciertas órbitas están permitidas.{"\n"}
                            •Al cambiar de órbita, el electrón emite o absorbe energía en forma de luz.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.3.1. Teoría atómica de Bohr-Sommerfeld.</Text>{"\n"}
                            Bohr propuso un modelo cuántico del hidrógeno:{"\n"}
                            •Las órbitas no son solo circulares, sino también elípticas.{"\n"}
                            •Introdujo un segundo número cuántico (número azimutal), lo que ayudó a explicar con mayor precisión los espectros atómicos.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.4. Teoría cuántica.</Text>{"\n"}
                            <Text style={styles.subtopicTitle}>1.4.1. Principio de dualidad. Postulado de De Broglie.</Text>{"\n"}
                            Louis de Broglie propuso que toda partícula tiene también naturaleza ondulatoria. A cada partícula se le puede asociar una longitud de onda:{"\n"}
                            λ = h / p{"\n"}
                            Esto fue confirmado experimentalmente con el experimento de difracción de electrones.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.4.2. Principio de incertidumbre de Heisenberg.</Text>{"\n"}
                            No es posible conocer simultáneamente y con precisión la posición y el momento (cantidad de movimiento) de una partícula. Esta limitación es fundamental
                            y no depende de la precisión del instrumento.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.4.3. Ecuación de onda de Schrödinger.</Text>{"\n"}
                            Schrödinger formuló una ecuación que describe el comportamiento ondulatorio del electrón. La solución de esta ecuación nos da funciones de onda (ψ)
                            para los electrones en los átomos.{"\n\n"}
                            <Text style={styles.subtopicTitle}>1.4.3.1. Significado físico de la función de onda ψ2.</Text>{"\n"}
                            El cuadrado de la función de onda (ψ²) representa la probabilidad de encontrar al electrón en una determinada región del espacio.{"\n\n"}
                            <Text style={styles.subtopicTitle}> 1.4.3.2. Números cuánticos  orbitales atómicos.</Text>{"\n"}
                            Los electrones están descritos por cuatro números cuánticos:{"\n"}
                            •n: nivel energético principal.{"\n"}
                            •l: tipo de orbital (s, p, d, f).{"\n"}
                            •m: orientación del orbital.{"\n"}
                            •s: espín del electrón.{"\n"}
                            Los orbitales representan regiones en las que hay alta probabilidad de encontrar al electrón.{"\n\n"}

                            <Text style={styles.subtopicTitle}>1.5. Distribución electrónica en sistemas polielectrónicos.</Text>{"\n"}
                            <Text style={styles.subtopicTitle}> 1.5.1. Principio de Aufbau o de construcción.</Text>{"\n"}
                            Los electrones ocupan primero los orbitales de menor energía, construyendo así la configuración electrónica del átomo.{"\n\n"}
                            <Text style={styles.subtopicTitle}> 1.5.2. Principio de exclusión de Pauli.</Text>{"\n"}
                            En un mismo átomo, no puede haber dos electrones con los mismos cuatro números cuánticos.{"\n\n"}
                            <Text style={styles.subtopicTitle}> 1.5.3. Principio de máxima multiplicidad de Hund.</Text>{"\n"}
                            Cuando hay varios orbitales de la misma energía (degenerados), los electrones se distribuyen con espines paralelos, ocupando los orbitales individualmente antes de aparearse.{"\n\n"}
                            <Text style={styles.subtopicTitle}> 1.5.4. Configuración electrónica de los elementos y su ubicación en la clasificación periódica.</Text>{"\n"}
                            La forma en que se distribuyen los electrones en los orbitales determina la posición del elemento en la tabla periódica, así como sus propiedades químicas.{"\n\n"}
                            <Text style={styles.subtopicTitle}> 1.5.5. Principios de radiactividad.</Text>{"\n"}
                            Los átomos con núcleos inestables emiten radiación para alcanzar una configuración más estable. Este fenómeno puede alterar la identidad química del elemento.{"\n\n"}
                            <Text style={styles.subtopicTitle}> 1.6. Aplicaciones tecnológicas de la emisión electrónica de los átomos.</Text>{"\n"}
                            Los principios de la emisión electrónica se aplican en múltiples tecnologías:{"\n"}
                            • Láseres{"\n"}
                            • Teles de rayos catódicos{"\n"}
                            • Espectroscopía{"\n"}
                            • Celdas solares{"\n"}
                            • Dispositivos cuánticos{"\n"}
                        </Text>

                        {/*2 Elementos químicos y su clasificación*/}
                        <Text style={styles.topicTitle}>2 Elementos químicos y su clasificación</Text>{"\n"}
                        <Text style={styles.subtopicTitle}>2.1. Características de la clasificación periódica moderna de los elementos.</Text>{"\n"}
                        <Text style={styles.contentText}>
                            La tabla periódica moderna organiza los elementos según su número atómico creciente (Z), y agrupa elementos con
                            propiedades químicas similares en columnas llamadas grupos. Las filas horizontales se llaman periodos, y cada periodo
                            indica el nivel de energía más alto ocupado por electrones.
                            Esta clasificación refleja la estructura electrónica de los átomos y permite predecir sus propiedades químicas y físicas.{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.1.1. Tabla periódica larga y tabla cuántica.</Text>{"\n"}
                            <Text style={styles.bold}>Tabla periódica larga: </Text> Es la representación extendida que incluye los elementos de transición interna (lantánidos y actínidos) fuera del cuerpo principal. Muestra todos los
                            elementos según su configuración electrónica.{"\n"}
                            <Text style={styles.bold}>Tabla cuántica: </Text>  Organiza los elementos basándose en los subniveles de energía (s, p, d, f), siguiendo los principios de Aufbau, Pauli y Hund. Así, los bloques s, p, d y f
                            de la tabla corresponden a la ocupación de orbitales específicos.{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.2. Propiedades atómicas y su variación periódica.</Text>{"\n"}
                            Las propiedades atómicas varían de forma periódica en la tabla. Estas variaciones permiten entender el comportamiento químico de los elementos.{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.2.1. Carga nuclear efectiva.</Text>{"\n"}
                            Es la atracción neta que experimentan los electrones de valencia hacia el núcleo, considerando el apantallamiento por los electrones internos.{"\n"}
                            • Aumenta de izquierda a derecha en un periodo.{"\n"}
                            • Disminuye de arriba hacia abajo en un grupo.{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.2.2. Radio atómico, radio covalente,radio iónico.</Text>{"\n"}
                            <Text style={styles.bold}>Radio atómico:</Text> Distancia entre el núcleo y el electrón más externo.{"\n"}
                            • Disminuye en un periodo (↑Z_eff).{"\n"}
                            • Aumenta en un grupo (↑nivel energético){"\n"}.
                            <Text style={styles.bold}>Radio covalente: </Text>Mitad de la distancia entre dos núcleos de átomos unidos por un enlace covalente.{"\n"}
                            <Text style={styles.bold}>Radio iónico:</Text> Tamaño de un ion.{"\n"}
                            • Cationes: más pequeños que el átomo neutro.{"\n"}
                            • Aniones: más grandes que el átomo neutro.{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.2.3. Energía de ionización.</Text>{"\n"}
                            Es la energía necesaria para remover un electrón de un átomo en estado gaseoso.{"\n"}
                            • Aumenta en un periodo (↑Z_eff).{"\n"}
                            • Disminuye en un grupo (↑radio atómico).{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.2.4. Afinidad electrónica.</Text>{"\n"}
                            Energía liberada cuando un átomo en estado gaseoso captura un electrón.{"\n"}
                            • En general, aumenta hacia la derecha en un periodo.{"\n"}
                            • Los elementos del grupo 17 (halógenos) tienen alta afinidad electrónica.{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.2.5. Número de oxidación.</Text>{"\n"}
                            Indica la carga (real o aparente) que un átomo adquiere en una molécula. Depende de la configuración electrónica y del tipo de enlace.{"\n"}
                            Ej.: O = –2, Na = +1, Fe puede ser +2 o +3, etc.{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.2.6. Electronegatividad.</Text>{"\n"}
                            Es la capacidad de un átomo para atraer electrones en un enlace químico.{"\n"}
                            • Escala de Pauling es la más común.{"\n"}
                            • Aumenta en un periodo (hacia la derecha) y disminuye en un grupo (hacia abajo).{"\n"}
                            • El elemento más electronegativo es el fluor (F).{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.3. Aplicación: Impacto económico o ambiental de algunos elementos.</Text>{"\n"}
                            <Text style={styles.subtopicTitle}>2.3.1. Abundancia de los elementos en la naturaleza.</Text>{"\n"}
                            <Text style={styles.bold}>Oxígeno (O) y silicio (Si) </Text> son abundantes en la corteza terrestre.{"\n"}
                            <Text style={styles.bold}>Hidrógeno (H) </Text> es el más abundante en el universo.{"\n"}
                            <Text style={styles.bold}>Nitrógeno (N)</Text> es el principal componente de la atmósfera.{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.3.2. Elementos de importancia económica.</Text>{"\n"}
                            <Text style={styles.bold}>Litio (Li):</Text> Baterías recargables, sector tecnológico.
                            <Text style={styles.bold}>Cobre (Cu):</Text> Conducción eléctrica.{"\n"}
                            <Text style={styles.bold}>Hierro (Fe):</Text> Construcción y acero.{"\n"}
                            <Text style={styles.bold}>Oro (Au), plata (Ag):</Text> Electrónica, joyería, reservas de valor.{"\n"}
                            <Text style={styles.bold}>Silicio (Si):</Text> Microchips, energía sola.r{"\n\n"}
                            <Text style={styles.subtopicTitle}>2.3.3. Elementos contaminantes.</Text>{"\n"}
                            <Text style={styles.bold}>Plomo (Pb):</Text>  Neurotóxico, antes presente en gasolina.{"\n"}
                            <Text style={styles.bold}>Mercurio (Hg):</Text> Contaminación en cuerpos de agua, bioacumulativo.{"\n"}
                            <Text style={styles.bold}>Cadmio (Cd):</Text> Tóxico, se encuentra en baterías y plásticos.{"\n"}
                            <Text style={styles.bold}>Arsénico (As):</Text> Presente en aguas subterráneas en algunas regiones.{"\n"}
                            <Text style={styles.bold}>Gases nobles radiactivos</Text>, como el radón, también pueden tener efectos negativos en la salud.{"\n"}
                        </Text>

                        {/*3 Enlaces químicos*/}
                        <Text style={styles.topicTitle}>3 Enlaces químicos</Text>{"\n"}
                        <Text style={styles.subtopicTitle}>3.1. Introducción.</Text>{"\n"}
                        <Text style={styles.contentText}>
                            Los enlaces químicos son fuerzas que mantienen unidos a los átomos en compuestos. Se forman cuando los átomos intercambian o
                            comparten electrones para alcanzar una configuración más estable, generalmente siguiendo la regla del octeto.{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.1.1. Concepto de enlace químico.</Text>{"\n"}
                            Es la fuerza de atracción que mantiene unidos a dos o más átomos en una molécula o compuesto. Los enlaces químicos se forman por la
                            interacción de los electrones de valencia (última capa).{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.1.2. Clasificación de los enlaces químicos.</Text>{"\n"}
                            Los principales tipos de enlace son:{"\n"}
                            <Text style={styles.bold}>Covalente: </Text> Los átomos comparten electrones (generalmente entre no metales).{"\n"}
                            <Text style={styles.bold}>Iónico:</Text> Hay transferencia de electrones de un átomo a otro (entre metal y no metal).{"\n"}
                            <Text style={styles.bold}>Metálico:</Text> Los electrones se comparten en una “nube” común entre átomos metálicos.{"\n"}
                            <Text style={styles.bold}>Puentes de hidrógeno</Text>{"\n"}
                            <Text style={styles.bold}>Fuerzas de Van der Waals </Text> (interacciones débiles entre moléculas){"\n\n"}
                            <Text style={styles.subtopicTitle}>3.1.3. Aplicaciones y limitaciones de la regla del octeto.</Text>{"\n"}
                            <Text style={styles.bold}>Regla del octeto:</Text> Los átomos tienden a ganar, perder o compartir electrones hasta tener 8 en su capa externa.{"\n"}
                            <Text style={styles.bold}>Aplicaciones: </Text> Funciona bien para los elementos del segundo periodo (C, N, O, F).{"\n"}
                            <Text style={styles.bold}>Limitaciones:</Text>{"\n"}
                            <Text style={styles.bold}>• Moléculas con número impar de electrones</Text>{"\n"}
                            <Text style={styles.bold}>• Expansión del octeto:</Text> Elementos del tercer periodo en adelante pueden tener más de 8 electrones (ej: PCl₅, SF₆).{"\n"}
                            <Text style={styles.bold}>• Deficiencia de octeto: </Text> Elementos como el Be y B pueden estabilizarse con menos de 8 electrones.{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.2. Enlace covalente.</Text>{"\n"}
                            Se forma cuando dos átomos comparten uno o más pares de electrones.{"\n"}
                            Ejemplo: H₂, H₂O, CO₂{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.2.1. Teorías para explicar el enlace covalente y sus alcances.</Text>{"\n"}
                            <Text style={styles.subtopicTitle}>3.2.1.1. Teorías del enlace de valencia.</Text>{"\n"}
                            El enlace se forma por el traslape de orbitales atómicos.{"\n"}
                            Tipos de enlaces:{"\n"}
                            • σ (sigma): Traslape frontal.{"\n"}
                            • π (pi): Traslape lateral.{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.2.1.2. Hibridación y geometría molecular.</Text>{"\n"}
                            <Text style={styles.bold}>Hibridación: </Text> Combinación de orbitales atómicos para formar nuevos orbitales híbridos equivalentes.{"\n"}
                            Ej: sp (lineal), sp² (trigonal plana), sp³ (tetraédrica).{"\n"}
                            <Text style={styles.bold}>Geometría molecular:</Text> Determinada por la repulsión de pares de electrones (Teoría RPECV o VSEPR).{"\n"}
                            Ej: H₂O (angular), CH₄ (tetraédrica), BF₃ (plana trigonal).{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.2.1.3. Teoría del orbital molecular.</Text>{"\n"}
                            • Los orbitales atómicos se combinan para formar orbitales moleculares que se extienden sobre toda la molécula.{"\n"}
                            • Introduce el concepto de orden de enlace y explica propiedades magnéticas.{"\n"}
                            • Útil para moléculas como el O₂ (paramagnético).{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.3. Enlace iónico.</Text>{"\n"}
                            Ocurre cuando un átomo cede uno o más electrones y otro los capta, formando iones con cargas opuestas que se atraen electrostáticamente.{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.3.1. Formación y propiedades de los compuestos iónicos.</Text>{"\n"}
                            <Text style={styles.bold}> Formación:</Text> Metal (pérdida de electrones) + no metal (ganancia).{"\n"}
                            <Text style={styles.bold}>Propiedades:</Text>{"\n"}
                            • Elevados puntos de fusión y ebullición.{"\n"}
                            • Sólidos cristalinos a temperatura ambiente.{"\n"}
                            • Buenos conductores en estado fundido o disueltos.{"\n"}
                            • Solubles en agua{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.3.2. Redes cristalinas.</Text>{"\n"}
                            Los compuestos iónicos forman estructuras tridimensionales llamadas redes cristalinas, en las que los iones se ordenan de manera regular.{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.3.2.1. Estructura.</Text>{"\n"}
                            La disposición depende del tamaño y carga de los iones.{"\n"}
                            Ejemplo: en NaCl, cada ion Na⁺ está rodeado por seis Cl⁻ y viceversa (estructura cúbica centrada).{"\n\n"}
                            <Text style={styles.subtopicTitle}>3.3.2.2. Energía reticular.</Text>{"\n"}
                            Es la energía liberada al formar un mol de compuesto iónico sólido a partir de iones gaseosos.{"\n"}
                            Cuanto mayor la energía reticular:{"\n"}
                            • Mayor la estabilidad del cristal.{"\n"}
                            • Mayor el punto de fusión.{"\n"}
                            • Mayor la dureza del sólido.{"\n"}
                            Aumenta con:{"\n"}
                            • Mayor carga iónica.{"\n"}
                            • Menor radio iónico.{"\n"}
                        </Text>

                        {/*4 Reacciones químicas*/}
                        <Text style={styles.topicTitle}>4 Reacciones químicas</Text>{"\n"}
                        <Text style={styles.subtopicTitle}>4.1. Combinación.</Text>{"\n"}
                        <Text style={styles.contentText}>
                            Dos o más sustancias se combinan para formar una sola:{"\n"}
                            A + B → AB{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.2. Descomposición.</Text>{"\n"}
                            Una sustancia se descompone en dos o más:{"\n"}
                            AB → A + B{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.3. Sustitución (simple y doble).</Text>{"\n"}
                            <Text style={styles.bold}>Sustitución simple:</Text> {"\n"}
                            Un elemento reemplaza a otro en un compuesto:{"\n"}
                            A + BC → AC + B{"\n"}
                            <Text style={styles.bold}> Sustitución doble (metátesis):</Text>{"\n"}
                            Dos compuestos intercambian sus componentes:{"\n"}
                            AB + CD → AD + CB{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.4. Neutralización.</Text>{"\n"}
                            Reacción entre un ácido y una base, formando sal y agua:{"\n"}
                            Ácido + Base → Sal + H₂O{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.5. Óxido-Reducción.</Text>{"\n"}
                            En estas reacciones ocurre una transferencia de electrones:{"\n"}
                             <Text style={styles.bold}>• Oxidación:</Text> pérdida de electrones (↑ número de oxidación){"\n"}
                             <Text style={styles.bold}>• Reducción:</Text> ganancia de electrones (↓ número de oxidación){"\n\n"}
                            <Text style={styles.subtopicTitle}>4.6. Aplicaciones.</Text>{"\n"}
                            <Text style={styles.bold}>Industria:</Text> fabricación de fertilizantes, fármacos, plásticos.{"\n"}
                            <Text style={styles.bold}>Medicina:</Text> metabolismo, tratamientos.{"\n"}
                            <Text style={styles.bold}>Energía:</Text> combustión, celdas de combustible.{"\n"}
                            <Text style={styles.bold}>Medio ambiente:</Text> tratamiento de aguas, reacciones fotocatalíticas{"\n"}.
                            <Text style={styles.bold}>Tecnología:</Text> baterías, sensores químicos, síntesis de nuevos materiales.{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.7. Cálculos estequiométricos con reacciones químicas</Text>{"\n"}
                            <Text style={styles.subtopicTitle}>4.7.1. Reacción óxido reducción en electroquímica</Text>{"\n"}
                            Las celdas electroquímicas funcionan mediante reacciones redox:{"\n"}
                            Celdas galvánicas (pilas): generan corriente eléctrica espontáneamente.{"\n"}
                            Celdas electrolíticas: requieren energía para forzar una reacción no espontánea.{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.7.2. Fuerza electromotriz (fem) en una celda electroquímica</Text>{"\n"}
                            Es la diferencia de potencial eléctrico entre el ánodo y el cátodo de una celda:{"\n"}
                            fem = E°(cátodo) - E°(ánodo){"\n"}

                            Si fem {'>'} 0, la reacción es espontánea.{"\n"}

                            Se mide en voltios (V).{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.7.3. Calculo de la fem y potenciales de óxido reducción</Text>{"\n"}
                            Se utilizan los potenciales estándar de reducción (E°), tomados de tablas.{"\n"}
                            Ejemplo:{"\n"}
                            Si:{"\n"}

                            E°(Cu²⁺/Cu) = +0.34 V{"\n"}

                            E°(Zn²⁺/Zn) = –0.76 V{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.7.4. Electro depósito (cálculo de electro depósito)</Text>{"\n"}
                            Se usa la ley de Faraday para calcular la masa de sustancia depositada:{"\n"}
                            m = (I × t × M) / (n × F){"\n"}
                            Donde:{"\n"}

                           • I = corriente (A){"\n"}

                           • t = tiempo (s){"\n"}

                           • M = masa molar (g/mol){"\n"}

                           • n = número de electrones transferidos{"\n"}

                           • F = constante de Faraday ≈ 96485 C/mol e⁻{"\n\n"}
                            <Text style={styles.subtopicTitle}>4.7.5. Aplicaciones de electroquímica en electrónica.</Text>{"\n"}
                            Baterías recargables (iones de litio, plomo-ácido).{"\n"}
                            Celdas solares (fotovoltaicas).{"\n"}
                            Sensores electroquímicos (glucómetros).{"\n"}
                            Electrólisis para purificación de metales.{"\n\n"}

                            <Text style={styles.subtopicTitle}>4.7.6. nanoquímica (propiedades fisicoquímicas no convencionales de polímeros, catenanos y rotaxanos)</Text>{"\n"}
                           Estudia sistemas a escala nanométrica (1-100 nm) con propiedades distintas a las macroscópicas:{"\n"}

                           • Polímeros conductores: plásticos con propiedades electrónicas.{"\n"}

                           • Catenanos y rotaxanos: moléculas entrelazadas mecánicamente, útiles en nanotecnología molecular.{"\n"}

                           • Cambios en reactividad, color, punto de fusión debido al tamaño nanométrico.{"\n"}

                        </Text>

                    </View>

                    {/* Sección de Videos */}
                              <View ref={videosRef} style={styles.section}>
                                <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                    
                                {[
                                  { title: 'Tipos de Enlaces Químicos. Iónico, Covalente y Metálico', url: 'https://youtu.be/xfvuQSJD2HM?si=SHYnrTOzSzH-7IMK' },
                                  { title: 'Clasificación de las Reacciones Químicas', url: 'https://youtu.be/3OFp2Vxnhds?si=htJL6kuPRjuhT4fq' },
                                  { title: 'Enlace iónico', url: 'https://youtu.be/EHhb_Bcj6NY?si=8jNhe9atD8dZLWBy' },
                                  { title: 'Enlace metálico', url: 'https://youtu.be/qRP_MBItK1I?si=ofxFwlhl4oyWRFF2' },
                                  { title: 'Enlace covalente', url: 'https://youtu.be/7aJ2LpxszPs?si=e9tCd_2oqgqgmS6x' }
                                  
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

export default QuimicaScreen;