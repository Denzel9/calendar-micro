import { getPadStartFormatDate, getSliceFormatDay, getSliceFormatMonth } from './formatDate'
import { listDaysCalendarRow } from './getCalendar'

export const d = new Date()
export const today = d.getDate()
export const month = d.getMonth().toString().padStart(2, '0')
export const year = d.getFullYear()

export function getTomorrow() {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 2)
  return weekDays[tomorrow.getDay()]
}

export const weekDays = [
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]
export const weekDaysShorts = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

export const replaceMonthEnd = (word: string) => {
  if (word[word.length - 1] === 'ь') return word.replace('ь', 'я')
  if (word[word.length - 1] === 'т') return word + 'а'
  if (word[word.length - 1] === 'й') return word + 'я'
}

export const getMonthName = (num: number | string) => {
  return months[+num]
}

export const transforDateForDateObj = (date: string) => {
  const arr = date?.split('-')
  return `${arr[2]}-${arr[1]}-${arr[0]}`
}

export const getCurrentWeek = (date: string) => {
  if (getSliceFormatMonth(date) === month) {
    const eventDay = getSliceFormatDay(date)
    const currentDay = getPadStartFormatDate(today)
    const arrWeeks = listDaysCalendarRow(+getSliceFormatMonth(date))
    return arrWeeks.find((el) => el.includes(+currentDay) && el.includes(+eventDay))
  }
}
