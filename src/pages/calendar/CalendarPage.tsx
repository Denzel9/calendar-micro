import { FunctionComponent, useEffect, useRef } from 'react'
import { useCalendar } from '../../hooks/context/useCalendar'
import { useModal } from '../../hooks/context/useModal'
import Navigation from './navigation/Navigation'
import Desk from './desk/Desk'
import '../../index.scss'
import 'dayjs/locale/de'

const CalendarPage: FunctionComponent = () => {
  const { calendarMode } = useCalendar()
  const { setIsOpenModal, isOpenTemplateModal } = useModal()
  const monthRef = useRef(null)

  const scrollRef = () =>
    monthRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })

  useEffect(() => {
    scrollRef()
  }, [calendarMode])
  useEffect(() => {
    isOpenTemplateModal && setIsOpenModal(false)
  }, [isOpenTemplateModal])

  return (
    <>
      <Navigation scrollRef={scrollRef} />
      <Desk monthRef={monthRef} />
    </>
  )
}

export default CalendarPage
