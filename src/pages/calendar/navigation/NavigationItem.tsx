import classNames from 'classnames'
import { FunctionComponent } from 'react'
import { month, months, today } from '../../../helpers/getDate'

interface NavigationItemProps {
  title: string
  num?: number
}

const NavigationItem: FunctionComponent<NavigationItemProps> = ({
  title,
  num,
}) => {
  return (
    <button
      className={classNames(
        ' w-28 py-2 h-[70px] rounded-lg text-center ',
        today === num || months.indexOf(title) === +month 
          ? 'bg-dark text-white border border-red-400'
          : 'bg-zinc-800 text-white'
      )}
    >
      <p>{title}</p>
      <p className=" font-bold text-2xl">{num}</p>
    </button>
  )
}

export default NavigationItem
