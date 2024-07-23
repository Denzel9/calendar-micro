import { FunctionComponent, useState } from 'react'
import Modal from '../modal'
import { useModal } from '../../hooks/context/useModal'
import Input from '../new/Input'
import { TYPE_ACTION_BUTTON } from '../calendar-item/Action-button'
import { useEvents } from '../../hooks/context/useEvents'
import { useTemplates } from '../../hooks/context/useTemplates'
import { CiStickyNote } from 'react-icons/ci'
import { LuLayoutTemplate } from 'react-icons/lu'
import Button from '../new/Button'
import { useEventsService } from '../../hooks/services/useEventsService'
import Section, { MODE } from '../new/section/Section'

const Trash: FunctionComponent = () => {
  const { setIsOpenTrash, isOpenTrash } = useModal()
  const { dataList } = useEvents()
  const { deleteEvent } = useEventsService()
  const { templates } = useTemplates()
  const [search, setSearch] = useState('')

  const trashEvents = dataList?.filter((el) => el?.trash)
  const trashTemplates = templates?.filter((el) => el?.trash)

  const clearTrash = () => {
    for (let i = 0; i < trashEvents.length; i++) {
      const element = trashEvents[i]
      deleteEvent(element?.docId)
    }
  }

  return (
    <Modal isOpenModal={isOpenTrash} setIsOpenModal={setIsOpenTrash}>
      <Input
        value={search}
        placeholder={'Search in trash'}
        onChange={(e) => setSearch(e.target.value)}
      />
      {!!trashEvents.length && (
        <Section
          title={'Events'}
          icon={<CiStickyNote />}
          items={trashEvents}
          link={'/calendar/event'}
          mode={MODE.CARD}
          type={TYPE_ACTION_BUTTON.TRASH}
        />
      )}
      {!!trashTemplates.length && (
        <Section
          title={'Templates'}
          icon={<LuLayoutTemplate />}
          items={trashTemplates}
          link={'/calendar/templates'}
          mode={MODE.CARD}
          type={TYPE_ACTION_BUTTON.TRASH}
        />
      )}

      <Button title="Clear trash" onClick={clearTrash} style="absolute right-5 bottom-5" primary />
    </Modal>
  )
}

export default Trash
