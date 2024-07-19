import { month, year } from './getDate'

export const daysInMonth = (month: number, year: number) => {
  return new Date(year, month, 0).getDate()
}

export const delay = [0, 3, 4, 0, 2, 5, 0, 3, 6, 1, 4, 6]

const prevMonthListDays = () => {
  const prevMonth = []
  for (let i = 0; i < daysInMonth(+month, year); i++) {
    prevMonth.push(i + 1)
  }
  return prevMonth
}

export const listDaysCalendarField = (month: number) => {
  const delaySlice = prevMonthListDays().slice(-delay[+month])
  const currentMonth = month > 0 && delay[+month] !== 0 ? [...delaySlice] : []

  for (let i = 1; i <= daysInMonth(+month + 1, year); i++) {
    currentMonth.push(i)
  }

  for (let i = 1; currentMonth.length < 42; i++) {
    currentMonth.push(i)
  }
  return currentMonth
}

export const listDaysCalendarRow = (month: number) => {
  const currentMonth = []
  let tempArr: number[] = []

  for (let i = 1; i <= daysInMonth(+month + 1, year); i++) {
    tempArr.push(i)
    if (tempArr.length === 7) {
      currentMonth.push(tempArr)
      tempArr = []
    } else if (daysInMonth(+month + 1, year) === i) {
      currentMonth.push(tempArr)
      tempArr = []
    }
  }

  return currentMonth
}
