import { FunctionComponent } from 'react'
import { weekDaysShorts } from '../../../../../helpers/getDate'
import { listDaysCalendarField } from '../../../../../helpers/getCalendar'
import CalendarDeskItem from './Item'

const CalendarDesk: FunctionComponent<{
  numberMonth: number
}> = ({ numberMonth }) => {
  return (
    <>
      <div className=" flex items-center justify-between text-white mt-5">
        {weekDaysShorts.map((el) => {
          return (
            <span className="opacity-30 font-light text-xs" key={el + Math.random()}>
              {el}
            </span>
          )
        })}
      </div>
      <div className="grid grid-cols-7 grid-rows-5 gap-y-3 gap-x-5 text-white mt-5 -ml-1">
        {listDaysCalendarField(+numberMonth)?.map((el, i) => {
          return (
            <CalendarDeskItem key={i + Math.random()} number={el} numberMonth={numberMonth} i={i} />
          )
        })}
      </div>
    </>
  )
}

export default CalendarDesk
