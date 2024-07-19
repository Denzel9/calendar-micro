import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'

interface ListItemProps {
  title: string
  subtitle?: string
  titleMark?: number | string | ReactNode
  value: ReactNode | string
  isDivider?: boolean
  isBetween?: boolean
  style?: string
  styleValue?: string
}

const ListItem: FunctionComponent<ListItemProps> = ({
  title,
  subtitle,
  value,
  titleMark,
  style,
  styleValue,
  isBetween = false,
  isDivider = false,
}) => {
  return (
    <div
      className={classNames(
        ' flex items-center  w-full min-w-56 ',
        isDivider && 'border-b border-white/50 pb-1',
        isBetween ? 'justify-between' : 'gap-10',
        style
      )}
    >
      <div className="w-fit max-w-44 ">
        <div className=" flex items-center gap-2 w-32 ">
          <p>{title}</p>
          {titleMark && <div>{titleMark}</div>}
        </div>
        <p className=" text-xs opacity-50">{subtitle}</p>
      </div>
      <div className={classNames(styleValue ? styleValue : 'w-full')}>{value}</div>
    </div>
  )
}

export default ListItem
