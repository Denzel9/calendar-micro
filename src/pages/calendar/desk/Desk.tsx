import { FunctionComponent, Ref } from 'react'
import { month, months, today } from '../../../helpers/getDate'
import { useEvents } from '../../../hooks/context/useEvents'
import { useCalendar } from '../../../hooks/context/useCalendar'
import { useModal } from '../../../hooks/context/useModal'
import CalendarItem from '../../../components/calendar-item/CalendarItem'
import {
  getFormatDateObj,
  getSliceFormatDay,
  getSliceFormatMonth,
} from '../../../helpers/formatDate'
import './hiddenScroll.scss'
import DeskWeek from './week/DeskWeek'
import { useWeekData } from './week/useWeekData'
import { useMonthData } from './month/useMonthData'
import DeskMonth from './month/DeskMonth'
import DeskDay from './day/DeskDay'
import ScrollContainer from 'react-indiana-drag-scroll'
import classNames from 'classnames'
import { IEvent } from '../../../types/event.types'

const Desk: FunctionComponent<{ monthRef: Ref<HTMLDivElement> }> = ({ monthRef }) => {
  const { calendarMode, setDate, numberMonth } = useCalendar()
  const { setIsOpenModal } = useModal()
  const { dataList } = useEvents()
  const { weekRange } = useWeekData(numberMonth)
  const { monthRange } = useMonthData()

  const handleClick = (date: Date) => {
    setIsOpenModal(true)
    setDate(getFormatDateObj(date))
  }

  return (
    <ScrollContainer className={classNames('scroll-container', 'scrollHidden')}>
      {calendarMode === 'Неделя' &&
        weekRange?.map((elem) => {
          const listEvents = dataList.filter(
            (el) =>
              !el?.trash &&
              +getSliceFormatDay(el.date) === elem.getDate() &&
              +getSliceFormatMonth(el.date) === elem.getMonth() + 1
          )

          return (
            <div
              key={elem.getDate() + Math.random()}
              className=" items-center flex flex-col gap-1"
              ref={elem.getDate() === today ? monthRef : null}
            >
              <DeskWeek item={elem} events={listEvents} />
              <CalendarItem
                key={Math.random()}
                item={{} as IEvent}
                onClick={() => handleClick(elem)}
              />
            </div>
          )
        })}

      {calendarMode === 'Месяц' &&
        months?.map((elem, index) => {
          const listEvents = dataList.filter(
            (el) => !el?.trash && months[+getSliceFormatMonth(el.date) - 1] === elem
          )
          return (
            <div
              key={elem + Math.random()}
              className=" items-center flex flex-col gap-1"
              ref={index === +month + 4 ? monthRef : null}
            >
              <DeskMonth item={elem} events={listEvents} />
              <CalendarItem
                key={Math.random()}
                item={{} as IEvent}
                onClick={() => setIsOpenModal(true)}
              />
            </div>
          )
        })}
      {calendarMode === 'День' &&
        monthRange?.map((elem) => {
          const listEvents = dataList.filter(
            (el) => !el?.trash && months[+getSliceFormatMonth(el.date) - 1] === elem
          )
          return (
            <div key={elem + Math.random()} className=" items-center flex flex-col gap-1 ">
              <DeskDay item={elem} events={listEvents} />
              <CalendarItem
                key={Math.random()}
                item={{} as IEvent}
                onClick={() => setIsOpenModal(true)}
              />
            </div>
          )
        })}
    </ScrollContainer>
  )
}

export default Desk
