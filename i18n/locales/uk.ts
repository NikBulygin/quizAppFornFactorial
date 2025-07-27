export default {
  hello: 'Привіт світ',
  language: {
    selectTitle: 'Вибір мови',
    selectLanguage: 'Виберіть мову',
    selectDescription: 'Виберіть бажану мову інтерфейсу'
  },
  home: {
    timerExamples: 'Приклади таймерів',
    countdownDeadline: 'Зворотний відлік до дедлайну',
    countdownTimeLimit: 'Зворотний відлік з лімітом часу',
    currentTime: 'Поточний час',
    expiredTimer: 'Таймер що закінчився',
    warningActive: 'Активне попередження',
    noWarning: 'Без попередження',
    questionExamples: 'Приклади питань',
    singleChoiceQuestion: 'Питання з одним відповіддю',
    multipleChoiceQuestion: 'Питання з кількома відповідями',
    questionWithAnswers: 'Питання з відповідями',
    questionWithImage: 'Питання з зображенням',
    testCreationExample: 'Приклад створення питань',
    createQuestionForm: 'Форма створення питання',
    jsonPreview: 'Попередній перегляд JSON',
    copyJson: 'Копіювати JSON',
    questionsJson: 'JSON питань'
  },
  timer: {
    untilDeadline: 'до дедлайну',
    remaining: 'залишилося',
    currentTime: 'поточний час',
    timeRunningOut: 'Час закінчується!',
    timeExpired: 'Час закінчився!',
    modes: {
      countdown: 'Зворотний відлік',
      time: 'Поточний час'
    },
    types: {
      deadline: 'Дедлайн',
      timeLimit: 'Часовий ліміт'
    },
    settings: {
      title: 'Налаштування таймера',
      editTitle: 'Редагувати таймер',
      mode: 'Режим таймера',
      countdownType: 'Тип відліку',
      deadline: 'Дедлайн',
      deadlineHelp: 'Час ДО якого потрібно здати тест',
      timeLimit: 'Час виконання (хвилини)',
      timeLimitHelp: 'Скільки часу дається на виконання тесту',
      warnings: 'Попередження',
      showWarning: 'Показувати попередження про час',
      warningThreshold: 'Поріг попередження (секунди)',
      displaySettings: 'Налаштування відображення',
      showProgress: 'Відображати прогрес-бар часу',
      preview: 'Попередній перегляд',
      timeModeInfo: 'Таймер буде показувати поточний час дня у форматі HH:MM:SS',
      actions: {
        cancel: 'Скасувати',
        save: 'Зберегти',
        apply: 'Застосувати',
        delete: 'Видалити',
        preview: 'Попередній перегляд'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'Легкий',
      medium: 'Середній',
      hard: 'Складний'
    },
    edit: {
      title: 'Створити питання',
      editTitle: 'Редагувати питання',
      questionTitle: 'Питання',
      questionTitlePlaceholder: 'Введіть питання',
      description: 'Опис',
      descriptionPlaceholder: 'Додатковий опис питання',
      difficulty: 'Складність',
      selectDifficulty: 'Виберіть складність',
      points: 'Бали',
      image: 'Зображення',
      addImageUrl: 'Додати URL',
      answers: {
        title: 'Варіанти відповідей',
        addAnswer: 'Додати відповідь',
        addPrompt: 'Додайте варіанти відповідей',
        answerPlaceholder: 'Відповідь',
        correctLabel: 'Правильна'
      },
      explanation: 'Пояснення',
      explanationPlaceholder: 'Пояснення правильної відповіді',
      imageUpload: {
        title: 'Завантажити зображення',
        or: 'або',
        cancel: 'Скасувати',
        apply: 'Застосувати'
      },
      actions: {
        cancel: 'Скасувати',
        save: 'Зберегти',
        create: 'Створити',
        apply: 'Застосувати',
        delete: 'Видалити',
        preview: 'Попередній перегляд'
      }
    },
    display: {
      explanation: 'Пояснення',
      points: 'балів'
    }
  },
  navigation: {
    title: 'Навігація по тесту',
    sections: 'Розділи',
    questions: 'Питання',
    progress: 'Прогрес',
    finishTest: 'Завершити тест',
    finishTestEarly: 'Завершити тест раніше',
    finish: 'Завершити',
    cancel: 'Скасувати',
    back: 'Назад',
    confirmation: {
      title: 'Підтвердження завершення тесту',
      description: 'Ви точно хочете завершити тест раніше? Невідповіді на питання будуть зараховані як неправильні.'
    },
    status: {
      notAnswered: 'Не відповідало',
      answered: 'Відповідало',
      correct: 'Правильно',
      incorrect: 'Неправильно'
    }
  },
  test: {
    edit: {
      createTitle: 'Створити тест',
      editTitle: 'Редагувати тест',
      basicSettings: 'Основні налаштування',
      title: 'Назва тесту',
      titlePlaceholder: 'Введіть назву тесту',
      description: 'Опис',
      descriptionPlaceholder: 'Опис тесту',
      image: 'Зображення',
      timeSettings: 'Налаштування часу',
      deadline: 'Дедлайн',
      timeLimit: 'Час проходження (хвилини)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Час, відведений на проходження тесту',
      randomizationSettings: 'Налаштування рандомізації',
      randomizeQuestions: 'Рандомізувати порядок питань',
      randomizeAnswers: 'Рандомізувати порядок відповідей',
      difficultyDistribution: 'Розподіл за складністю',
      totalPercentage: 'Загальний відсоток',
      resetDistribution: 'Скинути розподіл',
      questionBank: 'Банк питань',
      addQuestion: 'Додати питання',
      filterByDifficulty: 'Фільтр за складністю',
      searchQuestions: 'Пошук питань',
      selectedQuestions: 'Обрано питань: {count}',
      assignToSection: 'Призначити в розділ',
      assign: 'Призначити',
      sections: 'Розділи',
      addSection: 'Додати розділ',
      questions: 'питань',
      sectionTitle: 'Назва розділу',
      sectionTitlePlaceholder: 'Введіть назву розділу',
      sectionDescription: 'Опис розділу',
      sectionDescriptionPlaceholder: 'Опис розділу',
      allDifficulties: 'Всі складності',
      actions: {
        cancel: 'Скасувати',
        save: 'Зберегти',
        apply: 'Застосувати',
        delete: 'Видалити',
        preview: 'Попередній перегляд'
      },
      errors: {
        titleRequired: 'Назва тесту обов\'язкова'
      }
    },
    pass: {
      exit: 'Вийти',
      noQuestion: 'Питання не знайдено',
      previous: 'Назад',
      next: 'Далі',
      finish: 'Завершити',
      questionProgress: '{current} з {total}'
    },
    card: {
      questions: 'питань',
      minutes: 'хвилин',
      yourResult: 'Ваш результат',
      completedAt: 'Завершено',
      totalPoints: 'Загальні бали',
      estimatedTime: 'Орієнтовний час',
      passed: 'Складено',
      failed: 'Не складено',
      attempts: 'спроб',
      viewResult: 'Переглянути результат',
      retake: 'Повторити',
      start: 'Почати',
      expired: 'Закінчився',
      today: 'Сьогодні',
      tomorrow: 'Завтра',
      inDays: 'через {days} днів'
    }
  },
  imageUpload: {
    urlLabel: 'URL зображення',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Введіть URL зображення',
    invalidUrl: 'Невірний URL зображення',
    urlError: 'Помилка завантаження зображення за URL',
    addUrl: 'Додати URL',
    or: 'або',
    fileLabel: 'Завантажити файл',
    fileHelp: 'Підтримувані формати: JPG, PNG, GIF, WebP. Максимальний розмір: 5MB',
    fileRequired: 'Виберіть файл зображення',
    fileTooLarge: 'Файл занадто великий. Максимальний розмір: {maxSize}',
    unsupportedFormat: 'Непідтримуваний формат файлу',
    fileError: 'Помилка обробки файлу',
    loadError: 'Помилка завантаження зображення',
    processing: 'Обробка зображення...',
    error: 'Помилка'
  },
  result: {
    title: 'Результат тесту',
    totalScore: 'Загальна оцінка',
    percentage: 'Відсоток',
    timeSpent: 'Витрачений час',
    passed: 'Складено',
    failed: 'Не складено',
    status: 'Статус',
    scoreBreakdown: 'Розбивка оцінки',
    overallProgress: 'Загальний прогрес',
    byDifficulty: 'За складністю',
    timeAnalysis: 'Аналіз часу',
    completionTime: 'Час завершення',
    averageTimePerQuestion: 'Середній час на питання',
    completedAt: 'Завершено',
    timeLimit: 'Часовий ліміт',
    detailedAnswers: 'Детальні відповіді',
    question: 'Питання',
    correct: 'Правильно',
    incorrect: 'Неправильно',
    selectedAnswers: 'Обрані відповіді',
    retakeTest: 'Повторити тест',
    shareResult: 'Поділитися результатом',
    downloadCertificate: 'Завантажити сертифікат'
  },
  leaderboard: {
    title: 'Таблиця лідерів',
    subtitle: 'Результати всіх учасників',
    sortBy: 'Сортувати за',
    search: 'Пошук',
    totalParticipants: 'Всього учасників',
    passedCount: 'Складено',
    averageScore: 'Середня оцінка',
    averageTime: 'Середній час'
  },
  common: {
    loading: 'Завантаження...',
    error: 'Помилка',
    retry: 'Повторити'
  },
  layout: {
    author: {
      withLove: 'З любов\'ю',
      contacts: 'Контакти'
    }
  }
} 