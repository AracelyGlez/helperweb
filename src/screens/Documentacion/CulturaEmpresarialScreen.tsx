import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CulturaEmpresarialScreen = () => {
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
        <Text style={styles.topBarTitle}>Cultura Empresarial.</Text>
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
          <Text style={styles.title}>Cultura Empresarial</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1U6uIKusPGM0TZ_AjclvhsfXStUfvdvFO/view?usp=sharing')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>
         {/* Sección de Documentación */}
                <View ref={documentacionRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Documentación Completa</Text>

            {/* 1. Contexto de la empresa */}
            <Text style={styles.topicTitle}>1. Contexto de la empresa</Text>

            <Text style={styles.subtopicTitle}>1.1 Elementos de la cultura empresarial</Text>
            <Text style={styles.contentText}>
            • Valores compartidos por empleados y directivos.
            {"\n"}• Normas y hábitos que definen el ambiente laboral.
            {"\n"}• Ejemplo: cultura de innovación en empresas tecnológicas.
            {"\n"}• Prácticas que fomentan el trabajo en equipo.
            {"\n"}• Tradiciones y rituales corporativos.
            </Text>

            <Text style={styles.subtopicTitle}>1.2 Técnicas para desarrollar habilidades emprendedoras y creativas</Text>
            <Text style={styles.contentText}>
            • Brainstorming para generar ideas nuevas.
            {"\n"}• Design thinking para solución creativa de problemas.
            {"\n"}• Networking para conectar con otros emprendedores.
            {"\n"}• Talleres de liderazgo y toma de decisiones.
            {"\n"}• Análisis de casos de éxito empresarial.
            </Text>

            <Text style={styles.subtopicTitle}>1.3 Nombre del proyecto o de la empresa</Text>
            <Text style={styles.contentText}>
            • Elección de un nombre que refleje la misión.
            {"\n"}• Fácil de recordar y pronunciar.
            {"\n"}• Verificar disponibilidad legal y dominio web.
            {"\n"}• Ejemplo: “EcoTech Solutions” para empresa sustentable.
            {"\n"}• Relación con el sector o mercado objetivo.
            </Text>

            <Text style={styles.subtopicTitle}>1.4 Naturaleza</Text>
            <Text style={styles.contentText}>
            • Definir si es empresa de servicios, manufactura o comercio.
            {"\n"}• Ejemplo: empresa dedicada a desarrollo de software.
            {"\n"}• Identificar si es pública o privada.
            {"\n"}• Tamaño de la empresa (micro, pequeña, mediana, grande).
            {"\n"}• Sector económico en el que opera (primario, secundario, terciario).
            </Text>

            <Text style={styles.subtopicTitle}>1.5 Descripción y justificación</Text>
            <Text style={styles.contentText}>
            • Explicar qué hace la empresa y por qué es necesaria.
            {"\n"}• Identificar problemas que resuelve.
            {"\n"}• Público objetivo y mercado.
            {"\n"}• Ejemplo: ofrecer productos orgánicos para consumidores conscientes.
            {"\n"}• Beneficios sociales, económicos o ambientales.
            </Text>

            <Text style={styles.subtopicTitle}>1.6 Misión, visión, objetivos y valores</Text>
            <Text style={styles.contentText}>
            • Misión: propósito actual de la empresa.
            {"\n"}• Visión: meta a largo plazo.
            {"\n"}• Objetivos específicos y medibles.
            {"\n"}• Valores: ética, responsabilidad, calidad.
            {"\n"}• Ejemplo: misión de mejorar la calidad de vida a través de tecnología.
            </Text>

            <Text style={styles.subtopicTitle}>1.7 Análisis FODA</Text>
            <Text style={styles.contentText}>
            • Fortalezas internas (ej. equipo capacitado).
            {"\n"}• Oportunidades externas (ej. crecimiento del mercado).
            {"\n"}• Debilidades internas (ej. recursos limitados).
            {"\n"}• Amenazas externas (ej. competencia fuerte).
            {"\n"}• Estrategias para maximizar fortalezas y minimizar debilidades.
            </Text>

            <Text style={styles.subtopicTitle}>1.8 Ventaja competitiva</Text>
            <Text style={styles.contentText}>
            • Características únicas que diferencian a la empresa.
            {"\n"}• Ejemplo: tecnología patentada o servicio al cliente excepcional.
            {"\n"}• Costos más bajos o calidad superior.
            {"\n"}• Ubicación estratégica.
            {"\n"}• Innovación constante y adaptación rápida.
            </Text>

            <Text style={styles.subtopicTitle}>1.9 Elementos de un plan de negocio</Text>
            <Text style={styles.contentText}>
            • Resumen ejecutivo.
            {"\n"}• Descripción del producto o servicio.
            {"\n"}• Plan de marketing y ventas.
            {"\n"}• Análisis financiero.
            {"\n"}• Estrategias operativas y organizacionales.
            </Text>
            {/* 2. Análisis de Mercado */}
<Text style={styles.topicTitle}>2. Análisis de Mercado</Text>

<Text style={styles.subtopicTitle}>2.1 Análisis del mercado</Text>

<Text style={styles.subtopicTitle}>2.1.1 Definición del producto y productos secundarios</Text>
<Text style={styles.contentText}>
  • Producto principal: Smartphone.
  {"\n"}• Productos secundarios: accesorios como cargadores y audífonos.
  {"\n"}• Diferenciar características y beneficios.
  {"\n"}• Ejemplo: teléfono con cámara avanzada, accesorios para fotografía.
  {"\n"}• Importancia de complementar el producto principal.
</Text>

<Text style={styles.subtopicTitle}>2.1.2 Política de precios</Text>
<Text style={styles.contentText}>
  • Estrategia de precios competitivos.
  {"\n"}• Descuentos por lanzamiento o volumen.
  {"\n"}• Precios premium para productos exclusivos.
  {"\n"}• Ejemplo: precio reducido en temporada de ofertas.
  {"\n"}• Considerar costos, competencia y demanda.
</Text>

<Text style={styles.subtopicTitle}>2.1.3 Perfil de mercado (demanda)</Text>
<Text style={styles.contentText}>
  • Identificar clientes potenciales (edad, ingresos).
  {"\n"}• Demanda creciente en jóvenes tecnológicos.
  {"\n"}• Ejemplo: usuarios que buscan gadgets innovadores.
  {"\n"}• Análisis de hábitos de compra.
  {"\n"}• Segmentar mercado según preferencias.
</Text>

<Text style={styles.subtopicTitle}>2.1.4 Perspectivas de mercado</Text>
<Text style={styles.contentText}>
  • Crecimiento estimado en próximos años.
  {"\n"}• Expansión hacia mercados internacionales.
  {"\n"}• Ejemplo: aumento de ventas en dispositivos inteligentes.
  {"\n"}• Influencia de tendencias tecnológicas.
  {"\n"}• Evaluar riesgos y oportunidades.
</Text>

<Text style={styles.subtopicTitle}>2.1.5 Posibilidad de desarrollo</Text>
<Text style={styles.contentText}>
  • Innovaciones futuras del producto.
  {"\n"}• Integración con tecnologías emergentes.
  {"\n"}• Ejemplo: desarrollo de apps para nuevos dispositivos.
  {"\n"}• Potencial para ampliar línea de productos.
  {"\n"}• Inversión en investigación y desarrollo.
</Text>

<Text style={styles.subtopicTitle}>2.1.6 Planeación estratégica</Text>
<Text style={styles.contentText}>
  • Objetivos a corto y largo plazo.
  {"\n"}• Definir tácticas para posicionamiento.
  {"\n"}• Ejemplo: campañas de marketing específicas.
  {"\n"}• Evaluación periódica de resultados.
  {"\n"}• Ajuste de estrategias según mercado.
</Text>

<Text style={styles.subtopicTitle}>2.2 Competencia</Text>

<Text style={styles.subtopicTitle}>2.2.1 Análisis de los competidores</Text>
<Text style={styles.contentText}>
  • Identificar principales competidores.
  {"\n"}• Evaluar fortalezas y debilidades.
  {"\n"}• Ejemplo: comparar precios y calidad de productos.
  {"\n"}• Monitorear estrategias de marketing.
  {"\n"}• Uso de benchmarking.
</Text>

<Text style={styles.subtopicTitle}>2.2.2 Volumen de ventas</Text>
<Text style={styles.contentText}>
  • Análisis de cifras de ventas actuales.
  {"\n"}• Identificar tendencias y estacionalidad.
  {"\n"}• Ejemplo: incremento en ventas durante festividades.
  {"\n"}• Comparación con competidores.
  {"\n"}• Medición de impacto de promociones.
</Text>

<Text style={styles.subtopicTitle}>2.2.3 Participación en el mercado</Text>
<Text style={styles.contentText}>
  • Porcentaje de ventas en relación con el mercado total.
  {"\n"}• Ejemplo: empresa con 25% del mercado local.
  {"\n"}• Estrategias para aumentar cuota de mercado.
  {"\n"}• Análisis de segmentos capturados.
  {"\n"}• Identificación de nichos potenciales.
</Text>

<Text style={styles.subtopicTitle}>2.2.4 Pronóstico de ventas</Text>
<Text style={styles.contentText}>
  • Estimación de ventas futuras basada en datos.
  {"\n"}• Uso de modelos estadísticos o históricos.
  {"\n"}• Ejemplo: predicción de aumento en próximo trimestre.
  {"\n"}• Considerar factores económicos y sociales.
  {"\n"}• Ajuste según cambios en el mercado.
</Text>

<Text style={styles.subtopicTitle}>2.2.5 Oportunidades de mercado</Text>
<Text style={styles.contentText}>
  • Identificar áreas con baja competencia.
  {"\n"}• Ejemplo: demanda creciente en productos ecológicos.
  {"\n"}• Innovación para cubrir necesidades no atendidas.
  {"\n"}• Colaboraciones estratégicas.
  {"\n"}• Expansión a nuevos segmentos.
</Text>

<Text style={styles.subtopicTitle}>2.3 Plan de marketing</Text>

<Text style={styles.subtopicTitle}>2.3.1 Distribución</Text>
<Text style={styles.contentText}>
  • Canales para llevar el producto al cliente.
  {"\n"}• Ejemplo: venta online y tiendas físicas.
  {"\n"}• Logística y transporte.
  {"\n"}• Alianzas con distribuidores.
  {"\n"}• Optimización de inventarios.
</Text>

<Text style={styles.subtopicTitle}>2.3.2 Relaciones de negocios</Text>
<Text style={styles.contentText}>
  • Alianzas estratégicas con proveedores y socios.
  {"\n"}• Ejemplo: acuerdos con fabricantes de componentes.
  {"\n"}• Fortalecimiento de la cadena de suministro.
  {"\n"}• Negociaciones y contratos.
  {"\n"}• Colaboración para desarrollo conjunto.
</Text>

<Text style={styles.subtopicTitle}>2.3.3 Infraestructura disponible</Text>
<Text style={styles.contentText}>
  • Recursos físicos y tecnológicos de la empresa.
  {"\n"}• Ejemplo: almacenes, centros de distribución.
  {"\n"}• Equipos y sistemas de gestión.
  {"\n"}• Capacidad para atender demanda.
  {"\n"}• Mantenimiento y actualización.
</Text>

<Text style={styles.subtopicTitle}>2.3.4 Ubicación de la empresa y costos asociados</Text>
<Text style={styles.contentText}>
  • Importancia estratégica de la ubicación.
  {"\n"}• Ejemplo: proximidad a mercados clave.
  {"\n"}• Costos de renta, transporte y servicios.
  {"\n"}• Impacto en tiempos de entrega.
  {"\n"}• Accesibilidad para clientes y empleados.
</Text>

<Text style={styles.subtopicTitle}>2.3.5 Fuerza de ventas</Text>
<Text style={styles.contentText}>
  • Equipo responsable de vender y promocionar.
  {"\n"}• Ejemplo: capacitación y motivación del equipo.
  {"\n"}• Estrategias de incentivos.
  {"\n"}• Seguimiento de metas.
  {"\n"}• Uso de CRM para gestionar clientes.
</Text>

<Text style={styles.subtopicTitle}>2.3.6 Promoción y publicidad</Text>
<Text style={styles.contentText}>
  • Campañas publicitarias en medios digitales y tradicionales.
  {"\n"}• Ejemplo: anuncios en redes sociales y televisión.
  {"\n"}• Uso de promociones y descuentos.
  {"\n"}• Branding y posicionamiento.
  {"\n"}• Medición del impacto y alcance.
</Text>

{/* 3. Estudio técnico */}
<Text style={styles.topicTitle}>3. Estudio técnico</Text>

<Text style={styles.subtopicTitle}>3.1 Proceso productivo</Text>

<Text style={styles.subtopicTitle}>3.1.1 Descripción del proceso productivo</Text>
<Text style={styles.contentText}>
  • Secuencia de pasos para fabricar un producto.
  {"\n"}• Ejemplo: producción de yogurt desde la mezcla hasta el envasado.
  {"\n"}• Control de calidad en cada etapa.
  {"\n"}• Importancia de la estandarización.
  {"\n"}• Documentación del proceso.
</Text>

<Text style={styles.subtopicTitle}>3.1.2 Materias primas</Text>
<Text style={styles.contentText}>
  • Insumos básicos para la producción.
  {"\n"}• Ejemplo: leche y cultivos bacterianos para yogurt.
  {"\n"}• Evaluación de calidad y costos.
  {"\n"}• Proveedores confiables.
  {"\n"}• Almacenamiento adecuado.
</Text>

<Text style={styles.subtopicTitle}>3.1.3 Disponibilidad de capital y mano de obra</Text>
<Text style={styles.contentText}>
  • Recursos financieros para inversión.
  {"\n"}• Ejemplo: presupuesto para maquinaria y salarios.
  {"\n"}• Número y capacitación del personal requerido.
  {"\n"}• Análisis de costos laborales.
  {"\n"}• Planificación para crecimiento futuro.
</Text>

<Text style={styles.subtopicTitle}>3.2 Tecnología del producto o servicio</Text>

<Text style={styles.subtopicTitle}>3.2.1 Importancia de la tecnología</Text>
<Text style={styles.contentText}>
  • Mejora en eficiencia y calidad.
  {"\n"}• Ejemplo: uso de maquinaria automatizada en producción.
  {"\n"}• Ventaja competitiva.
  {"\n"}• Adaptación a cambios del mercado.
  {"\n"}• Innovación continua.
</Text>

<Text style={styles.subtopicTitle}>3.2.2 Selección de la tecnología</Text>
<Text style={styles.contentText}>
  • Evaluar opciones según costo y beneficios.
  {"\n"}• Ejemplo: elegir entre equipos manuales o robotizados.
  {"\n"}• Compatibilidad con procesos existentes.
  {"\n"}• Consideración del mantenimiento.
  {"\n"}• Análisis de retorno de inversión.
</Text>

<Text style={styles.subtopicTitle}>3.2.3 Medios de adquisición de la tecnología. Análisis de cotización de fabricantes</Text>
<Text style={styles.contentText}>
  • Compra directa, leasing o desarrollo propio.
  {"\n"}• Ejemplo: comparar precios y garantías de proveedores.
  {"\n"}• Evaluar soporte técnico y capacitación.
  {"\n"}• Negociar condiciones y plazos.
  {"\n"}• Análisis de cotizaciones para mejor decisión.
</Text>

<Text style={styles.subtopicTitle}>3.3 Diagramas de flujo de proceso</Text>

<Text style={styles.subtopicTitle}>3.3.1 Maquinaria o equipo requerido</Text>
<Text style={styles.contentText}>
  • Herramientas necesarias para cada etapa.
  {"\n"}• Ejemplo: mezcladoras, tanques de fermentación.
  {"\n"}• Capacidad y especificaciones técnicas.
  {"\n"}• Evaluar costos y mantenimiento.
  {"\n"}• Compatibilidad con procesos.
</Text>

<Text style={styles.subtopicTitle}>3.3.2 Tiempo y espacio</Text>
<Text style={styles.contentText}>
  • Duración de cada etapa del proceso.
  {"\n"}• Ejemplo: tiempo de fermentación del yogurt.
  {"\n"}• Espacio necesario para maquinaria y operaciones.
  {"\n"}• Optimización para evitar cuellos de botella.
  {"\n"}• Planificación eficiente del área de producción.
</Text>

<Text style={styles.subtopicTitle}>3.3.3 Distancia viajada / transporte</Text>
<Text style={styles.contentText}>
  • Movimiento de materiales entre áreas.
  {"\n"}• Ejemplo: traslado de materias primas a zona de mezcla.
  {"\n"}• Minimizar desplazamientos para ahorrar tiempo.
  {"\n"}• Diseño de layout eficiente.
  {"\n"}• Uso de transportadores o carretillas.
</Text>

<Text style={styles.subtopicTitle}>3.3.4 Necesidades de inventario</Text>
<Text style={styles.contentText}>
  • Cantidad óptima de materias primas y productos.
  {"\n"}• Ejemplo: inventario de leche suficiente para 3 días.
  {"\n"}• Evitar excesos o faltantes.
  {"\n"}• Control y rotación de stock.
  {"\n"}• Sistemas automatizados de gestión.
</Text>

<Text style={styles.subtopicTitle}>3.3.5 Métodos de producción y equipo</Text>
<Text style={styles.contentText}>
  • Producción en lotes, continua o por pedido.
  {"\n"}• Ejemplo: producción continua en línea de yogurt.
  {"\n"}• Equipos específicos para cada método.
  {"\n"}• Adaptabilidad y flexibilidad.
  {"\n"}• Consideraciones de costos.
</Text>

<Text style={styles.subtopicTitle}>3.3.6 Requerimientos de personal</Text>
<Text style={styles.contentText}>
  • Número y perfiles necesarios.
  {"\n"}• Ejemplo: técnicos para operación de maquinaria.
  {"\n"}• Capacitación y experiencia.
  {"\n"}• Turnos y horarios.
  {"\n"}• Planificación para crecimiento.
</Text>

<Text style={styles.subtopicTitle}>3.4 Proveedores</Text>

<Text style={styles.subtopicTitle}>3.4.1 Localización y condiciones de abastecimiento</Text>
<Text style={styles.contentText}>
  • Proveedores locales o internacionales.
  {"\n"}• Ejemplo: proveedores de leche fresca cercanos.
  {"\n"}• Condiciones de entrega y calidad.
  {"\n"}• Evaluación de tiempos y costos.
  {"\n"}• Relación a largo plazo.
</Text>

<Text style={styles.subtopicTitle}>3.4.2 Criterios de evaluación</Text>
<Text style={styles.contentText}>
  • Calidad, precio y confiabilidad.
  {"\n"}• Ejemplo: historial de cumplimiento de proveedores.
  {"\n"}• Flexibilidad y capacidad de respuesta.
  {"\n"}• Certificaciones y estándares.
  {"\n"}• Servicio postventa.
</Text>

<Text style={styles.subtopicTitle}>3.4.3 Alianzas estratégicas</Text>
<Text style={styles.contentText}>
  • Acuerdos para beneficio mutuo.
  {"\n"}• Ejemplo: contratos preferenciales con proveedores.
  {"\n"}• Compartir información y recursos.
  {"\n"}• Desarrollo conjunto de productos.
  {"\n"}• Fortalecer la cadena de suministro.
</Text>

<Text style={styles.subtopicTitle}>3.5 Normatividad</Text>

<Text style={styles.subtopicTitle}>3.5.1 Requerimiento de espacio</Text>
<Text style={styles.contentText}>
  • Normas de seguridad y salud.
  {"\n"}• Ejemplo: metros cuadrados mínimos para producción.
  {"\n"}• Cumplimiento de códigos de construcción.
  {"\n"}• Espacios para almacenamiento y personal.
  {"\n"}• Adaptaciones según legislación.
</Text>

<Text style={styles.subtopicTitle}>3.5.2 Licencias y trámites gubernamentales</Text>
<Text style={styles.contentText}>
  • Permisos de operación y sanidad.
  {"\n"}• Ejemplo: registro sanitario para alimentos.
  {"\n"}• Renovaciones y cumplimiento legal.
  {"\n"}• Documentación requerida.
  {"\n"}• Impacto en tiempos de puesta en marcha.
</Text>

<Text style={styles.subtopicTitle}>3.5.3 Programa de implementación</Text>
<Text style={styles.contentText}>
  • Cronograma para iniciar operaciones.
  {"\n"}• Ejemplo: fases desde adquisición hasta producción.
  {"\n"}• Responsables y recursos asignados.
  {"\n"}• Seguimiento y ajustes.
  {"\n"}• Evaluación de riesgos.
</Text>

<Text style={styles.subtopicTitle}>3.5.4 Derechos del consumidor</Text>
<Text style={styles.contentText}>
  • Garantías y seguridad del producto.
  {"\n"}• Ejemplo: etiquetado claro en productos alimenticios.
  {"\n"}• Políticas de devolución.
  {"\n"}• Atención a reclamos.
  {"\n"}• Cumplimiento de normativas.
</Text>

<Text style={styles.subtopicTitle}>3.5.5 Propiedad industrial y prácticas desleales</Text>
<Text style={styles.contentText}>
  • Protección de patentes y marcas.
  {"\n"}• Ejemplo: registrar la fórmula del producto.
  {"\n"}• Evitar competencia desleal.
  {"\n"}• Denuncia de plagios.
  {"\n"}• Respeto a derechos intelectuales.
</Text>

<Text style={styles.subtopicTitle}>3.5.6 Privacidad y protección de datos personales</Text>
<Text style={styles.contentText}>
  • Manejo responsable de información de clientes y empleados.
  {"\n"}• Ejemplo: cumplir con leyes de protección de datos

</Text>

{/* 4. Organización */}
<Text style={styles.topicTitle}>4. Organización</Text>

<Text style={styles.subtopicTitle}>4.1 Estructura organizacional</Text>

<Text style={styles.subtopicTitle}>4.1.1 Constitución de la empresa</Text>
<Text style={styles.contentText}>
  • Definición legal y formalización.
  {"\n"}• Ejemplo: constitución como sociedad anónima.
  {"\n"}• Registro ante autoridades.
  {"\n"}• Documentos legales como estatutos y actas.
  {"\n"}• Derechos y obligaciones de los socios.
</Text>

<Text style={styles.subtopicTitle}>4.1.2 Organigrama de la empresa</Text>
<Text style={styles.contentText}>
  • Representación gráfica de la estructura.
  {"\n"}• Ejemplo: organigrama jerárquico con director general, gerentes y departamentos.
  {"\n"}• Claridad en roles y responsabilidades.
  {"\n"}• Facilita comunicación interna.
  {"\n"}• Apoyo en la toma de decisiones.
</Text>

<Text style={styles.subtopicTitle}>4.2 Capital humano</Text>

<Text style={styles.subtopicTitle}>4.2.1 Identificación de necesidades</Text>
<Text style={styles.contentText}>
  • Análisis de puestos y habilidades requeridas.
  {"\n"}• Ejemplo: detectar falta de personal en producción.
  {"\n"}• Evaluación de competencias actuales.
  {"\n"}• Planeación para cubrir vacantes.
  {"\n"}• Diagnóstico organizacional.
</Text>

<Text style={styles.subtopicTitle}>4.2.2 Estrategias de cambio</Text>
<Text style={styles.contentText}>
  • Métodos para adaptarse a nuevas circunstancias.
  {"\n"}• Ejemplo: implementar trabajo remoto.
  {"\n"}• Comunicación efectiva.
  {"\n"}• Capacitación y apoyo.
  {"\n"}• Seguimiento de resultados.
</Text>

<Text style={styles.subtopicTitle}>4.2.3 Reclutamiento y contratación</Text>
<Text style={styles.contentText}>
  • Procesos para atraer y seleccionar talento.
  {"\n"}• Ejemplo: publicación de vacantes, entrevistas y pruebas.
  {"\n"}• Evaluación de candidatos.
  {"\n"}• Inclusión y diversidad.
  {"\n"}• Integración al equipo.
</Text>

<Text style={styles.subtopicTitle}>4.2.4 Políticas operativas</Text>
<Text style={styles.contentText}>
  • Normas y procedimientos internos.
  {"\n"}• Ejemplo: horario laboral y reglas de seguridad.
  {"\n"}• Protocolos de comunicación.
  {"\n"}• Código de conducta.
  {"\n"}• Procedimientos para manejo de conflictos.
</Text>

<Text style={styles.subtopicTitle}>4.2.5 Capacitación</Text>
<Text style={styles.contentText}>
  • Formación continua para mejorar habilidades.
</Text>
{/* 5. Análisis Financiero y Estados financieros del proyecto */}
<Text style={styles.topicTitle}>5. Análisis Financiero y Estados financieros del proyecto</Text>

<Text style={styles.subtopicTitle}>5.1 Estados contables</Text>

<Text style={styles.subtopicTitle}>5.1.1 Estado de flujo de caja (ingresos y egresos)</Text>
<Text style={styles.contentText}>
  • Registro de entradas y salidas de dinero.
  {"\n"}• Ejemplo: seguimiento mensual de ventas y pagos.
  {"\n"}• Control de liquidez.
  {"\n"}• Identificación de periodos deficitarios.
  {"\n"}• Planeación de gastos futuros.
</Text>

<Text style={styles.subtopicTitle}>5.1.2 Presupuesto de ventas</Text>
<Text style={styles.contentText}>
  • Estimación de ingresos por ventas.
  {"\n"}• Ejemplo: proyección trimestral de unidades vendidas.
  {"\n"}• Análisis de tendencias de mercado.
  {"\n"}• Base para planificación financiera.
  {"\n"}• Ajustes según estacionalidad.
</Text>

<Text style={styles.subtopicTitle}>5.1.3 Balance General</Text>
<Text style={styles.contentText}>
  • Estado que muestra activos, pasivos y patrimonio.
  {"\n"}• Ejemplo: inventarios, deudas y capital social.
  {"\n"}• Evaluación de la salud financiera.
  {"\n"}• Base para decisiones estratégicas.
  {"\n"}• Comparación entre periodos.
</Text>

<Text style={styles.subtopicTitle}>5.1.4 Estado de resultados</Text>
<Text style={styles.contentText}>
  • Reporte de ingresos, costos y utilidades.
  {"\n"}• Ejemplo: cálculo de utilidad neta anual.
  {"\n"}• Medición de rentabilidad.
  {"\n"}• Análisis de márgenes de ganancia.
  {"\n"}• Identificación de gastos relevantes.
</Text>

<Text style={styles.subtopicTitle}>5.2 Estados financieros</Text>

<Text style={styles.subtopicTitle}>5.2.1 Presupuesto de inversión</Text>
<Text style={styles.contentText}>
  • Planificación de gastos en activos fijos.
  {"\n"}• Ejemplo: compra de maquinaria o software.
  {"\n"}• Evaluación de retorno de inversión.
  {"\n"}• Control del capital invertido.
  {"\n"}• Ajustes para evitar sobrecostos.
</Text>

<Text style={styles.subtopicTitle}>5.2.2 Razones de liquidez y rentabilidad</Text>
<Text style={styles.contentText}>
  • Indicadores financieros para evaluar solvencia y ganancias.
  {"\n"}• Ejemplo: razón corriente y margen neto.
  {"\n"}• Análisis comparativo con la industria.
  {"\n"}• Identificación de fortalezas y debilidades.
  {"\n"}• Base para decisiones de inversión.
</Text>

<Text style={styles.subtopicTitle}>5.2.3 Análisis de sensibilidad</Text>
<Text style={styles.contentText}>
  • Evaluación del impacto de cambios en variables clave.
  {"\n"}• Ejemplo: efecto de variaciones en precios o costos.
  {"\n"}• Simulación de escenarios optimistas y pesimistas.
  {"\n"}• Planificación ante incertidumbre.
  {"\n"}• Mejora en la toma de decisiones.
</Text>

<Text style={styles.subtopicTitle}>5.2.4 Análisis del punto de equilibrio</Text>
<Text style={styles.contentText}>
  • Cálculo del nivel mínimo de ventas para no tener pérdidas.
  {"\n"}• Ejemplo: determinar cuántas unidades vender para cubrir costos.
  {"\n"}• Herramienta para fijar metas.
  {"\n"}• Control de gastos fijos y variables.
  {"\n"}• Evaluación de rentabilidad.
</Text>

<Text style={styles.subtopicTitle}>5.2.5 TIR y Valor Presente Neto</Text>
<Text style={styles.contentText}>
  • Indicadores para evaluar la rentabilidad del proyecto.
  {"\n"}• Ejemplo: cálculo de la Tasa Interna de Retorno.
  {"\n"}• Uso del Valor Presente Neto para decisiones de inversión.
  {"\n"}• Comparación entre proyectos.
  {"\n"}• Análisis financiero avanzado.
</Text>

<Text style={styles.subtopicTitle}>5.2.6 Evaluación de riesgos</Text>
<Text style={styles.contentText}>
  • Identificación y análisis de posibles obstáculos financieros.
  {"\n"}• Ejemplo: riesgo de tipo de cambio o incumplimiento de pagos.
  {"\n"}• Planes de mitigación.
  {"\n"}• Seguimiento constante.
  {"\n"}• Protección del capital.
</Text>

<Text style={styles.subtopicTitle}>5.3 Presentación del plan de negocio</Text>
<Text style={styles.contentText}>
  • Resumen ejecutivo y exposición clara de resultados.
  {"\n"}• Ejemplo: presentación para inversionistas.
  {"\n"}• Uso de gráficos y tablas.
  {"\n"}• Claridad en objetivos y estrategias.
  {"\n"}• Argumentos sólidos para obtener financiamiento.
</Text>




  </View>
           {/* Sección de Videos */}
                <View ref={videosRef} style={styles.section}>
                  <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                  
                  {[
                    {title: 'Cultura organizacional', url: 'https://youtu.be/JO3oMefFuMQ'},
                    {title: '¿Qué es la CULTURA empresarial y porque es tan IMPORTANTE?', url: 'https://youtu.be/jTnbVEiLsLE'},
                    {title: 'Cómo CREAR y MEDIR la CULTURA empresarial', url: 'https://youtu.be/XrYp-wgMOYo'},
                    {title: 'Qué es eso de cultura empresarial', url: 'https://youtu.be/EKG1WmUJsnk'},

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
        
        export default CulturaEmpresarialScreen;



                  