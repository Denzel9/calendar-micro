import { useContext } from 'react'
import { MediaContext } from '../../providers/MediaProvider'
import { TemplatesContext } from '../../providers/TemplatesProvider'
import { EventsContext } from '../../providers/EventsProvider'
import { ErrorContext } from '../../providers/ErrorProvider'
import { TEMPLATES_TYPES } from '../../types/template.types'
import { NoteContext } from '../../providers/NoteProvider'

export const useMain = () => {
  const media = useContext(MediaContext)
  const templates = useContext(TemplatesContext)
  const events = useContext(EventsContext)
  const error = useContext(ErrorContext)
  const { templateType } = useContext(NoteContext)

  if (
    templateType === TEMPLATES_TYPES.DEFAULT ||
    templateType === TEMPLATES_TYPES.TASK ||
    templateType === TEMPLATES_TYPES.NOTES
  )
    return { ...events, ...templates, ...error }
  if (templateType === TEMPLATES_TYPES.READING_LIST || templateType === TEMPLATES_TYPES.FILMS)
    return { ...media, ...templates, ...error }
}
