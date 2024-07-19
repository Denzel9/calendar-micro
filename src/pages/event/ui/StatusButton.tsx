import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { EStatus } from '../../../types/event.types'

interface StatusButtonProps {
  status: EStatus
  setStatus?: (status: EStatus) => void
  onClick: (id: string, status: EStatus) => void
  id: string
}

const StatusButton: FunctionComponent<StatusButtonProps> = ({
  status,
  id,
  setStatus = () => {},
  onClick,
}) => {
  const handleChangeStatus = () => {
    if (status === EStatus.ToDo) {
      onClick(id, EStatus.Progress)
      setStatus(EStatus.Progress)
    } else if (status === EStatus.Progress) {
      onClick(id, EStatus.Completed)
      setStatus(EStatus.Completed)
    } else if (status === EStatus.Completed) {
      onClick(id, EStatus.ToDo)
      setStatus(EStatus.ToDo)
    }
  }

  return (
    <button
      className=" bg-lightGrey rounded-xl py-1 px-3 w-fit flex items-center gap-2"
      onClick={handleChangeStatus}
    >
      <div
        className={classNames(
          ' w-2 h-2 rounded-full',
          status === EStatus.ToDo && ' bg-gray-800',
          status === EStatus.Progress && 'bg-yellow-800',
          status === EStatus.Completed && 'bg-green-800'
        )}
      />
      <p>{status}</p>
    </button>
  )
}

export default StatusButton
