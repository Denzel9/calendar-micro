import classNames from 'classnames'
import { FunctionComponent, ReactNode } from 'react'

interface ButtonProps {
  onClick: () => void
  title?: string
  icon?: ReactNode
  secondIcon?: ReactNode

  primary?: boolean
  secondary?: boolean
  isDivider?: boolean

  style?: string
  isLarge?: boolean

  disable?: boolean
  selected?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({
  onClick,
  icon,
  secondIcon,
  title,
  primary,
  secondary,
  isLarge = false,
  style,
  disable,
  selected,
  isDivider,
}) => {
  return (
    <button
      onClick={disable ? () => {} : onClick}
      className={classNames(
        'flex gap-2 items-center text-left duration-300 ease-out',
        disable ? 'cursor-default' : 'hover:opacity-100',
        selected ? ' opacity-100 hover:opacity-80' : ' opacity-50 hover:opacity-100',
        primary && 'opacity-50',
        secondary && ' rounded-xl px-2 py-1 justify-center',
        isLarge && 'text-xl',
        isDivider && 'border-b border-white/50',
        style
      )}
    >
      {icon}
      {title && title}
      {secondIcon}
    </button>
  )
}

export default Button
