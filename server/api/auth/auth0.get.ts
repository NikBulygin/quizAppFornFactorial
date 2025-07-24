export default defineOAuthAuth0EventHandler({
  onSuccess(event, { user }) {
    return setUserSession(event, {
      user: {
        id: user.sub,
        name: user.name,
        email: user.email,
        picture: user.picture,
        nickname: user.nickname,
      },
      loggedInAt: new Date().toISOString(),
    }).then(() => sendRedirect(event, '/'))
  },
  onError(event, error) {
    console.error('Auth0 OAuth error:', error)
    return sendRedirect(event, '/login?error=oauth')
  },
}) 