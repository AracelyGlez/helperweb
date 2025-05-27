import React from 'react';
import { View, Text, ScrollView, Linking, TouchableOpacity, StyleSheet, findNodeHandle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const CalculoVectorialScreen = () => {
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
        <Text style={styles.topBarTitle}>Cálculo Vectorial</Text>
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
          <Text style={styles.title}>Cálculo Vectorial</Text>
          <Text style={styles.subtitle}>Temario de la Materia</Text>
          
          <View style={styles.pdfButtonContainer}>
            <TouchableOpacity 
              style={styles.pdfButton} 
              onPress={() => Linking.openURL('https://drive.google.com/file/d/1f8t1mI3RXxoKj-esT3jktvrcBybaK1QQ/view?usp=sharing')}
            >
              <MaterialIcons name="picture-as-pdf" size={20} color="white" />
              <Text style={styles.pdfButtonText}>Ver Temario en PDF</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Sección de Documentación */}
        <View ref={documentacionRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Documentación Completa</Text>

          {/* 1. Vectores en el espacio */}
<Text style={styles.topicTitle}>1. Vectores en el espacio</Text>

        <Text style={styles.subtopicTitle}>1.1 Definición de un vector en el plano y en el espacio y su interpretación geométrica</Text>
        <Text style={styles.contentText}>
        • Un vector en el plano: (3, 4) representa un desplazamiento desde el origen.
        {"\n"}• Vector en el espacio: (2, -1, 5) desde el origen al punto en 3D.
        {"\n"}• Interpretación: dirección, magnitud y sentido del desplazamiento.
        {"\n"}• Un vector nulo: (0, 0) no tiene magnitud ni dirección.
        {"\n"}• Vector unitario: (1/√2, 1/√2) tiene magnitud 1 en el plano.
        </Text>

        <Text style={styles.subtopicTitle}>1.2 Álgebra vectorial y su geometría</Text>
        <Text style={styles.contentText}>
        • Suma de vectores: (1,2) + (3,4) = (4,6).
        {"\n"}• Resta: (5,7) − (2,3) = (3,4).
        {"\n"}• Multiplicación por escalar: 2 × (3, -1) = (6, -2).
        {"\n"}• Longitud de (3, 4): √(3² + 4²) = 5.
        {"\n"}• Vectores paralelos: (2, 4) y (1, 2).
        </Text>

        <Text style={styles.subtopicTitle}>1.3 Producto escalar y vectorial</Text>
        <Text style={styles.contentText}>
        • Producto escalar: (1,2)·(3,4) = 1×3 + 2×4 = 11.
        {"\n"}• Ángulo entre vectores: cos(θ) = (u·v)/(|u||v|).
        {"\n"}• Producto escalar de ortogonales: (1,0)·(0,1) = 0.
        {"\n"}• Producto vectorial: (1,0,0) × (0,1,0) = (0,0,1).
        {"\n"}• Vector perpendicular: resultado del producto vectorial.
        </Text>

        <Text style={styles.subtopicTitle}>1.4 Ecuación de la recta</Text>
        <Text style={styles.contentText}>
        • Forma vectorial: r(t) = (1,2) + t(3,4).
        {"\n"}• Recta en 3D: r(t) = (1,0,2) + t(2,1,-1).
        {"\n"}• Punto y dirección determinan la recta.
        {"\n"}• Forma paramétrica: x = 1 + 3t, y = 2 + 4t.
        {"\n"}• Dos puntos determinan una recta: r(t) = A + t(B−A).
        </Text>

        <Text style={styles.subtopicTitle}>1.5 Ecuación del plano</Text>
        <Text style={styles.contentText}>
        • Ecuación general: ax + by + cz = d.
        {"\n"}• Plano con punto (1,2,3) y normal (1,1,1): x + y + z = 6.
        {"\n"}• Dos vectores definen la orientación del plano.
        {"\n"}• Intersección de planos puede formar una recta.
        {"\n"}• Vector normal es perpendicular al plano.
        </Text>

        <Text style={styles.subtopicTitle}>1.6 Aplicaciones</Text>
        <Text style={styles.contentText}>
        • Física: fuerza representada como vector.
        {"\n"}• Navegación: rumbo como vector en 2D.
        {"\n"}• Gráficos por computadora: transformación de vectores.
        {"\n"}• Ingeniería: análisis de estructuras con vectores de fuerza.
        {"\n"}• Robótica: trayectorias y movimientos vectoriales.
        </Text>

        {/* 2. Curvas planas, ecuaciones paramétricas y coordenadas polares */}
        <Text style={styles.topicTitle}>2. Curvas planas, ecuaciones paramétricas y coordenadas polares</Text>

        <Text style={styles.subtopicTitle}>2.1 Ecuaciones paramétricas de algunas curvas planas y su representación gráfica</Text>
        <Text style={styles.contentText}>
        • Circunferencia: x = cos(t), y = sin(t).
        {"\n"}• Parábola: x = t, y = t².
        {"\n"}• Elipse: x = 3cos(t), y = 2sin(t).
        {"\n"}• Hipérbola: x = sec(t), y = tan(t).
        {"\n"}• Lazo de Lemniscata: x = cos(t)√cos(2t), y = sin(t)√cos(2t).
        </Text>

        <Text style={styles.subtopicTitle}>2.2 Derivada de una curva en forma paramétrica</Text>
        <Text style={styles.contentText}>
        • Si x = t², y = t³ → dx/dt = 2t, dy/dt = 3t².
        {"\n"}• Derivada dy/dx = (dy/dt)/(dx/dt).
        {"\n"}• Para x = cos(t), y = sin(t) → dy/dx = -cot(t).

        {"\n"}• x = t, y = sin(t) → dy/dx = cos(t).
        </Text>

        <Text style={styles.subtopicTitle}>2.3 Tangentes a una curva</Text>
        <Text style={styles.contentText}>
        • Pendiente: m = dy/dx en un punto t.
        {"\n"}• Para x = t, y = t² → pendiente en t=1 es 2.
        {"\n"}• Recta tangente: y = y₀ + m(x − x₀).
        {"\n"}• Si dy/dx = 0 → tangente horizontal.
        {"\n"}• Si dx/dt = 0 → tangente vertical.
        </Text>

        <Text style={styles.subtopicTitle}>2.4 Área y longitud de arco</Text>
        <Text style={styles.contentText}>
        • Longitud de curva: ∫√[(dx/dt)² + (dy/dt)²] dt.
        {"\n"}• Área bajo curva paramétrica: ∫y dx = ∫y(t) x'(t) dt.
        {"\n"}• x = t, y = t² entre t=0 y t=2 → área = ∫0^2 t² dt.
        {"\n"}• Área entre curvas paramétricas con integrales definidas.
        </Text>

        <Text style={styles.subtopicTitle}>2.5 Curvas planas y graficación en coordenadas polares</Text>
        <Text style={styles.contentText}>
        • Recta: r = a / cos(θ) (forma polar).
        {"\n"}• Espiral de Arquímedes: r = aθ.
        {"\n"}• Cardioide: r = 1 − cos(θ).
        {"\n"}• Rosa polar: r = cos(2θ), tiene 4 pétalos.
        {"\n"}• Círculo en polar: r = 3.
        </Text>

        <Text style={styles.subtopicTitle}>2.6 Cálculo en coordenadas polares</Text>
        <Text style={styles.contentText}>
        • Área en polar: A = ½ ∫ r² dθ.
        {"\n"}• r = 2cos(θ) de 0 a π → área = ½ ∫0^π 4cos²(θ) dθ.
        {"\n"}• Derivada polar: dr/dθ para analizar crecimiento.
        {"\n"}• Longitud en polar: ∫√[r² + (dr/dθ)²] dθ.
        {"\n"}• Conversión a cartesianas: x = rcos(θ), y = rsin(θ).
        </Text>

        {/* 3. Funciones vectoriales de una variable real */}
        <Text style={styles.topicTitle}>3. Funciones vectoriales de una variable real</Text>

        <Text style={styles.subtopicTitle}>3.1 Definición de función vectorial de una variable real</Text>
        <Text style={styles.contentText}>
        • r(t) = (t, t², t³): vector en 3D para cada t.
        {"\n"}• r(t) = (cos t, sin t): traza una circunferencia.
        {"\n"}• r(t) = (e^t, ln t): función vectorial 2D.
        {"\n"}• r(t) = (t, 1/t): indefinida en t = 0.
        {"\n"}• Movimiento: posición de partícula en el tiempo.
        </Text>

        <Text style={styles.subtopicTitle}>3.2 Límites y continuidad de una función vectorial</Text>
        <Text style={styles.contentText}>
        • lim t→0 r(t) = (1, 0) si r(t) = (cos t, sin t)/t.
        {"\n"}• r(t) continua si sus componentes lo son.
        {"\n"}• r(t) = (t², 1/t): no continua en t = 0.
        {"\n"}• Componente a componente: lim r(t) = (lim x(t), lim y(t)).
        </Text>

        <Text style={styles.subtopicTitle}>3.3 Derivada de una función vectorial</Text>
        <Text style={styles.contentText}>
        • r(t) = (t, t²) → r'(t) = (1, 2t).
        {"\n"}• r(t) = (cos t, sin t) → r'(t) = (−sin t, cos t).
        {"\n"}• Velocidad: derivada de posición.
        {"\n"}• Aceleración: derivada de velocidad.
        {"\n"}• Derivada se calcula componente a componente.
        </Text>

        <Text style={styles.subtopicTitle}>3.4 Integración de funciones vectoriales</Text>
        <Text style={styles.contentText}>
        • ∫r(t) dt = (∫x(t)dt, ∫y(t)dt, ∫z(t)dt).
        {"\n"}• r(t) = (t, t²) → ∫r(t)dt = (½t², ⅓t³).
        {"\n"}• Movimiento: posición = ∫velocidad dt.
        {"\n"}• r(t) = (sin t, cos t) → ∫r(t)dt = (−cos t, sin t).
        {"\n"}• Constante de integración: vector constante.
        </Text>

        <Text style={styles.subtopicTitle}>3.5 Longitud de arco</Text>
        <Text style={styles.contentText}>
        • L = ∫ₐᵇ |r'(t)| dt.
        {"\n"}• r(t) = (t, t²) → r'(t) = (1, 2t), |r'(t)| = √(1 + 4t²).
        {"\n"}• Línea recta: r(t) = (t, 0) → L = b − a.
        {"\n"}• Círculo: r(t) = (cos t, sin t) → L = t final − t inicial.
        {"\n"}• Arco de parábola entre t=0 y t=1.
        </Text>

        <Text style={styles.subtopicTitle}>3.6 Vectores tangente, normal y binormal</Text>
        <Text style={styles.contentText}>
        • T(t) = r'(t)/|r'(t)|: vector tangente unitario.
        {"\n"}• N(t): derivada de T(t) normalizada.
        {"\n"}• B(t) = T(t) × N(t): vector binormal.
        {"\n"}• r(t) = (cos t, sin t, t): hélice, T y N perpendiculares.
        {"\n"}• T indica dirección del movimiento.
        </Text>

        <Text style={styles.subtopicTitle}>3.7 Curvatura</Text>
        <Text style={styles.contentText}>
        • κ(t) = |T'(t)| / |r'(t)|.
        {"\n"}• r(t) = (t, t²) → curvatura = 2 / (1 + 4t²)^{3/2}.
        {"\n"}• Círculo de radio R: κ = 1/R.
        {"\n"}• Línea recta: curvatura = 0.
        {"\n"}• Máxima curvatura donde hay cambio brusco de dirección.
        </Text>

        <Text style={styles.subtopicTitle}>3.8 Aplicaciones</Text>
        <Text style={styles.contentText}>
        • Movimiento de partículas en el espacio.
        {"\n"}• Trayectorias de satélites y proyectiles.
        {"\n"}• Cinemática en física y robótica.
        {"\n"}• Diseño de caminos en animación 3D.
        {"\n"}• Simulación de órbitas en astrodinámica.
        </Text>


        {/* 4. Funciones reales de varias variables */}
        <Text style={styles.topicTitle}>4. Funciones reales de varias variables</Text>

        <Text style={styles.subtopicTitle}>4.1 Definición de una función de varias variables</Text>
        <Text style={styles.contentText}>
        • f(x, y) = x² + y² es una función de dos variables.
        {"\n"}• f(x, y, z) = x + y − z suma tres variables.
        {"\n"}• f(x, y) = ln(x² + y² + 1), bien definida para todos los reales.
        {"\n"}• f(x, y) = √(x² + y²) representa distancia al origen.
        </Text>

        <Text style={styles.subtopicTitle}>4.2 Gráfica de una función de varias variables. Curvas y superficies de nivel</Text>
        <Text style={styles.contentText}>
        • f(x, y) = x² + y² → superficie parabólica.
        {"\n"}• Curvas de nivel: f(x, y) = c → círculos concéntricos.
        {"\n"}• f(x, y) = x + y → plano inclinado.
        {"\n"}• f(x, y) = sin(x)cos(y) → superficie ondulada.
        {"\n"}• f(x, y) = |x − y| → superficie con arista.
        </Text>

        <Text style={styles.subtopicTitle}>4.3 Límite y continuidad de una función de varias variables</Text>
        <Text style={styles.contentText}>
        • lim(x,y)→(0,0) x² + y² = 0.
        {"\n"}• f(x, y) = (xy)/(x² + y²), no tiene límite en (0,0).
        {"\n"}• Si el límite depende del camino, no existe.
        {"\n"}• Función continua: f(x, y) = x + y.
        {"\n"}• Discontinua: f(x, y) = 1 si x ≠ y, 0 si x = y.
        </Text>

        <Text style={styles.subtopicTitle}>4.4 Derivadas parciales</Text>
        <Text style={styles.contentText}>
        • f(x, y) = x²y → ∂f/∂x = 2xy.
        {"\n"}• ∂f/∂y = x².
        {"\n"}• f(x, y) = sin(xy) → ∂f/∂x = ycos(xy).
        {"\n"}• ∂/∂y of f(x, y) = e^x * y² is 2y * e^x.
        {"\n"}• f(x, y) = ln(x² + y²) → ∂f/∂x = 2x/(x² + y²).
        </Text>

        <Text style={styles.subtopicTitle}>4.5 Incrementos y diferenciales</Text>
        <Text style={styles.contentText}>
        • Δf ≈ fxΔx + fyΔy para f(x, y).
        {"\n"}• f(x, y) = x²y → df = 2xy dx + x² dy.
        {"\n"}• Diferencial total: df = fx dx + fy dy.
        {"\n"}• Estimar cambio en f al mover (x, y).
        {"\n"}• Aprox. lineal: f(x + dx, y + dy) ≈ f(x, y) + df.
        </Text>

        <Text style={styles.subtopicTitle}>4.6 Regla de la cadena y derivada implícita</Text>
        <Text style={styles.contentText}>
        • z = f(x(t), y(t)) → dz/dt = fx dx/dt + fy dy/dt.
        {"\n"}• Si x = t², y = t³, z = xy → dz/dt = 2t³ + 3t².
        {"\n"}• Derivación implícita: x² + y² = 1 → dy/dx = -x/y.
        {"\n"}• u = x² + y², x = rcosθ, y = rsinθ → ∂u/∂r = 2r.
        {"\n"}• Composición de funciones múltiples en la cadena.
        </Text>

        <Text style={styles.subtopicTitle}>4.7 Derivadas parciales de orden superior</Text>
        <Text style={styles.contentText}>
        • f(x, y) = x²y³ → ∂²f/∂x² = 2y³.
        {"\n"}• ∂²f/∂y² = 6x²y.
        {"\n"}• f(x, y) = xy² → ∂²f/∂x∂y = 2y.
        {"\n"}• Simetría: ∂²f/∂x∂y = ∂²f/∂y∂x bajo condiciones suaves.
        </Text>

        <Text style={styles.subtopicTitle}>4.8 Derivada direccional y gradiente</Text>
        <Text style={styles.contentText}>
        • Gradiente de f(x, y) = x² + y² es (2x, 2y).
        {"\n"}• Dirección máxima de crecimiento = dirección del gradiente.
        {"\n"}• Derivada direccional: ∇f·u.
        {"\n"}• f(x, y) = x + 2y, u = (1/√5, 2/√5) → derivada = √5.
        {"\n"}• Si ∇f = 0, no hay cambio en ninguna dirección.
        </Text>

        <Text style={styles.subtopicTitle}>4.9 Valores extremos de funciones de varias variables</Text>
        <Text style={styles.contentText}>
        • f(x, y) = x² + y² tiene mínimo global en (0,0).
        {"\n"}• f(x, y) = −x² − y² tiene máximo global en (0,0).
        {"\n"}• Usar ∇f = 0 para puntos críticos.
        {"\n"}• f(x, y) = x² − y² tiene punto de silla en (0,0).
        {"\n"}• Segundo derivado determina tipo de extremo.
        </Text>
        {/* 5. Integración múltiple */}
        <Text style={styles.topicTitle}>5. Integración múltiple</Text>

        <Text style={styles.subtopicTitle}>5.1 Cálculo de áreas e integrales dobles</Text>
        <Text style={styles.contentText}>
        • Área bajo f(x, y) = 1 en R: ∫∫ₙ 1 dA = área de R.
        {"\n"}• f(x, y) = x + y en [0,1]×[0,1]: ∫∫ (x + y) dA = 1.
        {"\n"}• Rectángulo: ∫₀²∫₀³ (x² + y) dy dx.
        {"\n"}• Triángulo con vértices (0,0), (1,0), (1,1).
        {"\n"}• Área con f(x, y) = √(x² + y²), región circular.
        </Text>

        <Text style={styles.subtopicTitle}>5.2 Integrales iteradas</Text>
        <Text style={styles.contentText}>
        • ∫₀¹ ∫₀¹ (x + y) dy dx = ∫₀¹ [y(x + y/2)]₀¹ dx.
        {"\n"}• Orden de integración importa si región no es rectangular.
        {"\n"}• f(x, y) = xy² → integrar en orden dy dx o dx dy.
        {"\n"}• Evaluar paso a paso, una variable a la vez.
        {"\n"}• Cambio de orden puede simplificar la integral.
        </Text>

        <Text style={styles.subtopicTitle}>5.3 Integral doble en coordenadas rectangulares</Text>
        <Text style={styles.contentText}>
        • Región rectangular: ∫∫ (x² + y²) dx dy.
        {"\n"}• Sobre un cuadrado: ∫₀¹ ∫₀¹ sin(xy) dx dy.
        {"\n"}• Función con límites constantes en x y y.
        {"\n"}• Aplicación: masa con densidad f(x, y).
        </Text>

        <Text style={styles.subtopicTitle}>5.4 Integral doble en coordenadas polares</Text>
        <Text style={styles.contentText}>
        • r de 0 a 1, θ de 0 a 2π: ∫∫ r dr dθ.
        {"\n"}• f(r,θ) = r²cos(θ): evaluar sobre un sector.
        {"\n"}• Región circular, usar r y θ como variables.
        {"\n"}• Cambio de variables: x = rcosθ, y = rsinθ.
        </Text>

        <Text style={styles.subtopicTitle}>5.5 Integral triple en coordenadas rectangulares. Volumen</Text>
        <Text style={styles.contentText}>
        • ∭₀¹₀¹₀¹ (x + y + z) dz dy dx = 1.5.
        {"\n"}• Volumen bajo f(x, y, z) = 1: ∭ dV.
        {"\n"}• Caja de 2×2×2 → volumen = 8.
        {"\n"}• Densidad variable: masa = ∭ ρ(x, y, z) dV.
        {"\n"}• Región entre planos: usar z como variable superior.
        </Text>

        <Text style={styles.subtopicTitle}>5.6 Integral triple en coordenadas cilíndricas y esféricas</Text>
        <Text style={styles.contentText}>
        • Cilíndricas: x = rcosθ, y = rsinθ, z = z.
        {"\n"}• Esféricas: x = ρsinφcosθ, y = ρsinφsinθ, z = ρcosφ.
        {"\n"}• Región esférica: ρ de 0 a R, φ de 0 a π, θ de 0 a 2π.
        {"\n"}• f = ρ² sin(φ): volumen en esféricas.
        {"\n"}• Cilíndricas útiles para simetría rotacional.
        </Text>

        <Text style={styles.subtopicTitle}>5.7 Campos vectoriales</Text>
        <Text style={styles.contentText}>
        • F(x, y) = (−y, x): campo rotacional.
        {"\n"}• F(x, y, z) = (x, y, z): campo radial.
        {"\n"}• Campo constante: F = (1, 0, 0).
        {"\n"}• F(x, y) = gradiente de f(x, y) = x² + y².
        {"\n"}• F(x, y) = (e^x, sin(y)): campo no conservativo.
        </Text>

        <Text style={styles.subtopicTitle}>5.8 La Integral de línea</Text>
        <Text style={styles.contentText}>
        • ∫C F·dr con C: curva parametrizada.
        {"\n"}• F = (x, y), C: línea de (0,0) a (1,1).
        {"\n"}• f(x, y) = x² + y² → grad f = (2x, 2y).
        {"\n"}• Curva circular: r(t) = (cos t, sin t).
        {"\n"}• Trabajo: ∫C F·dr mide trabajo realizado.
        </Text>

        <Text style={styles.subtopicTitle}>5.9 Divergencia, rotacional, interpretación geométrica y física</Text>
        <Text style={styles.contentText}>
        • div F = ∂Fx/∂x + ∂Fy/∂y + ∂Fz/∂z.
        {"\n"}• rot F = ∇ × F.
        {"\n"}• F = (x, y, z) → div F = 3.
        {"\n"}• F = (−y, x, 0) → rot F = (0, 0, 2).
        {"\n"}• Divergencia: expansión local, rotacional: giro local.
        </Text>

        <Text style={styles.subtopicTitle}>5.10 Teoremas de integrales. Aplicaciones</Text>
        <Text style={styles.contentText}>
        • Teorema de Green: ∮C F·dr = ∬R rot F dA.
        {"\n"}• Teorema de Stokes: ∮C F·dr = ∬S (∇ × F)·n dS.
        {"\n"}• Teorema de Gauss: ∯S F·n dS = ∭ div F dV.
        {"\n"}• Aplicaciones en electromagnetismo.
        {"\n"}• Flujo, circulación, y conservación de energía.
        </Text>


        </View>
   {/* Sección de Videos */}
        <View ref={videosRef} style={styles.section}>
          <Text style={styles.sectionTitle}>Videos de Apoyo</Text>
          
          {[
            {title: '01. Cálculo vectorial - Introducción al curso', url: 'https://youtu.be/aYlICOhaO1g'},
            {title: '02. Suma y resta de vectores geométricamente CON EJEMPLOS', url: 'https://youtu.be/MEscwXX82Ig'},
            {title: '03. Vectores y puntos en tres dimensiones', url: 'https://youtu.be/aevLlQfs9hY'},
            {title: '04. Suma y resta de vectores gráficamente en 3 dimensiones', url: 'https://youtu.be/zQ-GiHU_ckw'},
            {title: '05. Vector que une dos puntos del plano. EJERCICIO RESUELTO', url: 'https://youtu.be/z_3UHBmg2xs'},
            {title: '06. Vector que une dos puntos', url: 'https://youtu.be/334uweT3y8c'},
            {title: '07.Vector que une dos puntos (tres dimensiones)', url: 'https://youtu.be/YAC8bBOl-84'}
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

export default CalculoVectorialScreen;