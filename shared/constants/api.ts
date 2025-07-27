export const API_ENDPOINTS = {
  USERS: {
    GET_BY_ID: (id: string) => `/api/user/${encodeURIComponent(id)}`
  }
} as const 