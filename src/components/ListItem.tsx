import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'

interface ListItemProps {
  text: string | ReactNode
  value?: string | ReactNode
  onClick?: () => void
}

const ListItem: FunctionComponent<ListItemProps> = ({ text,  value, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classNames(
        'flex gap-5 items-center',
        onClick && 'hover:opacity-50 duration-300 ease-in-out cursor-pointer'
      )}
    >
      <p className=" block w-32">{text}</p>
     <div className=' w-full'>{value}</div>
    </div>
  )
}

export default ListItem
