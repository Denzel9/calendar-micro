import { FunctionComponent } from 'react'

import classNames from 'classnames'
import { TiWeatherPartlySunny } from 'react-icons/ti'

const Navbar: FunctionComponent = () => {
  return (
    <div
      className={classNames(
        ' flex p-5  top-0 left-0 right-0 justify-between items-center z-10',
        'border-b-2 border-grey bg-black fixed'
      )}
    >
      <div className=" pl-24 flex justify-between items-center w-full">
        <p className=" text-4xl">{'Calendar'}</p>
        <div className=" flex gap-3">
          <button className=" bg-dark w-24 h-10 rounded-xl p-1 flex items-center justify-center">
            <div className=" flex items-center gap-2">
              <TiWeatherPartlySunny size={20} />
              <p>24°C</p>
            </div>
          </button>
          <button className=" relative rounded-full w-10 h-10 bg-dark border border-green-800">
            <div className=" w-3 h-3 bg-green-800 rounded-full border-2 border-black absolute right-0 bottom-0" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
