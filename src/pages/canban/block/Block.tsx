import { FunctionComponent } from 'react'
import Item from './Item'
import { EStatus } from '../../../types/event.types'
import { useEvents } from '../../../hooks/context/useEvents'
import Button from '../../../components/new/Button'
import { PiPlus } from 'react-icons/pi'
import { useModal } from '../../../hooks/context/useModal'

interface BlockProps {
  title: string
  type: EStatus
}

const Block: FunctionComponent<BlockProps> = ({ title, type }) => {
  const { dataList } = useEvents()
  const { setIsOpenModal, setModalFlow } = useModal()
  const addNewEvent = () => {
    setModalFlow({ state: type })
    setIsOpenModal(true)
  }
  const eventsList = dataList?.filter((el) => !el?.trash && el?.status === type)
  return (
    <div>
      <div className=" flex items-center gap-3 p-5">
        <h2 className=" text-2xl">{title}</h2>
        <div className="bg-shadow rounded-xl px-3 py-1">
          <span>{eventsList?.length}</span>
        </div>
      </div>
      <div className=" bg-dark rounded-xl p-5">
        <Button onClick={addNewEvent} title="Add event" icon={<PiPlus />} style="mb-3" primary />
        {eventsList?.map((el) => (
          <Item key={el?.date + Math.random()} event={el} />
        ))}
      </div>
    </div>
  )
}

export default Block
