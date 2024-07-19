import { Dayjs } from 'dayjs'
import { IComments } from './comments.types'

export enum TEMPLATES_TYPES {
  READING_LIST = 'Reading list',
  NOTES = 'Notes',
  TASK = 'Task',
  FILMS = 'Films',
  DEFAULT = 'Default',
}

export interface ITemplate {
  author: string
  date: string
  title: string
  text: string
  tags: string[]
  type: TEMPLATES_TYPES
  time?: Dayjs
  link: string
  imgLink: string
  assign: string[]
  comments: IComments[]
  userId: string
  trash: boolean
  docId?: string
}

export const EMPTY_TEMPLATE: ITemplate = {
  author: '',
  link: '',
  time: null,
  date: '',
  title: '',
  text: '',
  assign: [],
  tags: [],
  comments: [],
  userId: '',
  imgLink: '',
  trash: false,
  type: TEMPLATES_TYPES.READING_LIST,
}
