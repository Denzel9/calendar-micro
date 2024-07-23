import { useContext } from 'react'
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from 'firebase/firestore'
import { EventsContext } from '../../providers/EventsProvider'
import { db } from '../../config/firebase'
import { EStatus, IEvent } from '../../types/event.types'
import { useUser } from '../context/useUser'
import { today, month, year } from '../../helpers/getDate'

export const useEventsService = () => {
  const { setIsLoading, isLoading } = useContext(EventsContext)
  const { user } = useUser()

  const addEvent = async (event: IEvent) => {
    setIsLoading(true)
    try {
      await addDoc(collection(db, 'calendar'), {
        ...event,
        userId: user && user?.docId,
        author: user && user?.name,
        date: event?.date || `${today}-${month}-${year}`,
        time: event?.time ? `${event?.time?.hour()}:${event?.time?.minute()}` : '',
      })
    } catch (error: any) {
      console.log('Error add event:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteEvent = async (id: string) => {
    setIsLoading(true)
    try {
      await deleteDoc(doc(db, 'calendar', id))
    } catch (error: any) {
      console.log('Error delete:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventStatus = async (id: string, status: EStatus) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        status: status,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventDate = async (id: string, date: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        date: date,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventTime = async (id: string, time: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        time: time.toString(),
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventLink = async (id: string, link: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        link: link,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventText = async (id: string, text: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        text: text,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventComments = async (id: string, comment: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        comments: arrayUnion({ author: user?.name, comment, date: `${today}-${month}-${year}` }),
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const deleteEventComments = async (id: string, comment: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        comments: arrayRemove({ author: user?.name, comment, date: `${today}-${month}-${year}` }),
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventTrash = async (id: string, trash: boolean) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        trash: trash,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventTags = async (id: string, tags: string[]) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        tags: tags,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventTemplate = async (id: string, template: string) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        templates: template,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const updateEventAssign = async (id: string, assign: string[]) => {
    setIsLoading(true)

    try {
      await updateDoc(doc(db, 'calendar', id), {
        assign: assign,
      })
    } catch (error: any) {
      console.log('Error update:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    isLoading,
    addEvent,
    deleteEvent,
    updateEventStatus,
    updateEventTime,
    updateEventDate,
    updateEventLink,
    updateEventText,
    updateEventComments,
    deleteEventComments,
    updateEventTrash,
    updateEventTags,
    updateEventTemplate,
    updateEventAssign,
  }
}
