import { month, months } from '../../../../helpers/getDate'

export const useMonthData = () => {
  const currenyMonth = months.indexOf(months[+month])

  const monthRange = months
    .slice(currenyMonth - 3, currenyMonth)
    .concat(months.slice(currenyMonth, currenyMonth + 4))

  return { monthRange }
}
