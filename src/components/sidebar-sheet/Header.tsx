import { FunctionComponent } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { useModal } from '../../hooks/context/useModal'
import { useUser } from '../../hooks/context/useUser'

const Header: FunctionComponent = () => {
  const { setIsOpenSidebarSheet, setIsOpenModal } = useModal()
  const {user} = useUser()
  const handleClick = () => {
    setIsOpenSidebarSheet(false)
    setIsOpenModal(true)
  }
  return (
    <div className=" flex items-center justify-between">
      <AiOutlineEdit size={20} className=" cursor-pointer hover:opacity-50 duration-300 ease-in-out" onClick={handleClick}/>
      <p>{user.name}</p>
    </div>
  )
}

export default Header
