import classNames from 'classnames'
import { FunctionComponent } from 'react'

interface ModeItemProps {
  title: string
  onClick: () => void
  calendarMode: string
}

const ModeItem: FunctionComponent<ModeItemProps> = ({ title, onClick, calendarMode }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        '  w-24 rounded-lg text-center py-2 duration-300 hover:bg-zinc-700 active:bg-zinc-950',
        calendarMode === title && '  bg-zinc-900  hover:bg-zinc-900 '
      )}
    >
      <p className=" text-sm">{title}</p>
    </button>
  )
}

export default ModeItem
