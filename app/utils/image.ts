/**
 * Утилиты для работы с изображениями
 */

export interface ImageUploadResult {
  data: string // base64 или URL
  type: 'url' | 'base64'
  filename?: string
  size?: number
}

/**
 * Валидация URL изображения
 */
export const isValidImageUrl = (url: string): boolean => {
  try {
    const urlObj = new URL(url)
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']
    const pathname = urlObj.pathname.toLowerCase()
    
    return imageExtensions.some(ext => pathname.endsWith(ext)) || 
           urlObj.hostname.includes('imgur.com') ||
           urlObj.hostname.includes('cloudinary.com') ||
           urlObj.hostname.includes('images.unsplash.com')
  } catch {
    return false
  }
}

/**
 * Сжатие изображения
 */
export const compressImage = (
  file: File, 
  maxWidth: number = 800, 
  maxHeight: number = 600, 
  quality: number = 0.8
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new Image()
    
    img.onload = () => {
      let { width, height } = img
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width
        width = maxWidth
      }
      
      if (height > maxHeight) {
        width = (width * maxHeight) / height
        height = maxHeight
      }
      
      canvas.width = width
      canvas.height = height
      
      ctx?.drawImage(img, 0, 0, width, height)
      
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob)
          } else {
            reject(new Error('Failed to compress image'))
          }
        },
        'image/jpeg',
        quality
      )
    }
    
    img.onerror = () => reject(new Error('Failed to load image'))
    img.src = URL.createObjectURL(file)
  })
}

/**
 * Конвертация файла в base64
 */
export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = () => reject(new Error('Failed to read file'))
    reader.readAsDataURL(file)
  })
}

/**
 * Загрузка изображения по URL и конвертация в base64
 */
export const urlToBase64 = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url)
    const blob = await response.blob()
    return await fileToBase64(blob as File)
  } catch {
    throw new Error('Failed to load image from URL')
  }
}

/**
 * Обработка загрузки файла изображения
 */
export const handleImageFileUpload = async (
  file: File,
  compress: boolean = true
): Promise<ImageUploadResult> => {
  try {
    let processedFile = file
    
    if (compress && file.size > 1024 * 1024) { // Больше 1MB
      const compressedBlob = await compressImage(file)
      processedFile = new File([compressedBlob], file.name, { type: compressedBlob.type })
    }
    
    const base64 = await fileToBase64(processedFile)
    
    return {
      data: base64,
      type: 'base64',
      filename: file.name,
      size: processedFile.size
    }
  } catch {
    throw new Error('Failed to process image file')
  }
}

/**
 * Обработка загрузки изображения по URL
 */
export const handleImageUrlUpload = async (
  url: string,
  convertToBase64: boolean = false
): Promise<ImageUploadResult> => {
  try {
    if (!isValidImageUrl(url)) {
      throw new Error('Invalid image URL')
    }
    
    if (convertToBase64) {
      const base64 = await urlToBase64(url)
      return {
        data: base64,
        type: 'base64',
        filename: url.split('/').pop() || 'image.jpg'
      }
    } else {
      return {
        data: url,
        type: 'url',
        filename: url.split('/').pop() || 'image.jpg'
      }
    }
  } catch {
    throw new Error('Failed to process image URL')
  }
}

/**
 * Получение размера изображения в читаемом формате
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Проверка поддерживаемых форматов изображений
 */
export const isSupportedImageFormat = (file: File): boolean => {
  const supportedTypes = [
    'image/jpeg',
    'image/jpg', 
    'image/png',
    'image/gif',
    'image/webp'
  ]
  
  return supportedTypes.includes(file.type)
} 