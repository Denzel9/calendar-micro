import { FunctionComponent, useState } from 'react'
import CalendarNav from './Nav'
import CalendarDesk from './desk/Desk'
import { month } from '../../../../helpers/getDate'
import Button from '../../../new/Button'
import classNames from 'classnames'

interface ICalendar {
  style?: string
}

const Calendar: FunctionComponent<ICalendar> = ({ style }) => {
  const [numberMonth, setNumberMonth] = useState(+month)

  return (
    <div className={classNames(' bg-zinc-800 rounded-lg p-5 z-10 ', !style && 'relative', style)}>
      <CalendarNav numberMonth={numberMonth} setNumberMonth={setNumberMonth} />
      <CalendarDesk numberMonth={numberMonth} />
    </div>
  )
}

export default Calendar
