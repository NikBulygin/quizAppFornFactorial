// Date formatting utilities
export const formatDate = (dateString: string, locale = 'en-US'): string => {
  if (!dateString) return 'Not specified'
  try {
    return new Date(dateString).toLocaleString(locale)
  } catch {
    return dateString
  }
}

export const formatRelativeTime = (dateString: string): string => {
  if (!dateString) return 'Not specified'
  
  try {
    const date = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)
    
    if (diffInSeconds < 60) return 'Just now'
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`
    if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)}d ago`
    
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    })
  } catch {
    return dateString
  }
}

// String utilities
export const truncateText = (text: string, maxLength: number): string => {
  if (!text || text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}

export const capitalizeFirst = (text: string): string => {
  if (!text) return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Array utilities
export const uniqueArray = <T>(array: T[]): T[] => {
  return [...new Set(array)]
}

export const groupBy = <T, K extends string | number | symbol>(array: T[], key: (item: T) => K): Record<K, T[]> => {
  return array.reduce((groups, item) => {
    const group = key(item)
    if (!groups[group]) groups[group] = []
    groups[group].push(item)
    return groups
  }, {} as Record<K, T[]>)
}

// Number utilities
export const formatNumber = (num: number, locale = 'en-US'): string => {
  return new Intl.NumberFormat(locale).format(num)
}

export const formatPercentage = (value: number, total: number): string => {
  if (total === 0) return '0%'
  return `${Math.round((value / total) * 100)}%`
}

// Color utilities
export const getContrastColor = (hexColor: string): string => {
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness > 128 ? '#000000' : '#ffffff'
}

// Storage utilities
export const setLocalStorage = (key: string, value: unknown): void => {
  if (import.meta.client) {
    localStorage.setItem(key, JSON.stringify(value))
  }
}

export const getLocalStorage = <T>(key: string, defaultValue: T): T => {
  if (import.meta.client) {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  }
  return defaultValue
}

export const removeLocalStorage = (key: string): void => {
  if (import.meta.client) {
    localStorage.removeItem(key)
  }
} 