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

  interface SecureSessionData {
    apiToken?: string
  }
}

declare module '#auth-utils' {
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

  interface SecureSessionData {
    apiToken?: string
  }
}

declare module '@auth/core/types' {
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
}

export {} 