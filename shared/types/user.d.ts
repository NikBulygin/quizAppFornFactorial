// ============================================================================
// USER TYPES
// ============================================================================
export {}

declare global {

    interface User {
        id: string
        name?: string
        email?: string
        picture?: string
        nickname?: string
        role?: UserRole
        emailVerified?: boolean
        givenName?: string
        familyName?: string
        locale?: string
        updatedAt?: string
        loggedInAt?: string
      }
  
  type UserRole = 'user' | 'admin' | 'moderator'
  
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
    isOwnProfile?: boolean
    source?: string
  }
  
  // ============================================================================
  // COMPONENT PROPS
  // ============================================================================
  
  interface UserCardProps {
    user: User
    variant?: 'compact' | 'full'
    size?: 'sm' | 'md' | 'lg'
    showRole?: boolean
    clickable?: boolean
  }
  
  interface UserProfileProps {
    user: User
    showStats?: boolean
    editable?: boolean
  }
  
  // ============================================================================
  // UTILITY TYPES
  // ============================================================================
  
  type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
  type CardVariant = 'compact' | 'full' 
}