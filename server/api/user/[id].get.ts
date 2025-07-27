import { initializeApp, getApps, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import type { ServiceAccount } from 'firebase-admin'

export default defineEventHandler(async (event): Promise<UserApiResponse> => {
  const config = useRuntimeConfig()
  const { id } = getRouterParams(event)
  const session = await getUserSession(event)
  
  const currentUserId = session.user?.id || 'anonymous'
  const isOwnProfile = currentUserId === id

  try {
    if (getApps().length === 0) {
      initializeApp({
        credential: cert(config.firebase.serviceAccount as ServiceAccount)
      })
    }

    const db = getFirestore()
    const userDoc = await db.collection('users').doc(id as string).get()

    if (!userDoc.exists) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found'
      })
    }

    const userData = userDoc.data() as User

    return {
      id: userData.id,
      name: userData.name,
      email: userData.email,
      picture: userData.picture,
      nickname: userData.nickname,
      emailVerified: userData.emailVerified,
      givenName: userData.givenName,
      familyName: userData.familyName,
      locale: userData.locale,
      updatedAt: userData.updatedAt,
      loggedInAt: userData.loggedInAt,
      isOwnProfile,
      source: 'firebase' as const,
      requestedId: id as string,
      currentUserId
    }

  } catch (error) {
    
    
    return {
      id: id as string,
      name: 'Unknown User',
      email: 'unknown@example.com',
      picture: '',
      nickname: 'unknown',
      emailVerified: false,
      givenName: '',
      familyName: '',
      locale: 'en',
      updatedAt: new Date().toISOString(),
      loggedInAt: new Date().toISOString(),
      isOwnProfile,
      source: 'fallback' as const,
      requestedId: id as string,
      currentUserId
    }
  }
}) 