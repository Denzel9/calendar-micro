import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'
import { MODE } from './Section'
import classNames from 'classnames'
import { capitalizeWord } from '../../../helpers/capitalizeWord'
import { IEvent } from '../../../types/event.types'
import { ITemplate } from '../../../types/template.types'
import ActionButton, { TYPE_ACTION_BUTTON } from '../../calendar-item/Action-button'

const getColor: { [name: string]: string } = {
  'Reading list': ' border-sky-400',
  Notes: ' border-greens',
  Journey: ' border-red-400',
  Task: ' border-lightGrey',
  Films: ' border-yellow-400',
  Default: ' border-purple-400',
}

interface ItemProps {
  item: ITemplate | IEvent
  imgLink: string
  link: string
  mode: MODE
  type: TYPE_ACTION_BUTTON
  trash: boolean
}

const Item: FunctionComponent<ItemProps> = ({ item, imgLink, link, mode, type, trash }) => {
  const elem = item as IEvent
  const title =
    item?.title?.length > 20 && mode === MODE.CARD
      ? `${capitalizeWord(item?.title?.split(' ')?.slice(0, 4).join(' '))} ...`
      : capitalizeWord(item?.title)
  return (
    <Link
      to={link}
      state={{ item }}
      className={classNames(
        'bg-grey duration-300 ease-in-out relative',
        mode === MODE.LIST && getColor[elem?.type],
        mode === MODE.CARD
          ? 'rounded-xl w-32 h-32 min-w-32 hover:-translate-y-1 overflow-hidden '
          : ' border-l p-5 hover:border-l-4'
      )}
    >
      {mode !== MODE.LIST &&
        (imgLink ? (
          <img src={imgLink} alt="img" className=" w-full h-8 " />
        ) : (
          <div className=" w-full h-8 bg-lightGrey" />
        ))}

      <div
        className={classNames(
          mode === MODE.LIST && ' flex items-end gap-32 justify-between',
          mode === MODE.CARD && 'p-2 h-full relative'
        )}
      >
        <div>
          <p className={classNames(mode === MODE.CARD ? 'text-sm' : 'text-xl')}>{title}</p>
          {mode === MODE.LIST && item?.text && (
            <p className=" text-xs mt-1 opacity-50">{item?.text}</p>
          )}
        </div>

        {(mode === MODE.LIST || (type === TYPE_ACTION_BUTTON.TRASH && mode === MODE.CARD)) && (
          <div onClick={(e) => e.preventDefault()} className=" absolute right-2 bottom-5">
            <ActionButton id={item?.docId} status={elem?.status} type={type} trash={trash} />
          </div>
        )}
      </div>
    </Link>
  )
}

export default Item
