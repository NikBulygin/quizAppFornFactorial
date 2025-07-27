export default {
  hello: 'مرحبا بالعالم',
  language: {
    selectTitle: 'اختيار اللغة',
    selectLanguage: 'اختر اللغة',
    selectDescription: 'اختر لغة الواجهة المفضلة'
  },
  home: {
    description: 'أنشئ اختبارات جذابة وتحقق من المعرفة من خلال منصة تعليمية حديثة',
    createTest: 'إنشاء اختبار',
    takeTest: 'أخذ اختبار',
    create: {
      title: 'إنشاء',
      description: 'أنشئ اختبارات بسهولة مع أنواع مختلفة من الأسئلة والإعدادات'
    },
    share: {
      title: 'مشاركة',
      description: 'انشر الاختبارات وشاركها مع الزملاء والطلاب'
    },
    analyze: {
      title: 'تحليل',
      description: 'احصل على إحصائيات مفصلة وتحليلات للنتائج'
    },
    seo: {
      title: 'QuizApp - إنشاء وأخذ الاختبارات',
      description: 'منصة حديثة لإنشاء وأخذ الاختبارات التعليمية. أنشئ اختبارات جذابة وتحقق من المعرفة.'
    },
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
    home: 'الرئيسية',
    findTests: 'البحث عن الاختبارات',
    myTests: 'اختباراتي'
  },
  myTests: {
    title: 'اختباراتي',
    description: 'إدارة اختباراتك وعرض النتائج',
    searchPlaceholder: 'البحث بالعنوان...',
    filterByStatus: 'تصفية حسب الحالة',
    clearFilters: 'مسح المرشحات',
    allStatuses: 'جميع الحالات',
    status: {
      inProgress: 'قيد التقدم',
      completed: 'مكتمل',
      cancelled: 'ملغي'
    },
    noTests: 'لم يتم العثور على اختبارات',
    noTestsDescription: 'ليس لديك أي اختبارات مكتملة بعد. ابحث عن اختبارات مثيرة للاهتمام وابدأ في أخذها!',
    findTests: 'البحث عن اختبارات'
  },
  testSearch: {
    title: 'البحث عن الاختبارات',
    description: 'ابحث عن اختبارات مثيرة للاهتمام لأخذها',
    searchPlaceholder: 'البحث بالعنوان أو الوصف أو العلامات...',
    filterByTags: 'تصفية حسب العلامات',
    filterByDifficulty: 'تصفية حسب الصعوبة',
    allDifficulties: 'جميع الصعوبات',
    search: 'بحث',
    resultsCount: 'تم العثور على {found} من {count} اختبار',
    sortBy: 'ترتيب حسب',
    sort: {
      relevance: 'بالأهمية',
      newest: 'الأحدث أولاً',
      oldest: 'الأقدم أولاً',
      title: 'بالعنوان'
    },
    noResults: 'لم يتم العثور على اختبارات',
    noResultsDescription: 'جرب تغيير معايير البحث أو المرشحات',
    clearFilters: 'مسح المرشحات'
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
      tags: 'العلامات',
      tagsPlaceholder: 'رياضيات، جبر، معادلات',
      tagsHelp: 'أدخل العلامات مفصولة بفواصل لتصنيف الاختبار',
      image: 'الصورة',
      timeSettings: 'إعدادات الوقت',
      deadline: 'الموعد النهائي',
      timeLimit: 'الحد الزمني (دقائق)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'الوقت المسموح لإكمال الاختبار',
      randomizationSettings: 'إعدادات العشوائية',
      randomizeQuestions: 'ترتيب الأسئلة عشوائياً',
      randomizeAnswers: 'ترتيب الإجابات عشوائياً',
      difficultyDistribution: 'توزيع الصعوبة',
      totalPercentage: 'النسبة المئوية الإجمالية',
      resetDistribution: 'إعادة تعيين التوزيع',
      questionBank: 'بنك الأسئلة',
      addQuestion: 'إضافة سؤال',
      filterByDifficulty: 'تصفية حسب الصعوبة',
      searchQuestions: 'البحث في الأسئلة',
      selectedQuestions: 'الأسئلة المختارة: {count}',
      assignToSection: 'تعيين إلى قسم',
      assign: 'تعيين',
      sections: 'الأقسام',
      addSection: 'إضافة قسم',
      editSection: 'تحرير القسم',
      questions: 'أسئلة',
      sectionTitle: 'عنوان القسم',
      sectionTitlePlaceholder: 'أدخل عنوان القسم',
      sectionDescription: 'وصف القسم',
      sectionDescriptionPlaceholder: 'وصف القسم',
      sectionQuestionCount: 'عدد الأسئلة',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: 'جميع الصعوبات',
      actions: {
        cancel: 'إلغاء',
        save: 'حفظ',
        export: 'تصدير',
        import: 'استيراد',
        apply: 'تطبيق',
        delete: 'حذف',
        preview: 'معاينة'
      },
      errors: {
        titleRequired: 'عنوان الاختبار مطلوب',
        fileRequired: 'يرجى اختيار ملف للاستيراد',
        invalidFileType: 'نوع ملف غير صالح. يرجى اختيار ملف JSON'
      },
      importTest: 'استيراد اختبار',
      importTestDescription: 'استيراد اختبار من ملف JSON أو لصق هيكل JSON',
      importJson: 'JSON الاختبار',
      importJsonPlaceholder: 'الصق هيكل JSON للاختبار...',
      importText: 'نص',
      importFile: 'ملف',
      selectFile: 'اختيار ملف',
      selectedFile: 'الملف المختار'
    },
    pass: {
      loading: 'جاري تحميل الاختبار...',
      restoring: 'استعادة التقدم...',
      error: 'خطأ في تحميل الاختبار',
      retry: 'حاول مرة أخرى',
      backToSearch: 'العودة إلى البحث',
      exit: 'خروج',
      exitConfirmation: 'هل أنت متأكد من أنك تريد الخروج؟ سيتم فقدان جميع التقدم.',
      noQuestion: 'السؤال غير موجود',
      previous: 'السابق',
      next: 'التالي',
      finish: 'إنهاء الاختبار',
      questionProgress: 'السؤال {current} من {total}',
      answered: 'تمت الإجابة',
      time: 'الوقت',
      testNotFound: 'الاختبار غير موجود',
      instructions: 'التعليمات',
      instruction1: 'اقرأ الأسئلة بعناية',
      instruction1Desc: 'تأكد من فهم السؤال قبل اختيار الإجابة',
      instruction2: 'راقب وقتك',
      instruction2Desc: 'لديك وقت محدود لإكمال الاختبار',
      instruction3: 'يتم حفظ التقدم تلقائياً',
      instruction3Desc: 'يتم حفظ إجاباتك كل 5 دقائق'
    },
    result: {
      title: 'نتائج الاختبار',
      loading: 'جاري تحميل النتائج...',
      error: 'خطأ في تحميل النتائج',
      retry: 'حاول مرة أخرى',
      notFound: 'نتائج الاختبار غير موجودة',
      loadError: 'فشل في تحميل النتائج',
      testLoadError: 'فشل في تحميل بيانات الاختبار',
      percentage: 'نسبة الإكمال',
      score: 'النتيجة',
      timeSpent: 'الوقت المستغرق',
      passed: 'تم اجتياز الاختبار!',
      failed: 'فشل الاختبار',
      congratulations: 'تهانينا! لقد اجتزت الاختبار بنجاح.',
      notEnoughPoints: 'للأسف، لم تحصل على نقاط كافية لاجتياز الاختبار.',
      detailedAnswers: 'الإجابات المفصلة',
      findOtherTests: 'البحث عن اختبارات أخرى',
      myTests: 'اختباراتي',
      totalScore: 'النتيجة الإجمالية',
      status: 'الحالة',
      scoreBreakdown: 'تفصيل النتيجة',
      overallProgress: 'التقدم العام',
      byDifficulty: 'حسب الصعوبة',
      timeAnalysis: 'تحليل الوقت',
      completionTime: 'وقت الإكمال',
      averageTimePerQuestion: 'متوسط الوقت لكل سؤال',
      completedAt: 'تم الإكمال في',
      timeLimit: 'الحد الزمني',
      question: 'السؤال',
      correct: 'صحيح',
      incorrect: 'خطأ',
      selectedAnswers: 'الإجابات المختارة',
      retakeTest: 'إعادة الاختبار',
      shareResult: 'مشاركة النتيجة',
      downloadCertificate: 'تحميل الشهادة'
    },
    card: {
      questions: 'أسئلة',
      minutes: 'دقائق',
      yourResult: 'نتيجتك',
      completedAt: 'تم الإكمال في',
      totalPoints: 'إجمالي النقاط',
      estimatedTime: 'الوقت المقدر',
      passed: 'تم الاجتياز',
      failed: 'فشل',
      attempts: 'محاولات',
      viewResult: 'عرض النتيجة',
      retake: 'إعادة',
      start: 'ابدأ',
      expired: 'منتهي الصلاحية',
      today: 'اليوم',
      tomorrow: 'غداً',
      inDays: 'في {days} أيام'
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
    fileHelp: 'الصيغ المدعومة: JPG, PNG, GIF, WebP. الحد الأقصى للحجم: 5MB',
    fileRequired: 'اختر ملف صورة',
    fileTooLarge: 'الملف كبير جداً. الحد الأقصى للحجم: {maxSize}',
    unsupportedFormat: 'صيغة ملف غير مدعومة',
    fileError: 'خطأ في معالجة الملف',
    loadError: 'خطأ في تحميل الصورة',
    processing: 'جاري معالجة الصورة...',
    error: 'خطأ'
  },
  result: {
    title: 'نتيجة الاختبار',
    totalScore: 'النتيجة الإجمالية',
    percentage: 'النسبة المئوية',
    timeSpent: 'الوقت المستغرق',
    passed: 'تم الاجتياز',
    failed: 'فشل',
    status: 'الحالة',
    scoreBreakdown: 'تفصيل النتيجة',
    overallProgress: 'التقدم العام',
    byDifficulty: 'حسب الصعوبة',
    timeAnalysis: 'تحليل الوقت',
    completionTime: 'وقت الإكمال',
    averageTimePerQuestion: 'متوسط الوقت لكل سؤال',
    completedAt: 'تم الإكمال في',
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
    passedCount: 'تم الاجتياز',
    averageScore: 'متوسط النتيجة',
    averageTime: 'متوسط الوقت'
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
  common: {
    loading: 'جاري التحميل...',
    error: 'خطأ',
    retry: 'حاول مرة أخرى'
  },
  layout: {
    author: {
      withLove: 'مع الحب',
      name: 'Bulygin Nikita',
      contacts: 'جهات اتصال المؤلف',
      contactsDescription: 'تواصل معي بأي طريقة مريحة',
      copy: 'نسخ'
    }
  },
  auth: {
    signIn: 'تسجيل الدخول',
    signOut: 'تسجيل الخروج',
    profile: 'الملف الشخصي',
    myProfile: 'ملفي الشخصي',
    userProfile: 'ملف المستخدم الشخصي',
    notAuthenticated: 'المصادقة مطلوبة',
    notAuthenticatedDescription: 'يرجى تسجيل الدخول للمتابعة',
    userNotFound: 'المستخدم غير موجود',
    userNotFoundDescription: 'المستخدم بالمعرف المحدد غير موجود'
  },
  user: {
    profile: {
      title: 'الملف الشخصي',
      information: 'معلومات الملف الشخصي',
      statistics: 'الإحصائيات',
      actions: 'الإجراءات',
      editProfile: 'تحرير الملف الشخصي',
      totalQuizzes: 'إجمالي الاختبارات',
      completedQuizzes: 'المكتملة',
      averageScore: 'متوسط النتيجة',
      registeredAt: 'تاريخ التسجيل',
      noName: 'بدون اسم'
    }
  }
} 