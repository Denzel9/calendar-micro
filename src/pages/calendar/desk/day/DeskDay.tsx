import { FunctionComponent } from 'react'
import classNames from 'classnames'
import NavigationItem from '../../navigation/NavigationItem'
import { EventTypes, IEvent } from '../../../../types/event.types'
import CalendarItem from '../../../../components/calendar-item/CalendarItem'
import { getSliceFormatMonth } from '../../../../helpers/formatDate'
import { months } from '../../../../helpers/getDate'

interface DeskDayProps {
  item: string
  events: IEvent[]
}

const DeskDay: FunctionComponent<DeskDayProps> = ({ item, events }) => {
  return (
    <div className=" flex flex-col gap-3">
      <NavigationItem title={item.toString()} />
      {events.map((el, index) => {
        if (months[+getSliceFormatMonth(el.date) - 1] === item) {
          return (
            <div
              className={classNames(index > 0 && '-mt-20')}
              key={months[+getSliceFormatMonth(el.date) - 1] + el.time}
            >
              <CalendarItem key={Math.random()} item={el} />
            </div>
          )
        } else return null
      })}
    </div>
  )
}

export default DeskDay
