import { Dayjs } from 'dayjs'
import { IComments } from './comments.types'
import { EStatus } from './event.types'
import { TEMPLATES_TYPES } from './template.types'

export interface IMedia {
  author: string
  img: string
  title: string
  description: string
  rate: string
  status: EStatus
  link: string
  assign: string[]
  tags: string[]
  time?: Dayjs
  comments: IComments[]
  docId?: string
  userId?: string
  type?: TEMPLATES_TYPES
}

export const EMPTY_MEDIA = {
  author: '',
  img: '',
  title: '',
  description: '',
  rate: '',
  link: '',
  status: EStatus.ToDo,
  assign: [] as string[],
  tags: [] as string[],
  comments: [] as IComments[],
  type: TEMPLATES_TYPES.FILMS,
}
