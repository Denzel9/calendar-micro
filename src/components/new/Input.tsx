import classNames from 'classnames'
import { ChangeEvent, FunctionComponent, ReactNode } from 'react'

interface InputProps {
  value: string
  icon?: ReactNode
  placeholder: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  style?: string
  isError?: boolean
  element?: ReactNode
}

const Input: FunctionComponent<InputProps> = ({
  value,
  icon,
  onChange,
  placeholder,
  style,
  isError,
  element,
}) => {
  return (
    <div className={classNames('flex items-center justify-between', style)}>
      <div className='flex items-center gap-5 w-full pr-5'>
        {icon && <div className=" opacity-50">{icon}</div>}
        <input
          className={classNames(
            ' w-full py-2 bg-transparent outline-none ',
            isError && 'text-red-700'
          )}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
      {element && !!value?.length && <div>{element}</div>}
    </div>
  )
}

export default Input
