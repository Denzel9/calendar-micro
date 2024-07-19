import { FunctionComponent, ReactNode } from 'react'

interface ListItemProps {
  title: string
  onClick?: () => void
  icon: ReactNode
}

const ListItem: FunctionComponent<ListItemProps> = ({ title, onClick, icon }) => {
  return (
    <button onClick={onClick} className=" flex items-center gap-2 hover:opacity-50 duration-300 ease-in-out">
      {icon}
      <p> {title}</p>
    </button>
  )
}

export default ListItem
