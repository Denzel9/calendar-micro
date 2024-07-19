import { onSnapshot, query, collection,  where } from 'firebase/firestore'
import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import { db } from '../config/firebase'
import { ITemplate } from '../types/template.types'
import { useUser } from '../hooks/context/useUser'

interface IUserContext {
  templates: ITemplate[]
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

export const TemplatesContext = createContext<IUserContext>({} as IUserContext)

const TemplatesProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [templates, setTemplates] = useState([] as ITemplate[])
  const { id } = useUser()

  useEffect(() => {
    onSnapshot(
      query(collection(db, 'templates'), where('userId', '==', id)),
      (snapshot) => {
        const templatesList = snapshot.docs.map((el) => ({
          ...(el.data() as Omit<ITemplate, 'docId'>),
          docId: el.id,
        }))

        setTemplates(templatesList)
        setIsLoading(false)
      }
    )
  }, [])

  const value = { templates, isLoading, setIsLoading }

  return <TemplatesContext.Provider value={value}>{children}</TemplatesContext.Provider>
}

export default TemplatesProvider
