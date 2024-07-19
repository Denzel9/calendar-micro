import { ChangeEvent, FunctionComponent } from 'react'
import classNames from 'classnames'

interface TextAreaProps {
  value: string
  placeholder: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  isLarge?: boolean
  style?: string
  isError?: boolean
}

const TextArea: FunctionComponent<TextAreaProps> = ({
  value,
  onChange,
  placeholder,
  isLarge = false,
  style,
  isError,
}) => {
  return (
    <textarea
      value={value}
      onChange={onChange}
      className={classNames('border-none block bg-transparent mt-5 outline-none w-full', style)}
      placeholder={placeholder}
      rows={isLarge ? 10 : 5}
    />
  )
}

export default TextArea
