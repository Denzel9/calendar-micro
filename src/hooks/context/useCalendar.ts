import { useContext } from "react"
import { CalendarContext } from "../../providers/CalendarProvider"


export const useCalendar = () => {
  const calendar = useContext(CalendarContext)
  return { ...calendar }
}
