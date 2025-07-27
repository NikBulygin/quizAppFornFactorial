export default {
  hello: 'Привіт світ',
  language: {
    selectTitle: 'Вибір мови',
    selectLanguage: 'Виберіть мову',
    selectDescription: 'Виберіть бажану мову інтерфейсу'
  },
  home: {
    description: 'Створюйте захоплюючі тести та перевіряйте знання за допомогою сучасної платформи навчання',
    createTest: 'Створити тест',
    takeTest: 'Пройти тест',
    create: {
      title: 'Створювати',
      description: 'Легко створюйте тести з різними типами питань та налаштуваннями'
    },
    share: {
      title: 'Ділитися',
      description: 'Публікуйте тести та діліться ними з колегами та студентами'
    },
    analyze: {
      title: 'Аналізувати',
      description: 'Отримуйте детальну статистику та аналіз результатів'
    },
    seo: {
      title: 'QuizApp - Створювати та проходити тести',
      description: 'Сучасна платформа для створення та проходження освітніх тестів. Створюйте захоплюючі тести та перевіряйте знання.'
    },
    timerExamples: 'Приклади таймерів',
    countdownDeadline: 'Зворотний відлік до дедлайну',
    countdownTimeLimit: 'Зворотний відлік з обмеженням часу',
    currentTime: 'Поточний час',
    expiredTimer: 'Таймер закінчився',
    warningActive: 'Активне попередження',
    noWarning: 'Без попередження',
    questionExamples: 'Приклади питань',
    singleChoiceQuestion: 'Питання з одним вибором',
    multipleChoiceQuestion: 'Питання з кількома виборами',
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
      tags: 'Теги',
      tagsPlaceholder: 'математика, алгебра, рівняння',
      tagsHelp: 'Введіть теги через кому для категоризації тесту',
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
      selectedQuestions: 'Вибрано питань: {count}',
      assignToSection: 'Призначити в розділ',
      assign: 'Призначити',
      sections: 'Розділи',
      addSection: 'Додати розділ',
      editSection: 'Редагувати розділ',
      questions: 'питань',
      sectionTitle: 'Назва розділу',
      sectionTitlePlaceholder: 'Введіть назву розділу',
      sectionDescription: 'Опис розділу',
      sectionDescriptionPlaceholder: 'Опис розділу',
      sectionQuestionCount: 'Кількість питань',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: 'Всі складності',
      actions: {
        cancel: 'Скасувати',
        save: 'Зберегти',
        apply: 'Застосувати',
        delete: 'Видалити',
        preview: 'Попередній перегляд'
      },
      errors: {
        titleRequired: 'Назва тесту обов\'язкова',
        fileRequired: 'Виберіть файл для імпорту',
        invalidFileType: 'Невірний тип файлу. Виберіть JSON файл'
      },
      importTest: 'Імпорт тесту',
      importTestDescription: 'Імпортуйте тест з JSON файлу або вставте JSON структуру',
      importJson: 'JSON тесту',
      importJsonPlaceholder: 'Вставте JSON структуру тесту...',
      importText: 'Текст',
      importFile: 'Файл',
      selectFile: 'Виберіть файл',
      selectedFile: 'Вибраний файл'
    },
    pass: {
      loading: 'Завантаження тесту...',
      restoring: 'Відновлення прогресу...',
      error: 'Помилка завантаження тесту',
      retry: 'Спробувати знову',
      backToSearch: 'Назад до пошуку',
      exit: 'Вийти',
      exitConfirmation: 'Ви впевнені, що хочете вийти? Весь прогрес буде втрачено.',
      noQuestion: 'Питання не знайдено',
      previous: 'Попереднє',
      next: 'Наступне',
      finish: 'Завершити тест',
      questionProgress: 'Питання {current} з {total}',
      answered: 'відповіли',
      time: 'час',
      testNotFound: 'Тест не знайдено',
      instructions: 'Інструкції',
      instruction1: 'Уважно читайте питання',
      instruction1Desc: 'Переконайтеся, що ви розумієте питання перед вибором відповіді',
      instruction2: 'Слідкуйте за часом',
      instruction2Desc: 'У вас обмежений час для завершення тесту',
      instruction3: 'Прогрес зберігається автоматично',
      instruction3Desc: 'Ваші відповіді зберігаються кожні 5 хвилин'
    },
    result: {
      title: 'Результати тесту',
      loading: 'Завантаження результатів...',
      error: 'Помилка завантаження результатів',
      retry: 'Спробувати знову',
      notFound: 'Результати тесту не знайдено',
      loadError: 'Не вдалося завантажити результати',
      testLoadError: 'Не вдалося завантажити дані тесту',
      percentage: 'Відсоток виконання',
      score: 'Бали',
      timeSpent: 'Витрачений час',
      passed: 'Тест пройдено!',
      failed: 'Тест не пройдено',
      congratulations: 'Вітаємо! Ви успішно пройшли тест.',
      notEnoughPoints: 'На жаль, ви не набрали достатньо балів для проходження тесту.',
      detailedAnswers: 'Детальні відповіді',
      findOtherTests: 'Знайти інші тести',
      myTests: 'Мої тести',
      totalScore: 'Загальний бал',
      status: 'Статус',
      scoreBreakdown: 'Розбір балів',
      overallProgress: 'Загальний прогрес',
      byDifficulty: 'За складністю',
      timeAnalysis: 'Аналіз часу',
      completionTime: 'Час завершення',
      averageTimePerQuestion: 'Середній час на питання',
      completedAt: 'Завершено',
      timeLimit: 'Часовий ліміт',
      question: 'Питання',
      correct: 'Правильно',
      incorrect: 'Неправильно',
      selectedAnswers: 'Вибрані відповіді',
      retakeTest: 'Перескласти тест',
      shareResult: 'Поділитися результатом',
      downloadCertificate: 'Завантажити сертифікат'
    },
    card: {
      questions: 'питань',
      minutes: 'хвилин',
      yourResult: 'Ваш результат',
      completedAt: 'Завершено',
      totalPoints: 'Загальні бали',
      estimatedTime: 'Приблизний час',
      passed: 'Складено',
      failed: 'Не складено',
      attempts: 'спроб',
      viewResult: 'Переглянути результат',
      retake: 'Перескласти',
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
      name: 'Bulygin Nikita',
      contacts: 'Контакти автора',
      contactsDescription: 'Зв\'яжіться зі мною зручним способом',
      copy: 'Копіювати'
    }
  },
  auth: {
    signIn: 'Увійти',
    signOut: 'Вийти',
    profile: 'Профіль',
    myProfile: 'Мій профіль',
    userProfile: 'Профіль користувача',
    notAuthenticated: 'Потрібна автентифікація',
    notAuthenticatedDescription: 'Будь ласка, увійдіть, щоб продовжити',
    userNotFound: 'Користувача не знайдено',
    userNotFoundDescription: 'Користувача з вказаним ID не існує'
  },
  user: {
    profile: {
      title: 'Профіль',
      information: 'Інформація профілю',
      statistics: 'Статистика',
      actions: 'Дії',
      editProfile: 'Редагувати профіль',
      totalQuizzes: 'Всього вікторин',
      completedQuizzes: 'Завершено',
      averageScore: 'Середня оцінка',
      registeredAt: 'Зареєстровано',
      noName: 'Без імені'
    }
  }
} 