import { FunctionComponent, useState } from 'react'
import { getMonthName, months, year } from '../../../helpers/getDate'
import { useCalendar } from '../../../hooks/context/useCalendar'
import MenuButton from './MenuButton'
import Mode from './mode/Mode'
import CustomSelect from '../../../components/CustomSelect'

const Navigation: FunctionComponent<{ scrollRef: () => void }> = ({ scrollRef }) => {
  const [isShowDialog, setIsShowDialog] = useState(false)
  const { setNumberMonth, numberMonth } = useCalendar()

  const handleChangeMonth = (el: string) => {
    setNumberMonth(months.indexOf(el))
    setIsShowDialog(false)
  }
  return (
    <div className="flex items-end justify-between ">
      <CustomSelect
        isOpen={isShowDialog}
        setIsOpen={setIsShowDialog}
        onClick={handleChangeMonth}
        list={months}
        bgOpacity
        value={`${getMonthName(numberMonth)}, ${year}`}
      />
      <Mode scrollRef={scrollRef} />
      <MenuButton />
    </div>
  )
}

export default Navigation
