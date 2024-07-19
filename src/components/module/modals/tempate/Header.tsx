import { FunctionComponent } from 'react'
import { FaRegStar } from 'react-icons/fa'
import { TbArrowsDiagonal, TbArrowsDiagonalMinimize } from 'react-icons/tb'
import { useLocalModal } from '../../../../hooks/context/useLocalModal'
import { IoIosArrowBack } from 'react-icons/io'
import { useModal } from '../../../../hooks/context/useModal'
import Button from '../../../new/Button'

const TemplateHeader: FunctionComponent<{ title: string }> = () => {
  const { setIsFullScreen, isFullScreen } = useLocalModal()
  const { setIsOpenTemplateModal, setIsOpenModal, modalFlow } = useModal()
  const handleClick = () => {
    setIsOpenTemplateModal(false)
    setIsOpenModal(true)
  }
  return (
    <div className=" flex justify-between items-end">
      <div className=" flex items-center gap-3">
        {modalFlow?.state === 'events' && (
          <Button icon={<IoIosArrowBack />} onClick={handleClick} title={'Back'} primary />
        )}
        {isFullScreen ? (
          <TbArrowsDiagonalMinimize
            size={20}
            onClick={() => setIsFullScreen(false)}
            className=" cursor-pointer"
          />
        ) : (
          <TbArrowsDiagonal
            size={20}
            onClick={() => setIsFullScreen(true)}
            className=" cursor-pointer"
          />
        )}
      </div>
      <FaRegStar size={20} className=" hover:scale-110 duration-300 ease-in-out cursor-pointer" />
    </div>
  )
}

export default TemplateHeader
