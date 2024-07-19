import { FunctionComponent } from 'react'
import { useCalendar } from '../../../../hooks/context/useCalendar'
import ModeItem from './ModeItem'


const enum Date {
  WEEK = 'Неделя',
  MONTH = 'Месяц',
  DAY = 'День',
}

const Mode: FunctionComponent<{ scrollRef: () => void }> = ({ scrollRef }) => {
  const { calendarMode, setCalendarMode } = useCalendar()
  const handleClick = (date: Date) => {
    setCalendarMode(date)
    scrollRef()
  }
  return (
    <div className=" flex gap-5 text-white rounded-lg p-1  bg-zinc-800">
      <ModeItem title={'Месяц'} onClick={() => handleClick(Date.MONTH)} calendarMode={calendarMode} />
      <ModeItem title={'Неделя'} onClick={() => handleClick(Date.WEEK)} calendarMode={calendarMode} />
      <ModeItem title={'День'} onClick={() => handleClick(Date.DAY)} calendarMode={calendarMode} />
    </div>
  )
}

export default Mode
