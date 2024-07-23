import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../config/firebase'
import { EMPTY_EVENT, EStatus, IEvent } from '../types/event.types'
import { month, today, year } from '../helpers/getDate'
import { getSliceFormatDay, getSliceFormatMonth } from '../helpers/formatDate'
import { useUser } from '../hooks/context/useUser'
import { useCalendar } from '../hooks/context/useCalendar'

interface IEventContext {
  dataList: IEvent[]
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
  currentEvent: IEvent
  dayEvents: (day: number, month: string) => IEvent[]

  data: IEvent
  setData: (data: IEvent) => void
}

export const EventsContext = createContext({} as IEventContext)

const EventsProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [dataList, setDataList] = useState([] as IEvent[])
  const { id, user } = useUser()
  const { date } = useCalendar()

  const [data, setData] = useState<IEvent>({ ...EMPTY_EVENT })

  useEffect(() => {
    setData({
      ...data,
      author: user?.name,
      userId: user?.docId,
      date: date || `${today}-${month}-${year}`,
    })
  }, [user])

  useEffect(() => {
    onSnapshot(query(collection(db, 'calendar'), where('userId', '==', id)), (snapshot) => {
      const eventsList = snapshot.docs.map((el) => ({
        ...(el.data() as Omit<IEvent, 'docId'>),
        docId: el.id,
      }))

      setDataList(eventsList)
      setIsLoading(false)
    })
  }, [])

  const currentEvent = dataList?.filter((el) => {
    if (+getSliceFormatDay(el?.date) >= today && +getSliceFormatMonth(el?.date) === +month + 1) {
      return el
    }
  })[0]

  const dayEvents = (day: number, month: string) =>
    dataList?.filter((el) => {
      if (
        !el?.trash &&
        +getSliceFormatDay(el?.date) === day &&
        +getSliceFormatMonth(el?.date) === +month + 1
      ) {
        return el
      }
    })

  const value = { dataList, isLoading, setIsLoading, currentEvent, dayEvents, data, setData }

  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
}

export default EventsProvider
