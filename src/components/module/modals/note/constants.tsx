import { FaRegStickyNote, FaTasks } from 'react-icons/fa'
import { FaBook, FaPlus } from 'react-icons/fa6'
import { TfiLayoutWidthDefaultAlt } from 'react-icons/tfi'
import { PiFilmSlate } from 'react-icons/pi'

export const TEMPLATES = [
  { title: 'Reading list', icon: <FaBook /> },
  { title: 'Notes', icon: <FaRegStickyNote /> },
  { title: 'Task', icon: <FaTasks /> },
  { title: 'Films', icon: <PiFilmSlate /> },
  { title: 'Default', icon: <TfiLayoutWidthDefaultAlt /> },
  { title: 'New template', icon: <FaPlus /> },
]
