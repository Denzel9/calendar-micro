import { FunctionComponent, memo } from 'react'
import event from '../../../assets/event.png'
import { useEvents } from '../../../hooks/context/useEvents'
import classNames from 'classnames'
import ActionButton, { TYPE_ACTION_BUTTON } from '../../calendar-item/Action-button'
import { capitalizeWord } from '../../../helpers/capitalizeWord'
import { Link } from 'react-router-dom'

const SidebarCurrentEvent: FunctionComponent = () => {
  const { currentEvent } = useEvents()

  return (
    <div className=" w-full p-5 rounded-lg text-white relative text-xs bg-zinc-800 overflow-hidden">
      {currentEvent?.time && (
        <div className=" flex items-end justify-between mb-3">
          <p className="">{currentEvent?.time.toString()}</p>
        </div>
      )}
      <p className="  text-sm leading-4 w-3/4">
        {currentEvent ? capitalizeWord(currentEvent?.title) : 'Текущего события нет'}
      </p>
      {currentEvent && (
        <div className=" flex items-center gap-3 mt-3">
          <Link
            to={'calendar/event'}
            state={{ item: currentEvent }}
            className=" border border-blues text-white bg-blues rounded-lg px-4 py-2"
          >
            Детали
          </Link>
          <ActionButton
            status={currentEvent?.status}
            id={currentEvent?.docId}
            type={TYPE_ACTION_BUTTON.BTN}
          />
        </div>
      )}
      <img
        src={event}
        alt="icons"
        width={100}
        height={100}
        className={classNames(' absolute -right-5 ', currentEvent ? 'bottom-10' : '-bottom-1')}
      />
    </div>
  )
}

export default memo(SidebarCurrentEvent)
