import { IoIosSearch, IoMdHome, IoIosCalendar } from 'react-icons/io'
import { LuLayoutTemplate } from "react-icons/lu";

export const menuList = [
  { title: 'Search', icon: <IoIosSearch />, link: '/calendar/search' },
  { title: 'Home', icon: <IoMdHome />, link: '/calendar' },
  { title: 'Calendar', icon: <IoIosCalendar />, link: '/calendar/desk' },
  { title: 'Desk', icon: <LuLayoutTemplate />, link: '/calendar/canban' },
]
