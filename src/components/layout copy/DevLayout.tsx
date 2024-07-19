import { FunctionComponent, ReactNode,  } from 'react'
import Navbar from './Navbar'
import Sidebar from './sidebar/Sidebar'

const DevLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className=" flex">
        <Sidebar />
        <div className=" bg-black pl-24 pt-20 w-full h-full ">{children}</div>
      </div>
    </div>
  )
}

export default DevLayout
