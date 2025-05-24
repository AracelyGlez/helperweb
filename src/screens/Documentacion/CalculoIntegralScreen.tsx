// Calculo Integral
import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CalculoIntegralScreen = () => {
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
        <Text style={styles.topBarTitle}>Cálculo Integral</Text>
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
          <Text style={styles.title}>Cálculo Integral</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>

          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity
              style={styles.pdfButton}
              onPress={() => Linking.openURL('https://drive.google.com/file/d/143T-JMJZPR9MM_N003oT94jQGV3Gypdg/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
          {/* Sección de Documentación */}
          <View ref={documentacionRef} style={styles.section}>
            <Text style={styles.sectionTitle}>Documentación Completa</Text>

            {/*1 teorema fundamental del calculo*/}
            <Text style={styles.topicTitle}>Teorema fundamental del cálculo.</Text>{"\n"}
            <Text style={styles.subtopicTitle}>1.1 Medición aproximada de figuras amorfas</Text>{"\n"}
            <Text style={styles.contentText}>
              Cuando una figura no tiene una forma regular, como un lago o una hoja, se usa la integración para estimar su área.{"\n"}
              Método clásico: dividir en formas conocidas (rectángulos, trapecios, etc.).{"\n"}
              <Text style={styles.bold}>Ejemplo:</Text>{"\n"}
              Aproximar el área bajo la curva f(x) = x² entre x = 0 y x = 2, usando rectángulos.{"\n"}
              Dividimos en 2 intervalos:{"\n"}
              Alturas: f(0) = 0, f(1) = 1 (usamos extremos izquierdos){"\n"}
              Área ≈ 1·0 + 1·1 = 1{"\n"}
              Esto es una aproximación.{"\n\n"}

              <Text style={styles.subtopicTitle}>1.2 Notación sumatoria</Text>{"\n"}
              Se usa la notación sigma ∑ para representar sumas de muchos términos.{"\n"}
              <Text style={styles.bold}>Ejemplo:</Text>{"\n"}
              ∑ᵢ₌₁⁴ i² = 1² + 2² + 3² + 4² = 30{"\n\n"}

              <Text style={styles.subtopicTitle}>1.3 Sumas de Riemann</Text>{"\n"}
              Aproximan el área bajo una curva usando rectángulos.{"\n"}
              <Text style={styles.bold}>Fórmula:</Text> ∑ᵢ₌₁ⁿ f(xᵢ*) Δx{"\n"}
              Donde Δx = (b - a)/n y xᵢ* es el punto de evaluación (izquierdo, derecho, medio).
              {"\n"}
              <Text style={styles.bold}>Ejemplo:</Text>{"\n"}
              f(x) = x² en [0, 2], n = 2, puntos izquierdos.{"\n"}
              Δx = 1, f(0) = 0, f(1) = 1 → Suma de Riemann ≈ 1·0 + 1·1 = 1{"\n\n"}

              <Text style={styles.subtopicTitle}>1.4 Definición de integral definidan</Text>{"\n"}
              Es el límite de las sumas de Riemann cuando n → ∞.{"\n"}
              <Text style={styles.bold}>Fórmula:</Text> ∫ₐᵇ f(x) dx = limₙ→∞ ∑ᵢ₌₁ⁿ f(xᵢ*) Δx{"\n"}
              <Text style={styles.bold}>Ejemplo:</Text> ∫₀² x² dx = [x³/3]₀² = 8/3{"\n\n"}

              <Text style={styles.subtopicTitle}>1.5 Teorema de existencia (de integrabilidad)</Text>{"\n"}
              Si f(x) es continua en [a, b], entonces es integrable, es decir, su integral definida existe.{"\n\n"}

              <Text style={styles.subtopicTitle}>1.6 Propiedades de la integral definida</Text>{"\n"}
              <Text style={styles.bold}>- Linealidad:</Text> ∫ₐᵇ (c·f(x)) dx = c ∫ₐᵇ f(x) dx{"\n"}
              <Text style={styles.bold}>- Suma:</Text> ∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx{"\n"}
              <Text style={styles.bold}>- Intervalo invertido:</Text> ∫ᵇₐ f(x) dx = − ∫ₐᵇ f(x) dx{"\n"}
              <Text style={styles.bold}>- División de intervalo:</Text> ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫𝚌ᵇ f(x) dx{"\n\n"}

              <Text style={styles.subtopicTitle}>1.7 Función primitiva (antiderivada)</Text>{"\n"}
              Es una función F(x) tal que su derivada es f(x): F'(x) = f(x){"\n"}
              <Text style={styles.bold}>Ejemplo:</Text>   Si f(x) = 2x, entonces F(x) = x²{"\n\n"}
              <Text style={styles.subtopicTitle}>1.8 Teorema del valor intermedio (para integrales)</Text>{"\n"}
              Si f es continua en [a, b], entonces existe un c ∈ [a, b] tal que: ∫ₐᵇ f(x) dx = f(c)(b - a){"\n"}
              <Text style={styles.bold}>Ejemplo:</Text> f(x) = x² en [0, 2], ∫₀² x² dx = 8/3 = f(c)(2 - 0) ⇒ f(c) = 4/3, c ≈ 1.33{"\n\n"}
              <Text style={styles.subtopicTitle}>1.9 Teorema fundamental del cálculo</Text>{"\n"}
              Conecta la derivada y la integral.{"\n"}
              <Text style={styles.bold}>Parte 1:</Text> Si f es continua en [a, b], entonces: F(x) = ∫ₐˣ f(t) dt ⇒ F'(x) = f(x){"\n"}
              <Text style={styles.bold}>Parte 2:</Text> Si F es primitiva de f, entonces: ∫ₐᵇ f(x) dx = F(b) − F(a){"\n\n"}
              <Text style={styles.subtopicTitle}>1.10 Cálculo de integrales definidas básicas</Text>{"\n"}
              <Text style={styles.bold}>Ejemplos:</Text>{"\n"}
              ∫₀² x dx = [x²/2]₀² = 2{"\n"}
              ∫₁⁴ x dx = [x²/2]₁⁴ = (16/2) − (1/2) = 15/2 = 7.5{"\n"}
              ∫₀^π sin x dx = [−cos x]₀^π = (−cos π) + cos 0 = 2{"\n\n"}
            </Text>

            {/*2. Métodos de integración e integral indefinida*/}
            <Text style={styles.topicTitle}>2. Métodos de integración e integral indefinida</Text>{"\n"}
            <Text style={styles.subtopicTitle}>2.1 Definición de integral indefinida</Text>{"\n"}
            <Text style={styles.contentText}> La integral indefinida de una función f(x) es el conjunto de todas las funciones
              F(x) cuya derivada es f(x).{"\n"}
              ∫ f(x) dx = F(x) + C{"\n"}
              Donde C es la constante de integración (porque al derivar una constante se anula).{"\n\n"}
              <Text style={styles.subtopicTitle}>2.2 Propiedades de integrales indefinidas</Text>{"\n"}
              Para funciones f(x), g(x) y constante:{"\n"}
              <Text style={styles.bold}>Linealidad:</Text> ∫ [c f(x)] dx = c ∫ f(x) dx{"\n"}
              <Text style={styles.bold}>Suma/Diferencia:</Text> ∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx{"\n"}
              <Text style={styles.bold}>Constante:</Text> ∫ 0 dx = C{"\n\n"}
              <Text style={styles.subtopicTitle}>2.3 Cálculo de integrales indefinidas</Text>{"\n"}
              {"\n"}<Text style={styles.subtopicTitle}>2.3.1 Integrales directas</Text>{"\n"}
              Aplicar fórmulas básicas conocidas:{"\n"}
              •∫ xⁿ dx = xⁿ⁺¹ / (n + 1) + C,   n ≠ -1{"\n"}
              •∫ eˣ dx = eˣ + C{"\n"}
              •∫ 1/x dx = ln|x| + C{"\n\n"}
              <Text style={styles.subtopicTitle}>2.3.2 Cambio de variable (Sustitución simple)</Text>{"\n"}
              Se usa para integrar funciones compuestas. Si u = g(x), entonces{"\n"}
              •∫ f(g(x)) g'(x) dx = ∫ f(u) du{"\n\n"}
              <Text style={styles.subtopicTitle}>2.3.3 Integración por partes</Text>{"\n"}
              Se basa en la fórmula del producto derivado:{"\n"}
              •∫ u dv = uv − ∫ v du{"\n"}
              Donde eliges u y dv.{"\n\n"}
              <Text style={styles.subtopicTitle}>2.3.4 Integrales trigonométricas</Text>{"\n"}
              Usa identidades trigonométricas para simplificar.{"\n"}
              •∫ sin x dx = -cos x + C{"\n"}
              •∫ cos x dx = sin x + C{"\n"}
              •∫ sec² x dx = tan x + C{"\n"}
              •∫ csc² x dx = -cot x + C{"\n\n"}
              <Text style={styles.subtopicTitle}>2.3.5 Sustitución trigonométrica</Text>{"\n"}
              Se usa para integrales con expresiones como a² − x²,a² + x² o x² − a².{"\n"}
              •Para a² − x²: usa x = a sin θ.{"\n"}
              •Para a² + x²: usa x = a tan θ.{"\n"}
              • Para x² − a²: usa x = a sec θ.{"\n\n"}
              <Text style={styles.subtopicTitle}>2.3.6 Integración por fracciones parciales</Text>{"\n"}
              Para integrar racionales P(x)/Q(x), donde el grado de P es menor que Q:{"\n"}
              Se descompone en sumas de fracciones más simples.{"\n"}
            </Text>

            {/*3. Aplicaciones de la integral*/}
            <Text style={styles.topicTitle}>3. Aplicaciones de la integral</Text>{"\n"}
            <Text style={styles.subtopicTitle}>3.1 Áreas</Text>{"\n"}
            <Text style={styles.contentText}>
              <Text style={styles.subtopicTitle}>3.1.1 Área bajo la gráfica de una función</Text>{"\n"}
              El área bajo la curva de una función f(x) en el intervalo [a,b], cuando f(x) ≥ 0, se calcula con la integral definida:
              A = ∫ₐᵇ f(x) dx{"\n\n"}
              <Text style={styles.subtopicTitle}>3.1.2 Área entre las gráficas de funciones</Text>{"\n"}
              Si f(x) y g(x) son funciones continuas en [a,b] y f(x) ≥ g(x), el área encerrada entre las curvas es:{"\n"}
              A = ∫ₐᵇ [f(x) − g(x)] dx{"\n\n"}
              <Text style={styles.subtopicTitle}>3.2 Longitud de curvas</Text>{"\n"}
              La longitud L de la curva y = f(x), x ∈ [a,b], es:{"\n"}
              L = ∫ₐᵇ √(1 + (dy/dx)²) dx{"\n\n"}
              <Text style={styles.subtopicTitle}>3.3 Cálculo de volúmenes de sólidos de revolución</Text>{"\n"}
              Al girar una región alrededor del eje x, el volumen se calcula con:{"\n"}
              V = π ∫ₐᵇ [f(x)]² dx{"\n\n"}
              <Text style={styles.subtopicTitle}>3.4 Integrales impropias</Text>{"\n"}
              Son integrales con límites infinitos o integrandos con discontinuidades.{"\n\n"}
              <Text style={styles.subtopicTitle}>3.5 Otras aplicaciones</Text>{"\n"}
              <Text style={styles.bold}>•Trabajo en física:</Text> W = ∫ₐᵇ F(x) dx, donde F(x) es fuerza variable.{"\n"}
              <Text style={styles.bold}>•Centro de masa:</Text> Se usa para calcular coordenadas de centroide mediante integrales.{"\n"}
              <Text style={styles.bold}>•Probabilidad:</Text> Función densidad de probabilidad y cálculo de probabilidades.{"\n"}
            </Text>

            {/*4. Series*/}
            <Text style={styles.topicTitle}>4. Series</Text>{"\n"}
            <Text style={styles.subtopicTitle}>4.1 Definición de sucesión</Text>{"\n"}
            <Text style={styles.contentText}>
              Una sucesión es una lista ordenada de números definidos por una regla. Se denota {'{aₙ}'} = a₁, a₂, a₃, …{"\n\n"}
              <Text style={styles.subtopicTitle}>4.2 Definición de serie</Text>{"\n"}
              Una serie es la suma de los términos de una sucesión:{"\n"}
              ∑ⁿ=¹⁽∞⁾ aₙ = a₁ + a₂ + a₃ + …{"\n\n"}
              <Text style={styles.subtopicTitle}>4.2.1 Serie finita</Text>{"\n"}
              Tiene un número limitado de términos: ∑ₙ₌₁ⁿ aₙ = a₁ + a₂ + ⋯ + aᴺ{"\n\n"}
              <Text style={styles.subtopicTitle}>4.2.2 Serie infinita</Text>{"\n"}
              Tiene infinitos términos. Ejemplo: ∑ₙ₌₁^∞ 1/n² = 1/1² + 1/2² + 1/3² + …{"\n\n"}
              <Text style={styles.subtopicTitle}>4.3 Serie numérica y convergencia</Text>{"\n"}
              Una serie converge si su suma total tiende a un número finito.{"\n"}
              Una serie diverge si la suma no tiene límite.{"\n\n"}
              <Text style={styles.subtopicTitle}>4.4 Series de potencias</Text>{"\n"}
              Forma general: ∑ₙ₌₀^∞ aₙ(x−c)ⁿ{"\n"}
              Es una serie centrada en 𝑥=𝑐.{"\n\n"}
              <Text style={styles.subtopicTitle}>4.5 Radio de convergencia</Text>{"\n"}
              Valor 𝑅 tal que:{"\n"}
              •Converge si |x − c| {'>'} R{"\n"}
              •Diverge si |x − c| {'<'} R{"\n"}
              Fórmula: R = limₙ→∞ |aₙ / aₙ₊₁|{"\n\n"}
              <Text style={styles.subtopicTitle}>4.6 Serie de Taylor</Text>{"\n"}
              La serie de Taylor de una función 𝑓(𝑥) centrada en 𝑎{"\n"}
              f(x) = ∑ₙ₌₀^∞ [f⁽ⁿ⁾(a) / n!] · (x - a)ⁿ{"\n\n"}
              <Text style={styles.subtopicTitle}>4.7 Representación de funciones con la serie de Taylor</Text>{"\n"}
              Las funciones pueden representarse como suma infinita de derivadas evaluadas en un punto:{"\n"}
              eˣ = ∑ₙ₌₀^∞ xⁿ / n!{"\n\n"}
              <Text style={styles.subtopicTitle}>4.8 Cálculo de integrales de funciones expresadas como serie de Taylor</Text>{"\n"}
              Cuando una función 𝑓(𝑥) está dada por su serie de Taylor: f(x) = ∑ₙ₌₀^∞ cₙ (x − a)ⁿ{"\n"}
            </Text>
          </View>
          
          {/* Sección de Videos */}
          <View ref={videosRef} style={styles.section}>
            <Text style={styles.sectionTitle}>Videos de Apoyo</Text>

            {[
              { title: 'Integración por partes', url: 'https://youtu.be/93kW5colCAU?si=jiVxSPL09TLrosJU' },
              { title: 'Integración por sustitución', url: 'https://youtu.be/UZyG4jCBMgU?si=HSyNR7pOd6AwgBfc' },
              { title: 'Integrales Trigonométricas ', url: 'https://youtu.be/Zaxr2cf5ACk?si=wNpyztjwCMoh5P67' },
              { title: 'Series de Taylor', url: 'https://youtu.be/vqbEIApe30o?si=BMfI6b1Hpa-bNQOZ' },
              { title: 'Suma de Riemann', url: 'https://youtu.be/ZSjzuFpBoCo?si=RV9pLTsu0hqL47Bt' }
             
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

export default CalculoIntegralScreen;