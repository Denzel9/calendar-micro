import { useContext } from 'react'
import { addDoc, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { EventsContext } from '../../providers/EventsProvider'
import { db } from '../../config/firebase'
import { EStatus } from '../../types/event.types'
import { IMedia } from '../../types/media.types'
import { useUser } from '../context/useUser'
import { useNoteContext } from '../context/useNoteContext'

export const useMediaService = () => {
  const { setIsLoading, isLoading } = useContext(EventsContext)
  const { templateType } = useNoteContext()
  const { user } = useUser()

  const addMedia = async (book: IMedia) => {
    setIsLoading(true)
    try {
      await addDoc(collection(db, 'media'), {
        ...book,
        userId: user?.docId,
        type: templateType,
      })
    } catch (error: any) {
      console.log('Error add event:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteMedia = async (id: string) => {
    setIsLoading(true)
    try {
      await deleteDoc(doc(db, 'media', id))
    } catch (error: any) {
      console.log('Error delete:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateMediaStatus = async (id: string, status: EStatus) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'media', id), {
        status: status,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateMediaRate = async (id: string, rate: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'media', id), {
        rate,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateMediaImage = async (id: string, img: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'media', id), {
        img,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    addMedia,
    deleteMedia,
    updateMediaStatus,
    updateMediaRate,
    updateMediaImage,
  }
}
