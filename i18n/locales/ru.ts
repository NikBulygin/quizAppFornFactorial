export default {
  hello: 'Привет мир',
  language: {
    selectTitle: 'Выбор языка',
    selectLanguage: 'Выберите язык',
    selectDescription: 'Выберите предпочитаемый язык интерфейса'
  },
  home: {
    timerExamples: 'Примеры таймеров',
    countdownDeadline: 'Обратный отсчет до дедлайна',
    countdownTimeLimit: 'Обратный отсчет с лимитом времени',
    currentTime: 'Текущее время',
    expiredTimer: 'Истекший таймер',
    warningActive: 'Активное предупреждение',
    noWarning: 'Без предупреждения',
    questionExamples: 'Примеры вопросов',
    singleChoiceQuestion: 'Вопрос с одним ответом',
    multipleChoiceQuestion: 'Вопрос с несколькими ответами',
    questionWithAnswers: 'Вопрос с ответами',
    questionWithImage: 'Вопрос с изображением',
    testCreationExample: 'Пример создания вопросов',
    createQuestionForm: 'Форма создания вопроса',
    jsonPreview: 'Предварительный просмотр JSON',
    copyJson: 'Копировать JSON',
    questionsJson: 'JSON вопросов'
  },
  timer: {
    untilDeadline: 'до дедлайна',
    remaining: 'осталось',
    currentTime: 'текущее время',
    timeRunningOut: 'Время истекает!',
    timeExpired: 'Время истекло!',
    modes: {
      countdown: 'Обратный отсчет',
      time: 'Текущее время'
    },
    types: {
      deadline: 'Дедлайн',
      timeLimit: 'Временной лимит'
    },
    settings: {
      title: 'Настройки таймера',
      editTitle: 'Редактировать таймер',
      mode: 'Режим таймера',
      countdownType: 'Тип отсчета',
      deadline: 'Дедлайн',
      deadlineHelp: 'Время ДО которого нужно сдать тест',
      timeLimit: 'Время выполнения (минуты)',
      timeLimitHelp: 'Сколько времени дается на выполнение теста',
      warnings: 'Предупреждения',
      showWarning: 'Показывать предупреждение о времени',
      warningThreshold: 'Порог предупреждения (секунды)',
      displaySettings: 'Настройки отображения',
      showProgress: 'Отображать прогресс-бар времени',
      preview: 'Предварительный просмотр',
      timeModeInfo: 'Таймер будет показывать текущее время дня в формате HH:MM:SS',
      actions: {
        cancel: 'Отмена',
        save: 'Сохранить',
        export: 'Экспорт',
        import: 'Импорт',
        apply: 'Применить',
        delete: 'Удалить',
        preview: 'Предварительный просмотр'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'Легкий',
      medium: 'Средний',
      hard: 'Сложный'
    },
    edit: {
      title: 'Создать вопрос',
      editTitle: 'Редактировать вопрос',
      questionTitle: 'Вопрос',
      questionTitlePlaceholder: 'Введите вопрос',
      description: 'Описание',
      descriptionPlaceholder: 'Дополнительное описание вопроса',
      difficulty: 'Сложность',
      selectDifficulty: 'Выберите сложность',
      points: 'Баллы',
      image: 'Изображение',
      addImageUrl: 'Добавить URL',
      answers: {
        title: 'Варианты ответов',
        addAnswer: 'Добавить ответ',
        addPrompt: 'Добавьте варианты ответов',
        answerPlaceholder: 'Ответ',
        correctLabel: 'Правильный'
      },
      explanation: 'Объяснение',
      explanationPlaceholder: 'Объяснение правильного ответа',
      imageUpload: {
        title: 'Загрузить изображение',
        or: 'или',
        cancel: 'Отмена',
        apply: 'Применить'
      },
      actions: {
        cancel: 'Отмена',
        save: 'Сохранить',
        create: 'Создать',
        apply: 'Применить',
        delete: 'Удалить',
        preview: 'Предварительный просмотр'
      }
    },
    display: {
      explanation: 'Объяснение',
      points: 'баллов'
    }
  },
  navigation: {
    title: 'Навигация по тесту',
    description: 'Навигация по разделам и вопросам теста',
    sections: 'Разделы',
    questions: 'Вопросы',
    progress: 'Прогресс',
    finishTest: 'Завершить тест',
    finishTestEarly: 'Завершить тест досрочно',
    finish: 'Завершить',
    cancel: 'Отмена',
    confirmation: {
      title: 'Подтверждение завершения теста',
      description: 'Вы точно хотите завершить тест досрочно? Неотвеченные вопросы будут засчитаны как неправильные.'
    },
    status: {
      notAnswered: 'Не отвечено',
      answered: 'Отвечено',
      correct: 'Правильно',
      incorrect: 'Неправильно',
      current: 'Текущий',
      legend: 'Легенда статусов'
    },
    back: 'Назад'
  },
  test: {
    edit: {
      createTitle: 'Создать тест',
      editTitle: 'Редактировать тест',
      basicSettings: 'Основные настройки',
      title: 'Название теста',
      titlePlaceholder: 'Введите название теста',
      description: 'Описание',
      descriptionPlaceholder: 'Описание теста',
      image: 'Изображение',
      timeSettings: 'Настройки времени',
      deadline: 'Дедлайн',
      timeLimit: 'Время прохождения (минуты)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Время, отведенное на прохождение теста',
      randomizationSettings: 'Настройки рандомизации',
      randomizeQuestions: 'Рандомизировать порядок вопросов',
      randomizeAnswers: 'Рандомизировать порядок ответов',
      difficultyDistribution: 'Распределение по сложности',
      totalPercentage: 'Общий процент',
      resetDistribution: 'Сбросить распределение',
      questionBank: 'Банк вопросов',
      addQuestion: 'Добавить вопрос',
      filterByDifficulty: 'Фильтр по сложности',
      searchQuestions: 'Поиск вопросов',
      selectedQuestions: 'Выбрано вопросов: {count}',
      assignToSection: 'Назначить в раздел',
      assign: 'Назначить',
      sections: 'Разделы',
      addSection: 'Добавить раздел',
      editSection: 'Редактировать раздел',
      questions: 'вопросов',
      sectionTitle: 'Название раздела',
      sectionTitlePlaceholder: 'Введите название раздела',
      sectionDescription: 'Описание раздела',
      sectionDescriptionPlaceholder: 'Описание раздела',
      allDifficulties: 'Все сложности',
      actions: {
        cancel: 'Отмена',
        save: 'Сохранить',
        apply: 'Применить',
        delete: 'Удалить',
        preview: 'Предварительный просмотр'
      },
      errors: {
        titleRequired: 'Название теста обязательно',
        fileRequired: 'Выберите файл для импорта',
        invalidFileType: 'Неверный тип файла. Выберите JSON файл'
      },
      importTest: 'Импорт теста',
      importTestDescription: 'Импортируйте тест из JSON файла или вставьте JSON структуру',
      importJson: 'JSON теста',
      importJsonPlaceholder: 'Вставьте JSON структуру теста...',
      importText: 'Текст',
      importFile: 'Файл',
      selectFile: 'Выбрать файл',
      selectedFile: 'Выбранный файл'
    },
    pass: {
      exit: 'Выйти',
      noQuestion: 'Вопрос не найден',
      previous: 'Назад',
      next: 'Далее',
      finish: 'Завершить',
      questionProgress: '{current} из {total}',
      testNotFound: 'Тест не найден',
      instructions: 'Инструкции',
      instruction1: 'Внимательно читайте вопросы',
      instruction1Desc: 'Убедитесь, что вы понимаете вопрос перед выбором ответа',
      instruction2: 'Следите за временем',
      instruction2Desc: 'У вас есть ограниченное время на прохождение теста',
      instruction3: 'Прогресс сохраняется автоматически',
      instruction3Desc: 'Ваши ответы сохраняются каждые 5 минут',
      exitConfirmation: 'Вы уверены, что хотите выйти? Весь прогресс будет потерян.'
    },
    card: {
      questions: 'вопросов',
      minutes: 'минут',
      yourResult: 'Ваш результат',
      completedAt: 'Завершено',
      totalPoints: 'Общие баллы',
      estimatedTime: 'Примерное время',
      passed: 'Сдан',
      failed: 'Не сдан',
      attempts: 'попыток',
      viewResult: 'Посмотреть результат',
      retake: 'Пересдать',
      start: 'Начать',
      expired: 'Истек',
      today: 'Сегодня',
      tomorrow: 'Завтра',
      inDays: 'через {days} дней'
    }
  },
  imageUpload: {
    urlLabel: 'URL изображения',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Введите URL изображения',
    invalidUrl: 'Неверный URL изображения',
    urlError: 'Ошибка загрузки изображения по URL',
    addUrl: 'Добавить URL',
    or: 'или',
    fileLabel: 'Загрузить файл',
    fileHelp: 'Поддерживаемые форматы: JPG, PNG, GIF, WebP. Максимальный размер: 5MB',
    fileRequired: 'Выберите файл изображения',
    fileTooLarge: 'Файл слишком большой. Максимальный размер: {maxSize}',
    unsupportedFormat: 'Неподдерживаемый формат файла',
    fileError: 'Ошибка обработки файла',
    loadError: 'Ошибка загрузки изображения',
    processing: 'Обработка изображения...',
    error: 'Ошибка'
  },
  result: {
    title: 'Результат теста',
    totalScore: 'Общий балл',
    percentage: 'Процент',
    timeSpent: 'Затраченное время',
    passed: 'Сдан',
    failed: 'Не сдан',
    status: 'Статус',
    scoreBreakdown: 'Разбор баллов',
    overallProgress: 'Общий прогресс',
    byDifficulty: 'По сложности',
    timeAnalysis: 'Анализ времени',
    completionTime: 'Время завершения',
    averageTimePerQuestion: 'Среднее время на вопрос',
    completedAt: 'Завершено',
    timeLimit: 'Временной лимит',
    detailedAnswers: 'Подробные ответы',
    question: 'Вопрос',
    correct: 'Правильно',
    incorrect: 'Неправильно',
    selectedAnswers: 'Выбранные ответы',
    retakeTest: 'Пересдать тест',
    shareResult: 'Поделиться результатом',
    downloadCertificate: 'Скачать сертификат'
  },
  leaderboard: {
    title: 'Таблица лидеров',
    subtitle: 'Результаты всех участников',
    sortBy: 'Сортировать по',
    search: 'Поиск',
    totalParticipants: 'Всего участников',
    passedCount: 'Сдано',
    averageScore: 'Средний балл',
    averageTime: 'Среднее время'
  },
  common: {
    loading: 'Загрузка...',
    error: 'Ошибка',
    retry: 'Повторить'
  },
  layout: {
    author: {
      withLove: 'С любовью',
      name: 'Булыгин Никита',
      contacts: 'Контакты автора',
      contactsDescription: 'Свяжитесь со мной любым удобным способом',
      copy: 'Копировать'
    }
  },
  auth: {
    signIn: 'Войти',
    signOut: 'Выйти',
    profile: 'Профиль',
    myProfile: 'Мой профиль',
    userProfile: 'Профиль пользователя',
    notAuthenticated: 'Необходима авторизация',
    notAuthenticatedDescription: 'Войдите в систему, чтобы продолжить',
    userNotFound: 'Пользователь не найден',
    userNotFoundDescription: 'Пользователь с указанным ID не существует'
  },
  user: {
    profile: {
      title: 'Профиль',
      information: 'Информация профиля',
      statistics: 'Статистика',
      actions: 'Действия',
      editProfile: 'Редактировать профиль',
      totalQuizzes: 'Всего тестов',
      completedQuizzes: 'Завершено',
      averageScore: 'Средний балл',
      registeredAt: 'Зарегистрирован',
      noName: 'Без имени'
    }
  }
} 