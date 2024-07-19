import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { useModal } from '../../hooks/context/useModal'
import Header from './Header'
import Content from './Content'

const SidebarSheet: FunctionComponent = () => {
  const { isOpenSidebarSheet, setIsOpenSidebarSheet } = useModal()
  return (
    <div
      onClick={() => setIsOpenSidebarSheet(false)}
      className={classNames(
        ' w-full h-screen fixed top-0 left-0 right-0 bottom-0 duration-300 ease-in-out z-10',
        isOpenSidebarSheet
          ? ' bg-opacity-40 bg-black pointer-events-auto'
          : ' bg-opacity-100 pointer-events-none'
      )}
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
        className={classNames(
          ' absolute top-0 right-0 bottom-0 backdrop-blur-2xl p-5 w-72 h-full bg-white bg-opacity-20 z-30 rounded-xl duration-500 ease-in-out',
          isOpenSidebarSheet ? 'opacity-100 translate-x-0 ' : 'opacity-0 translate-x-80'
        )}
      >
        <Header />
        <Content />
      </div>
    </div>
  )
}

export default SidebarSheet
