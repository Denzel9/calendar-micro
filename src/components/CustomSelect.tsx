import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io'
import Button from './new/Button'
import { UnionType } from '../types/types'
import { EStatus } from '../types/event.types'

interface CustomSelectProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void

  setData: (value: string | [] | string[]) => void
  data: UnionType
  title?: string
  value: string[] | EStatus | string
  list: string[]
  isMultiply?: boolean
  placeholder?: string

  isLarge?: boolean
  style?: string
}

const CustomSelect: FunctionComponent<CustomSelectProps> = ({
  setData,
  list,
  isOpen,
  value,
  setIsOpen,
  data,
  title,
  isMultiply = false,
  style,
  placeholder,
}) => {
  const handleClick = (el: string | EStatus) => {
    setData(el)
    setIsOpen(false)
  }

  const handleMultiplyClick = (el: string) => {
    if (el === 'Empty') {
      setData([])
    } else {
      setData([...Array.isArray(value) && value, el])
    }
    setIsOpen(false)
  }

  const listItems: string[] = isMultiply ? [...list, 'Empty'] : list

  const getTitle = () => {
    if (Array.isArray(value)) {
      return value?.length > 1 ? `${value[0]} and ${value?.length - 1} ${placeholder}` : value[0]
    }
    return value
  }

  return (
    <div className={classNames('w-[217px]', style)}>
      {title && <h2 className=" block mb-2">{title}</h2>}
      <div className="relative ">
        <Button
          title={value?.length ? getTitle() : 'Empty'}
          secondIcon={isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          onClick={() => setIsOpen(!isOpen)}
          style="opacity-50 py-2"
        />

        {isOpen && (
          <div
            onClick={(e) => e.preventDefault()}
            className={classNames(
              ' absolute top-8 left-0 rounded-xl z-30 p-5 min-w-32 bg-dark flex flex-col gap-2 '
            )}
          >
            {listItems?.map((el) => (
              <Button
                key={el}
                title={el}
                onClick={isMultiply ? () => handleMultiplyClick(el) : () => handleClick(el)}
                style="text-sm"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomSelect
