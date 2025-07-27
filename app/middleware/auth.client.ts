export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()
  
  const publicPaths = ['/', '/login', '/storybook', '/storybook/']
  
  const isPublicPath = publicPaths.some(path => {
    if (path.endsWith('/')) {
      return to.path.startsWith(path)
    }
    return to.path === path
  })
  
  const isPublicAsset = to.path.startsWith('/_nuxt/') || 
                       to.path.startsWith('/favicon.ico') ||
                       to.path.startsWith('/robots.txt') ||
                       to.path.startsWith('/sitemap.xml') ||
                       to.path.includes('.')
  
  if (isPublicPath || isPublicAsset) {
    return
  }
  
  if (!loggedIn.value) {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
}) 