export default defineOAuthAuth0EventHandler({
  config: {
    emailRequired: true,
    scope: ['openid', 'profile', 'email']
  },
  async onSuccess(event, { user }) {
    const redirectUrl = getQuery(event).redirect || '/'
    const hasProviderData = user.name || user.picture || user.nickname
    
    if (hasProviderData) {
      await setUserSession(event, {
        user: {
          id: user.sub,
          name: user.name,
          email: user.email,
          picture: user.picture,
          nickname: user.nickname
        },
        loggedInAt: new Date().toISOString()
      })
    } else {
      const emailName = user.email?.split('@')[0] || 'user'
      const displayName = emailName.charAt(0).toUpperCase() + emailName.slice(1)
      const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(displayName)}&background=random&color=fff&size=200`
      
      await setUserSession(event, {
        user: {
          id: user.sub,
          name: displayName,
          email: user.email,
          picture: avatarUrl,
          nickname: emailName
        },
        loggedInAt: new Date().toISOString()
      })
    }
    
    return sendRedirect(event, String(redirectUrl))
  },
  onError(event, _error) {
    return sendRedirect(event, '/')
  }
}) 