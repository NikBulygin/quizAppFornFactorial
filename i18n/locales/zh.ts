export default {
  hello: '你好世界',
  language: {
    selectTitle: '选择语言',
    selectLanguage: '选择语言',
    selectDescription: '选择您偏好的界面语言'
  },
  home: {
    description: '使用现代学习平台创建引人入胜的测试并检查知识',
    createTest: '创建测试',
    takeTest: '参加测试',
    create: {
      title: '创建',
      description: '轻松创建具有各种问题类型和设置的测试'
    },
    share: {
      title: '分享',
      description: '发布测试并与同事和学生分享'
    },
    analyze: {
      title: '分析',
      description: '获得详细统计和结果分析'
    },
    seo: {
      title: 'QuizApp - 创建和参加测试',
      description: '用于创建和参加教育测试的现代平台。创建引人入胜的测试并检查知识。'
    },
    timerExamples: '计时器示例',
    countdownDeadline: '截止日期倒计时',
    countdownTimeLimit: '带时间限制的倒计时',
    currentTime: '当前时间',
    expiredTimer: '过期计时器',
    warningActive: '活跃警告',
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
      tags: '标签',
      tagsPlaceholder: '数学, 代数, 方程',
      tagsHelp: '输入逗号分隔的标签来分类测试',
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
      totalPercentage: '总百分比',
      resetDistribution: '重置分布',
      questionBank: '题库',
      addQuestion: '添加问题',
      filterByDifficulty: '按难度筛选',
      searchQuestions: '搜索问题',
      selectedQuestions: '已选问题: {count}',
      assignToSection: '分配到章节',
      assign: '分配',
      sections: '章节',
      addSection: '添加章节',
      editSection: '编辑章节',
      questions: '问题',
      sectionTitle: '章节标题',
      sectionTitlePlaceholder: '输入章节标题',
      sectionDescription: '章节描述',
      sectionDescriptionPlaceholder: '章节描述',
      sectionQuestionCount: '问题数量',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: '所有难度',
      actions: {
        cancel: '取消',
        save: '保存',
        apply: '应用',
        delete: '删除',
        preview: '预览'
      },
      errors: {
        titleRequired: '测试标题是必需的',
        fileRequired: '请选择要导入的文件',
        invalidFileType: '无效的文件类型。请选择JSON文件'
      },
      importTest: '导入测试',
      importTestDescription: '从JSON文件导入测试或粘贴JSON结构',
      importJson: '测试JSON',
      importJsonPlaceholder: '粘贴测试JSON结构...',
      importText: '文本',
      importFile: '文件',
      selectFile: '选择文件',
      selectedFile: '已选文件'
    },
    pass: {
      loading: '加载测试中...',
      restoring: '恢复进度中...',
      error: '加载测试时出错',
      retry: '重试',
      backToSearch: '返回搜索',
      exit: '退出',
      exitConfirmation: '您确定要退出吗？所有进度都将丢失。',
      noQuestion: '未找到问题',
      previous: '上一个',
      next: '下一个',
      finish: '完成测试',
      questionProgress: '问题 {current} / {total}',
      answered: '已回答',
      time: '时间',
      testNotFound: '未找到测试',
      instructions: '说明',
      instruction1: '仔细阅读问题',
      instruction1Desc: '在选择答案之前确保您理解问题',
      instruction2: '注意时间',
      instruction2Desc: '您有有限的时间完成测试',
      instruction3: '进度会自动保存',
      instruction3Desc: '您的答案每5分钟保存一次'
    },
    result: {
      title: '测试结果',
      loading: '加载结果中...',
      error: '加载结果时出错',
      retry: '重试',
      notFound: '未找到测试结果',
      loadError: '无法加载结果',
      testLoadError: '无法加载测试数据',
      percentage: '完成百分比',
      score: '分数',
      timeSpent: '花费时间',
      passed: '测试通过！',
      failed: '测试未通过',
      congratulations: '恭喜！您成功通过了测试。',
      notEnoughPoints: '很遗憾，您没有获得足够的分数来通过测试。',
      detailedAnswers: '详细答案',
      findOtherTests: '查找其他测试',
      myTests: '我的测试',
      totalScore: '总分',
      status: '状态',
      scoreBreakdown: '分数分解',
      overallProgress: '总体进度',
      byDifficulty: '按难度',
      timeAnalysis: '时间分析',
      completionTime: '完成时间',
      averageTimePerQuestion: '每题平均时间',
      completedAt: '完成于',
      timeLimit: '时间限制',
      question: '问题',
      correct: '正确',
      incorrect: '错误',
      selectedAnswers: '选择的答案',
      retakeTest: '重新参加测试',
      shareResult: '分享结果',
      downloadCertificate: '下载证书'
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
      retake: '重新参加',
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
      name: 'Bulygin Nikita',
      contacts: '作者联系方式',
      contactsDescription: '以任何方便的方式联系我',
      copy: '复制'
    }
  },
  auth: {
    signIn: '登录',
    signOut: '登出',
    profile: '个人资料',
    myProfile: '我的个人资料',
    userProfile: '用户个人资料',
    notAuthenticated: '需要身份验证',
    notAuthenticatedDescription: '请登录以继续',
    userNotFound: '未找到用户',
    userNotFoundDescription: '指定ID的用户不存在'
  },
  user: {
    profile: {
      title: '个人资料',
      information: '个人资料信息',
      statistics: '统计',
      actions: '操作',
      editProfile: '编辑个人资料',
      totalQuizzes: '总测验数',
      completedQuizzes: '已完成',
      averageScore: '平均分数',
      registeredAt: '注册时间',
      noName: '无姓名'
    }
  }
} 