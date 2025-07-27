export default {
  hello: 'Hello World',
  language: {
    selectTitle: 'Language Selection',
    selectLanguage: 'Select Language',
    selectDescription: 'Choose your preferred interface language'
  },
  home: {
    timerExamples: 'Timer Examples',
    countdownDeadline: 'Countdown to Deadline',
    countdownTimeLimit: 'Countdown with Time Limit',
    currentTime: 'Current Time',
    expiredTimer: 'Expired Timer',
    warningActive: 'Warning Active',
    noWarning: 'No Warning',
    questionExamples: 'Question Examples',
    singleChoiceQuestion: 'Single Choice Question',
    multipleChoiceQuestion: 'Multiple Choice Question',
    questionWithAnswers: 'Question with Answers',
    questionWithImage: 'Question with Image',
    testCreationExample: 'Question Creation Example',
    createQuestionForm: 'Question Creation Form',
    jsonPreview: 'JSON Preview',
    copyJson: 'Copy JSON',
    questionsJson: 'Questions JSON'
  },
  question: {
    difficulties: {
      easy: 'Easy',
      medium: 'Medium',
      hard: 'Hard'
    },
    edit: {
      title: 'Create Question',
      editTitle: 'Edit Question',
      questionTitle: 'Question',
      questionTitlePlaceholder: 'Enter question',
      description: 'Description',
      descriptionPlaceholder: 'Additional question description',
      difficulty: 'Difficulty',
      selectDifficulty: 'Select difficulty',
      points: 'Points',
      image: 'Image',
      addImageUrl: 'Add URL',
      answers: {
        title: 'Answer Options',
        addAnswer: 'Add Answer',
        addPrompt: 'Add answer options',
        answerPlaceholder: 'Answer',
        correctLabel: 'Correct'
      },
      explanation: 'Explanation',
      explanationPlaceholder: 'Explanation of the correct answer',
      imageUpload: {
        title: 'Upload Image',
        or: 'or',
        cancel: 'Cancel',
        apply: 'Apply'
      },
      actions: {
        cancel: 'Cancel',
        save: 'Save',
        create: 'Create',
        apply: 'Apply',
        delete: 'Delete',
        preview: 'Preview'
      }
    },
    display: {
      explanation: 'Explanation',
      points: 'points'
    }
  },
  navigation: {
    title: 'Test Navigation',
    description: 'Navigation through test sections and questions',
    sections: 'Sections',
    questions: 'Questions',
    progress: 'Progress',
    finishTest: 'Finish Test',
    finishTestEarly: 'Finish Test Early',
    finish: 'Finish',
    cancel: 'Cancel',
    back: 'Back',
    confirmation: {
      title: 'Confirm Test Completion',
      description: 'Are you sure you want to finish the test early? Unanswered questions will be counted as incorrect.'
    },
    status: {
      notAnswered: 'Not answered',
      answered: 'Answered',
      correct: 'Correct',
      incorrect: 'Incorrect',
      current: 'Current',
      legend: 'Status Legend'
    }
  },
  test: {
    edit: {
      createTitle: 'Create Test',
      editTitle: 'Edit Test',
      basicSettings: 'Basic Settings',
      title: 'Test Title',
      titlePlaceholder: 'Enter test title',
      description: 'Description',
      descriptionPlaceholder: 'Test description',
      tags: 'Tags',
      tagsPlaceholder: 'math, algebra, equations',
      tagsHelp: 'Enter tags separated by commas to categorize the test',
      image: 'Image',
      timeSettings: 'Time Settings',
      deadline: 'Deadline',
      timeLimit: 'Time Limit (minutes)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'Time allowed to complete the test',
      randomizationSettings: 'Randomization Settings',
      randomizeQuestions: 'Randomize question order',
      randomizeAnswers: 'Randomize answer order',
      difficultyDistribution: 'Difficulty Distribution',
      totalPercentage: 'Total Percentage',
      resetDistribution: 'Reset Distribution',
      questionBank: 'Question Bank',
      addQuestion: 'Add Question',
      filterByDifficulty: 'Filter by difficulty',
      searchQuestions: 'Search questions',
      selectedQuestions: 'Selected questions: {count}',
      assignToSection: 'Assign to section',
      assign: 'Assign',
      sections: 'Sections',
      addSection: 'Add Section',
      editSection: 'Edit Section',
      questions: 'questions',
      sectionTitle: 'Section Title',
      sectionTitlePlaceholder: 'Enter section title',
      sectionDescription: 'Section Description',
      sectionDescriptionPlaceholder: 'Section description',
      allDifficulties: 'All difficulties',
      actions: {
        cancel: 'Cancel',
        save: 'Save',
        export: 'Export',
        import: 'Import',
        apply: 'Apply',
        delete: 'Delete',
        preview: 'Preview'
      },
      errors: {
        titleRequired: 'Test title is required',
        fileRequired: 'Please select a file to import',
        invalidFileType: 'Invalid file type. Please select a JSON file'
      },
      importTest: 'Import Test',
      importTestDescription: 'Import test from JSON file or paste JSON structure',
      importJson: 'Test JSON',
      importJsonPlaceholder: 'Paste test JSON structure...',
      importText: 'Text',
      importFile: 'File',
      selectFile: 'Select File',
      selectedFile: 'Selected File'
    },
    pass: {
      exit: 'Exit',
      noQuestion: 'Question not found',
      previous: 'Previous',
      next: 'Next',
      finish: 'Finish',
      questionProgress: '{current} of {total}',
      testNotFound: 'Test not found',
      instructions: 'Instructions',
      instruction1: 'Read questions carefully',
      instruction1Desc: 'Make sure you understand the question before choosing an answer',
      instruction2: 'Watch your time',
      instruction2Desc: 'You have limited time to complete the test',
      instruction3: 'Progress is saved automatically',
      instruction3Desc: 'Your answers are saved every 5 minutes',
      exitConfirmation: 'Are you sure you want to exit? All progress will be lost.'
    },
    card: {
      questions: 'questions',
      minutes: 'minutes',
      yourResult: 'Your result',
      completedAt: 'Completed at',
      totalPoints: 'Total points',
      estimatedTime: 'Estimated time',
      passed: 'Passed',
      failed: 'Failed',
      attempts: 'attempts',
      viewResult: 'View result',
      retake: 'Retake',
      start: 'Start',
      expired: 'Expired',
      today: 'Today',
      tomorrow: 'Tomorrow',
      inDays: 'in {days} days'
    }
  },
  imageUpload: {
    urlLabel: 'Image URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: 'Enter image URL',
    invalidUrl: 'Invalid image URL',
    urlError: 'Error loading image from URL',
    addUrl: 'Add URL',
    or: 'or',
    fileLabel: 'Upload file',
    fileHelp: 'Supported formats: JPG, PNG, GIF, WebP. Maximum size: 5MB',
    fileRequired: 'Select image file',
    fileTooLarge: 'File too large. Maximum size: {maxSize}',
    unsupportedFormat: 'Unsupported file format',
    fileError: 'Error processing file',
    loadError: 'Error loading image',
    processing: 'Processing image...',
    error: 'Error'
  },
  result: {
    title: 'Test Result',
    totalScore: 'Total Score',
    percentage: 'Percentage',
    timeSpent: 'Time Spent',
    passed: 'Passed',
    failed: 'Failed',
    status: 'Status',
    scoreBreakdown: 'Score Breakdown',
    overallProgress: 'Overall Progress',
    byDifficulty: 'By Difficulty',
    timeAnalysis: 'Time Analysis',
    completionTime: 'Completion Time',
    averageTimePerQuestion: 'Average Time per Question',
    completedAt: 'Completed at',
    timeLimit: 'Time Limit',
    detailedAnswers: 'Detailed Answers',
    question: 'Question',
    correct: 'Correct',
    incorrect: 'Incorrect',
    selectedAnswers: 'Selected Answers',
    retakeTest: 'Retake Test',
    shareResult: 'Share Result',
    downloadCertificate: 'Download Certificate'
  },
  leaderboard: {
    title: 'Leaderboard',
    subtitle: 'Results of all participants',
    sortBy: 'Sort by',
    search: 'Search',
    totalParticipants: 'Total Participants',
    passedCount: 'Passed',
    averageScore: 'Average Score',
    averageTime: 'Average Time'
  },
  timer: {
    untilDeadline: 'until deadline',
    remaining: 'remaining',
    currentTime: 'current time',
    timeRunningOut: 'Time running out!',
    timeExpired: 'Time expired!',
    modes: {
      countdown: 'Countdown',
      time: 'Current Time'
    },
    types: {
      deadline: 'Deadline',
      timeLimit: 'Time Limit'
    },
    settings: {
      title: 'Timer Settings',
      editTitle: 'Edit Timer',
      mode: 'Timer Mode',
      countdownType: 'Countdown Type',
      deadline: 'Deadline',
      deadlineHelp: 'Time until which the test must be submitted',
      timeLimit: 'Time Limit (minutes)',
      timeLimitHelp: 'How much time is given to complete the test',
      warnings: 'Warnings',
      showWarning: 'Show time warning',
      warningThreshold: 'Warning threshold (seconds)',
      displaySettings: 'Display Settings',
      showProgress: 'Show time progress bar',
      preview: 'Preview',
      timeModeInfo: 'Timer will show current time of day in HH:MM:SS format',
      actions: {
        cancel: 'Cancel',
        save: 'Save',
        apply: 'Apply',
        delete: 'Delete',
        preview: 'Preview'
      }
    }
  },
  common: {
    loading: 'Loading...',
    error: 'Error',
    retry: 'Retry'
  },
  layout: {
    author: {
      withLove: 'With love',
      name: 'Bulygin Nikita',
      contacts: 'Author Contacts',
      contactsDescription: 'Contact me in any convenient way',
      copy: 'Copy'
    }
  },
  auth: {
    signIn: 'Sign In',
    signOut: 'Sign Out',
    profile: 'Profile',
    myProfile: 'My Profile',
    userProfile: 'User Profile',
    notAuthenticated: 'Authentication Required',
    notAuthenticatedDescription: 'Please sign in to continue',
    userNotFound: 'User Not Found',
    userNotFoundDescription: 'User with the specified ID does not exist'
  },
  user: {
    profile: {
      title: 'Profile',
      information: 'Profile Information',
      statistics: 'Statistics',
      actions: 'Actions',
      editProfile: 'Edit Profile',
      totalQuizzes: 'Total Quizzes',
      completedQuizzes: 'Completed',
      averageScore: 'Average Score',
      registeredAt: 'Registered',
      noName: 'No Name'
    }
  }
} 