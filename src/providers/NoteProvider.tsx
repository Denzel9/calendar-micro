import { createContext, FunctionComponent, PropsWithChildren, useEffect, useState } from 'react'
import { TEMPLATES_TYPES } from '../types/template.types'
import { useUser } from '../hooks/context/useUser'
import { IComments } from '../types/comments.types'
import { today, month, year } from '../helpers/getDate'

interface INoteProvider {
  setIsOpenModal: (isOpenModal: boolean) => void
}

interface INoteContext {
  templateType: TEMPLATES_TYPES
  setTemplateType: (templateType: TEMPLATES_TYPES) => void
  comment: IComments
  setComment: (comment: IComments) => void
  media: boolean
}

export const NoteContext = createContext({} as INoteContext)

const NoteProvider: FunctionComponent<PropsWithChildren<INoteProvider>> = ({ children }) => {
  const { user } = useUser()
  const [templateType, setTemplateType] = useState(TEMPLATES_TYPES.DEFAULT)
  const [comment, setComment] = useState<IComments>({
    author: user?.name,
    comment: '',
    date: `${today}-${month}-${year}`,
  })

  const media =  templateType === TEMPLATES_TYPES.READING_LIST ||  templateType === TEMPLATES_TYPES.FILMS


  useEffect(() => setComment({ ...comment, author: user?.name }), [user])

  const value = { templateType, setTemplateType, comment, setComment,media }
  return <NoteContext.Provider value={value}>{children}</NoteContext.Provider>
}

export default NoteProvider
