export default {
  hello: '你好世界',
  language: {
    selectTitle: '选择语言',
    selectLanguage: '选择语言',
    selectDescription: '选择您偏好的界面语言'
  },
  home: {
    timerExamples: '计时器示例',
    countdownDeadline: '截止日期倒计时',
    countdownTimeLimit: '带时间限制的倒计时',
    currentTime: '当前时间',
    expiredTimer: '过期计时器',
    warningActive: '活动警告',
    noWarning: '无警告',
    questionExamples: '问题示例',
    singleChoiceQuestion: '单选题',
    multipleChoiceQuestion: '多选题',
    questionWithAnswers: '带答案的问题',
    questionWithImage: '带图片的问题',
    testCreationExample: '问题创建示例',
    createQuestionForm: '问题创建表单',
    jsonPreview: 'JSON预览',
    copyJson: '复制JSON',
    questionsJson: '问题JSON'
  },
  timer: {
    untilDeadline: '截止日期前',
    remaining: '剩余',
    currentTime: '当前时间',
    timeRunningOut: '时间不足！',
    timeExpired: '时间已到！',
    modes: {
      countdown: '倒计时',
      time: '当前时间'
    },
    types: {
      deadline: '截止日期',
      timeLimit: '时间限制'
    },
    settings: {
      title: '计时器设置',
      editTitle: '编辑计时器',
      mode: '计时器模式',
      countdownType: '倒计时类型',
      deadline: '截止日期',
      deadlineHelp: '测试必须提交的时间之前',
      timeLimit: '执行时间（分钟）',
      timeLimitHelp: '完成测试所需的时间',
      warnings: '警告',
      showWarning: '显示时间警告',
      warningThreshold: '警告阈值（秒）',
      displaySettings: '显示设置',
      showProgress: '显示时间进度条',
      preview: '预览',
      timeModeInfo: '计时器将以HH:MM:SS格式显示当前时间',
      actions: {
        cancel: '取消',
        save: '保存',
        apply: '应用',
        delete: '删除',
        preview: '预览'
      }
    }
  },
  question: {
    difficulties: {
      easy: '简单',
      medium: '中等',
      hard: '困难'
    },
    edit: {
      title: '创建问题',
      editTitle: '编辑问题',
      questionTitle: '问题',
      questionTitlePlaceholder: '输入问题',
      description: '描述',
      descriptionPlaceholder: '问题的附加描述',
      difficulty: '难度',
      selectDifficulty: '选择难度',
      points: '分数',
      image: '图片',
      addImageUrl: '添加URL',
      answers: {
        title: '答案选项',
        addAnswer: '添加答案',
        addPrompt: '添加答案选项',
        answerPlaceholder: '答案',
        correctLabel: '正确'
      },
      explanation: '解释',
      explanationPlaceholder: '正确答案的解释',
      imageUpload: {
        title: '上传图片',
        or: '或',
        cancel: '取消',
        apply: '应用'
      },
      actions: {
        cancel: '取消',
        save: '保存',
        create: '创建',
        apply: '应用',
        delete: '删除',
        preview: '预览'
      }
    },
    display: {
      explanation: '解释',
      points: '分数'
    }
  },
  navigation: {
    title: '测试导航',
    sections: '章节',
    questions: '问题',
    progress: '进度',
    finishTest: '完成测试',
    finishTestEarly: '提前完成测试',
    finish: '完成',
    cancel: '取消',
    back: '返回',
    confirmation: {
      title: '确认完成测试',
      description: '您确定要提前完成测试吗？未回答的问题将被计为错误。'
    },
    status: {
      notAnswered: '未回答',
      answered: '已回答',
      correct: '正确',
      incorrect: '错误'
    }
  },
  test: {
    edit: {
      createTitle: '创建测试',
      editTitle: '编辑测试',
      basicSettings: '基本设置',
      title: '测试标题',
      titlePlaceholder: '输入测试标题',
      description: '描述',
      descriptionPlaceholder: '测试描述',
      image: '图片',
      timeSettings: '时间设置',
      deadline: '截止日期',
      timeLimit: '时间限制（分钟）',
      timeLimitPlaceholder: '60',
      timeLimitHelp: '完成测试的允许时间',
      randomizationSettings: '随机化设置',
      randomizeQuestions: '随机化问题顺序',
      randomizeAnswers: '随机化答案顺序',
      difficultyDistribution: '难度分布',
      questionBank: '问题库',
      addQuestion: '添加问题',
      filterByDifficulty: '按难度筛选',
      searchQuestions: '搜索问题',
      selectedQuestions: '已选问题：{count}',
      assignToSection: '分配到章节',
      assign: '分配',
      sections: '章节',
      addSection: '添加章节',
      questions: '问题',
      sectionTitle: '章节标题',
      sectionTitlePlaceholder: '输入章节标题',
      sectionDescription: '章节描述',
      sectionDescriptionPlaceholder: '章节描述',
      allDifficulties: '所有难度',
      actions: {
        cancel: '取消',
        save: '保存',
        apply: '应用',
        delete: '删除',
        preview: '预览'
      },
      errors: {
        titleRequired: '测试标题是必需的'
      }
    },
    pass: {
      exit: '退出',
      noQuestion: '未找到问题',
      previous: '上一个',
      next: '下一个',
      finish: '完成',
      questionProgress: '{current} / {total}'
    },
    card: {
      questions: '问题',
      minutes: '分钟',
      yourResult: '您的结果',
      completedAt: '完成于',
      totalPoints: '总分',
      estimatedTime: '预计时间',
      passed: '通过',
      failed: '未通过',
      attempts: '尝试',
      viewResult: '查看结果',
      retake: '重考',
      start: '开始',
      expired: '已过期',
      today: '今天',
      tomorrow: '明天',
      inDays: '{days}天后'
    }
  },
  imageUpload: {
    urlLabel: '图片URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: '输入图片URL',
    invalidUrl: '无效的图片URL',
    urlError: '从URL加载图片时出错',
    addUrl: '添加URL',
    or: '或',
    fileLabel: '上传文件',
    fileHelp: '支持格式：JPG、PNG、GIF、WebP。最大大小：5MB',
    fileRequired: '选择图片文件',
    fileTooLarge: '文件太大。最大大小：{maxSize}',
    unsupportedFormat: '不支持的文件格式',
    fileError: '处理文件时出错',
    loadError: '加载图片时出错',
    processing: '处理图片中...',
    error: '错误'
  },
  result: {
    title: '测试结果',
    totalScore: '总分',
    percentage: '百分比',
    timeSpent: '用时',
    passed: '通过',
    failed: '未通过',
    status: '状态',
    scoreBreakdown: '分数分析',
    overallProgress: '总体进度',
    byDifficulty: '按难度',
    timeAnalysis: '时间分析',
    completionTime: '完成时间',
    averageTimePerQuestion: '每题平均时间',
    completedAt: '完成于',
    timeLimit: '时间限制',
    detailedAnswers: '详细答案',
    question: '问题',
    correct: '正确',
    incorrect: '错误',
    selectedAnswers: '选择的答案',
    retakeTest: '重考测试',
    shareResult: '分享结果',
    downloadCertificate: '下载证书'
  },
  leaderboard: {
    title: '排行榜',
    subtitle: '所有参与者的结果',
    sortBy: '排序方式',
    search: '搜索',
    totalParticipants: '总参与者',
    passedCount: '通过',
    averageScore: '平均分数',
    averageTime: '平均时间'
  },
  common: {
    loading: '加载中...',
    error: '错误',
    retry: '重试'
  },
  layout: {
    author: {
      withLove: '用爱制作',
      contacts: '联系方式'
    }
  }
} 