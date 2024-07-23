import { FunctionComponent } from 'react'
import Button from '../new/Button'
import { useNoteContext } from '../../hooks/context/useNoteContext'
import { useMain } from '../../hooks/context/useMain'
import { EMPTY_EVENT, IEvent } from '../../types/event.types'
import { UnionType } from '../../types/types'
import { useMediaService } from '../../hooks/services/useMediaService'
import { useEventsService } from '../../hooks/services/useEventsService'
import { EMPTY_TEMPLATE } from '../../types/template.types'
import { EMPTY_MEDIA, IMedia } from '../../types/media.types'
import { useTemplatesService } from '../../hooks/services/useTemplatesService'

interface ModalFooterProps {
  setClose: (close: boolean) => void
  setData: (value: UnionType) => void
  data: UnionType
}

const ModalFooter: FunctionComponent<ModalFooterProps> = ({ setClose, data, setData }) => {
  const { templateType, media } = useNoteContext()
  const { setError, dataList, templates } = useMain()

  const { addMedia } = useMediaService()
  const { addEvent } = useEventsService()
  const { addTemplates } = useTemplatesService()

  const saveNote = () => {
    !media && saveEvent()
    media && saveMedia()
  }

  const saveEvent = () => {
    if (data?.title) {
      const event = data as IEvent
      const findedEvent = dataList?.find((el) => el?.title === data?.title)
      const findedTemplate = templates?.find((el) => {
        if (el?.type === event?.type) return el
      })
      if (findedEvent) {
        setError('Finded some event')
      } else {
        addEvent({ ...event, type: templateType })
        if (!findedTemplate)
          addTemplates({ ...EMPTY_TEMPLATE, type: templateType, title: templateType })
        setClose(false)
        setData(EMPTY_EVENT)
      }
    }
  }
  const saveMedia = () => {
    if (data?.author && data?.title) {
      const media = data as IMedia
      const findedBook = dataList?.find(
        (el) => el?.author === media?.author && el?.title === media?.title
      )
      const findedTemplate = templates?.find((el) => {
        if (el?.type === media?.type) return el
      })
      if (findedBook) {
        setError('Finded some book')
      } else {
        addMedia(data as IMedia)
        if (!findedTemplate)
          addTemplates({ ...EMPTY_TEMPLATE, type: templateType, title: templateType })
        setClose(false)
        setData(EMPTY_MEDIA)
      }
    }
  }
  return (
    <div className=" absolute bottom-5 left-5 right-5 ">
      <div className=" flex items-center justify-between">
        <div className=" flex items-center gap-1">
          <div className=" w-8 h-8 bg-white rounded-full" />
          <div className=" w-8 h-8 bg-white rounded-full" />
        </div>
        <div className=" flex items-center gap-3">
          <Button title="Cancel" onClick={() => setClose(false)} primary />
          <Button title="Add" onClick={saveNote} primary />
        </div>
      </div>
    </div>
  )
}

export default ModalFooter
