import { FunctionComponent, ReactNode, createContext, useState } from 'react'

interface IModalContext {
  isOpenModal: boolean
  setIsOpenModal: (isOpenModal: boolean) => void
  isOpenSidebarSheet: boolean
  setIsOpenSidebarSheet: (isOpenSidebarSheet: boolean) => void
  isOpenTemplateModal: boolean
  setIsOpenTemplateModal: (isOpenTemplateModal: boolean) => void
  isOpenTrash: boolean
  setIsOpenTrash: (isOpenTrash: boolean) => void
  modalFlow: { state: string }
  setModalFlow: (modalFlow: { state: string }) => void
}

export const ModalContext = createContext({} as IModalContext)

const ModalProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isOpenSidebarSheet, setIsOpenSidebarSheet] = useState(false)
  const [isOpenTemplateModal, setIsOpenTemplateModal] = useState(false)
  const [isOpenTrash, setIsOpenTrash] = useState(false)
  const [modalFlow, setModalFlow] = useState({ state: '' })
  return (
    <ModalContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        isOpenSidebarSheet,
        setIsOpenSidebarSheet,
        isOpenTemplateModal,
        setIsOpenTemplateModal,
        modalFlow,
        setModalFlow,
        isOpenTrash,
        setIsOpenTrash,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export default ModalProvider
