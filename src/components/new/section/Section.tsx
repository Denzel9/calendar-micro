import { FunctionComponent, ReactNode } from 'react'
import Item from './Item'
import classNames from 'classnames'
import { CiStickyNote } from 'react-icons/ci'
import { LuLayoutTemplate } from 'react-icons/lu'
import { IEvent } from '../../../types/event.types'
import { ITemplate } from '../../../types/template.types'
import { TYPE_ACTION_BUTTON } from '../../calendar-item/Action-button'
import('../../../pages/calendar/desk/hiddenScroll.scss')

export enum MODE {
  LIST = 'list',
  CARD = 'card',
}

export enum VARIABLE {
  EVENTS = 'Events',
  TEMPLATES = 'Templates',
}

interface SectionsProps {
  title: VARIABLE | string
  icon?: ReactNode
  items: IEvent[] | ITemplate[]
  link: string
  mode: MODE
  type: TYPE_ACTION_BUTTON
  noTrash?: boolean
}

const Section: FunctionComponent<SectionsProps> = ({
  title,
  items,
  link,
  icon,
  mode,
  type,
  noTrash = false,
}) => {
  const listItems = noTrash ? items?.filter((el) => !el?.trash) : items
  const iconDefault = title === VARIABLE.TEMPLATES && !icon  ? <LuLayoutTemplate /> : <CiStickyNote />
  return (
    <div className=" mt-5">
      <div className=" flex items-center gap-3 text-xs opacity-50">
        {iconDefault || icon}
        <p>{title}</p>
      </div>

      <div
        className={classNames(
          'flex gap-5 pt-5',
          'scroll',
          mode === MODE.CARD ? ' items-center overflow-x-scroll' : ' flex-col'
        )}
      >
        {listItems?.map((el) => (
          <Item
            key={el?.docId}
            link={link}
            item={el}
            imgLink={el?.imgLink}
            mode={mode}
            type={type}
            trash={el?.trash}
          />
        ))}
      </div>
    </div>
  )
}

export default Section
