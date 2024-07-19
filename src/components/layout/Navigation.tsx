import { FunctionComponent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import Button from '../new/Button'
import MenuButton from '../../pages/calendar/navigation/MenuButton'

const Navigation: FunctionComponent = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const title = () => {
    if (pathname === '/calendar') return 'Home'
    if (pathname === '/calendar/search') return 'Search events or templates'
    if (pathname === '/calendar/canban') return 'Canban'
  }
  return (
    <div className=" flex items-center justify-between mb-5">
      {pathname === '/calendar/template' || pathname === '/calendar/event' ? (
        <Button onClick={() => navigate(-1)} title={'Back'} icon={<IoIosArrowBack />} primary />
      ) : (
        <p className=" text-3xl">{title()}</p>
      )}
      <MenuButton />
    </div>
  )
}

export default Navigation
