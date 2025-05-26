// Probabilidad y estadistica
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const ProbabilidadEstadisticaScreen = () => {
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
        <Text style={styles.topBarTitle}>Probabilidad y Estadística</Text>
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
          <Text style={styles.title}>Probabilidad y Estadística</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>

          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity
              style={styles.pdfButton}
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1BHQocPcqlsv2yZ6eP2ml7cceGT0J-LKH/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
          {/* Sección de Documentación */}
          <View ref={documentacionRef} style={styles.section}>
            <Text style={styles.sectionTitle}>Documentación Completa</Text>

            {/*1 Estadística descriptiva.*/}
            <Text style={styles.topicTitle}>1 Estadística descriptiva.</Text>{"\n"}
            <Text style={styles.subtopicTitle}>1.1 Conceptos básicos de estadística: Definición, Teoría de decisión, Población, Muestra aleatoria, Parámetros aleatorios.</Text>{"\n"}
            <Text style={styles.contentText}>
              La estadística es una rama de las matemáticas que se encarga de recoger, organizar, analizar e interpretar datos para tomar decisiones o sacar conclusiones. Se divide en:{"\n"}
              <Text style={styles.bold}> Estadística descriptiva:</Text> resume o describe características de un conjunto de datos.{"\n"}
              <Text style={styles.bold}> Estadística inferencial:</Text> permite hacer predicciones o generalizaciones sobre una población a partir de una muestra.{"\n"}
              <Text style={styles.bold}>Teoría de decisión</Text>{"\n"}
              Es un enfoque cuantitativo para tomar decisiones óptimas bajo condiciones de incertidumbre. Involucra:{"\n"}
              • Identificar alternativas posibles.{"\n"}
              • Evaluar riesgos y beneficios.{"\n"}
              • Elegir la opción con mayor utilidad esperada.{"\n"}
              <Text style={styles.bold}> Población</Text>{"\n"}
              Es el conjunto total de elementos o individuos que comparten una característica en común y sobre los que se desea obtener información.{"\n"}
              <Text style={styles.bold}>Muestra aleatoria</Text> {"\n"}
              Es un subconjunto de la población, seleccionado de manera que cada elemento tenga la misma probabilidad de ser elegido. Permite inferencias válidas sobre la población.{"\n"}
              <Text style={styles.bold}> Parámetros aleatorios</Text>{"\n"}
              Son valores numéricos que describen características de la población, como la media poblacional (μ), la varianza poblacional (σ²), etc. Se estiman a partir de estadísticas de muestra.{"\n\n"}
              <Text style={styles.subtopicTitle}>1.2 Descripción de datos: Datos agrupados y no agrupados, Frecuencia de clase, Frecuencia relativa, Punto medio, Límites.</Text>{"\n"}
              <Text style={styles.bold}>Datos agrupados y no agrupados</Text>{"\n"}
              <Text style={styles.bold}> No agrupados:</Text> datos presentados tal como se recogen (lista de números sin clasificar).{"\n"}
              <Text style={styles.bold}> Agrupados:</Text> datos organizados en clases o intervalos, especialmente cuando el conjunto es grande.{"\n"}
              <Text style={styles.bold}>Frecuencia de clase</Text>{"\n"}
              Número de veces que los datos caen dentro de un intervalo específico.{"\n"}
              <Text style={styles.bold}> Frecuencia relativa</Text>{"\n"}
              Frecuencia de clase dividida por el total de observaciones. Indica la proporción.{"\n"}
              <Text style={styles.bold}>Punto medio</Text>{"\n"}
              Es el promedio entre el límite inferior y el superior de una clase.{"\n"}
              Fórmula:{"\n"}
              Punto medio = (Límite inferior + Límite superior) / 2{"\n"}
              <Text style={styles.bold}>Límites</Text>{"\n"}
              <Text style={styles.bold}> Límites reales:</Text> los valores extremos reales que puede tomar cada clase.{"\n"}
              <Text style={styles.bold}> Límites aparentes:</Text> los valores que se muestran en la tabla.{"\n\n"}
              <Text style={styles.subtopicTitle}>1.3 Medidas de tendencia central: Media aritmética, geométrica y ponderada, Mediana, Moda, Medidas de dispersión, Varianza, Desviación estándar, Desviación media, Desviación mediana, Rango.</Text>{"\n"}
              <Text style={styles.bold}>Medidas de Tendencia Central</Text>{"\n"}
              Son valores que representan o resumen un conjunto de datos. Las principales son:{"\n"}
              <Text style={styles.bold}>Media Aritmética (promedio)</Text>{"\n"}
              Se obtiene sumando todos los valores y dividiendo entre el número total de datos.{"\n"}
              x̄ = (∑xᵢ) / n{"\n"}
              <Text style={styles.bold}>Media Geométrica</Text>{"\n"}
              Se utiliza para promediar tasas o porcentajes.{"\n"}
              Media geométrica = ⁿ√(x₁ ⋅ x₂ ⋯ xₙ){"\n"}
              <Text style={styles.bold}> Media Ponderada</Text>{"\n"}
              Usa diferentes pesos para cada valor, útil cuando ciertos datos tienen mayor importancia.{"\n"}
              x̄ₚ = (∑ wᵢ xᵢ) / (∑ wᵢ){"\n"}
              <Text style={styles.bold}> Mediana</Text>{"\n"}
              Es el valor que ocupa el centro de un conjunto de datos ordenados. Si hay un número par de datos, se promedian los dos centrales.{"\n"}
              <Text style={styles.bold}> Moda</Text>{"\n"}
              Es el valor o valores que más se repiten.
              <Text style={styles.bold}>Medidas de Dispersión</Text>{"\n"}
              Indican qué tan dispersos están los datos respecto a una medida de tendencia central.{"\n"}
              <Text style={styles.bold}> Rango</Text>{"\n"}
              Diferencia entre el valor máximo y el mínimo.{"\n"}
              Rango = xₘₐₓ − xₘᵢₙ{"\n"}
              <Text style={styles.bold}>Varianza (σ² o s²)</Text>{"\n"}
              Promedio de los cuadrados de las desviaciones respecto a la media.{"\n"}
              s² = (1 / (n - 1)) · Σ (xᵢ - x̄)²{"\n"}
              <Text style={styles.bold}>Desviación Estándar (σ o s)</Text>{"\n"}
              Raíz cuadrada de la varianza.{"\n"}
              s = √(s²){"\n"}
              <Text style={styles.bold}>Desviación Media</Text>{"\n"}
              Promedio de los valores absolutos de las desviaciones respecto a la media.{"\n"}
              Desviación media = (1 / n) · ∑ |xᵢ - x̄|{"\n"}
              <Text style={styles.bold}>Desviación Mediana</Text>{"\n"}
              Mediana de las desviaciones absolutas respecto a la mediana del conjunto.{"\n\n"}
              <Text style={styles.subtopicTitle}>1.4 Parámetros para datos agrupados.</Text>{"\n"}
              <Text style={styles.bold}>Media Aritmética para datos agrupados:</Text>{"\n"}
              x̄ = (∑ fᵢ xᵢ) / (∑ fᵢ){"\n"}
              donde fᵢ es la frecuencia de la clase y xᵢ el punto medio del intervalo.{"\n"}
              <Text style={styles.bold}>Varianza para datos agrupados:</Text>{"\n"}
              s² = [ ∑ fᵢ (xᵢ - x̄)² ] / ( ∑ fᵢ - 1 ){"\n\n"}
              <Text style={styles.subtopicTitle}>1.5 Distribución de frecuencias.</Text>{"\n"}
              Una tabla que resume los datos indicando cuántas veces ocurre cada valor o intervalo. Incluye:{"\n"}
              <Text style={styles.bold}>Frecuencia absoluta (f):</Text> número de veces que ocurre un valor.{"\n"}
              <Text style={styles.bold}>Frecuencia relativa (fr):</Text> proporción respecto al total.{"\n"}
              fᵣ = n / f{"\n"}
              Frecuencia acumulada: suma de frecuencias hasta un punto.{"\n\n"}
              <Text style={styles.subtopicTitle}>1.6 Técnicas de agrupación de datos.Text</Text>{"\n"}
              Consiste en organizar datos en intervalos. Pasos:{"\n"}
              • Ordenar los datos.{"\n"}
              • Calcular el rango.{"\n"}
              • Determinar número de clases (regla de Sturges k = 1 + 3.322 · log₁₀ n){"\n"}
              • Calcular amplitud de clase: Amplitud = k × Rango{"\n"}
              • Construir la tabla de frecuencia.{"\n\n"}
              <Text style={styles.subtopicTitle}>1.7 Técnicas de muestreo.</Text>{"\n"}
              <Text style={styles.bold}>• Aleatorio simple:</Text> cada elemento tiene la misma probabilidad.{"\n"}
              <Text style={styles.bold}>• Sistemático:</Text> seleccionar cada k-ésimo elemento.{"\n"}
              <Text style={styles.bold}>• Estratificado:</Text> dividir en estratos y tomar muestra proporcional.{"\n"}
              <Text style={styles.bold}>• Por conglomerados:</Text> seleccionar grupos completos (por región, por clase, etc.){"\n"}
              <Text style={styles.bold}>• Muestreo por conveniencia:</Text> según disponibilidad (menos confiable).{"\n\n"}
              <Text style={styles.subtopicTitle}>1.8. Histogramas.</Text>{"\n"}
              Gráfica de barras para datos agrupados. Las barras representan la frecuencia de cada intervalo. Características:{"\n"}
              • Eje horizontal: intervalos.{"\n"}
              • Eje vertical: frecuencias.{"\n"}
              • Las barras están pegadas (a diferencia del diagrama de barras).{"\n"}
            </Text>

            {/*2 Fundamentos de la Teoría de Probabilidad*/}
            <Text style={styles.topicTitle}>2 Fundamentos de la Teoría de Probabilidad.</Text>{"\n"}
            <Text style={styles.subtopicTitle}>2.1 Técnicas de Conteo</Text>{"\n"}
            <Text style={styles.contentText}>
              Métodos para contar elementos o resultados posibles en un experimento o conjunto.{"\n\n"}
              <Text style={styles.subtopicTitle}>2.1.1 Principio aditivo.</Text>{"\n"}
              Si un evento A puede ocurrir de 𝑚 maneras y otro evento B, mutuamente excluyente con A, puede ocurrir de 𝑛 maneras, entonces el número total de maneras para que ocurra
              𝐴 o 𝐵 es:m+n{"\n\n"}
              <Text style={styles.subtopicTitle}>2.1.2 Principio multiplicativo.</Text>{"\n"}
              Si un proceso consta de dos etapas, la primera con 𝑚 posibles resultados y la segunda con 𝑛, entonces el número total de resultados posibles es: m×n{"\n\n"}
              <Text style={styles.subtopicTitle}>2.1.3 Notación Factorial.</Text>{"\n"}
              El factorial de un número entero positivo 𝑛 es el producto de todos los enteros desde 1 hasta 𝑛: n!=n×(n−1)×⋯×2×1{"\n\n"}
              <Text style={styles.subtopicTitle}>2.1.4 Permutaciones.</Text>{"\n"}
              Número de maneras en que se pueden ordenar 𝑛 elementos distintos:{"\n"}
              • Permutaciones de todos los elementos: P<sub>n</sub> = n!{"\n"}
              • Permutaciones de 𝑟 elementos tomados de un total de 𝑛 (orden importa): Pⁿʳ = n! / (n − r)!{"\n\n"}
              <Text style={styles.subtopicTitle}>2.1.5 Combinaciones.</Text>{"\n"}
              Número de formas de seleccionar 𝑟 elementos de un conjunto de 𝑛 sin importar el orden:  C(n, r) = n! / [ r! × (n - r)! ]{"\n\n"}
              <Text style={styles.subtopicTitle}>2.1.6 Diagrama de Árbol.</Text>{"\n"}
              Herramienta visual que muestra todas las posibles combinaciones o resultados de eventos secuenciales, ramificándose desde un nodo inicial.{"\n\n"}
              <Text style={styles.subtopicTitle}>2.1.7 Teorema del Binomio.</Text>{"\n"}
              (a + b)ⁿ = Σₖ₌₀ⁿ (n choose k) · aⁿ⁻ᵏ · bᵏ{"\n\n"}
              <Text style={styles.subtopicTitle}>2.2 Teoría elemental de probabilidad.</Text>{"\n"}
              La probabilidad mide la posibilidad de que ocurra un evento.{"\n"}
              • Espacio muestral (𝑆): conjunto de todos los posibles resultados de un experimento.{"\n"}
              • Evento (𝐴): subconjunto de 𝑆.{"\n"}
              • La probabilidad de un evento 𝐴, denotada 𝑃(𝐴){"\n\n"}
              <Text style={styles.subtopicTitle}>2.3 Probabilidad de Eventos: Definición de espacio muestral, definición de evento, simbología, unión, intersección, diagramas de Venn.</Text>{"\n"}
              <Text style={styles.bold}>• Unión (𝐴∪𝐵):</Text> evento que ocurre si ocurre 𝐴 o 𝐵.{"\n"}
              <Text style={styles.bold}>• Intersección (𝐴∩𝐵):</Text> evento que ocurre si ocurren ambos 𝐴 y 𝐵.{"\n"}
              <Text style={styles.bold}>• Complemento (𝐴𝑐):</Text> evento que no ocurre 𝐴.{"\n"}
              <Text style={styles.bold}>•</Text> Representan visualmente conjuntos y sus relaciones (unión, intersección, complementos).{"\n\n"}
              <Text style={styles.subtopicTitle}>2.4 Probabilidad con Técnicas de Conteo: Axiomas,
                Teoremas.</Text>{"\n"}
              • Axiomas de probabilidad:{"\n"}
              𝑃(𝑆)=1{"\n"}
              0≤𝑃(𝐴)≤1{"\n"}
              Para eventos mutuamente excluyentes{"\n"}
              𝐴1,𝐴2,…{"\n"}
              • Teorema de la adición:{"\n"}
              P(A∪B)=P(A)+P(B)−P(A∩B){"\n\n"}
              <Text style={styles.subtopicTitle}>2.5 Probabilidad condicional: Dependiente, Independiente.</Text>{"\n"}
              • Eventos dependientes: cuando 𝑃(𝐴∣𝐵)≠𝑃(𝐴){"\n"}
              • Eventos independientes: cuando 𝑃(𝐴∣𝐵)=𝑃(𝐴){"\n\n"}
              <Text style={styles.subtopicTitle}>2.6 Ley multiplicativa.</Text>{"\n"}
              Para eventos 𝐴 y 𝐵{"\n"}
              P(A∩B)=P(A)⋅P(B∣A){"\n"}
              Si son independientes,{"\n"}
              P(A∩B)=P(A)⋅P(B){"\n\n"}
              <Text style={styles.subtopicTitle}>2.7 Eventos independientes: Regla de Bayes.</Text>{"\n"}
              Permite actualizar probabilidades condicionales inversas.{"\n"}
            </Text>

            {/*3 Variables Aleatorias.*/}
            <Text style={styles.topicTitle}>3 Variables Aleatorias.</Text>{"\n"}
            <Text style={styles.subtopicTitle}>3.1 Variables aleatorias discretas:</Text>{"\n"}
            <Text style={styles.contentText}>
              <Text style={styles.subtopicTitle}>3.1.1 Distribución de probabilidad en forma general.</Text>{"\n"}
              Una distribución de probabilidad para una variable aleatoria discreta 𝑋 es una función 𝑝(𝑥) que asigna a cada valor posible 𝑥𝑖 la probabilidad 𝑃(𝑋=𝑥𝑖).{"\n\n"}
              <Text style={styles.subtopicTitle}>3.1.2 Valor esperado</Text>{"\n"}
              Es la media ponderada de los valores posibles de 𝑋 según sus probabilidades: E(X) = μ = Σ xᵢ · p(xᵢ){"\n\n"}
              <Text style={styles.subtopicTitle}>3.1.3 Varianza, desviación estándar.</Text>{"\n"}
              <Text style={styles.bold}>Varianza</Text> mide la dispersión de 𝑋 alrededor de su media: Var(X) = σ² = ∑(xᵢ − μ)² · p(xᵢ){"\n"}
              <Text style={styles.bold}>Desviación estándar</Text> es la raíz cuadrada de la varianza: σ = √Var(X){"\n\n"}
              <Text style={styles.subtopicTitle}>3.1.4 Función acumulada.</Text>{"\n"}
              Es la función 𝐹(𝑥) que da la probabilidad de que 𝑋 sea menor o igual a 𝑥: F(x) = P(X ≤ x) = Σ p(xᵢ), donde xᵢ ≤ x{"\n\n"}
              <Text style={styles.subtopicTitle}>3.2 Variables aleatorias Continuas:</Text>{"\n"}
              <Text style={styles.subtopicTitle}>3.2.1 Distribución de probabilidad en forma general.</Text>{"\n"}
              Se describe por una función de densidad de probabilidad (f.d.p.) 𝑓(𝑥) con propiedades:{"\n"}
              • f(x) ≥ 0 para todo x{"\n"}
              • ∫ de -∞ a ∞ de f(x) dx = 1{"\n"}
              <Text style={styles.subtopicTitle}>3.2.2 Valor esperado</Text>{"\n"}
              Es el promedio ponderado según la densidad.{"\n"}
              E(X) = μ = ∫ de -∞ a ∞ de x·f(x) dx{"\n\n"}
              <Text style={styles.subtopicTitle}>3.2.3 Varianza, desviación estándar.</Text>{"\n"}
              <Text style={styles.bold}>Varianza:</Text> Var(X) = σ² = ∫ de -∞ a ∞ de (x − μ)²·f(x) dx{"\n"}
              <Text style={styles.bold}>Desviación estandar:</Text> σ = √Var(X){"\n\n"}
              <Text style={styles.subtopicTitle}>3.2.4 Función acumulada.</Text>{"\n"}
              F(x) = P(X ≤ x) = ∫ from −∞ to x of f(t) dt{"\n\n"}
              <Text style={styles.subtopicTitle}>3.2.5 Cálculos de probabilidad.</Text>{"\n"}
              Para variables continuas, las probabilidades se calculan usando integrales de la función densidad: (a ≤ X ≤ b) = F(b) − F(a) = ∫ from a to b of f(x) dx{"\n"}
            </Text>

            {/*4 Distribuciones de Probabilidad.*/}
            <Text style={styles.topicTitle}>4 Distribuciones de Probabilidad.</Text>{"\n"}
            <Text style={styles.subtopicTitle}>4.1 Función de probabilidad.</Text>{"\n"}
            <Text style={styles.contentText}>
              Para variables discretas, la función de probabilidad 𝑝(𝑥) asigna la probabilidad de que la variable tome un valor específico 𝑥.{"\n"}
              Para variables continuas, se usa la función de densidad de probabilidad 𝑓(𝑥), que describe la probabilidad relativa en un intervalo, tal que:{"\n"}
              P(a ≤ X ≤ b) = ∫ from a to b of f(x) dx{"\n\n"}
              <Text style={styles.subtopicTitle}>4.2 Distribución binomial.</Text>{"\n"}
              Modelo para experimentos con:{"\n"}
              𝑛 ensayos independientes,{"\n"}
              solo dos posibles resultados (éxito o fracaso),{"\n"}
              probabilidad constante 𝑝 de éxito en cada ensayo.{"\n"}
              P(X = k) = C(n, k) · p^k · (1 - p)^(n - k){"\n\n"}
              <Text style={styles.subtopicTitle}>4.3 Distribución hipergeométrica.</Text>{"\n"}
              Modela el número de éxitos en una muestra de tamaño 𝑛 tomada sin reemplazo de una población de tamaño 𝑁, con 𝑀 éxitos totales.{"\n"}
              P(X = k) = [C(M, k) * C(N - M, n - k)] / C(N, n){"\n\n"}
              <Text style={styles.subtopicTitle}>4.4 Distribución de Poisson.</Text>{"\n"}
              Modelo para contar el número de eventos que ocurren en un intervalo fijo de tiempo o espacio, cuando estos eventos son raros e independientes.
              Parámetro 𝜆 = promedio de eventos por intervalo.{"\n"}
              P(X = k) = (λ^k * e^(-λ)) / k!{"\n\n"}
              <Text style={styles.subtopicTitle}>4.5 Distribución normal.</Text>{"\n"}
              Distribución continua con forma de campana, simétrica respecto a la media 𝜇, con desviación estándar 𝜎.{"\n"}
              • Función de densidad: f(x) = (1 / (σ * √(2π))) * e^(-((x - μ)²) / (2σ²)){"\n\n"}
              <Text style={styles.subtopicTitle}>4.6 Distribución T-student.</Text>{"\n"}
              Distribución continua usada para estimar la media de una población normal cuando la varianza es desconocida y el tamaño muestral es pequeño.{"\n"}
              • Depende de los grados de libertad 𝑑𝑓=𝑛−1{"\n"}
              • Similar a la normal, pero con colas más gruesas.{"\n\n"}
              <Text style={styles.subtopicTitle}>4.7 Distribución Chi cuadrada.</Text>{"\n"}
              • Distribución de una suma de cuadrados de variables normales estándar independientes.{"\n"}
              • Usada en pruebas de hipótesis, análisis de varianza y ajuste.{"\n"}
              • Depende de grados de libertad 𝑘.{"\n\n"}
              <Text style={styles.subtopicTitle}>4.8 Distribución F.</Text>{"\n"}
              • Distribución de la razón de dos variables Chi cuadradas independientes divididas por sus grados de libertad.{"\n"}
              • Utilizada en análisis de varianza (ANOVA) y pruebas de hipótesis sobre varianzas.{"\n"}
              • Depende de dos grados de libertad: 𝑑𝑓1 y 𝑑𝑓2.{"\n"}
            </Text>

            {/*5 Regresión lineal.*/}
            <Text style={styles.topicTitle}>5 Regresión lineal.</Text>{"\n"}
            <Text style={styles.subtopicTitle}>5.1 Regresión y correlación.</Text>{"\n"}
            <Text style={styles.contentText}>
              <Text style={styles.subtopicTitle}>5.1.1 Diagrama de dispersión.</Text>{"\n"}
              Gráfico que muestra la relación entre dos variables 𝑋 (independiente) y 𝑌 (dependiente) con puntos que representan pares (𝑥𝑖,𝑦𝑖).{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.2 Regresión lineal simple.</Text>{"\n"}
              Modelo para predecir 𝑌 a partir de 𝑋 mediante una línea recta:Y=β0+β1X+ε{"\n"}
              • 𝛽0: intercepto (valor de 𝑌 cuando 𝑋=0){"\n"}
              • 𝛽1: pendiente (cambio en 𝑌 por unidad de cambio en 𝑋){"\n"}
              • 𝜀: error aleatorio{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.3 Correlación.</Text>{"\n"}
              Mide la fuerza y dirección de la relación lineal entre 𝑋 y 𝑌.{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.4 Determinación y análisis de los coeficientes de correlación y de determinación..</Text>{"\n"}
              Proporción de la variabilidad de 𝑌 explicada por 𝑋: 𝑅2=𝑟2{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.5 Distribución normal bidimensional</Text>{"\n"}
              Distribución conjunta de dos variables aleatorias normales 𝑋 y 𝑌 con medias 𝜇𝑋,𝜇𝑌, varianzas 𝜎𝑋2,𝜎𝑌2, y correlación 𝜌.{"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.6 Intervalos de confianza y pruebas para el
                coeficiente de correlación.</Text>{"\n"}
              Correlación{"\n"}
              Para probar si 𝑟 es significativamente diferente de 0, se usa la transformación de Fisher: z = (1/2) · ln((1 - r) / (1 + r)){"\n\n"}
              <Text style={styles.subtopicTitle}>5.1.7 Errores de medición.</Text>{"\n"}
              Errores que pueden afectar los datos y el análisis, incluyen:{"\n"}
              • Errores sistemáticos: sesgos constantes en la medición.{"\n"}
              • Errores aleatorios: variaciones impredecibles.{"\n"}
              • Impactan en la estimación de parámetros y validez del modelo.{"\n"}
            </Text>

            {/*6 Estadística aplicada.*/}
            <Text style={styles.topicTitle}>6 Estadística aplicada.</Text>{"\n"}
            <Text style={styles.subtopicTitle}>5.1 Regresión y correlación.</Text>{"\n"}
            <Text style={styles.contentText}>
              <Text style={styles.subtopicTitle}>6.1.1 Tipos de muestreo.</Text>{"\n"}
             <Text style={styles.bold}>• Muestreo Aleatorio Simple:</Text> todos los elementos tienen igual probabilidad de ser seleccionados.{"\n"}
             <Text style={styles.bold}>• Muestreo Sistemático:</Text>  se selecciona cada 𝑘-ésimo elemento de la población.{"\n"}
             <Text style={styles.bold}>• Muestreo Estratificado:</Text>  la población se divide en grupos (estratos) y se toma una muestra aleatoria de cada uno.{"\n"}
             <Text style={styles.bold}>• Muestreo por Conglomerados:</Text> la población se divide en grupos (conglomerados) y se seleccionan algunos grupos completos al azar.{"\n"}
             <Text style={styles.bold}>• Muestreo No Aleatorio:</Text> muestreo por conveniencia o juicio, sin probabilidades definidas.{"\n\n"}
              <Text style={styles.subtopicTitle}>6.1.2 Teorema de Límite central.</Text>{"\n"}
              Afirma que, para muestras suficientemente grandes (𝑛 grande), la distribución de la media muestral tiende a una distribución normal, independientemente de la distribución original de la población, con media 𝜇 y varianza 𝜎2/𝑛.{"\n\n"}
              <Text style={styles.subtopicTitle}>6.1.3 Distribución muestral de la media.</Text>{"\n"}
              Si la población tiene media 𝜇 y desviación estándar 𝜎, la media muestral 𝑋ˉ de muestras de tamaño 𝑛 tiene:{"\n"}
              • Media: E(X̄) = μ{"\n"}
              • Desviación estándar: σ<sub>X̄</sub> = σ / √n{"\n\n"}
              <Text style={styles.subtopicTitle}>6.1.4 Distribución muestral de una proporción.</Text>{"\n"}
              Si la proporción poblacional es 𝑝, la proporción muestral p̂ de tamaño 𝑛 tiene aproximadamente distribución normal para 𝑛 grande, con:{"\n"}
               • Media: E(p̂) = p{"\n"}
               • Desviación estándar:  σₚ̂ = √( p(1 - p) / n ){"\n\n"}
              <Text style={styles.subtopicTitle}>6.2 Estimación</Text>{"\n"}
              <Text style={styles.subtopicTitle}>6.2.1 Estimación puntual.</Text>{"\n"}
              Valor único que se usa para estimar un parámetro poblacional, como la media muestral X̄ para estimar 𝜇.{"\n\n"}
              <Text style={styles.subtopicTitle}>6.2.2 Estimación por intervalo.</Text>{"\n"}
              Rango de valores donde, con un cierto nivel de confianza, se espera que esté el parámetro poblacional.{"\n\n"}
              <Text style={styles.subtopicTitle}>6.2.3 Intervalo de confianza para una media.</Text>{"\n"}
              Cuando la desviación estándar poblacional 𝜎 es conocida, y muestra grande:  IC = x̄ ± z_(α/2) · (σ / √n){"\n"}
              Si 𝜎 es desconocida y muestra pequeña, se usa distribución t:   IC = x̄ ± t_(α/2, n−1) · (s / √n){"\n\n"}
              <Text style={styles.subtopicTitle}>6.2.4 Intervalo de confianza para una proporción.</Text>{"\n"}
              Para muestra grande:{"\n"}
              IC = p̂ ± z₍α⁄2₎ · √(p̂(1 − p̂) ⁄ n){"\n\n"}
              <Text style={styles.subtopicTitle}>6.3 Prueba de Hipótesis</Text>{"\n"}
              <Text style={styles.subtopicTitle}>6.3.1 Errores tipo I y II.</Text>{"\n"}
              • Error Tipo I (𝛼): rechazar la hipótesis nula cuando es verdadera.{"\n"}
              • Error Tipo II (𝛽): no rechazar la hipótesis nula cuando es falsa.{"\n\n"}
              <Text style={styles.subtopicTitle}>6.3.2 Pasos para realizar una Prueba de Hipótesis.</Text>{"\n"}
              • Formular hipótesis nula (𝐻0) y alternativa (𝐻𝑎).{"\n"}
              • Elegir nivel de significancia 𝛼.{"\n"}
              • Determinar la estadística de prueba.{"\n"}
              • Calcular valor crítico o valor p.{"\n"}
              • Decidir rechazar o no 𝐻0.{"\n\n"}
              <Text style={styles.subtopicTitle}>6.3.3 Prueba de hipótesis para una media.</Text>{"\n"}
              Con 𝜎 conocida, se usa estadístico 𝑍.{"\n"}
              Con 𝜎 desconocida, se usa estadístico 𝑡.{"\n\n"}
              <Text style={styles.subtopicTitle}>6.3.4 Prueba de hipótesis para una proporción.</Text>{"\n"}
              Para evaluar:𝐻0:𝑝=𝑝0{"\n"}

            </Text>
          </View>

             {/* Sección de Videos */}
                                        <View ref={videosRef} style={styles.section}>
                                          <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
                              
                                          {[
                                            { title: 'Teoría de conjunto', url: 'https://youtu.be/kNr2XrT2gCw?si=fPnf4w2fWHre2fws' },
                                            { title: 'Diagramas de Venn', url: 'https://youtu.be/1EbYydBSmPE?si=yftcvIJBUdKBzJKb' },
                                            { title: 'Variable aleatoria discreta', url: 'https://youtu.be/-o92L9nQbv8?si=ApDSKky5UgIW7G2G' },
                                            { title: 'Distribución binomial', url: 'https://youtu.be/-XxZGvNClkg?si=DNeX_Xg1fKaiFBov' },
                                            { title: 'Distribución normal', url: 'https://youtu.be/K6arYpJP_k4?si=ekws9VEBye-q7a2b' },
                                            { title: 'Regresión Lineal ', url: 'https://youtu.be/gfs5bp2j_bA?si=trXZEBXKFoSnvdMA' },
                                            { title: 'Varianza y desviación estándar ', url: 'https://youtu.be/oZRaDwnpXkY?si=pFuUbzP1UCbGhRTo' },
                                            { title: 'Medidas de tendencia central', url: 'https://youtu.be/dfxCsCZ1c3A?si=ONH_DypUvRgLk4PP' }
                                           
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

export default ProbabilidadEstadisticaScreen;