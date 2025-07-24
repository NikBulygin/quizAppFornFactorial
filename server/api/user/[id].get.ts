import type { 
  SessionUser, 
  Auth0User, 
  Auth0TokenResponse,
  UserApiResponse 
} from '~/types'

export default defineEventHandler(async (event): Promise<UserApiResponse> => {
  const { id: rawId } = getRouterParams(event)
  
  if (!rawId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required'
    })
  }

  const id = decodeURIComponent(rawId)

  try {
    const session = await getUserSession(event)
    
    if (!session?.user) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Authentication required'
      })
    }

    const currentUser = session.user as SessionUser
    const runtimeConfig = useRuntimeConfig()
    const domain = runtimeConfig.oauth.auth0.domain || runtimeConfig.public.oauth.auth0.domain
    
    if (!domain) {
      throw new Error('Auth0 domain not configured')
    }

    try {
      const tokenResponse = await $fetch<Auth0TokenResponse>(`https://${domain}/oauth/token`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          client_id: runtimeConfig.auth0.m2mClientId,
          client_secret: runtimeConfig.auth0.m2mClientSecret,
          audience: `https://${domain}/api/v2/`,
          grant_type: 'client_credentials'
        }
      })

      const userData = await $fetch<Auth0User>(`https://${domain}/api/v2/users/${encodeURIComponent(id)}`, {
        headers: {
          'Authorization': `Bearer ${tokenResponse.access_token}`,
          'Content-Type': 'application/json'
        }
      })

      const isOwnProfile = currentUser.id === id

      const response: UserApiResponse = {
        id: userData.user_id,
        name: userData.name || userData.given_name || userData.nickname,
        email: isOwnProfile ? userData.email : undefined,
        picture: userData.picture,
        nickname: userData.nickname,
        givenName: userData.given_name,
        familyName: userData.family_name,
        locale: userData.locale,
        emailVerified: isOwnProfile ? userData.email_verified : undefined,
        updatedAt: userData.updated_at,
        loggedInAt: isOwnProfile ? session.loggedInAt : undefined,
        isOwnProfile: isOwnProfile,
        source: 'auth0_api',
        requestedId: id,
        currentUserId: currentUser.id
      }
      
      return response

    } catch {
      const isOwnProfile = currentUser.id === id
      
      const fallbackResponse: UserApiResponse = {
        id: id,
        name: isOwnProfile ? (currentUser.name || 'User') : 'User',
        email: isOwnProfile ? currentUser.email : undefined,
        picture: isOwnProfile ? currentUser.picture : null,
        nickname: isOwnProfile ? currentUser.nickname : undefined,
        loggedInAt: isOwnProfile ? session.loggedInAt : undefined,
        isOwnProfile: isOwnProfile,
        source: 'session_fallback',
        requestedId: id,
        currentUserId: currentUser.id
      }
      
      return fallbackResponse
    }

  } catch {
    throw createError({
      statusCode: 500,
      statusMessage: 'Server error while fetching user information'
    })
  }
}) 