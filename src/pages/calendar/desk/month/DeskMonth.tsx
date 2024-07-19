import { FunctionComponent } from 'react'
import NavigationItem from '../../navigation/NavigationItem'
import { IEvent } from '../../../../types/event.types'
import CalendarItem from '../../../../components/calendar-item/CalendarItem'
import { getSliceFormatMonth } from '../../../../helpers/formatDate'
import { months } from '../../../../helpers/getDate'

interface DeskMonthProps {
  item: string
  events: IEvent[]
}

const DeskMonth: FunctionComponent<DeskMonthProps> = ({ item, events }) => {
  return (
    <div className=" flex flex-col gap-3">
      <NavigationItem title={item.toString()} />
      {events.map((el, index) => {
        if (months[+getSliceFormatMonth(el.date) - 1] === item) {
          return <CalendarItem item={el} style={index > 0 && '-mt-20'} />
        } else return null
      })}
    </div>
  )
}

export default DeskMonth
