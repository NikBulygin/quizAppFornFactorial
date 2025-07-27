export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn, ready } = useUserSession()
  
  const publicPaths = ['/', '/login', '/storybook', '/storybook/', '/docs', '/docs/']
  
  const isPublicPath = publicPaths.some(path => {
    if (path === '/') {
      return to.path === '/'
    }
    if (path.endsWith('/')) {
      return to.path.startsWith(path)
    }
    return to.path === path
  })
  
  const isPublicAsset = to.path.startsWith('/_nuxt/') || 
                       to.path.startsWith('/favicon.ico') ||
                       to.path.startsWith('/robots.txt') ||
                       to.path.startsWith('/sitemap.xml') ||
                       to.path.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
  
  if (isPublicPath || isPublicAsset) {
    return
  }
  
  if (!ready.value) {
    return
  }
  
  if (!loggedIn.value) {
    return navigateTo(`/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
}) 