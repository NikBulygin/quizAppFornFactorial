export default {
  hello: 'こんにちは世界',
  language: {
    selectTitle: '言語選択',
    selectLanguage: '言語を選択',
    selectDescription: 'インターフェースの言語を選択してください'
  },
  home: {
    description: '現代的な学習プラットフォームで魅力的なテストを作成し、知識を確認しましょう',
    createTest: 'テストを作成',
    takeTest: 'テストを受験',
    create: {
      title: '作成',
      description: '様々な質問タイプと設定で簡単にテストを作成'
    },
    share: {
      title: '共有',
      description: 'テストを公開し、同僚や学生と共有'
    },
    analyze: {
      title: '分析',
      description: '詳細な統計と結果の分析を取得'
    },
    seo: {
      title: 'QuizApp - テストの作成と受験',
      description: '教育テストを作成・受験するための現代的なプラットフォーム。魅力的なテストを作成し、知識を確認しましょう。'
    },
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
      createTitle: 'テスト作成',
      editTitle: 'テスト編集',
      basicSettings: '基本設定',
      title: 'テストタイトル',
      titlePlaceholder: 'テストタイトルを入力',
      description: '説明',
      descriptionPlaceholder: 'テストの説明',
      tags: 'タグ',
      tagsPlaceholder: '数学, 代数, 方程式',
      tagsHelp: 'テストを分類するためにカンマ区切りでタグを入力',
      image: '画像',
      timeSettings: '時間設定',
      deadline: '締切',
      timeLimit: '制限時間（分）',
      timeLimitPlaceholder: '60',
      timeLimitHelp: 'テスト完了に許可される時間',
      randomizationSettings: 'ランダム化設定',
      randomizeQuestions: '問題の順序をランダム化',
      randomizeAnswers: '回答の順序をランダム化',
      difficultyDistribution: '難易度分布',
      totalPercentage: '合計パーセンテージ',
      resetDistribution: '分布をリセット',
      questionBank: '問題バンク',
      addQuestion: '問題を追加',
      filterByDifficulty: '難易度でフィルター',
      searchQuestions: '問題を検索',
      selectedQuestions: '選択された問題: {count}',
      assignToSection: 'セクションに割り当て',
      assign: '割り当て',
      sections: 'セクション',
      addSection: 'セクションを追加',
      editSection: 'セクションを編集',
      questions: '問題',
      sectionTitle: 'セクションタイトル',
      sectionTitlePlaceholder: 'セクションタイトルを入力',
      sectionDescription: 'セクション説明',
      sectionDescriptionPlaceholder: 'セクションの説明',
      sectionQuestionCount: '問題数',
      sectionQuestionCountPlaceholder: '10',
      allDifficulties: 'すべての難易度',
      actions: {
        cancel: 'キャンセル',
        save: '保存',
        apply: '適用',
        delete: '削除',
        preview: 'プレビュー'
      },
      errors: {
        titleRequired: 'テストタイトルは必須です',
        fileRequired: 'インポートするファイルを選択してください',
        invalidFileType: '無効なファイルタイプです。JSONファイルを選択してください'
      },
      importTest: 'テストをインポート',
      importTestDescription: 'JSONファイルからテストをインポートするか、JSON構造を貼り付け',
      importJson: 'テストJSON',
      importJsonPlaceholder: 'テストのJSON構造を貼り付け...',
      importText: 'テキスト',
      importFile: 'ファイル',
      selectFile: 'ファイルを選択',
      selectedFile: '選択されたファイル'
    },
    pass: {
      loading: 'テストを読み込み中...',
      restoring: '進捗を復元中...',
      error: 'テストの読み込みエラー',
      retry: '再試行',
      backToSearch: '検索に戻る',
      exit: '終了',
      exitConfirmation: '終了してもよろしいですか？すべての進捗が失われます。',
      noQuestion: '問題が見つかりません',
      previous: '前へ',
      next: '次へ',
      finish: 'テストを完了',
      questionProgress: '問題 {current} / {total}',
      answered: '回答済み',
      time: '時間',
      testNotFound: 'テストが見つかりません',
      instructions: '指示',
      instruction1: '問題を注意深く読んでください',
      instruction1Desc: '回答を選択する前に問題を理解していることを確認してください',
      instruction2: '時間に注意してください',
      instruction2Desc: 'テストを完了するための時間は限られています',
      instruction3: '進捗は自動的に保存されます',
      instruction3Desc: 'あなたの回答は5分ごとに保存されます'
    },
    result: {
      title: 'テスト結果',
      loading: '結果を読み込み中...',
      error: '結果の読み込みエラー',
      retry: '再試行',
      notFound: 'テスト結果が見つかりません',
      loadError: '結果を読み込めませんでした',
      testLoadError: 'テストデータを読み込めませんでした',
      percentage: '完了率',
      score: 'スコア',
      timeSpent: '所要時間',
      passed: 'テスト合格！',
      failed: 'テスト不合格',
      congratulations: 'おめでとうございます！テストに合格しました。',
      notEnoughPoints: '残念ながら、テストに合格するのに十分なポイントを獲得できませんでした。',
      detailedAnswers: '詳細な回答',
      findOtherTests: '他のテストを探す',
      myTests: 'マイテスト',
      totalScore: '総合スコア',
      status: 'ステータス',
      scoreBreakdown: 'スコア内訳',
      overallProgress: '全体的な進捗',
      byDifficulty: '難易度別',
      timeAnalysis: '時間分析',
      completionTime: '完了時間',
      averageTimePerQuestion: '問題あたりの平均時間',
      completedAt: '完了時間',
      timeLimit: '制限時間',
      question: '問題',
      correct: '正解',
      incorrect: '不正解',
      selectedAnswers: '選択された回答',
      retakeTest: 'テストを再受験',
      shareResult: '結果を共有',
      downloadCertificate: '証明書をダウンロード'
    },
    card: {
      questions: '問題',
      minutes: '分',
      yourResult: 'あなたの結果',
      completedAt: '完了日時',
      totalPoints: '総合ポイント',
      estimatedTime: '推定時間',
      passed: '合格',
      failed: '不合格',
      attempts: '回',
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
      name: 'Bulygin Nikita',
      contacts: '作者の連絡先',
      contactsDescription: '便利な方法でお問い合わせください',
      copy: 'コピー'
    }
  },
  auth: {
    signIn: 'ログイン',
    signOut: 'ログアウト',
    profile: 'プロフィール',
    myProfile: 'マイプロフィール',
    userProfile: 'ユーザープロフィール',
    notAuthenticated: '認証が必要です',
    notAuthenticatedDescription: '続行するにはログインしてください',
    userNotFound: 'ユーザーが見つかりません',
    userNotFoundDescription: '指定されたIDのユーザーが存在しません'
  },
  user: {
    profile: {
      title: 'プロフィール',
      information: 'プロフィール情報',
      statistics: '統計',
      actions: 'アクション',
      editProfile: 'プロフィール編集',
      totalQuizzes: '総クイズ数',
      completedQuizzes: '完了',
      averageScore: '平均スコア',
      registeredAt: '登録日',
      noName: '名前なし'
    }
  }
} 