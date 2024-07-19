import { FunctionComponent } from 'react'
import { CiCalendarDate } from 'react-icons/ci'
import Button from '../../../../components/new/Button'
import { useModal } from '../../../../hooks/context/useModal'
import Item from './Item'
import { getTomorrow, month, months, replaceMonthEnd, today } from '../../../../helpers/getDate'
import { useEvents } from '../../../../hooks/context/useEvents'
import { Link } from 'react-router-dom'

const UpcomingEvents: FunctionComponent = () => {
  const { setIsOpenModal } = useModal()
  const { dayEvents } = useEvents()
  return (
    <div className=" mt-5">
      <div className=" flex items-center gap-3 text-xs opacity-50">
        <CiCalendarDate />
        <p>Upcoming events</p>
      </div>
      <div className=" flex bg-grey rounded-xl p-5 mt-5 gap-10 w-fit">
        <div>
          {dayEvents(0, month)?.length ? (
            <Link to={'/event'} state={{ item: dayEvents(0, month)[0] }}>
              <CiCalendarDate size={30} />
              <p>{dayEvents(today, month)[0]?.title}</p>
              <p>{dayEvents(today, month)[0]?.time.toString()}</p>
              {dayEvents(today, month)?.length > 1 ? (
                <p className=" text-xs opacity-50">
                  and {dayEvents(0, month)?.length - 1} other events
                </p>
              ) : null}
            </Link>
          ) : (
            <div className=" text-sm  pr-5 flex flex-col justify-between h-full w-48">
              <div>
                <CiCalendarDate size={30} />
                <p className=" text-xl">Empty</p>
              </div>
              <Button onClick={() => setIsOpenModal(true)} title={'Add event'} primary />
            </div>
          )}
        </div>
        <div className=" flex flex-col gap-2">
          <Item
            day="Завтра"
            date={`${today + 1} ${replaceMonthEnd(months[+month])}`}
            titleEvent={dayEvents(today + 1, month)[0]?.title}
            timeEvent={dayEvents(today + 1, month)[0]?.time.toString()}
            countEvents={dayEvents(today + 1, month)?.length - 1}
            event={dayEvents(today + 1, month)[0]}
          />
          <Item
            day={getTomorrow()}
            date={`${today + 2} ${replaceMonthEnd(months[+month])}`}
            titleEvent={dayEvents(today + 2, month)[0]?.title}
            timeEvent={dayEvents(today + 2, month)[0]?.time.toString()}
            countEvents={dayEvents(today + 2, month)?.length - 1}
            event={dayEvents(today + 2, month)[0]}
          />
        </div>
      </div>
    </div>
  )
}

export default UpcomingEvents
