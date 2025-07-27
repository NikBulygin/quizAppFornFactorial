export {}

declare global {
  
  export interface Test {
    id: string
    title: string
    description?: string
    image?: string
    deadline?: string
    timeLimit?: number
    randomizeQuestions?: boolean
    randomizeAnswers?: boolean
    difficultyDistribution?: {
      easy: number
      medium: number
      hard: number
    }
    sections: TestSection[]
    questions: TestQuestion[]
    questionSectionLinks: QuestionSectionLink[] // Связи вопросов с секциями
    author: User
    createdAt: string
    updatedAt: string
  }

  export interface TestSection {
    id: string
    title: string
    description?: string
  }

  export interface QuestionSectionLink {
    questionId: string
    sectionId: string
    sectionTitle?: string // Optional, can be derived
  }

  export interface TestQuestion {
    id: string
    title: string
    description?: string
    difficulty: 'easy' | 'medium' | 'hard'
    points: number
    image?: string
    answers: TestAnswer[]
    correctAnswerIds?: string[]
    correctAnswersCount?: number // Количество правильных ответов для клиента
    explanation?: string
  }

  export interface TestAnswer {
    id: string
    text: string
    description?: string
  }

  export interface TestSettings {
    timeLimit?: number // minutes, 0 = no limit
    deadline?: string // ISO date string
    maxAttempts?: number // 0 = unlimited
    passingScore: number // percentage
    allowRetake?: boolean
    randomizeQuestions?: boolean
    randomizeAnswers?: boolean
    showResults?: boolean
    isPublic?: boolean
    allowComments?: boolean
  }

  export interface TestMetadata {
    totalQuestions?: number
    totalPoints?: number
    estimatedTime?: number // minutes
    difficulty?: TestDifficulty
    tags?: string[]
    category?: string
    attempts?: number
    averageScore?: number
  }

  
  type QuestionDifficulty = 'easy' | 'medium' | 'hard'
  type TestDifficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert'
  type TestStatus = 'draft' | 'published' | 'archived'
  type QuestionStatus = 'outline' | 'primary' | 'success' | 'error'

  
  interface TestProgress {
    id: string
    testId: string
    userId: string
    currentSection: number
    currentQuestion: number
    answers: UserAnswer[]
    startTime: string
    endTime?: string
    timeSpent: number // seconds
    score?: number
    percentage?: number
    isCompleted: boolean
    isPassed?: boolean
  }

  export interface UserAnswer {
    questionId: string
    answerIds: string[]
    isCorrect?: boolean
    points?: number
  }

  
  export interface TestResult {
    testId: string
    userId: string
    answers: UserAnswer[]
    totalPoints: number
    maxPoints: number
    percentage: number
    timeSpent: number
    completedAt: string
    isPassed: boolean
  }

  
  interface QuestionBank {
    id: string
    name: string
    description?: string
    questions: TestQuestion[]
    tags: string[]
    category: string
    authorId: string
    isPublic: boolean
    createdAt: string
    updatedAt: string
  }

  
  interface TestBuilder {
    test: Test
    questionBank: TestQuestion[]
    selectedQuestions: string[] // question IDs
    dragState?: DragState
  }

  interface DragState {
    isDragging: boolean
    draggedQuestionId?: string
    sourceSectionId?: string
    targetSectionId?: string
  }

  
  export interface TestNavigation {
    sections: {
      id: string
      title: string
      questionCount: number
      completedQuestions: number
      isCompleted: boolean
      questionIds?: string[] // ID вопросов в этой секции
    }[]
    currentSection: number
    currentQuestion: number
    questionStatuses: Record<string, 'outline' | 'primary' | 'success' | 'error'>
  }

  interface SectionNavigation {
    id: string
    title: string
    questionCount: number
    completedQuestions: number
    isCompleted: boolean
  }

  
  export interface TestTimer {
    mode: 'countdown' | 'time'
    deadline?: string
    timeLimit?: number
    isExpired?: boolean
  }

  
  interface TestExport {
    version: string
    test: Test
    questionBank?: TestQuestion[]
    metadata: {
      exportedAt: string
      exportedBy: string
      version: string
    }
  }

  interface TestImport {
    file: File
    data?: TestExport
    validation: ImportValidation
  }

  interface ImportValidation {
    isValid: boolean
    errors: string[]
    warnings: string[]
  }

  
  interface TestCardProps {
    test: Test
    variant?: 'default' | 'compact' | 'detailed'
    showAuthor?: boolean
    showStats?: boolean
    clickable?: boolean
  }

  interface TestBuilderProps {
    test?: Test
    questionBank?: TestQuestion[]
    onSave?: (test: Test) => void
    onPublish?: (test: Test) => void
  }

  interface TestNavigationProps {
    navigation: TestNavigation
    onSectionChange?: (sectionIndex: number) => void
    onQuestionChange?: (questionIndex: number) => void
  }

  interface TestTimerProps {
    timer: TestTimer
    showWarning?: boolean
    warningThreshold?: number // seconds
  }

  interface QuestionCardProps {
    question: TestQuestion
    variant?: 'default' | 'compact' | 'preview'
    showAnswers?: boolean
    showExplanation?: boolean
    userAnswer?: UserAnswer
    onAnswer?: (answer: UserAnswer) => void
  }

  interface QuestionBankProps {
    questions: TestQuestion[]
    onQuestionSelect?: (question: TestQuestion) => void
    onQuestionDrag?: (questionId: string) => void
    searchTerm?: string
    filters?: QuestionFilters
  }

  interface QuestionFilters {
    difficulty?: QuestionDifficulty[]
    category?: string
  }
} 