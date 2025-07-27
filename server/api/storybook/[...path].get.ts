import { readFile } from 'node:fs/promises'

export default defineEventHandler(async (event) => {
  const path = getRouterParam(event, 'path')
  
  try {
    const filePath = `storybook-static/${path}`
    const file = await readFile(filePath)
    
    const ext = path?.split('.').pop()
    const mimeTypes: Record<string, string> = {
      'html': 'text/html',
      'js': 'application/javascript',
      'css': 'text/css',
      'json': 'application/json',
      'svg': 'image/svg+xml',
      'woff2': 'font/woff2'
    }
    
    setHeader(event, 'Content-Type', mimeTypes[ext || ''] || 'text/plain')
    return file
  } catch {
    throw createError({
      statusCode: 404,
      statusMessage: `Storybook file not found: ${path}`
    })
  }
}) 