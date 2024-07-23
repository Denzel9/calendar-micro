import classNames from 'classnames'
import { FunctionComponent } from 'react'
import {
  getPadStartFormatDate,
  getSliceFormatDay,
  getSliceFormatMonth,
} from '../../../../../helpers/formatDate'
import { delay, daysInMonth } from '../../../../../helpers/getCalendar'
import { year, today, month } from '../../../../../helpers/getDate'
import { useCalendar } from '../../../../../hooks/context/useCalendar'
import { useEvents } from '../../../../../hooks/context/useEvents'

interface CalendarDeskItemProps {
  numberMonth: number
  i: number
  number: number
}

const CalendarDeskItem: FunctionComponent<CalendarDeskItemProps> = ({ numberMonth, i, number }) => {
  const { setDate, date } = useCalendar()
  const { dayEvents } = useEvents()

  const currentDay =
    (+getSliceFormatDay(date) === number && getSliceFormatMonth(date) === month) ||
    (number === today && numberMonth === +month)
  const monthIncludeDay =
    (number > i && i < delay[numberMonth]) ||
    i - delay[numberMonth] >= daysInMonth(+numberMonth + 1, year)
  const selectedDay = +getSliceFormatDay(date) === number && +getSliceFormatMonth(date) === +month + 1

  const getColor: { [name: string]: string } = {
    'Reading list': ' bg-sky-400',
    Notes: ' bg-greens',
    Journey: ' bg-red-400',
    Task: ' bg-lightGrey',
    Films: ' bg-yellow-400',
    Default: ' bg-purple-400',
  }
  return (
    <div
      onClick={() =>
        setDate(
          `${getSliceFormatDay(number.toString())}-${getPadStartFormatDate(
            (numberMonth + 1).toString()
          )}-${year}`
        )
      }
      className={classNames(
        'text-xs w-5 h-5 rounded-full flex items-center text-left relative justify-center p-3 hover:text-zinc-500 duration-300 cursor-pointer',
        !monthIncludeDay && currentDay && !selectedDay && ' text-red-800',
        selectedDay && 'text-greens',
        monthIncludeDay && ' text-white/50 hover:bg-transparent cursor-default'
      )}
    >
      <div className=" absolute top-0 left-0 flex items-center">
        {
          dayEvents(number, numberMonth.toString())
            ?.slice(0, 6)
            ?.map((el) => {
              return (
                <div
                  key={Math.random()}
                  className={classNames(' w-1 h-1 rounded-xl', getColor[el?.type])}
                />
              )
            })}
      </div>
      <p>{number}</p>
    </div>
  )
}

export default CalendarDeskItem
