export default {
  hello: '안녕하세요 세계',
  language: {
    selectTitle: '언어 선택',
    selectLanguage: '언어를 선택하세요',
    selectDescription: '선호하는 인터페이스 언어를 선택하세요'
  },
  home: {
    description: '현대적인 학습 플랫폼으로 매력적인 테스트를 만들고 지식을 확인하세요',
    createTest: '테스트 만들기',
    takeTest: '테스트 응시',
    create: {
      title: '만들기',
      description: '다양한 질문 유형과 설정으로 쉽게 테스트를 만드세요'
    },
    share: {
      title: '공유',
      description: '테스트를 게시하고 동료 및 학생들과 공유하세요'
    },
    analyze: {
      title: '분석',
      description: '결과에 대한 상세한 통계 및 분석을 받으세요'
    },
    seo: {
      title: 'QuizApp - 테스트 만들기 및 응시',
      description: '교육용 테스트를 만들고 응시하는 현대적인 플랫폼. 매력적인 테스트를 만들고 지식을 확인하세요.'
    },
    timerExamples: '타이머 예시',
    countdownDeadline: '마감일까지 카운트다운',
    countdownTimeLimit: '시간 제한이 있는 카운트다운',
    currentTime: '현재 시간',
    expiredTimer: '만료된 타이머',
    warningActive: '경고 활성화',
    noWarning: '경고 없음',
    questionExamples: '질문 예시',
    singleChoiceQuestion: '단일 선택 질문',
    multipleChoiceQuestion: '다중 선택 질문',
    questionWithAnswers: '답변이 있는 질문',
    questionWithImage: '이미지가 있는 질문',
    testCreationExample: '질문 생성 예시',
    createQuestionForm: '질문 생성 양식',
    jsonPreview: 'JSON 미리보기',
    copyJson: 'JSON 복사',
    questionsJson: '질문 JSON'
  },
  question: {
    difficulties: {
      easy: '쉬움',
      medium: '보통',
      hard: '어려움'
    },
    edit: {
      title: '질문 만들기',
      editTitle: '질문 편집',
      questionTitle: '질문',
      questionTitlePlaceholder: '질문을 입력하세요',
      description: '설명',
      descriptionPlaceholder: '질문에 대한 추가 설명',
      difficulty: '난이도',
      selectDifficulty: '난이도를 선택하세요',
      points: '점수',
      image: '이미지',
      addImageUrl: 'URL 추가',
      answers: {
        title: '답변 옵션',
        addAnswer: '답변 추가',
        addPrompt: '답변 옵션을 추가하세요',
        answerPlaceholder: '답변',
        correctLabel: '정답'
      },
      explanation: '설명',
      explanationPlaceholder: '정답에 대한 설명',
      imageUpload: {
        title: '이미지 업로드',
        or: '또는',
        cancel: '취소',
        apply: '적용'
      },
      actions: {
        cancel: '취소',
        save: '저장',
        create: '만들기',
        apply: '적용',
        delete: '삭제',
        preview: '미리보기'
      }
    },
    display: {
      explanation: '설명',
      points: '점수'
    }
  },
  navigation: {
    home: '홈',
    findTests: '테스트 찾기',
    myTests: '내 테스트'
  },
  myTests: {
    title: '내 테스트',
    description: '테스트를 관리하고 결과를 확인하세요',
    searchPlaceholder: '제목으로 검색...',
    filterByStatus: '상태별 필터',
    clearFilters: '필터 지우기',
    allStatuses: '모든 상태',
    status: {
      inProgress: '진행 중',
      completed: '완료됨',
      cancelled: '취소됨'
    },
    noTests: '테스트를 찾을 수 없습니다',
    noTestsDescription: '아직 완료된 테스트가 없습니다. 흥미로운 테스트를 찾아서 시작해보세요!',
    findTests: '테스트 찾기'
  },
  testSearch: {
    title: '테스트 검색',
    description: '응시할 흥미로운 테스트를 찾으세요',
    searchPlaceholder: '제목, 설명 또는 태그로 검색...',
    filterByTags: '태그별 필터',
    filterByDifficulty: '난이도별 필터',
    allDifficulties: '모든 난이도',
    search: '검색',
    resultsCount: '{count}개 테스트 중 {found}개 발견',
    sortBy: '정렬 기준',
    sort: {
      relevance: '관련성순',
      newest: '최신순',
      oldest: '오래된순',
      title: '제목순'
    },
    noResults: '테스트를 찾을 수 없습니다',
    noResultsDescription: '검색 매개변수 또는 필터를 변경해보세요',
    clearFilters: '필터 지우기'
  },
  test: {
    edit: {
      createTitle: '테스트 만들기',
      editTitle: '테스트 편집',
      basicSettings: '기본 설정',
      title: '테스트 제목',
      titlePlaceholder: '테스트 제목을 입력하세요',
      description: '설명',
      descriptionPlaceholder: '테스트 설명',
      tags: '태그',
      tagsPlaceholder: '수학, 대수학, 방정식',
      tagsHelp: '테스트를 분류하기 위해 쉼표로 구분된 태그를 입력하세요',
      image: '이미지',
      timeSettings: '시간 설정',
      deadline: '마감일',
      timeLimit: '시간 제한 (분)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: '테스트 완료에 허용된 시간',
      randomizationSettings: '무작위화 설정',
      randomizeQuestions: '질문 순서 무작위화',
      randomizeAnswers: '답변 순서 무작위화',
      difficultyDistribution: '난이도 분포',
      totalPercentage: '총 백분율',
      resetDistribution: '분포 재설정',
      questionBank: '질문 은행',
      addQuestion: '질문 추가',
      filterByDifficulty: '난이도별 필터',
      searchQuestions: '질문 검색',
      selectedQuestions: '선택된 질문: {count}개',
      assignToSection: '섹션에 할당',
      assign: '할당',
      sections: '섹션',
      addSection: '섹션 추가',
      editSection: '섹션 편집',
      questions: '질문',
      sectionTitle: '섹션 제목',
      sectionTitlePlaceholder: '섹션 제목을 입력하세요',
      sectionDescription: '섹션 설명',
      sectionDescriptionPlaceholder: '섹션 설명',
      sectionQuestionCount: '질문 수',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: '모든 난이도',
      actions: {
        cancel: '취소',
        save: '저장',
        export: '내보내기',
        import: '가져오기',
        apply: '적용',
        delete: '삭제',
        preview: '미리보기'
      },
      errors: {
        titleRequired: '테스트 제목이 필요합니다',
        fileRequired: '가져올 파일을 선택하세요',
        invalidFileType: '잘못된 파일 형식입니다. JSON 파일을 선택하세요'
      },
      importTest: '테스트 가져오기',
      importTestDescription: 'JSON 파일에서 테스트를 가져오거나 JSON 구조를 붙여넣으세요',
      importJson: '테스트 JSON',
      importJsonPlaceholder: '테스트 JSON 구조를 붙여넣으세요...',
      importText: '텍스트',
      importFile: '파일',
      selectFile: '파일 선택',
      selectedFile: '선택된 파일'
    },
    pass: {
      loading: '테스트 로딩 중...',
      restoring: '진행 상황 복원 중...',
      error: '테스트 로딩 오류',
      retry: '다시 시도',
      backToSearch: '검색으로 돌아가기',
      exit: '종료',
      exitConfirmation: '정말로 종료하시겠습니까? 모든 진행 상황이 손실됩니다.',
      noQuestion: '질문을 찾을 수 없습니다',
      previous: '이전',
      next: '다음',
      finish: '테스트 완료',
      questionProgress: '질문 {current}/{total}',
      answered: '답변됨',
      time: '시간',
      testNotFound: '테스트를 찾을 수 없습니다',
      instructions: '지침',
      instruction1: '질문을 주의 깊게 읽으세요',
      instruction1Desc: '답변을 선택하기 전에 질문을 이해했는지 확인하세요',
      instruction2: '시간을 지켜보세요',
      instruction2Desc: '테스트 완료에 제한된 시간이 있습니다',
      instruction3: '진행 상황이 자동으로 저장됩니다',
      instruction3Desc: '답변이 5분마다 저장됩니다'
    },
    result: {
      title: '테스트 결과',
      loading: '결과 로딩 중...',
      error: '결과 로딩 오류',
      retry: '다시 시도',
      notFound: '테스트 결과를 찾을 수 없습니다',
      loadError: '결과 로딩 실패',
      testLoadError: '테스트 데이터 로딩 실패',
      percentage: '완료 백분율',
      score: '점수',
      timeSpent: '소요 시간',
      passed: '테스트 통과!',
      failed: '테스트 실패',
      congratulations: '축하합니다! 테스트를 성공적으로 통과했습니다.',
      notEnoughPoints: '안타깝게도 테스트를 통과하기에 충분한 점수를 얻지 못했습니다.',
      detailedAnswers: '상세 답변',
      findOtherTests: '다른 테스트 찾기',
      myTests: '내 테스트',
      totalScore: '총점',
      status: '상태',
      scoreBreakdown: '점수 분석',
      overallProgress: '전체 진행 상황',
      byDifficulty: '난이도별',
      timeAnalysis: '시간 분석',
      completionTime: '완료 시간',
      averageTimePerQuestion: '질문당 평균 시간',
      completedAt: '완료 시간',
      timeLimit: '시간 제한',
      question: '질문',
      correct: '정답',
      incorrect: '오답',
      selectedAnswers: '선택된 답변',
      retakeTest: '테스트 재응시',
      shareResult: '결과 공유',
      downloadCertificate: '증명서 다운로드'
    },
    card: {
      questions: '질문',
      minutes: '분',
      yourResult: '당신의 결과',
      completedAt: '완료 시간',
      totalPoints: '총점',
      estimatedTime: '예상 시간',
      passed: '통과',
      failed: '실패',
      attempts: '시도',
      viewResult: '결과 보기',
      retake: '재응시',
      start: '시작',
      expired: '만료됨',
      today: '오늘',
      tomorrow: '내일',
      inDays: '{days}일 후'
    }
  },
  imageUpload: {
    urlLabel: '이미지 URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: '이미지 URL을 입력하세요',
    invalidUrl: '잘못된 이미지 URL',
    urlError: 'URL에서 이미지 로딩 오류',
    addUrl: 'URL 추가',
    or: '또는',
    fileLabel: '파일 업로드',
    fileHelp: '지원 형식: JPG, PNG, GIF, WebP. 최대 크기: 5MB',
    fileRequired: '이미지 파일을 선택하세요',
    fileTooLarge: '파일이 너무 큽니다. 최대 크기: {maxSize}',
    unsupportedFormat: '지원되지 않는 파일 형식',
    fileError: '파일 처리 오류',
    loadError: '이미지 로딩 오류',
    processing: '이미지 처리 중...',
    error: '오류'
  },
  result: {
    title: '테스트 결과',
    totalScore: '총점',
    percentage: '백분율',
    timeSpent: '소요 시간',
    passed: '통과',
    failed: '실패',
    status: '상태',
    scoreBreakdown: '점수 분석',
    overallProgress: '전체 진행 상황',
    byDifficulty: '난이도별',
    timeAnalysis: '시간 분석',
    completionTime: '완료 시간',
    averageTimePerQuestion: '질문당 평균 시간',
    completedAt: '완료 시간',
    timeLimit: '시간 제한',
    detailedAnswers: '상세 답변',
    question: '질문',
    correct: '정답',
    incorrect: '오답',
    selectedAnswers: '선택된 답변',
    retakeTest: '테스트 재응시',
    shareResult: '결과 공유',
    downloadCertificate: '증명서 다운로드'
  },
  leaderboard: {
    title: '리더보드',
    subtitle: '모든 참가자의 결과',
    sortBy: '정렬 기준',
    search: '검색',
    totalParticipants: '총 참가자',
    passedCount: '통과',
    averageScore: '평균 점수',
    averageTime: '평균 시간'
  },
  timer: {
    untilDeadline: '마감일까지',
    remaining: '남음',
    currentTime: '현재 시간',
    timeRunningOut: '시간이 부족합니다!',
    timeExpired: '시간이 만료되었습니다!',
    modes: {
      countdown: '카운트다운',
      time: '현재 시간'
    },
    types: {
      deadline: '마감일',
      timeLimit: '시간 제한'
    },
    settings: {
      title: '타이머 설정',
      editTitle: '타이머 편집',
      mode: '타이머 모드',
      countdownType: '카운트다운 유형',
      deadline: '마감일',
      deadlineHelp: '테스트를 제출해야 하는 시간까지',
      timeLimit: '실행 시간 (분)',
      timeLimitHelp: '테스트 완료에 주어진 시간',
      warnings: '경고',
      showWarning: '시간 경고 표시',
      warningThreshold: '경고 임계값 (초)',
      displaySettings: '표시 설정',
      showProgress: '시간 진행률 표시',
      preview: '미리보기',
      timeModeInfo: '타이머는 HH:MM:SS 형식으로 현재 시간을 표시합니다',
      actions: {
        cancel: '취소',
        save: '저장',
        apply: '적용',
        delete: '삭제',
        preview: '미리보기'
      }
    }
  },
  common: {
    loading: '로딩 중...',
    error: '오류',
    retry: '다시 시도'
  },
  layout: {
    author: {
      withLove: '사랑을 담아',
      name: 'Bulygin Nikita',
      contacts: '작성자 연락처',
      contactsDescription: '편리한 방법으로 연락하세요',
      copy: '복사'
    }
  },
  auth: {
    signIn: '로그인',
    signOut: '로그아웃',
    profile: '프로필',
    myProfile: '내 프로필',
    userProfile: '사용자 프로필',
    notAuthenticated: '인증 필요',
    notAuthenticatedDescription: '계속하려면 로그인하세요',
    userNotFound: '사용자를 찾을 수 없습니다',
    userNotFoundDescription: '지정된 ID의 사용자가 존재하지 않습니다'
  },
  user: {
    profile: {
      title: '프로필',
      information: '프로필 정보',
      statistics: '통계',
      actions: '작업',
      editProfile: '프로필 편집',
      totalQuizzes: '총 퀴즈',
      completedQuizzes: '완료됨',
      averageScore: '평균 점수',
      registeredAt: '가입일',
      noName: '이름 없음'
    }
  }
} 