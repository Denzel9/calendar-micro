import { useContext } from 'react'
import { EventsContext } from '../../providers/EventsProvider'

export const useEvents = () => {
  const events = useContext(EventsContext)
  return { ...events }
}
