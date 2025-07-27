export default defineEventHandler(async (event): Promise<UserApiResponse> => {
  const { id: rawId } = getRouterParams(event)
  
  if (!rawId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'User ID is required'
    })
  }

  const requestedId = decodeURIComponent(rawId)
  const config = useRuntimeConfig()
  
  try {
    const tokenResponse = await $fetch<Auth0TokenResponse>('https://' + config.oauth.auth0.domain + '/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        client_id: config.auth0.m2mClientId,
        client_secret: config.auth0.m2mClientSecret,
        audience: 'https://' + config.oauth.auth0.domain + '/api/v2/',
        grant_type: 'client_credentials'
      }
    })

    const auth0User = await $fetch<Auth0User>('https://' + config.oauth.auth0.domain + '/api/v2/users/' + requestedId, {
      headers: {
        Authorization: `Bearer ${tokenResponse.access_token}`
      }
    })

    const userResponse: UserApiResponse = {
      id: auth0User.user_id,
      name: auth0User.name,
      email: auth0User.email,
      picture: auth0User.picture,
      nickname: auth0User.nickname,
      emailVerified: auth0User.email_verified,
      givenName: auth0User.given_name,
      familyName: auth0User.family_name,
      locale: auth0User.locale,
      updatedAt: auth0User.updated_at,
      isOwnProfile: false,
      source: 'auth0_api',
      requestedId,
      currentUserId: ''
    }

    return userResponse

  } catch {
    const session = await getUserSession(event)
    if (session?.user?.id === requestedId) {
      return {
        id: session.user.id,
        name: session.user.name,
        email: session.user.email,
        picture: session.user.picture,
        nickname: session.user.nickname,
        isOwnProfile: true,
        source: 'session_fallback',
        requestedId,
        currentUserId: session.user.id
      }
    }
    
    throw createError({
      statusCode: 404,
      statusMessage: 'User not found'
    })
  }
}) 