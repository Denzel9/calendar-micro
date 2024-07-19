import { updateDoc, doc, arrayUnion } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { useUser } from '../context/useUser'

export const useUserService = () => {
  const { user, isLoading, setIsLoading } = useUser()

  const updateUserTemplates = async (id: string) => {
    setIsLoading(true)
    try {
      await updateDoc(doc(db, 'users', user?.docId), {
       templates: arrayUnion(id),
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateUserTags = async (tag: string) => {
    setIsLoading(true)
    try {
      await updateDoc(doc(db, 'users', user?.docId), {
       tags: arrayUnion(tag),
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    updateUserTemplates,
    updateUserTags
  }
}
