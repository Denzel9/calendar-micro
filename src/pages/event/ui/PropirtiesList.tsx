import { FunctionComponent, useState } from 'react'
import { MdAdd } from 'react-icons/md'
import StatusButton from './StatusButton'
import { EStatus, IEvent } from '../../../types/event.types'
import Button from '../../../components/new/Button'
import PropirtyItem from './PropirtyItem'
import { FaMinus } from 'react-icons/fa6'
import Calendar from '../../../components/layout/sidebar/calendar'
import { useCalendar } from '../../../hooks/context/useCalendar'
import { useEventsService } from '../../../hooks/services/useEventsService'
import MUITimePicker from '../../../components/TimePicker'
import dayjs from 'dayjs'
import { getPadStartFormatDate } from '../../../helpers/formatDate'
import Input from '../../../components/new/Input'
import { useUser } from '../../../hooks/context/useUser'
import CustomSelect from '../../../components/CustomSelect'
import { useTemplates } from '../../../hooks/context/useTemplates'
import { names } from '../../../components/module/modals/note/Content'
import { IMedia } from '../../../types/media.types'
import { useMediaService } from '../../../hooks/services/useMediaService'

interface PropirtiesListProps {
  event: IEvent
  setEvent: (event: IEvent | IMedia) => void
}

const PropirtiesList: FunctionComponent<PropirtiesListProps> = ({ event, setEvent }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenTags, setIsOpenTags] = useState(false)
  const [isOpenAssign, setIsOpenAssign] = useState(false)
  const [isOpenTemplates, setIsOpenTemplates] = useState(false)
  const [isOpenRate, setIsOpenRate] = useState(false)
  const {
    updateEventDate,
    updateEventTime,
    updateEventLink,
    updateEventText,
    updateEventTags,
    updateEventTemplate,
    updateEventAssign,
  } = useEventsService()
  const { updateMediaRate, updateMediaImage } = useMediaService()
  const { templates } = useTemplates()
  const { date } = useCalendar()
  const { user } = useUser()
  const { updateEventStatus } = useEventsService()
  const mediaType = event?.type
  const mediaEvent = event as unknown as IMedia

  return (
    <div className=" flex flex-col gap-1 w-full">
      <PropirtyItem title="Author" value={event?.author} notEdit />
      <PropirtyItem
        title="Status"
        value={
          <StatusButton
            setStatus={(el: EStatus) => setEvent({ ...event, status: el })}
            status={event?.status}
            id={event?.docId}
            onClick={updateEventStatus}
          />
        }
        notEdit
      />

      {!mediaType && (
        <PropirtyItem
          title="Date"
          value={event?.date}
          onClick={() => {
            setEvent({ ...event, date: date })
            updateEventDate(event?.docId, date)
          }}
          withWidget
          editElement={<Calendar style="absolute top-8" />}
        />
      )}

      {!mediaType && (
        <PropirtyItem
          title="Summary"
          value={event?.text}
          onClick={() => updateEventText(event?.docId, event?.text)}
          onChange={() => setEvent({ ...event, text: '' })}
          editElement={
            <Input
              value={event?.text}
              placeholder={'Empty'}
              onChange={(e) => setEvent({ ...event, text: e.target.value })}
              style="w-full"
            />
          }
        />
      )}

      {mediaType && (
        <>
          <PropirtyItem
            title="Link"
            value={event?.link}
            onClick={() => updateEventLink(event?.docId, event?.link)}
            editElement={
              <Input
                value={event?.link}
                placeholder={'Empty'}
                onChange={(e) => setEvent({ ...event, link: e.target.value })}
                style="mt-0"
              />
            }
          />
          <PropirtyItem
            title="Image link"
            value={'link'}
            onClick={() => updateMediaImage(event?.docId, mediaEvent?.img)}
            editElement={
              <Input
                value={mediaEvent?.img}
                placeholder={'Empty'}
                onChange={(e) => setEvent({ ...mediaEvent, img: e.target.value })}
                style="mt-0"
              />
            }
          />
          <PropirtyItem
            title="Rate"
            value={mediaEvent?.rate}
            onClick={() => updateMediaRate(mediaEvent?.docId, mediaEvent?.rate)}
            editElement={
              <CustomSelect
                isOpen={isOpenRate}
                setIsOpen={setIsOpenRate}
                data={mediaEvent}
                setData={(el: string) => setEvent({ ...mediaEvent, rate: el })}
                list={['1', '2', '3', '4', '5']}
                value={mediaEvent?.rate}
              />
            }
          />
        </>
      )}

      {!mediaType && (
        <Button
          title={`${isOpen ? 'Hide' : 'Show'} more propirties`}
          icon={isOpen ? <FaMinus /> : <MdAdd />}
          onClick={() => setIsOpen(!isOpen)}
          style="w-fit"
          primary
        />
      )}

      {!mediaType && isOpen && (
        <>
          {!mediaType && (
            <PropirtyItem
              title="Time"
              value={event?.time.toString()}
              withWidget
              onChange={() => setEvent({ ...event, time: null })}
              onClick={() =>
                updateEventTime(
                  event?.docId,
                  `${event?.time?.hour()}:${getPadStartFormatDate(event?.time?.minute())}`
                )
              }
              editElement={
                <div className=" absolute top-10 z-10 bg-dark border border-white rounded-xl">
                  <MUITimePicker
                    value={(event?.time && dayjs(event?.time)) || null}
                    setEvent={(e) => setEvent({ ...event, time: e })}
                  />
                </div>
              }
            />
          )}

          <PropirtyItem
            title="Link"
            value={event?.link}
            onClick={() => updateEventLink(event?.docId, event?.link)}
            editElement={
              <Input
                value={event?.link}
                placeholder={'Empty'}
                onChange={(e) => setEvent({ ...event, link: e.target.value })}
                style="mt-0"
              />
            }
          />

          <PropirtyItem
            title="Assign"
            value={event?.assign}
            onClick={() => updateEventAssign(event?.docId, event?.assign)}
            onChange={() => setEvent({ ...event, assign: [] })}
            placeholder="people"
            editElement={
              <CustomSelect
                isOpen={isOpenAssign}
                setIsOpen={setIsOpenAssign}
                data={event}
                setData={(el: string[]) => setEvent({ ...(event as IEvent), assign: el })}
                list={names}
                value={event?.assign}
                isMultiply
                placeholder="people"
              />
            }
          />

          <PropirtyItem
            title="Tags"
            value={event?.tags}
            onClick={() => updateEventTags(event?.docId, event?.tags)}
            onChange={() => setEvent({ ...event, tags: [] })}
            placeholder="tags"
            editElement={
              <CustomSelect
                isOpen={isOpenTags}
                setIsOpen={setIsOpenTags}
                data={event}
                value={event?.tags}
                setData={(el) => setEvent({ ...event, tags: el as string[] })}
                list={user?.tags}
                isMultiply
                placeholder="tags"
              />
            }
          />
          <PropirtyItem
            title="Template"
            value={event?.type}
            onClick={() => updateEventTemplate(event?.docId, event?.type)}
            onChange={() => setEvent({ ...event, type: event?.type })}
            editElement={
              <CustomSelect
                isOpen={isOpenTemplates}
                setIsOpen={setIsOpenTemplates}
                value={event?.type}
                data={event}
                setData={(el: string) => setEvent({ ...event, type: el })}
                list={templates?.map((el) => el?.title)}
              />
            }
          />
        </>
      )}
    </div>
  )
}

export default PropirtiesList
