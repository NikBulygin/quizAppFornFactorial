// ============================================================================
// USER TYPES
// ============================================================================

export interface User {
  id: string
  name?: string
  email?: string
  picture?: string
  nickname?: string
}

export interface ExtendedUser extends User {
  givenName?: string
  familyName?: string
  locale?: string
  emailVerified?: boolean
  updatedAt?: string
  loggedInAt?: string
  isOwnProfile?: boolean
  source?: 'auth0_api' | 'session' | 'session_fallback'
}

export interface Auth0User {
  user_id: string
  name?: string
  email?: string
  picture?: string
  nickname?: string
  given_name?: string
  family_name?: string
  locale?: string
  updated_at?: string
  email_verified?: boolean
}

export interface SessionUser {
  id: string
  name?: string
  email?: string
  picture?: string
  nickname?: string
}

// ============================================================================
// SESSION & AUTHENTICATION
// ============================================================================

export interface UserSession {
  user: User
  loggedInAt: string
}

export interface UserState {
  user: User | null
  userSession: UserSession | null
  isLoading: boolean
  error: string | null
}

export interface Auth0TokenResponse {
  access_token: string
  token_type: string
  expires_in?: number
}

// ============================================================================
// API RESPONSES
// ============================================================================

export interface ApiResponse<T = unknown> {
  data?: T
  error?: string
  success: boolean
}

export interface UserApiResponse extends ExtendedUser {
  requestedId?: string
  currentUserId?: string
}

export interface PublicUserProfile {
  id: string
  name?: string
  picture?: string
  nickname?: string
  isOwnProfile: boolean
}

// ============================================================================
// QUIZZES & TESTS
// ============================================================================

export interface QuizQuestion {
  id: string
  text: string
  type: 'single' | 'multiple' | 'text' | 'number'
  options?: QuizOption[]
  correctAnswer?: string | string[]
  points: number
  timeLimit?: number
}

export interface QuizOption {
  id: string
  text: string
  isCorrect: boolean
}

export interface Quiz {
  id: string
  title: string
  description?: string
  authorId: string
  authorName?: string
  questions: QuizQuestion[]
  timeLimit?: number
  passingScore?: number
  isPublic: boolean
  createdAt: string
  updatedAt: string
  tags?: string[]
  difficulty?: 'easy' | 'medium' | 'hard'
  category?: string
}

export interface QuizResult {
  id: string
  quizId: string
  userId: string
  userName?: string
  score: number
  maxScore: number
  percentage: number
  timeSpent: number
  answers: QuizAnswer[]
  isPassed: boolean
  completedAt: string
  attempts: number
}

export interface QuizAnswer {
  questionId: string
  userAnswer: string | string[]
  isCorrect: boolean
  points: number
  timeSpent: number
}

// ============================================================================
// SETTINGS & CONFIGURATION
// ============================================================================

export interface AppSettings {
  theme: 'light' | 'dark' | 'auto'
  language: string
  notifications: boolean
  soundEnabled: boolean
}

export interface Auth0Config {
  domain: string
  clientId: string
  clientSecret: string
  m2mClientId: string
  m2mClientSecret: string
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type LoadingState = 'idle' | 'loading' | 'success' | 'error'
export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
export type ThemeColor = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info'
export type QuizDifficulty = 'easy' | 'medium' | 'hard'
export type QuizCategory = 'general' | 'science' | 'history' | 'literature' | 'sports' | 'entertainment' | 'technology' | 'other'

// ============================================================================
// API ENDPOINTS
// ============================================================================

export const API_ENDPOINTS = {
  USERS: {
    GET_BY_ID: (id: string) => `/api/user/${id}`,
    UPDATE_PROFILE: (id: string) => `/api/user/${id}`,
    GET_PROFILE: (id: string) => `/api/user/${id}/profile`,
  },
  
  QUIZZES: {
    LIST: '/api/quizzes',
    CREATE: '/api/quizzes',
    GET_BY_ID: (id: string) => `/api/quizzes/${id}`,
    UPDATE: (id: string) => `/api/quizzes/${id}`,
    DELETE: (id: string) => `/api/quizzes/${id}`,
    SUBMIT_RESULT: (id: string) => `/api/quizzes/${id}/submit`,
  },
  
  RESULTS: {
    GET_USER_RESULTS: (userId: string) => `/api/results/user/${userId}`,
    GET_QUIZ_RESULTS: (quizId: string) => `/api/results/quiz/${quizId}`,
  },
  
  AUTH: {
    LOGIN: '/api/auth/auth0',
    LOGOUT: '/api/auth/logout',
    CALLBACK: '/api/auth/callback',
  }
} as const

// ============================================================================
// VALIDATION
// ============================================================================

export interface ValidationError {
  field: string
  message: string
  code?: string
}

export interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
}

// ============================================================================
// ANALYTICS & EVENTS
// ============================================================================

export interface AnalyticsEvent {
  name: string
  properties?: Record<string, unknown>
  timestamp: string
  userId?: string
  sessionId?: string
}

export type AnalyticsEventType = 
  | 'quiz_started'
  | 'quiz_completed'
  | 'quiz_failed'
  | 'user_registered'
  | 'user_logged_in'
  | 'quiz_created'
  | 'quiz_shared' 