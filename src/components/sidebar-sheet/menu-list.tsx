import { IoIosSearch, IoMdHome, IoIosCalendar } from 'react-icons/io'
import { LuLayoutTemplate } from "react-icons/lu";

export const menuList = [
  { title: 'Search', icon: <IoIosSearch />, link: 'search' },
  { title: 'Home', icon: <IoMdHome />, link: '/calendar' },
  { title: 'Calendar', icon: <IoIosCalendar />, link: 'desk' },
  { title: 'Desk', icon: <LuLayoutTemplate />, link: 'canban' },
]
