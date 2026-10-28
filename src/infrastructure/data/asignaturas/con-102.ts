// src/infrastructure/data/asignaturas/con-102.ts
import type { Asignatura } from '@/core/entities';

export const con102: Asignatura = {
  id: 'con-102',
  nombre: 'Contabilidad General II',
  descripcion:
    'Profundización en el registro de partidas específicas: Activo Circulante, Inventarios, Cuentas por Cobrar/Pagar, Comisiones y Activo Fijo.',
  contenidos: [
    // ==========================================
    // UNIDAD 1: El Activo Circulante (Efectivo y Equivalentes)
    // ==========================================
    {
      id: 'con-102-01',
      titulo: 'El Activo Circulante: Efectivo y Equivalentes',
      descripcion:
        'Aprende a controlar el efectivo en Caja y Banco, y los documentos mercantiles.',
      duracionEstimada: '20 min',
      nivel: 'basico',
      pasos: [
        {
          id: 1,
          descripcion: 'Identificar las cuentas de efectivo',
          ejemplo:
            'Caja (dinero en efectivo), Banco (dinero en cuenta corriente), Caja Chica (fondo para gastos menores).',
        },
        {
          id: 2,
          descripcion: 'Registrar entradas y salidas de efectivo',
          ejemplo:
            'Si entra dinero a Caja: Debe Caja / Haber Ventas (o Cuentas por Cobrar). Si sale dinero: Debe Gastos / Haber Caja.',
        },
        {
          id: 3,
          descripcion: 'Conocer los documentos mercantiles',
          ejemplo:
            'Cheque (orden de pago), Pagaré (promesa de pago), Letra de Cambio (orden de pago a plazo).',
        },
        {
          id: 4,
          descripcion: 'Realizar una conciliación bancaria básica',
          formula: 'Saldo según banco ± partidas pendientes = Saldo según libros',
          ejemplo:
            'Si el banco dice que tienes $10,000 pero en tus libros tienes $9,500, hay $500 en cheques pendientes de cobro.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-102-01',
          titulo: '¿Qué es el Activo Circulante?',
          contenido:
            'El Activo Circulante son los bienes y derechos que la empresa espera convertir en efectivo en un plazo menor a un año. Incluye: Efectivo (Caja y Banco), Cuentas por Cobrar, Inventarios y Gastos Pagados por Anticipado.',
          fuente: 'Norma Cubana de Contabilidad No. 1',
          conceptosClave: ['Activo Circulante', 'Efectivo', 'Liquidez'],
        },
        {
          id: 'doc-con-102-02',
          titulo: 'Caja vs. Banco: ¿cuál es la diferencia?',
          contenido:
            'Caja registra el dinero en efectivo que la empresa tiene físicamente (billetes, monedas). Banco registra el dinero depositado en una cuenta bancaria. Ambos son activos, pero el banco ofrece seguridad y trazabilidad.',
          fuente: 'Principios de Contabilidad Generalmente Aceptados (PCGA)',
          conceptosClave: ['Caja', 'Banco', 'Control interno'],
        },
        {
          id: 'doc-con-102-03',
          titulo: 'Documentos mercantiles',
          contenido:
            'Los documentos mercantiles son títulos que respaldan una operación comercial: Cheque (orden de pago a un banco), Pagaré (promesa de pago con fecha cierta), Letra de Cambio (orden de pago a plazo). Su correcto manejo es clave para el control financiero.',
          fuente: 'Código de Comercio',
          conceptosClave: ['Cheque', 'Pagaré', 'Letra de cambio'],
        },
      ],
    },

    // ==========================================
    // UNIDAD 2: Inventarios y Mercancías
    // ==========================================
    {
      id: 'con-102-02',
      titulo: 'Inventarios y Mercancías',
      descripcion:
        'Aprende los sistemas de registro de inventarios y el cálculo del costo de ventas.',
      duracionEstimada: '25 min',
      nivel: 'basico',
      pasos: [
        {
          id: 1,
          descripcion: 'Identificar los tipos de inventario',
          ejemplo:
            'Inventario Inicial (al inicio del período), Inventario Final (al cierre), Inventario Físico (conteo real).',
        },
        {
          id: 2,
          descripcion: 'Conocer los sistemas de registro',
          ejemplo:
            'Sistema Analítico (se registra cada compra y venta en la cuenta Mercancías). Sistema Permanente (se usa una cuenta de Inventario y otra de Costo de Ventas).',
        },
        {
          id: 3,
          descripcion: 'Registrar compras y ventas de mercancías',
          ejemplo:
            'Compra: Debe Mercancías / Haber Caja o Cuentas por Pagar. Venta: Debe Caja o Cuentas por Cobrar / Haber Ventas.',
        },
        {
          id: 4,
          descripcion: 'Calcular el costo de ventas',
          formula: 'Costo de Ventas = Inventario Inicial + Compras - Inventario Final',
          ejemplo:
            'Si Inventario Inicial = $5,000, Compras = $10,000 e Inventario Final = $4,000 → Costo de Ventas = $11,000.',
          nota: '💡 El costo de ventas es clave para calcular la utilidad bruta.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-102-04',
          titulo: '¿Qué son los inventarios?',
          contenido:
            'Los inventarios son los bienes que la empresa tiene para la venta o para producir otros bienes. Incluyen: materias primas, productos en proceso y productos terminados.',
          fuente: 'Norma Cubana de Contabilidad No. 1',
          conceptosClave: ['Inventario', 'Materia prima', 'Producto terminado'],
        },
        {
          id: 'doc-con-102-05',
          titulo: 'Sistemas de registro de inventarios',
          contenido:
            'El Sistema Analítico o de Cuenta Única usa una sola cuenta "Mercancías" para todas las compras y ventas. El Sistema Permanente o de Inventario Perpetuo usa cuentas separadas (Inventario y Costo de Ventas) y actualiza el saldo en tiempo real.',
          fuente: 'Principios de Contabilidad Generalmente Aceptados (PCGA)',
          conceptosClave: ['Sistema Analítico', 'Sistema Permanente', 'Control de inventarios'],
        },
      ],
    },

    // ==========================================
    // UNIDAD 3: Cuentas por Cobrar y por Pagar
    // ==========================================
    {
      id: 'con-102-03',
      titulo: 'Cuentas por Cobrar y por Pagar',
      descripcion:
        'Aprende a registrar las deudas de clientes y con proveedores, y la provisión para cuentas incobrables.',
      duracionEstimada: '25 min',
      nivel: 'intermedio',
      pasos: [
        {
          id: 1,
          descripcion: 'Entender las Cuentas por Cobrar',
          ejemplo:
            'Si vendes mercancía a crédito por $5,000: Debe Cuentas por Cobrar / Haber Ventas.',
        },
        {
          id: 2,
          descripcion: 'Entender las Cuentas por Pagar',
          ejemplo:
            'Si compras mercancía a crédito por $3,000: Debe Mercancías / Haber Cuentas por Pagar.',
        },
        {
          id: 3,
          descripcion: 'Registrar cobros y pagos',
          ejemplo:
            'Cobro: Debe Caja / Haber Cuentas por Cobrar. Pago: Debe Cuentas por Pagar / Haber Caja.',
        },
        {
          id: 4,
          descripcion: 'Calcular la provisión para cuentas incobrables',
          formula: 'Provisión = Saldo de Cuentas por Cobrar × % de incobrabilidad',
          ejemplo:
            'Si Cuentas por Cobrar = $10,000 y se estima un 5% de incobrables → Provisión = $500.',
          nota: '⚠️ La provisión es un gasto que se reconoce por posibles pérdidas futuras.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-102-06',
          titulo: '¿Qué son las Cuentas por Cobrar?',
          contenido:
            'Las Cuentas por Cobrar son derechos que la empresa tiene sobre terceros (clientes) por ventas a crédito. Son un activo porque representan dinero que se espera cobrar.',
          fuente: 'Norma Cubana de Contabilidad No. 1',
          conceptosClave: ['Cuentas por Cobrar', 'Clientes', 'Crédito'],
        },
        {
          id: 'doc-con-102-07',
          titulo: '¿Qué son las Cuentas por Pagar?',
          contenido:
            'Las Cuentas por Pagar son obligaciones que la empresa tiene con terceros (proveedores) por compras a crédito. Son un pasivo porque representan dinero que se debe pagar.',
          fuente: 'Norma Cubana de Contabilidad No. 1',
          conceptosClave: ['Cuentas por Pagar', 'Proveedores', 'Obligaciones'],
        },
        {
          id: 'doc-con-102-08',
          titulo: 'Provisión para cuentas incobrables',
          contenido:
            'Es una estimación de las cuentas por cobrar que probablemente no se cobrarán. Se registra como un gasto y reduce el valor neto de las cuentas por cobrar. Es un principio de prudencia contable.',
          fuente: 'Norma Cubana de Contabilidad No. 2',
          conceptosClave: ['Incobrables', 'Prudencia', 'Gasto'],
        },
      ],
    },

    // ==========================================
    // UNIDAD 4: Comisiones y Consignaciones
    // ==========================================
    {
      id: 'con-102-04',
      titulo: 'Comisiones y Consignaciones',
      descripcion:
        'Aprende el tratamiento contable de mercancías entregadas en consignación.',
      duracionEstimada: '20 min',
      nivel: 'intermedio',
      pasos: [
        {
          id: 1,
          descripcion: 'Entender la consignación',
          ejemplo:
            'La empresa A entrega mercancía a la empresa B para que la venda. A no ha vendido aún; solo entregó en consignación.',
        },
        {
          id: 2,
          descripcion: 'Registrar la entrega en consignación',
          ejemplo:
            'Debe Mercancías en Consignación / Haber Mercancías (se mueve el inventario, no se reconoce venta).',
        },
        {
          id: 3,
          descripcion: 'Registrar la venta y la comisión',
          ejemplo:
            'Si B vende la mercancía por $5,000 y cobra una comisión del 10% ($500): A registra Debe Caja $4,500 y Debe Comisión $500 / Haber Ventas $5,000.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-102-09',
          titulo: '¿Qué es una consignación?',
          contenido:
            'La consignación es un acuerdo por el cual una empresa (consignante) entrega mercancía a otra (consignatario) para que la venda. La mercancía sigue siendo propiedad del consignante hasta que se venda.',
          fuente: 'Código de Comercio',
          conceptosClave: ['Consignación', 'Consignante', 'Consignatario'],
        },
        {
          id: 'doc-con-102-10',
          titulo: 'Diferencia entre venta directa y consignación',
          contenido:
            'En la venta directa, la propiedad se transfiere inmediatamente y se reconoce el ingreso. En la consignación, la propiedad no se transfiere hasta que el consignatario vende la mercancía.',
          fuente: 'Principios de Contabilidad Generalmente Aceptados (PCGA)',
          conceptosClave: ['Venta directa', 'Consignación', 'Transferencia de propiedad'],
        },
      ],
    },

    // ==========================================
    // UNIDAD 5: El Activo Fijo (Propiedad, Planta y Equipo)
    // ==========================================
    {
      id: 'con-102-05',
      titulo: 'El Activo Fijo y la Depreciación',
      descripcion:
        'Aprende a registrar la adquisición, depreciación y venta de activos fijos.',
      duracionEstimada: '30 min',
      nivel: 'avanzado',
      pasos: [
        {
          id: 1,
          descripcion: 'Identificar el Activo Fijo',
          ejemplo:
            'Vehículos, maquinaria, edificios, equipos de computación. Son bienes que se usan en la operación y no se venden a corto plazo.',
        },
        {
          id: 2,
          descripcion: 'Registrar la compra de un activo fijo',
          ejemplo:
            'Se compra un vehículo por $20,000 al contado: Debe Vehículos / Haber Caja.',
        },
        {
          id: 3,
          descripcion: 'Calcular la depreciación (método de línea recta)',
          formula: 'Depreciación Anual = (Costo - Valor Residual) / Vida Útil',
          ejemplo:
            'Vehículo: Costo $20,000, Valor Residual $2,000, Vida Útil 5 años → Depreciación = ($20,000 - $2,000) / 5 = $3,600/año.',
        },
        {
          id: 4,
          descripcion: 'Registrar la depreciación y la venta del activo',
          ejemplo:
            'Depreciación: Debe Gasto por Depreciación / Haber Depreciación Acumulada. Venta: Debe Caja y Depreciación Acumulada / Haber Vehículos y Ganancia/Pérdida.',
          nota: '💡 La depreciación distribuye el costo del activo a lo largo de su vida útil.',
        },
      ],
      documentacion: [
        {
          id: 'doc-con-102-11',
          titulo: '¿Qué es el Activo Fijo?',
          contenido:
            'El Activo Fijo (Propiedad, Planta y Equipo) son los bienes tangibles que la empresa usa para producir o prestar servicios, y que espera utilizar por más de un año. No están destinados a la venta.',
          fuente: 'Norma Cubana de Contabilidad No. 1',
          conceptosClave: ['Activo Fijo', 'Propiedad, Planta y Equipo', 'Bienes tangibles'],
        },
        {
          id: 'doc-con-102-12',
          titulo: '¿Qué es la depreciación?',
          contenido:
            'La depreciación es la pérdida de valor de un activo fijo por su uso, desgaste u obsolescencia. No es un pago en efectivo, sino una distribución del costo a lo largo de la vida útil del activo.',
          fuente: 'Norma Cubana de Contabilidad No. 2',
          conceptosClave: ['Depreciación', 'Vida útil', 'Valor residual'],
        },
        {
          id: 'doc-con-102-13',
          titulo: 'Métodos de depreciación',
          contenido:
            'El método más usado es el de Línea Recta: (Costo - Valor Residual) / Vida Útil. Otros métodos son: Suma de Dígitos (acelerada) y Unidades Producidas (basada en el uso).',
          fuente: 'Principios de Contabilidad Generalmente Aceptados (PCGA)',
          conceptosClave: ['Línea recta', 'Suma de dígitos', 'Unidades producidas'],
        },
      ],
    },
  ],

  // ==========================================
  // FÓRMULAS (por ahora vacío, luego las añadimos)
  // ==========================================
  formulas: [
  {
    id: 'form-con-102-01',
    titulo: 'Saldo de Caja o Banco',
    descripcion: 'Determina el efectivo disponible en un momento dado',
    formula: 'Saldo = Entradas - Salidas',
    variables: [
      'Entradas: Dinero que ingresa a Caja o Banco',
      'Salidas: Dinero que egresa de Caja o Banco',
    ],
    ejemplo: 'Si ingresan $10,000 y egresan $7,000 → Saldo = $3,000',
    nota: '💡 Este saldo debe coincidir con el extracto bancario (conciliación).',
  },
  {
    id: 'form-con-102-02',
    titulo: 'Conciliación Bancaria Básica',
    descripcion: 'Verifica que el saldo del banco coincida con los libros',
    formula: 'Saldo según banco ± Partidas pendientes = Saldo según libros',
    variables: [
      'Saldo según banco: Lo que dice el extracto bancario',
      'Partidas pendientes: Cheques no cobrados, depósitos en tránsito',
      'Saldo según libros: Lo que tenemos registrado en Banco',
    ],
    ejemplo: 'Banco dice $10,000; cheques pendientes $500 → Saldo según libros = $9,500',
    nota: '⚠️ Si no coincide, hay un error o una partida pendiente.',
  },
  {
    id: 'form-con-102-03',
    titulo: 'Costo de Ventas',
    descripcion: 'Calcula el costo de la mercancía vendida en el período',
    formula: 'Costo de Ventas = Inventario Inicial + Compras - Inventario Final',
    variables: [
      'Inventario Inicial: Mercancía al inicio del período',
      'Compras: Mercancía adquirida durante el período',
      'Inventario Final: Mercancía al cierre del período',
    ],
    ejemplo: 'II = $5,000, Compras = $10,000, IF = $4,000 → Costo de Ventas = $11,000',
    nota: '💰 Es clave para calcular la Utilidad Bruta.',
  },
  {
    id: 'form-con-102-04',
    titulo: 'Utilidad Bruta',
    descripcion: 'Ganancia antes de gastos operativos',
    formula: 'Utilidad Bruta = Ventas Netas - Costo de Ventas',
    variables: [
      'Ventas Netas: Ventas totales menos devoluciones y descuentos',
      'Costo de Ventas: Costo de la mercancía vendida',
    ],
    ejemplo: 'Ventas = $20,000, Costo de Ventas = $11,000 → Utilidad Bruta = $9,000',
  },
  {
    id: 'form-con-102-05',
    titulo: 'Provisión para Cuentas Incobrables',
    descripcion: 'Estima las cuentas por cobrar que no se cobrarán',
    formula: 'Provisión = Saldo de Cuentas por Cobrar × % de Incobrabilidad',
    variables: [
      'Saldo de Cuentas por Cobrar: Total pendiente de cobro',
      '% de Incobrabilidad: Porcentaje estimado según experiencia',
    ],
    ejemplo: 'Cuentas por Cobrar = $10,000, % = 5% → Provisión = $500',
    nota: '⚠️ Se registra como gasto y reduce el valor neto de las cuentas por cobrar.',
  },
  {
    id: 'form-con-102-06',
    titulo: 'Depreciación (Método de Línea Recta)',
    descripcion: 'Distribuye el costo del activo fijo a lo largo de su vida útil',
    formula: 'Depreciación Anual = (Costo - Valor Residual) / Vida Útil',
    variables: [
      'Costo: Precio de adquisición del activo',
      'Valor Residual: Valor estimado al final de la vida útil',
      'Vida Útil: Años de uso esperado',
    ],
    ejemplo: 'Costo = $20,000, Residual = $2,000, Vida Útil = 5 años → Depreciación = $3,600/año',
    nota: '💡 La depreciación no es un pago en efectivo, es un gasto contable.',
  },
  {
    id: 'form-con-102-07',
    titulo: 'Ganancia o Pérdida en Venta de Activo Fijo',
    descripcion: 'Determina si se ganó o perdió al vender un activo',
    formula: 'Ganancia/Pérdida = Precio de Venta - Valor en Libros',
    variables: [
      'Precio de Venta: Lo que se recibe por el activo',
      'Valor en Libros: Costo - Depreciación Acumulada',
    ],
    ejemplo: 'Precio = $8,000, Valor en Libros = $6,000 → Ganancia = $2,000',
    nota: '⚠️ Si el precio es menor al valor en libros, hay pérdida.',
  },
  {
    id: 'form-con-102-08',
    titulo: 'Comisión por Consignación',
    descripcion: 'Calcula la comisión que cobra el consignatario',
    formula: 'Comisión = Precio de Venta × % de Comisión',
    variables: [
      'Precio de Venta: Valor de la mercancía vendida',
      '% de Comisión: Porcentaje acordado',
    ],
    ejemplo: 'Venta = $5,000, Comisión = 10% → Comisión = $500',
  },
],

  // ==========================================
  // EJERCICIOS (por ahora vacío, luego los añadimos)
  // ==========================================
  ejercicios: [
  // ==========================================
  // UNIDAD 1: Activo Circulante (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-102-u1-01',
    enunciado: '¿Qué es el Activo Circulante?',
    opciones: [
      'Bienes que se esperan convertir en efectivo en menos de un año',
      'Bienes que duran más de un año',
      'Solo el dinero en efectivo',
      'Las deudas de la empresa',
    ],
    respuestaCorrecta: 'Bienes que se esperan convertir en efectivo en menos de un año',
    explicacion: 'El Activo Circulante incluye efectivo, cuentas por cobrar e inventarios, que se convierten en efectivo a corto plazo.',
    pista: 'Piensa en la liquidez de los activos.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-02',
    enunciado: '¿Cuál es la diferencia entre Caja y Banco?',
    opciones: [
      'Caja es dinero físico; Banco es dinero depositado',
      'Caja es un pasivo; Banco es un activo',
      'No hay diferencia',
      'Caja es para pagar impuestos; Banco para pagar empleados',
    ],
    respuestaCorrecta: 'Caja es dinero físico; Banco es dinero depositado',
    explicacion: 'Caja registra el efectivo físico (billetes, monedas); Banco registra el dinero en cuentas bancarias.',
    pista: '¿Dónde está físicamente el dinero?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-03',
    enunciado: 'Si entran $5,000 a Caja y salen $3,000, ¿cuál es el saldo?',
    opciones: ['$2,000', '$3,000', '$5,000', '$8,000'],
    respuestaCorrecta: '$2,000',
    explicacion: 'Saldo = Entradas - Salidas = $5,000 - $3,000 = $2,000.',
    pista: 'Saldo = Entradas - Salidas.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-04',
    enunciado: '¿Cuál de estos es un documento mercantil?',
    opciones: ['Cheque', 'Factura de luz', 'Recibo de sueldo', 'Contrato de alquiler'],
    respuestaCorrecta: 'Cheque',
    explicacion: 'El cheque es un documento mercantil que ordena el pago de una cantidad a un banco.',
    pista: '¿Qué documento se usa para pagar desde una cuenta bancaria?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-05',
    enunciado: '¿Qué es un Pagaré?',
    opciones: [
      'Una promesa de pago con fecha cierta',
      'Una orden de pago a un banco',
      'Un recibo de compra',
      'Un contrato de trabajo',
    ],
    respuestaCorrecta: 'Una promesa de pago con fecha cierta',
    explicacion: 'El pagaré es un documento donde una persona se compromete a pagar una cantidad en una fecha determinada.',
    pista: '¿Qué documento implica una promesa de pago?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-06',
    enunciado: 'Si el banco dice que tienes $10,000 pero en tus libros tienes $9,500 por cheques pendientes, ¿qué representa esta diferencia?',
    opciones: [
      'Una conciliación bancaria',
      'Un error en los libros',
      'Un préstamo bancario',
      'Un pago pendiente',
    ],
    respuestaCorrecta: 'Una conciliación bancaria',
    explicacion: 'La conciliación bancaria explica las diferencias entre el saldo del banco y el de los libros (cheques pendientes, depósitos en tránsito).',
    pista: '¿Qué proceso ajusta las diferencias entre banco y libros?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-07',
    enunciado: '¿Qué cuenta se afecta cuando se deposita dinero en el banco?',
    opciones: [
      'Debe Banco / Haber Caja',
      'Debe Caja / Haber Banco',
      'Debe Ventas / Haber Banco',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Banco / Haber Caja',
    explicacion: 'Al depositar, el Banco aumenta (Debe) y la Caja disminuye (Haber).',
    pista: 'El banco recibe el dinero (aumenta), la caja lo entrega (disminuye).',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-08',
    enunciado: '¿Cuál de estos NO es un equivalente de efectivo?',
    opciones: ['Caja', 'Banco', 'Inversiones a corto plazo', 'Edificio'],
    respuestaCorrecta: 'Edificio',
    explicacion: 'El edificio es un Activo Fijo, no un equivalente de efectivo.',
    pista: '¿Qué activo no se convierte en efectivo a corto plazo?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-09',
    enunciado: 'Si se emite un cheque por $1,000, ¿qué cuentas se afectan?',
    opciones: [
      'Debe Gastos / Haber Banco',
      'Debe Banco / Haber Gastos',
      'Debe Caja / Haber Banco',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Gastos / Haber Banco',
    explicacion: 'Al pagar con cheque, el gasto aumenta (Debe) y el Banco disminuye (Haber).',
    pista: 'El banco entrega el dinero, el gasto se reconoce.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u1-10',
    enunciado: '¿Para qué sirve la conciliación bancaria?',
    opciones: [
      'Para verificar que el saldo del banco coincida con los libros',
      'Para calcular impuestos',
      'Para registrar ventas',
      'Para pagar deudas',
    ],
    respuestaCorrecta: 'Para verificar que el saldo del banco coincida con los libros',
    explicacion: 'La conciliación bancaria es un control que asegura que los registros contables coincidan con el extracto bancario.',
    pista: '¿Qué herramienta detecta diferencias entre banco y libros?',
    tipo: 'multiple',
  },

  // ==========================================
  // UNIDAD 2: Inventarios y Mercancías (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-102-u2-01',
    enunciado: '¿Qué es el inventario?',
    opciones: [
      'Bienes que la empresa tiene para la venta o producción',
      'El dinero en efectivo',
      'Las deudas de la empresa',
      'Los gastos del período',
    ],
    respuestaCorrecta: 'Bienes que la empresa tiene para la venta o producción',
    explicacion: 'El inventario incluye materias primas, productos en proceso y productos terminados.',
    pista: '¿Qué bienes tiene la empresa para vender?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-02',
    enunciado: 'Si Inventario Inicial = $5,000, Compras = $10,000 e Inventario Final = $4,000, ¿cuál es el Costo de Ventas?',
    opciones: ['$11,000', '$10,000', '$5,000', '$19,000'],
    respuestaCorrecta: '$11,000',
    explicacion: 'Costo de Ventas = II + Compras - IF = $5,000 + $10,000 - $4,000 = $11,000.',
    pista: 'Costo de Ventas = II + Compras - IF.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-03',
    enunciado: '¿Cuál es la diferencia entre el Sistema Analítico y el Permanente?',
    opciones: [
      'El Analítico usa una sola cuenta; el Permanente usa cuentas separadas',
      'El Analítico es para servicios; el Permanente para comercio',
      'No hay diferencia',
      'El Analítico es más moderno',
    ],
    respuestaCorrecta: 'El Analítico usa una sola cuenta; el Permanente usa cuentas separadas',
    explicacion: 'El Sistema Analítico usa una cuenta "Mercancías"; el Permanente usa "Inventario" y "Costo de Ventas".',
    pista: '¿Cuántas cuentas usa cada sistema?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-04',
    enunciado: 'Se compra mercancía por $3,000 al contado. ¿Qué cuentas se afectan?',
    opciones: [
      'Debe Mercancías / Haber Caja',
      'Debe Caja / Haber Mercancías',
      'Debe Ventas / Haber Caja',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Mercancías / Haber Caja',
    explicacion: 'Mercancías aumenta (Activo → Debe) y Caja disminuye (Activo → Haber).',
    pista: 'El activo mercancías aumenta, la caja disminuye.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-05',
    enunciado: 'Se vende mercancía por $5,000 al contado. ¿Qué cuentas se afectan?',
    opciones: [
      'Debe Caja / Haber Ventas',
      'Debe Ventas / Haber Caja',
      'Debe Mercancías / Haber Caja',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Caja / Haber Ventas',
    explicacion: 'Caja aumenta (Activo → Debe) y Ventas aumenta (Ingreso → Haber).',
    pista: 'El activo caja aumenta, el ingreso ventas aumenta.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-06',
    enunciado: '¿Qué es el Inventario Final?',
    opciones: [
      'La mercancía que queda al cierre del período',
      'La mercancía que se compra al inicio',
      'El total de ventas del período',
      'El costo de la mercancía vendida',
    ],
    respuestaCorrecta: 'La mercancía que queda al cierre del período',
    explicacion: 'El Inventario Final es la mercancía no vendida al final del período contable.',
    pista: '¿Qué queda al final del período?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-07',
    enunciado: 'Si el Costo de Ventas es $11,000 y las Ventas son $20,000, ¿cuál es la Utilidad Bruta?',
    opciones: ['$9,000', '$11,000', '$20,000', '$31,000'],
    respuestaCorrecta: '$9,000',
    explicacion: 'Utilidad Bruta = Ventas - Costo de Ventas = $20,000 - $11,000 = $9,000.',
    pista: 'Utilidad Bruta = Ventas - Costo de Ventas.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-08',
    enunciado: '¿Cuál de estos NO es un tipo de inventario?',
    opciones: ['Inventario Inicial', 'Inventario Final', 'Inventario Físico', 'Inventario de Pasivos'],
    respuestaCorrecta: 'Inventario de Pasivos',
    explicacion: 'Los inventarios son activos. "Inventario de Pasivos" no existe.',
    pista: '¿Los inventarios son activos o pasivos?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-09',
    enunciado: 'Se compra mercancía a crédito por $4,000. ¿Qué cuentas se afectan?',
    opciones: [
      'Debe Mercancías / Haber Cuentas por Pagar',
      'Debe Cuentas por Pagar / Haber Mercancías',
      'Debe Caja / Haber Mercancías',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Mercancías / Haber Cuentas por Pagar',
    explicacion: 'Mercancías aumenta (Activo → Debe) y Cuentas por Pagar aumenta (Pasivo → Haber).',
    pista: 'El activo aumenta, el pasivo aumenta.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u2-10',
    enunciado: '¿Para qué sirve el Sistema Permanente de inventarios?',
    opciones: [
      'Para conocer el saldo de inventario en tiempo real',
      'Para calcular impuestos',
      'Para registrar solo ventas',
      'Para pagar deudas',
    ],
    respuestaCorrecta: 'Para conocer el saldo de inventario en tiempo real',
    explicacion: 'El Sistema Permanente actualiza el inventario y el costo de ventas con cada operación.',
    pista: '¿Qué sistema mantiene el saldo actualizado?',
    tipo: 'multiple',
  },

  // ==========================================
  // UNIDAD 3: Cuentas por Cobrar y Pagar (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-102-u3-01',
    enunciado: '¿Qué son las Cuentas por Cobrar?',
    opciones: [
      'Derechos sobre clientes por ventas a crédito',
      'Deudas con proveedores',
      'El dinero en efectivo',
      'Los gastos del período',
    ],
    respuestaCorrecta: 'Derechos sobre clientes por ventas a crédito',
    explicacion: 'Las Cuentas por Cobrar son activos que representan dinero pendiente de cobro.',
    pista: '¿Qué representa dinero que nos deben?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-02',
    enunciado: '¿Qué son las Cuentas por Pagar?',
    opciones: [
      'Obligaciones con proveedores por compras a crédito',
      'Derechos sobre clientes',
      'El capital de la empresa',
      'Los ingresos del período',
    ],
    respuestaCorrecta: 'Obligaciones con proveedores por compras a crédito',
    explicacion: 'Las Cuentas por Pagar son pasivos que representan deudas pendientes de pago.',
    pista: '¿Qué representa dinero que debemos?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-03',
    enunciado: 'Se vende mercancía a crédito por $5,000. ¿Qué cuentas se afectan?',
    opciones: [
      'Debe Cuentas por Cobrar / Haber Ventas',
      'Debe Ventas / Haber Cuentas por Cobrar',
      'Debe Caja / Haber Ventas',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Cuentas por Cobrar / Haber Ventas',
    explicacion: 'Cuentas por Cobrar aumenta (Activo → Debe) y Ventas aumenta (Ingreso → Haber).',
    pista: 'El derecho a cobrar aumenta, el ingreso aumenta.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-04',
    enunciado: 'Se compra mercancía a crédito por $3,000. ¿Qué cuentas se afectan?',
    opciones: [
      'Debe Mercancías / Haber Cuentas por Pagar',
      'Debe Cuentas por Pagar / Haber Mercancías',
      'Debe Caja / Haber Mercancías',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Mercancías / Haber Cuentas por Pagar',
    explicacion: 'Mercancías aumenta (Activo → Debe) y Cuentas por Pagar aumenta (Pasivo → Haber).',
    pista: 'El activo aumenta, el pasivo aumenta.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-05',
    enunciado: 'Se cobra una cuenta pendiente de $2,000. ¿Qué cuentas se afectan?',
    opciones: [
      'Debe Caja / Haber Cuentas por Cobrar',
      'Debe Cuentas por Cobrar / Haber Caja',
      'Debe Ventas / Haber Caja',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Caja / Haber Cuentas por Cobrar',
    explicacion: 'Caja aumenta (Activo → Debe) y Cuentas por Cobrar disminuye (Activo → Haber).',
    pista: 'El activo caja aumenta, el derecho a cobrar disminuye.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-06',
    enunciado: '¿Qué es la provisión para cuentas incobrables?',
    opciones: [
      'Una estimación de cuentas que no se cobrarán',
      'Un préstamo bancario',
      'Un gasto pagado por anticipado',
      'Un ingreso diferido',
    ],
    respuestaCorrecta: 'Una estimación de cuentas que no se cobrarán',
    explicacion: 'La provisión reconoce el riesgo de no cobrar algunas cuentas por cobrar.',
    pista: '¿Qué se hace con las cuentas que probablemente no se cobren?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-07',
    enunciado: 'Si Cuentas por Cobrar = $10,000 y se estima un 5% de incobrables, ¿cuál es la provisión?',
    opciones: ['$500', '$1,000', '$5,000', '$10,000'],
    respuestaCorrecta: '$500',
    explicacion: 'Provisión = $10,000 × 5% = $500.',
    pista: 'Provisión = Cuentas por Cobrar × % Incobrabilidad.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-08',
    enunciado: 'Se paga una deuda de $1,000 a proveedores. ¿Qué cuentas se afectan?',
    opciones: [
      'Debe Cuentas por Pagar / Haber Caja',
      'Debe Caja / Haber Cuentas por Pagar',
      'Debe Ventas / Haber Caja',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Cuentas por Pagar / Haber Caja',
    explicacion: 'Cuentas por Pagar disminuye (Pasivo → Debe) y Caja disminuye (Activo → Haber).',
    pista: 'El pasivo disminuye, el activo caja disminuye.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-09',
    enunciado: '¿Cuál es el saldo normal de las Cuentas por Cobrar?',
    opciones: ['Deudor', 'Acreedor', 'Nulo', 'Indiferente'],
    respuestaCorrecta: 'Deudor',
    explicacion: 'Las Cuentas por Cobrar son un activo, por lo que su saldo normal es deudor.',
    pista: '¿Los activos tienen saldo deudor o acreedor?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u3-10',
    enunciado: '¿Cuál es el saldo normal de las Cuentas por Pagar?',
    opciones: ['Acreedor', 'Deudor', 'Nulo', 'Indiferente'],
    respuestaCorrecta: 'Acreedor',
    explicacion: 'Las Cuentas por Pagar son un pasivo, por lo que su saldo normal es acreedor.',
    pista: '¿Los pasivos tienen saldo deudor o acreedor?',
    tipo: 'multiple',
  },

  // ==========================================
  // UNIDAD 4: Comisiones y Consignaciones (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-102-u4-01',
    enunciado: '¿Qué es una consignación?',
    opciones: [
      'Un acuerdo para que otra empresa venda mercancía',
      'Una venta directa',
      'Un préstamo bancario',
      'Un gasto operativo',
    ],
    respuestaCorrecta: 'Un acuerdo para que otra empresa venda mercancía',
    explicacion: 'En la consignación, una empresa entrega mercancía a otra para que la venda, sin transferir la propiedad.',
    pista: '¿Qué acuerdo implica entregar mercancía sin venderla aún?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-02',
    enunciado: '¿Quién es el consignante?',
    opciones: [
      'El dueño de la mercancía',
      'El que recibe la mercancía',
      'El cliente final',
      'El banco',
    ],
    respuestaCorrecta: 'El dueño de la mercancía',
    explicacion: 'El consignante es el dueño de la mercancía que la entrega en consignación.',
    pista: '¿Quién entrega la mercancía?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-03',
    enunciado: '¿Quién es el consignatario?',
    opciones: [
      'El que recibe la mercancía para venderla',
      'El dueño de la mercancía',
      'El cliente final',
      'El banco',
    ],
    respuestaCorrecta: 'El que recibe la mercancía para venderla',
    explicacion: 'El consignatario recibe la mercancía y se encarga de venderla, cobrando una comisión.',
    pista: '¿Quién vende la mercancía?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-04',
    enunciado: 'Si se vende mercancía en consignación por $5,000 y la comisión es del 10%, ¿cuánto recibe el consignante?',
    opciones: ['$4,500', '$5,000', '$5,500', '$500'],
    respuestaCorrecta: '$4,500',
    explicacion: 'Comisión = $5,000 × 10% = $500. El consignante recibe $5,000 - $500 = $4,500.',
    pista: 'Resta la comisión al precio de venta.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-05',
    enunciado: '¿Cuándo se reconoce el ingreso en una consignación?',
    opciones: [
      'Cuando el consignatario vende la mercancía',
      'Cuando se entrega la mercancía',
      'Cuando se firma el contrato',
      'Cuando se cobra la comisión',
    ],
    respuestaCorrecta: 'Cuando el consignatario vende la mercancía',
    explicacion: 'El ingreso se reconoce cuando la mercancía se vende al cliente final, no cuando se entrega en consignación.',
    pista: '¿Cuándo se transfiere la propiedad al cliente final?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-06',
    enunciado: '¿Qué cuenta se usa para registrar la mercancía entregada en consignación?',
    opciones: [
      'Mercancías en Consignación',
      'Ventas',
      'Caja',
      'Cuentas por Pagar',
    ],
    respuestaCorrecta: 'Mercancías en Consignación',
    explicacion: 'Se usa una cuenta separada para controlar la mercancía que está en manos del consignatario.',
    pista: '¿Qué cuenta refleja que la mercancía no está en el almacén?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-07',
    enunciado: 'Si el consignatario vende por $8,000 y cobra 15% de comisión, ¿cuál es la comisión?',
    opciones: ['$1,200', '$800', '$1,500', '$2,000'],
    respuestaCorrecta: '$1,200',
    explicacion: 'Comisión = $8,000 × 15% = $1,200.',
    pista: 'Comisión = Precio de Venta × % Comisión.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-08',
    enunciado: '¿Cuál es la diferencia entre venta directa y consignación?',
    opciones: [
      'En la venta directa se transfiere la propiedad; en la consignación no',
      'En la venta directa no se paga comisión; en la consignación sí',
      'No hay diferencia',
      'La consignación es más rápida',
    ],
    respuestaCorrecta: 'En la venta directa se transfiere la propiedad; en la consignación no',
    explicacion: 'En la venta directa, la propiedad pasa al comprador; en la consignación, sigue siendo del consignante hasta que se venda.',
    pista: '¿Cuándo se transfiere la propiedad?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-09',
    enunciado: '¿Qué documento respalda una consignación?',
    opciones: [
      'Un contrato de consignación',
      'Una factura de venta',
      'Un cheque',
      'Un pagaré',
    ],
    respuestaCorrecta: 'Un contrato de consignación',
    explicacion: 'El contrato de consignación establece las condiciones del acuerdo entre consignante y consignatario.',
    pista: '¿Qué documento formaliza el acuerdo?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u4-10',
    enunciado: 'Si el consignante recibe $4,500 de una venta de $5,000, ¿qué porcentaje fue la comisión?',
    opciones: ['10%', '15%', '20%', '25%'],
    respuestaCorrecta: '10%',
    explicacion: 'Comisión = $5,000 - $4,500 = $500. Porcentaje = ($500 / $5,000) × 100 = 10%.',
    pista: 'Calcula la comisión y luego el porcentaje.',
    tipo: 'multiple',
  },

  // ==========================================
  // UNIDAD 5: Activo Fijo y Depreciación (10 ejercicios)
  // ==========================================
  {
    id: 'ej-con-102-u5-01',
    enunciado: '¿Qué es el Activo Fijo?',
    opciones: [
      'Bienes tangibles usados por más de un año',
      'Bienes que se venden a corto plazo',
      'El dinero en efectivo',
      'Las deudas de la empresa',
    ],
    respuestaCorrecta: 'Bienes tangibles usados por más de un año',
    explicacion: 'El Activo Fijo incluye vehículos, maquinaria, edificios, equipos, que se usan en la operación por más de un año.',
    pista: '¿Qué bienes duran más de un año y se usan en la operación?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-02',
    enunciado: '¿Qué es la depreciación?',
    opciones: [
      'La pérdida de valor de un activo por uso u obsolescencia',
      'El aumento de valor de un activo',
      'Un gasto pagado por anticipado',
      'Un ingreso diferido',
    ],
    respuestaCorrecta: 'La pérdida de valor de un activo por uso u obsolescencia',
    explicacion: 'La depreciación distribuye el costo del activo a lo largo de su vida útil.',
    pista: '¿Qué pasa con el valor de un activo con el tiempo?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-03',
    enunciado: 'Si un vehículo cuesta $20,000, tiene valor residual $2,000 y vida útil 5 años, ¿cuál es la depreciación anual (línea recta)?',
    opciones: ['$3,600', '$4,000', '$2,000', '$5,000'],
    respuestaCorrecta: '$3,600',
    explicacion: 'Depreciación = ($20,000 - $2,000) / 5 = $3,600/año.',
    pista: 'Depreciación = (Costo - Valor Residual) / Vida Útil.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-04',
    enunciado: 'Se compra un vehículo por $20,000 al contado. ¿Qué cuentas se afectan?',
    opciones: [
      'Debe Vehículos / Haber Caja',
      'Debe Caja / Haber Vehículos',
      'Debe Gastos / Haber Caja',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Vehículos / Haber Caja',
    explicacion: 'Vehículos aumenta (Activo Fijo → Debe) y Caja disminuye (Activo → Haber).',
    pista: 'El activo fijo aumenta, la caja disminuye.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-05',
    enunciado: '¿Cómo se registra la depreciación anual?',
    opciones: [
      'Debe Gasto por Depreciación / Haber Depreciación Acumulada',
      'Debe Depreciación Acumulada / Haber Gasto por Depreciación',
      'Debe Caja / Haber Depreciación',
      'No se registra',
    ],
    respuestaCorrecta: 'Debe Gasto por Depreciación / Haber Depreciación Acumulada',
    explicacion: 'El gasto aumenta (Debe) y la depreciación acumulada aumenta (Haber, cuenta de activo con saldo acreedor).',
    pista: 'El gasto se reconoce y se acumula la depreciación.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-06',
    enunciado: 'Si un activo tiene costo $10,000 y depreciación acumulada $3,000, ¿cuál es su valor en libros?',
    opciones: ['$7,000', '$3,000', '$10,000', '$13,000'],
    respuestaCorrecta: '$7,000',
    explicacion: 'Valor en Libros = Costo - Depreciación Acumulada = $10,000 - $3,000 = $7,000.',
    pista: 'Valor en Libros = Costo - Depreciación Acumulada.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-07',
    enunciado: 'Se vende un activo con valor en libros $6,000 por $8,000. ¿Qué resultado se obtiene?',
    opciones: ['Ganancia de $2,000', 'Pérdida de $2,000', 'Ganancia de $8,000', 'No hay resultado'],
    respuestaCorrecta: 'Ganancia de $2,000',
    explicacion: 'Ganancia = Precio de Venta - Valor en Libros = $8,000 - $6,000 = $2,000.',
    pista: 'Ganancia = Precio de Venta - Valor en Libros.',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-08',
    enunciado: '¿Cuál de estos NO es un método de depreciación?',
    opciones: ['Línea Recta', 'Suma de Dígitos', 'Unidades Producidas', 'Interés Compuesto'],
    respuestaCorrecta: 'Interés Compuesto',
    explicacion: 'El interés compuesto es un concepto financiero, no un método de depreciación.',
    pista: '¿Qué método se usa para calcular intereses?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-09',
    enunciado: '¿Qué es el valor residual?',
    opciones: [
      'El valor estimado del activo al final de su vida útil',
      'El costo de adquisición',
      'La depreciación acumulada',
      'El precio de venta',
    ],
    respuestaCorrecta: 'El valor estimado del activo al final de su vida útil',
    explicacion: 'El valor residual es lo que se espera obtener por el activo al final de su vida útil.',
    pista: '¿Qué valor tiene el activo al final de su vida útil?',
    tipo: 'multiple',
  },
  {
    id: 'ej-con-102-u5-10',
    enunciado: 'Si un activo tiene costo $50,000, valor residual $5,000 y vida útil 10 años, ¿cuál es la depreciación anual?',
    opciones: ['$4,500', '$5,000', '$4,000', '$5,500'],
    respuestaCorrecta: '$4,500',
    explicacion: 'Depreciación = ($50,000 - $5,000) / 10 = $4,500/año.',
    pista: 'Depreciación = (Costo - Valor Residual) / Vida Útil.',
    tipo: 'multiple',
  },

 
],

  // ==========================================
  // EXÁMENES (por ahora vacío, luego los añadimos)
  // ==========================================
  examenes: [
  // ==========================================
  // EXAMEN 1: Parcial (Unidades 1-3)
  // ==========================================
  {
    id: 'exam-con-102-01',
    titulo: 'Examen Parcial - Contabilidad General II',
    descripcion: 'Evaluación de los temas 1 al 3: Activo Circulante, Inventarios y Cuentas por Cobrar/Pagar.',
    duracionMinutos: 60,
    preguntas: [
      {
        id: 'ex-con-102-01-p1',
        enunciado: 'Defina qué es el Activo Circulante y mencione tres ejemplos.',
        tipo: 'teorica',
        puntaje: 10,
        respuestaModelo: 'El Activo Circulante son los bienes y derechos que la empresa espera convertir en efectivo en un plazo menor a un año. Ejemplos: Caja (efectivo), Banco (dinero depositado), Cuentas por Cobrar (ventas a crédito) e Inventarios (mercancías).',
      },
      {
        id: 'ex-con-102-01-p2',
        enunciado: 'Dada la siguiente información: Inventario Inicial = $5,000, Compras = $10,000, Inventario Final = $4,000. Calcule el Costo de Ventas y explique el resultado.',
        tipo: 'practica',
        puntaje: 10,
        operaciones: ['Inventario Inicial = $5,000', 'Compras = $10,000', 'Inventario Final = $4,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Aplicar la fórmula', contenido: 'Costo de Ventas = Inventario Inicial + Compras - Inventario Final' },
          { titulo: 'Paso 2: Sustituir valores', contenido: 'Costo de Ventas = $5,000 + $10,000 - $4,000 = $11,000' },
          { titulo: 'Paso 3: Interpretar', contenido: 'El costo de la mercancía vendida en el período fue de $11,000.' },
        ],
        respuestaModelo: 'El Costo de Ventas es $11,000.',
      },
      {
        id: 'ex-con-102-01-p3',
        enunciado: 'Registre en cuentas T las siguientes operaciones de la empresa "Comercial Baracoa": 1) Se vende mercancía a crédito por $5,000. 2) Se compra mercancía a crédito por $3,000.',
        tipo: 'practica',
        puntaje: 20,
        operaciones: ['1) Venta a crédito: $5,000', '2) Compra a crédito: $3,000'],
        solucionPasos: [
          { titulo: 'Paso 1: Analizar la operación 1', contenido: 'Cuentas por Cobrar (Activo) aumenta → Debe $5,000. Ventas (Ingreso) aumenta → Haber $5,000.' },
          { titulo: 'Paso 2: Analizar la operación 2', contenido: 'Mercancías (Activo) aumenta → Debe $3,000. Cuentas por Pagar (Pasivo) aumenta → Haber $3,000.' },
          { titulo: 'Paso 3: Cuentas T resultantes', contenido: `Cuentas por Cobrar: Debe $5,000 | Haber $0 → Saldo $5,000 (Deudor)\nVentas: Debe $0 | Haber $5,000 → Saldo $5,000 (Acreedor)\nMercancías: Debe $3,000 | Haber $0 → Saldo $3,000 (Deudor)\nCuentas por Pagar: Debe $0 | Haber $3,000 → Saldo $3,000 (Acreedor)` },
        ],
      },
    ],
  },

  // ==========================================
  // EXAMEN 2: Final (Unidades 4-5)
  // ==========================================
  {
    id: 'exam-con-102-02',
    titulo: 'Examen Final - Contabilidad General II',
    descripcion: 'Evaluación de los temas 4 y 5: Comisiones y Consignaciones, Activo Fijo y Depreciación.',
    duracionMinutos: 90,
    preguntas: [
      {
        id: 'ex-con-102-02-p1',
        enunciado: 'Explique qué es una consignación y en qué se diferencia de una venta directa.',
        tipo: 'teorica',
        puntaje: 10,
        respuestaModelo: 'La consignación es un acuerdo por el cual una empresa (consignante) entrega mercancía a otra (consignatario) para que la venda. La diferencia con la venta directa es que en la consignación la propiedad de la mercancía no se transfiere hasta que el consignatario la vende al cliente final, mientras que en la venta directa la propiedad se transfiere inmediatamente.',
      },
      {
        id: 'ex-con-102-02-p2',
        enunciado: 'Con las siguientes operaciones de la empresa "Ferretería El Clavo", elabore el Balance de Comprobación de Saldos: 1) Capital $40,000 (Caja $25,000 + Mercancías $15,000). 2) Compra de mercancía a crédito $8,000. 3) Venta al contado $12,000 (costo $7,000). 4) Pago de servicios públicos $600. 5) Compra de estantes $2,500 a crédito. 6) Pago parcial a proveedores $3,000.',
        tipo: 'practica',
        puntaje: 30,
        operaciones: [
          'Capital: $40,000 (Caja $25,000 + Mercancías $15,000)',
          'Compra de mercancía a crédito: $8,000',
          'Venta al contado: $12,000 (costo $7,000)',
          'Pago de servicios públicos: $600',
          'Compra de estantes: $2,500 a crédito',
          'Pago parcial a proveedores: $3,000',
        ],
        solucionPasos: [
          { titulo: 'Paso 1: Libro Diario', contenido: `1) Debe: Caja $25,000 / Haber: Capital $25,000\n2) Debe: Mercancías $15,000 / Haber: Capital $15,000\n3) Debe: Mercancías $8,000 / Haber: Cuentas por Pagar $8,000\n4) Debe: Caja $12,000 / Haber: Ventas $12,000\n5) Debe: Costo de Ventas $7,000 / Haber: Mercancías $7,000\n6) Debe: Servicios Públicos $600 / Haber: Caja $600\n7) Debe: Estantes $2,500 / Haber: Cuentas por Pagar $2,500\n8) Debe: Cuentas por Pagar $3,000 / Haber: Caja $3,000` },
          { titulo: 'Paso 2: Saldos del Mayor', contenido: `Caja: $25,000 + $12,000 - $600 - $3,000 = $33,400 (Deudor)\nMercancías: $15,000 + $8,000 - $7,000 = $16,000 (Deudor)\nEstantes: $2,500 (Deudor)\nCosto de Ventas: $7,000 (Deudor)\nServicios Públicos: $600 (Deudor)\nCuentas por Pagar: $8,000 + $2,500 - $3,000 = $7,500 (Acreedor)\nCapital: $40,000 (Acreedor)\nVentas: $12,000 (Acreedor)` },
          { titulo: 'Paso 3: Balance de Comprobación', contenido: `| Cuenta             | Débitos  | Créditos |\n|--------------------|----------|----------|\n| Caja               | $33,400  |          |\n| Mercancías         | $16,000  |          |\n| Estantes           | $2,500   |          |\n| Costo de Ventas    | $7,000   |          |\n| Servicios Públicos | $600     |          |\n| Cuentas por Pagar  |          | $7,500   |\n| Capital            |          | $40,000  |\n| Ventas             |          | $12,000  |\n| TOTAL              | $59,500  | $59,500  |` },
          { titulo: 'Paso 4: Verificación', contenido: 'Débitos = Créditos = $59,500. ✅ Balance cuadrado.' },
        ],
      },
      {
        id: 'ex-con-102-02-p3',
        enunciado: 'A partir de los datos del ejercicio anterior, elabore el Estado de Resultados y el Balance General de "Ferretería El Clavo".',
        tipo: 'practica',
        puntaje: 30,
        operaciones: ['Utilidad Bruta = Ventas - Costo de Ventas', 'Utilidad Neta = Utilidad Bruta - Gastos'],
        solucionPasos: [
          { titulo: 'Paso 1: Estado de Resultados', contenido: `| Concepto            | Monto    |\n|---------------------|----------|\n| Ingresos (Ventas)   | $12,000  |\n| (-) Costo de Ventas | $7,000   |\n| (=) Utilidad Bruta  | $5,000   |\n| (-) Servicios Públicos | $600 |\n| (=) Utilidad Neta   | $4,400   |` },
          { titulo: 'Paso 2: Calcular Patrimonio final', contenido: 'Patrimonio final = Capital inicial + Utilidad Neta = $40,000 + $4,400 = $44,400.' },
          { titulo: 'Paso 3: Balance General', contenido: `| ACTIVO           | Monto    | PASIVO + PATRIMONIO | Monto |\n|------------------|----------|---------------------|-------|\n| Caja             | $33,400  | Cuentas por Pagar   | $7,500|\n| Mercancías       | $16,000  | Capital             | $40,000|\n| Estantes         | $2,500   | Utilidad del Ejercicio | $4,400|\n| TOTAL ACTIVO     | $51,900  | TOTAL PASIVO + PATRIMONIO | $51,900|` },
          { titulo: 'Paso 4: Verificación', contenido: 'Activo ($51,900) = Pasivo + Patrimonio ($7,500 + $44,400 = $51,900). ✅' },
        ],
      },
    ],
  },

  // ==========================================
  // EXAMEN 3: Práctica adicional
  // ==========================================
  {
    id: 'exam-con-102-03',
    titulo: 'Examen de Práctica - Balance y Estados Financieros',
    descripcion: 'Ejercicios prácticos adicionales para entrenar el formato de examen escrito.',
    duracionMinutos: 120,
    preguntas: [
      {
        id: 'ex-con-102-03-p1',
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
          { titulo: 'Paso 1: Libro Diario', contenido: `1) Debe: Caja $20,000 / Haber: Capital $20,000\n2) Debe: Mercancías $6,000 / Haber: Caja $6,000\n3) Debe: Caja $7,000 / Debe: Cuentas por Cobrar $3,000 / Haber: Ventas $10,000\n4) Debe: Costo de Ventas $5,500 / Haber: Mercancías $5,500\n5) Debe: Alquiler $1,200 / Haber: Caja $1,200\n6) Debe: Horno $4,000 / Haber: Cuentas por Pagar $4,000\n7) Debe: Caja $1,500 / Haber: Cuentas por Cobrar $1,500` },
          { titulo: 'Paso 2: Saldos del Mayor', contenido: `Caja: $20,000 + $7,000 + $1,500 - $6,000 - $1,200 = $21,300 (Deudor)\nMercancías: $6,000 - $5,500 = $500 (Deudor)\nHorno: $4,000 (Deudor)\nCuentas por Cobrar: $3,000 - $1,500 = $1,500 (Deudor)\nCosto de Ventas: $5,500 (Deudor)\nAlquiler: $1,200 (Deudor)\nCuentas por Pagar: $4,000 (Acreedor)\nCapital: $20,000 (Acreedor)\nVentas: $10,000 (Acreedor)` },
          { titulo: 'Paso 3: Balance de Comprobación', contenido: `| Cuenta             | Débitos  | Créditos |\n|--------------------|----------|----------|\n| Caja               | $21,300  |          |\n| Mercancías         | $500     |          |\n| Horno              | $4,000   |          |\n| Cuentas por Cobrar | $1,500   |          |\n| Costo de Ventas    | $5,500   |          |\n| Alquiler           | $1,200   |          |\n| Cuentas por Pagar  |          | $4,000   |\n| Capital            |          | $20,000  |\n| Ventas             |          | $10,000  |\n| TOTAL              | $34,000  | $34,000  |` },
          { titulo: 'Paso 4: Verificación', contenido: 'Débitos = Créditos = $34,000. ✅ Balance cuadrado.' },
        ],
      },
      {
        id: 'ex-con-102-03-p2',
        enunciado: 'A partir de las operaciones de "Panadería La Espiga" (ejercicio anterior), elabora el Estado de Resultados y el Balance General al 28 de febrero de 2026.',
        tipo: 'practica',
        puntaje: 30,
        operaciones: ['Utilidad Bruta = Ventas - Costo de Ventas', 'Utilidad Neta = Utilidad Bruta - Gastos'],
        solucionPasos: [
          { titulo: 'Paso 1: Estado de Resultados', contenido: `| Concepto            | Monto    |\n|---------------------|----------|\n| Ingresos (Ventas)   | $10,000  |\n| (-) Costo de Ventas | $5,500   |\n| (=) Utilidad Bruta  | $4,500   |\n| (-) Alquiler        | $1,200   |\n| (=) Utilidad Neta   | $3,300   |` },
          { titulo: 'Paso 2: Calcular Patrimonio final', contenido: 'Patrimonio final = Capital inicial + Utilidad Neta = $20,000 + $3,300 = $23,300.' },
          { titulo: 'Paso 3: Balance General', contenido: `| ACTIVO           | Monto    | PASIVO + PATRIMONIO | Monto |\n|------------------|----------|---------------------|-------|\n| Caja             | $21,300  | Cuentas por Pagar   | $4,000|\n| Mercancías       | $500     | Capital             | $20,000|\n| Horno            | $4,000   | Utilidad del Ejercicio | $3,300|\n| Cuentas por Cobrar | $1,500 |                     |       |\n| TOTAL ACTIVO     | $27,300  | TOTAL PASIVO + PATRIMONIO | $27,300|` },
          { titulo: 'Paso 4: Verificación', contenido: 'Activo ($27,300) = Pasivo + Patrimonio ($4,000 + $23,300 = $27,300). ✅' },
        ],
      },
    ],
  },
],
};