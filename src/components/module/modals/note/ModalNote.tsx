import { FunctionComponent } from 'react'
import Modal from '../../../modal'
import ModalFooter from '../../../modal/Footer'
import ModalContent from './Content'
import ModalHeader from './Header'
import { useModal } from '../../../../hooks/context/useModal'
import { useMain } from '../../../../hooks/context/useMain'
import { IEvent } from '../../../../types/event.types'

const ModalNote: FunctionComponent = () => {
  const { setIsOpenModal, isOpenModal } = useModal()
  const { data, setData } = useMain()

  return (
    <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
      <ModalHeader setData={setData} data={data as IEvent} />
      <ModalContent />
      <ModalFooter setClose={setIsOpenModal} setData={setData} data={data} />
    </Modal>
  )
}

export default ModalNote
