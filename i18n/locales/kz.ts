export default {
  hello: 'Сәлем Әлем',
  language: {
    selectTitle: 'Тіл таңдауы',
    selectLanguage: 'Тілді таңдаңыз',
    selectDescription: 'Интерфейс тілін таңдаңыз'
  },
  home: {
    timerExamples: 'Таймер мысалдары',
    countdownDeadline: 'Мерзімге дейінгі кері санау',
    countdownTimeLimit: 'Уақыт шектеуімен кері санау',
    currentTime: 'Ағымдағы уақыт',
    expiredTimer: 'Мерзімі өткен таймер',
    warningActive: 'Белсенді ескерту',
    noWarning: 'Ескерту жоқ',
    questionExamples: 'Сұрақ мысалдары',
    singleChoiceQuestion: 'Бір жауапты сұрақ',
    multipleChoiceQuestion: 'Бірнеше жауапты сұрақ',
    questionWithAnswers: 'Жауаптары бар сұрақ',
    questionWithImage: 'Суреті бар сұрақ',
    testCreationExample: 'Сұрақ жасау мысалы',
    createQuestionForm: 'Сұрақ жасау формасы',
    jsonPreview: 'JSON алдын ала қарау',
    copyJson: 'JSON көшіру',
    questionsJson: 'Сұрақтар JSON'
  },
  timer: {
    untilDeadline: 'мерзімге дейін',
    remaining: 'қалды',
    currentTime: 'ағымдағы уақыт',
    timeRunningOut: 'Уақыт аяқталуда!',
    timeExpired: 'Уақыт аяқталды!',
    modes: {
      countdown: 'Кері санау',
      time: 'Ағымдағы уақыт'
    },
    types: {
      deadline: 'Мерзім',
      timeLimit: 'Уақыт шектеуі'
    },
    settings: {
      title: 'Таймер баптаулары',
      editTitle: 'Таймерді өңдеу',
      mode: 'Таймер режимі',
      countdownType: 'Санау түрі',
      deadline: 'Мерзім',
      deadlineHelp: 'Тест тапсырылуы керек уақыт',
      timeLimit: 'Орындау уақыты (минут)',
      timeLimitHelp: 'Тестті аяқтауға берілетін уақыт',
      warnings: 'Ескертулер',
      showWarning: 'Уақыт ескертусін көрсету',
      warningThreshold: 'Ескерту шегі (секунд)',
      displaySettings: 'Көрсету баптаулары',
      showProgress: 'Уақыт прогресс-барын көрсету',
      preview: 'Алдын ала қарау',
      timeModeInfo: 'Таймер күндізгі ағымдағы уақытты HH:MM:SS форматында көрсетеді',
      actions: {
        cancel: 'Бас тарту',
        save: 'Сақтау',
        apply: 'Қолдану',
        delete: 'Жою',
        preview: 'Алдын ала қарау'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'Оңай',
      medium: 'Орташа',
      hard: 'Қиын'
    },
    edit: {
      title: 'Сұрақ құру',
      editTitle: 'Сұрақты өңдеу',
      questionTitle: 'Сұрақ',
      questionTitlePlaceholder: 'Сұрақты енгізіңіз',
      description: 'Сипаттама',
      descriptionPlaceholder: 'Сұрақтың қосымша сипаттамасы',
      difficulty: 'Қиындық',
      selectDifficulty: 'Қиындықты таңдаңыз',
      points: 'Ұпайлар',
      image: 'Сурет',
      addImageUrl: 'URL қосу',
      answers: {
        title: 'Жауап нұсқалары',
        addAnswer: 'Жауап қосу',
        addPrompt: 'Жауап нұсқаларын қосыңыз',
        answerPlaceholder: 'Жауап',
        correctLabel: 'Дұрыс'
      },
      explanation: 'Түсіндірме',
      explanationPlaceholder: 'Дұрыс жауаптың түсіндірмесі',
      imageUpload: {
        title: 'Сурет жүктеу',
        or: 'немесе',
        cancel: 'Болдырмау',
        apply: 'Қолдану'
      },
      actions: {
        cancel: 'Болдырмау',
        save: 'Сақтау',
        create: 'Құру',
        apply: 'Қолдану',
        delete: 'Жою',
        preview: 'Алдын ала қарау'
      }
    },
    display: {
      explanation: 'Түсіндірме',
      points: 'ұпай'
    }
  },
  navigation: {
    title: 'Тест навигациясы',
    sections: 'Бөлімдер',
    questions: 'Сұрақтар',
    progress: 'Прогресс',
    finishTest: 'Тестті аяқтау',
    finishTestEarly: 'Тестті ерте аяқтау',
    finish: 'Аяқтау',
    cancel: 'Бас тарту',
    back: 'Артқа',
    confirmation: {
      title: 'Тестті аяқтауды растау',
      description: 'Тестті ерте аяқтағыңыз келетініне сенімдісіз бе? Жауапсыз сұрақтар дұрыс емес деп саналады.'
    },
    status: {
      notAnswered: 'Жауапсыз',
      answered: 'Жауапты',
      correct: 'Дұрыс',
      incorrect: 'Дұрыс емес'
    }
  },
  test: {
    edit: {
      createTitle: 'Тест құру',
      editTitle: 'Тестті өңдеу',
      basicSettings: 'Негізгі баптаулар',
      title: 'Тест тақырыбы',
      titlePlaceholder: 'Тест тақырыбын енгізіңіз',
      description: 'Сипаттама',
      descriptionPlaceholder: 'Тест сипаттамасы',
      image: 'Сурет',
      timeSettings: 'Уақыт баптаулары',
      deadline: 'Мерзім',
      timeLimit: 'Уақыт шектеуі (минут)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Тестті аяқтауға рұқсат етілген уақыт',
      randomizationSettings: 'Кездейсоқтық баптаулары',
      randomizeQuestions: 'Сұрақтар тәртібін кездейсоқтау',
      randomizeAnswers: 'Жауаптар тәртібін кездейсоқтау',
      difficultyDistribution: 'Қиындық таралуы',
      questionBank: 'Сұрақ банкі',
      addQuestion: 'Сұрақ қосу',
      filterByDifficulty: 'Қиындық бойынша сүзгі',
      searchQuestions: 'Сұрақтарды іздеу',
      selectedQuestions: 'Таңдалған сұрақтар: {count}',
      assignToSection: 'Бөлімге тағайындау',
      assign: 'Тағайындау',
      sections: 'Бөлімдер',
      addSection: 'Бөлім қосу',
      questions: 'сұрақ',
      sectionTitle: 'Бөлім тақырыбы',
      sectionTitlePlaceholder: 'Бөлім тақырыбын енгізіңіз',
      sectionDescription: 'Бөлім сипаттамасы',
      sectionDescriptionPlaceholder: 'Бөлім сипаттамасы',
      allDifficulties: 'Барлық қиындықтар',
      actions: {
        cancel: 'Бас тарту',
        save: 'Сақтау',
        apply: 'Қолдану',
        delete: 'Жою',
        preview: 'Алдын ала қарау'
      },
      errors: {
        titleRequired: 'Тест тақырыбы қажет'
      }
    },
    pass: {
      exit: 'Шығу',
      noQuestion: 'Сұрақ табылмады',
      previous: 'Алдыңғы',
      next: 'Келесі',
      finish: 'Аяқтау',
      questionProgress: '{current} / {total}'
    },
    card: {
      questions: 'сұрақ',
      minutes: 'минут',
      yourResult: 'Сіздің нәтижеңіз',
      completedAt: 'Аяқталды',
      totalPoints: 'Жалпы ұпайлар',
      estimatedTime: 'Болжалды уақыт',
      passed: 'Тапсырылды',
      failed: 'Тапсырылмады',
      attempts: 'әрекет',
      viewResult: 'Нәтижені көру',
      retake: 'Қайта тапсыру',
      start: 'Бастау',
      expired: 'Мерзімі өтті',
      today: 'Бүгін',
      tomorrow: 'Ертең',
      inDays: '{days} күннен кейін'
    }
  },
  imageUpload: {
    urlLabel: 'Сурет URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Сурет URL-ін енгізіңіз',
    invalidUrl: 'Жарамсыз сурет URL',
    urlError: 'URL-ден сурет жүктеу қатесі',
    addUrl: 'URL қосу',
    or: 'немесе',
    fileLabel: 'Файл жүктеу',
    fileHelp: 'Қолданылатын форматтар: JPG, PNG, GIF, WebP. Максималды өлшем: 5MB',
    fileRequired: 'Сурет файлын таңдаңыз',
    fileTooLarge: 'Файл тым үлкен. Максималды өлшем: {maxSize}',
    unsupportedFormat: 'Қолданылмайтын файл форматы',
    fileError: 'Файлды өңдеу қатесі',
    loadError: 'Сурет жүктеу қатесі',
    processing: 'Сурет өңделуде...',
    error: 'Қате'
  },
  result: {
    title: 'Тест нәтижесі',
    totalScore: 'Жалпы ұпай',
    percentage: 'Пайыз',
    timeSpent: 'Кеткен уақыт',
    passed: 'Тапсырылды',
    failed: 'Тапсырылмады',
    status: 'Күй',
    scoreBreakdown: 'Ұпай талдауы',
    overallProgress: 'Жалпы прогресс',
    byDifficulty: 'Қиындық бойынша',
    timeAnalysis: 'Уақыт талдауы',
    completionTime: 'Аяқтау уақыты',
    averageTimePerQuestion: 'Сұраққа орташа уақыт',
    completedAt: 'Аяқталды',
    timeLimit: 'Уақыт шектеуі',
    detailedAnswers: 'Егжей-тегжейлі жауаптар',
    question: 'Сұрақ',
    correct: 'Дұрыс',
    incorrect: 'Дұрыс емес',
    selectedAnswers: 'Таңдалған жауаптар',
    retakeTest: 'Тестті қайта тапсыру',
    shareResult: 'Нәтижені бөлісу',
    downloadCertificate: 'Сертификатты жүктеу'
  },
  leaderboard: {
    title: 'Жетекшілер кестесі',
    subtitle: 'Барлық қатысушылардың нәтижелері',
    sortBy: 'Сұрыптау',
    search: 'Іздеу',
    totalParticipants: 'Жалпы қатысушылар',
    passedCount: 'Тапсырылды',
    averageScore: 'Орташа ұпай',
    averageTime: 'Орташа уақыт'
  },
  common: {
    loading: 'Жүктелуде...',
    error: 'Қате',
    retry: 'Қайталау'
  },
  layout: {
    author: {
      withLove: 'Сүйіспеншілікпен',
      contacts: 'Байланыс'
    }
  }
} 