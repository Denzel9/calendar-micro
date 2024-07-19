import { FunctionComponent, useState } from 'react'
import { useTemplates } from '../../hooks/context/useTemplates'
import { useEvents } from '../../hooks/context/useEvents'
import { getCurrentWeek } from '../../helpers/getDate'
import { TYPE_ACTION_BUTTON } from '../../components/calendar-item/Action-button'
import { CiStickyNote } from 'react-icons/ci'
import { LuLayoutTemplate } from 'react-icons/lu'
import Input from '../../components/new/Input'
import Section, { MODE } from '../../components/new/section/Section'

const Search: FunctionComponent = () => {
  const [searchString, setSearchString] = useState('')
  const { templates } = useTemplates()
  const { dataList } = useEvents()

  const currentWeekTemplates = templates.filter((el) => getCurrentWeek(el?.date))
  const currentWeekEvents = dataList.filter((el) => getCurrentWeek(el?.date))

  const searchResultEvents = dataList.filter((el) =>
    el.title.toLowerCase().includes(searchString.toLowerCase())
  )
  const searchResultTemplates = templates.filter((el) =>
    el.title.toLowerCase().includes(searchString.toLowerCase())
  )

  return (
    <div>
      <div className=" border-b border-white/50 mt-3">
        <Input
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          placeholder="Search"
        />
      </div>

      {currentWeekTemplates.length || currentWeekEvents.length ? (
        <h2 className=" block mt-5 text-xl">This week</h2>
      ) : null}

      {(searchString && searchResultTemplates.length) || currentWeekTemplates.length ? (
        <Section
          title="Templates"
          items={searchString ? searchResultTemplates : currentWeekTemplates}
          type={TYPE_ACTION_BUTTON.BTN}
          icon={<LuLayoutTemplate />}
          link={''}
          mode={MODE.LIST}
        />
      ) : null}
      {(searchString && searchResultEvents.length) || currentWeekEvents.length ? (
        <Section
          title="Notes"
          items={searchString ? searchResultEvents : currentWeekEvents}
          type={TYPE_ACTION_BUTTON.BTN}
          icon={<CiStickyNote />}
          link={''}
          mode={MODE.LIST}
        />
      ) : null}
    </div>
  )
}

export default Search
