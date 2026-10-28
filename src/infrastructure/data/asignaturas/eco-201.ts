// src/infrastructure/data/asignaturas/eco-201.ts
import type { Asignatura } from '@/core/entities';

export const eco201: Asignatura = {
  id: 'eco-201',
  nombre: 'Econometría',
  descripcion: 'Modelos de regresión lineal simple y múltiple, verificación de supuestos, pronóstico y aplicaciones económicas.',
  
  contenidos: [
    // ==========================================
    // UNIDAD 1: Regresión Lineal Simple
    // ==========================================
    {
      id: 'eco-201-01',
      titulo: 'El Modelo de Regresión Lineal Simple (MRLS)',
      descripcion: 'Aprende a estimar la relación entre dos variables usando Mínimos Cuadrados Ordinarios (MCO).',
      duracionEstimada: '40 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Identificar las variables', ejemplo: 'Variable dependiente (Y): Demanda. Variable independiente (X): Precio.' },
        { id: 2, descripcion: 'Plantear el modelo', formula: 'Y = β₀ + β₁X + ε', ejemplo: 'Demanda = β₀ + β₁(Precio) + error.' },
        { id: 3, descripcion: 'Estimar los parámetros por MCO', formula: 'β₁ = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / Σ(Xᵢ - X̄)²', ejemplo: 'Con datos de precio y demanda, se calcula la pendiente.' },
        { id: 4, descripcion: 'Calcular el coeficiente de determinación (R²)', formula: 'R² = 1 - (Suma de Cuadrados de Residuos / Suma Total de Cuadrados)', nota: '💡 R² indica qué porcentaje de la variación de Y es explicado por X. Va de 0 a 1.' },
        { id: 5, descripcion: 'Interpretar los resultados', ejemplo: 'Si β₁ = -2, por cada aumento de $1 en el precio, la demanda disminuye en 2 unidades.' },
      ],
      documentacion: [
        { id: 'doc-eco-01', titulo: '¿Qué es la Econometría?', contenido: 'La econometría es la aplicación de métodos estadísticos y matemáticos al análisis de datos económicos, con el fin de estimar relaciones, probar teorías y predecir variables. Se basa en el modelo de regresión lineal [citation:1].', fuente: 'Programa de Econometría, Plan D', conceptosClave: ['Econometría', 'Regresión', 'MCO'] },
        { id: 'doc-eco-02', titulo: 'El método de Mínimos Cuadrados Ordinarios (MCO)', contenido: 'MCO busca la recta que minimiza la suma de los cuadrados de las diferencias entre los valores observados y los estimados (residuos). Es el método de estimación más utilizado en econometría por sus propiedades (insesgadez, eficiencia bajo ciertos supuestos) [citation:1].', fuente: 'Gujarati, Econometría', conceptosClave: ['MCO', 'Residuos', 'Estimación'] },
        { id: 'doc-eco-03', titulo: 'R² y Correlación', contenido: 'El R² mide la proporción de la varianza de Y explicada por el modelo. El coeficiente de correlación (r) mide la fuerza y dirección de la relación lineal entre dos variables. Ambos son medidas de bondad de ajuste, pero R² es más útil en regresión múltiple.', fuente: 'Stock & Watson, Introducción a la Econometría', conceptosClave: ['R²', 'Correlación', 'Bondad de Ajuste'] },
      ],
    },
    // ==========================================
    // UNIDAD 2: Regresión Lineal Múltiple
    // ==========================================
    {
      id: 'eco-201-02',
      titulo: 'El Modelo de Regresión Lineal Múltiple (MRLM)',
      descripcion: 'Generaliza el modelo a k variables explicativas y realiza inferencia estadística.',
      duracionEstimada: '45 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Plantear el modelo con k variables', formula: 'Y = β₀ + β₁X₁ + β₂X₂ + ... + βₖXₖ + ε', ejemplo: 'Demanda = β₀ + β₁(Precio) + β₂(Ingreso) + ε.' },
        { id: 2, descripcion: 'Estimar los parámetros por MCO (notación matricial)', formula: 'β = (X\'X)⁻¹X\'Y', nota: '💡 En la práctica, se usa software estadístico para calcular esto.' },
        { id: 3, descripcion: 'Realizar la prueba F global', formula: 'F = (R²/k) / [(1-R²)/(n-k-1)]', ejemplo: 'Evalúa si el modelo en su conjunto es significativo.' },
        { id: 4, descripcion: 'Realizar pruebas t parciales', formula: 't = β̂ⱼ / EE(β̂ⱼ)', nota: '💡 Evalúa si cada coeficiente individual es significativamente distinto de cero.' },
        { id: 5, descripcion: 'Interpretar los coeficientes parciales', ejemplo: 'β₁ mide el efecto de X₁ sobre Y, manteniendo constantes las demás variables (ceteris paribus).' },
      ],
      documentacion: [
        { id: 'doc-eco-04', titulo: 'El Modelo Clásico de Regresión Lineal', contenido: 'El MRLM se basa en supuestos clave: linealidad en los parámetros, errores con media cero y varianza constante (homocedasticidad), no autocorrelación, y ausencia de multicolinealidad perfecta. Bajo estos supuestos, MCO es el mejor estimador lineal insesgado (BLUE) [citation:1].', fuente: 'Gujarati, Econometría', conceptosClave: ['Supuestos', 'BLUE', 'Homocedasticidad'] },
        { id: 'doc-eco-05', titulo: 'Multicolinealidad', contenido: 'Ocurre cuando dos o más variables explicativas están altamente correlacionadas. No sesga los estimadores, pero aumenta sus errores estándar, haciendo que los coeficientes parezcan no significativos. Se detecta con la matriz de correlación o el Factor de Inflación de Varianza (VIF) [citation:5][citation:10].', fuente: 'Stock & Watson', conceptosClave: ['Multicolinealidad', 'VIF', 'Correlación'] },
      ],
    },
    // ==========================================
    // UNIDAD 3: Verificación de Supuestos
    // ==========================================
    {
      id: 'eco-201-03',
      titulo: 'Verificación de los Supuestos del Modelo Clásico',
      descripcion: 'Detecta y corrige multicolinealidad, heterocedasticidad y autocorrelación.',
      duracionEstimada: '50 min',
      nivel: 'avanzado',
      pasos: [
        { id: 1, descripcion: 'Detectar multicolinealidad', ejemplo: 'Calcular la correlación entre variables explicativas. Si |r| > 0.8, hay indicios. Calcular el VIF.' },
        { id: 2, descripcion: 'Detectar heterocedasticidad', ejemplo: 'Graficar los residuos contra los valores ajustados. Si la dispersión cambia, hay heterocedasticidad. Aplicar la prueba de White.' },
        { id: 3, descripcion: 'Detectar autocorrelación', ejemplo: 'Graficar los residuos en el tiempo. Aplicar la prueba de Durbin-Watson (DW). Si DW ≈ 2, no hay autocorrelación; si DW ≈ 0, hay autocorrelación positiva.' },
        { id: 4, descripcion: 'Conocer las consecuencias', nota: '💡 Multicolinealidad: estimadores insesgados pero ineficientes. Heterocedasticidad: estimadores insesgados pero errores estándar incorrectos (pruebas t inválidas). Autocorrelación: estimadores insesgados pero ineficientes [citation:4].' },
        { id: 5, descripcion: 'Proponer soluciones', ejemplo: 'Multicolinealidad: eliminar variables redundantes. Heterocedasticidad: usar errores estándar robustos (White). Autocorrelación: usar mínimos cuadrados generalizados (MCG).' },
      ],
      documentacion: [
        { id: 'doc-eco-06', titulo: 'Heterocedasticidad y Autocorrelación', contenido: 'La heterocedasticidad ocurre cuando la varianza del error no es constante. La autocorrelación ocurre cuando los errores están correlacionados en el tiempo. Ambas violan los supuestos de MCO y requieren corrección para obtener inferencias válidas [citation:4][citation:9].', fuente: 'Stock & Watson', conceptosClave: ['Heterocedasticidad', 'Autocorrelación', 'Durbin-Watson'] },
      ],
    },
    // ==========================================
    // UNIDAD 4: Pronóstico y Series de Tiempo
    // ==========================================
    {
      id: 'eco-201-04',
      titulo: 'Pronóstico y Series de Tiempo',
      descripcion: 'Utiliza modelos econométricos para predecir valores futuros e introduce el análisis de series de tiempo.',
      duracionEstimada: '35 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Calcular un pronóstico puntual', formula: 'Ŷ₀ = β̂₀ + β̂₁X₀', ejemplo: 'Si el precio futuro es $10, el pronóstico de demanda es Ŷ = 100 - 2(10) = 80.' },
        { id: 2, descripcion: 'Calcular un intervalo de predicción', formula: 'Ŷ₀ ± t(α/2, n-2) × EE del pronóstico', nota: '💡 Refleja la incertidumbre del pronóstico. Es más amplio que un intervalo de confianza para la media.' },
        { id: 3, descripcion: 'Identificar componentes de una serie de tiempo', ejemplo: 'Tendencia (dirección a largo plazo), estacionalidad (patrón que se repite cada año), ciclo (fluctuaciones económicas), irregularidad (eventos aleatorios).' },
      ],
      documentacion: [
        { id: 'doc-eco-07', titulo: 'Pronóstico en Econometría', contenido: 'El pronóstico consiste en predecir valores futuros de una variable basándose en un modelo estimado. La precisión del pronóstico depende de la calidad del modelo y de la estabilidad de la relación en el futuro. Los intervalos de predicción cuantifican la incertidumbre [citation:1].', fuente: 'Programa de Econometría', conceptosClave: ['Pronóstico', 'Intervalo de Predicción', 'Series de Tiempo'] },
      ],
    },
    // ==========================================
    // UNIDAD 5: Aplicaciones y Software
    // ==========================================
    {
      id: 'eco-201-05',
      titulo: 'Aplicaciones Económicas y Uso de Software',
      descripcion: 'Aplica la econometría a problemas reales y utiliza software estadístico para estimar modelos.',
      duracionEstimada: '30 min',
      nivel: 'intermedio',
      pasos: [
        { id: 1, descripcion: 'Seleccionar un problema económico', ejemplo: '¿Cómo afecta la publicidad a las ventas? ¿Cómo influye el PIB en la recaudación fiscal?' },
        { id: 2, descripcion: 'Recolectar datos', ejemplo: 'Series históricas de ventas y publicidad de los últimos 5 años.' },
        { id: 3, descripcion: 'Estimar el modelo con software', ejemplo: 'Usar EViews, STATA, R o Excel para aplicar MCO y obtener los coeficientes y pruebas.' },
        { id: 4, descripcion: 'Interpretar el output', nota: '💡 Revisar R², prueba F, pruebas t, y verificar supuestos. Un modelo es útil si es estadísticamente significativo y económicamente interpretable.' },
      ],
      documentacion: [
        { id: 'doc-eco-08', titulo: 'Software Econométrico', contenido: 'Los paquetes más usados son EViews (muy común en Cuba), STATA y R. Permiten estimar modelos, realizar pruebas de diagnóstico y generar pronósticos de manera eficiente. El dominio de al menos uno es una habilidad clave del econometrista [citation:1].', fuente: 'Programa de Econometría', conceptosClave: ['EViews', 'STATA', 'R', 'Output'] },
      ],
    },
  ],

  formulas: [
    { id: 'form-eco-01', titulo: 'Pendiente MCO (β₁)', descripcion: 'Estimador de la pendiente en MRLS', formula: 'β₁ = Σ[(Xᵢ - X̄)(Yᵢ - Ȳ)] / Σ(Xᵢ - X̄)²', variables: ['Xᵢ, Yᵢ: Datos observados', 'X̄, Ȳ: Medias muestrales'], ejemplo: 'Con datos de precio y demanda, se calcula la pendiente de la recta.' },
    { id: 'form-eco-02', titulo: 'Coeficiente de Determinación (R²)', descripcion: 'Bondad de ajuste del modelo', formula: 'R² = 1 - (SCR / STC)', variables: ['SCR: Suma de Cuadrados de Residuos', 'STC: Suma Total de Cuadrados'], ejemplo: 'R² = 0.85 significa que el 85% de la variación de Y es explicada por X.' },
    { id: 'form-eco-03', titulo: 'Prueba F Global', descripcion: 'Significación conjunta del modelo', formula: 'F = (R²/k) / [(1-R²)/(n-k-1)]', variables: ['k: Número de variables explicativas', 'n: Tamaño de muestra'], ejemplo: 'Si F es mayor que el valor crítico, el modelo es significativo en su conjunto.' },
    { id: 'form-eco-04', titulo: 'Estadístico t', descripcion: 'Significación individual de un coeficiente', formula: 't = β̂ⱼ / EE(β̂ⱼ)', variables: ['β̂ⱼ: Coeficiente estimado', 'EE: Error estándar'], ejemplo: 'Si |t| > 2 (aprox.), el coeficiente es significativo al 5%.' },
    { id: 'form-eco-05', titulo: 'Estadístico Durbin-Watson', descripcion: 'Prueba de autocorrelación de primer orden', formula: 'DW = Σ(êt - êt-1)² / Σêt²', variables: ['êt: Residuos del modelo'], ejemplo: 'DW ≈ 2: no hay autocorrelación. DW ≈ 0: autocorrelación positiva. DW ≈ 4: autocorrelación negativa.' },
    { id: 'form-eco-06', titulo: 'Intervalo de Predicción', descripcion: 'Rango para un valor futuro de Y', formula: 'Ŷ₀ ± t(α/2, n-2) × EE del pronóstico', variables: ['Ŷ₀: Pronóstico puntual', 't: Valor crítico de la distribución t'], ejemplo: 'Si Ŷ₀ = 80 y el margen es 10, el intervalo es [70, 90].' },
  ],

  ejercicios: [
    // Unidad 1 (8)
    { id: 'ej-eco-u1-01', enunciado: '¿Qué es la econometría?', opciones: ['La aplicación de métodos estadísticos a datos económicos', 'El estudio de la contabilidad', 'El análisis de estados financieros', 'La teoría del dinero'], respuestaCorrecta: 'La aplicación de métodos estadísticos a datos económicos', explicacion: 'La econometría usa estadística y matemáticas para modelar relaciones económicas [citation:1].', pista: '¿Qué disciplina combina economía y estadística?', tipo: 'multiple' },
    { id: 'ej-eco-u1-02', enunciado: '¿Qué método se usa para estimar los parámetros en regresión lineal?', opciones: ['Mínimos Cuadrados Ordinarios (MCO)', 'Máxima Verosimilitud', 'Método de Newton', 'Regla de Cramer'], respuestaCorrecta: 'Mínimos Cuadrados Ordinarios (MCO)', explicacion: 'MCO minimiza la suma de los cuadrados de los residuos [citation:1].', pista: '¿Qué significa MCO?', tipo: 'multiple' },
    { id: 'ej-eco-u1-03', enunciado: '¿Qué mide el R²?', opciones: ['La proporción de la varianza de Y explicada por el modelo', 'La media de Y', 'La pendiente', 'El error estándar'], respuestaCorrecta: 'La proporción de la varianza de Y explicada por el modelo', explicacion: 'R² es una medida de bondad de ajuste.', pista: '¿Qué porcentaje se explica?', tipo: 'multiple' },
    { id: 'ej-eco-u1-04', enunciado: 'Si β₁ = -3, ¿qué significa?', opciones: ['Por cada aumento de 1 en X, Y disminuye en 3', 'Por cada aumento de 1 en X, Y aumenta en 3', 'Y es constante', 'No hay relación'], respuestaCorrecta: 'Por cada aumento de 1 en X, Y disminuye en 3', explicacion: 'La pendiente negativa indica relación inversa.', pista: '¿Qué dirección tiene la relación?', tipo: 'multiple' },
    { id: 'ej-eco-u1-05', enunciado: 'El coeficiente de correlación (r) puede tomar valores entre:', opciones: ['-1 y 1', '0 y 1', '-∞ e ∞', '0 e ∞'], respuestaCorrecta: '-1 y 1', explicacion: 'r mide la fuerza y dirección de la relación lineal.', pista: '¿Cuál es el rango?', tipo: 'multiple' },
    { id: 'ej-eco-u1-06', enunciado: 'Si R² = 0.90, ¿qué se puede concluir?', opciones: ['El modelo explica el 90% de la variación de Y', 'El modelo es malo', 'No hay relación', 'La pendiente es 0.90'], respuestaCorrecta: 'El modelo explica el 90% de la variación de Y', explicacion: 'Un R² alto indica buen ajuste.', pista: '¿Qué porcentaje se explica?', tipo: 'multiple' },
    { id: 'ej-eco-u1-07', enunciado: '¿Cuál es el supuesto de homocedasticidad?', opciones: ['La varianza de los errores es constante', 'La media de los errores es cero', 'Los errores son normales', 'No hay autocorrelación'], respuestaCorrecta: 'La varianza de los errores es constante', explicacion: 'Homo = igual, cedasticidad = dispersión.', pista: '¿Qué significa "homo"?', tipo: 'multiple' },
    { id: 'ej-eco-u1-08', enunciado: 'En el MRLS, el error (ε) representa:', opciones: ['Factores no observados que afectan a Y', 'La pendiente', 'El intercepto', 'El R²'], respuestaCorrecta: 'Factores no observados que afectan a Y', explicacion: 'El error captura la variación no explicada por X.', pista: '¿Qué no se incluye en el modelo?', tipo: 'multiple' },

    // Unidad 2 (7)
    { id: 'ej-eco-u2-01', enunciado: '¿Qué es la multicolinealidad?', opciones: ['Alta correlación entre variables explicativas', 'Varianza no constante', 'Errores correlacionados', 'Falta de normalidad'], respuestaCorrecta: 'Alta correlación entre variables explicativas', explicacion: 'Dificulta la estimación precisa de los coeficientes [citation:5].', pista: '¿Qué pasa entre las variables X?', tipo: 'multiple' },
    { id: 'ej-eco-u2-02', enunciado: '¿Qué consecuencias tiene la multicolinealidad?', opciones: ['Aumenta los errores estándar de los coeficientes', 'Sesga los estimadores', 'Elimina el R²', 'Reduce la muestra'], respuestaCorrecta: 'Aumenta los errores estándar de los coeficientes', explicacion: 'Los coeficientes se vuelven menos precisos [citation:10].', pista: '¿Qué pasa con la precisión?', tipo: 'multiple' },
    { id: 'ej-eco-u2-03', enunciado: 'La prueba F global sirve para:', opciones: ['Evaluar la significación conjunta del modelo', 'Evaluar un coeficiente individual', 'Detectar autocorrelación', 'Calcular el R²'], respuestaCorrecta: 'Evaluar la significación conjunta del modelo', explicacion: 'Contrasta si todas las pendientes son cero.', pista: '¿Individual o conjunta?', tipo: 'multiple' },
    { id: 'ej-eco-u2-04', enunciado: 'La prueba t se usa para:', opciones: ['Evaluar la significación de un coeficiente individual', 'Evaluar el modelo completo', 'Detectar heterocedasticidad', 'Calcular la media'], respuestaCorrecta: 'Evaluar la significación de un coeficiente individual', explicacion: 'Contrasta si βⱼ = 0.', pista: '¿Qué coeficiente?', tipo: 'multiple' },
    { id: 'ej-eco-u2-05', enunciado: 'En el MRLM, la interpretación de β₁ es:', opciones: ['Efecto de X₁ sobre Y, manteniendo constantes las demás variables', 'Efecto total de X₁', 'La media de Y', 'El error'], respuestaCorrecta: 'Efecto de X₁ sobre Y, manteniendo constantes las demás variables', explicacion: 'Es un efecto parcial (ceteris paribus).', pista: '¿Qué significa ceteris paribus?', tipo: 'multiple' },
    { id: 'ej-eco-u2-06', enunciado: 'Si el VIF de una variable es mayor a 10, indica:', opciones: ['Multicolinealidad grave', 'Homocedasticidad', 'Normalidad', 'Buen ajuste'], respuestaCorrecta: 'Multicolinealidad grave', explicacion: 'VIF alto indica redundancia con otras variables [citation:10].', pista: '¿Qué mide el VIF?', tipo: 'multiple' },
    { id: 'ej-eco-u2-07', enunciado: 'El estimador MCO bajo los supuestos clásicos es:', opciones: ['BLUE (Mejor Estimador Lineal Insesgado)', 'Sesgado', 'Inconsistente', 'Ineficiente'], respuestaCorrecta: 'BLUE (Mejor Estimador Lineal Insesgado)', explicacion: 'Teorema de Gauss-Markov [citation:1].', pista: '¿Qué significa BLUE?', tipo: 'multiple' },

    // Unidad 3 (8)
    { id: 'ej-eco-u3-01', enunciado: '¿Qué es la heterocedasticidad?', opciones: ['Varianza del error no constante', 'Media del error no cero', 'Errores correlacionados', 'Normalidad de errores'], respuestaCorrecta: 'Varianza del error no constante', explicacion: 'La dispersión de los errores cambia con X [citation:4].', pista: '¿Qué no es constante?', tipo: 'multiple' },
    { id: 'ej-eco-u3-02', enunciado: '¿Qué prueba detecta heterocedasticidad?', opciones: ['Prueba de White', 'Prueba de Durbin-Watson', 'Prueba t', 'Prueba F'], respuestaCorrecta: 'Prueba de White', explicacion: 'Contrasta si la varianza depende de las X [citation:4].', pista: '¿Qué prueba es específica?', tipo: 'multiple' },
    { id: 'ej-eco-u3-03', enunciado: '¿Qué es la autocorrelación?', opciones: ['Errores correlacionados en el tiempo', 'Varianza no constante', 'Multicolinealidad', 'Falta de normalidad'], respuestaCorrecta: 'Errores correlacionados en el tiempo', explicacion: 'Los errores de un período se relacionan con los de otro [citation:4].', pista: '¿Qué se correlaciona?', tipo: 'multiple' },
    { id: 'ej-eco-u3-04', enunciado: 'El estadístico Durbin-Watson cercano a 2 indica:', opciones: ['No hay autocorrelación', 'Autocorrelación positiva', 'Autocorrelación negativa', 'Heterocedasticidad'], respuestaCorrecta: 'No hay autocorrelación', explicacion: 'DW ≈ 2 es señal de ausencia de autocorrelación de primer orden [citation:4].', pista: '¿Qué valor es "normal"?', tipo: 'multiple' },
    { id: 'ej-eco-u3-05', enunciado: 'Si DW ≈ 0, hay indicios de:', opciones: ['Autocorrelación positiva', 'No autocorrelación', 'Autocorrelación negativa', 'Heterocedasticidad'], respuestaCorrecta: 'Autocorrelación positiva', explicacion: 'Valores bajos de DW indican correlación positiva.', pista: '¿Qué dirección tiene?', tipo: 'multiple' },
    { id: 'ej-eco-u3-06', enunciado: 'La heterocedasticidad afecta principalmente a:', opciones: ['Los errores estándar y las pruebas de significación', 'La media de Y', 'El R²', 'Los coeficientes estimados'], respuestaCorrecta: 'Los errores estándar y las pruebas de significación', explicacion: 'Los coeficientes siguen siendo insesgados, pero las pruebas t no son válidas.', pista: '¿Qué se vuelve inválido?', tipo: 'multiple' },
    { id: 'ej-eco-u3-07', enunciado: 'Una solución a la heterocedasticidad es:', opciones: ['Usar errores estándar robustos', 'Eliminar la variable dependiente', 'Aumentar la muestra', 'Ignorar el problema'], respuestaCorrecta: 'Usar errores estándar robustos', explicacion: 'Los errores robustos de White corrigen la inferencia [citation:4].', pista: '¿Qué tipo de errores?', tipo: 'multiple' },
    { id: 'ej-eco-u3-08', enunciado: 'La multicolinealidad perfecta ocurre cuando:', opciones: ['Una variable es combinación lineal exacta de otra', 'Los errores son normales', 'La varianza es constante', 'No hay correlación'], respuestaCorrecta: 'Una variable es combinación lineal exacta de otra', explicacion: 'Impide la inversión de la matriz X\'X [citation:5].', pista: '¿Qué relación exacta hay?', tipo: 'multiple' },

    // Unidad 4 (7)
    { id: 'ej-eco-u4-01', enunciado: 'El pronóstico puntual en regresión se calcula:', opciones: ['Sustituyendo X₀ en la ecuación estimada', 'Usando la media de Y', 'Con el R²', 'Con el error estándar'], respuestaCorrecta: 'Sustituyendo X₀ en la ecuación estimada', explicacion: 'Ŷ₀ = β̂₀ + β̂₁X₀.', pista: '¿Qué se hace con la ecuación?', tipo: 'multiple' },
    { id: 'ej-eco-u4-02', enunciado: 'Un intervalo de predicción es más amplio que un intervalo de confianza porque:', opciones: ['Incluye la incertidumbre del error individual', 'Usa otra distribución', 'No usa la media', 'Es más preciso'], respuestaCorrecta: 'Incluye la incertidumbre del error individual', explicacion: 'El pronóstico de un valor individual tiene más incertidumbre que la media.', pista: '¿Qué se predice?', tipo: 'multiple' },
    { id: 'ej-eco-u4-03', enunciado: 'La tendencia de una serie de tiempo representa:', opciones: ['La dirección a largo plazo', 'El patrón estacional', 'Las fluctuaciones cíclicas', 'Los eventos aleatorios'], respuestaCorrecta: 'La dirección a largo plazo', explicacion: 'Es el movimiento general de la serie.', pista: '¿Largo o corto plazo?', tipo: 'multiple' },
    { id: 'ej-eco-u4-04', enunciado: 'La estacionalidad se repite cada:', opciones: ['Año (o período fijo)', 'Mes', 'Semana', 'Día'], respuestaCorrecta: 'Año (o período fijo)', explicacion: 'Es un patrón que se repite en intervalos regulares (ej: ventas navideñas).', pista: '¿Cada cuánto se repite?', tipo: 'multiple' },
    { id: 'ej-eco-u4-05', enunciado: 'El componente irregular de una serie de tiempo es:', opciones: ['Aleatorio e impredecible', 'La tendencia', 'La estacionalidad', 'El ciclo'], respuestaCorrecta: 'Aleatorio e impredecible', explicacion: 'Son eventos no sistemáticos.', pista: '¿Se puede predecir?', tipo: 'multiple' },
    { id: 'ej-eco-u4-06', enunciado: 'Si el pronóstico es 100 y el intervalo es [90, 110], ¿qué significa?', opciones: ['Con cierto nivel de confianza, el valor futuro estará entre 90 y 110', 'El valor será exactamente 100', 'El valor es incierto', 'No se puede saber'], respuestaCorrecta: 'Con cierto nivel de confianza, el valor futuro estará entre 90 y 110', explicacion: 'El intervalo refleja la incertidumbre.', pista: '¿Qué indica el rango?', tipo: 'multiple' },
    { id: 'ej-eco-u4-07', enunciado: 'Un modelo de pronóstico es útil si:', opciones: ['Tiene buena capacidad predictiva y validez económica', 'Tiene R² alto solamente', 'Tiene muchos parámetros', 'Es complejo'], respuestaCorrecta: 'Tiene buena capacidad predictiva y validez económica', explicacion: 'Debe ser estadísticamente válido y económicamente interpretable.', pista: '¿Qué dos aspectos importan?', tipo: 'multiple' },

    // Unidad 5 (5)
    { id: 'ej-eco-u5-01', enunciado: '¿Qué software es común en econometría?', opciones: ['EViews', 'Photoshop', 'AutoCAD', 'Excel solamente'], respuestaCorrecta: 'EViews', explicacion: 'EViews es un paquete especializado en econometría [citation:1].', pista: '¿Cuál es específico?', tipo: 'multiple' },
    { id: 'ej-eco-u5-02', enunciado: 'El output de un modelo econométrico incluye:', opciones: ['Coeficientes, errores estándar, R², pruebas', 'Solo los coeficientes', 'Solo el R²', 'Solo la media'], respuestaCorrecta: 'Coeficientes, errores estándar, R², pruebas', explicacion: 'El output completo permite evaluar el modelo.', pista: '¿Qué información se necesita?', tipo: 'multiple' },
    { id: 'ej-eco-u5-03', enunciado: 'Un modelo con R² alto pero variables no significativas puede indicar:', opciones: ['Multicolinealidad', 'Homocedasticidad', 'Buen modelo', 'Normalidad'], respuestaCorrecta: 'Multicolinealidad', explicacion: 'La multicolinealidad infla los errores estándar [citation:10].', pista: '¿Qué problema causa esto?', tipo: 'multiple' },
    { id: 'ej-eco-u5-04', enunciado: 'La validez económica de un modelo se refiere a:', opciones: ['Que los signos de los coeficientes tengan sentido teórico', 'Que el R² sea alto', 'Que la muestra sea grande', 'Que el software funcione'], respuestaCorrecta: 'Que los signos de los coeficientes tengan sentido teórico', explicacion: 'Un modelo debe ser coherente con la teoría económica.', pista: '¿Qué debe coincidir con la teoría?', tipo: 'multiple' },
    { id: 'ej-eco-u5-05', enunciado: 'Antes de estimar un modelo, es recomendable:', opciones: ['Analizar la teoría y los datos', 'Estimar directamente', 'Ignorar los supuestos', 'Usar cualquier variable'], respuestaCorrecta: 'Analizar la teoría y los datos', explicacion: 'La especificación del modelo debe basarse en teoría económica.', pista: '¿Qué se hace primero?', tipo: 'multiple' },
  ],

  examenes: [
    {
      id: 'exam-eco-201-01',
      titulo: 'Examen Parcial - Econometría (Regresión Simple y Múltiple)',
      descripcion: 'Evaluación de los temas 1 y 2: MRLS, MRLM, MCO e inferencia.',
      duracionMinutos: 60,
      preguntas: [
        { id: 'ex-eco-201-01-p1', enunciado: 'Explique qué es el método de Mínimos Cuadrados Ordinarios (MCO) y cuál es su objetivo principal.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'MCO es un método de estimación que busca encontrar los parámetros (β₀ y β₁) que minimizan la suma de los cuadrados de los residuos (la diferencia entre los valores observados y los estimados). Su objetivo es obtener la recta que mejor se ajuste a los datos.' },
        { id: 'ex-eco-201-01-p2', enunciado: 'Se tiene el siguiente modelo de regresión simple: Y = β₀ + β₁X + ε. Los datos son: X: 1, 2, 3, 4; Y: 2, 4, 5, 8. Calcule manualmente β₁ y β₀ usando las fórmulas de MCO.', tipo: 'practica', puntaje: 20, operaciones: ['X = [1, 2, 3, 4]', 'Y = [2, 4, 5, 8]'], solucionPasos: [{ titulo: 'Paso 1: Calcular medias', contenido: 'X̄ = (1+2+3+4)/4 = 2.5; Ȳ = (2+4+5+8)/4 = 4.75' }, { titulo: 'Paso 2: Calcular β₁', contenido: 'β₁ = Σ[(Xᵢ-2.5)(Yᵢ-4.75)] / Σ(Xᵢ-2.5)². Numerador: (-1.5)(-2.75) + (-0.5)(-0.75) + (0.5)(0.25) + (1.5)(3.25) = 4.125 + 0.375 + 0.125 + 4.875 = 9.5. Denominador: 2.25 + 0.25 + 0.25 + 2.25 = 5. β₁ = 9.5/5 = 1.9' }, { titulo: 'Paso 3: Calcular β₀', contenido: 'β₀ = Ȳ - β₁X̄ = 4.75 - 1.9(2.5) = 4.75 - 4.75 = 0' }, { titulo: 'Paso 4: Interpretar', contenido: 'El modelo estimado es Ŷ = 0 + 1.9X. Por cada aumento de 1 en X, Y aumenta en 1.9.' }] },
        { id: 'ex-eco-201-01-p3', enunciado: 'En un modelo de regresión múltiple, el R² ajustado es 0.85 y el R² es 0.88. El modelo tiene 4 variables explicativas y 50 observaciones. ¿Qué puede concluir sobre el ajuste del modelo?', tipo: 'practica', puntaje: 20, operaciones: ['R² = 0.88', 'R² ajustado = 0.85', 'k = 4', 'n = 50'], solucionPasos: [{ titulo: 'Paso 1: Interpretar R²', contenido: 'El modelo explica el 88% de la variación de Y.' }, { titulo: 'Paso 2: Interpretar R² ajustado', contenido: 'El R² ajustado (0.85) es ligeramente menor, lo cual es normal porque penaliza la inclusión de variables. Sigue siendo alto.' }, { titulo: 'Paso 3: Concluir', contenido: 'El modelo tiene un buen ajuste. La diferencia entre R² y R² ajustado no es grande, lo que sugiere que las variables incluidas son relevantes.' }] },
      ],
    },
    {
      id: 'exam-eco-201-02',
      titulo: 'Examen Final - Econometría (Supuestos y Pronóstico)',
      descripcion: 'Evaluación de los temas 3, 4 y 5: verificación de supuestos, pronóstico y aplicaciones.',
      duracionMinutos: 90,
      preguntas: [
        { id: 'ex-eco-201-02-p1', enunciado: 'Explique qué es la heterocedasticidad, cómo se detecta y qué consecuencias tiene sobre los estimadores MCO.', tipo: 'teorica', puntaje: 10, respuestaModelo: 'La heterocedasticidad es la violación del supuesto de varianza constante de los errores. Se detecta gráficamente (residuos vs. valores ajustados) o con pruebas formales como la de White. Consecuencia: los estimadores MCO siguen siendo insesgados, pero sus errores estándar son incorrectos, por lo que las pruebas t y F no son válidas.' },
        { id: 'ex-eco-201-02-p2', enunciado: 'Se estimó un modelo de regresión y se obtuvo un estadístico Durbin-Watson de 0.5. ¿Qué indica este resultado? ¿Qué haría para corregir el problema?', tipo: 'practica', puntaje: 20, operaciones: ['DW = 0.5'], solucionPasos: [{ titulo: 'Paso 1: Interpretar DW', contenido: 'DW ≈ 0.5 está muy por debajo de 2, lo que indica una fuerte autocorrelación positiva de primer orden en los errores.' }, { titulo: 'Paso 2: Consecuencias', contenido: 'Los estimadores MCO son insesgados pero ineficientes. Las pruebas de significación no son confiables.' }, { titulo: 'Paso 3: Corrección', contenido: 'Se puede usar el método de Cochrane-Orcutt o Mínimos Cuadrados Generalizados (MCG) para corregir la autocorrelación.' }] },
        { id: 'ex-eco-201-02-p3', enunciado: 'Un modelo de regresión estimado es: Ventas = 100 + 2.5(Publicidad). Si se planea invertir $50 en publicidad, ¿cuál es el pronóstico de ventas? Si el error estándar del pronóstico es 10, construya un intervalo de predicción aproximado al 95% (use t ≈ 2).', tipo: 'practica', puntaje: 20, operaciones: ['Modelo: Ventas = 100 + 2.5(Publicidad)', 'Publicidad = 50', 'EE pronóstico = 10'], solucionPasos: [{ titulo: 'Paso 1: Pronóstico puntual', contenido: 'Ŷ = 100 + 2.5(50) = 100 + 125 = 225' }, { titulo: 'Paso 2: Margen de error', contenido: 't × EE ≈ 2 × 10 = 20' }, { titulo: 'Paso 3: Intervalo', contenido: '[225 - 20, 225 + 20] = [205, 245]' }, { titulo: 'Paso 4: Interpretar', contenido: 'Con 95% de confianza, las ventas futuras estarán entre 205 y 245.' }] },
      ],
    },
    {
      id: 'exam-eco-201-03',
      titulo: 'Examen de Práctica - Diagnóstico de Modelos',
      descripcion: 'Ejercicios avanzados de detección y corrección de problemas en modelos econométricos.',
      duracionMinutos: 120,
      preguntas: [
        { id: 'ex-eco-201-03-p1', enunciado: 'Un investigador estima un modelo con 3 variables explicativas. La matriz de correlación muestra que r(X₁, X₂) = 0.95. ¿Qué problema hay? ¿Qué consecuencias tiene? ¿Cómo lo solucionaría?', tipo: 'practica', puntaje: 15, operaciones: ['r(X₁, X₂) = 0.95'], solucionPasos: [{ titulo: 'Paso 1: Identificar el problema', contenido: 'Hay multicolinealidad grave entre X₁ y X₂ (correlación muy alta).' }, { titulo: 'Paso 2: Consecuencias', contenido: 'Los errores estándar de los coeficientes se inflan, haciendo que las pruebas t sean no significativas aunque el modelo en conjunto pueda ser significativo.' }, { titulo: 'Paso 3: Solución', contenido: 'Eliminar una de las dos variables correlacionadas, o combinarlas en un índice, o usar técnicas como regresión de componentes principales.' }] },
        { id: 'ex-eco-201-03-p2', enunciado: 'Se aplicó la prueba de White a un modelo y se obtuvo un estadístico LM = 15.2 con 3 grados de libertad. El valor crítico de chi-cuadrado al 5% con 3 gl es 7.81. ¿Qué se concluye?', tipo: 'practica', puntaje: 15, operaciones: ['LM = 15.2', 'gl = 3', 'Valor crítico = 7.81'], solucionPasos: [{ titulo: 'Paso 1: Comparar', contenido: '15.2 > 7.81, por lo que se rechaza la hipótesis nula de homocedasticidad.' }, { titulo: 'Paso 2: Concluir', contenido: 'Hay evidencia de heterocedasticidad en el modelo.' }, { titulo: 'Paso 3: Solución', contenido: 'Usar errores estándar robustos (White) para corregir la inferencia.' }] },
        { id: 'ex-eco-201-03-p3', enunciado: 'Explique la diferencia entre un intervalo de confianza para la media de Y y un intervalo de predicción para un valor individual de Y. ¿Cuál es más amplio y por qué?', tipo: 'teorica', puntaje: 10, respuestaModelo: 'El intervalo de confianza para la media estima el valor promedio de Y para un X dado. El intervalo de predicción estima un valor individual de Y. El de predicción es más amplio porque incluye la incertidumbre adicional del error individual (ε), mientras que el de confianza solo considera la incertidumbre de la estimación de la media.' },
      ],
    },
  ],
};