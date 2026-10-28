// src/infrastructure/data/asignaturas/mat-102.ts
import type { Asignatura } from '@/core/entities';

export const mat102: Asignatura = {
  id: 'mat-102',
  nombre: 'Matemática Superior II',
  descripcion: 'Cálculo integral, matrices, determinantes y sus aplicaciones económicas: antiderivadas, integral definida, excedentes y análisis marginal.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Matrices y Determinantes
    // ==========================================
    {
      id: 'mat-102-01',
      titulo: 'Matrices y Determinantes',
      descripcion: 'Aprende a operar con matrices, calcular determinantes y resolver sistemas de ecuaciones lineales.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Identificar los elementos de una matriz', ejemplo: 'Una matriz de 2x3 tiene 2 filas y 3 columnas. A = [[1,2,3],[4,5,6]].' },
        { id: 2, descripcion: 'Sumar y restar matrices', ejemplo: 'A + B se suman los elementos correspondientes. Solo si tienen la misma dimensión.' },
        { id: 3, descripcion: 'Multiplicar matrices', ejemplo: 'A (2x3) × B (3x2) = C (2x2). Se multiplican filas por columnas.' },
        { id: 4, descripcion: 'Calcular el determinante de una matriz 2x2', formula: 'det(A) = ad - bc para A = [[a,b],[c,d]]', ejemplo: 'det([[2,3],[1,4]]) = 2*4 - 3*1 = 8-3 = 5.' },
        { id: 5, descripcion: 'Resolver sistemas de ecuaciones con la Regla de Cramer', formula: 'x = det(Ax)/det(A), y = det(Ay)/det(A)', ejemplo: 'Sistema: 2x+3y=8; x+4y=13. det(A)=5, x=1, y=2.' },
      ],
      documentacion: [
        { id: 'doc-mat-102-01', titulo: '¿Qué es una matriz?', contenido: 'Una matriz es un arreglo rectangular de números organizados en filas y columnas. Se usan para representar sistemas de ecuaciones lineales, datos económicos (como tablas de insumo-producto) y transformaciones lineales.', fuente: 'Guía de Estudio Matemática Superior II, Eduniv', conceptosClave: ['Matriz', 'Filas', 'Columnas'] },
        { id: 'doc-mat-102-02', titulo: 'Los determinantes y la Regla de Cramer', contenido: 'El determinante es un número asociado a una matriz cuadrada. La Regla de Cramer permite resolver sistemas de ecuaciones lineales usando determinantes: x_i = det(A_i)/det(A), donde A_i es la matriz A con la columna i reemplazada por el vector de términos independientes.', fuente: 'Guía de Estudio Matemática Superior II, Eduniv', conceptosClave: ['Determinante', 'Regla de Cramer', 'Sistema de ecuaciones'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: La Integral Indefinida
    // ==========================================
    {
      id: 'mat-102-02',
      titulo: 'La Integral Indefinida (Antiderivada)',
      descripcion: 'Aprende el concepto de antiderivada y los métodos básicos de integración.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Entender qué es una antiderivada', ejemplo: 'Si la derivada de x² es 2x, entonces la antiderivada de 2x es x² + C.' },
        { id: 2, descripcion: 'Aplicar la regla de la potencia', formula: '∫ x^n dx = (x^(n+1))/(n+1) + C', ejemplo: '∫ x³ dx = x⁴/4 + C.' },
        { id: 3, descripcion: 'Integrar una suma de términos', ejemplo: '∫ (2x + 3) dx = x² + 3x + C.' },
        { id: 4, descripcion: 'Verificar el resultado derivando', nota: '💡 Siempre puedes comprobar tu integral derivando el resultado: debe darte la función original.' },
      ],
      documentacion: [
        { id: 'doc-mat-102-03', titulo: '¿Qué es la integral indefinida?', contenido: 'La integral indefinida o antiderivada es la operación inversa a la derivada. Si F\'(x) = f(x), entonces F(x) es una antiderivada de f(x). Se escribe ∫ f(x) dx = F(x) + C, donde C es la constante de integración.', fuente: 'Guía de Estudio Matemática Superior II, Eduniv', conceptosClave: ['Antiderivada', 'Integral indefinida', 'Constante de integración'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: La Integral Definida
    // ==========================================
    {
      id: 'mat-102-03',
      titulo: 'La Integral Definida y el Teorema Fundamental',
      descripcion: 'Calcula integrales definidas y comprende su interpretación geométrica.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Entender la integral definida como área', ejemplo: '∫_a^b f(x) dx representa el área bajo la curva f(x) entre x=a y x=b.' },
        { id: 2, descripcion: 'Aplicar el Teorema Fundamental del Cálculo', formula: '∫_a^b f(x) dx = F(b) - F(a)', ejemplo: '∫_0^2 x dx = [x²/2]_0^2 = 2 - 0 = 2.' },
        { id: 3, descripcion: 'Calcular integrales definidas con la Regla de Barrow', nota: '💡 Primero calculas la antiderivada, luego evalúas en el límite superior y restas la evaluación en el límite inferior.' },
      ],
      documentacion: [
        { id: 'doc-mat-102-04', titulo: 'El Teorema Fundamental del Cálculo', contenido: 'El Teorema Fundamental del Cálculo establece que la derivación y la integración son procesos inversos. Permite calcular integrales definidas usando antiderivadas: ∫_a^b f(x) dx = F(b) - F(a), donde F es una antiderivada de f.', fuente: 'Guía de Estudio Matemática Superior II, Eduniv', conceptosClave: ['Integral definida', 'Teorema Fundamental', 'Regla de Barrow'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Aplicaciones Económicas
    // ==========================================
    {
      id: 'mat-102-04',
      titulo: 'Aplicaciones Económicas de la Integral',
      descripcion: 'Aplica la integral definida al cálculo de excedentes y análisis marginal.',
      duracionEstimada: '35 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular el Excedente del Consumidor', formula: 'EC = ∫_0^Q₀ [P(Q) - P₀] dQ', ejemplo: 'Si P(Q)=100-2Q, Q₀=20, P₀=60 → EC=∫_0^20 (40-2Q) dQ = 400.' },
        { id: 2, descripcion: 'Calcular el Excedente del Productor', formula: 'EP = ∫_0^Q₀ [P₀ - P(Q)] dQ', nota: '💡 El excedente del productor es el beneficio de vender a un precio mayor al que estaban dispuestos.' },
        { id: 3, descripcion: 'Recuperar una función total a partir de la marginal', ejemplo: 'Si el Costo Marginal es C\'(x)=2x+10, el Costo Total es C(x)=∫(2x+10)dx = x²+10x+C. La constante C representa el costo fijo.' },
      ],
      documentacion: [
        { id: 'doc-mat-102-05', titulo: 'Excedente del Consumidor y del Productor', contenido: 'El excedente del consumidor es la diferencia entre lo que los consumidores están dispuestos a pagar y lo que realmente pagan. El excedente del productor es la diferencia entre el precio que reciben y el mínimo que estaban dispuestos a aceptar. Ambos se calculan mediante integrales definidas.', fuente: 'Guía de Estudio Matemática Superior II, Eduniv', conceptosClave: ['Excedente', 'Integral definida', 'Aplicación económica'] },
      ],
    },
    // ==========================================
    // UNIDAD 5: Integrales Impropias
    // ==========================================
    {
      id: 'mat-102-05',
      titulo: 'Integrales Impropias',
      descripcion: 'Comprende y calcula integrales con límites infinitos o discontinuidades.',
      duracionEstimada: '25 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Identificar una integral impropia de primera especie', ejemplo: '∫_1^∞ (1/x²) dx. El límite superior es infinito.' },
        { id: 2, descripcion: 'Plantear el límite', formula: '∫_a^∞ f(x) dx = lim_{t→∞} ∫_a^t f(x) dx' },
        { id: 3, descripcion: 'Evaluar la convergencia', ejemplo: '∫_1^∞ (1/x²) dx = lim_{t→∞} [-1/x]_1^t = lim_{t→∞} (-1/t + 1) = 1. La integral converge a 1.' },
      ],
      documentacion: [
        { id: 'doc-mat-102-06', titulo: 'Integrales Impropias', contenido: 'Las integrales impropias son integrales definidas donde el intervalo de integración es infinito (primera especie) o la función tiene una discontinuidad infinita en el intervalo (segunda especie). Se calculan mediante límites y pueden ser convergentes (tienen un valor finito) o divergentes.', fuente: 'Guía de Estudio Matemática Superior II, Eduniv', conceptosClave: ['Integral impropia', 'Convergencia', 'Límite'] },
      ],
    },
  ],

  formulas: [
    // Matrices y Determinantes
    { id: 'form-mat-102-01', titulo: 'Determinante 2x2', descripcion: 'Determinante de una matriz de 2x2', formula: 'det(A) = ad - bc', variables: ['A = [[a,b],[c,d]]'], ejemplo: 'det([[2,3],[1,4]]) = 8 - 3 = 5' },
    { id: 'form-mat-102-02', titulo: 'Regla de Cramer', descripcion: 'Resuelve sistemas lineales', formula: 'x = det(Ax)/det(A), y = det(Ay)/det(A)', variables: ['Ax: A con columna x reemplazada', 'Ay: A con columna y reemplazada'], ejemplo: 'Sistema 2x+3y=8, x+4y=13 → x=1, y=2' },
    // Integrales
    { id: 'form-mat-102-03', titulo: 'Integral de la Potencia', descripcion: 'Regla básica de integración', formula: '∫ x^n dx = (x^(n+1))/(n+1) + C', variables: ['n: Exponente (n≠-1)', 'C: Constante'], ejemplo: '∫ x³ dx = x⁴/4 + C' },
    { id: 'form-mat-102-04', titulo: 'Teorema Fundamental del Cálculo', descripcion: 'Cálculo de integrales definidas', formula: '∫_a^b f(x) dx = F(b) - F(a)', variables: ['F: Antiderivada de f', 'a, b: Límites'], ejemplo: '∫_0^2 x dx = 2' },
    { id: 'form-mat-102-05', titulo: 'Excedente del Consumidor', descripcion: 'Beneficio del consumidor', formula: 'EC = ∫_0^Q₀ [P(Q) - P₀] dQ', variables: ['P(Q): Demanda inversa', 'P₀: Precio equilibrio', 'Q₀: Cantidad equilibrio'], ejemplo: 'P(Q)=100-2Q, Q₀=20, P₀=60 → EC=400' },
    { id: 'form-mat-102-06', titulo: 'Excedente del Productor', descripcion: 'Beneficio del productor', formula: 'EP = ∫_0^Q₀ [P₀ - P(Q)] dQ', variables: ['P(Q): Oferta inversa', 'P₀: Precio equilibrio', 'Q₀: Cantidad equilibrio'], ejemplo: 'P(Q)=20+2Q, Q₀=10, P₀=40 → EP=100' },
  ],

  ejercicios: [
    // Unidad 1: Matrices y Determinantes (10)
    { id: 'ej-mat-102-u1-01', enunciado: '¿Cuál es el determinante de la matriz [[2,3],[1,4]]?', opciones: ['5', '8', '11', '5'], respuestaCorrecta: '5', explicacion: 'det = (2)(4) - (3)(1) = 8 - 3 = 5.', pista: 'Usa ad - bc.', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-02', enunciado: '¿Cuál es el determinante de [[5,2],[3,1]]?', opciones: ['-1', '1', '11', '5'], respuestaCorrecta: '-1', explicacion: 'det = (5)(1) - (2)(3) = 5 - 6 = -1.', pista: 'Usa ad - bc.', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-03', enunciado: 'Para resolver un sistema por Cramer, el denominador es:', opciones: ['det(A)', 'det(Ax)', 'det(Ay)', 'La suma de coeficientes'], respuestaCorrecta: 'det(A)', explicacion: 'El denominador es el determinante de la matriz de coeficientes.', pista: '¿Qué determinante es común?', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-04', enunciado: 'Si det(A) = 0, el sistema es:', opciones: ['Indeterminado o incompatible', 'Compatible determinado', 'Siempre tiene solución única', 'No se puede resolver'], respuestaCorrecta: 'Indeterminado o incompatible', explicacion: 'Si det(A)=0, no hay solución única.', pista: '¿Qué pasa si el denominador es cero?', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-05', enunciado: '¿Cuál es el determinante de una matriz identidad 2x2?', opciones: ['1', '0', '2', '-1'], respuestaCorrecta: '1', explicacion: 'det(I) = (1)(1) - (0)(0) = 1.', pista: 'La identidad tiene 1 en la diagonal.', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-06', enunciado: 'El determinante de [[1,2],[2,4]] es:', opciones: ['0', '4', '8', '-4'], respuestaCorrecta: '0', explicacion: 'det = (1)(4) - (2)(2) = 4 - 4 = 0.', pista: 'Usa ad - bc.', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-07', enunciado: 'Si A = [[1,2],[3,4]], ¿cuál es det(A)?', opciones: ['-2', '2', '10', '5'], respuestaCorrecta: '-2', explicacion: 'det = (1)(4) - (2)(3) = 4 - 6 = -2.', pista: 'Usa ad - bc.', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-08', enunciado: 'La Regla de Cramer se aplica a sistemas con:', opciones: ['Igual número de ecuaciones que de incógnitas', 'Más ecuaciones que incógnitas', 'Menos ecuaciones que incógnitas', 'Cualquier sistema'], respuestaCorrecta: 'Igual número de ecuaciones que de incógnitas', explicacion: 'Requiere una matriz cuadrada (det(A) definido).', pista: '¿Qué forma debe tener la matriz?', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-09', enunciado: 'Si det(A) = 5, det(Ax) = 10, ¿cuál es x?', opciones: ['2', '5', '10', '0.5'], respuestaCorrecta: '2', explicacion: 'x = det(Ax)/det(A) = 10/5 = 2.', pista: 'Divide los determinantes.', tipo: 'multiple' },
    { id: 'ej-mat-102-u1-10', enunciado: '¿Cuál es el determinante de [[0,1],[1,0]]?', opciones: ['-1', '1', '0', '2'], respuestaCorrecta: '-1', explicacion: 'det = (0)(0) - (1)(1) = -1.', pista: 'Usa ad - bc.', tipo: 'multiple' },

    // Unidad 2: Integral Indefinida (8)
    { id: 'ej-mat-102-u2-01', enunciado: '¿Cuál es la integral de x²?', opciones: ['x³/3 + C', '2x + C', 'x³ + C', '3x² + C'], respuestaCorrecta: 'x³/3 + C', explicacion: '∫ x² dx = x³/3 + C.', pista: 'Aumenta el exponente y divide.', tipo: 'multiple' },
    { id: 'ej-mat-102-u2-02', enunciado: '¿Cuál es la integral de 2x?', opciones: ['x² + C', '2x² + C', 'x + C', '2 + C'], respuestaCorrecta: 'x² + C', explicacion: '∫ 2x dx = x² + C.', pista: 'Aumenta el exponente y divide.', tipo: 'multiple' },
    { id: 'ej-mat-102-u2-03', enunciado: '¿Cuál es la integral de 5?', opciones: ['5x + C', '5 + C', 'x + C', '0'], respuestaCorrecta: '5x + C', explicacion: '∫ 5 dx = 5x + C.', pista: 'Integral de una constante.', tipo: 'multiple' },
    { id: 'ej-mat-102-u2-04', enunciado: '¿Cuál es la integral de (2x + 3)?', opciones: ['x² + 3x + C', '2x² + 3x + C', 'x² + 3 + C', '2x + 3 + C'], respuestaCorrecta: 'x² + 3x + C', explicacion: '∫ (2x+3) dx = x² + 3x + C.', pista: 'Integra término a término.', tipo: 'multiple' },
    { id: 'ej-mat-102-u2-05', enunciado: 'La integral indefinida de una función siempre incluye:', opciones: ['Una constante C', 'Un límite', 'Una derivada', 'Un área'], respuestaCorrecta: 'Una constante C', explicacion: 'La constante de integración refleja que hay infinitas antiderivadas.', pista: '¿Qué se añade al resultado?', tipo: 'multiple' },
    { id: 'ej-mat-102-u2-06', enunciado: '¿Cuál es la integral de x?', opciones: ['x²/2 + C', 'x + C', '2x + C', 'x² + C'], respuestaCorrecta: 'x²/2 + C', explicacion: '∫ x dx = x²/2 + C.', pista: 'Regla de la potencia con n=1.', tipo: 'multiple' },
    { id: 'ej-mat-102-u2-07', enunciado: 'Si F(x) = x³ + 2x es una antiderivada, ¿cuál es su derivada?', opciones: ['3x² + 2', 'x² + 2', '3x + 2', 'x³ + 2'], respuestaCorrecta: '3x² + 2', explicacion: 'F\'(x) = 3x² + 2.', pista: 'Deriva para comprobar.', tipo: 'multiple' },
    { id: 'ej-mat-102-u2-08', enunciado: '¿Cuál es la integral de 3x²?', opciones: ['x³ + C', '3x³ + C', 'x² + C', '6x + C'], respuestaCorrecta: 'x³ + C', explicacion: '∫ 3x² dx = 3(x³/3) = x³ + C.', pista: 'Aplica la regla de la potencia.', tipo: 'multiple' },

    // Unidad 3: Integral Definida (7)
    { id: 'ej-mat-102-u3-01', enunciado: '∫_0^2 x dx = ?', opciones: ['2', '1', '4', '0'], respuestaCorrecta: '2', explicacion: '∫ x dx = x²/2; evaluado de 0 a 2 = 4/2 = 2.', pista: 'Aplica el Teorema Fundamental.', tipo: 'multiple' },
    { id: 'ej-mat-102-u3-02', enunciado: '¿Qué representa geométricamente la integral definida?', opciones: ['El área bajo la curva', 'La pendiente', 'El máximo', 'La derivada'], respuestaCorrecta: 'El área bajo la curva', explicacion: 'La integral definida calcula el área entre la curva y el eje x.', pista: '¿Qué concepto geométrico?', tipo: 'multiple' },
    { id: 'ej-mat-102-u3-03', enunciado: '∫_0^1 x² dx = ?', opciones: ['1/3', '1/2', '1', '0'], respuestaCorrecta: '1/3', explicacion: '[x³/3]_0^1 = 1/3.', pista: 'Aplica la regla de la potencia y evalúa.', tipo: 'multiple' },
    { id: 'ej-mat-102-u3-04', enunciado: 'El Teorema Fundamental del Cálculo relaciona:', opciones: ['Derivada e integral', 'Oferta y demanda', 'Máximo y mínimo', 'Área y perímetro'], respuestaCorrecta: 'Derivada e integral', explicacion: 'Establece que son procesos inversos.', pista: '¿Qué dos conceptos conecta?', tipo: 'multiple' },
    { id: 'ej-mat-102-u3-05', enunciado: '∫_1^3 2x dx = ?', opciones: ['8', '4', '6', '10'], respuestaCorrecta: '8', explicacion: '[x²]_1^3 = 9 - 1 = 8.', pista: 'Integra y evalúa.', tipo: 'multiple' },
    { id: 'ej-mat-102-u3-06', enunciado: 'Si ∫_a^b f(x) dx = 0, ¿qué se puede afirmar?', opciones: ['El área neta es cero', 'La función es cero', 'El intervalo es cero', 'No existe'], respuestaCorrecta: 'El área neta es cero', explicacion: 'Puede haber áreas positivas y negativas que se cancelan.', pista: '¿Qué pasa con las áreas?', tipo: 'multiple' },
    { id: 'ej-mat-102-u3-07', enunciado: 'La Regla de Barrow se usa para:', opciones: ['Calcular integrales definidas', 'Derivar', 'Calcular límites', 'Resolver sistemas'], respuestaCorrecta: 'Calcular integrales definidas', explicacion: 'Permite evaluar la integral usando la antiderivada.', pista: '¿Para qué sirve F(b) - F(a)?', tipo: 'multiple' },

    // Unidad 4: Aplicaciones Económicas (8)
    { id: 'ej-mat-102-u4-01', enunciado: '¿Qué es el excedente del consumidor?', opciones: ['El beneficio de pagar menos de lo dispuesto', 'El costo total', 'El ingreso total', 'La utilidad del productor'], respuestaCorrecta: 'El beneficio de pagar menos de lo dispuesto', explicacion: 'Es la diferencia entre lo que están dispuestos a pagar y lo que pagan.', pista: '¿Qué gana el consumidor?', tipo: 'multiple' },
    { id: 'ej-mat-102-u4-02', enunciado: 'Si P(Q)=100-2Q, Q₀=20, P₀=60, ¿cuál es el excedente del consumidor?', opciones: ['400', '200', '300', '500'], respuestaCorrecta: '400', explicacion: 'EC = ∫_0^20 (100-2Q-60) dQ = ∫_0^20 (40-2Q) dQ = 400.', pista: 'Integra la diferencia y evalúa.', tipo: 'multiple' },
    { id: 'ej-mat-102-u4-03', enunciado: 'Si el Costo Marginal es C\'(x)=2x+10, ¿cuál es el Costo Total?', opciones: ['x²+10x+C', '2x²+10x+C', 'x²+10+C', '2x+10+C'], respuestaCorrecta: 'x²+10x+C', explicacion: 'C(x) = ∫(2x+10)dx = x²+10x+C. La C es el costo fijo.', pista: 'Integra el costo marginal.', tipo: 'multiple' },
    { id: 'ej-mat-102-u4-04', enunciado: '¿Qué es el excedente del productor?', opciones: ['El beneficio de vender a un precio mayor al mínimo dispuesto', 'El costo total', 'El ingreso total', 'La utilidad del consumidor'], respuestaCorrecta: 'El beneficio de vender a un precio mayor al mínimo dispuesto', explicacion: 'Es la diferencia entre el precio recibido y el mínimo aceptable.', pista: '¿Qué gana el productor?', tipo: 'multiple' },
    { id: 'ej-mat-102-u4-05', enunciado: 'Si el Ingreso Marginal es I\'(x)=50, ¿cuál es el Ingreso Total?', opciones: ['50x + C', '50 + C', 'x² + C', '0'], respuestaCorrecta: '50x + C', explicacion: 'I(x) = ∫50 dx = 50x + C. Si no hay ingreso inicial, C=0.', pista: 'Integra una constante.', tipo: 'multiple' },
    { id: 'ej-mat-102-u4-06', enunciado: 'El área entre la función de demanda y el precio de equilibrio representa:', opciones: ['El excedente del consumidor', 'El costo total', 'El ingreso total', 'La utilidad del productor'], respuestaCorrecta: 'El excedente del consumidor', explicacion: 'Es el beneficio que obtienen los consumidores.', pista: '¿Qué gana el consumidor?', tipo: 'multiple' },
    { id: 'ej-mat-102-u4-07', enunciado: 'Si P(Q)=20+2Q, Q₀=10, P₀=40, ¿cuál es el excedente del productor?', opciones: ['100', '200', '300', '400'], respuestaCorrecta: '100', explicacion: 'EP = ∫_0^10 (40 - (20+2Q)) dQ = ∫_0^10 (20-2Q) dQ = [20Q-Q²]_0^10 = 200-100 = 100.', pista: 'Integra la diferencia y evalúa.', tipo: 'multiple' },
    { id: 'ej-mat-102-u4-08', enunciado: 'La integral de una función marginal da como resultado:', opciones: ['La función total', 'La derivada', 'El área', 'El límite'], respuestaCorrecta: 'La función total', explicacion: 'Al integrar el marginal se recupera la función total (costo, ingreso, etc.).', pista: '¿Qué se recupera al integrar?', tipo: 'multiple' },

    // Unidad 5: Integrales Impropias (7)
    { id: 'ej-mat-102-u5-01', enunciado: '¿Qué es una integral impropia?', opciones: ['Una integral con límites infinitos o discontinuidades', 'Una integral definida normal', 'Una derivada', 'Un límite'], respuestaCorrecta: 'Una integral con límites infinitos o discontinuidades', explicacion: 'Las impropias tienen límites infinitos o la función se indefine en el intervalo.', pista: '¿Qué la hace "impropia"?', tipo: 'multiple' },
    { id: 'ej-mat-102-u5-02', enunciado: '∫_1^∞ (1/x²) dx = ?', opciones: ['1', '∞', '0', 'No existe'], respuestaCorrecta: '1', explicacion: 'lim_{t→∞} [-1/x]_1^t = lim (-1/t + 1) = 1. Converge.', pista: 'Calcula el límite.', tipo: 'multiple' },
    { id: 'ej-mat-102-u5-03', enunciado: 'Si una integral impropia tiene un valor finito, se dice que:', opciones: ['Converge', 'Diverge', 'No existe', 'Es cero'], respuestaCorrecta: 'Converge', explicacion: 'Converge si el límite existe y es finito.', pista: '¿Qué término se usa?', tipo: 'multiple' },
    { id: 'ej-mat-102-u5-04', enunciado: '∫_1^∞ (1/x) dx = ?', opciones: ['Diverge', '1', '0', '∞'], respuestaCorrecta: 'Diverge', explicacion: 'lim_{t→∞} [ln x]_1^t = lim ln(t) = ∞. Diverge.', pista: '¿El límite es finito?', tipo: 'multiple' },
    { id: 'ej-mat-102-u5-05', enunciado: 'Una integral impropia de segunda especie tiene:', opciones: ['Una discontinuidad infinita en el intervalo', 'Límites infinitos', 'Una función constante', 'Un área negativa'], respuestaCorrecta: 'Una discontinuidad infinita en el intervalo', explicacion: 'La función se hace infinita en algún punto del intervalo.', pista: '¿Dónde está el problema?', tipo: 'multiple' },
    { id: 'ej-mat-102-u5-06', enunciado: '∫_0^1 (1/√x) dx = ?', opciones: ['2', '1', '0', 'Diverge'], respuestaCorrecta: '2', explicacion: 'lim_{t→0+} ∫_t^1 x^{-1/2} dx = lim [2√x]_t^1 = 2. Converge.', pista: 'Calcula el límite.', tipo: 'multiple' },
    { id: 'ej-mat-102-u5-07', enunciado: 'El cálculo de una integral impropia siempre implica:', opciones: ['Un límite', 'Una derivada', 'Un área', 'Una suma'], respuestaCorrecta: 'Un límite', explicacion: 'Se define como el límite de una integral definida.', pista: '¿Qué herramienta se usa?', tipo: 'multiple' },
  ],

  examenes: [
    {
      id: 'exam-mat-102-01',
      titulo: 'Examen Parcial - Matemática Superior II',
      descripcion: 'Evaluación de los temas 1 y 2: Matrices, Determinantes e Integral Indefinida.',
      duracionMinutos: 60,
      preguntas: [
        { id: 'ex-mat-102-01-p1', enunciado: 'Explique qué es una matriz y para qué se utilizan los determinantes en economía.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'Una matriz es un arreglo rectangular de números organizados en filas y columnas. Los determinantes se usan para resolver sistemas de ecuaciones lineales (Regla de Cramer) y para analizar la estabilidad de modelos económicos. También se aplican en el análisis insumo-producto de Leontief.' },
        { id: 'ex-mat-102-01-p2', enunciado: 'Resuelva el siguiente sistema de ecuaciones usando la Regla de Cramer: 2x + 3y = 8; x + 4y = 13.', tipo: 'practica', puntaje: 20, operaciones: ['2x + 3y = 8', 'x + 4y = 13'], solucionPasos: [{ titulo: 'Paso 1: Calcular det(A)', contenido: 'A = [[2,3],[1,4]] → det(A) = (2)(4) - (3)(1) = 8 - 3 = 5' }, { titulo: 'Paso 2: Calcular det(Ax)', contenido: 'Ax = [[8,3],[13,4]] → det(Ax) = (8)(4) - (3)(13) = 32 - 39 = -7' }, { titulo: 'Paso 3: Calcular det(Ay)', contenido: 'Ay = [[2,8],[1,13]] → det(Ay) = (2)(13) - (8)(1) = 26 - 8 = 18' }, { titulo: 'Paso 4: Calcular x e y', contenido: 'x = -7/5 = -1.4; y = 18/5 = 3.6' }] },
        { id: 'ex-mat-102-01-p3', enunciado: 'Calcule ∫ (3x² + 2x + 1) dx.', tipo: 'practica', puntaje: 20, operaciones: ['∫ (3x² + 2x + 1) dx'], solucionPasos: [{ titulo: 'Paso 1: Integrar término a término', contenido: '∫3x² dx = x³; ∫2x dx = x²; ∫1 dx = x' }, { titulo: 'Paso 2: Sumar y añadir C', contenido: 'Resultado: x³ + x² + x + C' }, { titulo: 'Paso 3: Verificar derivando', contenido: 'd/dx (x³+x²+x+C) = 3x²+2x+1. ✅' }] },
      ],
    },
    {
      id: 'exam-mat-102-02',
      titulo: 'Examen Final - Matemática Superior II',
      descripcion: 'Evaluación de los temas 3, 4 y 5: Integral Definida, Aplicaciones Económicas e Integrales Impropias.',
      duracionMinutos: 90,
      preguntas: [
        { id: 'ex-mat-102-02-p1', enunciado: 'Explique el Teorema Fundamental del Cálculo y su importancia en economía.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'El Teorema Fundamental del Cálculo establece que la derivación y la integración son procesos inversos. Permite calcular integrales definidas usando antiderivadas: ∫_a^b f(x) dx = F(b) - F(a). En economía, permite recuperar funciones totales (costo, ingreso) a partir de sus marginales, y calcular excedentes y áreas bajo curvas de oferta y demanda.' },
        { id: 'ex-mat-102-02-p2', enunciado: 'Dada la función de demanda P(Q) = 100 - 2Q, la cantidad de equilibrio Q₀ = 20 y el precio de equilibrio P₀ = 60, calcule el excedente del consumidor.', tipo: 'practica', puntaje: 20, operaciones: ['P(Q) = 100 - 2Q', 'Q₀ = 20', 'P₀ = 60'], solucionPasos: [{ titulo: 'Paso 1: Plantear la integral', contenido: 'EC = ∫_0^20 [(100-2Q) - 60] dQ = ∫_0^20 (40-2Q) dQ' }, { titulo: 'Paso 2: Integrar', contenido: '∫ (40-2Q) dQ = 40Q - Q²' }, { titulo: 'Paso 3: Evaluar de 0 a 20', contenido: '[40(20) - (20)²] - 0 = 800 - 400 = 400' }, { titulo: 'Paso 4: Interpretar', contenido: 'El excedente del consumidor es 400, el beneficio total de los consumidores.' }] },
        { id: 'ex-mat-102-02-p3', enunciado: 'Calcule ∫_1^∞ (1/x²) dx y determine si converge o diverge.', tipo: 'practica', puntaje: 20, operaciones: ['∫_1^∞ (1/x²) dx'], solucionPasos: [{ titulo: 'Paso 1: Plantear el límite', contenido: 'lim_{t→∞} ∫_1^t x^{-2} dx' }, { titulo: 'Paso 2: Integrar', contenido: '∫ x^{-2} dx = -1/x' }, { titulo: 'Paso 3: Evaluar', contenido: 'lim_{t→∞} [-1/x]_1^t = lim_{t→∞} (-1/t + 1) = 1' }, { titulo: 'Paso 4: Concluir', contenido: 'La integral converge a 1.' }] },
      ],
    },
  ],
};