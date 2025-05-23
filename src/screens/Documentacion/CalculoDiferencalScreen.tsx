import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CalculoDiferencialScreen = () => {
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
        <Text style={styles.topBarTitle}>Cálculo Diferencial</Text>
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
          <Text style={styles.title}>Cálculo Diferencial</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1PowbBEJvK6IPtskOFhRmOX2BlnhS_bpu/view')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Documentación */}
        <View ref={documentacionRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Documentación Completa</Text>
          
          {/* 1. Funciones */}
          <Text style={styles.topicTitle}>1. Funciones</Text>
          
          <Text style={styles.subtopicTitle}>1.1 Los números reales y sus subconjuntos</Text>
          <Text style={styles.contentText}>
            Los números reales (ℝ) incluyen:
            {"\n"}• Números naturales (ℕ): 1,2,3,…
            {"\n"}• Números enteros (ℤ): …,−2,−1,0,1,2,…
            {"\n"}• Números racionales (ℚ): Fracciones a/b, donde a,b∈ℤ, b≠0.
            {"\n"}• Números irracionales (𝕀): √2,π,e, etc., que no pueden expresarse como fracciones.
          </Text>
          
          <Text style={styles.subtopicTitle}>1.2 Intervalos en los reales y su representación gráfica</Text>
          <Text style={styles.contentText}>
            • Intervalo cerrado [a,b]: Incluye extremos.
            {"\n"}Gráfica: [∙—∙].
            {"\n"}• Intervalo abierto (a,b): Excluye extremos.
            {"\n"}Gráfica: (∘—∘).
            {"\n"}• Intervalos semiabiertos: [a,b) o (a,b].
            {"\n"}• Intervalos infinitos: (−∞,a], (b,∞).
          </Text>

          <Text style={styles.subtopicTitle}>1.3 Definiciones básicas</Text>
          <Text style={styles.contentText}>
            • Variable independiente (x): Valor de entrada.
            {"\n"}• Variable dependiente (y): Valor de salida (y=f(x)).
            {"\n"}• Relación: Cualquier conjunto de pares ordenados (x,y).
            {"\n"}• Función: Relación donde cada x tiene un único y.
            {"\n"}• Dominio: Valores posibles de x.
            {"\n"}• Rango: Valores posibles de y.
          </Text>

          <Text style={styles.subtopicTitle}>1.4 Función real de variable real y representaciones</Text>
          <Text style={styles.contentText}>
            • Analítica: f(x)=x²+3.
            {"\n"}• Numérica: Tabla de valores.
            {"\n"}• Gráfica: Parábola en el plano cartesiano.
            {"\n"}• Verbal: "El área de un cuadrado en función de su lado."
          </Text>

          <Text style={styles.subtopicTitle}>1.5 Funciones algebraicas</Text>
          <Text style={styles.contentText}>
            • Polinomiales: f(x)=aₙxⁿ+⋯+a₀ (ej. cuadráticas, cúbicas).
            {"\n"}• Racionales: Cociente de polinomios P(x)/Q(x), Q(x)≠0.
          </Text>

          <Text style={styles.subtopicTitle}>1.6 Funciones trascendentes</Text>
          <Text style={styles.contentText}>
            • Trigonométricas: sin(x), cos(x), tan(x).
            {"\n"}• Logarítmicas: ln(x), logₐ(x).
            {"\n"}• Exponenciales: eˣ, aˣ.
          </Text>

          <Text style={styles.subtopicTitle}>1.7 Funciones definidas por partes</Text>
          <Text style={styles.contentText}>
            Ejemplo:
            {/* {"\n"}f(x) = {"{"} x² si x ≤ 0
            {"\n"}      2x+1 si x > 0 */}
          </Text>

          <Text style={styles.subtopicTitle}>1.8 Operaciones con funciones</Text>
          <Text style={styles.contentText}>
            • Suma: (f+g)(x)=f(x)+g(x).
            {"\n"}• Resta: (f−g)(x)=f(x)−g(x).
            {"\n"}• Multiplicación: (f⋅g)(x)=f(x)⋅g(x).
            {"\n"}• División: (f/g)(x)=f(x)/g(x), g(x)≠0.
            {"\n"}• Composición: (f∘g)(x)=f(g(x)).
          </Text>

          <Text style={styles.subtopicTitle}>1.9 Transformaciones rígidas y no rígidas</Text>
          <Text style={styles.contentText}>
            • Rígidas (sin deformación):
            {"\n"}  o Traslación: f(x)+k, f(x+h).
            {"\n"}  o Reflexión: −f(x), f(−x).
            {"\n"}• No rígidas (cambian forma):
            {"\n"}  o Escalamiento: a⋅f(x), f(bx).
          </Text>

          <Text style={styles.subtopicTitle}>1.10 Funciones pares, impares y ni par ni impar</Text>
          <Text style={styles.contentText}>
            • Par: f(−x)=f(x) (simetría en y).
            {"\n"}• Impar: f(−x)=−f(x) (simetría en origen).
            {"\n"}• Ni par ni impar: No cumple ninguna.
          </Text>

          <Text style={styles.subtopicTitle}>1.11 Función inyectiva, suprayectiva y biyectiva</Text>
          <Text style={styles.contentText}>
            • Inyectiva: Cada y tiene un único x.
            {"\n"}• Suprayectiva: Todo y en el codominio es imagen de algún x.
            {"\n"}• Biyectiva: Inyectiva y suprayectiva.
          </Text>

          <Text style={styles.subtopicTitle}>1.12 La función inversa</Text>
          <Text style={styles.contentText}>
            Si f es biyectiva, su inversa f⁻¹ cumple f⁻¹(f(x))=x.
          </Text>

          <Text style={styles.subtopicTitle}>1.13 La función implícita</Text>
          <Text style={styles.contentText}>
            Ecuación no resuelta para y, ej. x²+y²=1.
          </Text>

          <Text style={styles.subtopicTitle}>1.14 y 1.15 Modelación matemática</Text>
          <Text style={styles.contentText}>
            Ejemplo:
            {"\n"}• Física: s(t)=v₀t+½at² (movimiento uniformemente acelerado).
            {"\n"}• Economía: C(x)=mx+b (función de costos).
          </Text>

          {/* 2. Límites y continuidad */}
          <Text style={styles.topicTitle}>2. Límites y continuidad</Text>
          
          <Text style={styles.subtopicTitle}>2.1 Concepto de límite</Text>
          <Text style={styles.contentText}>
            • Intuitivo: lim(x→a)f(x)=L si f(x) se acerca a L cuando x→a.
            {"\n"}• Indeterminaciones: 0/0, ∞/∞, 0·∞, ∞−∞.
            {"\n"}• Métodos:
            {"\n"}  o Tabular: Evaluar valores cercanos a a.
            {"\n"}  o Gráfico: Observar tendencia en la gráfica.
          </Text>

          <Text style={styles.subtopicTitle}>2.2 Cálculo de límites algebraicos</Text>
          <Text style={styles.contentText}>
            • Laterales: lim(x→a⁺)f(x) y lim(x→a⁻)f(x).
            {"\n"}• Racionales: Factorizar y simplificar.
            {"\n"}• Trascendentes:
            {"\n"}  o lim(x→0)sin(x)/x = 1
            {"\n"}  o lim(x→∞)eˣ = ∞
          </Text>

          <Text style={styles.subtopicTitle}>2.3 Continuidad</Text>
          <Text style={styles.contentText}>
            • En un punto: lim(x→a)f(x)=f(a).
            {"\n"}• Discontinuidades:
            {"\n"}  o Evitable: Límite existe pero f(a) no coincide.
            {"\n"}  o Salto: Límites laterales distintos.
            {"\n"}  o Esencial: Límite no existe (ej. sin(1/x) en x=0).
          </Text>

          {/* 3. La derivada */}
          <Text style={styles.topicTitle}>3. La derivada</Text>
          
          <Text style={styles.subtopicTitle}>3.1 Interpretación</Text>
          <Text style={styles.contentText}>
            • Recta tangente: Pendiente dada por f'(a).
            {"\n"}• Velocidad instantánea: v(t)=ds/dt.
          </Text>

          <Text style={styles.subtopicTitle}>3.2 Incrementos y razón de cambio</Text>
          <Text style={styles.contentText}>
            Δy/Δx = [f(x+h)−f(x)]/h
          </Text>

          <Text style={styles.subtopicTitle}>3.3 Definición formal</Text>
          <Text style={styles.contentText}>
            f'(x) = lim(h→0) [f(x+h)−f(x)]/h
          </Text>

          <Text style={styles.subtopicTitle}>3.4 Reglas de derivación</Text>
          <Text style={styles.contentText}>
            • Potencia: d/dx xⁿ = nxⁿ⁻¹
            {"\n"}• Producto: (fg)' = f'g + fg'
            {"\n"}• Cociente: (f/g)' = (f'g - fg')/g²
            {"\n"}• Cadena: d/dx f(g(x)) = f'(g(x))·g'(x)
            {"\n"}• Trigonométricas: d/dx sin(x) = cos(x)
            {"\n"}• Exponenciales: d/dx eˣ = eˣ
          </Text>

          <Text style={styles.subtopicTitle}>3.5 Derivación implícita</Text>
          <Text style={styles.contentText}>
            Ejemplo: x²+y²=1 ⇒ 2x+2y dy/dx=0
          </Text>

          <Text style={styles.subtopicTitle}>3.6 Derivadas superiores</Text>
          <Text style={styles.contentText}>
            f''(x) = d/dx f'(x)
          </Text>

          {/* 4. Aplicaciones de la derivada */}
          <Text style={styles.topicTitle}>4. Aplicaciones de la derivada</Text>
          
          <Text style={styles.subtopicTitle}>4.1 Teoremas fundamentales</Text>
          <Text style={styles.contentText}>
            • Rolle: Si f es continua en [a,b] y diferenciable en (a,b) con f(a)=f(b), entonces existe c∈(a,b) tal que f'(c)=0.
            {"\n"}• Valor medio: Existe c tal que f'(c)=[f(b)−f(a)]/(b−a).
          </Text>

          <Text style={styles.subtopicTitle}>4.2-4.6 Monotonía y extremos</Text>
          <Text style={styles.contentText}>
            • Creciente: f'(x){'>'}0.
            {/* {"\n"}• Decreciente: f'(x)<0.
            {"\n"}• Máximos y mínimos:
            {"\n"}  o Primera derivada: Cambio de signo en f'.
            {"\n"}  o Segunda derivada: f''(c)>0 (mínimo), f''(c)<0 (máximo).
            {"\n"}• Puntos de inflexión: Donde f''(x) cambia de signo. */}
          </Text>

          <Text style={styles.subtopicTitle}>4.7-4.12 Otras aplicaciones</Text>
          <Text style={styles.contentText}>
            • Optimización: Maximizar área, minimizar costos.
            {"\n"}• Diferenciales: dy = f'(x)dx.
            {"\n"}• Regla de L'Hôpital: Para límites indeterminados 0/0 o ∞/∞, derivar numerador y denominador.
          </Text>
        </View>

        {/* Sección de Videos */}
        <View ref={videosRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
          
          {[
            {title: 'Introducción al Cálculo Diferencial', url: 'https://youtu.be/mQYnBIVWu_8'},
            {title: 'Límites y continuidad', url: 'https://youtu.be/rd2jKGQJucE?list=PLeySRPnY35dFSDPi_4Q5R1VCGL_pab26A'},
            {title: 'Derivadas básicas', url: 'https://youtu.be/_GW79tPHmVA?list=PLeySRPnY35dFSDPi_4Q5R1VCGL_pab26A'},
            {title: 'Reglas de derivación', url: 'https://youtu.be/NYE1GhhiF7E?list=PLeySRPnY35dFSDPi_4Q5R1VCGL_pab26A'},
            {title: 'Aplicaciones de la derivada', url: 'https://youtu.be/j1nwW8eyD0Q?list=PLeySRPnY35dFSDPi_4Q5R1VCGL_pab26A'},
            {title: 'Problemas de optimización', url: 'https://youtu.be/Htu9cJE6JRk'},
            {title: 'Ejercicios resueltos', url: 'https://youtu.be/fSMNIw87PF4'}
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

export default CalculoDiferencialScreen;