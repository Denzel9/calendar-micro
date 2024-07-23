import './input.scss'
import { FunctionComponent } from 'react'
import { useEvents } from '../../../hooks/context/useEvents'
import { IEvent } from '../../../types/event.types'
import { useCalendar } from '../../../hooks/context/useCalendar'
import ListItem from '../../new/ListItem'

const SidebarFilter: FunctionComponent = () => {
  const { dataList } = useEvents()
  const { filterCalendar, setFilterCalendar } = useCalendar()

  const eventsObj: { [name: string]: IEvent[] } = {}

  for (let i = 0; i < dataList.length; i++) {
    const element = dataList[i]

    if (eventsObj[element?.type]) {
      eventsObj[element?.type] = [...eventsObj[element?.type], element]
    } else eventsObj[element?.type] = [element]
  }

  const handleChangeFilter = (mode: string) => {
    if (filterCalendar.includes(mode)) {
      const newArr = filterCalendar.filter((el) => el !== mode)
      setFilterCalendar(newArr)
    } else setFilterCalendar([...filterCalendar, mode])
  }

  return (
    <div className=" w-full p-5 rounded-lg text-white bg-zinc-800">
      <h2 className=" opacity-50">Templates</h2>
      <div>
        {Object.keys(eventsObj).length ? (
          <>
            <ListItem
              title="All"
              value={
                <input
                  type="checkbox"
                  value={'All'}
                  onChange={() => handleChangeFilter('All')}
                  checked={filterCalendar.includes('All')}
                />
              }
            />
            {Object.keys(eventsObj)?.map((event) => {
              return (
                <ListItem
                  key={event + Math.random()}
                  title={event}
                  titleMark={eventsObj[event].length}
                  value={
                    <input
                      type="checkbox"
                      value={event}
                      onChange={() => handleChangeFilter(event)}
                      checked={filterCalendar.includes(event)}
                    />
                  }
                />
              )
            })}
          </>
        ) : (
          <p className=' opacity-50'>Empty</p>
        )}
      </div>
    </div>
  )
}

export default SidebarFilter
