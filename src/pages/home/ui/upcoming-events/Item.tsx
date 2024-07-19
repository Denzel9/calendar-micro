import { FunctionComponent } from 'react'
import { today } from '../../../../helpers/getDate'
import { Link } from 'react-router-dom'
import { IEvent } from '../../../../types/event.types'
import classNames from 'classnames'

interface ItemProps {
  day: string
  date: string
  titleEvent: string
  timeEvent: string
  countEvents: number
  event: IEvent
}

const Item: FunctionComponent<ItemProps> = ({
  day,
  date,
  timeEvent,
  titleEvent,
  countEvents,
  event,
}) => {
  return (
    <div className=" flex items-center gap-5">
      <div className=" opacity-50 text-sm w-24">
        <p>{day}</p>
        <p>{date}</p>
      </div>
      <Link
        to={'/event'}
        state={{ item: event }}
        className={classNames(" pl-5 border-l-2 border-white/30 h-16", !timeEvent  && 'cursor-none pointer-events-none')}
      >
        <p>{titleEvent || 'Empty'}</p>
        <p>{timeEvent}</p>
        {countEvents > 0 ? (
          <p className=" text-xs opacity-50">and {countEvents} other events</p>
        ) : null}
      </Link>
    </div>
  )
}

export default Item
