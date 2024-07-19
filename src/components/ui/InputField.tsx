import { FunctionComponent } from 'react'

interface InputFieldProps {
  placeholder: string
  value: string
  onChange: (value: string) => void
}

const InputField: FunctionComponent<InputFieldProps> = ({ placeholder, value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(value) => onChange(value.target.value)}
      className=" block rounded-lg py-1 px-2 w-64 text-sm"
      placeholder={placeholder}
    />
  )
}

export default InputField
