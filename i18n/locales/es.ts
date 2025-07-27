export default {
  hello: 'Hola mundo',
  language: {
    selectTitle: 'Seleccionar idioma',
    selectLanguage: 'Selecciona idioma',
    selectDescription: 'Selecciona el idioma preferido de la interfaz'
  },
  home: {
    description: 'Crea pruebas atractivas y verifica conocimientos con una plataforma de aprendizaje moderna',
    createTest: 'Crear Prueba',
    takeTest: 'Tomar Prueba',
    create: {
      title: 'Crear',
      description: 'Crea fácilmente pruebas con varios tipos de preguntas y configuraciones'
    },
    share: {
      title: 'Compartir',
      description: 'Publica pruebas y compártelas con colegas y estudiantes'
    },
    analyze: {
      title: 'Analizar',
      description: 'Obtén estadísticas detalladas y análisis de resultados'
    },
    seo: {
      title: 'QuizApp - Crear y Tomar Pruebas',
      description: 'Plataforma moderna para crear y tomar pruebas educativas. Crea pruebas atractivas y verifica conocimientos.'
    },
    timerExamples: 'Ejemplos de temporizadores',
    countdownDeadline: 'Cuenta regresiva hasta la fecha límite',
    countdownTimeLimit: 'Cuenta regresiva con límite de tiempo',
    currentTime: 'Hora actual',
    expiredTimer: 'Temporizador expirado',
    warningActive: 'Advertencia activa',
    noWarning: 'Sin advertencia',
    questionExamples: 'Ejemplos de preguntas',
    singleChoiceQuestion: 'Pregunta de opción única',
    multipleChoiceQuestion: 'Pregunta de opción múltiple',
    questionWithAnswers: 'Pregunta con respuestas',
    questionWithImage: 'Pregunta con imagen',
    testCreationExample: 'Ejemplo de creación de preguntas',
    createQuestionForm: 'Formulario de creación de pregunta',
    jsonPreview: 'Vista previa JSON',
    copyJson: 'Copiar JSON',
    questionsJson: 'JSON de preguntas'
  },
  timer: {
    untilDeadline: 'hasta la fecha límite',
    remaining: 'restante',
    currentTime: 'hora actual',
    timeRunningOut: '¡Se está agotando el tiempo!',
    timeExpired: '¡Tiempo agotado!',
    modes: {
      countdown: 'Cuenta regresiva',
      time: 'Hora actual'
    },
    types: {
      deadline: 'Fecha límite',
      timeLimit: 'Límite de tiempo'
    },
    settings: {
      title: 'Configuración del temporizador',
      editTitle: 'Editar temporizador',
      mode: 'Modo del temporizador',
      countdownType: 'Tipo de cuenta regresiva',
      deadline: 'Fecha límite',
      deadlineHelp: 'Tiempo HASTA el cual se debe entregar la prueba',
      timeLimit: 'Tiempo de ejecución (minutos)',
      timeLimitHelp: 'Cuánto tiempo se da para completar la prueba',
      warnings: 'Advertencias',
      showWarning: 'Mostrar advertencia de tiempo',
      warningThreshold: 'Umbral de advertencia (segundos)',
      displaySettings: 'Configuración de visualización',
      showProgress: 'Mostrar barra de progreso de tiempo',
      preview: 'Vista previa',
      timeModeInfo: 'El temporizador mostrará la hora actual del día en formato HH:MM:SS',
      actions: {
        cancel: 'Cancelar',
        save: 'Guardar',
        apply: 'Aplicar',
        delete: 'Eliminar',
        preview: 'Vista previa'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'Fácil',
      medium: 'Medio',
      hard: 'Difícil'
    },
    edit: {
      title: 'Crear pregunta',
      editTitle: 'Editar pregunta',
      questionTitle: 'Pregunta',
      questionTitlePlaceholder: 'Ingresa la pregunta',
      description: 'Descripción',
      descriptionPlaceholder: 'Descripción adicional de la pregunta',
      difficulty: 'Dificultad',
      selectDifficulty: 'Selecciona la dificultad',
      points: 'Puntos',
      image: 'Imagen',
      addImageUrl: 'Agregar URL',
      answers: {
        title: 'Opciones de respuesta',
        addAnswer: 'Agregar respuesta',
        addPrompt: 'Agrega opciones de respuesta',
        answerPlaceholder: 'Respuesta',
        correctLabel: 'Correcta'
      },
      explanation: 'Explicación',
      explanationPlaceholder: 'Explicación de la respuesta correcta',
      imageUpload: {
        title: 'Subir imagen',
        or: 'o',
        cancel: 'Cancelar',
        apply: 'Aplicar'
      },
      actions: {
        cancel: 'Cancelar',
        save: 'Guardar',
        create: 'Crear',
        apply: 'Aplicar',
        delete: 'Eliminar',
        preview: 'Vista previa'
      }
    },
    display: {
      explanation: 'Explicación',
      points: 'puntos'
    }
  },
  navigation: {
    title: 'Navegación del Test',
    sections: 'Secciones',
    questions: 'Preguntas',
    progress: 'Progreso',
    finishTest: 'Finalizar Test',
    finishTestEarly: 'Finalizar Test Antes',
    finish: 'Finalizar',
    cancel: 'Cancelar',
    back: 'Atrás',
    confirmation: {
      title: 'Confirmar Finalización del Test',
      description: '¿Estás seguro de que quieres finalizar el test antes? Las preguntas sin responder se contarán como incorrectas.'
    },
    status: {
      notAnswered: 'No respondida',
      answered: 'Respondida',
      correct: 'Correcta',
      incorrect: 'Incorrecta'
    }
  },
  test: {
    edit: {
      createTitle: 'Crear Test',
      editTitle: 'Editar Test',
      basicSettings: 'Configuración Básica',
      title: 'Título del Test',
      titlePlaceholder: 'Ingrese el título del test',
      description: 'Descripción',
      descriptionPlaceholder: 'Descripción del test',
      tags: 'Etiquetas',
      tagsPlaceholder: 'matemáticas, álgebra, ecuaciones',
      tagsHelp: 'Ingrese etiquetas separadas por comas para categorizar el test',
      image: 'Imagen',
      timeSettings: 'Configuración de Tiempo',
      deadline: 'Fecha límite',
      timeLimit: 'Límite de tiempo (minutos)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Tiempo permitido para completar el test',
      randomizationSettings: 'Configuración de Aleatorización',
      randomizeQuestions: 'Aleatorizar orden de preguntas',
      randomizeAnswers: 'Aleatorizar orden de respuestas',
      difficultyDistribution: 'Distribución de Dificultad',
      totalPercentage: 'Porcentaje Total',
      resetDistribution: 'Restablecer Distribución',
      questionBank: 'Banco de Preguntas',
      addQuestion: 'Agregar Pregunta',
      filterByDifficulty: 'Filtrar por dificultad',
      searchQuestions: 'Buscar preguntas',
      selectedQuestions: 'Preguntas seleccionadas: {count}',
      assignToSection: 'Asignar a sección',
      assign: 'Asignar',
      sections: 'Secciones',
      addSection: 'Agregar Sección',
      editSection: 'Editar Sección',
      questions: 'preguntas',
      sectionTitle: 'Título de Sección',
      sectionTitlePlaceholder: 'Ingrese el título de la sección',
      sectionDescription: 'Descripción de Sección',
      sectionDescriptionPlaceholder: 'Descripción de la sección',
      sectionQuestionCount: 'Cantidad de Preguntas',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: 'Todas las dificultades',
      actions: {
        cancel: 'Cancelar',
        save: 'Guardar',
        apply: 'Aplicar',
        delete: 'Eliminar',
        preview: 'Vista previa'
      },
      errors: {
        titleRequired: 'El título del test es requerido',
        fileRequired: 'Por favor seleccione un archivo para importar',
        invalidFileType: 'Tipo de archivo inválido. Por favor seleccione un archivo JSON'
      },
      importTest: 'Importar Test',
      importTestDescription: 'Importe un test desde un archivo JSON o pegue la estructura JSON',
      importJson: 'JSON del Test',
      importJsonPlaceholder: 'Pegue la estructura JSON del test...',
      importText: 'Texto',
      importFile: 'Archivo',
      selectFile: 'Seleccionar Archivo',
      selectedFile: 'Archivo Seleccionado'
    },
    pass: {
      loading: 'Cargando test...',
      restoring: 'Restaurando progreso...',
      error: 'Error al cargar el test',
      retry: 'Intentar de nuevo',
      backToSearch: 'Volver a búsqueda',
      exit: 'Salir',
      exitConfirmation: '¿Está seguro de que quiere salir? Todo el progreso se perderá.',
      noQuestion: 'Pregunta no encontrada',
      previous: 'Anterior',
      next: 'Siguiente',
      finish: 'Finalizar test',
      questionProgress: 'Pregunta {current} de {total}',
      answered: 'respondidas',
      time: 'tiempo',
      testNotFound: 'Test no encontrado',
      instructions: 'Instrucciones',
      instruction1: 'Lea las preguntas cuidadosamente',
      instruction1Desc: 'Asegúrese de entender la pregunta antes de elegir una respuesta',
      instruction2: 'Cuide su tiempo',
      instruction2Desc: 'Tiene tiempo limitado para completar el test',
      instruction3: 'El progreso se guarda automáticamente',
      instruction3Desc: 'Sus respuestas se guardan cada 5 minutos'
    },
    result: {
      title: 'Resultados del Test',
      loading: 'Cargando resultados...',
      error: 'Error al cargar resultados',
      retry: 'Intentar de nuevo',
      notFound: 'Resultados del test no encontrados',
      loadError: 'No se pudieron cargar los resultados',
      testLoadError: 'No se pudieron cargar los datos del test',
      percentage: 'Porcentaje de completado',
      score: 'Puntuación',
      timeSpent: 'Tiempo empleado',
      passed: '¡Test aprobado!',
      failed: 'Test reprobado',
      congratulations: '¡Felicitaciones! Ha aprobado el test exitosamente.',
      notEnoughPoints: 'Desafortunadamente, no obtuvo suficientes puntos para aprobar el test.',
      detailedAnswers: 'Respuestas detalladas',
      findOtherTests: 'Encontrar otros tests',
      myTests: 'Mis tests',
      totalScore: 'Puntuación total',
      status: 'Estado',
      scoreBreakdown: 'Desglose de puntuación',
      overallProgress: 'Progreso general',
      byDifficulty: 'Por dificultad',
      timeAnalysis: 'Análisis de tiempo',
      completionTime: 'Tiempo de completado',
      averageTimePerQuestion: 'Tiempo promedio por pregunta',
      completedAt: 'Completado en',
      timeLimit: 'Límite de tiempo',
      question: 'Pregunta',
      correct: 'Correcto',
      incorrect: 'Incorrecto',
      selectedAnswers: 'Respuestas seleccionadas',
      retakeTest: 'Repetir test',
      shareResult: 'Compartir resultado',
      downloadCertificate: 'Descargar certificado'
    },
    card: {
      questions: 'preguntas',
      minutes: 'minutos',
      yourResult: 'Su resultado',
      completedAt: 'Completado en',
      totalPoints: 'Puntos totales',
      estimatedTime: 'Tiempo estimado',
      passed: 'Aprobado',
      failed: 'Reprobado',
      attempts: 'intentos',
      viewResult: 'Ver resultado',
      retake: 'Repetir',
      start: 'Comenzar',
      expired: 'Expirado',
      today: 'Hoy',
      tomorrow: 'Mañana',
      inDays: 'en {days} días'
    }
  },
  imageUpload: {
    urlLabel: 'URL de imagen',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Ingresa la URL de la imagen',
    invalidUrl: 'URL de imagen inválida',
    urlError: 'Error al cargar imagen desde URL',
    addUrl: 'Agregar URL',
    or: 'o',
    fileLabel: 'Subir archivo',
    fileHelp: 'Formatos soportados: JPG, PNG, GIF, WebP. Tamaño máximo: 5MB',
    fileRequired: 'Selecciona archivo de imagen',
    fileTooLarge: 'Archivo demasiado grande. Tamaño máximo: {maxSize}',
    unsupportedFormat: 'Formato de archivo no soportado',
    fileError: 'Error al procesar archivo',
    loadError: 'Error al cargar imagen',
    processing: 'Procesando imagen...',
    error: 'Error'
  },
  result: {
    title: 'Resultado del test',
    totalScore: 'Puntuación total',
    percentage: 'Porcentaje',
    timeSpent: 'Tiempo empleado',
    passed: 'Aprobado',
    failed: 'Reprobado',
    status: 'Estado',
    scoreBreakdown: 'Desglose de puntuación',
    overallProgress: 'Progreso general',
    byDifficulty: 'Por dificultad',
    timeAnalysis: 'Análisis de tiempo',
    completionTime: 'Tiempo de finalización',
    averageTimePerQuestion: 'Tiempo promedio por pregunta',
    completedAt: 'Completado el',
    timeLimit: 'Límite de tiempo',
    detailedAnswers: 'Respuestas detalladas',
    question: 'Pregunta',
    correct: 'Correcta',
    incorrect: 'Incorrecta',
    selectedAnswers: 'Respuestas seleccionadas',
    retakeTest: 'Repetir test',
    shareResult: 'Compartir resultado',
    downloadCertificate: 'Descargar certificado'
  },
  leaderboard: {
    title: 'Tabla de clasificación',
    subtitle: 'Resultados de todos los participantes',
    sortBy: 'Ordenar por',
    search: 'Buscar',
    totalParticipants: 'Total de participantes',
    passedCount: 'Aprobados',
    averageScore: 'Puntuación promedio',
    averageTime: 'Tiempo promedio'
  },
  common: {
    loading: 'Cargando...',
    error: 'Error',
    retry: 'Reintentar'
  },
  layout: {
    author: {
      withLove: 'Con amor',
      name: 'Bulygin Nikita',
      contacts: 'Contactos del Autor',
      contactsDescription: 'Contáctame de la manera más conveniente',
      copy: 'Copiar'
    }
  },
  auth: {
    signIn: 'Iniciar sesión',
    signOut: 'Cerrar sesión',
    profile: 'Perfil',
    myProfile: 'Mi Perfil',
    userProfile: 'Perfil de Usuario',
    notAuthenticated: 'Autenticación requerida',
    notAuthenticatedDescription: 'Por favor inicia sesión para continuar',
    userNotFound: 'Usuario no encontrado',
    userNotFoundDescription: 'El usuario con el ID especificado no existe'
  },
  user: {
    profile: {
      title: 'Perfil',
      information: 'Información del Perfil',
      statistics: 'Estadísticas',
      actions: 'Acciones',
      editProfile: 'Editar Perfil',
      totalQuizzes: 'Total de Quiz',
      completedQuizzes: 'Completados',
      averageScore: 'Puntuación Promedio',
      registeredAt: 'Registrado',
      noName: 'Sin Nombre'
    }
  }
} 