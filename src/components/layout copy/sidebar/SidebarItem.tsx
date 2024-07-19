import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'

interface SidebarItemProps {
  icon: ReactNode
  link?: string
  onClick?: () => void
}

const SidebarItem: FunctionComponent<SidebarItemProps> = ({ icon, link, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        ' text-3xl text-lightGrey cursor-pointer duration-300 p-2 rounded-xl hover:bg-blues active:bg-reds'
      )}
    >
      {icon}
    </button>
  )
}

export default SidebarItem
