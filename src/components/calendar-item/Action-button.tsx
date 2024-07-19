import { FunctionComponent, useState } from 'react'
import { useEventsService } from '../../hooks/services/useEventsService'
import { MdOutlineDone } from 'react-icons/md'
import { FaRegTrashAlt } from 'react-icons/fa'
import { HiXMark } from 'react-icons/hi2'
import { TbProgress } from 'react-icons/tb'
import Button from '../new/Button'
import { EStatus } from '../../types/event.types'
import CustomSelect from '../CustomSelect'
import classNames from 'classnames'
import { useError } from '../../hooks/context/useError'

export enum TYPE_ACTION_BUTTON {
  BTN = 'button',
  ELEMENT = 'element',
  TRASH = 'trash',
}

interface ActionButtonProps {
  status: EStatus
  id: string
  type: TYPE_ACTION_BUTTON
  style?: string
  trash?: boolean
}

const ActionButton: FunctionComponent<ActionButtonProps> = ({ status, id, type, style, trash }) => {
  const { deleteEvent, updateEventStatus, updateEventTrash } = useEventsService()
  const { setError } = useError()
  const [isOpen, setIsOpen] = useState(false)
  const icons = () => {
    if (status === EStatus.ToDo) {
      return (
        <Button
          onClick={() => updateEventStatus(id, EStatus.Progress)}
          icon={
            <MdOutlineDone size={20} className=" hover:text-red-700 duration-300 ease-in-out" />
          }
        />
      )
    } else if (status === EStatus.Completed) {
      return (
        <Button
          onClick={() => updateEventStatus(id, EStatus.ToDo)}
          icon={<HiXMark size={20} className=" hover:text-red-700 duration-300 ease-in-out" />}
        />
      )
    } else
      return (
        <Button
          onClick={() => updateEventStatus(id, EStatus.Completed)}
          icon={
            <TbProgress size={20} className=" hover:text-yellow-700 duration-300 ease-in-out" />
          }
        />
      )
  }

  const moveToTrash = () => {
    updateEventTrash(id, true)
    setError('Moved to trash. It can be restored in the trash')
  }

  return (
    <div className={classNames('flex items-center gap-2', style)}>
      {type !== TYPE_ACTION_BUTTON.TRASH && (
        <Button
          onClick={moveToTrash}
          icon={
            <FaRegTrashAlt size={18} className=" hover:text-red-700 duration-300 ease-in-out" />
          }
        />
      )}
      {type === TYPE_ACTION_BUTTON.BTN && icons()}
      {type === TYPE_ACTION_BUTTON.ELEMENT && (
        <CustomSelect
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          onClick={(el: EStatus) => updateEventStatus(id, el)}
          list={[...Object.values(EStatus)]}
          isLarge={false}
          value={status}
        />
      )}
      {type === TYPE_ACTION_BUTTON.TRASH && (
        <>
          <Button onClick={() => deleteEvent(id)} title={'Delete'} primary style="text-xs" />
          <Button
            onClick={trash ? () => updateEventTrash(id, false) : () => updateEventTrash(id, true)}
            title={'Recover'}
            primary
            style="text-xs"
          />
        </>
      )}
    </div>
  )
}

export default ActionButton
