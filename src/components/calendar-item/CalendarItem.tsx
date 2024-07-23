import classNames from 'classnames'
import { FunctionComponent, useState } from 'react'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { EStatus, IEvent } from '../../types/event.types'
import ActionButton, { TYPE_ACTION_BUTTON } from './Action-button'
import { capitalizeWord } from '../../helpers/capitalizeWord'

export interface CalendarProps {
  onClick?: () => void
  item: IEvent
  style?: string
}

const getColor: { [name: string]: string } = {
  'Reading list': 'border border-sky-400 bg-dark',
  Notes: 'border border-greens bg-dark',
  Journey: 'border border-red-400 bg-dark',
  Task: 'border border-lightGrey bg-dark',
  Films: 'border border-yellow-400 bg-dark',
  Default: 'border border-purple-400 bg-dark',
}

const peopleList = ['', '', '']

const CalendarItem: FunctionComponent<CalendarProps> = ({ onClick, item, style }) => {
  const [isShow, setIsShow] = useState(false)

  return (
    <Link
      to={item?.title && 'event'}
      state={{ item: item }}
      onClick={onClick}
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      className={classNames(
        ' w-28 h-36 rounded-lg cursor-pointer pl-2 pt-3 pb-1 pr-2 text-xs text-white relative z-10 ',
        style,
        item?.type
          ? getColor[item?.type] + ' shadow-[0_20px_50px_0px_rgba(0,0,0,0.3)]  shadow-shadow '
          : 'hover:border border-dashed border-purple2 mt-3'
      )}
    >
      {item?.title && item?.type ? (
        <>
          <p className=" text-xs">{item?.type}</p>
          <p
            className={classNames(
              'mt-2 text-sm font-bold',
              item?.status === EStatus.Completed && ' line-through'
            )}
          >
            {capitalizeWord(item?.title)}
          </p>
          {item?.time && <p>{item?.time.toString()}</p>}
          <div
            className=" absolute bottom-2 left-2 right-2 w-full flex justify-between"
            onClick={(e) => e.preventDefault()}
          >
            {/* toDO */}
            <div className="flex items-center">
              {peopleList.map((_, i) => (
                <div
                  key={Math.random()}
                  style={{ position: 'absolute', left: i > 0 && `${i * 10}px` }}
                  className={' rounded-full w-5 h-5 bg-white border border-black bottom-0'}
                />
              ))}
            </div>
            <div className=" mr-4">
              {isShow && (
                <ActionButton
                  status={item?.status}
                  id={item?.docId}
                  type={TYPE_ACTION_BUTTON.BTN}
                  trash={item?.trash}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        <div className=" w-full h-full flex items-center justify-center">
          {isShow && <FiPlus className=" text-3xl text-purple-400" />}
        </div>
      )}
    </Link>
  )
}

export default CalendarItem
