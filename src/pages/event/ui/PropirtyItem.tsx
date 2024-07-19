import { FunctionComponent, ReactNode, useState } from 'react'
import { MdOutlineModeEditOutline, MdCancel } from 'react-icons/md'
import { FaCheck } from 'react-icons/fa6'
import ListItem from '../../../components/new/ListItem'
import Button from '../../../components/new/Button'
import classNames from 'classnames'

interface PropirtyItemProps {
  title: string
  value: string | ReactNode
  notEdit?: boolean
  editElement?: ReactNode
  onClick?: () => void
  onChange?: () => void
  withWidget?: boolean
  placeholder?: string
}

const EditingItem: FunctionComponent<PropirtyItemProps> = ({
  title,
  value,
  editElement,
  onClick,
  onChange,
  placeholder,
  notEdit = false,
  withWidget = false,
}) => {
  const [isShowEditIcon, setIsEShowEditIcon] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const getTitle = () => {
    if (Array.isArray(value)) {
      return value?.length > 1 ? `${value[0]} and ${value?.length - 1} ${placeholder}` : value[0]
    }
    return value
  }

  const saveEdit = () => {
   onClick && onClick()
    setIsEdit(false)
  }
  const cancel = () => {
    setIsEdit(false)
    onChange && onChange()
  }
  return (
    <div className=" relative">
      <ListItem
        title={title}
        styleValue={withWidget && ' w-fit'}
        style={(!isEdit || withWidget) && 'py-2'}
        value={
          <div
            onMouseEnter={() => setIsEShowEditIcon(true)}
            onMouseLeave={() => setIsEShowEditIcon(false)}
            className=" flex items-center gap-2"
          >
            {!withWidget && (
              <div className={classNames(isEdit && 'w-full')}>
                {isEdit ? editElement : getTitle() || <p className=" opacity-50">Empty</p>}
              </div>
            )}

            {withWidget && (
              <div className={classNames(isEdit && 'w-full')}>
                {isEdit ? (
                  <div>
                    {getTitle()}
                    {editElement}
                  </div>
                ) : (
                  getTitle() || <p className=" opacity-50">Empty</p>
                )}
              </div>
            )}

            {isShowEditIcon && !isEdit && !notEdit && (
              <Button icon={<MdOutlineModeEditOutline />} onClick={() => setIsEdit(true)} primary />
            )}

            {isEdit && !notEdit && (
              <div className=" flex items-center gap-2">
                <Button
                  icon={<MdCancel size={20} />}
                  onClick={cancel}
                  selected
                  style="text-red-800"
                />
                <Button
                  icon={<FaCheck size={20} />}
                  onClick={saveEdit}
                  style="text-green-800"
                  selected
                />
              </div>
            )}
          </div>
        }
      />
    </div>
  )
}

export default EditingItem
