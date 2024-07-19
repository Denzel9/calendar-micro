import { FunctionComponent } from 'react'
import { IoIosMore } from 'react-icons/io'
import { useModal } from '../../../hooks/context/useModal'

const MenuButton: FunctionComponent = () => {
  const { setIsOpenSidebarSheet } = useModal()
  return (
    <button
      className=" p-2 bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 rounded-lg duration-300"
      onClick={() => setIsOpenSidebarSheet(true)}
    >
      <IoIosMore size={25} />
    </button>
  )
}

export default MenuButton
