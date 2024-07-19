import { listDaysCalendarRow } from '../../../../helpers/getCalendar'
import { today, year } from '../../../../helpers/getDate'

export const useWeekData = (numberMonth: number) => {
  const monthArr = listDaysCalendarRow(numberMonth).flat()

  const weekRange = monthArr.map((el, i) => {
    if (el < today && i > 3) {
      return new Date(
        `${year}-${[numberMonth + 1].toString().padStart(2, '0')}-${el.toString().padStart(2, '0')}`
      )
    }
    return new Date(
      `${year}-${[numberMonth + 1].toString().padStart(2, '0')}-${el.toString().padStart(2, '0')}`
    )
  })
  return { weekRange }
}
