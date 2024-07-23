import { FunctionComponent } from 'react'
import { useTemplates } from '../../hooks/context/useTemplates'
import { useEvents } from '../../hooks/context/useEvents'
import UpcomingEvents from './ui/upcoming-events/UpcomingEvents'
import { TYPE_ACTION_BUTTON } from '../../components/calendar-item/Action-button'
import Section, { VARIABLE, MODE } from '../../components/new/section/Section'

const Home: FunctionComponent = () => {
  const { templates } = useTemplates()
  const { dataList } = useEvents()

  return (
    <>
      <UpcomingEvents />
      {templates?.length ? (
        <Section
          title={VARIABLE.TEMPLATES}
          items={templates}
          type={TYPE_ACTION_BUTTON.BTN}
          mode={MODE.CARD}
          link="template"
          noTrash
        />
      ) : null}
      {dataList?.length ? (
        <Section
          title={VARIABLE.EVENTS}
          items={dataList}
          type={TYPE_ACTION_BUTTON.BTN}
          mode={MODE.CARD}
          link="event"
          noTrash
        />
      ) : null}
    </>
  )
}

export default Home
