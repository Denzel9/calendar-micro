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
          <Route path="/" element={<Home />} />
          <Route path="/desk" element={<CalendarPage />} />
          <Route path="/canban" element={<Canban />} />
          <Route path="/search" element={<Search />} />
          <Route path="/template" element={<Template />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </Layout>
    </MainProvider>
  )
}

export default MainRouter
