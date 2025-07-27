export const API_ENDPOINTS = {
  USERS: {
    GET_BY_ID: (id: string) => `/api/user/${encodeURIComponent(id)}`
  },
  TESTS: {
    CREATE: '/api/test',
    GET_BY_ID: (id: string) => `/api/test/${encodeURIComponent(id)}`,
    UPDATE: (id: string) => `/api/test/${encodeURIComponent(id)}`,
    DELETE: (id: string) => `/api/test/${encodeURIComponent(id)}`,
    LIST: '/api/test'
  }
} as const

export const TEST_MODE_PARAMS = {
  ENABLE: '?test=true',
  DISABLE: ''
} as const 