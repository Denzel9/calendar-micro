import { FunctionComponent, ReactNode, createContext, useMemo, useState } from 'react'
import classNames from 'classnames'
import { useCalendar } from '../../hooks/context/useCalendar'
import './index.scss'

interface ILocalModal {
  isFullScreen: boolean
  setIsFullScreen: (isFullScreen: boolean) => void
  isShowCalendar: boolean
  setIsShowCalendar: (isShowCalendar: boolean) => void
}

interface IModal {
  children: ReactNode
  isOpenModal: boolean
  setIsOpenModal: (isOpenModal: boolean) => void
}

export const LocalModalContext = createContext(null as ILocalModal)

const Modal: FunctionComponent<IModal> = ({ children, isOpenModal, setIsOpenModal }) => {
  const { setDate } = useCalendar()
  const [isShowCalendar, setIsShowCalendar] = useState(false)
  const [isFullScreen, setIsFullScreen] = useState(false)

  const handleCloseModal = () => {
    setIsOpenModal(false)
    isShowCalendar && setIsShowCalendar(false)
    isOpenModal && setDate('')
  }

  const value = useMemo(
    () => ({
      isFullScreen,
      setIsFullScreen,
      isShowCalendar,
      setIsShowCalendar,
    }),
    [isFullScreen, isShowCalendar]
  )
  return (
    <LocalModalContext.Provider value={value}>
      <div
        onClick={handleCloseModal}
        className={classNames(
          ' w-full h-screen fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center duration-300 ease-in-out z-10',
          isOpenModal
            ? ' bg-opacity-40 bg-black pointer-events-auto'
            : ' bg-opacity-100 pointer-events-none'
        )}
      >
        <div
          onClick={(e) => {
            e.stopPropagation()
            isShowCalendar && setIsShowCalendar(false)
          }}
          className={classNames(
            'backdrop-blur-2xl p-5 bg-white bg-opacity-20 relative z-30 rounded-xl duration-500 ease-in-out',
            isOpenModal ? 'opacity-100 ' : 'opacity-0 ',
            isFullScreen ? 'full_screen' : 'h-3/4 w-2/3'
          )}
        >
          {children}
        </div>
      </div>
    </LocalModalContext.Provider>
  )
}

export default Modal
