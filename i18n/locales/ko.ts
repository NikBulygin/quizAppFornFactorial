export default {
  hello: '안녕하세요 세계',
  language: {
    selectTitle: '언어 선택',
    selectLanguage: '언어 선택',
    selectDescription: '인터페이스 언어를 선택하세요'
  },
  home: {
    timerExamples: '타이머 예시',
    countdownDeadline: '마감일까지 카운트다운',
    countdownTimeLimit: '시간 제한이 있는 카운트다운',
    currentTime: '현재 시간',
    expiredTimer: '만료된 타이머',
    warningActive: '활성 경고',
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
      deadlineHelp: '시험을 제출해야 하는 시간까지',
      timeLimit: '실행 시간 (분)',
      timeLimitHelp: '시험을 완료하는 데 주어지는 시간',
      warnings: '경고',
      showWarning: '시간 경고 표시',
      warningThreshold: '경고 임계값 (초)',
      displaySettings: '표시 설정',
      showProgress: '시간 진행률 표시줄 표시',
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
      selectDifficulty: '난이도 선택',
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
    title: '테스트 네비게이션',
    sections: '섹션',
    questions: '질문',
    progress: '진행률',
    finishTest: '테스트 완료',
    finishTestEarly: '테스트 조기 완료',
    finish: '완료',
    cancel: '취소',
    back: '뒤로',
    confirmation: {
      title: '테스트 완료 확인',
      description: '테스트를 조기에 완료하시겠습니까? 답하지 않은 질문은 오답으로 처리됩니다.'
    },
    status: {
      notAnswered: '미답변',
      answered: '답변됨',
      correct: '정답',
      incorrect: '오답'
    }
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
      image: '이미지',
      timeSettings: '시간 설정',
      deadline: '마감일',
      timeLimit: '시간 제한 (분)',
      timeLimitPlaceholder: '60',
      timeLimitHelp: '테스트 완료에 허용되는 시간',
      randomizationSettings: '무작위화 설정',
      randomizeQuestions: '질문 순서 무작위화',
      randomizeAnswers: '답변 순서 무작위화',
      difficultyDistribution: '난이도 분포',
      questionBank: '질문 은행',
      addQuestion: '질문 추가',
      filterByDifficulty: '난이도별 필터',
      searchQuestions: '질문 검색',
      selectedQuestions: '선택된 질문: {count}',
      assignToSection: '섹션에 할당',
      assign: '할당',
      sections: '섹션',
      addSection: '섹션 추가',
      questions: '질문',
      sectionTitle: '섹션 제목',
      sectionTitlePlaceholder: '섹션 제목을 입력하세요',
      sectionDescription: '섹션 설명',
      sectionDescriptionPlaceholder: '섹션 설명',
      allDifficulties: '모든 난이도',
      actions: {
        cancel: '취소',
        save: '저장',
        apply: '적용',
        delete: '삭제',
        preview: '미리보기'
      },
      errors: {
        titleRequired: '테스트 제목이 필요합니다'
      }
    },
    pass: {
      exit: '종료',
      noQuestion: '질문을 찾을 수 없습니다',
      previous: '이전',
      next: '다음',
      finish: '완료',
      questionProgress: '{current} / {total}'
    },
    card: {
      questions: '질문',
      minutes: '분',
      yourResult: '귀하의 결과',
      completedAt: '완료일',
      totalPoints: '총점',
      estimatedTime: '예상 시간',
      passed: '통과',
      failed: '실패',
      attempts: '시도',
      viewResult: '결과 보기',
      retake: '재시도',
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
    urlError: 'URL에서 이미지 로드 오류',
    addUrl: 'URL 추가',
    or: '또는',
    fileLabel: '파일 업로드',
    fileHelp: '지원 형식: JPG, PNG, GIF, WebP. 최대 크기: 5MB',
    fileRequired: '이미지 파일을 선택하세요',
    fileTooLarge: '파일이 너무 큽니다. 최대 크기: {maxSize}',
    unsupportedFormat: '지원되지 않는 파일 형식',
    fileError: '파일 처리 오류',
    loadError: '이미지 로드 오류',
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
    overallProgress: '전체 진행률',
    byDifficulty: '난이도별',
    timeAnalysis: '시간 분석',
    completionTime: '완료 시간',
    averageTimePerQuestion: '질문당 평균 시간',
    completedAt: '완료일',
    timeLimit: '시간 제한',
    detailedAnswers: '상세 답변',
    question: '질문',
    correct: '정답',
    incorrect: '오답',
    selectedAnswers: '선택된 답변',
    retakeTest: '테스트 재시도',
    shareResult: '결과 공유',
    downloadCertificate: '인증서 다운로드'
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
  common: {
    loading: '로딩 중...',
    error: '오류',
    retry: '다시 시도'
  },
  layout: {
    author: {
      withLove: '사랑을 담아',
      contacts: '연락처'
    }
  }
} 