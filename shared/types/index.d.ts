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
    description: string
    image?: string
    deadline?: string
    timeLimit: number
    randomizeQuestions: boolean
    randomizeAnswers: boolean
    difficultyDistribution: {
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
    authorId: string // Только ID автора
    tags: string[] // Массив тегов
    createdAt: string
    updatedAt: string
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