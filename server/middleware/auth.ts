export default defineEventHandler((event) => {
  const publicPaths = ['/', '/login', '/storybook', '/storybook/']
  const path = event.path || event.node.req.url
  
  const isPublicPath = publicPaths.some(publicPath => {
    if (publicPath === '/') {
      return path === '/'
    }
    if (publicPath.endsWith('/')) {
      return path?.startsWith(publicPath)
    }
    return path === publicPath
  })
  
  const isPublicAsset = path?.startsWith('/_nuxt/') || 
                       path?.startsWith('/favicon.ico') ||
                       path?.startsWith('/robots.txt') ||
                       path?.startsWith('/sitemap.xml') ||
                       path?.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)
  
  if (isPublicPath || isPublicAsset) {
    return
  }
  
  event.context.auth = { user: null }
}) 