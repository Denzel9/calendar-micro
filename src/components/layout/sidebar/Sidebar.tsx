import { FunctionComponent } from 'react'
import Calendar from './calendar'
import SidebarFilter from './SidebarFilter'
import SidebarCurrentEvent from './SidebarCurrentEvent'

const Sidebar: FunctionComponent = () => {
  return (
    <div className="  p-5 flex flex-col gap-3 border-r-2 border-b-2 border-grey ">
      <Calendar />
      <SidebarCurrentEvent />
      <SidebarFilter />
    </div>
  )
}

export default Sidebar
