export default {
  hello: 'こんにちは世界',
  language: {
    selectTitle: '言語選択',
    selectLanguage: '言語を選択',
    selectDescription: 'インターフェースの言語を選択してください'
  },
  home: {
    timerExamples: 'タイマーの例',
    countdownDeadline: '締切までのカウントダウン',
    countdownTimeLimit: '時間制限付きカウントダウン',
    currentTime: '現在時刻',
    expiredTimer: '期限切れタイマー',
    warningActive: 'アクティブな警告',
    noWarning: '警告なし',
    questionExamples: '質問の例',
    singleChoiceQuestion: '単一選択質問',
    multipleChoiceQuestion: '複数選択質問',
    questionWithAnswers: '回答付き質問',
    questionWithImage: '画像付き質問',
    testCreationExample: '質問作成の例',
    createQuestionForm: '質問作成フォーム',
    jsonPreview: 'JSONプレビュー',
    copyJson: 'JSONをコピー',
    questionsJson: '質問のJSON'
  },
  timer: {
    untilDeadline: '締切まで',
    remaining: '残り',
    currentTime: '現在時刻',
    timeRunningOut: '時間が不足しています！',
    timeExpired: '時間が切れました！',
    modes: {
      countdown: 'カウントダウン',
      time: '現在時刻'
    },
    types: {
      deadline: '締切',
      timeLimit: '時間制限'
    },
    settings: {
      title: 'タイマー設定',
      editTitle: 'タイマー編集',
      mode: 'タイマーモード',
      countdownType: 'カウントダウンタイプ',
      deadline: '締切',
      deadlineHelp: 'テストを提出する必要がある時間まで',
      timeLimit: '実行時間（分）',
      timeLimitHelp: 'テストを完了するために与えられる時間',
      warnings: '警告',
      showWarning: '時間警告を表示',
      warningThreshold: '警告しきい値（秒）',
      displaySettings: '表示設定',
      showProgress: '時間プログレスバーを表示',
      preview: 'プレビュー',
      timeModeInfo: 'タイマーはHH:MM:SS形式で現在時刻を表示します',
      actions: {
        cancel: 'キャンセル',
        save: '保存',
        apply: '適用',
        delete: '削除',
        preview: 'プレビュー'
      }
    }
  },
  question: {
    difficulties: {
      easy: '簡単',
      medium: '普通',
      hard: '難しい'
    },
    edit: {
      title: '質問を作成',
      editTitle: '質問を編集',
      questionTitle: '質問',
      questionTitlePlaceholder: '質問を入力してください',
      description: '説明',
      descriptionPlaceholder: '質問の追加説明',
      difficulty: '難易度',
      selectDifficulty: '難易度を選択',
      points: 'ポイント',
      image: '画像',
      addImageUrl: 'URLを追加',
      answers: {
        title: '回答オプション',
        addAnswer: '回答を追加',
        addPrompt: '回答オプションを追加してください',
        answerPlaceholder: '回答',
        correctLabel: '正解'
      },
      explanation: '説明',
      explanationPlaceholder: '正解の説明',
      imageUpload: {
        title: '画像をアップロード',
        or: 'または',
        cancel: 'キャンセル',
        apply: '適用'
      },
      actions: {
        cancel: 'キャンセル',
        save: '保存',
        create: '作成',
        apply: '適用',
        delete: '削除',
        preview: 'プレビュー'
      }
    },
    display: {
      explanation: '説明',
      points: 'ポイント'
    }
  },
  navigation: {
    title: 'テストナビゲーション',
    sections: 'セクション',
    questions: '質問',
    progress: '進捗',
    finishTest: 'テスト終了',
    finishTestEarly: 'テストを早期終了',
    finish: '終了',
    cancel: 'キャンセル',
    back: '戻る',
    confirmation: {
      title: 'テスト終了の確認',
      description: 'テストを早期に終了してもよろしいですか？未回答の質問は不正解としてカウントされます。'
    },
    status: {
      notAnswered: '未回答',
      answered: '回答済み',
      correct: '正解',
      incorrect: '不正解'
    }
  },
  test: {
    edit: {
      createTitle: 'テストを作成',
      editTitle: 'テストを編集',
      basicSettings: '基本設定',
      title: 'テストタイトル',
      titlePlaceholder: 'テストタイトルを入力してください',
      description: '説明',
      descriptionPlaceholder: 'テストの説明',
      image: '画像',
      timeSettings: '時間設定',
      deadline: '締切',
      timeLimit: '時間制限（分）',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'テスト完了に許可される時間',
      randomizationSettings: 'ランダム化設定',
      randomizeQuestions: '質問順序をランダム化',
      randomizeAnswers: '回答順序をランダム化',
      difficultyDistribution: '難易度分布',
      questionBank: '質問バンク',
      addQuestion: '質問を追加',
      filterByDifficulty: '難易度でフィルター',
      searchQuestions: '質問を検索',
      selectedQuestions: '選択された質問: {count}',
      assignToSection: 'セクションに割り当て',
      assign: '割り当て',
      sections: 'セクション',
      addSection: 'セクションを追加',
      questions: '質問',
      sectionTitle: 'セクションタイトル',
      sectionTitlePlaceholder: 'セクションタイトルを入力してください',
      sectionDescription: 'セクション説明',
      sectionDescriptionPlaceholder: 'セクションの説明',
      allDifficulties: 'すべての難易度',
      actions: {
        cancel: 'キャンセル',
        save: '保存',
        apply: '適用',
        delete: '削除',
        preview: 'プレビュー'
      },
      errors: {
        titleRequired: 'テストタイトルが必要です'
      }
    },
    pass: {
      exit: '終了',
      noQuestion: '質問が見つかりません',
      previous: '前へ',
      next: '次へ',
      finish: '完了',
      questionProgress: '{current} / {total}'
    },
    card: {
      questions: '質問',
      minutes: '分',
      yourResult: 'あなたの結果',
      completedAt: '完了日',
      totalPoints: '総ポイント',
      estimatedTime: '推定時間',
      passed: '合格',
      failed: '不合格',
      attempts: '試行',
      viewResult: '結果を表示',
      retake: '再受験',
      start: '開始',
      expired: '期限切れ',
      today: '今日',
      tomorrow: '明日',
      inDays: '{days}日後'
    }
  },
  imageUpload: {
    urlLabel: '画像URL',
    urlPlaceholder: 'https://example.com/image.jpg',
    urlRequired: '画像URLを入力してください',
    invalidUrl: '無効な画像URL',
    urlError: 'URLからの画像読み込みエラー',
    addUrl: 'URLを追加',
    or: 'または',
    fileLabel: 'ファイルをアップロード',
    fileHelp: 'サポート形式: JPG, PNG, GIF, WebP。最大サイズ: 5MB',
    fileRequired: '画像ファイルを選択してください',
    fileTooLarge: 'ファイルが大きすぎます。最大サイズ: {maxSize}',
    unsupportedFormat: 'サポートされていないファイル形式',
    fileError: 'ファイル処理エラー',
    loadError: '画像読み込みエラー',
    processing: '画像処理中...',
    error: 'エラー'
  },
  result: {
    title: 'テスト結果',
    totalScore: '総スコア',
    percentage: 'パーセンテージ',
    timeSpent: '所要時間',
    passed: '合格',
    failed: '不合格',
    status: 'ステータス',
    scoreBreakdown: 'スコア分析',
    overallProgress: '全体進捗',
    byDifficulty: '難易度別',
    timeAnalysis: '時間分析',
    completionTime: '完了時間',
    averageTimePerQuestion: '質問あたりの平均時間',
    completedAt: '完了日',
    timeLimit: '時間制限',
    detailedAnswers: '詳細回答',
    question: '質問',
    correct: '正解',
    incorrect: '不正解',
    selectedAnswers: '選択された回答',
    retakeTest: 'テストを再受験',
    shareResult: '結果を共有',
    downloadCertificate: '証明書をダウンロード'
  },
  leaderboard: {
    title: 'リーダーボード',
    subtitle: '全参加者の結果',
    sortBy: '並び替え',
    search: '検索',
    totalParticipants: '総参加者',
    passedCount: '合格',
    averageScore: '平均スコア',
    averageTime: '平均時間'
  },
  common: {
    loading: '読み込み中...',
    error: 'エラー',
    retry: '再試行'
  },
  layout: {
    author: {
      withLove: '愛を込めて',
      contacts: '連絡先'
    }
  }
} 