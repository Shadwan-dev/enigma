// src/infrastructure/data/asignaturas/con-101.ts
import type { Asignatura } from '@/core/entities';

export const con101: Asignatura = {
  id: 'con-101',
  nombre: 'Contabilidad General I',
  descripcion:
    'Introducción a la contabilidad desde cero: conceptos básicos, ecuación contable, cuentas T, balance de comprobación y estados financieros.',
  contenidos: [
    // ==========================================
    // UNIDAD 1: ¿Qué es la Contabilidad y para qué sirve?
    // ==========================================
    {
      id: 'con-101-01',
      titulo: '¿Qué es la Contabilidad y para qué sirve?',
      descripcion:
        'Descubre por qué existe la contabilidad, quiénes la usan y cuál es el rol del contador.',
      duracionEstimada: '15 min',
      nivel: 'basico',
      pasos: [
        {
          id: 1,
          descripcion: 'Entender la definición de Contabilidad',
          ejemplo:
            'La contabilidad es la ciencia que registra, clasifica y resume las operaciones de una empresa para提供 información útil para la toma de decisiones.',
        },
        {
          id: 2,
          descripcion: 'Identificar quiénes usan la información contable',
          ejemplo:
            'Los dueños (para saber si ganan), los bancos (para prestar), el Estado (para cobrar impuestos) y los inversionistas.',
        },
        {
          id: 3,
          descripcion: 'Reconocer la importancia de la ética en la contabilidad',
          ejemplo:
            'Un contador debe registrar la verdad, no ocultar deudas ni inflar ganancias. La confianza es la base de la profesión.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-101-01',
          titulo: '¿Qué es la Contabilidad?',
          contenido:
            'La contabilidad es el sistema de información que permite identificar, medir y comunicar la situación económica de una empresa. No es solo "llevar libros"; es una herramienta para tomar decisiones. Por ejemplo, si un dueño quiere saber si su negocio es rentable, la contabilidad se lo dice.',
          fuente: 'Normas Cubanas de Contabilidad',
          conceptosClave: ['Contabilidad', 'Información financiera', 'Toma de decisiones'],
        },
        {
          id: 'doc-con-101-02',
          titulo: 'Usuarios de la información contable',
          contenido:
            'La información contable no es solo para el dueño. Los bancos la usan para decidir si prestan dinero; el Estado para calcular impuestos; los empleados para saber si la empresa es estable; y los inversionistas para decidir dónde poner su dinero.',
          fuente: 'Principios de Contabilidad Generalmente Aceptados (PCGA)',
          conceptosClave: ['Usuarios internos', 'Usuarios externos', 'Transparencia'],
        },
      ],
    },

    // ==========================================
    // UNIDAD 2: La Ecuación Contable (El ADN de la Contabilidad)
    // ==========================================
    {
      id: 'con-101-02',
      titulo: 'La Ecuación Contable',
      descripcion:
        'Aprende la base de toda la contabilidad: Activo = Pasivo + Patrimonio, y cómo se aplica en la práctica.',
      duracionEstimada: '25 min',
      nivel: 'basico',
      pasos: [
        {
          id: 1,
          descripcion: 'Identificar los Activos (Bienes y derechos)',
          ejemplo:
            'Efectivo en caja: $5,000. Mercancías en almacén: $3,000. Cuentas por cobrar a clientes: $2,000. Total Activo = $10,000.',
        },
        {
          id: 2,
          descripcion: 'Identificar los Pasivos (Deudas y obligaciones)',
          ejemplo:
            'Préstamo bancario: $2,000. Cuentas por pagar a proveedores: $1,000. Total Pasivo = $3,000.',
        },
        {
          id: 3,
          descripcion: 'Calcular el Patrimonio (Capital contable)',
          formula: 'Patrimonio = Activo - Pasivo',
          ejemplo:
            'Si Activo = $10,000 y Pasivo = $3,000, entonces Patrimonio = $7,000. Eso es lo que realmente tiene el dueño.',
        },
        {
          id: 4,
          descripcion: 'Verificar que la ecuación se cumpla',
          formula: 'Activo = Pasivo + Patrimonio',
          ejemplo:
            '$10,000 = $3,000 + $7,000. ✅ La ecuación está balanceada.',
          nota: '⚠️ Si la ecuación no se cumple, hay un error en los registros. La contabilidad siempre debe estar en equilibrio.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-101-03',
          titulo: '¿Qué es un Activo?',
          contenido:
            'Un activo es todo lo que la empresa TIENE y que tiene valor. No es solo dinero en efectivo; también son las cuentas por cobrar (lo que nos deben los clientes), los inventarios (mercancías) y los equipos (computadoras, vehículos). Los activos se clasifican en Corrientes (se convierten en efectivo en menos de 1 año) y No Corrientes (más de 1 año).',
          fuente: 'Norma Cubana de Contabilidad No. 1',
          conceptosClave: ['Activo Corriente', 'Activo No Corriente', 'Bienes', 'Derechos'],
        },
        {
          id: 'doc-con-101-04',
          titulo: '¿Qué es un Pasivo?',
          contenido:
            'Un pasivo es todo lo que la empresa DEBE. Si compramos mercancía a crédito, tenemos una deuda (cuenta por pagar). Los préstamos bancarios también son pasivos. Al igual que los activos, los pasivos se clasifican en Corrientes (vencen en menos de 1 año) y No Corrientes (más de 1 año).',
          fuente: 'Norma Cubana de Contabilidad No. 1',
          conceptosClave: ['Pasivo Corriente', 'Pasivo No Corriente', 'Deudas', 'Obligaciones'],
        },
        {
          id: 'doc-con-101-05',
          titulo: '¿Qué es el Patrimonio?',
          contenido:
            'El patrimonio es el capital aportado por los dueños más las ganancias acumuladas. Es lo que realmente "queda" para los dueños después de pagar todas las deudas. También se le llama Capital Contable o Patrimonio Neto.',
          fuente: 'Norma Cubana de Contabilidad No. 1',
          conceptosClave: ['Capital', 'Ganancias acumuladas', 'Patrimonio Neto'],
        },
      ],
    },

    // ==========================================
    // UNIDAD 3: La Cuenta y la Partida Doble (Cuentas T)
    // ==========================================
    {
      id: 'con-101-03',
      titulo: 'La Cuenta y la Partida Doble (Cuentas T)',
      descripcion:
        'Aprende a registrar operaciones usando cuentas T, el Debe y el Haber. La base de todo registro contable.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        {
          id: 1,
          descripcion: 'Entender qué es una cuenta',
          ejemplo:
            'Una cuenta es como una "caja" donde anotas los movimientos de un concepto. Por ejemplo: Caja (dinero en efectivo), Banco (dinero en el banco), Mercancías (inventario).',
        },
        {
          id: 2,
          descripcion: 'Conocer la estructura de una Cuenta T',
          ejemplo:
            'La Cuenta T tiene dos lados: el DEBE (izquierda) y el HABER (derecha). En el centro se escribe el nombre de la cuenta.',
        },
        {
          id: 3,
          descripcion: 'Aplicar las reglas de la Partida Doble',
          formula: 'Activo: Aumenta por el Debe, disminuye por el Haber',
          ejemplo:
            'Si entra dinero a Caja, se anota en el Debe. Si sale dinero de Caja, se anota en el Haber.',
        },
        {
          id: 4,
          descripcion: 'Registrar una operación en la Cuenta T',
          ejemplo:
            'El dueño aporta $10,000 en efectivo. ¿Qué cuentas se afectan? "Caja" (Activo) y "Capital" (Patrimonio). Caja aumenta (Debe), Capital aumenta (Haber).',
          nota: '💡 Regla de oro: Todo débito tiene un crédito. La suma de débitos siempre debe ser igual a la suma de créditos.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-101-06',
          titulo: 'La Cuenta T y sus elementos',
          contenido:
            'La Cuenta T es la representación gráfica de una cuenta. Tiene dos columnas: el DEBE (izquierda) y el HABER (derecha). En el centro se escribe el nombre de la cuenta. Los movimientos que aumentan el activo se anotan en el Debe; los que lo disminuyen, en el Haber. Para el pasivo y el patrimonio es al revés: aumentan por el Haber y disminuyen por el Debe.',
          fuente: 'Luca Pacioli, "Summa de Arithmetica" (1494)',
          conceptosClave: ['Debe', 'Haber', 'Cuenta T', 'Partida Doble'],
        },
        {
          id: 'doc-con-101-07',
          titulo: 'Reglas de la Partida Doble',
          contenido:
            'La partida doble es el principio que dice: "No hay deudor sin acreedor". Cada operación afecta al menos dos cuentas. Si una cuenta aumenta por el Debe, otra debe aumentar por el Haber (o disminuir por el Debe). Esto garantiza que la ecuación contable siempre se mantenga.',
          fuente: 'Principios de Contabilidad Generalmente Aceptados (PCGA)',
          conceptosClave: ['Débito', 'Crédito', 'Equilibrio contable'],
        },
      ],
    },

    // ==========================================
    // UNIDAD 4: El Ciclo Contable y el Balance de Comprobación
    // ==========================================
    {
      id: 'con-101-04',
      titulo: 'El Ciclo Contable y el Balance de Comprobación de Saldos',
      descripcion:
        'Aprende el proceso completo: desde el comprobante hasta el balance de comprobación, y cómo verificar que todo esté correcto.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        {
          id: 1,
          descripcion: 'Identificar la operación en el comprobante',
          ejemplo:
            'Se compra mercancía por $2,000 a crédito. El comprobante es la factura del proveedor.',
        },
        {
          id: 2,
          descripcion: 'Analizar qué cuentas se afectan',
          ejemplo:
            'Mercancías (Activo) aumenta. Cuentas por Pagar (Pasivo) aumenta.',
        },
        {
          id: 3,
          descripcion: 'Registrar en el Libro Diario',
          ejemplo:
            'Debe: Mercancías $2,000 / Haber: Cuentas por Pagar $2,000.',
        },
        {
          id: 4,
          descripcion: 'Pasar los valores al Libro Mayor (Cuentas T)',
          ejemplo:
            'En la cuenta T de Mercancías, anotar $2,000 en el Debe. En la cuenta T de Cuentas por Pagar, anotar $2,000 en el Haber.',
        },
        {
          id: 5,
          descripcion: 'Elaborar el Balance de Comprobación de Saldos',
          formula: 'Suma de Débitos = Suma de Créditos',
          ejemplo:
            'Listar todas las cuentas con sus saldos (deudores o acreedores). Verificar que la suma total de débitos sea igual a la suma total de créditos.',
          nota: '⚠️ Si el balance no cuadra, hay un error. Revisa los registros.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-101-08',
          titulo: 'El Ciclo Contable paso a paso',
          contenido:
            'El ciclo contable es el proceso que sigue una operación desde que ocurre hasta que se refleja en los estados financieros. Los pasos son: 1) Ocurre la operación y se obtiene el comprobante. 2) Se registra en el Libro Diario. 3) Se pasa al Libro Mayor. 4) Se elabora el Balance de Comprobación. 5) Se ajustan las cuentas. 6) Se preparan los Estados Financieros.',
          fuente: 'Normas Cubanas de Contabilidad',
          conceptosClave: ['Comprobante', 'Libro Diario', 'Libro Mayor', 'Balance de Comprobación'],
        },
        {
          id: 'doc-con-101-09',
          titulo: '¿Qué es el Balance de Comprobación de Saldos?',
          contenido:
            'El Balance de Comprobación es una lista de todas las cuentas con sus saldos (deudores o acreedores) en un momento dado. Su objetivo es verificar que la suma de los débitos sea igual a la suma de los créditos. Si no cuadra, hay un error en los registros. Es una herramienta de control, no un estado financiero.',
          fuente: 'Principios de Contabilidad Generalmente Aceptados (PCGA)',
          conceptosClave: ['Saldo deudor', 'Saldo acreedor', 'Control interno'],
        },
      ],
    },

    // ==========================================
    // UNIDAD 5: Los Estados Financieros Básicos
    // ==========================================
    {
      id: 'con-101-05',
      titulo: 'Los Estados Financieros Básicos',
      descripcion:
        'Aprende a interpretar el Balance General y el Estado de Resultados, los dos estados financieros fundamentales.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        {
          id: 1,
          descripcion: 'Entender qué es el Balance General',
          ejemplo:
            'Es una "foto" de la empresa en un momento dado. Muestra el Activo, el Pasivo y el Patrimonio. Ejemplo: Activo = $50,000, Pasivo = $20,000, Patrimonio = $30,000.',
        },
        {
          id: 2,
          descripcion: 'Entender qué es el Estado de Resultados',
          ejemplo:
            'Es un "video" de lo que pasó en un período (mes, año). Muestra los Ingresos, los Gastos y la Utilidad (o Pérdida). Ejemplo: Ingresos = $30,000, Gastos = $20,000, Utilidad = $10,000.',
        },
        {
          id: 3,
          descripcion: 'Relacionar ambos estados',
          formula: 'Utilidad del Ejercicio → aumenta el Patrimonio',
          ejemplo:
            'Si la empresa gana $10,000, ese dinero pasa al Patrimonio en el Balance General.',
        },
        {
          id: 4,
          descripcion: 'Interpretar los resultados',
          ejemplo:
            'Si el Pasivo es mayor que el Activo, la empresa está en quiebra técnica. Si la Utilidad es negativa, hay pérdida.',
          nota: '💡 Los estados financieros son la base para tomar decisiones: invertir, pedir préstamos, expandirse o cerrar.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-101-10',
          titulo: 'El Balance General (Estado de Situación)',
          contenido:
            'El Balance General muestra la situación financiera de la empresa en un momento específico. Se compone de: Activo (lo que tiene), Pasivo (lo que debe) y Patrimonio (lo que es de los dueños). Siempre debe cumplir la ecuación: Activo = Pasivo + Patrimonio. Se presenta en forma de cuenta (Activo a la izquierda, Pasivo y Patrimonio a la derecha) o en forma de reporte (uno debajo del otro).',
          fuente: 'Norma Cubana de Contabilidad No. 2',
          conceptosClave: ['Balance General', 'Activo', 'Pasivo', 'Patrimonio'],
        },
        {
          id: 'doc-con-101-11',
          titulo: 'El Estado de Resultados (Estado de Ganancias y Pérdidas)',
          contenido:
            'El Estado de Resultados muestra si la empresa ganó o perdió en un período. Se compone de: Ingresos (dinero que entra por ventas), Gastos (dinero que sale por costos y operaciones) y Utilidad o Pérdida (Ingresos - Gastos). Si los ingresos superan los gastos, hay utilidad. Si los gastos superan los ingresos, hay pérdida.',
          fuente: 'Norma Cubana de Contabilidad No. 2',
          conceptosClave: ['Ingresos', 'Gastos', 'Utilidad', 'Pérdida'],
        },
      ],
    },
  ],

  // ==========================================
  // FÓRMULAS
  // ==========================================
  formulas: [
    {
      id: 'form-con-101-01',
      titulo: 'Ecuación Contable Fundamental',
      descripcion: 'La base de toda la contabilidad financiera',
      formula: 'Activo = Pasivo + Patrimonio',
      variables: [
        'Activo: Bienes y derechos de la empresa',
        'Pasivo: Deudas y obligaciones de la empresa',
        'Patrimonio: Capital contable (Activo - Pasivo)',
      ],
      ejemplo: 'Si Activo = $50,000 y Pasivo = $20,000, entonces Patrimonio = $30,000',
      nota: '⚠️ Esta ecuación siempre debe balancear. Si no, hay un error.',
    },
    {
      id: 'form-con-101-02',
      titulo: 'Cálculo de Patrimonio Neto',
      descripcion: 'Determina el valor real de la empresa',
      formula: 'Patrimonio = Activo - Pasivo',
      variables: [
        'Activo: Total de bienes y derechos',
        'Pasivo: Total de deudas y obligaciones',
      ],
      ejemplo: 'Activo = $100,000, Pasivo = $40,000 → Patrimonio = $60,000',
    },
    {
      id: 'form-con-101-03',
      titulo: 'Capital de Trabajo',
      descripcion: 'Indica la liquidez operativa de la empresa',
      formula: 'Capital de Trabajo = Activo Corriente - Pasivo Corriente',
      variables: [
        'Activo Corriente: Activos que se convierten en efectivo en menos de 1 año',
        'Pasivo Corriente: Deudas que vencen en menos de 1 año',
      ],
      ejemplo: 'Activo Corriente = $80,000, Pasivo Corriente = $30,000 → Capital de Trabajo = $50,000',
      nota: '💰 Un capital de trabajo positivo indica buena liquidez.',
    },
    {
      id: 'form-con-101-04',
      titulo: 'Regla de la Partida Doble',
      descripcion: 'Todo débito tiene un crédito',
      formula: 'Suma de Débitos = Suma de Créditos',
      variables: [
        'Débito: Columna izquierda de la Cuenta T',
        'Crédito: Columna derecha de la Cuenta T',
      ],
      ejemplo: 'Si debito Caja por $1,000, debo acreditar otra cuenta por $1,000',
      nota: '💡 No hay deudor sin acreedor.',
    },
    {
      id: 'form-con-101-05',
      titulo: 'Balance de Comprobación',
      descripcion: 'Verifica que los registros estén equilibrados',
      formula: 'Suma de Saldos Deudores = Suma de Saldos Acreedores',
      variables: [
        'Saldo Deudor: Cuentas de Activo y Gastos',
        'Saldo Acreedor: Cuentas de Pasivo, Patrimonio e Ingresos',
      ],
      ejemplo: 'Si los deudores suman $50,000, los acreedores deben sumar $50,000',
      nota: '⚠️ Si no cuadra, hay un error en los registros.',
    },
    {
      id: 'form-con-101-06',
      titulo: 'Utilidad o Pérdida del Ejercicio',
      descripcion: 'Determina si la empresa ganó o perdió en un período',
      formula: 'Utilidad = Ingresos - Gastos',
      variables: [
        'Ingresos: Dinero que entra por ventas',
        'Gastos: Dinero que sale por costos y operaciones',
      ],
      ejemplo: 'Ingresos = $30,000, Gastos = $20,000 → Utilidad = $10,000',
      nota: '💰 Si el resultado es negativo, hay pérdida.',
    },
  ],

  // ==========================================
  // EJERCICIOS
  // ==========================================
  // src/infrastructure/data/asignaturas/con-101.ts (fragmento - solo ejercicios)

