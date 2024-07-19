import { FunctionComponent } from 'react'
import { FaRegStar, FaRegCalendarAlt } from 'react-icons/fa'
import { TbArrowsDiagonal, TbArrowsDiagonalMinimize } from 'react-icons/tb'
import { useLocalModal } from '../../../../hooks/context/useLocalModal'
import Calendar from '../../../layout/sidebar/calendar'
import MUITimePicker from '../../../TimePicker'
import { Dayjs } from 'dayjs'
import Button from '../../../new/Button'
import { month, today, year } from '../../../../helpers/getDate'
import { UnionType } from '../../../../types/types'
import { IEvent } from '../../../../types/event.types'

interface IModalHeader {
  setData: (value: UnionType) => void
  data: UnionType
}

const ModalHeader: FunctionComponent<IModalHeader> = ({ data, setData }) => {
  const { setIsShowCalendar, isShowCalendar, setIsFullScreen, isFullScreen } = useLocalModal()

  return (
    <div className=" flex justify-between items-end">
      <div>
        {isFullScreen ? (
          <TbArrowsDiagonalMinimize
            size={20}
            onClick={() => setIsFullScreen(false)}
            className=" cursor-pointer"
          />
        ) : (
          <TbArrowsDiagonal
            size={20}
            onClick={() => setIsFullScreen(true)}
            className=" cursor-pointer"
          />
        )}
      </div>
      <div className=" flex items-center gap-3">
        <FaRegStar size={20} className=" hover:scale-110 duration-300 ease-in-out cursor-pointer" />
        <FaRegCalendarAlt
          size={20}
          className=" hover:scale-110 duration-300 ease-in-out cursor-pointer"
          onClick={() => setIsShowCalendar(true)}
        />
        {isShowCalendar && (
          <div
            className=" absolute top-16 right-6 bg-grey rounded-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className=" flex flex-col">
              <Button
                title="Today"
                onClick={() => setData({ ...data as IEvent, date: `${today}-${month}-${year}` })}
                style="px-5 py-2"
                isDivider
              />
              <Button
                title="Tomorrow"
                onClick={() => setData({ ...data as IEvent, date: `${today + 1}-${month}-${year}` })}
                style="px-5 py-2"
              />
            </div>
            <Calendar />
            <MUITimePicker
              value={data?.time}
              setEvent={(e: Dayjs) => setData({ ...data, time: e })}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ModalHeader
