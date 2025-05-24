// Desarrollo sustentable
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const DesarrolloSustentableScreen = () => {
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
                <Text style={styles.topBarTitle}>Desarrollo Sustentable</Text>
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
                    <Text style={styles.title}>Desarrollo Sustentable</Text>
                    <Text style={styles.subtitle}>Temario de la Materia</Text>

                    <View style={styles.pdfButtonContainer}>
                        <TouchableOpacity
                            style={styles.pdfButton}
                            onPress={() => Linking.openURL('https://drive.google.com/file/d/1T0SZDVVtasB6UMAbcaQsa0eo_Kw6-TJb/view')}
                        >
                            <MaterialIcons name="picture-as-pdf" size={20} color="white" />
                            <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
                        </TouchableOpacity>
                    </View>
                    {/* Sección de Documentación */}
                    <View ref={documentacionRef} style={styles.section}>
                        <Text style={styles.sectionTitle}>Documentación Completa</Text>
                    </View>

                    {/*1 Introducción al Desarrollo Sustentable*/}
                    <Text style={styles.topicTitle}>1 Introducción al Desarrollo Sustentable</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>1.1 Concepto de sustentabilidad.</Text>{"\n"}
                    <Text style={styles.contentText}>
                        La sustentabilidad es la capacidad de satisfacer las necesidades actuales sin comprometer la capacidad de las futuras generaciones para satisfacer sus
                        propias necesidades. Se enfoca en un equilibrio entre el crecimiento económico, el cuidado del medio ambiente y el bienestar social, asegurando que los
                        recursos naturales se utilicen de manera responsable y eficiente para mantener la vida y la calidad del entorno a largo plazo.{"\n\n"}
                        <Text style={styles.subtopicTitle}>1.2 Principios de la sustentabilidad</Text>{"\n"}
                        Los principios fundamentales de la sustentabilidad son:{"\n"}

                        <Text style={styles.bold}>Equidad intergeneracional: </Text> Garantizar que las generaciones futuras tengan acceso a recursos y oportunidades.{"\n"}

                        <Text style={styles.bold}>Integración:</Text> Considerar las dimensiones económica, social y ambiental de manera conjunta y balanceada.{"\n"}

                        <Text style={styles.bold}>Precaución: </Text> Adoptar medidas preventivas ante riesgos ambientales o sociales, incluso cuando no exista certeza científica completa. {"\n"}

                        <Text style={styles.bold}>Responsabilidad:</Text> Cada actor, desde individuos hasta gobiernos y empresas, debe asumir un papel activo en la protección del entorno y el bienestar común.{"\n"}

                        <Text style={styles.bold}>Participación:</Text> Involucrar a todas las partes interesadas en la toma de decisiones para garantizar transparencia y justicia.{"\n\n"}

                        <Text style={styles.subtopicTitle}>1.3 Dimensiones de la sustentabilidad</Text>{"\n"}
                        <Text style={styles.bold}>•Dimensión ambiental:</Text>Conservación y manejo adecuado de los recursos naturales y la biodiversidad, reduciendo la contaminación y el impacto ecológico.{"\n"}
                        <Text style={styles.bold}>•Dimensión social:</Text>Promoción de la equidad, la justicia social, el acceso a servicios básicos, educación y calidad de vida para todas las personas.{"\n"}
                        <Text style={styles.bold}>•Dimensión económica: </Text>Fomento de un desarrollo económico que sea viable, eficiente y justo, que promueva empleos dignos y un crecimiento sostenible
                        sin sobreexplotar recursos.{"\n"}
                    </Text>

                    {/*2 Escenario natural*/}
                    <Text style={styles.topicTitle}>2 Escenario natural</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>2.1 El ecosistema.</Text>{"\n"}
                    <Text style={styles.contentText}>
                        Un ecosistema es una comunidad de organismos vivos (plantas, animales, microorganismos) que interactúan entre sí y con su entorno físico (agua, suelo, aire) en
                        un área determinada. Estas interacciones {"\n"}
                        permiten el flujo de energía y el ciclo de nutrientes, manteniendo el equilibrio ecológico.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.2 Flujo de energía.</Text>{"\n"}
                        El flujo de energía en un ecosistema comienza con la energía solar, que es captada por los productores (plantas y otros organismos fotosintéticos). Esta energía pasa a los consumidores
                        (herbívoros, carnívoros) y finalmente a los descomponedores, que reciclan materia orgánica. La energía disminuye en cada nivel trófico debido a la pérdida en forma de calor.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.3 Biósfera</Text>{"\n"}
                        La biósfera es la capa del planeta Tierra donde se desarrolla la vida, incluyendo todos los ecosistemas y organismos vivos, así como sus interacciones con el medio físico.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.3.1 Hidrósfera</Text>{"\n"}
                        La hidrósfera comprende todas las aguas del planeta, incluyendo océanos, ríos, lagos, glaciares y aguas subterráneas, que son esenciales para la vida y los procesos ecológicos.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.3.2 Litósfera</Text>{"\n"}
                        La litósfera es la capa sólida externa de la Tierra, formada por la corteza y parte del manto superior. Proporciona suelo y minerales que sustentan la vida terrestre.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.3.3 Atmósfera</Text>{"\n"}
                        La atmósfera es la capa gaseosa que rodea la Tierra, compuesta principalmente por nitrógeno, oxígeno y otros gases. Regula la temperatura, protege contra la radiación solar dañina y
                        es vital para la respiración de los seres vivos.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.3.4 Ciclos biogeoquímicos (C, H, O, N, P)</Text>{"\n"}
                        Son procesos naturales que permiten el reciclaje de elementos esenciales para la vida:{"\n"}
                        <Text style={styles.bold}>•Ciclo del carbono (C): </Text>Movimiento del carbono entre la atmósfera, organismos, suelo y océanos.{"\n"}
                        <Text style={styles.bold}>•Ciclo del hidrógeno (H) y oxígeno (O):</Text> Principalmente a través del agua y la respiración.{"\n"}
                        <Text style={styles.bold}>•Ciclo del nitrógeno (N): </Text> Principalmente a través del agua y la respiración.{"\n"}
                        <Text style={styles.bold}>•Ciclo del fósforo (P): </Text>Movimiento del fósforo en el suelo, agua y organismos, importante para el ADN y ATP.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.3.5 Biodiversidad</Text>{"\n"}
                        La biodiversidad se refiere a la variedad de vida en todas sus formas: genética, de especies y ecosistémica. Es fundamental para la resiliencia de los ecosistemas y
                        la provisión de servicios ambientales.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.4 Estrategias de sustentabilidad para el manejo de recursos naturales</Text>{"\n"}
                        <Text style={styles.subtopicTitle}>2.4.1 Servicios ambientales</Text>{"\n"}
                        Son beneficios que los ecosistemas proporcionan a los humanos, como la purificación del agua, polinización, control climático, y provisión de alimentos y materias primas.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.4.2 Programas sectoriales de medio ambiente y recursos naturales</Text>{"\n"}
                        Estos programas integran políticas y acciones para el desarrollo social y económico sostenible en sectores clave:{"\n"}
                        •Desarrollo social.{"\n"}
                        •Economía.{"\n"}
                        •Agriculttura,ganadería y pesca.{"\n"}
                        •Salud.{"\n"}
                        •Turismo.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.4.3 Derecho, Legislación y normatividad ambiental para el desarrollo sustentable</Text>{"\n"}
                        Marco legal que regula el uso y conservación de los recursos naturales, protegiendo el medio ambiente y garantizando la
                        equidad social y económica para un desarrollo sustentable.{"\n\n"}
                        <Text style={styles.subtopicTitle}>2.4.4 Ordenamiento ecológico territorial</Text>{"\n"}
                        Proceso de planificación que busca organizar el uso del territorio considerando sus características ecológicas para minimizar impactos ambientales,
                        proteger áreas naturales y promover un desarrollo armonioso.{"\n"}
                    </Text>

                    {/*3 Escenario socio-cultural*/}
                    <Text style={styles.topicTitle}>3 Escenario socio-cultural</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>3.1 Sociedad y organización social</Text>{"\n"}
                    <Text style={styles.contentText}>
                        La sociedad es el conjunto de individuos que conviven e interactúan dentro de un espacio determinado, formando grupos y estructuras organizadas. La organización social se refiere
                        a las formas en que estas personas se relacionan, establecen normas, roles y sistemas de autoridad para mantener el orden, cooperación y desarrollo colectivo.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.2 Cultura y diversidad socio-cultural</Text>{"\n"}
                        La cultura comprende los valores, tradiciones, creencias, costumbres y formas de vida compartidas por un grupo social.
                        La diversidad socio-cultural reconoce la coexistencia de múltiples culturas y expresiones dentro de una sociedad, enriqueciendo el tejido social y promoviendo el respeto y la inclusión.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.2.1 Desarrollo humano</Text>{"\n"}
                        El desarrollo humano se centra en ampliar las capacidades de las personas para que puedan llevar vidas plenas y satisfactorias. Esto incluye aspectos como la educación, la salud,
                        la participación social y el acceso a oportunidades que mejoren su bienestar.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.2.2 Índice de desarrollo humano</Text>{"\n"}
                        El IDH es un indicador que mide el progreso de una población en términos de salud (esperanza de vida), educación (años promedio y esperados de escolaridad) y nivel de vida
                        (ingreso per cápita), reflejando el grado de desarrollo integral.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.2.3 Índice de desarrollo social</Text>{"\n"}
                        Este índice evalúa factores más amplios del bienestar social, como el acceso a servicios básicos, la equidad y la calidad de vida, complementando al IDH para ofrecer
                        una visión más completa del desarrollo social.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.2.4 Desarrollo urbano y rural</Text>{"\n"}
                        El desarrollo urbano implica el crecimiento y mejora de las ciudades, enfocado en infraestructura, servicios y calidad de vida para sus habitantes. El desarrollo rural
                        busca fortalecer las zonas no urbanas, promoviendo la agricultura sostenible, el acceso a educación, salud y condiciones dignas para la población rural.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.3 Impacto de actividades humanas sobre la naturaleza</Text>{"\n"}
                        Las actividades humanas, como la agricultura intensiva, la urbanización y la industrialización, han alterado ecosistemas naturales, causando efectos negativos
                        como la contaminación, pérdida de biodiversidad y degradación ambiental.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.3.1Fenómenos poblacionales:desertificación, migración.</Text>{"\n"}
                        <Text style={styles.bold}>Desertificación: </Text> Degradación de tierras en zonas áridas y semiáridas debido a prácticas humanas inadecuadas como la deforestación,
                        sobrepastoreo y el uso excesivo de recursos, lo que provoca la pérdida de productividad del suelo.{"\n"}
                        <Text style={styles.bold}>Migración:  </Text> Desplazamiento de personas de un lugar a otro, generalmente impulsado por factores económicos, sociales o ambientales,
                        que puede afectar tanto a las comunidades que dejan como a las que reciben, generando cambios sociales y presión sobre recursos naturales.{"\n\n"}

                        <Text style={styles.subtopicTitle}>3.4 Cambio climático global: causas y consecuencias.</Text>{"\n"}
                        <Text style={styles.bold}>Causas principales:  </Text> {"\n"}
                        •Emisión de gases de efecto invernadero (dióxido de carbono, metano, óxidos de nitrógeno) derivados de la quema de combustibles fósiles, deforestación e industrias.
                        •Cambios en el uso del suelo y prácticas agrícolas.{"\n"}
                        <Text style={styles.bold}>Consecuencias:  </Text> {"\n"}
                        •Incremento de la temperatura promedio global (calentamiento global).{"\n"}
                        •Alteraciones en patrones de lluvia, sequías más frecuentes e intensas.{"\n"}
                        •Aumento del nivel del mar por deshielo de glaciares y polos.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.5 Estilos de vida y consumo</Text>{"\n"}
                        Los estilos de vida y patrones de consumo tienen un impacto directo en el medio ambiente y el desarrollo sustentable. Los modelos de consumo excesivo y
                        desperdicio generan presión sobre los recursos naturales y aumentan la generación de residuos y contaminación. Promover estilos de vida responsables implica
                        adoptar prácticas de consumo consciente, reducción de residuos, reciclaje y uso eficiente de recursos.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.6 Estrategias de sustentabilidad para el escenario socio-cultural</Text>{"\n"}
                        Para enfrentar los retos socio-ambientales, se han diseñado diversas estrategias y acuerdos internacionales que fomentan un desarrollo sustentable y equitativo.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.6.1 Carta de la tierra</Text>{"\n"}
                        Es una declaración ética que promueve principios y valores para construir una sociedad global justa, sostenible y pacífica. Incluye el respeto y cuidado de
                        la comunidad de la vida, la integridad ecológica, la justicia social y económica, y la democracia participativa.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.6.2 Agenda 21</Text>{"\n"}
                        Es un plan de acción global acordado en la Cumbre de la Tierra de 1992 para promover el desarrollo sostenible a nivel local, nacional y global. Contiene
                        estrategias para combatir la pobreza, proteger el medio ambiente, fomentar la participación ciudadana y mejorar la calidad de vida.{"\n\n"}
                        <Text style={styles.subtopicTitle}>3.6.3 Política ambiental</Text>{"\n"}
                        La política ambiental es el conjunto de normas, leyes y acciones implementadas por gobiernos y organismos para regular y promover la protección del medio
                        ambiente, el uso sostenible de recursos y la mitigación de impactos ambientales, buscando un equilibrio entre desarrollo económico, social y ambiental.{"\n"}
                    </Text>


                    {/*4 Escenario económico*/}
                    <Text style={styles.topicTitle}>4 Escenario económico</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>4.1 Economía y diversidad económica</Text>{"\n"}
                    <Text style={styles.contentText}>
                        La economía estudia cómo las sociedades utilizan sus recursos para producir bienes y servicios y satisfacer necesidades. La diversidad económica se refiere a la variedad
                        de sectores productivos y actividades económicas que contribuyen al desarrollo y estabilidad, incluyendo agricultura, industria, servicios, tecnología y comercio.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.2 Sistemas de producción (oferta y demanda)</Text>{"\n"}
                        Los sistemas de producción se organizan en función de la interacción entre la oferta (cantidad de bienes y servicios que los productores están dispuestos a vender) y
                        la demanda (cantidad que los consumidores desean comprar). Este equilibrio determina los precios y la cantidad producida en el mercado.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.3 Economía global vs economía local</Text>{"\n"}
                        La economía global se refiere a las interconexiones económicas entre países y regiones a nivel mundial, influida por el comercio internacional, inversiones y políticas
                        globales. La economía local se enfoca en actividades productivas dentro de una comunidad o región específica, promoviendo el desarrollo sostenible y el bienestar local.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.4 Producto interno bruto (PIB), distribución del PIB</Text>{"\n"}
                        El PIB mide el valor total de bienes y servicios producidos en un país en un periodo determinado. La distribución del PIB analiza cómo se reparte ese valor entre
                        sectores económicos y entre la población, reflejando desigualdades económicas y sociales.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.5 Externalización e internalización de costos</Text>{"\n"}
                        <Text style={styles.bold}>•Externalización de costos:  </Text> Cuando una empresa o actividad no asume los costos ambientales o sociales que genera, trasladándolos a la sociedad o el ambiente. {"\n"}
                        <Text style={styles.bold}>•Internalización de costos:  </Text> Incorporar esos costos en el precio del producto o servicio, promoviendo prácticas responsables y sostenibles. {"\n\n"}
                        <Text style={styles.subtopicTitle}>4.6 Obsolescencia planificada y percibida</Text>{"\n"}
                        <Text style={styles.bold}>•Obsolescencia planificada:   </Text> Estrategia donde los productos se diseñan para tener una vida útil limitada, incentivando la compra frecuente. {"\n"}
                        <Text style={styles.bold}>•Obsolescencia percibida:  </Text> Cuando los consumidores perciben que un producto está desactualizado o menos atractivo, aunque funcione bien, motivando su reemplazo.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.7 Valoración económica de servicios ambientales</Text>{"\n"}
                        Consiste en asignar un valor monetario a los beneficios que los ecosistemas y servicios naturales ofrecen, como purificación de agua, polinización, control de clima y recreación, para integrar
                        estos valores en la toma de decisiones económicas y políticas.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.8 Estrategias de sustentabilidad para el escenario económico</Text>{"\n"}
                        <Text style={styles.subtopicTitle}>4.8.1 Análisis del ciclo de vida: Huella ecológica.</Text>{"\n"}
                        El análisis del ciclo de vida evalúa el impacto ambiental de un producto o servicio desde su producción hasta su disposición final. La huella ecológica mide la cantidad de
                        recursos naturales que una persona o actividad consume y compara esa demanda con la capacidad del planeta para regenerarlos.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.8.2 Empresas socialmente responsables</Text>{"\n"}
                        Son aquellas que integran prácticas éticas y sostenibles en su operación, cuidando el medio ambiente, promoviendo el bienestar social y garantizando transparencia y responsabilidad en sus procesos.{"\n\n"}
                        <Text style={styles.subtopicTitle}>4.8.3 Oportunidades de desarrollo regional a partir de los servicios ambientales o los recursos naturales.</Text>{"\n"}
                        El aprovechamiento sostenible de recursos naturales y servicios ecosistémicos puede generar oportunidades económicas regionales, como turismo ecológico, agricultura orgánica,
                        energías renovables y conservación que benefician a comunidades locales.{"\n"}
                    </Text>

                    {/*5 Escenario modificado*/}
                    <Text style={styles.topicTitle}>5 Escenario modificado</Text>{"\n"}
                    <Text style={styles.subtopicTitle}>5.1 Crecimiento demográfico,industrialización, uso de la energía.</Text>{"\n"}
                    <Text style={styles.contentText}>
                        El <Text style={styles.bold}> crecimiento demográfico</Text> implica un aumento acelerado de la población, lo que genera mayor demanda de recursos naturales, alimentos, energía y servicios.{"\n"}
                        La <Text style={styles.bold}>industrialización</Text> contribuye al desarrollo económico pero también incrementa el consumo energético y la generación de residuos contaminantes.{"\n"}
                        El  <Text style={styles.bold}>uso de la energía</Text>, especialmente cuando proviene de fuentes no renovables, impacta negativamente en el medio ambiente y el cambio climático.{"\n\n"}
                   <Text style={styles.subtopicTitle}>5.1.1 Fenómenos naturales</Text>{"\n"}
                   Los fenómenos naturales como terremotos, huracanes, sequías e inundaciones interactúan con las actividades humanas, agravando sus efectos y poniendo en riesgo a las comunidades, 
                   especialmente en zonas vulnerables.{"\n\n"}
                   <Text style={styles.subtopicTitle}>5.2 El Estado como regulador del desarrollo.</Text>{"\n"}
                   El Estado tiene un papel fundamental en establecer políticas, leyes y regulaciones que guíen el desarrollo económico, social y ambiental para asegurar el bienestar colectivo y la sustentabilidad.{"\n\n"}
                   <Text style={styles.subtopicTitle}>5.2.1 Constitución política de los Estados Unidos Mexicanos</Text>{"\n"}
                   La Constitución mexicana incluye principios y derechos relacionados con la protección del medio ambiente, la distribución justa de recursos y el desarrollo sustentable,
                    estableciendo bases legales para la regulación estatal.{"\n\n"}
                   <Text style={styles.subtopicTitle}>5.3 Inseguridad alimentaria, social, política, jurídica, económica</Text>{"\n"}
                   La inseguridad en estos ámbitos refleja la falta de acceso suficiente y estable a alimentos nutritivos, la presencia de conflictos sociales, la debilidad en instituciones políticas y jurídicas, 
                   y desigualdades económicas, lo que afecta la estabilidad y desarrollo sostenible.{"\n\n"}
                   <Text style={styles.subtopicTitle}>5.4 Distribución de la riqueza</Text>{"\n"}
                   La distribución de la riqueza se refiere a cómo se reparte el ingreso y los recursos entre la población. Las desigualdades pueden limitar el acceso a oportunidades y recursos,
                    impactando negativamente el desarrollo social y económico.{"\n\n"}
                   <Text style={styles.subtopicTitle}>5.5 Estrategias de sustentabilidad para los escenarios modificados</Text>{"\n"}
                   <Text style={styles.subtopicTitle}>5.5.1 Producción más limpia</Text>{"\n"}
                  Implica mejorar los procesos productivos para reducir la generación de residuos, emisiones contaminantes y consumo de recursos, aumentando la eficiencia ambiental.{"\n\n"}
                   <Text style={styles.subtopicTitle}>5.5.2 Procesos ecoeficientes</Text>{"\n"}
                   Son aquellos que combinan la eficiencia económica con la responsabilidad ambiental, buscando producir más con menos recursos y menor impacto ambiental.{"\n\n"}
                   <Text style={styles.subtopicTitle}>5.5.3 Planes de Desarrollo Nacional Estatal y Municipal</Text>{"\n"}
                   Estos planes establecen objetivos y acciones concretas para promover el desarrollo sustentable a diferentes niveles de gobierno, integrando aspectos sociales, económicos
                    y ambientales para mejorar la calidad de vida y conservar el entorno.{"\n\n"}
                    </Text>

                      {/* Sección de Videos */}
                              <View ref={videosRef} style={styles.section}>
                                <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                    
                                {[
                                  { title: 'Desarrollo sustentable', url: 'https://youtu.be/CnU3e3wkNEY?si=UFB1BS4MieUjIKyw' }
                                
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

export default DesarrolloSustentableScreen;