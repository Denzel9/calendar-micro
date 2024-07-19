import { FunctionComponent } from 'react'
import { IEvent } from '../../../types/event.types'
import classNames from 'classnames'
import { capitalizeWord } from '../../../helpers/capitalizeWord'
import { Link } from 'react-router-dom'
import ActionButton, { TYPE_ACTION_BUTTON } from '../../../components/calendar-item/Action-button'
import { FaRegComments } from 'react-icons/fa'

interface ItemProps {
  event: IEvent
}

const getColor: { [name: string]: string } = {
  'Reading list': ' border-sky-400',
  Notes: ' border-greens',
  Journey: ' border-red-400',
  Task: ' border-lightGrey',
  Films: ' border-yellow-400',
  Default: ' border-purple-400',
}

const Item: FunctionComponent<ItemProps> = ({ event }) => {
  const summary = event?.text.length > 100 ? `${event?.text?.slice(0, 100)}...` : event?.text
  return (
    <Link
      to={'/calendar/event'}
      state={{ item: event }}
      className={classNames(
        ' py-5 pl-5 border-l hover:border-l-4 duration-300 ease-out block relative',
        getColor[event?.templates]
      )}
    >
      <p className=" text-lg w-5/6">{capitalizeWord(event?.title)}</p>
      {event?.text && <p className=" opacity-50 text-sm">{capitalizeWord(summary)}</p>}

      {!!event?.tags.length && (
        <div className=" flex flex-wrap gap-2 mt-3 mb-3">
          {event?.tags?.map((el) => (
            <div key={el} className=" px-2 py-1 bg-red-900 rounded-xl">
              {el}
            </div>
          ))}
        </div>
      )}

      <div
        onClick={(e) => e.preventDefault()}
        className=" w-full flex items-center justify-between"
      >
        <div className=" flex items-center gap-2 opacity-50 hover:opacity-100">
          <FaRegComments />
          <span className=" text-xs">{event?.comments?.length}</span>
        </div>
        <ActionButton status={event?.status} id={event?.docId} type={TYPE_ACTION_BUTTON.BTN} />
      </div>
    </Link>
  )
}

export default Item
