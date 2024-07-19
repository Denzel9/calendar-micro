import { FunctionComponent } from 'react'
import CalendarPage from './pages/calendar/CalendarPage'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Template from './pages/template/Template'
import Home from './pages/home/Home'
import Search from './pages/search/Search'
import Event from './pages/event/Event'
import MainProvider from './providers'
import Canban from './pages/canban/Canban'

const MainRouter: FunctionComponent = () => {
  return (
    <MainProvider>
      <Layout>
        <Routes>
          <Route path="/calendar" element={<Home />} />
          <Route path="/calendar/desk" element={<CalendarPage />} />
          <Route path="/calendar/canban" element={<Canban />} />
          <Route path="/calendar/search" element={<Search />} />
          <Route path="/calendar/template" element={<Template />} />
          <Route path="/calendar/event" element={<Event />} />
        </Routes>
      </Layout>
    </MainProvider>
  )
}

export default MainRouter