ejercicios: [
  // ==========================================
  // UNIDAD 1: ¿Qué es la Contabilidad? (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-101-u1-01',
    enunciado: '¿Cuál es el objetivo principal de la contabilidad?',
    opciones: [
      'Registrar solo las ventas',
      'Proporcionar información útil para la toma de decisiones',
      'Calcular impuestos únicamente',
      'Llevar el control de los empleados',
    ],
    respuestaCorrecta: 'Proporcionar información útil para la toma de decisiones',
    explicacion: 'La contabilidad registra, clasifica y resume las operaciones para提供 información útil para la toma de decisiones.',
    pista: 'Piensa en quién usa la información contable y para qué.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-02',
    enunciado: '¿Quiénes son usuarios externos de la información contable?',
    opciones: ['Los dueños y gerentes', 'Los bancos y el Estado', 'Los empleados', 'Los contadores'],
    respuestaCorrecta: 'Los bancos y el Estado',
    explicacion: 'Los bancos usan la información para decidir préstamos, y el Estado para calcular impuestos.',
    pista: 'Piensa en personas o entidades fuera de la empresa.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-03',
    enunciado: '¿Por qué es importante la ética en la contabilidad?',
    opciones: [
      'Para que el contador gane más dinero',
      'Para que la información sea confiable y transparente',
      'Para ocultar deudas de la empresa',
      'Para inflar las ganancias',
    ],
    respuestaCorrecta: 'Para que la información sea confiable y transparente',
    explicacion: 'La ética garantiza que la información contable sea veraz, lo que genera confianza en los usuarios.',
    pista: '¿Qué pasaría si la información contable fuera falsa?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-04',
    enunciado: 'La contabilidad es una ciencia porque:',
    opciones: [
      'Usa computadoras',
      'Tiene un objeto de estudio, métodos y principios propios',
      'Solo la usan los bancos',
      'Es muy difícil',
    ],
    respuestaCorrecta: 'Tiene un objeto de estudio, métodos y principios propios',
    explicacion: 'La contabilidad es una ciencia social porque estudia el patrimonio de las empresas con métodos y principios definidos.',
    pista: '¿Qué hace que una disciplina sea considerada ciencia?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-05',
    enunciado: '¿Cuál de estas NO es una función de la contabilidad?',
    opciones: [
      'Registrar operaciones',
      'Clasificar información',
      'Resumir información',
      'Diseñar productos',
    ],
    respuestaCorrecta: 'Diseñar productos',
    explicacion: 'La contabilidad registra, clasifica y resume información financiera. Diseñar productos es tarea de otras áreas.',
    pista: '¿Qué actividades son propias del área financiera?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-06',
    enunciado: 'Un banco revisa los estados financieros de una empresa antes de otorgar un préstamo. ¿Qué tipo de usuario es?',
    opciones: ['Usuario interno', 'Usuario externo', 'Socio', 'Empleado'],
    respuestaCorrecta: 'Usuario externo',
    explicacion: 'El banco es un usuario externo porque no forma parte de la empresa, pero necesita su información para tomar decisiones.',
    pista: '¿El banco trabaja dentro o fuera de la empresa?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-07',
    enunciado: '¿Qué información proporciona la contabilidad a los dueños de una empresa?',
    opciones: [
      'Solo el dinero que tienen en el banco',
      'La situación económica y financiera del negocio',
      'Los nombres de los clientes',
      'Los sueldos de los empleados',
    ],
    respuestaCorrecta: 'La situación económica y financiera del negocio',
    explicacion: 'Los dueños usan la contabilidad para saber si el negocio es rentable, cuánto deben y cuánto tienen.',
    pista: '¿Qué necesita saber un dueño para tomar decisiones?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-08',
    enunciado: 'La contabilidad puede clasificarse en:',
    opciones: [
      'Contabilidad financiera y contabilidad de gestión',
      'Contabilidad de ventas y contabilidad de compras',
      'Contabilidad de empleados y contabilidad de jefes',
      'Contabilidad de lunes y contabilidad de viernes',
    ],
    respuestaCorrecta: 'Contabilidad financiera y contabilidad de gestión',
    explicacion: 'La contabilidad financiera se enfoca en información para usuarios externos; la de gestión, en información para uso interno.',
    pista: '¿A quién va dirigida cada tipo de información?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-09',
    enunciado: '¿Cuál es el principal requisito para que la información contable sea útil?',
    opciones: ['Que sea extensa', 'Que sea confiable y oportuna', 'Que sea compleja', 'Que sea secreta'],
    respuestaCorrecta: 'Que sea confiable y oportuna',
    explicacion: 'La información debe ser veraz (confiable) y estar disponible cuando se necesita (oportuna).',
    pista: '¿De qué sirve una información falsa o tardía?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u1-10',
    enunciado: 'Un contador registra una venta que no ocurrió para inflar las ganancias. ¿Qué principio está violando?',
    opciones: ['Prudencia', 'Ética y veracidad', 'Consistencia', 'Materialidad'],
    respuestaCorrecta: 'Ética y veracidad',
    explicacion: 'Registrar operaciones falsas viola la ética profesional y el principio de veracidad de la información.',
    pista: '¿Qué valor profesional se relaciona con decir la verdad?',
    tipo: 'multiple',
  },

  // ==========================================
  // UNIDAD 2: La Ecuación Contable (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-101-u2-01',
    enunciado: 'Si Activo = $10,000 y Pasivo = $3,000, ¿cuál es el Patrimonio?',
    opciones: ['$3,000', '$7,000', '$10,000', '$13,000'],
    respuestaCorrecta: '$7,000',
    explicacion: 'Patrimonio = Activo - Pasivo = $10,000 - $3,000 = $7,000',
    pista: 'Usa la fórmula: Patrimonio = Activo - Pasivo',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-02',
    enunciado: 'Si Activo = $50,000 y Patrimonio = $30,000, ¿cuál es el Pasivo?',
    opciones: ['$20,000', '$30,000', '$50,000', '$80,000'],
    respuestaCorrecta: '$20,000',
    explicacion: 'Pasivo = Activo - Patrimonio = $50,000 - $30,000 = $20,000',
    pista: 'Despeja la fórmula: Pasivo = Activo - Patrimonio',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-03',
    enunciado: 'Una empresa tiene Activo = $100,000 y Pasivo = $40,000. ¿Cuál es su Patrimonio?',
    opciones: ['$40,000', '$60,000', '$100,000', '$140,000'],
    respuestaCorrecta: '$60,000',
    explicacion: 'Patrimonio = Activo - Pasivo = $100,000 - $40,000 = $60,000',
    pista: 'Aplica la fórmula básica de la ecuación contable.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-04',
    enunciado: 'Si el Patrimonio es $25,000 y el Pasivo es $15,000, ¿cuál es el Activo?',
    opciones: ['$10,000', '$25,000', '$40,000', '$50,000'],
    respuestaCorrecta: '$40,000',
    explicacion: 'Activo = Pasivo + Patrimonio = $15,000 + $25,000 = $40,000',
    pista: 'Despeja la fórmula: Activo = Pasivo + Patrimonio',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-05',
    enunciado: 'Una empresa tiene Activo = $80,000. Si el Pasivo es el 25% del Activo, ¿cuál es el Patrimonio?',
    opciones: ['$20,000', '$40,000', '$60,000', '$80,000'],
    respuestaCorrecta: '$60,000',
    explicacion: 'Pasivo = 25% de $80,000 = $20,000. Patrimonio = $80,000 - $20,000 = $60,000',
    pista: 'Primero calcula el Pasivo, luego el Patrimonio.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-06',
    enunciado: 'Si Activo = $200,000 y Patrimonio = $120,000, ¿cuál es el Pasivo?',
    opciones: ['$80,000', '$120,000', '$200,000', '$320,000'],
    respuestaCorrecta: '$80,000',
    explicacion: 'Pasivo = Activo - Patrimonio = $200,000 - $120,000 = $80,000',
    pista: 'Pasivo = Activo - Patrimonio',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-07',
    enunciado: 'Una empresa tiene Pasivo = $30,000 y Patrimonio = $70,000. ¿Cuál es su Activo total?',
    opciones: ['$30,000', '$70,000', '$100,000', '$140,000'],
    respuestaCorrecta: '$100,000',
    explicacion: 'Activo = Pasivo + Patrimonio = $30,000 + $70,000 = $100,000',
    pista: 'Activo = Pasivo + Patrimonio',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-08',
    enunciado: 'Si el Activo aumenta en $5,000 y el Pasivo aumenta en $2,000, ¿qué pasa con el Patrimonio?',
    opciones: ['Aumenta en $3,000', 'Disminuye en $3,000', 'Aumenta en $7,000', 'No cambia'],
    respuestaCorrecta: 'Aumenta en $3,000',
    explicacion: 'Patrimonio = Activo - Pasivo. Si Activo sube $5,000 y Pasivo sube $2,000, el Patrimonio sube $3,000.',
    pista: 'Usa la variación: ΔPatrimonio = ΔActivo - ΔPasivo',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-09',
    enunciado: 'Una empresa tiene Activo = $150,000. Si el Pasivo es $50,000, ¿cuál es el porcentaje del Patrimonio sobre el Activo?',
    opciones: ['33%', '50%', '66.7%', '75%'],
    respuestaCorrecta: '66.7%',
    explicacion: 'Patrimonio = $150,000 - $50,000 = $100,000. Porcentaje = ($100,000 / $150,000) × 100 = 66.7%',
    pista: 'Primero calcula el Patrimonio, luego divídelo entre el Activo.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u2-10',
    enunciado: 'Si Activo = $500,000 y Pasivo = $200,000, ¿cuánto es el Capital de Trabajo si el Activo Corriente es $300,000 y el Pasivo Corriente es $150,000?',
    opciones: ['$50,000', '$150,000', '$300,000', '$500,000'],
    respuestaCorrecta: '$150,000',
    explicacion: 'Capital de Trabajo = Activo Corriente - Pasivo Corriente = $300,000 - $150,000 = $150,000',
    pista: 'Usa la fórmula: Capital de Trabajo = AC - PC',
    tipo: 'multiple',
  },

  // ==========================================
  // UNIDAD 3: La Cuenta y la Partida Doble (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-101-u3-01',
    enunciado: 'El dueño aporta $10,000 en efectivo. ¿Qué cuentas se afectan?',
    opciones: ['Caja (Debe) y Capital (Haber)', 'Caja (Haber) y Capital (Debe)', 'Solo Caja', 'Solo Capital'],
    respuestaCorrecta: 'Caja (Debe) y Capital (Haber)',
    explicacion: 'Caja aumenta (Activo → Debe) y Capital aumenta (Patrimonio → Haber). Se cumple la partida doble.',
    pista: 'Activo aumenta por el Debe; Patrimonio aumenta por el Haber.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-02',
    enunciado: 'Se compra mercancía por $2,000 a crédito. ¿Qué cuentas se afectan?',
    opciones: ['Mercancías (Debe) y Cuentas por Pagar (Haber)', 'Mercancías (Haber) y Cuentas por Pagar (Debe)', 'Solo Mercancías', 'Solo Cuentas por Pagar'],
    respuestaCorrecta: 'Mercancías (Debe) y Cuentas por Pagar (Haber)',
    explicacion: 'Mercancías aumenta (Activo → Debe) y Cuentas por Pagar aumenta (Pasivo → Haber).',
    pista: 'Activo aumenta por el Debe; Pasivo aumenta por el Haber.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-03',
    enunciado: 'Se paga una deuda de $500 en efectivo. ¿Qué cuentas se afectan?',
    opciones: ['Caja (Haber) y Cuentas por Pagar (Debe)', 'Caja (Debe) y Cuentas por Pagar (Haber)', 'Solo Caja', 'Solo Cuentas por Pagar'],
    respuestaCorrecta: 'Caja (Haber) y Cuentas por Pagar (Debe)',
    explicacion: 'Caja disminuye (Activo → Haber) y Cuentas por Pagar disminuye (Pasivo → Debe).',
    pista: 'Activo disminuye por el Haber; Pasivo disminuye por el Debe.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-04',
    enunciado: 'En una Cuenta T, la columna izquierda se llama:',
    opciones: ['Haber', 'Debe', 'Saldo', 'Crédito'],
    respuestaCorrecta: 'Debe',
    explicacion: 'La columna izquierda de la Cuenta T es el Debe (débito) y la derecha es el Haber (crédito).',
    pista: 'Recuerda: Debe = izquierda, Haber = derecha.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-05',
    enunciado: 'Se vende mercancía por $1,500 en efectivo. ¿Qué cuentas se afectan?',
    opciones: ['Caja (Debe) y Ventas (Haber)', 'Caja (Haber) y Ventas (Debe)', 'Solo Caja', 'Solo Ventas'],
    respuestaCorrecta: 'Caja (Debe) y Ventas (Haber)',
    explicacion: 'Caja aumenta (Activo → Debe) y Ventas aumenta (Ingreso → Haber).',
    pista: 'Activo aumenta por el Debe; Ingreso aumenta por el Haber.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-06',
    enunciado: 'Se compra un equipo por $5,000 pagando $2,000 en efectivo y el resto a crédito. ¿Qué cuentas se afectan?',
    opciones: [
      'Equipo (Debe $5,000), Caja (Haber $2,000), Cuentas por Pagar (Haber $3,000)',
      'Equipo (Haber $5,000), Caja (Debe $2,000)',
      'Solo Equipo',
      'Solo Caja',
    ],
    respuestaCorrecta: 'Equipo (Debe $5,000), Caja (Haber $2,000), Cuentas por Pagar (Haber $3,000)',
    explicacion: 'Equipo aumenta (Activo → Debe $5,000). Caja disminuye (Activo → Haber $2,000). Cuentas por Pagar aumenta (Pasivo → Haber $3,000).',
    pista: 'Registra el total del activo en el Debe y los pagos en el Haber.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-07',
    enunciado: 'El saldo de una cuenta de Activo es $3,000 en el Debe y $1,000 en el Haber. ¿Cuál es su saldo?',
    opciones: ['$1,000 deudor', '$2,000 deudor', '$3,000 acreedor', '$4,000 deudor'],
    respuestaCorrecta: '$2,000 deudor',
    explicacion: 'Saldo = Debe - Haber = $3,000 - $1,000 = $2,000 (saldo deudor).',
    pista: 'Saldo = Debe - Haber (si es positivo, es deudor).',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-08',
    enunciado: 'Se paga el alquiler del mes por $800. ¿Qué cuentas se afectan?',
    opciones: ['Alquiler (Debe) y Caja (Haber)', 'Alquiler (Haber) y Caja (Debe)', 'Solo Caja', 'Solo Alquiler'],
    respuestaCorrecta: 'Alquiler (Debe) y Caja (Haber)',
    explicacion: 'Gasto de Alquiler aumenta (Gasto → Debe) y Caja disminuye (Activo → Haber).',
    pista: 'Los gastos aumentan por el Debe; el Activo disminuye por el Haber.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-09',
    enunciado: 'La regla de la partida doble establece que:',
    opciones: [
      'Todo débito tiene un crédito',
      'Solo se registran las ventas',
      'El Activo siempre aumenta',
      'El Pasivo nunca cambia',
    ],
    respuestaCorrecta: 'Todo débito tiene un crédito',
    explicacion: 'La partida doble exige que la suma de débitos sea igual a la suma de créditos en cada operación.',
    pista: '¿Qué garantiza que la ecuación contable se mantenga?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u3-10',
    enunciado: 'Se recibe un préstamo bancario de $10,000 en efectivo. ¿Qué cuentas se afectan?',
    opciones: ['Caja (Debe) y Préstamo Bancario (Haber)', 'Caja (Haber) y Préstamo Bancario (Debe)', 'Solo Caja', 'Solo Préstamo'],
    respuestaCorrecta: 'Caja (Debe) y Préstamo Bancario (Haber)',
    explicacion: 'Caja aumenta (Activo → Debe) y Préstamo Bancario aumenta (Pasivo → Haber).',
    pista: 'Activo aumenta por el Debe; Pasivo aumenta por el Haber.',
    tipo: 'multiple',
  },

  // ==========================================
  // UNIDAD 4: Ciclo Contable y Balance de Comprobación (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-101-u4-01',
    enunciado: '¿Cuál es el primer paso del ciclo contable?',
    opciones: ['Elaborar estados financieros', 'Registrar en el Libro Diario', 'Identificar la operación en el comprobante', 'Hacer el Balance de Comprobación'],
    respuestaCorrecta: 'Identificar la operación en el comprobante',
    explicacion: 'Todo inicia con la operación y su comprobante (factura, recibo).',
    pista: '¿Qué documento respalda una operación?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-02',
    enunciado: '¿Dónde se registra una operación por primera vez?',
    opciones: ['Libro Mayor', 'Libro Diario', 'Balance General', 'Estado de Resultados'],
    respuestaCorrecta: 'Libro Diario',
    explicacion: 'El Libro Diario registra las operaciones cronológicamente por primera vez.',
    pista: 'Es el libro donde se anota el día a día.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-03',
    enunciado: '¿Qué documento agrupa los movimientos de cada cuenta?',
    opciones: ['Libro Diario', 'Libro Mayor', 'Comprobante', 'Factura'],
    respuestaCorrecta: 'Libro Mayor',
    explicacion: 'El Libro Mayor agrupa los movimientos por cada cuenta (Caja, Banco, etc.).',
    pista: 'Es donde se ven los saldos de cada cuenta.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-04',
    enunciado: 'El Balance de Comprobación sirve para:',
    opciones: ['Calcular impuestos', 'Verificar que Débitos = Créditos', 'Registrar ventas', 'Pagar deudas'],
    respuestaCorrecta: 'Verificar que Débitos = Créditos',
    explicacion: 'El Balance de Comprobación verifica que la suma de débitos sea igual a la suma de créditos.',
    pista: '¿Qué garantiza que los registros estén equilibrados?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-05',
    enunciado: 'Si la suma de débitos es $80,000 y la de créditos es $75,000, ¿qué significa?',
    opciones: ['Todo está correcto', 'Hay un error en los registros', 'Falta registrar una venta', 'El patrimonio es $5,000'],
    respuestaCorrecta: 'Hay un error en los registros',
    explicacion: 'En un Balance de Comprobación, Débitos debe ser igual a Créditos. Si no cuadra, hay un error.',
    pista: 'La partida doble exige equilibrio.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-06',
    enunciado: '¿Cuál es el orden correcto del ciclo contable?',
    opciones: [
      'Comprobante → Diario → Mayor → Balance de Comprobación',
      'Mayor → Diario → Comprobante → Balance',
      'Balance → Diario → Mayor → Comprobante',
      'Diario → Comprobante → Balance → Mayor',
    ],
    respuestaCorrecta: 'Comprobante → Diario → Mayor → Balance de Comprobación',
    explicacion: 'El ciclo sigue ese orden: se identifica la operación, se registra en el Diario, se pasa al Mayor y se hace el Balance.',
    pista: 'Sigue el flujo natural de la información.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-07',
    enunciado: 'Se compra mercancía por $2,000 a crédito. ¿Cómo se registra en el Diario?',
    opciones: [
      'Debe: Mercancías $2,000 / Haber: Cuentas por Pagar $2,000',
      'Debe: Cuentas por Pagar $2,000 / Haber: Mercancías $2,000',
      'Debe: Caja $2,000 / Haber: Mercancías $2,000',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe: Mercancías $2,000 / Haber: Cuentas por Pagar $2,000',
    explicacion: 'Mercancías (Activo) aumenta por el Debe; Cuentas por Pagar (Pasivo) aumenta por el Haber.',
    pista: 'Activo aumenta por el Debe; Pasivo aumenta por el Haber.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-08',
    enunciado: 'Si el Libro Mayor muestra Caja con $5,000 en el Debe y $2,000 en el Haber, ¿cuál es su saldo?',
    opciones: ['$2,000 deudor', '$3,000 deudor', '$5,000 acreedor', '$7,000 deudor'],
    respuestaCorrecta: '$3,000 deudor',
    explicacion: 'Saldo = Debe - Haber = $5,000 - $2,000 = $3,000 (deudor).',
    pista: 'Saldo = Debe - Haber.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-09',
    enunciado: 'Un Balance de Comprobación con saldos deudores = $50,000 y acreedores = $50,000 indica que:',
    opciones: ['Hay un error', 'Los registros están equilibrados', 'Falta dinero', 'El patrimonio es $50,000'],
    respuestaCorrecta: 'Los registros están equilibrados',
    explicacion: 'Si Débitos = Créditos, el Balance de Comprobación cuadra y los registros están equilibrados.',
    pista: 'La igualdad es señal de equilibrio.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u4-10',
    enunciado: '¿Cuál es el objetivo principal del Balance de Comprobación?',
    opciones: ['Mostrar las ganancias', 'Detectar errores en los registros', 'Calcular impuestos', 'Pagar deudas'],
    respuestaCorrecta: 'Detectar errores en los registros',
    explicacion: 'El Balance de Comprobación es una herramienta de control para detectar errores en los registros contables.',
    pista: '¿Para qué sirve verificar que Débitos = Créditos?',
    tipo: 'multiple',
  },

  // ==========================================
  // UNIDAD 5: Estados Financieros (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-101-u5-01',
    enunciado: '¿Qué muestra el Balance General?',
    opciones: ['Las ventas del mes', 'La situación financiera en un momento dado', 'Los gastos del año', 'Las deudas futuras'],
    respuestaCorrecta: 'La situación financiera en un momento dado',
    explicacion: 'El Balance General es una "foto" de la empresa en un momento específico (Activo, Pasivo y Patrimonio).',
    pista: 'Es como una fotografía de la empresa.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-02',
    enunciado: '¿Qué muestra el Estado de Resultados?',
    opciones: ['La situación financiera en un momento dado', 'Si la empresa ganó o perdió en un período', 'Las deudas a largo plazo', 'El capital social'],
    respuestaCorrecta: 'Si la empresa ganó o perdió en un período',
    explicacion: 'El Estado de Resultados muestra los ingresos, gastos y la utilidad o pérdida del período.',
    pista: 'Es como un video de lo que pasó en el período.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-03',
    enunciado: 'Si Ingresos = $30,000 y Gastos = $20,000, ¿cuál es la Utilidad?',
    opciones: ['$10,000', '$20,000', '$30,000', '$50,000'],
    respuestaCorrecta: '$10,000',
    explicacion: 'Utilidad = Ingresos - Gastos = $30,000 - $20,000 = $10,000',
    pista: 'Utilidad = Ingresos - Gastos',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-04',
    enunciado: 'Si Ingresos = $15,000 y Gastos = $18,000, ¿qué resultado tiene la empresa?',
    opciones: ['Utilidad de $3,000', 'Pérdida de $3,000', 'Utilidad de $33,000', 'No hay resultado'],
    respuestaCorrecta: 'Pérdida de $3,000',
    explicacion: 'Utilidad = $15,000 - $18,000 = -$3,000 (pérdida).',
    pista: 'Si los gastos superan los ingresos, hay pérdida.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-05',
    enunciado: 'El Balance General se compone de:',
    opciones: ['Ingresos y Gastos', 'Activo, Pasivo y Patrimonio', 'Solo Activo', 'Solo Patrimonio'],
    respuestaCorrecta: 'Activo, Pasivo y Patrimonio',
    explicacion: 'El Balance General muestra Activo, Pasivo y Patrimonio, cumpliendo la ecuación contable.',
    pista: 'Recuerda la ecuación contable.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-06',
    enunciado: 'El Estado de Resultados se compone de:',
    opciones: ['Activo y Pasivo', 'Ingresos, Gastos y Utilidad/Pérdida', 'Solo Patrimonio', 'Solo Caja'],
    respuestaCorrecta: 'Ingresos, Gastos y Utilidad/Pérdida',
    explicacion: 'El Estado de Resultados muestra los ingresos, los gastos y el resultado (utilidad o pérdida).',
    pista: '¿Qué elementos determinan si hay ganancia o pérdida?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-07',
    enunciado: 'Si una empresa tiene Utilidad de $10,000, ¿qué pasa con el Patrimonio en el Balance General?',
    opciones: ['Aumenta en $10,000', 'Disminuye en $10,000', 'No cambia', 'Se duplica'],
    respuestaCorrecta: 'Aumenta en $10,000',
    explicacion: 'La utilidad del ejercicio aumenta el Patrimonio en el Balance General.',
    pista: 'La utilidad se suma al capital.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-08',
    enunciado: 'Si el Pasivo es mayor que el Activo, la empresa está en:',
    opciones: ['Quiebra técnica', 'Buena situación', 'Crecimiento', 'Equilibrio'],
    respuestaCorrecta: 'Quiebra técnica',
    explicacion: 'Si el Pasivo supera al Activo, el Patrimonio es negativo y la empresa está en quiebra técnica.',
    pista: '¿Qué pasa si las deudas superan los bienes?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-09',
    enunciado: 'Una empresa tiene Activo = $80,000, Pasivo = $30,000 y Patrimonio = $50,000. ¿Qué estado financiero muestra esta información?',
    opciones: ['Estado de Resultados', 'Balance General', 'Estado de Flujo de Efectivo', 'Estado de Cambios en el Patrimonio'],
    respuestaCorrecta: 'Balance General',
    explicacion: 'El Balance General muestra Activo, Pasivo y Patrimonio en un momento dado.',
    pista: '¿Qué estado muestra la ecuación contable?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-101-u5-10',
    enunciado: 'Si una empresa tiene Ingresos = $50,000, Gastos = $35,000 y Patrimonio inicial = $20,000, ¿cuál es el Patrimonio final?',
    opciones: ['$20,000', '$35,000', '$50,000', '$85,000'],
    respuestaCorrecta: '$35,000',
    explicacion: 'Utilidad = $50,000 - $35,000 = $15,000. Patrimonio final = $20,000 + $15,000 = $35,000.',
    pista: 'Primero calcula la utilidad, luego súmala al patrimonio inicial.',
    tipo: 'multiple',
  },
],
examenes: [
  {
    id: 'exam-con-101-01',
    titulo: 'Examen Parcial - Contabilidad General I',
    descripcion: 'Evaluación de los temas 1 al 3: conceptos básicos, ecuación contable y cuentas T.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-con-101-01-p1',
        enunciado: 'Defina qué es la Contabilidad y explique su importancia para la toma de decisiones en una empresa.',
        tipo: 'teorica',
        puntaje: 10,
        respuestaModelo: 'La contabilidad es la ciencia que registra, clasifica y resume las operaciones de una empresa para提供 información útil para la toma de decisiones. Es importante porque permite a los dueños saber si el negocio es rentable, a los bancos evaluar riesgos y al Estado calcular impuestos.',
      },
      {
        id: 'ex-con-101-01-p2',
        enunciado: 'Dada la siguiente información: Activo = $80,000; Pasivo = $30,000. Calcule el Patrimonio y explique el resultado.',
        tipo: 'practica',
        puntaje: 10,
        operaciones: ['Activo = $80,000', 'Pasivo = $30,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Patrimonio = Activo - Pasivo' },
          { titulo: 'Paso 2: Sustituir valores', contenido: 'Patrimonio = $80,000 - $30,000 = $50,000' },
          { titulo: 'Paso 3: Interpretar', contenido: 'El patrimonio de la empresa es $50,000, lo que representa el valor real de los dueños después de pagar las deudas.' },
        ],
        respuestaModelo: 'El patrimonio es $50,000.',
      },
      {
        id: 'ex-con-101-01-p3',
        enunciado: 'Registre en cuentas T las siguientes operaciones de la empresa "El Progreso": 1) El dueño aporta $20,000 en efectivo. 2) Se compra mercancía a crédito por $5,000.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: [
          '1) Aporte de capital: $20,000 en efectivo',
          '2) Compra de mercancía a crédito: $5,000',
        ],
        solucionPasos: [
          {
            titulo: 'Paso 1: Analizar la operación 1',
            contenido: 'Caja (Activo) aumenta → Debe $20,000. Capital (Patrimonio) aumenta → Haber $20,000.',
          },
          {
            titulo: 'Paso 2: Analizar la operación 2',
            contenido: 'Mercancías (Activo) aumenta → Debe $5,000. Cuentas por Pagar (Pasivo) aumenta → Haber $5,000.',
          },
          {
            titulo: 'Paso 3: Cuentas T resultantes',
            contenido: `Caja: Debe $20,000 | Haber $0 → Saldo $20,000 (Deudor)
Mercancías: Debe $5,000 | Haber $0 → Saldo $5,000 (Deudor)
Capital: Debe $0 | Haber $20,000 → Saldo $20,000 (Acreedor)
Cuentas por Pagar: Debe $0 | Haber $5,000 → Saldo $5,000 (Acreedor)`,
          },
        ],
      },
    ],
  },
  {
    id: 'exam-con-101-02',
    titulo: 'Examen Final - Contabilidad General I',
    descripcion: 'Evaluación de los temas 4 y 5: ciclo contable, balance de comprobación y estados financieros.',
    duracionMinutos: 90,
    preguntas: [
      {
        id: 'ex-con-101-02-p1',
        enunciado: 'Explique el ciclo contable y mencione los pasos que lo componen.',
        tipo: 'teorica',
        puntaje: 10,
        respuestaModelo: 'El ciclo contable es el proceso que sigue una operación desde que ocurre hasta que se refleja en los estados financieros. Pasos: 1) Identificar la operación y obtener el comprobante. 2) Registrar en el Libro Diario. 3) Pasar al Libro Mayor. 4) Elaborar el Balance de Comprobación. 5) Ajustar cuentas. 6) Preparar los Estados Financieros.',
      },
      {
        id: 'ex-con-101-02-p2',
        enunciado: 'Con las siguientes operaciones de la empresa "Comercial Baracoa", elabore el Balance de Comprobación de Saldos: 1) Capital $30,000 (Caja $20,000 + Mercancías $10,000). 2) Compra de mercancía a crédito $5,000. 3) Venta al contado $8,000 (costo $5,000). 4) Pago de alquiler $1,000.',
        tipo: 'practica',
        puntaje: 30,
        operaciones: [
          'Capital: $30,000 (Caja $20,000 + Mercancías $10,000)',
          'Compra de mercancía a crédito: $5,000',
          'Venta al contado: $8,000 (costo $5,000)',
          'Pago de alquiler: $1,000',
        ],
        solucionPasos: [
          {
            titulo: 'Paso 1: Libro Diario',
            contenido: `1) Debe: Caja $20,000 / Haber: Capital $20,000
2) Debe: Mercancías $10,000 / Haber: Capital $10,000
3) Debe: Mercancías $5,000 / Haber: Cuentas por Pagar $5,000
4) Debe: Caja $8,000 / Haber: Ventas $8,000
5) Debe: Costo de Ventas $5,000 / Haber: Mercancías $5,000
6) Debe: Alquiler $1,000 / Haber: Caja $1,000`,
          },
          {
            titulo: 'Paso 2: Saldos del Mayor',
            contenido: `Caja: $28,000 - $1,000 = $27,000 (Deudor)
Mercancías: $15,000 - $5,000 = $10,000 (Deudor)
Costo de Ventas: $5,000 (Deudor)
Alquiler: $1,000 (Deudor)
Cuentas por Pagar: $5,000 (Acreedor)
Capital: $30,000 (Acreedor)
Ventas: $8,000 (Acreedor)`,
          },
          {
            titulo: 'Paso 3: Balance de Comprobación',
            contenido: `| Cuenta           | Débitos  | Créditos |
|------------------|----------|----------|
| Caja             | $27,000  |          |
| Mercancías       | $10,000  |          |
| Costo de Ventas  | $5,000   |          |
| Alquiler         | $1,000   |          |
| Cuentas por Pagar|          | $5,000   |
| Capital          |          | $30,000  |
| Ventas           |          | $8,000   |
| TOTAL            | $43,000  | $43,000  |`,
          },
          {
            titulo: 'Paso 4: Verificación',
            contenido: 'Débitos = Créditos = $43,000. ✅ Balance cuadrado.',
          },
        ],
      },
      {
        id: 'ex-con-101-02-p3',
        enunciado: 'A partir de los datos del ejercicio anterior, elabore el Estado de Resultados y el Balance General de "Comercial Baracoa".',
        tipo: 'practica',
        puntaje: 30,
        operaciones: [
          'Utilidad Bruta = Ventas - Costo de Ventas',
          'Utilidad Neta = Utilidad Bruta - Gastos',
        ],
        solucionPasos: [
          {
            titulo: 'Paso 1: Estado de Resultados',
            contenido: `| Concepto         | Monto    |
|------------------|----------|
| Ingresos (Ventas)| $8,000   |
| (-) Costo de Ventas | $5,000 |
| (=) Utilidad Bruta | $3,000  |
| (-) Alquiler     | $1,000   |
| (=) Utilidad Neta | $2,000  |`,
          },
          {
            titulo: 'Paso 2: Calcular Patrimonio final',
            contenido: 'Patrimonio final = Capital inicial + Utilidad Neta = $30,000 + $2,000 = $32,000.',
          },
          {
            titulo: 'Paso 3: Balance General',
            contenido: `| ACTIVO           | Monto    | PASIVO + PATRIMONIO | Monto |
|------------------|----------|---------------------|-------|
| Caja             | $27,000  | Cuentas por Pagar   | $5,000|
| Mercancías       | $10,000  | Capital             | $30,000|
|                  |          | Utilidad del Ejercicio | $2,000|
| TOTAL ACTIVO     | $37,000  | TOTAL PASIVO + PATRIMONIO | $37,000|`,
          },
          {
            titulo: 'Paso 4: Verificación',
            contenido: 'Activo ($37,000) = Pasivo + Patrimonio ($5,000 + $32,000 = $37,000). ✅',
          },
          
        ],
      },
      // ==========================================
// PREGUNTAS DE EXAMEN ADICIONALES (formato PreguntaExamen)
// ==========================================

{
  id: 'ex-con-101-03-p1',
  enunciado: 'Elabora el Balance de Comprobación de Saldos de la empresa "Ferretería El Clavo" al 31 de enero de 2026, con las siguientes operaciones: 1) Capital inicial: $40,000 (Caja $25,000 + Mercancías $15,000). 2) Compra de mercancía a crédito: $8,000. 3) Venta de mercancía al contado: $12,000 (costo $7,000). 4) Pago de servicios públicos: $600. 5) Compra de estantes: $2,500 a crédito. 6) Pago parcial a proveedores: $3,000.',
  tipo: 'practica',
  puntaje: 30,
  operaciones: [
    'Capital inicial: $40,000 (Caja $25,000 + Mercancías $15,000)',
    'Compra de mercancía a crédito: $8,000',
    'Venta de mercancía al contado: $12,000 (costo $7,000)',
    'Pago de servicios públicos: $600',
    'Compra de estantes: $2,500 a crédito',
    'Pago parcial a proveedores: $3,000',
  ],
  solucionPasos: [
    {
      titulo: 'Paso 1: Identificar las cuentas afectadas',
      contenido: 'Caja, Mercancías, Estantes, Cuentas por Pagar, Capital, Ventas, Costo de Ventas, Servicios Públicos.',
    },
    {
      titulo: 'Paso 2: Registrar en el Libro Diario',
      contenido: `1) Debe: Caja $25,000 / Haber: Capital $25,000
2) Debe: Mercancías $15,000 / Haber: Capital $15,000
3) Debe: Mercancías $8,000 / Haber: Cuentas por Pagar $8,000
4) Debe: Caja $12,000 / Haber: Ventas $12,000
5) Debe: Costo de Ventas $7,000 / Haber: Mercancías $7,000
6) Debe: Servicios Públicos $600 / Haber: Caja $600
7) Debe: Estantes $2,500 / Haber: Cuentas por Pagar $2,500
8) Debe: Cuentas por Pagar $3,000 / Haber: Caja $3,000`,
    },
    {
      titulo: 'Paso 3: Saldos del Mayor',
      contenido: `Caja: $25,000 + $12,000 - $600 - $3,000 = $33,400 (Deudor)
Mercancías: $15,000 + $8,000 - $7,000 = $16,000 (Deudor)
Estantes: $2,500 (Deudor)
Costo de Ventas: $7,000 (Deudor)
Servicios Públicos: $600 (Deudor)
Cuentas por Pagar: $8,000 + $2,500 - $3,000 = $7,500 (Acreedor)
Capital: $40,000 (Acreedor)
Ventas: $12,000 (Acreedor)`,
    },
    {
      titulo: 'Paso 4: Balance de Comprobación',
      contenido: `| Cuenta             | Débitos  | Créditos |
|--------------------|----------|----------|
| Caja               | $33,400  |          |
| Mercancías         | $16,000  |          |
| Estantes           | $2,500   |          |
| Costo de Ventas    | $7,000   |          |
| Servicios Públicos | $600     |          |
| Cuentas por Pagar  |          | $7,500   |
| Capital            |          | $40,000  |
| Ventas             |          | $12,000  |
| TOTAL              | $59,500  | $59,500  |`,
    },
    {
      titulo: 'Paso 5: Verificación',
      contenido: 'Débitos = Créditos = $59,500. ✅ Balance cuadrado.',
    },
  ],
},

{
  id: 'ex-con-101-03-p2',
  enunciado: 'Elabora el Balance de Comprobación de "Panadería La Espiga" al 28 de febrero de 2026, con las siguientes operaciones: 1) Capital inicial: $20,000 en efectivo. 2) Compra de harina y materia prima: $6,000 al contado. 3) Venta de pan y pasteles: $10,000 (cobrado $7,000 en efectivo, $3,000 a crédito; costo $5,500). 4) Pago de alquiler del local: $1,200. 5) Compra de un horno industrial: $4,000 a crédito. 6) Cobro de una cuenta pendiente: $1,500.',
  tipo: 'practica',
  puntaje: 30,
  operaciones: [
    'Capital inicial: $20,000 en efectivo',
    'Compra de harina y materia prima: $6,000 al contado',
    'Venta de pan y pasteles: $10,000 ($7,000 efectivo, $3,000 crédito; costo $5,500)',
    'Pago de alquiler del local: $1,200',
    'Compra de un horno industrial: $4,000 a crédito',
    'Cobro de una cuenta pendiente: $1,500',
  ],
  solucionPasos: [
    {
      titulo: 'Paso 1: Identificar las cuentas afectadas',
      contenido: 'Caja, Mercancías (Materia Prima), Horno, Cuentas por Cobrar, Cuentas por Pagar, Capital, Ventas, Costo de Ventas, Alquiler.',
    },
    {
      titulo: 'Paso 2: Registrar en el Libro Diario',
      contenido: `1) Debe: Caja $20,000 / Haber: Capital $20,000
2) Debe: Mercancías $6,000 / Haber: Caja $6,000
3) Debe: Caja $7,000 / Debe: Cuentas por Cobrar $3,000 / Haber: Ventas $10,000
4) Debe: Costo de Ventas $5,500 / Haber: Mercancías $5,500
5) Debe: Alquiler $1,200 / Haber: Caja $1,200
6) Debe: Horno $4,000 / Haber: Cuentas por Pagar $4,000
7) Debe: Caja $1,500 / Haber: Cuentas por Cobrar $1,500`,
    },
    {
      titulo: 'Paso 3: Saldos del Mayor',
      contenido: `Caja: $20,000 + $7,000 + $1,500 - $6,000 - $1,200 = $21,300 (Deudor)
Mercancías: $6,000 - $5,500 = $500 (Deudor)
Horno: $4,000 (Deudor)
Cuentas por Cobrar: $3,000 - $1,500 = $1,500 (Deudor)
Costo de Ventas: $5,500 (Deudor)
Alquiler: $1,200 (Deudor)
Cuentas por Pagar: $4,000 (Acreedor)
Capital: $20,000 (Acreedor)
Ventas: $10,000 (Acreedor)`,
    },
    {
      titulo: 'Paso 4: Balance de Comprobación',
      contenido: `| Cuenta             | Débitos  | Créditos |
|--------------------|----------|----------|
| Caja               | $21,300  |          |
| Mercancías         | $500     |          |
| Horno              | $4,000   |          |
| Cuentas por Cobrar | $1,500   |          |
| Costo de Ventas    | $5,500   |          |
| Alquiler           | $1,200   |          |
| Cuentas por Pagar  |          | $4,000   |
| Capital            |          | $20,000  |
| Ventas             |          | $10,000  |
| TOTAL              | $34,000  | $34,000  |`,
    },
    {
      titulo: 'Paso 5: Verificación',
      contenido: 'Débitos = Créditos = $34,000. ✅ Balance cuadrado.',
    },
  ],
},

{
  id: 'ex-con-101-03-p3',
  enunciado: 'Elabora el Balance de Comprobación de "Transporte Rápido Baracoa" al 31 de marzo de 2026, con las siguientes operaciones: 1) Capital inicial: $50,000 (Caja $30,000 + Vehículos $20,000). 2) Ingresos por servicios: $15,000 (cobrado $10,000 efectivo, $5,000 crédito). 3) Pago de combustible y mantenimiento: $3,000. 4) Compra de un vehículo adicional: $12,000 (pagado $5,000 efectivo, resto a crédito). 5) Pago de salarios a choferes: $4,000. 6) Cobro parcial de una cuenta pendiente: $2,000.',
  tipo: 'practica',
  puntaje: 30,
  operaciones: [
    'Capital inicial: $50,000 (Caja $30,000 + Vehículos $20,000)',
    'Ingresos por servicios: $15,000 ($10,000 efectivo, $5,000 crédito)',
    'Pago de combustible y mantenimiento: $3,000',
    'Compra de un vehículo adicional: $12,000 ($5,000 efectivo, $7,000 crédito)',
    'Pago de salarios a choferes: $4,000',
    'Cobro parcial de una cuenta pendiente: $2,000',
  ],
  solucionPasos: [
    {
      titulo: 'Paso 1: Identificar las cuentas afectadas',
      contenido: 'Caja, Vehículos, Cuentas por Cobrar, Cuentas por Pagar, Capital, Ingresos por Servicios, Combustible, Salarios.',
    },
    {
      titulo: 'Paso 2: Registrar en el Libro Diario',
      contenido: `1) Debe: Caja $30,000 / Haber: Capital $30,000
2) Debe: Vehículos $20,000 / Haber: Capital $20,000
3) Debe: Caja $10,000 / Debe: Cuentas por Cobrar $5,000 / Haber: Ingresos por Servicios $15,000
4) Debe: Combustible $3,000 / Haber: Caja $3,000
5) Debe: Vehículos $12,000 / Haber: Caja $5,000 / Haber: Cuentas por Pagar $7,000
6) Debe: Salarios $4,000 / Haber: Caja $4,000
7) Debe: Caja $2,000 / Haber: Cuentas por Cobrar $2,000`,
    },
    {
      titulo: 'Paso 3: Saldos del Mayor',
      contenido: `Caja: $30,000 + $10,000 + $2,000 - $3,000 - $5,000 - $4,000 = $30,000 (Deudor)
Vehículos: $20,000 + $12,000 = $32,000 (Deudor)
Cuentas por Cobrar: $5,000 - $2,000 = $3,000 (Deudor)
Combustible: $3,000 (Deudor)
Salarios: $4,000 (Deudor)
Cuentas por Pagar: $7,000 (Acreedor)
Capital: $50,000 (Acreedor)
Ingresos por Servicios: $15,000 (Acreedor)`,
    },
    {
      titulo: 'Paso 4: Balance de Comprobación',
      contenido: `| Cuenta                | Débitos  | Créditos |
|-----------------------|----------|----------|
| Caja                  | $30,000  |          |
| Vehículos             | $32,000  |          |
| Cuentas por Cobrar    | $3,000   |          |
| Combustible           | $3,000   |          |
| Salarios              | $4,000   |          |
| Cuentas por Pagar     |          | $7,000   |
| Capital               |          | $50,000  |
| Ingresos por Servicios|          | $15,000  |
| TOTAL                 | $72,000  | $72,000  |`,
    },
    {
      titulo: 'Paso 5: Verificación',
      contenido: 'Débitos = Créditos = $72,000. ✅ Balance cuadrado.',
    },
  ],
},

{
  id: 'ex-con-101-03-p4',
  enunciado: 'A partir de las operaciones de "Ferretería El Clavo" (ejercicio anterior), elabora el Estado de Resultados y el Balance General al 31 de enero de 2026.',
  tipo: 'practica',
  puntaje: 30,
  operaciones: [
    'Utilidad Bruta = Ventas - Costo de Ventas',
    'Utilidad Neta = Utilidad Bruta - Gastos',
  ],
  solucionPasos: [
    {
      titulo: 'Paso 1: Saldos del Mayor',
      contenido: `Caja: $33,400 (Deudor)
Mercancías: $16,000 (Deudor)
Estantes: $2,500 (Deudor)
Costo de Ventas: $7,000 (Deudor)
Servicios Públicos: $600 (Deudor)
Cuentas por Pagar: $7,500 (Acreedor)
Capital: $40,000 (Acreedor)
Ventas: $12,000 (Acreedor)`,
    },
    {
      titulo: 'Paso 2: Estado de Resultados',
      contenido: `| Concepto            | Monto    |
|---------------------|----------|
| Ingresos (Ventas)   | $12,000  |
| (-) Costo de Ventas | $7,000   |
| (=) Utilidad Bruta  | $5,000   |
| (-) Servicios Públicos | $600 |
| (=) Utilidad Neta   | $4,400   |`,
    },
    {
      titulo: 'Paso 3: Calcular Patrimonio final',
      contenido: 'Patrimonio final = Capital inicial + Utilidad Neta = $40,000 + $4,400 = $44,400.',
    },
    {
      titulo: 'Paso 4: Balance General',
      contenido: `| ACTIVO           | Monto    | PASIVO + PATRIMONIO | Monto |
|------------------|----------|---------------------|-------|
| Caja             | $33,400  | Cuentas por Pagar   | $7,500|
| Mercancías       | $16,000  | Capital             | $40,000|
| Estantes         | $2,500   | Utilidad del Ejercicio | $4,400|
| TOTAL ACTIVO     | $51,900  | TOTAL PASIVO + PATRIMONIO | $51,900|`,
    },
    {
      titulo: 'Paso 5: Verificación',
      contenido: 'Activo ($51,900) = Pasivo + Patrimonio ($7,500 + $44,400 = $51,900). ✅ Balance cuadrado.',
    },
  ],
},

{
  id: 'ex-con-101-03-p5',
  enunciado: 'A partir de las operaciones de "Panadería La Espiga" (ejercicio anterior), elabora el Estado de Resultados y el Balance General al 28 de febrero de 2026.',
  tipo: 'practica',
  puntaje: 30,
  operaciones: [
    'Utilidad Bruta = Ventas - Costo de Ventas',
    'Utilidad Neta = Utilidad Bruta - Gastos',
  ],
  solucionPasos: [
    {
      titulo: 'Paso 1: Saldos del Mayor',
      contenido: `Caja: $21,300 (Deudor)
Mercancías: $500 (Deudor)
Horno: $4,000 (Deudor)
Cuentas por Cobrar: $1,500 (Deudor)
Costo de Ventas: $5,500 (Deudor)
Alquiler: $1,200 (Deudor)
Cuentas por Pagar: $4,000 (Acreedor)
Capital: $20,000 (Acreedor)
Ventas: $10,000 (Acreedor)`,
    },
    {
      titulo: 'Paso 2: Estado de Resultados',
      contenido: `| Concepto            | Monto    |
|---------------------|----------|
| Ingresos (Ventas)   | $10,000  |
| (-) Costo de Ventas | $5,500   |
| (=) Utilidad Bruta  | $4,500   |
| (-) Alquiler        | $1,200   |
| (=) Utilidad Neta   | $3,300   |`,
    },
    {
      titulo: 'Paso 3: Calcular Patrimonio final',
      contenido: 'Patrimonio final = Capital inicial + Utilidad Neta = $20,000 + $3,300 = $23,300.',
    },
    {
      titulo: 'Paso 4: Balance General',
      contenido: `| ACTIVO           | Monto    | PASIVO + PATRIMONIO | Monto |
|------------------|----------|---------------------|-------|
| Caja             | $21,300  | Cuentas por Pagar   | $4,000|
| Mercancías       | $500     | Capital             | $20,000|
| Horno            | $4,000   | Utilidad del Ejercicio | $3,300|
| Cuentas por Cobrar | $1,500 |                     |       |
| TOTAL ACTIVO     | $27,300  | TOTAL PASIVO + PATRIMONIO | $27,300|`,
    },
    {
      titulo: 'Paso 5: Verificación',
      contenido: 'Activo ($27,300) = Pasivo + Patrimonio ($4,000 + $23,300 = $27,300). ✅ Balance cuadrado.',
    },
  ],
},
      
    ],
  },
  
  
],
};