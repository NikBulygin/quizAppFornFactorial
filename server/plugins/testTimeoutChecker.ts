import { startTestTimeoutChecker } from '../utils/testTimeoutChecker'

export default defineNitroPlugin(() => {
  if (process.env.NODE_ENV === 'production') {
    startTestTimeoutChecker()
  } else {
    console.log('🔄 Test timeout checker disabled in development mode')
  }
}) 