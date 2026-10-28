// src/infrastructure/data/asignaturas/cos-201.ts
import type { Asignatura } from '@/core/entities';

export const cos201: Asignatura = {
  id: 'cos-201',
  nombre: 'Sistema de Costo I',
  descripcion: 'Fundamentos de la contabilidad de costos: elementos del costo, control de materia prima, mano de obra, CIF y sistemas de acumulación.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Fundamentos de la Contabilidad de Costos
    // ==========================================
    {
      id: 'cos-201-01',
      titulo: 'Fundamentos de la Contabilidad de Costos',
      descripcion: 'Aprende qué son los costos, su clasificación y su importancia en la toma de decisiones.',
      duracionEstimada: '30 min',
      nivel: 'basico',
      pasos: [
        { id: 1, descripcion: 'Diferenciar costo, gasto y pérdida', ejemplo: 'Costo: materia prima consumida en producción. Gasto: sueldo del administrador. Pérdida: mercancía dañada por incendio.' },
        { id: 2, descripcion: 'Clasificar los costos según su comportamiento', ejemplo: 'Fijos: alquiler de la fábrica (no varía con la producción). Variables: materia prima (varía con la producción).' },
        { id: 3, descripcion: 'Identificar los elementos del costo', ejemplo: 'Materia prima: tela para camisas. Mano de obra: salario del operario. CIF: energía eléctrica de la fábrica.' },
        { id: 4, descripcion: 'Determinar el costo primo y el costo de conversión', formula: 'Costo Primo = MP + MOD; Costo de Conversión = MOD + CIF', nota: '💡 El costo primo incluye los costos directamente relacionados con el producto.' },
      ],
      documentacion: [
        { id: 'doc-cos-201-01', titulo: '¿Qué es la Contabilidad de Costos?', contenido: 'Es la rama de la contabilidad que se encarga de registrar, clasificar y analizar los costos de producción para determinar el costo unitario de un producto y apoyar la toma de decisiones (fijación de precios, rentabilidad, control).', fuente: 'Contabilidad de Costos, Polimeni', conceptosClave: ['Costo', 'Gasto', 'Pérdida'] },
        { id: 'doc-cos-201-02', titulo: 'Clasificación de los Costos', contenido: 'Los costos se clasifican en: fijos (no cambian con el volumen), variables (cambian proporcionalmente), directos (identificables con el producto) e indirectos (no identificables directamente, se distribuyen).', fuente: 'Contabilidad de Costos, Polimeni', conceptosClave: ['Fijo', 'Variable', 'Directo', 'Indirecto'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Control de los Elementos del Costo
    // ==========================================
    {
      id: 'cos-201-02',
      titulo: 'Control y Registro de los Elementos del Costo',
      descripcion: 'Registra y controla la materia prima, la mano de obra y los CIF.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Registrar la compra de materia prima', ejemplo: 'Debe: Inventario de Materia Prima $10,000 / Haber: Banco $10,000.' },
        { id: 2, descripcion: 'Registrar el consumo de materia prima', ejemplo: 'Debe: Producción en Proceso $8,000 / Haber: Inventario de Materia Prima $8,000.' },
        { id: 3, descripcion: 'Registrar la mano de obra directa', ejemplo: 'Debe: Producción en Proceso $5,000 / Haber: Salarios por Pagar $5,000.' },
        { id: 4, descripcion: 'Aplicar los CIF a la producción', formula: 'Tasa CIF = CIF Estimados / Base de Asignación Estimada', ejemplo: 'Si los CIF estimados son $20,000 y las horas máquina estimadas 10,000, la tasa es $2/hora. Si se usan 1,500 horas, el CIF aplicado es $3,000.' },
      ],
      documentacion: [
        { id: 'doc-cos-201-03', titulo: 'Métodos de Valuación de Inventarios', contenido: 'PEPS (Primeras Entradas, Primeras Salidas): asume que se vende primero lo más antiguo. UEPS (Últimas Entradas, Primeras Salidas): asume que se vende primero lo más reciente. Promedio Ponderado: calcula un costo promedio tras cada compra.', fuente: 'Contabilidad de Costos', conceptosClave: ['PEPS', 'UEPS', 'Promedio'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Sistemas de Acumulación
    // ==========================================
    {
      id: 'cos-201-03',
      titulo: 'Sistemas de Acumulación de Costos',
      descripcion: 'Comprende los sistemas de costos por órdenes de producción y por procesos.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Conocer el sistema por órdenes específicas', ejemplo: 'Cada orden de producción tiene una hoja de costos donde se acumulan MP, MOD y CIF.' },
        { id: 2, descripcion: 'Conocer el sistema por procesos', ejemplo: 'La producción es continua y se acumulan costos por departamento. Se calcula el costo unitario dividiendo el costo total entre las unidades producidas.' },
        { id: 3, descripcion: 'Calcular el costo unitario', formula: 'Costo Unitario = Costo Total / Unidades Producidas', ejemplo: 'Si el costo total es $50,000 y se produjeron 10,000 unidades, el costo unitario es $5.' },
        { id: 4, descripcion: 'Elaborar el Estado de Costo de Producción y Ventas', nota: '💡 Este estado muestra el costo de la materia prima consumida, la mano de obra, los CIF y el costo de los productos terminados y vendidos.' },
      ],
      documentacion: [
        { id: 'doc-cos-201-04', titulo: 'Sistema por Órdenes vs. Sistema por Procesos', contenido: 'El sistema por órdenes se usa cuando se producen lotes específicos (ej: muebles a medida). El sistema por procesos se usa en producción continua (ej: refrescos, cemento).', fuente: 'Contabilidad de Costos', conceptosClave: ['Órdenes', 'Procesos', 'Hoja de Costos'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Costeo por Procesos
    // ==========================================
    {
      id: 'cos-201-04',
      titulo: 'Costeo por Procesos y Producción Equivalente',
      descripcion: 'Calcula el costo unitario en producción continua con inventarios en proceso.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Calcular las unidades equivalentes', formula: 'Unidades Equivalentes = Unidades Terminadas + (Unidades en Proceso × % de Avance)', ejemplo: 'Si se terminaron 8,000 unidades y hay 2,000 en proceso al 50% de avance, las unidades equivalentes son 8,000 + (2,000 × 0.50) = 9,000.' },
        { id: 2, descripcion: 'Calcular el costo unitario equivalente', formula: 'Costo Unitario = Costo Total / Unidades Equivalentes', ejemplo: 'Si el costo total es $45,000 y las unidades equivalentes son 9,000, el costo unitario es $5.' },
        { id: 3, descripcion: 'Asignar costos a unidades terminadas y en proceso', nota: '💡 Las unidades terminadas reciben el costo unitario completo; las unidades en proceso reciben el costo proporcional a su avance.' },
      ],
      documentacion: [
        { id: 'doc-cos-201-05', titulo: 'Producción Equivalente', contenido: 'Es una técnica que permite expresar las unidades en proceso en términos de unidades terminadas, para calcular un costo unitario uniforme. Se usa cuando hay inventarios iniciales y finales en proceso.', fuente: 'Contabilidad de Costos', conceptosClave: ['Producción Equivalente', 'Unidades en Proceso', 'Grado de Avance'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-cos-201-01', titulo: 'Costo Primo', descripcion: 'Costos directos del producto', formula: 'Costo Primo = MP + MOD', variables: ['MP: Materia Prima', 'MOD: Mano de Obra Directa'], ejemplo: 'MP $10,000 + MOD $5,000 = $15,000' },
    { id: 'form-cos-201-02', titulo: 'Costo de Conversión', descripcion: 'Costo de transformar la materia prima', formula: 'Costo de Conversión = MOD + CIF', variables: ['MOD: Mano de Obra Directa', 'CIF: Costos Indirectos de Fabricación'], ejemplo: 'MOD $5,000 + CIF $3,000 = $8,000' },
    { id: 'form-cos-201-03', titulo: 'Costo Unitario', descripcion: 'Costo por unidad producida', formula: 'Costo Unitario = Costo Total / Unidades Producidas', variables: ['Costo Total: Suma de MP + MOD + CIF', 'Unidades Producidas: Total fabricado'], ejemplo: '$50,000 / 10,000 = $5 por unidad' },
    { id: 'form-cos-201-04', titulo: 'Tasa de Aplicación de CIF', descripcion: 'Distribuye los CIF entre las órdenes', formula: 'Tasa CIF = CIF Estimados / Base Estimada', variables: ['CIF Estimados: Costos indirectos presupuestados', 'Base: Horas máquina, horas hombre, etc.'], ejemplo: '$20,000 / 10,000 horas = $2/hora' },
    { id: 'form-cos-201-05', titulo: 'Unidades Equivalentes', descripcion: 'Unidades terminadas equivalentes', formula: 'Unidades Equivalentes = Unidades Terminadas + (Unidades en Proceso × % Avance)', variables: ['Unidades Terminadas: Completadas', 'Unidades en Proceso: En fabricación', '% Avance: Grado de terminación'], ejemplo: '8,000 + (2,000 × 0.50) = 9,000' },
  ],

  ejercicios: [
    // Unidad 1 (6)
    { id: 'ej-cos-u1-01', enunciado: '¿Cuál es la diferencia entre costo y gasto?', opciones: ['El costo se relaciona con la producción; el gasto con la administración', 'Son iguales', 'El gasto es mayor', 'El costo es un pasivo'], respuestaCorrecta: 'El costo se relaciona con la producción; el gasto con la administración', explicacion: 'El costo se incorpora al producto; el gasto se consume en el período.', pista: '¿Dónde se aplica cada uno?', tipo: 'multiple' },
    { id: 'ej-cos-u1-02', enunciado: '¿Cuál es un costo fijo?', opciones: ['Alquiler de la fábrica', 'Materia prima', 'Mano de obra directa', 'Comisiones de ventas'], respuestaCorrecta: 'Alquiler de la fábrica', explicacion: 'El alquiler no varía con el nivel de producción.', pista: '¿Qué no cambia con la producción?', tipo: 'multiple' },
    { id: 'ej-cos-u1-03', enunciado: '¿Cuál es un costo variable?', opciones: ['Materia prima', 'Alquiler', 'Seguro de la fábrica', 'Sueldo del gerente'], respuestaCorrecta: 'Materia prima', explicacion: 'La materia prima varía proporcionalmente con la producción.', pista: '¿Qué cambia con la producción?', tipo: 'multiple' },
    { id: 'ej-cos-u1-04', enunciado: 'El costo primo está formado por:', opciones: ['MP + MOD', 'MOD + CIF', 'MP + CIF', 'MP + MOD + CIF'], respuestaCorrecta: 'MP + MOD', explicacion: 'El costo primo son los costos directos del producto.', pista: '¿Qué costos son directos?', tipo: 'multiple' },
    { id: 'ej-cos-u1-05', enunciado: 'El costo de conversión está formado por:', opciones: ['MOD + CIF', 'MP + MOD', 'MP + CIF', 'MP + MOD + CIF'], respuestaCorrecta: 'MOD + CIF', explicacion: 'Es el costo de transformar la materia prima en producto terminado.', pista: '¿Qué se necesita para convertir?', tipo: 'multiple' },
    { id: 'ej-cos-u1-06', enunciado: '¿Cuál es un costo indirecto de fabricación?', opciones: ['Energía eléctrica de la fábrica', 'Tela para camisas', 'Salario del operario', 'Madera para muebles'], respuestaCorrecta: 'Energía eléctrica de la fábrica', explicacion: 'La energía es necesaria pero no se identifica directamente con un producto.', pista: '¿Qué no se identifica directamente?', tipo: 'multiple' },

    // Unidad 2 (8)
    { id: 'ej-cos-u2-01', enunciado: '¿Cómo se registra la compra de materia prima?', opciones: ['Debe: Inventario de MP / Haber: Banco', 'Debe: Banco / Haber: Inventario de MP', 'Debe: Producción en Proceso / Haber: MP', 'No se registra'], respuestaCorrecta: 'Debe: Inventario de MP / Haber: Banco', explicacion: 'El inventario aumenta (Debe) y el banco disminuye (Haber).', pista: '¿Qué cuenta aumenta?', tipo: 'multiple' },
    { id: 'ej-cos-u2-02', enunciado: '¿Cómo se registra el consumo de materia prima?', opciones: ['Debe: Producción en Proceso / Haber: Inventario de MP', 'Debe: Inventario de MP / Haber: Producción', 'Debe: Banco / Haber: MP', 'No se registra'], respuestaCorrecta: 'Debe: Producción en Proceso / Haber: Inventario de MP', explicacion: 'El costo se traslada a producción en proceso.', pista: '¿Dónde va el costo?', tipo: 'multiple' },
    { id: 'ej-cos-u2-03', enunciado: '¿Cómo se registra la mano de obra directa?', opciones: ['Debe: Producción en Proceso / Haber: Salarios por Pagar', 'Debe: Salarios / Haber: Banco', 'Debe: CIF / Haber: Salarios', 'No se registra'], respuestaCorrecta: 'Debe: Producción en Proceso / Haber: Salarios por Pagar', explicacion: 'La MOD se acumula en producción en proceso y genera un pasivo.', pista: '¿Dónde se acumula?', tipo: 'multiple' },
    { id: 'ej-cos-u2-04', enunciado: 'El método PEPS asume que:', opciones: ['Se vende primero lo más antiguo', 'Se vende primero lo más reciente', 'Se usa un promedio', 'No importa el orden'], respuestaCorrecta: 'Se vende primero lo más antiguo', explicacion: 'PEPS = Primeras Entradas, Primeras Salidas.', pista: '¿Qué significa PEPS?', tipo: 'multiple' },
    { id: 'ej-cos-u2-05', enunciado: 'El método UEPS asume que:', opciones: ['Se vende primero lo más reciente', 'Se vende primero lo más antiguo', 'Se usa un promedio', 'No importa el orden'], respuestaCorrecta: 'Se vende primero lo más reciente', explicacion: 'UEPS = Últimas Entradas, Primeras Salidas.', pista: '¿Qué significa UEPS?', tipo: 'multiple' },
    { id: 'ej-cos-u2-06', enunciado: '¿Cómo se calcula la tasa de aplicación de CIF?', opciones: ['CIF Estimados / Base Estimada', 'CIF Reales / Base Real', 'CIF / Unidades', 'No se calcula'], respuestaCorrecta: 'CIF Estimados / Base Estimada', explicacion: 'Se usa una tasa predeterminada para aplicar los CIF.', pista: '¿Qué se divide?', tipo: 'multiple' },
    { id: 'ej-cos-u2-07', enunciado: 'Si los CIF estimados son $20,000 y las horas estimadas 10,000, ¿cuál es la tasa?', opciones: ['$2/hora', '$1/hora', '$3/hora', '$4/hora'], respuestaCorrecta: '$2/hora', explicacion: '$20,000 / 10,000 = $2/hora.', pista: 'Divide los CIF entre las horas.', tipo: 'multiple' },
    { id: 'ej-cos-u2-08', enunciado: 'Si se usan 1,500 horas y la tasa CIF es $2/hora, ¿cuánto CIF se aplica?', opciones: ['$3,000', '$1,500', '$2,000', '$4,000'], respuestaCorrecta: '$3,000', explicacion: '1,500 horas × $2/hora = $3,000.', pista: 'Multiplica horas por tasa.', tipo: 'multiple' },

    // Unidad 3 (8)
    { id: 'ej-cos-u3-01', enunciado: 'El sistema por órdenes se usa cuando:', opciones: ['Se producen lotes específicos', 'La producción es continua', 'No hay producción', 'Se vende al detal'], respuestaCorrecta: 'Se producen lotes específicos', explicacion: 'Cada orden tiene su hoja de costos.', pista: '¿Producción específica o continua?', tipo: 'multiple' },
    { id: 'ej-cos-u3-02', enunciado: 'El sistema por procesos se usa cuando:', opciones: ['La producción es continua', 'Se producen lotes específicos', 'No hay producción', 'Se vende al detal'], respuestaCorrecta: 'La producción es continua', explicacion: 'Se acumulan costos por departamento.', pista: '¿Producción específica o continua?', tipo: 'multiple' },
    { id: 'ej-cos-u3-03', enunciado: '¿Cómo se calcula el costo unitario?', opciones: ['Costo Total / Unidades Producidas', 'Unidades / Costo', 'Costo Total × Unidades', 'No se calcula'], respuestaCorrecta: 'Costo Total / Unidades Producidas', explicacion: 'Es el costo promedio por unidad.', pista: '¿Qué se divide?', tipo: 'multiple' },
    { id: 'ej-cos-u3-04', enunciado: 'Si el costo total es $50,000 y se produjeron 10,000 unidades, ¿cuál es el costo unitario?', opciones: ['$5', '$10', '$50', '$500'], respuestaCorrecta: '$5', explicacion: '$50,000 / 10,000 = $5.', pista: 'Divide el costo entre las unidades.', tipo: 'multiple' },
    { id: 'ej-cos-u3-05', enunciado: 'La hoja de costos se usa en:', opciones: ['Sistema por órdenes', 'Sistema por procesos', 'Ambos', 'Ninguno'], respuestaCorrecta: 'Sistema por órdenes', explicacion: 'Cada orden tiene su hoja de costos.', pista: '¿Dónde se acumulan los costos por orden?', tipo: 'multiple' },
    { id: 'ej-cos-u3-06', enunciado: 'El Estado de Costo de Producción y Ventas muestra:', opciones: ['El costo de la producción terminada y vendida', 'Solo las ventas', 'Solo los gastos', 'Solo los activos'], respuestaCorrecta: 'El costo de la producción terminada y vendida', explicacion: 'Es un estado clave para determinar el costo de ventas.', pista: '¿Qué costo muestra?', tipo: 'multiple' },
    { id: 'ej-cos-u3-07', enunciado: 'En el sistema por procesos, los costos se acumulan por:', opciones: ['Departamento', 'Orden', 'Cliente', 'Producto'], respuestaCorrecta: 'Departamento', explicacion: 'Cada departamento acumula sus costos.', pista: '¿Dónde se acumulan?', tipo: 'multiple' },
    { id: 'ej-cos-u3-08', enunciado: '¿Qué es el costo de producción?', opciones: ['La suma de MP + MOD + CIF', 'Solo la materia prima', 'Solo la mano de obra', 'Solo los CIF'], respuestaCorrecta: 'La suma de MP + MOD + CIF', explicacion: 'Es el costo total de fabricar un producto.', pista: '¿Qué elementos incluye?', tipo: 'multiple' },

    // Unidad 4 (8)
    { id: 'ej-cos-u4-01', enunciado: '¿Qué son las unidades equivalentes?', opciones: ['Unidades terminadas equivalentes a partir de las que están en proceso', 'Unidades vendidas', 'Unidades compradas', 'Unidades dañadas'], respuestaCorrecta: 'Unidades terminadas equivalentes a partir de las que están en proceso', explicacion: 'Expresan las unidades en proceso como si estuvieran terminadas.', pista: '¿Cómo se expresa la producción en proceso?', tipo: 'multiple' },
    { id: 'ej-cos-u4-02', enunciado: 'Si se terminaron 8,000 unidades y hay 2,000 en proceso al 50%, ¿cuántas unidades equivalentes hay?', opciones: ['9,000', '8,000', '10,000', '7,000'], respuestaCorrecta: '9,000', explicacion: '8,000 + (2,000 × 0.50) = 9,000.', pista: 'Aplica la fórmula.', tipo: 'multiple' },
    { id: 'ej-cos-u4-03', enunciado: 'Si el costo total es $45,000 y las unidades equivalentes son 9,000, ¿cuál es el costo unitario?', opciones: ['$5', '$4', '$6', '$10'], respuestaCorrecta: '$5', explicacion: '$45,000 / 9,000 = $5.', pista: 'Divide el costo entre las unidades.', tipo: 'multiple' },
    { id: 'ej-cos-u4-04', enunciado: 'Las unidades en proceso al 50% de avance reciben:', opciones: ['El 50% del costo unitario', 'El 100% del costo', 'Nada', 'El doble'], respuestaCorrecta: 'El 50% del costo unitario', explicacion: 'Se les asigna el costo proporcional a su avance.', pista: '¿Cuánto costo se les asigna?', tipo: 'multiple' },
    { id: 'ej-cos-u4-05', enunciado: 'El costeo por procesos se usa en:', opciones: ['Producción continua', 'Producción por lotes', 'Servicios', 'Comercio'], respuestaCorrecta: 'Producción continua', explicacion: 'Es ideal para productos homogéneos producidos en masa.', pista: '¿Qué tipo de producción?', tipo: 'multiple' },
    { id: 'ej-cos-u4-06', enunciado: '¿Qué es el grado de avance?', opciones: ['El porcentaje de terminación de las unidades en proceso', 'El total de unidades', 'El costo unitario', 'La producción terminada'], respuestaCorrecta: 'El porcentaje de terminación de las unidades en proceso', explicacion: 'Indica cuánto se ha avanzado en la fabricación.', pista: '¿Qué mide el avance?', tipo: 'multiple' },
    { id: 'ej-cos-u4-07', enunciado: 'Si hay 1,000 unidades en proceso al 30% de avance, ¿cuántas unidades equivalentes representan?', opciones: ['300', '1,000', '700', '1,300'], respuestaCorrecta: '300', explicacion: '1,000 × 0.30 = 300.', pista: 'Multiplica por el porcentaje.', tipo: 'multiple' },
    { id: 'ej-cos-u4-08', enunciado: 'Las unidades terminadas reciben:', opciones: ['El 100% del costo unitario', 'El 50%', 'El 30%', 'Nada'], respuestaCorrecta: 'El 100% del costo unitario', explicacion: 'Ya están completas, por lo que se les asigna el costo total.', pista: '¿Están completas?', tipo: 'multiple' },
  ],

  examenes: [
    {
      id: 'exam-cos-201-01',
      titulo: 'Examen Parcial - Sistema de Costo I',
      descripcion: 'Evaluación de los temas 1 y 2: Fundamentos y Control de los Elementos del Costo.',
      duracionMinutos: 60,
      preguntas: [
        { id: 'ex-cos-201-01-p1', enunciado: 'Explique la diferencia entre costo, gasto y pérdida, y dé un ejemplo de cada uno en una empresa industrial.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'Costo: se incorpora al producto (ej: materia prima consumida). Gasto: se consume en el período sin incorporarse al producto (ej: sueldo del administrador). Pérdida: disminución de activos sin contraprestación (ej: mercancía dañada por incendio).' },
        { id: 'ex-cos-201-01-p2', enunciado: 'Una empresa tiene CIF estimados de $30,000 y una base de 15,000 horas máquina. Calcule la tasa de aplicación y el CIF aplicado si se usan 2,000 horas.', tipo: 'practica', puntaje: 20, operaciones: ['CIF Estimados = $30,000', 'Horas estimadas = 15,000', 'Horas reales = 2,000'], solucionPasos: [{ titulo: 'Paso 1: Calcular la tasa', contenido: 'Tasa = $30,000 / 15,000 = $2/hora' }, { titulo: 'Paso 2: Calcular el CIF aplicado', contenido: 'CIF Aplicado = 2,000 horas × $2/hora = $4,000' }, { titulo: 'Paso 3: Interpretar', contenido: 'Se aplican $4,000 de CIF a la producción.' }] },
      ],
    },
    {
      id: 'exam-cos-201-02',
      titulo: 'Examen Final - Sistema de Costo I',
      descripcion: 'Evaluación de los temas 3 y 4: Sistemas de Acumulación y Costeo por Procesos.',
      duracionMinutos: 90,
      preguntas: [
        { id: 'ex-cos-201-02-p1', enunciado: 'Explique la diferencia entre el sistema de costos por órdenes y el sistema por procesos.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'El sistema por órdenes se usa para producciones específicas (lotes), acumulando costos en una hoja de costos por orden. El sistema por procesos se usa en producción continua, acumulando costos por departamento y calculando un costo unitario promedio.' },
        { id: 'ex-cos-201-02-p2', enunciado: 'Una empresa terminó 10,000 unidades y tiene 2,000 unidades en proceso al 60% de avance. El costo total del departamento es $72,000. Calcule las unidades equivalentes y el costo unitario.', tipo: 'practica', puntaje: 20, operaciones: ['Unidades terminadas = 10,000', 'Unidades en proceso = 2,000', '% Avance = 60%', 'Costo total = $72,000'], solucionPasos: [{ titulo: 'Paso 1: Calcular unidades equivalentes', contenido: 'UE = 10,000 + (2,000 × 0.60) = 10,000 + 1,200 = 11,200' }, { titulo: 'Paso 2: Calcular costo unitario', contenido: 'Costo Unitario = $72,000 / 11,200 = $6.43' }, { titulo: 'Paso 3: Interpretar', contenido: 'El costo unitario equivalente es $6.43 por unidad.' }] },
      ],
    },
    {
  id: 'exam-cos-201-03',
  titulo: 'Examen de Práctica - Elaboración del Costo de un Producto',
  descripcion: 'Ejercicios progresivos para calcular el costo de producción: desde la acumulación de elementos hasta el costo unitario y el estado de costo de ventas.',
  duracionMinutos: 150,
  preguntas: [
    // ==========================================
    // NIVEL 1: BÁSICO (5 preguntas)
    // ==========================================
    {
      id: 'ex-cos-201-03-p1',
      enunciado: 'Una empresa fabrica un producto con los siguientes datos: Materia Prima consumida $10,000; Mano de Obra Directa $5,000; CIF $3,000. Calcule el costo de producción total y el costo primo.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['MP = $10,000', 'MOD = $5,000', 'CIF = $3,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular el costo primo', contenido: 'Costo Primo = MP + MOD = $10,000 + $5,000 = $15,000' },
        { titulo: 'Paso 2: Calcular el costo de producción total', contenido: 'Costo Total = MP + MOD + CIF = $10,000 + $5,000 + $3,000 = $18,000' },
        { titulo: 'Paso 3: Interpretar', contenido: 'El costo primo (directo) es $15,000 y el costo total de producción es $18,000.' },
      ],
    },
    {
      id: 'ex-cos-201-03-p2',
      enunciado: 'Si el costo de producción total es $50,000 y se fabricaron 10,000 unidades, ¿cuál es el costo unitario?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Costo Total = $50,000', 'Unidades = 10,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Costo Unitario = Costo Total / Unidades Producidas' },
        { titulo: 'Paso 2: Sustituir', contenido: '$50,000 / 10,000 = $5 por unidad' },
      ],
    },
    {
      id: 'ex-cos-201-03-p3',
      enunciado: 'Una empresa tiene CIF estimados de $40,000 y una base de 20,000 horas máquina. Calcule la tasa de aplicación de CIF.',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['CIF Estimados = $40,000', 'Horas estimadas = 20,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Tasa CIF = CIF Estimados / Base Estimada' },
        { titulo: 'Paso 2: Sustituir', contenido: '$40,000 / 20,000 = $2/hora' },
      ],
    },
    {
      id: 'ex-cos-201-03-p4',
      enunciado: 'Si la tasa CIF es $3/hora y se utilizan 2,500 horas, ¿cuánto CIF se aplica a la producción?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['Tasa CIF = $3/hora', 'Horas reales = 2,500'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular CIF aplicado', contenido: 'CIF Aplicado = Horas reales × Tasa CIF' },
        { titulo: 'Paso 2: Sustituir', contenido: '2,500 × $3 = $7,500' },
      ],
    },
    {
      id: 'ex-cos-201-03-p5',
      enunciado: '¿Cuál es el costo de conversión si la MOD es $8,000 y los CIF son $4,000?',
      tipo: 'practica',
      puntaje: 10,
      operaciones: ['MOD = $8,000', 'CIF = $4,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Costo de Conversión = MOD + CIF' },
        { titulo: 'Paso 2: Sustituir', contenido: '$8,000 + $4,000 = $12,000' },
      ],
    },

    // ==========================================
    // NIVEL 2: INTERMEDIO (5 preguntas)
    // ==========================================
    {
      id: 'ex-cos-201-03-p6',
      enunciado: 'Una empresa fabrica 5,000 unidades con los siguientes costos: MP $20,000; MOD $15,000; CIF $10,000. Calcule el costo primo, el costo de conversión y el costo unitario.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Unidades = 5,000', 'MP = $20,000', 'MOD = $15,000', 'CIF = $10,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular el costo primo', contenido: 'Costo Primo = MP + MOD = $20,000 + $15,000 = $35,000' },
        { titulo: 'Paso 2: Calcular el costo de conversión', contenido: 'Costo de Conversión = MOD + CIF = $15,000 + $10,000 = $25,000' },
        { titulo: 'Paso 3: Calcular el costo total', contenido: 'Costo Total = MP + MOD + CIF = $20,000 + $15,000 + $10,000 = $45,000' },
        { titulo: 'Paso 4: Calcular el costo unitario', contenido: 'Costo Unitario = $45,000 / 5,000 = $9 por unidad' },
      ],
    },
    {
      id: 'ex-cos-201-03-p7',
      enunciado: 'Una empresa tiene un inventario inicial de materia prima de $5,000, compras de $15,000 y un inventario final de $3,000. ¿Cuál es el consumo de materia prima?',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Inventario Inicial = $5,000', 'Compras = $15,000', 'Inventario Final = $3,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Consumo = Inventario Inicial + Compras - Inventario Final' },
        { titulo: 'Paso 2: Sustituir', contenido: '$5,000 + $15,000 - $3,000 = $17,000' },
      ],
    },
    {
      id: 'ex-cos-201-03-p8',
      enunciado: 'Una empresa terminó 8,000 unidades y tiene 2,000 unidades en proceso al 50% de avance. El costo total es $90,000. Calcule las unidades equivalentes y el costo unitario.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Terminadas = 8,000', 'En proceso = 2,000', '% Avance = 50%', 'Costo Total = $90,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular unidades equivalentes', contenido: 'UE = 8,000 + (2,000 × 0.50) = 9,000' },
        { titulo: 'Paso 2: Calcular costo unitario', contenido: '$90,000 / 9,000 = $10 por unidad' },
      ],
    },
    {
      id: 'ex-cos-201-03-p9',
      enunciado: 'Una empresa tiene los siguientes datos: MP $30,000; MOD $20,000; CIF $15,000. El inventario inicial de producción en proceso es $5,000 y el final es $8,000. Calcule el costo de los productos terminados.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['MP = $30,000', 'MOD = $20,000', 'CIF = $15,000', 'Inv. Inicial PP = $5,000', 'Inv. Final PP = $8,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular el costo de producción', contenido: 'Costo de Producción = MP + MOD + CIF = $30,000 + $20,000 + $15,000 = $65,000' },
        { titulo: 'Paso 2: Calcular el costo de productos terminados', contenido: 'Costo Terminados = Inv. Inicial PP + Costo de Producción - Inv. Final PP = $5,000 + $65,000 - $8,000 = $62,000' },
      ],
    },
    {
      id: 'ex-cos-201-03-p10',
      enunciado: 'Una empresa tiene un costo de productos terminados de $80,000, un inventario inicial de productos terminados de $10,000 y un inventario final de $12,000. Calcule el costo de ventas.',
      tipo: 'practica',
      puntaje: 15,
      operaciones: ['Costo Terminados = $80,000', 'Inv. Inicial PT = $10,000', 'Inv. Final PT = $12,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Costo de Ventas = Inv. Inicial PT + Costo Terminados - Inv. Final PT' },
        { titulo: 'Paso 2: Sustituir', contenido: '$10,000 + $80,000 - $12,000 = $78,000' },
      ],
    },

    // ==========================================
    // NIVEL 3: AVANZADO (5 preguntas)
    // ==========================================
    {
      id: 'ex-cos-201-03-p11',
      enunciado: 'Una empresa fabrica dos productos: A y B. Los costos indirectos son $30,000 y se distribuyen con base en las horas máquina (A: 2,000 horas; B: 3,000 horas). Calcule el CIF asignado a cada producto.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['CIF = $30,000', 'Horas A = 2,000', 'Horas B = 3,000', 'Total horas = 5,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Calcular la tasa de CIF', contenido: 'Tasa = $30,000 / 5,000 horas = $6/hora' },
        { titulo: 'Paso 2: Asignar a A', contenido: 'CIF A = 2,000 × $6 = $12,000' },
        { titulo: 'Paso 3: Asignar a B', contenido: 'CIF B = 3,000 × $6 = $18,000' },
        { titulo: 'Paso 4: Verificar', contenido: '$12,000 + $18,000 = $30,000 ✅' },
      ],
    },
    {
      id: 'ex-cos-201-03-p12',
      enunciado: 'Una empresa tiene los siguientes datos: MP $50,000; MOD $30,000; CIF $20,000. El inventario inicial de PP es $10,000 y el final es $15,000. El inventario inicial de PT es $8,000 y el final es $12,000. Calcule el costo de ventas.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['MP = $50,000', 'MOD = $30,000', 'CIF = $20,000', 'Inv. Inicial PP = $10,000', 'Inv. Final PP = $15,000', 'Inv. Inicial PT = $8,000', 'Inv. Final PT = $12,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo de producción', contenido: 'Costo Producción = $50,000 + $30,000 + $20,000 = $100,000' },
        { titulo: 'Paso 2: Costo de productos terminados', contenido: 'Costo Terminados = $10,000 + $100,000 - $15,000 = $95,000' },
        { titulo: 'Paso 3: Costo de ventas', contenido: 'Costo Ventas = $8,000 + $95,000 - $12,000 = $91,000' },
      ],
    },
    {
      id: 'ex-cos-201-03-p13',
      enunciado: 'Una empresa tiene 10,000 unidades terminadas y 3,000 unidades en proceso con diferentes grados de avance: MP 100%, MOD 60%, CIF 40%. El costo total es $120,000. Calcule las unidades equivalentes por elemento y el costo unitario.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Terminadas = 10,000', 'En proceso = 3,000', 'MP 100%, MOD 60%, CIF 40%', 'Costo Total = $120,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Unidades equivalentes MP', contenido: 'UE(MP) = 10,000 + (3,000 × 1.00) = 13,000' },
        { titulo: 'Paso 2: Unidades equivalentes MOD', contenido: 'UE(MOD) = 10,000 + (3,000 × 0.60) = 11,800' },
        { titulo: 'Paso 3: Unidades equivalentes CIF', contenido: 'UE(CIF) = 10,000 + (3,000 × 0.40) = 11,200' },
        { titulo: 'Paso 4: Costo unitario (asumiendo distribución uniforme del costo)', contenido: 'Costo Unitario = $120,000 / 12,000 ≈ $10 (aproximado, depende de la distribución de costos)' },
      ],
    },
    {
      id: 'ex-cos-201-03-p14',
      enunciado: 'Una empresa tiene los siguientes datos: Costo de producción $80,000; Inventario inicial de PP $5,000; Inventario final de PP $10,000; Inventario inicial de PT $15,000; Inventario final de PT $20,000. Calcule el costo de ventas y el margen bruto si las ventas son $150,000.',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo Producción = $80,000', 'Inv. Inicial PP = $5,000', 'Inv. Final PP = $10,000', 'Inv. Inicial PT = $15,000', 'Inv. Final PT = $20,000', 'Ventas = $150,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo de productos terminados', contenido: 'Costo Terminados = $5,000 + $80,000 - $10,000 = $75,000' },
        { titulo: 'Paso 2: Costo de ventas', contenido: 'Costo Ventas = $15,000 + $75,000 - $20,000 = $70,000' },
        { titulo: 'Paso 3: Margen bruto', contenido: 'Margen Bruto = Ventas - Costo de Ventas = $150,000 - $70,000 = $80,000' },
      ],
    },
    {
      id: 'ex-cos-201-03-p15',
      enunciado: 'Una empresa tiene dos departamentos: A y B. El departamento A transfiere su producción a B. Los costos del departamento A son: MP $40,000; MOD $20,000; CIF $15,000. Produjo 5,000 unidades. El departamento B agrega: MOD $10,000; CIF $8,000. Calcule el costo unitario del departamento A y el costo unitario final del departamento B (asumiendo que no hay inventarios en proceso).',
      tipo: 'practica',
      puntaje: 20,
      operaciones: ['Costo A = MP $40,000 + MOD $20,000 + CIF $15,000 = $75,000', 'Unidades A = 5,000', 'Costo B adicional = MOD $10,000 + CIF $8,000 = $18,000'],
      solucionPasos: [
        { titulo: 'Paso 1: Costo unitario de A', contenido: '$75,000 / 5,000 = $15 por unidad' },
        { titulo: 'Paso 2: Costo total transferido a B', contenido: '5,000 unidades × $15 = $75,000' },
        { titulo: 'Paso 3: Costo total en B', contenido: '$75,000 + $18,000 = $93,000' },
        { titulo: 'Paso 4: Costo unitario final en B', contenido: '$93,000 / 5,000 = $18.60 por unidad' },
      ],
    },
  ],
},
  ],
};