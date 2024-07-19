import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { useContext } from 'react'
import { db } from '../../config/firebase'
import { EventsContext } from '../../providers/EventsProvider'
import { useUser } from '../context/useUser'
import { ITemplate } from '../../types/template.types'
import { useUserService } from './useUserService'

export const useTemplatesService = () => {
  const { setIsLoading, isLoading } = useContext(EventsContext)
  const { updateUserTemplates } = useUserService()
  const { user } = useUser()

  const addTemplates = async (template: ITemplate | Partial<ITemplate>) => {
    setIsLoading(true)
    try {
      await addDoc(collection(db, 'templates'), {
        author: user.name,
        date: template.date,
        title: template.title,
        text: template.text || '',
        tags: template.tags || [],
        type: template.type,
        link: template.link || '',
        imgLink: template.imgLink || '',
        assign: template.assign || [],
        comments: template.comments || [],
        userId: user?.docId,
      }).then((res) => updateUserTemplates(res.id))
    } catch (error: any) {
      console.log('Error add event:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteTemplates = async (id: string) => {
    setIsLoading(true)
    try {
      await deleteDoc(doc(db, 'templates', id))
    } catch (error: any) {
      console.log('Error delete:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateTemplates = async (id: string, isComplete: boolean) => {
    setIsLoading(true)
    try {
      await updateDoc(doc(db, 'templates', id), {
        isComplete: isComplete,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    addTemplates,
    deleteTemplates,
    updateTemplates,
  }
}
