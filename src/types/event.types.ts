import { Dayjs } from 'dayjs'
import { IComments } from './comments.types'
import { TEMPLATES_TYPES } from './template.types'

export enum EStatus {
  ToDo = 'ToDo',
  Progress = 'In progress',
  Completed = 'Completed',
}

export interface IEvent {
  author?: string
  link: string
  time: Dayjs | null
  date: string
  title: string
  text: string
  status: EStatus
  assign: string[]
  tags: string[]
  comments: IComments[]
  type: string
  userId?: string
  imgLink: string
  trash: boolean
  docId?: string
}

export const EMPTY_EVENT: IEvent = {
  author: '',
  link: '',
  time: null,
  date: '',
  title: '',
  text: '',
  status: EStatus.ToDo,
  assign: [],
  tags: [],
  comments: [],
  type: TEMPLATES_TYPES.DEFAULT,
  userId: '',
  imgLink: '',
  trash: false,
}

export interface IMessage {
  title: string
  text: string
}

export const EventTypes = {
  'Reading list': 'Reading list',
  Notes: 'Notes',
  Journey: 'Journey',
  Task: 'Task',
  Films: 'Films',
  Default: 'Default',
}
