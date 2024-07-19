import { FunctionComponent, ReactNode, createContext, useState } from 'react'
import Sidebar from './sidebar/Sidebar'
import SidebarSheet from '../sidebar-sheet'
import { useLocation } from 'react-router-dom'
import Navigation from './Navigation'
import SnackbarModal from '../snackBar/SnackBar'
import Trash from '../trash/Trash'
import ModalNote from '../module/modals/note/ModalNote'
import ModalTemplate from '../module/modals/tempate/ModalTemplate'
import NoteProvider from '../../providers/NoteProvider'
import { useModal } from '../../hooks/context/useModal'

const Layout: FunctionComponent<{
  children: ReactNode
}> = ({ children }) => {
  const { pathname } = useLocation()
  const { setIsOpenModal } = useModal()
  return (
    <div>
      <NoteProvider setIsOpenModal={setIsOpenModal}>
        {pathname === '/calendar/desk' ? (
          <>
            <div className=" flex ">
              <div className=" w-3/12">
                <Sidebar />
              </div>
              <div className=" w-9/12 rounded-lg p-5">{children}</div>
            </div>
          </>
        ) : (
          <div className="p-5">
            <Navigation />
            {children}
          </div>
        )}

        <SidebarSheet />
        <ModalNote />
        <ModalTemplate />
        <SnackbarModal />
        <Trash />
      </NoteProvider>
    </div>
  )
}

export default Layout
