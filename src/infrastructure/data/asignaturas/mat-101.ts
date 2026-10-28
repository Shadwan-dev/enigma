// src/infrastructure/data/asignaturas/mat-101.ts
import type { Asignatura } from '@/core/entities';

export const mat101: Asignatura = {
  id: 'mat-101',
  nombre: 'Matemática Superior I',
  descripcion: 'Herramientas matemáticas para la economía: funciones, límites, derivadas e integrales aplicadas a la contabilidad y las finanzas.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Funciones y Modelos Económicos
    // ==========================================
    {
      id: 'mat-101-01',
      titulo: 'Funciones y Modelos Económicos',
      descripcion: 'Aprende a modelar situaciones económicas usando funciones lineales y cuadráticas.',
      duracionEstimada: '25 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Identificar las variables del modelo', ejemplo: 'En Qd = 100 - 2P, P es precio y Qd es cantidad demandada.' },
        { id: 2, descripcion: 'Graficar la función', ejemplo: 'Para Qd = 100 - 2P: si P=0 → Qd=100; si Qd=0 → P=50.' },
        { id: 3, descripcion: 'Calcular el punto de equilibrio', formula: 'Qo = Qd', ejemplo: 'Qo = 20+3P, Qd=100-2P → 5P=80 → P=16, Q=68.' },
        { id: 4, descripcion: 'Interpretar el resultado', ejemplo: 'Precio de equilibrio $16, cantidad 68 unidades.', nota: '💡 El punto de equilibrio vacía el mercado.' },
      ],
      documentacion: [
        { id: 'doc-mat-101-01', titulo: '¿Qué es una función?', contenido: 'Una función relaciona dos variables: a cada valor de x le corresponde un único valor de y. En economía, x suele ser precio o cantidad.', fuente: 'Sydsaeter & Hammond', conceptosClave: ['Función', 'Variable'] },
        { id: 'doc-mat-101-02', titulo: 'Modelos de Oferta y Demanda', contenido: 'La demanda muestra lo que los consumidores compran a cada precio; la oferta, lo que los productores venden. Su intersección es el equilibrio.', fuente: 'Sydsaeter & Hammond', conceptosClave: ['Oferta', 'Demanda', 'Equilibrio'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Límites y Continuidad
    // ==========================================
    {
      id: 'mat-101-02',
      titulo: 'Límites y Continuidad',
      descripcion: 'Comprende el concepto de límite y su importancia para el análisis económico.',
      duracionEstimada: '20 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Evaluar un límite por sustitución', ejemplo: 'lim_{x→2} (x²+3x) = 4+6 = 10.' },
        { id: 2, descripcion: 'Resolver indeterminaciones por factorización', formula: 'lim_{x→2} (x²-4)/(x-2) = lim (x+2) = 4' },
        { id: 3, descripcion: 'Verificar continuidad', formula: 'f(a) = lim_{x→a} f(x)', nota: '⚠️ Continua si se dibuja sin levantar el lápiz.' },
      ],
      documentacion: [
        { id: 'doc-mat-101-03', titulo: 'El concepto de límite', contenido: 'El límite es el valor al que se aproxima una función cuando x se acerca a un punto. Base del cálculo.', fuente: 'Sydsaeter & Hammond', conceptosClave: ['Límite', 'Continuidad'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: La Derivada y sus Aplicaciones
    // ==========================================
    {
      id: 'mat-101-03',
      titulo: 'La Derivada y sus Aplicaciones Económicas',
      descripcion: 'Calcula derivadas y úsalas para optimizar funciones económicas.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Aplicar reglas de derivación', formula: 'd/dx (x^n) = n·x^(n-1)', ejemplo: 'd/dx (x³) = 3x².' },
        { id: 2, descripcion: 'Interpretar la derivada', ejemplo: 'Si C(x) es costo total, C\'(x) es el Costo Marginal.' },
        { id: 3, descripcion: 'Encontrar puntos críticos', formula: 'f\'(x) = 0', ejemplo: 'U(x) = -2x²+100x-500 → U\'(x) = -4x+100 = 0 → x = 25.' },
        { id: 4, descripcion: 'Verificar máximo o mínimo', formula: 'f\'\'(x) < 0 → Máximo', ejemplo: 'U\'\'(x) = -4 < 0 → x=25 es máximo.', nota: '💡 La optimización es clave para decidir.' },
      ],
      documentacion: [
        { id: 'doc-mat-101-04', titulo: 'La derivada como tasa de cambio', contenido: 'La derivada mide cómo cambia una variable cuando otra cambia. El "marginal" es la derivada: costo marginal, ingreso marginal.', fuente: 'Sydsaeter & Hammond', conceptosClave: ['Derivada', 'Marginal', 'Optimización'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: La Integral Definida y sus Aplicaciones
    // ==========================================
    {
      id: 'mat-101-04',
      titulo: 'La Integral Definida y el Excedente del Consumidor',
      descripcion: 'Calcula integrales definidas y aplícalas al cálculo de áreas y excedentes económicos.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular una integral definida', formula: '∫_a^b x^n dx = [x^(n+1)/(n+1)]_a^b', ejemplo: '∫_0^2 x² dx = 8/3.' },
        { id: 2, descripcion: 'Interpretar el área bajo la curva', ejemplo: 'El área bajo la demanda representa el valor total que los consumidores dan al bien.' },
        { id: 3, descripcion: 'Calcular el Excedente del Consumidor', formula: 'EC = ∫_0^Q₀ [P(Q) - P₀] dQ', ejemplo: 'P(Q)=100-2Q, Q₀=20, P₀=60 → EC=400.', nota: '💡 El excedente es el beneficio de pagar menos de lo dispuesto.' },
      ],
      documentacion: [
        { id: 'doc-mat-101-05', titulo: 'La integral definida en economía', contenido: 'Permite calcular acumulaciones: excedente del consumidor, valor presente, recuperar costo total desde el marginal.', fuente: 'Sydsaeter & Hammond', conceptosClave: ['Integral', 'Excedente', 'Acumulación'] },
      ],
    },
  ],

  // ==========================================
  // FÓRMULAS
  // ==========================================
  formulas: [
    { id: 'form-mat-101-01', titulo: 'Punto de Equilibrio', descripcion: 'Donde oferta = demanda', formula: 'Qo = Qd', variables: ['Qo: Cantidad ofrecida', 'Qd: Cantidad demandada'], ejemplo: 'Qo=20+3P, Qd=100-2P → P=16, Q=68' },
    { id: 'form-mat-101-02', titulo: 'Derivada (Regla de la Potencia)', descripcion: 'Regla básica de derivación', formula: 'd/dx (x^n) = n·x^(n-1)', variables: ['n: Exponente', 'x: Variable'], ejemplo: 'd/dx (x³) = 3x²' },
    { id: 'form-mat-101-03', titulo: 'Integral (Regla de la Potencia)', descripcion: 'Regla básica de integración', formula: '∫ x^n dx = (x^(n+1))/(n+1) + C', variables: ['n: Exponente (n≠-1)', 'C: Constante'], ejemplo: '∫ x³ dx = x⁴/4 + C' },
    { id: 'form-mat-101-04', titulo: 'Excedente del Consumidor', descripcion: 'Beneficio del consumidor', formula: 'EC = ∫_0^Q₀ [P(Q) - P₀] dQ', variables: ['P(Q): Demanda inversa', 'P₀: Precio equilibrio', 'Q₀: Cantidad equilibrio'], ejemplo: 'P(Q)=100-2Q, Q₀=20, P₀=60 → EC=400' },
    { id: 'form-mat-101-05', titulo: 'Optimización (Segunda Derivada)', descripcion: 'Determina máximo o mínimo', formula: 'f\'\'(x) < 0 → Máximo, f\'\'(x) > 0 → Mínimo', variables: ['f\'\'(x): Segunda derivada', 'x: Punto crítico'], ejemplo: 'f(x)=-x²+4x → f\'\'(x)=-2 < 0 → Máximo en x=2' },
    { id: 'form-mat-101-06', titulo: 'Costo Marginal', descripcion: 'Costo de producir una unidad adicional', formula: 'C\'(x) = dC/dx', variables: ['C(x): Costo total', 'x: Cantidad producida'], ejemplo: 'C(x)=5x²+100 → C\'(x)=10x' },
  ],

  // ==========================================
  // EJERCICIOS (50 opción múltiple + 5 prácticos)
  // ==========================================
  ejercicios: [
    // Unidad 1: Funciones y Modelos Económicos (10)
    { id: 'ej-mat-101-u1-01', enunciado: '¿Qué representa la pendiente de una función lineal de demanda?', opciones: ['La tasa de cambio de la cantidad respecto al precio', 'El precio máximo', 'La cantidad máxima', 'El costo total'], respuestaCorrecta: 'La tasa de cambio de la cantidad respecto al precio', explicacion: 'La pendiente indica cómo cambia la cantidad demandada por cada unidad de cambio en el precio.', pista: 'Piensa en la relación entre precio y cantidad.', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-02', enunciado: 'Si Qd = 100 - 2P, ¿cuál es la cantidad demandada cuando P = 20?', opciones: ['40', '60', '80', '100'], respuestaCorrecta: '60', explicacion: 'Qd = 100 - 2(20) = 100 - 40 = 60.', pista: 'Sustituye P=20 en la fórmula.', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-03', enunciado: '¿Qué sucede en el punto de equilibrio?', opciones: ['La oferta supera la demanda', 'La demanda supera la oferta', 'La oferta es igual a la demanda', 'El precio es cero'], respuestaCorrecta: 'La oferta es igual a la demanda', explicacion: 'En el equilibrio, Qo = Qd, el mercado se vacía.', pista: '¿Qué condición define el equilibrio?', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-04', enunciado: 'Si Qo = 20 + 3P y Qd = 100 - 2P, ¿cuál es el precio de equilibrio?', opciones: ['10', '16', '20', '30'], respuestaCorrecta: '16', explicacion: '20+3P = 100-2P → 5P=80 → P=16.', pista: 'Iguala Qo y Qd.', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-05', enunciado: '¿Cuál es la cantidad de equilibrio si P=16 en el ejercicio anterior?', opciones: ['48', '58', '68', '78'], respuestaCorrecta: '68', explicacion: 'Q = 20+3(16) = 20+48 = 68.', pista: 'Sustituye P=16 en Qo o Qd.', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-06', enunciado: 'Una función de costo total es C(x) = 5x + 200. ¿Qué representa el término 200?', opciones: ['Costo variable', 'Costo fijo', 'Costo marginal', 'Ingreso total'], respuestaCorrecta: 'Costo fijo', explicacion: 'El término independiente (200) es el costo fijo, que no depende de la cantidad producida.', pista: '¿Qué parte del costo no cambia con la producción?', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-07', enunciado: 'Si la función de ingreso es I(x) = 10x, ¿cuál es el ingreso por vender 50 unidades?', opciones: ['$50', '$100', '$500', '$5000'], respuestaCorrecta: '$500', explicacion: 'I(50) = 10(50) = 500.', pista: 'Sustituye x=50.', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-08', enunciado: '¿Qué tipo de función es Qd = 100 - 2P?', opciones: ['Cuadrática', 'Lineal', 'Exponencial', 'Logarítmica'], respuestaCorrecta: 'Lineal', explicacion: 'Tiene la forma y = mx + b, por lo que es lineal.', pista: '¿Qué forma tiene la ecuación?', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-09', enunciado: 'Si el precio aumenta, ¿qué pasa con la cantidad demandada (ley de demanda)?', opciones: ['Aumenta', 'Disminuye', 'No cambia', 'Se duplica'], respuestaCorrecta: 'Disminuye', explicacion: 'La ley de demanda establece que a mayor precio, menor cantidad demandada.', pista: 'Relación inversa precio-demanda.', tipo: 'multiple' },
    { id: 'ej-mat-101-u1-10', enunciado: '¿Qué representa el punto de equilibrio en una gráfica de oferta y demanda?', opciones: ['La intersección de ambas curvas', 'El origen', 'El punto más alto de la demanda', 'El punto más bajo de la oferta'], respuestaCorrecta: 'La intersección de ambas curvas', explicacion: 'El equilibrio es donde se cruzan oferta y demanda.', pista: '¿Dónde se igualan?', tipo: 'multiple' },

    // Unidad 2: Límites y Continuidad (10)
    { id: 'ej-mat-101-u2-01', enunciado: '¿Cuál es el límite de x² + 3x cuando x→2?', opciones: ['4', '6', '10', '12'], respuestaCorrecta: '10', explicacion: '2² + 3(2) = 4 + 6 = 10.', pista: 'Sustituye x=2.', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-02', enunciado: '¿Qué es una indeterminación?', opciones: ['Un límite que no existe', 'Una forma como 0/0 que requiere manipulación', 'Un límite infinito', 'Una función discontinua'], respuestaCorrecta: 'Una forma como 0/0 que requiere manipulación', explicacion: 'Las indeterminaciones se resuelven factorizando o simplificando.', pista: '¿Qué pasa si sustituyes y da 0/0?', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-03', enunciado: 'lim_{x→2} (x²-4)/(x-2) = ?', opciones: ['0', '2', '4', 'No existe'], respuestaCorrecta: '4', explicacion: 'Factorizando: (x+2)(x-2)/(x-2) = x+2 → 4.', pista: 'Factoriza el numerador.', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-04', enunciado: '¿Cuándo una función es continua en un punto?', opciones: ['Cuando f(a) = lim_{x→a} f(x)', 'Cuando es creciente', 'Cuando es lineal', 'Cuando tiene derivada'], respuestaCorrecta: 'Cuando f(a) = lim_{x→a} f(x)', explicacion: 'La continuidad requiere que el valor de la función coincida con el límite.', pista: '¿Qué igualdad debe cumplirse?', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-05', enunciado: '¿Cuál es el límite de una constante c cuando x→a?', opciones: ['0', 'a', 'c', 'No existe'], respuestaCorrecta: 'c', explicacion: 'El límite de una constante es la misma constante.', pista: '¿Cambia una constante?', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-06', enunciado: 'Si lim_{x→3} f(x) = 5 y f(3) = 5, ¿la función es continua en x=3?', opciones: ['Sí', 'No', 'Solo si es lineal', 'No se puede saber'], respuestaCorrecta: 'Sí', explicacion: 'Se cumple f(3) = lim_{x→3} f(x), por lo que es continua.', pista: '¿Se cumple la condición de continuidad?', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-07', enunciado: '¿Qué tipo de discontinuidad ocurre si el límite existe pero no coincide con f(a)?', opciones: ['Discontinuidad evitable', 'Discontinuidad de salto', 'Discontinuidad infinita', 'No es discontinuidad'], respuestaCorrecta: 'Discontinuidad evitable', explicacion: 'Se llama evitable porque se puede corregir redefiniendo f(a).', pista: '¿Se puede "arreglar" el valor?', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-08', enunciado: 'lim_{x→0} (1/x) = ?', opciones: ['0', '1', '∞', 'No existe'], respuestaCorrecta: 'No existe', explicacion: 'El límite no existe porque los laterales van a ±∞.', pista: 'Analiza los límites laterales.', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-09', enunciado: '¿Cuál es el límite de x³ cuando x→1?', opciones: ['0', '1', '3', '∞'], respuestaCorrecta: '1', explicacion: '1³ = 1.', pista: 'Sustituye x=1.', tipo: 'multiple' },
    { id: 'ej-mat-101-u2-10', enunciado: 'Si una función es derivable en un punto, ¿qué se puede afirmar?', opciones: ['Es continua en ese punto', 'Es discontinua', 'No tiene límite', 'Es constante'], respuestaCorrecta: 'Es continua en ese punto', explicacion: 'La derivabilidad implica continuidad (pero no al revés).', pista: '¿Qué relación hay entre derivada y continuidad?', tipo: 'multiple' },

    // Unidad 3: La Derivada y sus Aplicaciones (10)
    { id: 'ej-mat-101-u3-01', enunciado: '¿Cuál es la derivada de x³?', opciones: ['3x²', 'x²', '3x', 'x⁴/4'], respuestaCorrecta: '3x²', explicacion: 'Regla de la potencia: d/dx(x³) = 3x².', pista: 'n·x^(n-1).', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-02', enunciado: '¿Qué representa el costo marginal?', opciones: ['El costo total', 'El costo de producir una unidad adicional', 'El costo fijo', 'El ingreso total'], respuestaCorrecta: 'El costo de producir una unidad adicional', explicacion: 'El costo marginal es la derivada del costo total.', pista: '¿Qué mide el cambio en el costo?', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-03', enunciado: 'Si C(x) = 5x² + 100, ¿cuál es el costo marginal?', opciones: ['10x', '5x', '10x + 100', '5x²'], respuestaCorrecta: '10x', explicacion: 'C\'(x) = 10x.', pista: 'Deriva término a término.', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-04', enunciado: 'Para encontrar máximos y mínimos, ¿qué se iguala a cero?', opciones: ['La función', 'La primera derivada', 'La segunda derivada', 'La integral'], respuestaCorrecta: 'La primera derivada', explicacion: 'Los puntos críticos se encuentran donde f\'(x)=0.', pista: '¿Qué condición define un punto crítico?', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-05', enunciado: 'Si f\'\'(x) < 0 en un punto crítico, ¿qué tipo de punto es?', opciones: ['Máximo', 'Mínimo', 'Punto de inflexión', 'No se puede saber'], respuestaCorrecta: 'Máximo', explicacion: 'La segunda derivada negativa indica concavidad hacia abajo → máximo.', pista: '¿Qué forma tiene la curva?', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-06', enunciado: 'Si U(x) = -2x² + 100x - 500, ¿cuál es la derivada?', opciones: ['-4x + 100', '4x + 100', '-2x + 100', '-4x - 500'], respuestaCorrecta: '-4x + 100', explicacion: 'U\'(x) = -4x + 100.', pista: 'Deriva cada término.', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-07', enunciado: 'En el ejercicio anterior, ¿en qué x se maximiza la utilidad?', opciones: ['20', '25', '30', '50'], respuestaCorrecta: '25', explicacion: '-4x+100=0 → x=25.', pista: 'Iguala la derivada a cero.', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-08', enunciado: '¿Cuál es la derivada de 5x?', opciones: ['5', 'x', '5x', '0'], respuestaCorrecta: '5', explicacion: 'd/dx(5x) = 5.', pista: 'Derivada de una lineal.', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-09', enunciado: '¿Qué mide el ingreso marginal?', opciones: ['El ingreso total', 'El ingreso adicional por vender una unidad más', 'El costo de producción', 'La utilidad total'], respuestaCorrecta: 'El ingreso adicional por vender una unidad más', explicacion: 'El ingreso marginal es la derivada del ingreso total.', pista: '¿Qué cambia al vender una unidad más?', tipo: 'multiple' },
    { id: 'ej-mat-101-u3-10', enunciado: 'Si I(x) = 20x, ¿cuál es el ingreso marginal?', opciones: ['20', '20x', 'x', '0'], respuestaCorrecta: '20', explicacion: 'I\'(x) = 20.', pista: 'Deriva la función lineal.', tipo: 'multiple' },

    // Unidad 4: La Integral Definida (10)
    { id: 'ej-mat-101-u4-01', enunciado: '¿Qué representa la integral definida de una función?', opciones: ['La pendiente', 'El área bajo la curva', 'El máximo', 'La derivada'], respuestaCorrecta: 'El área bajo la curva', explicacion: 'La integral definida calcula el área entre la curva y el eje x.', pista: '¿Qué concepto geométrico representa?', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-02', enunciado: '∫ x² dx = ?', opciones: ['x³/3 + C', '2x + C', 'x³ + C', '3x² + C'], respuestaCorrecta: 'x³/3 + C', explicacion: 'Regla de la potencia: x^(n+1)/(n+1).', pista: 'Aumenta el exponente y divide.', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-03', enunciado: '∫_0^2 x dx = ?', opciones: ['1', '2', '4', '0'], respuestaCorrecta: '2', explicacion: '∫ x dx = x²/2; evaluado de 0 a 2 = 4/2 = 2.', pista: 'Aplica la regla y evalúa.', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-04', enunciado: '¿Qué es el excedente del consumidor?', opciones: ['El beneficio de pagar menos de lo dispuesto', 'El costo total', 'El ingreso total', 'La utilidad del productor'], respuestaCorrecta: 'El beneficio de pagar menos de lo dispuesto', explicacion: 'Es la diferencia entre lo que están dispuestos a pagar y lo que pagan.', pista: '¿Qué gana el consumidor?', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-05', enunciado: 'Si P(Q)=100-2Q, Q₀=20, P₀=60, ¿cuál es el excedente del consumidor?', opciones: ['200', '300', '400', '500'], respuestaCorrecta: '400', explicacion: 'EC = ∫_0^20 (100-2Q-60) dQ = ∫_0^20 (40-2Q) dQ = [40Q-Q²]_0^20 = 800-400 = 400.', pista: 'Integra la diferencia y evalúa.', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-06', enunciado: '¿Cuál es la antiderivada de 2x?', opciones: ['x² + C', '2x² + C', 'x + C', '2 + C'], respuestaCorrecta: 'x² + C', explicacion: '∫2x dx = x² + C.', pista: 'Aumenta el exponente y divide.', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-07', enunciado: '∫_0^1 x² dx = ?', opciones: ['1/3', '1/2', '1', '0'], respuestaCorrecta: '1/3', explicacion: '[x³/3]_0^1 = 1/3.', pista: 'Aplica la regla de la potencia.', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-08', enunciado: '¿Qué teorema relaciona la derivada y la integral?', opciones: ['Teorema de Pitágoras', 'Teorema Fundamental del Cálculo', 'Teorema de Bayes', 'Teorema de Taylor'], respuestaCorrecta: 'Teorema Fundamental del Cálculo', explicacion: 'Establece que la derivación y la integración son procesos inversos.', pista: '¿Qué teorema conecta ambos conceptos?', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-09', enunciado: 'Si la función de demanda es P(Q)=50-Q y el precio de equilibrio es 20, ¿cuál es la cantidad de equilibrio?', opciones: ['20', '30', '40', '50'], respuestaCorrecta: '30', explicacion: '20 = 50-Q → Q=30.', pista: 'Iguala el precio a la función.', tipo: 'multiple' },
    { id: 'ej-mat-101-u4-10', enunciado: '¿Qué representa el área entre la función de demanda y el precio de equilibrio?', opciones: ['El costo total', 'El excedente del consumidor', 'El ingreso total', 'La utilidad del productor'], respuestaCorrecta: 'El excedente del consumidor', explicacion: 'Es el beneficio que obtienen los consumidores.', pista: '¿Qué gana el consumidor al pagar menos?', tipo: 'multiple' },
  ],

  // ==========================================
  // EXÁMENES
  // ==========================================
  examenes: [
    {
      id: 'exam-mat-101-01',
      titulo: 'Examen Parcial - Matemática Superior I',
      descripcion: 'Evaluación de los temas 1 y 2: funciones, modelos económicos, límites y continuidad.',
      duracionMinutos: 60,
      preguntas: [
        {
          id: 'ex-mat-101-01-p1',
          enunciado: 'Explique qué es una función y cómo se aplica en un modelo de oferta y demanda.',
          tipo: 'teorica',
          puntaje: 10,
          respuestaModelo: 'Una función relaciona dos variables: a cada valor de x le corresponde un único valor de y. En oferta y demanda, la cantidad (Q) es función del precio (P). La demanda suele ser decreciente (a mayor precio, menor cantidad) y la oferta creciente. El punto de equilibrio se encuentra igualando ambas funciones.',
        },
        {
          id: 'ex-mat-101-01-p2',
          enunciado: 'Dadas las funciones Qo = 20 + 3P y Qd = 100 - 2P, calcule el precio y la cantidad de equilibrio.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['Qo = 20 + 3P', 'Qd = 100 - 2P'],
          solucionPasos: [
            { titulo: 'Paso 1: Igualar oferta y demanda', contenido: 'Qo = Qd → 20 + 3P = 100 - 2P' },
            { titulo: 'Paso 2: Despejar P', contenido: '3P + 2P = 100 - 20 → 5P = 80 → P = 16' },
            { titulo: 'Paso 3: Calcular Q', contenido: 'Q = 20 + 3(16) = 20 + 48 = 68' },
            { titulo: 'Paso 4: Interpretar', contenido: 'El precio de equilibrio es $16 y la cantidad de equilibrio es 68 unidades.' },
          ],
        },
        {
          id: 'ex-mat-101-01-p3',
          enunciado: 'Calcule lim_{x→3} (x² - 9)/(x - 3).',
          tipo: 'practica',
          puntaje: 15,
          operaciones: ['lim_{x→3} (x² - 9)/(x - 3)'],
          solucionPasos: [
            { titulo: 'Paso 1: Sustituir directamente', contenido: 'Al sustituir x=3: (9-9)/(3-3) = 0/0 (indeterminación).' },
            { titulo: 'Paso 2: Factorizar el numerador', contenido: 'x² - 9 = (x-3)(x+3)' },
            { titulo: 'Paso 3: Simplificar', contenido: '(x-3)(x+3)/(x-3) = x+3' },
            { titulo: 'Paso 4: Evaluar el límite', contenido: 'lim_{x→3} (x+3) = 6' },
          ],
        },
      ],
    },
    {
      id: 'exam-mat-101-02',
      titulo: 'Examen Final - Matemática Superior I',
      descripcion: 'Evaluación de los temas 3 y 4: derivadas, optimización e integrales aplicadas.',
      duracionMinutos: 90,
      preguntas: [
        {
          id: 'ex-mat-101-02-p1',
          enunciado: 'Explique qué es el costo marginal y cómo se calcula a partir de la función de costo total.',
          tipo: 'teorica',
          puntaje: 10,
          respuestaModelo: 'El costo marginal es el costo adicional de producir una unidad más. Se calcula como la derivada de la función de costo total: C\'(x) = dC/dx. Si C(x) es el costo total, C\'(x) nos dice cuánto aumenta el costo al incrementar la producción en una unidad.',
        },
        {
          id: 'ex-mat-101-02-p2',
          enunciado: 'Dada la función de utilidad U(x) = -2x² + 100x - 500, encuentre el nivel de producción que maximiza la utilidad y calcule la utilidad máxima.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['U(x) = -2x² + 100x - 500'],
          solucionPasos: [
            { titulo: 'Paso 1: Derivar la función', contenido: 'U\'(x) = -4x + 100' },
            { titulo: 'Paso 2: Igualar a cero', contenido: '-4x + 100 = 0 → x = 25' },
            { titulo: 'Paso 3: Verificar máximo (segunda derivada)', contenido: 'U\'\'(x) = -4 < 0 → es un máximo' },
            { titulo: 'Paso 4: Calcular utilidad máxima', contenido: 'U(25) = -2(25)² + 100(25) - 500 = -1250 + 2500 - 500 = 750' },
            { titulo: 'Paso 5: Interpretar', contenido: 'El nivel de producción que maximiza la utilidad es 25 unidades, con una utilidad máxima de $750.' },
          ],
        },
        {
          id: 'ex-mat-101-02-p3',
          enunciado: 'Calcule el excedente del consumidor si la función de demanda es P(Q) = 100 - 2Q, la cantidad de equilibrio es Q₀ = 20 y el precio de equilibrio es P₀ = 60.',
          tipo: 'practica',
          puntaje: 20,
          operaciones: ['P(Q) = 100 - 2Q', 'Q₀ = 20', 'P₀ = 60'],
          solucionPasos: [
            { titulo: 'Paso 1: Plantear la integral', contenido: 'EC = ∫_0^20 [P(Q) - P₀] dQ = ∫_0^20 [(100 - 2Q) - 60] dQ' },
            { titulo: 'Paso 2: Simplificar el integrando', contenido: 'EC = ∫_0^20 (40 - 2Q) dQ' },
            { titulo: 'Paso 3: Integrar', contenido: '∫ (40 - 2Q) dQ = 40Q - Q²' },
            { titulo: 'Paso 4: Evaluar de 0 a 20', contenido: '[40(20) - (20)²] - [0] = 800 - 400 = 400' },
            { titulo: 'Paso 5: Interpretar', contenido: 'El excedente del consumidor es $400, lo que representa el beneficio total de los consumidores.' },
          ],
        },
      ],
    },
  ],
};