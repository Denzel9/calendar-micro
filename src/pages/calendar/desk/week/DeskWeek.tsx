import { FunctionComponent } from 'react'
import NavigationItem from '../../navigation/NavigationItem'
import CalendarItem from '../../../../components/calendar-item/CalendarItem'
import { IEvent } from '../../../../types/event.types'
import { useCalendar } from '../../../../hooks/context/useCalendar'

interface DeskWeekProps {
  item: Date
  events: IEvent[]
}

const DeskWeek: FunctionComponent<DeskWeekProps> = ({ item, events }) => {
  const { filterCalendar } = useCalendar()
  return (
    <div className=" flex flex-col gap-3 ">
      <NavigationItem
        title={item.toLocaleDateString('ru-RU', { weekday: 'long' })}
        num={item.getDate()}
      />
      {events.map((el) => {
        return filterCalendar.includes(el.templates) || filterCalendar.includes('All') ? (
          <CalendarItem key={Math.random()} item={el} />
        ) : null
      })}
    </div>
  )
}

export default DeskWeek
