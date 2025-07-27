export default {
  hello: 'مرحبا بالعالم',
  language: {
    selectTitle: 'اختيار اللغة',
    selectLanguage: 'اختر اللغة',
    selectDescription: 'اختر لغة الواجهة المفضلة'
  },
  home: {
    timerExamples: 'أمثلة على المؤقتات',
    countdownDeadline: 'العد التنازلي حتى الموعد النهائي',
    countdownTimeLimit: 'العد التنازلي مع حد زمني',
    currentTime: 'الوقت الحالي',
    expiredTimer: 'مؤقت منتهي الصلاحية',
    warningActive: 'تحذير نشط',
    noWarning: 'لا يوجد تحذير',
    questionExamples: 'أمثلة على الأسئلة',
    singleChoiceQuestion: 'سؤال اختيار واحد',
    multipleChoiceQuestion: 'سؤال اختيار متعدد',
    questionWithAnswers: 'سؤال مع إجابات',
    questionWithImage: 'سؤال مع صورة',
    testCreationExample: 'مثال على إنشاء الأسئلة',
    createQuestionForm: 'نموذج إنشاء السؤال',
    jsonPreview: 'معاينة JSON',
    copyJson: 'نسخ JSON',
    questionsJson: 'JSON الأسئلة'
  },
  timer: {
    untilDeadline: 'حتى الموعد النهائي',
    remaining: 'متبقي',
    currentTime: 'الوقت الحالي',
    timeRunningOut: 'الوقت ينفد!',
    timeExpired: 'انتهى الوقت!',
    modes: {
      countdown: 'العد التنازلي',
      time: 'الوقت الحالي'
    },
    types: {
      deadline: 'الموعد النهائي',
      timeLimit: 'الحد الزمني'
    },
    settings: {
      title: 'إعدادات المؤقت',
      editTitle: 'تحرير المؤقت',
      mode: 'وضع المؤقت',
      countdownType: 'نوع العد التنازلي',
      deadline: 'الموعد النهائي',
      deadlineHelp: 'الوقت الذي يجب فيه تقديم الاختبار',
      timeLimit: 'وقت التنفيذ (دقائق)',
      timeLimitHelp: 'كم من الوقت يُعطى لإكمال الاختبار',
      warnings: 'التحذيرات',
      showWarning: 'إظهار تحذير الوقت',
      warningThreshold: 'عتبة التحذير (ثواني)',
      displaySettings: 'إعدادات العرض',
      showProgress: 'إظهار شريط تقدم الوقت',
      preview: 'معاينة',
      timeModeInfo: 'سيظهر المؤقت الوقت الحالي لليوم بتنسيق HH:MM:SS',
      actions: {
        cancel: 'إلغاء',
        save: 'حفظ',
        apply: 'تطبيق',
        delete: 'حذف',
        preview: 'معاينة'
      }
    }
  },
  question: {
    difficulties: {
      easy: 'سهل',
      medium: 'متوسط',
      hard: 'صعب'
    },
    edit: {
      title: 'إنشاء سؤال',
      editTitle: 'تحرير السؤال',
      questionTitle: 'السؤال',
      questionTitlePlaceholder: 'أدخل السؤال',
      description: 'الوصف',
      descriptionPlaceholder: 'وصف إضافي للسؤال',
      difficulty: 'الصعوبة',
      selectDifficulty: 'اختر الصعوبة',
      points: 'النقاط',
      image: 'الصورة',
      addImageUrl: 'إضافة رابط',
      answers: {
        title: 'خيارات الإجابة',
        addAnswer: 'إضافة إجابة',
        addPrompt: 'أضف خيارات الإجابة',
        answerPlaceholder: 'الإجابة',
        correctLabel: 'صحيح'
      },
      explanation: 'الشرح',
      explanationPlaceholder: 'شرح الإجابة الصحيحة',
      imageUpload: {
        title: 'رفع صورة',
        or: 'أو',
        cancel: 'إلغاء',
        apply: 'تطبيق'
      },
      actions: {
        cancel: 'إلغاء',
        save: 'حفظ',
        create: 'إنشاء',
        apply: 'تطبيق',
        delete: 'حذف',
        preview: 'معاينة'
      }
    },
    display: {
      explanation: 'الشرح',
      points: 'نقاط'
    }
  },
  navigation: {
    title: 'تنقل الاختبار',
    sections: 'الأقسام',
    questions: 'الأسئلة',
    progress: 'التقدم',
    finishTest: 'إنهاء الاختبار',
    finishTestEarly: 'إنهاء الاختبار مبكراً',
    finish: 'إنهاء',
    cancel: 'إلغاء',
    back: 'رجوع',
    confirmation: {
      title: 'تأكيد إنهاء الاختبار',
      description: 'هل أنت متأكد من أنك تريد إنهاء الاختبار مبكراً؟ الأسئلة غير المجاب عليها ستُحسب كإجابات خاطئة.'
    },
    status: {
      notAnswered: 'غير مجاب',
      answered: 'مجاب',
      correct: 'صحيح',
      incorrect: 'خطأ'
    }
  },
  test: {
    edit: {
      createTitle: 'إنشاء اختبار',
      editTitle: 'تحرير الاختبار',
      basicSettings: 'الإعدادات الأساسية',
      title: 'عنوان الاختبار',
      titlePlaceholder: 'أدخل عنوان الاختبار',
      description: 'الوصف',
      descriptionPlaceholder: 'وصف الاختبار',
      image: 'الصورة',
      timeSettings: 'إعدادات الوقت',
      deadline: 'الموعد النهائي',
      timeLimit: 'الحد الزمني (دقائق)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'الوقت المسموح لإكمال الاختبار',
      randomizationSettings: 'إعدادات العشوائية',
      randomizeQuestions: 'عشوائية ترتيب الأسئلة',
      randomizeAnswers: 'عشوائية ترتيب الإجابات',
      difficultyDistribution: 'توزيع الصعوبة',
      questionBank: 'بنك الأسئلة',
      addQuestion: 'إضافة سؤال',
      filterByDifficulty: 'تصفية حسب الصعوبة',
      searchQuestions: 'البحث في الأسئلة',
      selectedQuestions: 'الأسئلة المختارة: {count}',
      assignToSection: 'تعيين إلى قسم',
      assign: 'تعيين',
      sections: 'الأقسام',
      addSection: 'إضافة قسم',
      questions: 'أسئلة',
      sectionTitle: 'عنوان القسم',
      sectionTitlePlaceholder: 'أدخل عنوان القسم',
      sectionDescription: 'وصف القسم',
      sectionDescriptionPlaceholder: 'وصف القسم',
      allDifficulties: 'جميع الصعوبات',
      actions: {
        cancel: 'إلغاء',
        save: 'حفظ',
        apply: 'تطبيق',
        delete: 'حذف',
        preview: 'معاينة'
      },
      errors: {
        titleRequired: 'عنوان الاختبار مطلوب'
      }
    },
    pass: {
      exit: 'خروج',
      noQuestion: 'لم يتم العثور على السؤال',
      previous: 'السابق',
      next: 'التالي',
      finish: 'إنهاء',
      questionProgress: '{current} من {total}'
    },
    card: {
      questions: 'أسئلة',
      minutes: 'دقائق',
      yourResult: 'نتيجتك',
      completedAt: 'مكتمل في',
      totalPoints: 'إجمالي النقاط',
      estimatedTime: 'الوقت المقدر',
      passed: 'ناجح',
      failed: 'راسب',
      attempts: 'محاولات',
      viewResult: 'عرض النتيجة',
      retake: 'إعادة الاختبار',
      start: 'بدء',
      expired: 'منتهي الصلاحية',
      today: 'اليوم',
      tomorrow: 'غداً',
      inDays: 'في {days} يوم'
    }
  },
  imageUpload: {
    urlLabel: 'رابط الصورة',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'أدخل رابط الصورة',
    invalidUrl: 'رابط صورة غير صالح',
    urlError: 'خطأ في تحميل الصورة من الرابط',
    addUrl: 'إضافة رابط',
    or: 'أو',
    fileLabel: 'رفع ملف',
    fileHelp: 'الصيغ المدعومة: JPG, PNG, GIF, WebP. الحجم الأقصى: 5MB',
    fileRequired: 'اختر ملف صورة',
    fileTooLarge: 'الملف كبير جداً. الحجم الأقصى: {maxSize}',
    unsupportedFormat: 'صيغة ملف غير مدعومة',
    fileError: 'خطأ في معالجة الملف',
    loadError: 'خطأ في تحميل الصورة',
    processing: 'معالجة الصورة...',
    error: 'خطأ'
  },
  result: {
    title: 'نتيجة الاختبار',
    totalScore: 'النتيجة الإجمالية',
    percentage: 'النسبة المئوية',
    timeSpent: 'الوقت المستغرق',
    passed: 'ناجح',
    failed: 'راسب',
    status: 'الحالة',
    scoreBreakdown: 'تفصيل النتيجة',
    overallProgress: 'التقدم العام',
    byDifficulty: 'حسب الصعوبة',
    timeAnalysis: 'تحليل الوقت',
    completionTime: 'وقت الإكمال',
    averageTimePerQuestion: 'متوسط الوقت لكل سؤال',
    completedAt: 'مكتمل في',
    timeLimit: 'الحد الزمني',
    detailedAnswers: 'الإجابات المفصلة',
    question: 'السؤال',
    correct: 'صحيح',
    incorrect: 'خطأ',
    selectedAnswers: 'الإجابات المختارة',
    retakeTest: 'إعادة الاختبار',
    shareResult: 'مشاركة النتيجة',
    downloadCertificate: 'تحميل الشهادة'
  },
  leaderboard: {
    title: 'لوحة المتصدرين',
    subtitle: 'نتائج جميع المشاركين',
    sortBy: 'ترتيب حسب',
    search: 'بحث',
    totalParticipants: 'إجمالي المشاركين',
    passedCount: 'ناجح',
    averageScore: 'متوسط النتيجة',
    averageTime: 'متوسط الوقت'
  },
  common: {
    loading: 'جاري التحميل...',
    error: 'خطأ',
    retry: 'إعادة المحاولة'
  },
  layout: {
    author: {
      withLove: 'مع الحب',
      contacts: 'جهات الاتصال'
    }
  }
} 