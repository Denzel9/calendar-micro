import { FaRegStickyNote, FaTasks } from "react-icons/fa"
import { FaBook } from "react-icons/fa6"
import { MdOutlineTravelExplore } from "react-icons/md"
import { PiFilmSlate } from "react-icons/pi"

export const TEMPLATES = [
  { title: 'Reading list', icon: <FaBook /> },
  { title: 'Notes', icon: <FaRegStickyNote /> },
  { title: 'Journey', icon: <MdOutlineTravelExplore /> },
  { title: 'Task', icon: <FaTasks /> },
  { title: 'Films', icon: <PiFilmSlate /> },
]
