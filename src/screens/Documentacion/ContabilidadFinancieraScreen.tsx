// contabilidad financiera
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ContabilidadFinancieraScreen = () => {
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
        <Text style={styles.topBarTitle}>Contabilidad Financiera</Text>
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
          <Text style={styles.title}>Contabilidad Financiera</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>

          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity
              style={styles.pdfButton}
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1fOJj7ZR4J_5JWF0nXHoEeKY_0P-3tfY7/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
          {/* Sección de Documentación */}
          <View ref={documentacionRef} style={styles.section}>
            <Text style={styles.sectionTitle}>Documentación Completa</Text>
            {/*1 Conceptos Generales de la Contabilidad*/}
            <Text style={styles.topicTitle}>1 Conceptos Generales de la Contabilidad</Text>
            <Text style={styles.subtopicTitle}>1.1 Concepto de contabilidad.</Text>
            <Text style={styles.contentText}>La contabilidad es una disciplina que se encarga de registrar, clasificar,
              resumir y analizar las operaciones económicas de una entidad.{"\n"}
              Su finalidad principal es proporcionar información financiera útil para la toma de decisiones.</Text>
            <Text style={styles.subtopicTitle}>1.2 Información financiera: objetivo e importancia, características y usuarios</Text>
            <Text style={styles.contentText}>
              <Text style={styles.bold}>Objetivo e importancia</Text>{"\n"}La información financiera tiene como objetivo principal proveer
              datos precisos sobre la situación económica y financiera de una entidad, lo que ayuda a tomar decisiones informadas y responsables.{"\n"}
              {"\n"}<Text style={styles.bold}>Importancia</Text>{"\n"}•Permite evaluar el rendimiento de la empresa.{"\n"}•Facilita el acceso a financiamiento.
              {"\n"}•Ayuda a cumplir con obligaciones fiscales.{"\n"}{"\n"}
              <Text style={styles.bold}>Características de la información financiera</Text>{"\n"}
              <Text style={styles.bold}>Confiabilidad:</Text>Los datos deben ser verídicos y comprobables.{"\n"}
              <Text style={styles.bold}>Relevancia:</Text>Deben servir para tomar decisiones importantes.{"\n"}
              <Text style={styles.bold}>Comparabilidad</Text>Permite analizar resultados de diferentes periodos o empresas.{"\n"}
              <Text style={styles.bold}>Comprensibilidad: </Text>Debe estar redactada en un lenguaje claro.{"\n"}
              <Text style={styles.bold}>Oportunidad:</Text> Debe emitirse a tiempo para ser útil.{"\n"}{"\n"}
              <Text style={styles.bold}>Usuarios de la información financiera</Text>{"\n"}
              <Text style={styles.bold}>Internos</Text>{"\n"}
              •Dueños o socios: Para conocer el estado del negocio.{"\n"}
              •Administradores: Para planificar, controlar y tomar decisiones.{"\n"}
              <Text style={styles.bold}>Externos </Text>{"\n"}
              •Inversionistas: Para decidir si invertir o no.{"\n"}
              •Bancos y acreedores: Para evaluar si otorgan crédito.{"\n"}
              •Gobierno: Para verificar el cumplimiento de impuestos.{"\n"}
              •Proveedores: Para analizar si conviene ofrecer condiciones de pago.{"\n\n"}
              <Text style={styles.subtopicTitle}>1.3 Formas de organización de las entidades</Text>{"\n"}
              Las entidades pueden organizarse legal y estructuralmente de distintas maneras, dependiendo del tipo de actividad, número de socios y responsabilidad legal.{"\n"}
              <Text style={styles.bold}>1. Persona Física: </Text>Es una sola persona que realiza actividades económicas y responde con su patrimonio personal ante deudas.{"\n"}
              <Text style={styles.bold}>2. Sociedad o Persona Moral: </Text>Es una entidad legal formada por dos o más personas con un fin común. Tiene personalidad jurídica independiente de sus socios.{"\n"}
              <Text style={styles.bold}>3. Empresas del sector público: </Text>Son organizaciones propiedad del gobierno que prestan servicios o realizan actividades económicas.{"\n"}
              <Text style={styles.bold}>4. Organizaciones sin fines de lucro: </Text>Son entidades que no buscan beneficios económicos, sino objetivos sociales, culturales o educativos.{"\n\n"}
            </Text>
            <Text style={styles.contentText}>

              {/*2 Estados Financieros*/}
              <Text style={styles.topicTitle}>2 Estados Financieros</Text>{"\n\n"}
              <Text style={styles.subtopicTitle}>2.1 Estado de Situación Financiera: definición,elementos que lo integran, clasificación del
                activo, pasivo y capital, elaboración del balance general, formas de presentación.</Text>{"\n"}
              El Estado de Situación Financiera, también conocido como Balance General, es un informe contable que muestra la posición económica y financiera de una empresa en un momento específico.
              Refleja lo que la empresa posee (activos), lo que debe (pasivos) y el capital que aportan los propietarios (capital contable).{"\n\n"}
              <Text style={styles.bold}>Elementos que lo integran: </Text>{"\n"}
              1. Activo: Bienes y derechos que posee la empresa.{"\n"}
              2. Pasivo: Obligaciones y deudas que la empresa tiene con terceros.{"\n"}
              3.Capital o patrimonio: Recursos aportados por los propietarios y las utilidades retenidas.{"\n\n"}
              <Text style={styles.bold}>Clasificación del Activo, Pasivo y Capital: </Text>{"\n"}
              <Text style={styles.bold}>Activo</Text>{"\n"}
              •Activo Circulante: Bienes y derechos que se espera convertir en efectivo en menos de un año.{"\n"}
              •Activo No Circulante: Bienes y derechos de larga duración.{"\n"}
              <Text style={styles.bold}>Pasivo</Text>{"\n"}
              •Pasivo Circulante: Deudas y obligaciones a corto plazo (menos de un año).{"\n"}
              •Pasivo No Circulante: Obligaciones a largo plazo.{"\n"}
              <Text style={styles.bold}>Capital</Text>{"\n"}
              •Aportaciones de los socios o accionistas.{"\n"}
              •Utilidades retenidas (ganancias acumuladas no distribuidas).{"\n\n"}
              <Text style={styles.bold}>Formas de presentación:</Text>{"\n"}
              <Text style={styles.bold}>•Forma clásica o de cuenta:</Text> Se muestran en dos columnas, a la izquierda los activos y a la derecha pasivo y capital.{"\n"}
              <Text style={styles.bold}>•Forma de reporte o en lista:</Text>Se presentan en una sola columna, primero activos, luego pasivos y finalmente capital.{"\n\n"}
              <Text style={styles.subtopicTitle}>2.2 Estado de Resultados: definición, elementos que lo integran, clasificación de ingresos y
                egresos, elaboración del estado de resultados,formas de presentación.</Text>{"\n"}
              El Estado de Resultados, también llamado Estado de Pérdidas y Ganancias, muestra el desempeño financiero de una empresa durante un periodo determinado, indicando ingresos, costos, gastos y utilidad neta.{"\n\n"}
              <Text style={styles.bold}>Elementos que lo integran: </Text>{"\n"}
              <Text style={styles.bold}>•Ingresos:</Text>Entradas de dinero por ventas o servicios.{"\n"}
              <Text style={styles.bold}>•Costos:</Text> Gastos directos asociados a la producción o adquisición de bienes vendidos.{"\n"}
              <Text style={styles.bold}>•Gastos:</Text>Costos indirectos necesarios para la operación.{"\n"}
              <Text style={styles.bold}>•Utilidad o pérdida neta:</Text>Diferencia entre ingresos y gastos.{"\n\n"}
              <Text style={styles.bold}>Clasificación de ingresos y egresos: </Text>{"\n"}
              <Text style={styles.bold}>Ingresos </Text>{"\n"}
              •Ingresos operativos: Ventas de productos o servicios.{"\n"}
              •Ingresos no operativos: Ingresos por intereses, venta de activos, etc.{"\n"}
              <Text style={styles.bold}>Egresos </Text>{"\n"}
              •Costos de ventas: Materia prima, mano de obra directa.{"\n"}
              •Gastos de operación: Administración, ventas, financieros.{"\n\n"}
              <Text style={styles.bold}>Formas de presentación:</Text>{"\n"}
              <Text style={styles.bold}>•Clasificada por función: </Text> Presenta gastos separados por funciones (producción, administración, ventas).{"\n"}
              <Text style={styles.bold}>•Clasificada por naturaleza: </Text> Presenta gastos agrupados según su tipo (sueldos, depreciación, servicios).{"\n\n"}
            </Text>
            <Text style={styles.contentText}>

              {/*3 Teoria de la partida doble*/}
              <Text style={styles.topicTitle}>3 Teoria de la partida doble</Text>{"\n\n"}
              <Text style={styles.subtopicTitle}>3.1 La cuenta</Text>{"\n"}
              Una cuenta es un registro donde se anotan todas las operaciones relacionadas con un elemento específico del patrimonio (activo, pasivo o capital), ingresos o gastos.
              Sirve para identificar el aumento o disminución de ese elemento.{"\n"}
              •Se representa en forma de "T":{"\n"}
              •En el  <Text style={styles.bold}>Debe</Text> se registran aumentos o disminuciones según el tipo de cuenta.{"\n"}
              •En el <Text style={styles.bold}> Haber</Text> igual, pero depende del tipo.{"\n\n"}
              <Text style={styles.subtopicTitle}>3.2 Elementos de la cuenta</Text>{"\n"}
              Cada cuenta tiene tres partes principales:{"\n"}
              <Text style={styles.bold}>1. Nombre: </Text>Indica qué elemento se registra (ej. Caja, Proveedores, Ventas).{"\n"}
              <Text style={styles.bold}>2. Debe(lado izquierdo): </Text>Lugar donde se anotan cargos (aumentos o disminuciones, según la cuenta).{"\n"}
              <Text style={styles.bold}>3. Haber(lado derecho): </Text> Lugar donde se anotan abonos (aumentos o disminuciones, según la cuenta).{"\n\n"}
              <Text style={styles.subtopicTitle}>3.3 Reglas del cargo y del abono</Text>{"\n"}
              Las reglas varían según el tipo de cuenta:{"\n\n"}
              <Text style={styles.subtopicTitle}>3.4 Aplicación práctica</Text>{"\n"}
              Supongamos que una empresa recibe $10,000 en efectivo por la venta de un producto.{"\n"}
              •Aumenta el activo (Caja), por lo que se carga en Debe: $10,000{"\n"}
              •Aumenta el ingreso (Ventas), por lo que se abona en Haber: $10,000{"\n\n"}
            </Text>
            <Text style={styles.contentText}>
              {/*4 Sistemas de Registro*/}
              <Text style={styles.topicTitle}>4 Sistemas de Registro</Text>{"\n\n"}
              <Text style={styles.subtopicTitle}>4.1 Sistemas de registro.</Text>{"\n"}
              Los sistemas de registro contable son métodos que se utilizan para capturar, organizar y registrar las operaciones financieras de una empresa.
              Estos sistemas permiten que la información contable sea ordenada, precisa y útil para la toma de decisiones.{"\n\n"}
              <Text style={styles.subtopicTitle}>4.1.1 Sistema analítico.</Text>{"\n"}
              El Sistema Analítico se caracteriza por registrar las operaciones contables en detalle, desglosando cada cuenta en subcuentas para tener un
              control más específico y preciso.{"\n\n"}
              <Text style={styles.subtopicTitle}>4.1.2 Sistema de inventarios perpetuos.</Text>{"\n"}
              El Sistema de Inventarios Perpetuos es un método de control donde se registra en tiempo real cada compra, venta o movimiento de inventario, actualizando
              continuamente las cantidades y el valor del inventario disponible.{"\n\n"}
              <Text style={styles.subtopicTitle}>4.2 Métodos de valuación de inventarios.</Text>{"\n"}
              Los métodos para valuar inventarios determinan cómo se calcula el costo de los productos vendidos y el inventario final. Los más comunes son:{"\n"}
              <Text style={styles.bold}>PEPS (Primeras Entradas, Primeras Salidas - FIFO): </Text>{"\n"}
              •Se considera que las primeras mercancías compradas son las primeras que se venden.{"\n"}
              •El inventario final está valuado con los costos más recientes.{"\n"}
              <Text style={styles.bold}>UEPS (Últimas Entradas, Primeras Salidas - LIFO): </Text>{"\n"}
              •Se considera que las últimas mercancías compradas son las primeras que se venden.{"\n"}
              •El inventario final está valuado con los costos más antiguos.{"\n\n"}
              <Text style={styles.subtopicTitle}>4.3 Sistemas de pólizas en software.</Text>{"\n"}
              Las pólizas contables son documentos o registros donde se anotan de manera ordenada y autorizada las operaciones económicas. En la contabilidad computarizada,
              los sistemas de pólizas integran funcionalidades para:{"\n"}
              •Crear, modificar y almacenar pólizas electrónicas.{"\n"}
              •Controlar la aprobación y revisión de pólizas.{"\n"}
              •Automatizar el registro de asientos contables.{"\n"}
              •Facilitar la generación de reportes y estados financieros.{"\n"}
              •Integrar con módulos de facturación, inventarios y cuentas por pagar/cobrar.{"\n\n"}
            </Text>
            <Text style={styles.contentText}>
              {/* 5 Análisis e Interpretación de la Información Financiera*/}
              <Text style={styles.topicTitle}>5 Análisis e Interpretación de la Información Financiera</Text>{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1 Concepto y clasificación de los métodos de análisis.</Text>{"\n"}
              El análisis financiero consiste en estudiar y evaluar la información contenida en los estados financieros para tomar decisiones informadas sobre la situación económica
              y financiera de una empresa.{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.1 Método de porcientos integrales.</Text>{"\n"}
              Este método consiste en expresar cada partida de los estados financieros como un porcentaje del total del estado. Por ejemplo
              •En el Balance General, cada cuenta se expresa como porcentaje del total de activos.{"\n"}
              •En el Estado de Resultados, cada partida se expresa como porcentaje de las ventas netas.{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.2 Método de razones financieras.</Text>{"\n"}
              Las razones financieras son indicadores que se obtienen al relacionar dos partidas de los estados financieros para evaluar aspectos específicos de la empresa, tales como liquidez,
              rentabilidad, endeudamiento y eficiencia.{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.3 Método de tendencias.</Text>{"\n"}
              Este método analiza la evolución de las partidas financieras a lo largo del tiempo, detectando patrones y cambios que permiten prever el comportamiento futuro.
            </Text>
          </View>
          {/* Sección de Videos */}
          <View ref={videosRef} style={styles.section}>
            <Text style={styles.sectionTitle}>Videos de Apoyo</Text>

            {[
              { title: 'Balance General,paso a paso', url: 'https://youtu.be/iSNMvzR8-8U?si=FaoSWD1gOIUaDZEm' },
              { title: 'Balance General', url: 'https://youtu.be/Xq3zzSFZs4E?si=pHum8bY6XXdkGxWK' },
              { title: 'CUENTAS DE BALANCE GENERAL: Activo, Pasivo y Capital Contable ', url: 'https://youtu.be/BDNRUeiwjCU?si=fWmLner8QNL3I_m1' }
            
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

export default ContabilidadFinancieraScreen;