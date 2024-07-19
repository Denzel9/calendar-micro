import { FunctionComponent } from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { getMonthName, year } from '../../../../helpers/getDate'

const CalendarNav: FunctionComponent<{
  numberMonth: number
  setNumberMonth: (numberMonth: number) => void
}> = ({ numberMonth, setNumberMonth }) => {
  return (
    <div className=" text-white flex items-end justify-between">
      <h2>{`${getMonthName(numberMonth)}, ${year}`}</h2>
      <div className=" flex gap-2">
        <button
          onClick={() => numberMonth > 0 && setNumberMonth(numberMonth - 1)}
          className=" bg-zinc-900 p-1 rounded-md hover:bg-zinc-700 active:bg-zinc-950 duration-300"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={() => numberMonth < 11 && setNumberMonth(numberMonth + 1)}
          className=" bg-zinc-900 p-1 rounded-md hover:bg-zinc-700 active:bg-zinc-950 duration-300"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  )
}

export default CalendarNav
