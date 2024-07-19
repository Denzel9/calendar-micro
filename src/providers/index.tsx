import { FunctionComponent, ReactNode } from 'react'
import CalendarProvider from './CalendarProvider'
import EventsProvider from './EventsProvider'
import ModalProvider from './ModalProvider'
import TemplatesProvider from './TemplatesProvider'
import UserProvider from './UserProvider'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import ErrorProvider from './ErrorProvider'
import MediaProvider from './MediaProvider'

const MainProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="de">
      <UserProvider>
        <MediaProvider>
          <TemplatesProvider>
            <EventsProvider>
              <CalendarProvider>
                <ErrorProvider>
                  <ModalProvider>{children}</ModalProvider>
                </ErrorProvider>
              </CalendarProvider>
            </EventsProvider>
          </TemplatesProvider>
        </MediaProvider>
      </UserProvider>
    </LocalizationProvider>
  )
}

export default MainProvider
