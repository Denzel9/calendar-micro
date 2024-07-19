import { FunctionComponent, ReactNode, createContext, useEffect, useState } from 'react'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../config/firebase'
import { useUser } from '../hooks/context/useUser'
import { IMedia } from '../types/media.types'
import { EStatus } from '../types/event.types'

interface IMediaContext {
  dataList: IMedia[]
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void

  data: IMedia
  setData: (data: IMedia) => void
}

export const MediaContext = createContext({} as IMediaContext)

const MediaProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [dataList, setDataList] = useState([] as IMedia[])
  const { id } = useUser()

  const [data, setData] = useState<IMedia>({
    author: '',
    title: '',
    description: '',
    link: '',
    rate: '3',
    status: EStatus.ToDo,
    assign: [],
    tags: [],
    comments: [],
    img: '',
  
  })

  useEffect(() => {
    onSnapshot(query(collection(db, 'media'), where('userId', '==', id)), (snapshot) => {
      const mediaList = snapshot.docs.map((el) => ({
        ...(el.data() as Omit<IMedia, 'docId'>),
        docId: el.id,
      }))

      setDataList(mediaList)
      setIsLoading(false)
    })
  }, [])

  const value = { dataList, isLoading, setIsLoading, data, setData }

  return <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
}

export default MediaProvider
