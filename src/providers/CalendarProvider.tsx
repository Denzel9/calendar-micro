import { createContext, FunctionComponent, ReactNode, useState } from 'react'
import { month, today, year } from '../helpers/getDate'
import { getPadStartFormatDate } from '../helpers/formatDate'

export const CalendarContext = createContext({} as ICalendarContext)

interface ICalendarContext {
  calendarMode: 'Месяц' | 'Неделя' | 'День'
  setCalendarMode(isActive: 'Месяц' | 'Неделя' | 'День'): void
  numberMonth: number
  setNumberMonth: (numberMonth: number) => void
  date: string
  setDate: (date: string) => void
  filterCalendar: string[]
  setFilterCalendar: (filterCalendar: string[]) => void
}

const CalendarProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [calendarMode, setCalendarMode] = useState<'Месяц' | 'Неделя' | 'День'>('Неделя')
  const [numberMonth, setNumberMonth] = useState(+month)
  const [filterCalendar, setFilterCalendar] = useState(['All'])
  const [date, setDate] = useState(`${getPadStartFormatDate(today)}-${getPadStartFormatDate(numberMonth + 1)}-${year}`)

  const contextValue = {
    calendarMode,
    setCalendarMode,
    numberMonth,
    setNumberMonth,
    date,
    setDate,
    filterCalendar,
    setFilterCalendar,
  }
  return <CalendarContext.Provider value={contextValue}>{children}</CalendarContext.Provider>
}

export default CalendarProvider
