export {}

declare global {
  interface User {
    id: string
    name?: string
    email?: string
    picture?: string
    nickname?: string
    emailVerified?: boolean
    givenName?: string
    familyName?: string
    locale?: string
    updatedAt?: string
    loggedInAt?: string
  }

  interface UserSession {
    user: User
    loggedInAt?: string
    accessToken?: string
  }

  interface UserState {
    user: User | null
    userSession: UserSession | null
    isLoading: boolean
    error: string | null
  }

  interface UserApiResponse {
    id: string
    name?: string
    email?: string
    picture?: string
    nickname?: string
    emailVerified?: boolean
    givenName?: string
    familyName?: string
    locale?: string
    updatedAt?: string
    loggedInAt?: string
    isOwnProfile: boolean
    source: 'auth0_api' | 'session_fallback' | 'firebase' | 'fallback'
    requestedId: string
    currentUserId: string
  }

  interface Auth0User {
    user_id: string
    name?: string
    given_name?: string
    family_name?: string
    nickname?: string
    email?: string
    picture?: string
    locale?: string
    email_verified?: boolean
    updated_at?: string
  }

  interface Auth0TokenResponse {
    access_token: string
    token_type: string
    expires_in: number
    scope?: string
  }

  interface SessionUser {
    id: string
    name?: string
    email?: string
    picture?: string
    nickname?: string
  }

  interface TestQuestion {
    id: string
    title: string
    description?: string
    difficulty: 'easy' | 'medium' | 'hard'
    points: number
    answers: TestAnswer[]
    correctAnswerIds: string[]
  }

  interface TestAnswer {
    id: string
    text: string
  }

  interface TestSection {
    id: string
    title: string
    description?: string
    questions: string[]
    questionCount: number // Количество вопросов для генерации вариантов
  }

  interface Test {
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
    questionSectionLinks?: Array<{
      questionId: string
      sectionId: string
    }>
    authorId?: string
    author?: User
    tags?: string[]
    createdAt?: string
    updatedAt?: string
  }

  interface UserAnswer {
    questionId: string
    answerIds: string[]
  }

  interface PassedTest {
    id: string
    testId: string
    userId: string
    status: 'in_progress' | 'completed' | 'cancelled' | 'created'
    startTime: string
    endTime?: string
    timeSpent: number // в секундах
    userAnswers: Record<string, UserAnswer>
    totalScore: number
    maxScore: number
    percentage: number
    isPassed: boolean
    createdAt: string
    updatedAt: string
  }

  interface TestResult {
    id: string
    testId: string
    userId: string
    totalPoints: number
    maxPoints: number
    percentage: number
    isPassed: boolean
    timeSpent: number
    completedAt: string
  }

  interface TestSearchFilters {
    search?: string
    tags?: string[]
    difficulty?: 'easy' | 'medium' | 'hard'
    authorId?: string
    limit?: number
    offset?: number
  }

  interface TestSearchResponse {
    success: boolean
    data?: Test[]
    total?: number
    error?: string
    message?: string
  }

  interface PassedTestApiResponse {
    success: boolean
    data?: PassedTest
    error?: string
    message?: string
  }

  interface PassedTestListApiResponse {
    success: boolean
    data?: PassedTest[]
    error?: string
    message?: string
  }

  interface TestStatistics {
    testId: string
    totalAttempts: number
    passedAttempts: number
    averageScore: number
    averageTime: number
    bestScore: number
    worstScore: number
    completionRate: number
  }

  interface TestStatisticsApiResponse {
    success: boolean
    data?: TestStatistics
    error?: string
    message?: string
  }

  interface TestApiResponse {
    success: boolean
    data?: Test
    error?: string
    message?: string
  }

  interface TestListApiResponse {
    success: boolean
    data?: Test[]
    error?: string
    message?: string
  }

  interface UserCardProps {
    user: User
    variant?: 'compact' | 'full'
    size?: 'sm' | 'md' | 'lg'
    clickable?: boolean
  }

  interface UserProfileProps {
    user: User
    showStats?: boolean
    editable?: boolean
  }

  type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
  type CardVariant = 'compact' | 'full'
}